import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  LogIn, LogOut, Plus, Pencil, Trash2, Save, X, ChevronDown, ChevronUp,
  Shield, Eye, EyeOff, AlertCircle, CheckCircle2, Loader2,
} from "lucide-react";
import { useT } from "@/i18n";
import { Navbar } from "@/components/Navbar";
import type { Plugin } from "@/data/plugins";
import type { Testimonial } from "@/hooks/useTestimonials";

const BASE = "/api";

type DbPlugin = Plugin & { id: number };

function rowToPlugin(row: Record<string, unknown>): DbPlugin {
  return {
    id: Number(row.id),
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

const EMPTY_FORM: Partial<DbPlugin> = {
  name: "", nameAr: "", slug: "", type: "local", moodle: "Moodle 4.0+",
  category: "AI-Powered", categoryAr: "مدعوم بالذكاء الاصطناعي",
  free: false, paidSupport: false, placeholder: false,
  price: 50, features: [], featuresAr: [], images: [],
  description: "", descriptionAr: "",
};

const CATEGORY_OPTIONS: Plugin["category"][] = [
  "AI-Powered", "Analytics & Reporting", "Course Tools", "Platform & Admin",
];
const CATEGORY_AR_MAP: Record<Plugin["category"], Plugin["categoryAr"]> = {
  "AI-Powered": "مدعوم بالذكاء الاصطناعي",
  "Analytics & Reporting": "التحليلات والتقارير",
  "Course Tools": "أدوات المقرر",
  "Platform & Admin": "المنصة والإدارة",
};
const TYPE_OPTIONS = ["local", "mod", "report", "gradereport", "enrol", "paygw", "theme", "block"];

const SERVICE_SLUG_OPTIONS = [
  { value: "", label: "— None —" },
  { value: "n8n", label: "n8n Automation" },
  { value: "ai", label: "AI Integration" },
  { value: "moodle-core", label: "Moodle Core" },
  { value: "training", label: "Training" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "plugins", label: "Plugins" },
];

const EMPTY_TESTIMONIAL: Partial<Testimonial> = {
  name: "", nameAr: "", role: "", roleAr: "",
  company: "", companyAr: "", image: "",
  quote: "", quoteAr: "", story: "", storyAr: "",
  outcome: "", outcomeAr: "", serviceSlug: null,
  featured: true, displayOrder: 0, active: true,
};

const s = {
  input: {
    width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(168,85,247,0.25)",
    borderRadius: 8, padding: "8px 12px", color: "#e2e8f0", fontSize: 14, outline: "none",
  } as React.CSSProperties,
  label: { fontSize: 12, color: "#94a3b8", fontWeight: 600, marginBottom: 4, display: "block" } as React.CSSProperties,
  card: {
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,85,247,0.15)",
    borderRadius: 12, padding: "20px 24px",
  } as React.CSSProperties,
  btn: (color: string) => ({
    display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px",
    borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
    background: color, color: "#fff",
  } as React.CSSProperties),
};

function useAuth() {
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem("admin_token"));
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const res = await fetch(`${BASE}/admin/login`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Wrong password"); return; }
      sessionStorage.setItem("admin_token", data.token);
      setToken(data.token);
      setPw("");
    } catch { setError("Network error"); }
    finally { setLoading(false); }
  }, [pw]);

  const logout = useCallback(() => {
    sessionStorage.removeItem("admin_token");
    setToken(null);
  }, []);

  return { token, pw, setPw, showPw, setShowPw, error, loading, login, logout };
}

