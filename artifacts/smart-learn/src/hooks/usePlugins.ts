import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { plugins as staticPlugins } from "@/data/plugins";
import type { Plugin } from "@/data/plugins";

const API = "/api/plugins";

async function fetchPlugins(): Promise<Plugin[]> {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch");
  const rows = await res.json();
  return rows.map(rowToPlugin);
}

async function fetchPlugin(slug: string): Promise<Plugin> {
  const res = await fetch(`${API}/${slug}`);
  if (!res.ok) throw new Error("Not found");
  return rowToPlugin(await res.json());
}

function rowToPlugin(row: Record<string, unknown>): Plugin {
  return {
    name: String(row.name ?? ""),
    nameAr: String(row.nameAr ?? ""),
    slug: String(row.slug ?? ""),
    type: String(row.type ?? ""),
    moodle: String(row.moodle ?? ""),
    category: row.category as Plugin["category"],
    categoryAr: row.categoryAr as Plugin["categoryAr"],
    free: Boolean(row.free),
    paidSupport: Boolean(row.paidSupport),
    placeholder: Boolean(row.placeholder),
    price: row.price != null ? Number(row.price) : null,
    buyUrl: row.buyUrl ? String(row.buyUrl) : undefined,
    downloadUrl: row.downloadUrl ? String(row.downloadUrl) : undefined,
    requiresSetup: Boolean(row.requiresSetup),
    setupPrice: row.setupPrice != null ? Number(row.setupPrice) : undefined,
    features: Array.isArray(row.features) ? (row.features as string[]) : [],
    featuresAr: Array.isArray(row.featuresAr) ? (row.featuresAr as string[]) : [],
    images: Array.isArray(row.images) ? (row.images as string[]) : [],
    description: String(row.description ?? ""),
    descriptionAr: String(row.descriptionAr ?? ""),
  };
}

export function usePlugins() {
  return useQuery<Plugin[], Error>({
    queryKey: ["plugins"],
    queryFn: fetchPlugins,
    initialData: staticPlugins,
    staleTime: 0,
  });
}

export function usePlugin(slug: string) {
  const { data: all } = usePlugins();
  return useQuery<Plugin, Error>({
    queryKey: ["plugins", slug],
    queryFn: () => fetchPlugin(slug),
    initialData: () => all?.find((p) => p.slug === slug),
    staleTime: 30_000,
    enabled: !!slug,
  });
}

export function useAdminPlugins(token: string | null) {
  const qc = useQueryClient();

  const createPlugin = useMutation({
    mutationFn: async (body: Partial<Plugin>) => {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["plugins"] }),
  });

  const updatePlugin = useMutation({
    mutationFn: async ({ id, ...body }: Partial<Plugin> & { id: number }) => {
      const res = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["plugins"] }),
  });

  const deletePlugin = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["plugins"] }),
  });

  return { createPlugin, updatePlugin, deletePlugin };
}

export { rowToPlugin };
