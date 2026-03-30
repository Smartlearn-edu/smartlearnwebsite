import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API = "/api/testimonials";

export interface Testimonial {
  id: number;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  company: string;
  companyAr: string;
  image: string;
  quote: string;
  quoteAr: string;
  story: string;
  storyAr: string;
  outcome: string;
  outcomeAr: string;
  serviceSlug: string | null;
  featured: boolean;
  displayOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

function rowToTestimonial(row: Record<string, unknown>): Testimonial {
  return {
    id: Number(row.id),
    name: String(row.name ?? ""),
    nameAr: String(row.nameAr ?? ""),
    role: String(row.role ?? ""),
    roleAr: String(row.roleAr ?? ""),
    company: String(row.company ?? ""),
    companyAr: String(row.companyAr ?? ""),
    image: String(row.image ?? ""),
    quote: String(row.quote ?? ""),
    quoteAr: String(row.quoteAr ?? ""),
    story: String(row.story ?? ""),
    storyAr: String(row.storyAr ?? ""),
    outcome: String(row.outcome ?? ""),
    outcomeAr: String(row.outcomeAr ?? ""),
    serviceSlug: row.serviceSlug ? String(row.serviceSlug) : null,
    featured: Boolean(row.featured),
    displayOrder: Number(row.displayOrder ?? 0),
    active: Boolean(row.active),
    createdAt: String(row.createdAt ?? ""),
    updatedAt: String(row.updatedAt ?? ""),
  };
}

async function fetchTestimonials(): Promise<Testimonial[]> {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch testimonials");
  const rows = await res.json();
  return rows.map(rowToTestimonial);
}

export function useTestimonials() {
  return useQuery<Testimonial[], Error>({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 60_000,
  });
}

export function useAdminTestimonials(token: string | null) {
  const qc = useQueryClient();

  const createTestimonial = useMutation({
    mutationFn: async (body: Partial<Testimonial>) => {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["testimonials"] }),
  });

  const updateTestimonial = useMutation({
    mutationFn: async ({ id, ...body }: Partial<Testimonial> & { id: number }) => {
      const res = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["testimonials"] }),
  });

  const deleteTestimonial = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["testimonials"] }),
  });

  return { createTestimonial, updateTestimonial, deleteTestimonial };
}