function LoginForm({ auth }: { auth: ReturnType<typeof useAuth> }) {
  const { pw, setPw, showPw, setShowPw, error, loading, login } = auth;
  return (
    <div style={{ minHeight: "100vh", background: "#07070f", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ width: "100%", maxWidth: 360 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16, margin: "0 auto 16px",
              background: "rgba(105,0,163,0.2)", border: "1px solid rgba(168,85,247,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Shield size={24} style={{ color: "#a855f7" }} />
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#fff", margin: "0 0 6px" }}>Admin Panel</h1>
            <p style={{ fontSize: 14, color: "#64748b" }}>Smart Learn Plugin Manager</p>
          </div>

          <div style={s.card}>
            <label style={s.label}>Password</label>
            <div style={{ position: "relative", marginBottom: 16 }}>
              <input
                type={showPw ? "text" : "password"}
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="Enter admin password"
                style={{ ...s.input, paddingRight: 40 }}
                autoFocus
              />
              <button onClick={() => setShowPw((v) => !v)} style={{
                position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer", color: "#64748b",
              }}>
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {error && (
              <div style={{ display: "flex", gap: 8, alignItems: "center", color: "#f87171", fontSize: 13, marginBottom: 12 }}>
                <AlertCircle size={14} /> {error}
              </div>
            )}

            <button onClick={login} disabled={loading || !pw} style={{
              ...s.btn("linear-gradient(135deg,#6900A3,#a855f7)"),
              width: "100%", justifyContent: "center", opacity: loading || !pw ? 0.6 : 1,
            }}>
              {loading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type FormMode = "create" | "edit";

function PluginForm({
  initial, mode, onSave, onCancel, loading,
}: {
  initial: Partial<DbPlugin>;
  mode: FormMode;
  onSave: (data: Partial<DbPlugin>) => void;
  onCancel: () => void;
  loading: boolean;
}) {
  const [form, setForm] = useState<Partial<DbPlugin>>(initial);
  const [featStr, setFeatStr] = useState((initial.features ?? []).join("\n"));
  const [featArStr, setFeatArStr] = useState((initial.featuresAr ?? []).join("\n"));
  const [imgStr, setImgStr] = useState((initial.images ?? []).join("\n"));

  const set = (k: keyof DbPlugin, v: unknown) => setForm((f) => ({ ...f, [k]: v }));

  const handleCat = (cat: Plugin["category"]) => {
    setForm((f) => ({ ...f, category: cat, categoryAr: CATEGORY_AR_MAP[cat] }));
  };

  const submit = () => {
    const data = {
      ...form,
      features: featStr.split("\n").filter(Boolean),
      featuresAr: featArStr.split("\n").filter(Boolean),
      images: imgStr.split("\n").map((s) => s.trim()).filter(Boolean),
    };
    onSave(data);
  };

  const row = (label: string, children: React.ReactNode) => (
    <div style={{ marginBottom: 14 }}>
      <label style={s.label}>{label}</label>
      {children}
    </div>
  );

  const inp = (k: keyof DbPlugin, placeholder = "") => (
    <input
      value={String(form[k] ?? "")}
      onChange={(e) => set(k, e.target.value)}
      placeholder={placeholder}
      style={s.input}
    />
  );

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50,
      background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "1rem",
    }}>
      <div style={{
        background: "#0d0d1a", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 16,
        width: "100%", maxWidth: 720, maxHeight: "90vh", overflow: "auto", padding: 28,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: 0 }}>
            {mode === "create" ? "Add New Plugin" : "Edit Plugin"}
          </h2>
          <button onClick={onCancel} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b" }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>{row("Name (EN)", inp("name", "Plugin Name"))}</div>
          <div>{row("Name (AR)", inp("nameAr", "اسم الإضافة"))}</div>
          <div>{row("Slug", inp("slug", "local_myplugin"))}</div>
          <div>
            {row("Type",
              <select value={String(form.type ?? "local")} onChange={(e) => set("type", e.target.value)}
                style={{ ...s.input }}>
                {TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            )}
          </div>
          <div>{row("Moodle Version", inp("moodle", "Moodle 4.0+"))}</div>
          <div>
            {row("Category",
              <select value={String(form.category ?? "AI-Powered")} onChange={(e) => handleCat(e.target.value as Plugin["category"])}
                style={s.input}>
                {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            )}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, margin: "14px 0" }}>
          {([["free", "Free"], ["paidSupport", "Free + Support"], ["placeholder", "Placeholder"]] as const).map(([k, lbl]) => (
            <label key={k} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", color: "#94a3b8", fontSize: 13 }}>
              <input type="checkbox" checked={Boolean(form[k])} onChange={(e) => set(k, e.target.checked)}
                style={{ width: 16, height: 16, accentColor: "#a855f7" }} />
              {lbl}
            </label>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <div>{row("Price (USD, null if free)", <input type="number" value={form.price ?? ""} onChange={(e) => set("price", e.target.value ? Number(e.target.value) : null)} style={s.input} />)}</div>
          <div>{row("Setup Price (USD)", <input type="number" value={form.setupPrice ?? ""} onChange={(e) => set("setupPrice", e.target.value ? Number(e.target.value) : undefined)} style={s.input} />)}</div>
          <div>{row("Buy URL", inp("buyUrl", "https://wa.me/..."))}</div>
          <div>{row("Download URL", inp("downloadUrl", "https://moodle.org/plugins/..."))}</div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <label style={s.label}>Description (EN)</label>
          <textarea value={String(form.description ?? "")} onChange={(e) => set("description", e.target.value)}
            rows={2} style={{ ...s.input, resize: "vertical" }} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={s.label}>Description (AR)</label>
          <textarea value={String(form.descriptionAr ?? "")} onChange={(e) => set("descriptionAr", e.target.value)}
            rows={2} style={{ ...s.input, resize: "vertical", direction: "rtl" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
          <div>
            <label style={s.label}>Features EN (one per line)</label>
            <textarea value={featStr} onChange={(e) => setFeatStr(e.target.value)}
              rows={5} style={{ ...s.input, resize: "vertical" }} />
          </div>
          <div>
            <label style={s.label}>Features AR (one per line)</label>
            <textarea value={featArStr} onChange={(e) => setFeatArStr(e.target.value)}
              rows={5} style={{ ...s.input, resize: "vertical", direction: "rtl" }} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={s.label}>Images (one filename per line)</label>
          <textarea
            value={imgStr}
            onChange={(e) => setImgStr(e.target.value)}
            rows={3}
            placeholder={"screenshot1.png\nscreenshot2.jpg"}
            style={{ ...s.input, resize: "vertical" }}
          />
          <div style={{ fontSize: 11, color: "#475569", marginTop: 4 }}>
            Files must be uploaded to <code style={{ color: "#a855f7" }}>/plugins/{"{slug}"}/</code> on the server. Enter filenames only, e.g. <code style={{ color: "#a855f7" }}>screenshot1.png</code>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button onClick={onCancel} style={s.btn("rgba(255,255,255,0.08)")}>
            <X size={14} /> Cancel
          </button>
          <button onClick={submit} disabled={loading || !form.name || !form.slug} style={{
            ...s.btn("linear-gradient(135deg,#6900A3,#a855f7)"),
            opacity: loading ? 0.6 : 1,
          }}>
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
            {mode === "create" ? "Create Plugin" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteConfirm({ name, onConfirm, onCancel, loading }: {
  name: string; onConfirm: () => void; onCancel: () => void; loading: boolean;
}) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50, background: "rgba(0,0,0,0.7)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
    }}>
      <div style={{ background: "#0d0d1a", border: "1px solid rgba(239,68,68,0.4)", borderRadius: 16, padding: 28, maxWidth: 400, width: "100%" }}>
        <h3 style={{ color: "#f87171", fontSize: 18, fontWeight: 800, margin: "0 0 12px" }}>Delete Plugin?</h3>
        <p style={{ color: "#94a3b8", fontSize: 14, marginBottom: 24 }}>
          Are you sure you want to delete <strong style={{ color: "#e2e8f0" }}>{name}</strong>? This cannot be undone.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button onClick={onCancel} style={s.btn("rgba(255,255,255,0.08)")}>Cancel</button>
          <button onClick={onConfirm} disabled={loading} style={{ ...s.btn("#dc2626"), opacity: loading ? 0.6 : 1 }}>
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />} Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function PluginRow({ plugin, onEdit, onDelete }: {
  plugin: DbPlugin;
  onEdit: (p: DbPlugin) => void;
  onDelete: (p: DbPlugin) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const badge = (color: string, text: string) => (
    <span style={{
      fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, border: `1px solid ${color}44`,
      background: `${color}18`, color,
    }}>{text}</span>
  );

  return (
    <>
      <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <td style={{ padding: "12px 16px", fontSize: 13, color: "#e2e8f0" }}>
          <div style={{ fontWeight: 600 }}>{plugin.name}</div>
          <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{plugin.slug}</div>
        </td>
        <td style={{ padding: "12px 16px", fontSize: 12, color: "#94a3b8" }}>{plugin.category}</td>
        <td style={{ padding: "12px 16px" }}>
          <span style={{
            fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20,
            background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", color: "#c084fc",
          }}>{plugin.type}</span>
        </td>
        <td style={{ padding: "12px 16px" }}>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {plugin.free ? badge("#4ade80", "Free") : badge("#a855f7", `$${plugin.price ?? "?"}`)}
            {plugin.paidSupport && badge("#f59e0b", "+Support")}
            {plugin.placeholder && badge("#64748b", "WIP")}
          </div>
        </td>
        <td style={{ padding: "12px 16px" }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <button onClick={() => setExpanded((v) => !v)} style={{
              background: "none", border: "none", cursor: "pointer", color: "#64748b",
            }}>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <button onClick={() => onEdit(plugin)} style={{
              background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.25)",
              borderRadius: 6, padding: "5px 8px", cursor: "pointer", color: "#a855f7",
              display: "inline-flex",
            }}>
              <Pencil size={13} />
            </button>
            <button onClick={() => onDelete(plugin)} style={{
              background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: 6, padding: "5px 8px", cursor: "pointer", color: "#f87171",
              display: "inline-flex",
            }}>
              <Trash2 size={13} />
            </button>
          </div>
        </td>
      </tr>
      {expanded && (
        <tr style={{ background: "rgba(168,85,247,0.03)" }}>
          <td colSpan={5} style={{ padding: "12px 24px 16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, marginBottom: 6 }}>FEATURES (EN)</div>
                {(plugin.features ?? []).length === 0
                  ? <span style={{ fontSize: 12, color: "#475569" }}>—</span>
                  : (plugin.features ?? []).map((f, i) => (
                    <div key={i} style={{ fontSize: 12, color: "#94a3b8", marginBottom: 3, display: "flex", gap: 6 }}>
                      <CheckCircle2 size={12} style={{ color: "#6900A3", marginTop: 2, flexShrink: 0 }} /> {f}
                    </div>
                  ))}
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, marginBottom: 6 }}>FEATURES (AR)</div>
                {(plugin.featuresAr ?? []).length === 0
                  ? <span style={{ fontSize: 12, color: "#475569" }}>—</span>
                  : (plugin.featuresAr ?? []).map((f, i) => (
                    <div key={i} style={{ fontSize: 12, color: "#94a3b8", marginBottom: 3, display: "flex", gap: 6 }}>
                      <CheckCircle2 size={12} style={{ color: "#6900A3", marginTop: 2, flexShrink: 0 }} /> {f}
                    </div>
                  ))}
              </div>
            </div>
            {plugin.description && (
              <div style={{ marginTop: 10, fontSize: 12, color: "#64748b" }}>
                <span style={{ fontWeight: 700 }}>EN: </span>{plugin.description}
              </div>
            )}
          </td>
        </tr>
      )}
    </>
  );
}

function TestimonialForm({
  initial, mode, onSave, onCancel, loading,
}: {
  initial: Partial<Testimonial>;
  mode: FormMode;
  onSave: (data: Partial<Testimonial>) => void;
  onCancel: () => void;
  loading: boolean;
}) {
  const [form, setForm] = useState<Partial<Testimonial>>(initial);
  const set = (k: keyof Testimonial, v: unknown) => setForm((f) => ({ ...f, [k]: v }));
  const ta = (k: keyof Testimonial, rows = 3) => (
    <textarea
      value={String(form[k] ?? "")}
      onChange={(e) => set(k, e.target.value)}
      rows={rows}
      style={{ ...s.input, resize: "vertical" }}
    />
  );
  const inp = (k: keyof Testimonial, placeholder = "") => (
    <input
      value={String(form[k] ?? "")}
      onChange={(e) => set(k, e.target.value)}
      placeholder={placeholder}
      style={s.input}
    />
  );
  const row = (label: string, children: React.ReactNode) => (
    <div style={{ marginBottom: 14 }}>
      <label style={s.label}>{label}</label>
      {children}
    </div>
  );

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50,
      background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "1rem",
    }}>
      <div style={{
        background: "#0d0d1a", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 16,
        width: "100%", maxWidth: 720, maxHeight: "90vh", overflow: "auto", padding: 28,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: 0 }}>
            {mode === "create" ? "Add Testimonial" : "Edit Testimonial"}
          </h2>
          <button onClick={onCancel} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b" }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>{row("Name (EN)", inp("name", "Client Name"))}</div>
          <div>{row("Name (AR)", inp("nameAr", "اسم العميل"))}</div>
          <div>{row("Role (EN)", inp("role", "CEO / Moodle Admin"))}</div>
          <div>{row("Role (AR)", inp("roleAr", "المدير / مسؤول Moodle"))}</div>
          <div>{row("Company (EN)", inp("company", "University of ..."))}</div>
          <div>{row("Company (AR)", inp("companyAr", "جامعة ..."))}</div>
        </div>

        <div style={{ marginBottom: 14 }}>
          {row("Avatar Image URL", inp("image", "https://..."))}
        </div>

        <div style={{ marginBottom: 14 }}>
          <label style={s.label}>Quote (EN)</label>
          {ta("quote", 2)}
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={s.label}>Quote (AR)</label>
          {ta("quoteAr", 2)}
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={s.label}>Full Story (EN)</label>
          {ta("story", 3)}
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={s.label}>Full Story (AR)</label>
          {ta("storyAr", 3)}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <div>{row("Key Outcome (EN)", inp("outcome", "Reduced admin time by 60%"))}</div>
          <div>{row("Key Outcome (AR)", inp("outcomeAr", "قلّلنا وقت الإدارة بنسبة 60%"))}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 20 }}>
          <div>
            {row("Related Service",
              <select value={String(form.serviceSlug ?? "")} onChange={(e) => set("serviceSlug", e.target.value || null)}
                style={s.input}>
                {SERVICE_SLUG_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            )}
          </div>
          <div>{row("Display Order", <input type="number" value={form.displayOrder ?? 0} onChange={(e) => set("displayOrder", Number(e.target.value))} style={s.input} />)}</div>
          <div style={{ paddingTop: 22 }}>
            {(["featured", "active"] as const).map((k) => (
              <label key={k} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", color: "#94a3b8", fontSize: 13, marginBottom: 8 }}>
                <input type="checkbox" checked={Boolean(form[k])} onChange={(e) => set(k, e.target.checked)}
                  style={{ width: 16, height: 16, accentColor: "#a855f7" }} />
                {k.charAt(0).toUpperCase() + k.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button onClick={onCancel} style={s.btn("rgba(255,255,255,0.07)")}>
            <X size={14} /> Cancel
          </button>
          <button onClick={() => onSave(form)} disabled={loading || !form.name || !form.quote}
            style={{ ...s.btn("linear-gradient(135deg,#6900A3,#a855f7)"), opacity: loading ? 0.6 : 1 }}>
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
            {loading ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

function TestimonialRow({ testimonial, onEdit, onDelete }: {
  testimonial: Testimonial;
  onEdit: (t: Testimonial) => void;
  onDelete: (t: Testimonial) => void;
}) {
  return (
    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <td style={{ padding: "12px 16px", fontSize: 13, color: "#e2e8f0" }}>
        <div style={{ fontWeight: 600 }}>{testimonial.name}</div>
        <div style={{ fontSize: 11, color: "#64748b", marginTop: 2, direction: "rtl", textAlign: "left" }}>{testimonial.nameAr}</div>
      </td>
      <td style={{ padding: "12px 16px", fontSize: 12, color: "#94a3b8" }}>
        <div>{testimonial.role}</div>
        <div style={{ fontSize: 11, color: "#64748b" }}>{testimonial.company}</div>
      </td>
      <td style={{ padding: "12px 16px" }}>
        <span style={{
          fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20,
          background: testimonial.featured ? "rgba(168,85,247,0.1)" : "rgba(100,116,139,0.15)",
          border: `1px solid ${testimonial.featured ? "rgba(168,85,247,0.3)" : "rgba(100,116,139,0.3)"}`,
          color: testimonial.featured ? "#c084fc" : "#64748b",
        }}>
          {testimonial.featured ? "Featured" : "Hidden"}
        </span>
      </td>
      <td style={{ padding: "12px 16px", fontSize: 12, color: "#64748b" }}>
        #{testimonial.displayOrder} {testimonial.serviceSlug ? `· ${testimonial.serviceSlug}` : ""}
      </td>
      <td style={{ padding: "12px 16px" }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <button onClick={() => onEdit(testimonial)} style={{
            background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.25)",
            borderRadius: 6, padding: "5px 8px", cursor: "pointer", color: "#a855f7",
            display: "inline-flex",
          }}>
            <Pencil size={13} />
          </button>
          <button onClick={() => onDelete(testimonial)} style={{
            background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)",
            borderRadius: 6, padding: "5px 8px", cursor: "pointer", color: "#f87171",
            display: "inline-flex",
          }}>
            <Trash2 size={13} />
          </button>
        </div>
      </td>
    </tr>
  );
}

function Dashboard({ token, onLogout }: { token: string; onLogout: () => void }) {
  const qc = useQueryClient();
  const [activeTab, setActiveTab] = useState<"plugins" | "testimonials">("plugins");

  const [formMode, setFormMode] = useState<FormMode | null>(null);
  const [editTarget, setEditTarget] = useState<DbPlugin | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<DbPlugin | null>(null);

  const [tFormMode, setTFormMode] = useState<FormMode | null>(null);
  const [tEditTarget, setTEditTarget] = useState<Testimonial | null>(null);
  const [tDeleteId, setTDeleteId] = useState<number | null>(null);

  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);

  const showToast = (msg: string, ok: boolean) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  const { data: plugins = [], isLoading: plugLoading, error: plugError } = useQuery<DbPlugin[]>({
    queryKey: ["admin-plugins"],
    queryFn: async () => {
      const res = await fetch(`${BASE}/plugins`);
      if (!res.ok) throw new Error("Failed");
      const rows = await res.json();
      return rows.map(rowToPlugin);
    },
  });

  const { data: testimonials = [], isLoading: tLoading, error: tError } = useQuery<Testimonial[]>({
    queryKey: ["admin-testimonials"],
    queryFn: async () => {
      const res = await fetch(`${BASE}/testimonials`);
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  const headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

  const createMut = useMutation({
    mutationFn: async (body: Partial<DbPlugin>) => {
      const res = await fetch(`${BASE}/plugins`, { method: "POST", headers, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(await res.text());
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-plugins"] }); qc.invalidateQueries({ queryKey: ["plugins"] }); setFormMode(null); showToast("Plugin created", true); },
    onError: (e: Error) => showToast(e.message, false),
  });

  const updateMut = useMutation({
    mutationFn: async ({ id, ...body }: Partial<DbPlugin> & { id: number }) => {
      const res = await fetch(`${BASE}/plugins/${id}`, { method: "PATCH", headers, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(await res.text());
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-plugins"] }); qc.invalidateQueries({ queryKey: ["plugins"] }); setFormMode(null); setEditTarget(null); showToast("Plugin updated", true); },
    onError: (e: Error) => showToast(e.message, false),
  });

  const deleteMut = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`${BASE}/plugins/${id}`, { method: "DELETE", headers });
      if (!res.ok) throw new Error(await res.text());
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-plugins"] }); qc.invalidateQueries({ queryKey: ["plugins"] }); setDeleteTarget(null); showToast("Plugin deleted", true); },
    onError: (e: Error) => showToast(e.message, false),
  });

  const tCreateMut = useMutation({
    mutationFn: async (body: Partial<Testimonial>) => {
      const res = await fetch(`${BASE}/testimonials`, { method: "POST", headers, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(await res.text());
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-testimonials"] }); qc.invalidateQueries({ queryKey: ["testimonials"] }); setTFormMode(null); showToast("Testimonial created", true); },
    onError: (e: Error) => showToast(e.message, false),
  });

  const tUpdateMut = useMutation({
    mutationFn: async ({ id, ...body }: Partial<Testimonial> & { id: number }) => {
      const res = await fetch(`${BASE}/testimonials/${id}`, { method: "PATCH", headers, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(await res.text());
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-testimonials"] }); qc.invalidateQueries({ queryKey: ["testimonials"] }); setTFormMode(null); setTEditTarget(null); showToast("Testimonial updated", true); },
    onError: (e: Error) => showToast(e.message, false),
  });

  const tDeleteMut = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`${BASE}/testimonials/${id}`, { method: "DELETE", headers });
      if (!res.ok) throw new Error(await res.text());
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-testimonials"] }); qc.invalidateQueries({ queryKey: ["testimonials"] }); setTDeleteId(null); showToast("Testimonial deleted", true); },
    onError: (e: Error) => showToast(e.message, false),
  });

  const handleSave = (data: Partial<DbPlugin>) => {
    if (formMode === "create") createMut.mutate(data);
    else if (editTarget) updateMut.mutate({ ...data, id: editTarget.id });
  };

  const handleTSave = (data: Partial<Testimonial>) => {
    if (tFormMode === "create") tCreateMut.mutate(data);
    else if (tEditTarget) tUpdateMut.mutate({ ...data, id: tEditTarget.id });
  };

  const freeCount = plugins.filter((p) => p.free && !p.paidSupport).length;
  const supportCount = plugins.filter((p) => p.free && p.paidSupport).length;
  const premiumCount = plugins.filter((p) => !p.free).length;

  const tabBtn = (tab: "plugins" | "testimonials", label: string) => (
    <button
      onClick={() => setActiveTab(tab)}
      style={{
        padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
        border: activeTab === tab ? "1px solid rgba(168,85,247,0.4)" : "1px solid transparent",
        background: activeTab === tab ? "rgba(168,85,247,0.12)" : "transparent",
        color: activeTab === tab ? "#c084fc" : "#64748b",
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#07070f" }}>
      <Navbar />

      {toast && (
        <div style={{
          position: "fixed", top: 80, right: 24, zIndex: 100, display: "flex", alignItems: "center", gap: 8,
          padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600,
          background: toast.ok ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
          border: `1px solid ${toast.ok ? "rgba(34,197,94,0.4)" : "rgba(239,68,68,0.4)"}`,
          color: toast.ok ? "#4ade80" : "#f87171",
        }}>
          {toast.ok ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />} {toast.msg}
        </div>
      )}

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 1.5rem 3rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", margin: "0 0 6px" }}>Admin Dashboard</h1>
            <p style={{ fontSize: 14, color: "#64748b" }}>Manage plugins and testimonials</p>
          </div>
          <button onClick={onLogout} style={s.btn("rgba(255,255,255,0.07)")}>
            <LogOut size={15} /> Logout
          </button>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, padding: "4px", borderRadius: 10, background: "rgba(255,255,255,0.04)", width: "fit-content" }}>
          {tabBtn("plugins", `Plugins (${plugins.length})`)}
          {tabBtn("testimonials", `Testimonials (${testimonials.length})`)}
        </div>

        {activeTab === "plugins" && (
          <>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
              <button onClick={() => { setEditTarget(null); setFormMode("create"); }} style={s.btn("linear-gradient(135deg,#6900A3,#a855f7)")}>
                <Plus size={15} /> Add Plugin
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 28 }}>
              {[
                ["Total", plugins.length, "#a855f7"],
                ["Free", freeCount, "#4ade80"],
                ["Free + Support", supportCount, "#f59e0b"],
                ["Premium", premiumCount, "#c084fc"],
              ].map(([label, count, color]) => (
                <div key={String(label)} style={{ ...s.card, textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: String(color) }}>{count}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ ...s.card, padding: 0, overflow: "hidden" }}>
              {plugLoading ? (
                <div style={{ padding: 40, textAlign: "center", color: "#64748b" }}>
                  <Loader2 size={24} className="animate-spin" style={{ margin: "0 auto 12px", display: "block" }} />
                  Loading plugins…
                </div>
              ) : plugError ? (
                <div style={{ padding: 40, textAlign: "center", color: "#f87171" }}>
                  <AlertCircle size={20} style={{ margin: "0 auto 8px", display: "block" }} />
                  Failed to load plugins
                </div>
              ) : (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.05)" }}>
                      {["Name / Slug", "Category", "Type", "Pricing", "Actions"].map((h) => (
                        <th key={h} style={{ padding: "10px 16px", fontSize: 11, fontWeight: 700, color: "#94a3b8", textAlign: "left", letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {plugins.map((p) => (
                      <PluginRow key={p.id} plugin={p}
                        onEdit={(pl) => { setEditTarget(pl); setFormMode("edit"); }}
                        onDelete={(pl) => setDeleteTarget(pl)}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}

        {activeTab === "testimonials" && (
          <>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
              <button onClick={() => { setTEditTarget(null); setTFormMode("create"); }} style={s.btn("linear-gradient(135deg,#6900A3,#a855f7)")}>
                <Plus size={15} /> Add Testimonial
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
              {[
                ["Total", testimonials.length, "#a855f7"],
                ["Featured", testimonials.filter((t) => t.featured).length, "#4ade80"],
                ["Active", testimonials.filter((t) => t.active).length, "#f59e0b"],
              ].map(([label, count, color]) => (
                <div key={String(label)} style={{ ...s.card, textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: String(color) }}>{count}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ ...s.card, padding: 0, overflow: "hidden" }}>
              {tLoading ? (
                <div style={{ padding: 40, textAlign: "center", color: "#64748b" }}>
                  <Loader2 size={24} className="animate-spin" style={{ margin: "0 auto 12px", display: "block" }} />
                  Loading testimonials…
                </div>
              ) : tError ? (
                <div style={{ padding: 40, textAlign: "center", color: "#f87171" }}>
                  <AlertCircle size={20} style={{ margin: "0 auto 8px", display: "block" }} />
                  Failed to load testimonials
                </div>
              ) : testimonials.length === 0 ? (
                <div style={{ padding: 40, textAlign: "center", color: "#64748b" }}>
                  No testimonials yet. Click "Add Testimonial" to get started.
                </div>
              ) : (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.05)" }}>
                      {["Name (EN / AR)", "Role / Company", "Status", "Order / Service", "Actions"].map((h) => (
                        <th key={h} style={{ padding: "10px 16px", fontSize: 11, fontWeight: 700, color: "#94a3b8", textAlign: "left", letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {testimonials.map((t) => (
                      <TestimonialRow key={t.id} testimonial={t}
                        onEdit={(item) => { setTEditTarget(item); setTFormMode("edit"); }}
                        onDelete={(item) => setTDeleteId(item.id)}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </div>

      {(formMode === "create" || formMode === "edit") && (
        <PluginForm
          initial={formMode === "create" ? EMPTY_FORM : (editTarget ?? EMPTY_FORM)}
          mode={formMode}
          onSave={handleSave}
          onCancel={() => { setFormMode(null); setEditTarget(null); }}
          loading={createMut.isPending || updateMut.isPending}
        />
      )}

      {deleteTarget && (
        <DeleteConfirm
          name={deleteTarget.name}
          onConfirm={() => deleteMut.mutate(deleteTarget.id)}
          onCancel={() => setDeleteTarget(null)}
          loading={deleteMut.isPending}
        />
      )}

      {(tFormMode === "create" || tFormMode === "edit") && (
        <TestimonialForm
          initial={tFormMode === "create" ? EMPTY_TESTIMONIAL : (tEditTarget ?? EMPTY_TESTIMONIAL)}
          mode={tFormMode}
          onSave={handleTSave}
          onCancel={() => { setTFormMode(null); setTEditTarget(null); }}
          loading={tCreateMut.isPending || tUpdateMut.isPending}
        />
      )}

      {tDeleteId !== null && (
        <DeleteConfirm
          name="this testimonial"
          onConfirm={() => tDeleteMut.mutate(tDeleteId)}
          onCancel={() => setTDeleteId(null)}
          loading={tDeleteMut.isPending}
        />
      )}
    </div>
  );
}

export function AdminPage() {
  const auth = useAuth();
  if (!auth.token) return <LoginForm auth={auth} />;
  return <Dashboard token={auth.token} onLogout={auth.logout} />;
}
