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
  const staticMatch = staticPlugins.find((sp) => sp.slug === row.slug);
  return {
    name: String(row.name ?? staticMatch?.name ?? ""),
    nameAr: String(row.nameAr ?? staticMatch?.nameAr ?? ""),
    slug: String(row.slug ?? staticMatch?.slug ?? ""),
    type: String(row.type ?? staticMatch?.type ?? ""),
    moodle: String(row.moodle ?? staticMatch?.moodle ?? ""),
    category: (row.category ?? staticMatch?.category) as Plugin["category"],
    categoryAr: (row.categoryAr ?? staticMatch?.categoryAr) as Plugin["categoryAr"],
    free: Boolean(row.free ?? staticMatch?.free),
    paidSupport: Boolean(row.paidSupport ?? staticMatch?.paidSupport),
    placeholder: Boolean(row.placeholder ?? staticMatch?.placeholder),
    price: row.price != null ? Number(row.price) : (staticMatch?.price ?? null),
    buyUrl: row.buyUrl ? String(row.buyUrl) : staticMatch?.buyUrl,
    downloadUrl: row.downloadUrl ? String(row.downloadUrl) : staticMatch?.downloadUrl,
    requiresSetup: Boolean(row.requiresSetup ?? staticMatch?.requiresSetup),
    setupPrice: row.setupPrice != null ? Number(row.setupPrice) : staticMatch?.setupPrice,
    features: Array.isArray(row.features) && row.features.length > 0 ? (row.features as string[]) : (staticMatch?.features ?? []),
    featuresAr: Array.isArray(row.featuresAr) && row.featuresAr.length > 0 ? (row.featuresAr as string[]) : (staticMatch?.featuresAr ?? []),
    images: Array.isArray(row.images) && row.images.length > 0 ? (row.images as string[]) : (staticMatch?.images ?? []),
    freemiusProductId: row.freemiusProductId ? String(row.freemiusProductId) : staticMatch?.freemiusProductId,
    freemiusPlanId: row.freemiusPlanId ? String(row.freemiusPlanId) : staticMatch?.freemiusPlanId,
    freemiusPublicKey: row.freemiusPublicKey ? String(row.freemiusPublicKey) : staticMatch?.freemiusPublicKey,
    description: String(row.description ?? staticMatch?.description ?? ""),
    descriptionAr: String(row.descriptionAr ?? staticMatch?.descriptionAr ?? ""),
    tags: Array.isArray(row.tags) && row.tags.length > 0 ? (row.tags as string[]) : (staticMatch?.tags ?? []),
    tagsAr: Array.isArray(row.tagsAr) && row.tagsAr.length > 0 ? (row.tagsAr as string[]) : (staticMatch?.tagsAr ?? []),
  };
}

export function usePlugins() {
  return useQuery<Plugin[], Error>({
    queryKey: ["plugins"],
    queryFn: fetchPlugins,
    placeholderData: staticPlugins,
    staleTime: 60_000,
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
