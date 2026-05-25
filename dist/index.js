import { jsxs as a, jsx as e, Fragment as k } from "react/jsx-runtime";
import { useState as g, useEffect as v, createContext as N, useContext as P } from "react";
import { createPortal as R } from "react-dom";
const f = {
  body: { padding: "16px" },
  label: {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: "#555",
    marginBottom: "4px"
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    fontSize: "13px",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color 0.15s"
  },
  textarea: {
    width: "100%",
    padding: "8px 10px",
    fontSize: "13px",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    resize: "vertical",
    minHeight: "72px",
    transition: "border-color 0.15s"
  },
  meta: {
    fontSize: "11px",
    color: "#999",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginTop: "10px"
  },
  submitBtn: {
    width: "100%",
    marginTop: "12px",
    padding: "9px",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity 0.15s",
    fontFamily: "inherit"
  },
  error: {
    fontSize: "12px",
    color: "#e53e3e",
    marginTop: "8px"
  }
};
async function _() {
  try {
    const t = (await import("./html2canvas.esm-d2sM-0Wm.mjs")).default;
    return (await t(document.body, { useCORS: !0, logging: !1 })).toDataURL("image/jpeg", 0.7);
  } catch {
    return null;
  }
}
function j() {
  return {
    userAgent: navigator.userAgent,
    url: window.location.href,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language
  };
}
function A({ onSubmitted: t }) {
  const { config: o } = I(), [n, s] = g(""), [i, d] = g(""), [h, c] = g(!1), [l, u] = g("");
  return /* @__PURE__ */ a("form", { onSubmit: async (p) => {
    var y;
    if (p.preventDefault(), !(!n.trim() || !o)) {
      c(!0), u("");
      try {
        const [m, W] = await Promise.all([
          _(),
          Promise.resolve(j())
        ]), x = ((y = o.getUser) == null ? void 0 : y.call(o)) ?? null, z = await fetch(o.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: o.token,
            title: n.trim(),
            description: i.trim() || void 0,
            browser_info: W,
            screenshot_base64: m ?? void 0,
            reporter_name: (x == null ? void 0 : x.name) ?? void 0,
            reporter_email: (x == null ? void 0 : x.email) ?? void 0
          })
        });
        if (!z.ok) {
          const F = await z.json().catch(() => ({}));
          throw new Error(F.error || "Fehler beim Senden");
        }
        t();
      } catch (m) {
        u(m.message || "Unbekannter Fehler");
      } finally {
        c(!1);
      }
    }
  }, style: f.body, children: [
    /* @__PURE__ */ a("div", { style: { marginBottom: "12px" }, children: [
      /* @__PURE__ */ e("label", { style: f.label, children: "Was ist passiert? *" }),
      /* @__PURE__ */ e(
        "input",
        {
          style: f.input,
          value: n,
          onChange: (p) => s(p.target.value),
          placeholder: "Kurze Zusammenfassung",
          required: !0,
          autoFocus: !0
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { children: [
      /* @__PURE__ */ e("label", { style: f.label, children: "Beschreibung (optional)" }),
      /* @__PURE__ */ e(
        "textarea",
        {
          style: f.textarea,
          value: i,
          onChange: (p) => d(p.target.value),
          placeholder: "Was hast du erwartet? Was ist stattdessen passiert?"
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { style: f.meta, children: [
      /* @__PURE__ */ e("span", { children: "📸" }),
      /* @__PURE__ */ e("span", { children: "Screenshot + Browser-Info wird automatisch mitgeschickt" })
    ] }),
    l && /* @__PURE__ */ e("p", { style: f.error, children: l }),
    /* @__PURE__ */ e(
      "button",
      {
        type: "submit",
        style: { ...f.submitBtn, opacity: h ? 0.7 : 1 },
        disabled: h || !n.trim(),
        children: h ? "Wird gesendet…" : "Bug melden"
      }
    )
  ] });
}
const b = {
  fab: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: 99999,
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
    fontSize: "20px",
    transition: "transform 0.15s ease"
  },
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 99998,
    background: "rgba(0,0,0,0.3)"
  },
  dialog: {
    position: "fixed",
    bottom: "84px",
    right: "24px",
    zIndex: 99999,
    width: "340px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    overflow: "hidden",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottom: "1px solid #f0f0f0",
    background: "#fafafa"
  },
  headerTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  },
  closeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    color: "#888",
    lineHeight: 1,
    padding: "2px"
  }
};
function L() {
  const { open: t, setOpen: o } = I(), [n, s] = g(!1);
  v(() => {
    t || s(!1);
  }, [t]);
  const i = () => {
    s(!0), setTimeout(() => o(!1), 2e3);
  };
  return /* @__PURE__ */ a(k, { children: [
    /* @__PURE__ */ e(
      "button",
      {
        style: b.fab,
        onClick: () => o(!t),
        title: "Bug melden",
        onMouseEnter: (d) => {
          d.currentTarget.style.transform = "scale(1.08)";
        },
        onMouseLeave: (d) => {
          d.currentTarget.style.transform = "scale(1)";
        },
        children: "🐛"
      }
    ),
    t && /* @__PURE__ */ a(k, { children: [
      /* @__PURE__ */ e("div", { style: b.overlay, onClick: () => o(!1) }),
      /* @__PURE__ */ a("div", { style: b.dialog, children: [
        /* @__PURE__ */ a("div", { style: b.header, children: [
          /* @__PURE__ */ e("span", { style: b.headerTitle, children: "🐛 Bug melden" }),
          /* @__PURE__ */ e("button", { style: b.closeBtn, onClick: () => o(!1), children: "×" })
        ] }),
        n ? /* @__PURE__ */ a("div", { style: { padding: "32px 16px", textAlign: "center" }, children: [
          /* @__PURE__ */ e("div", { style: { fontSize: "32px", marginBottom: "8px" }, children: "✅" }),
          /* @__PURE__ */ e("p", { style: { fontSize: "14px", color: "#444", margin: 0 }, children: "Danke! Bug wurde gemeldet." })
        ] }) : /* @__PURE__ */ e(A, { onSubmitted: i })
      ] })
    ] })
  ] });
}
const D = "https://support.maitrx.ai", r = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 999999,
    background: "#f9fafb",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px"
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    padding: "32px",
    width: "100%",
    maxWidth: "480px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
  },
  logo: {
    fontSize: "28px",
    marginBottom: "8px"
  },
  title: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#111",
    marginBottom: "4px"
  },
  subtitle: {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "28px"
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    padding: "11px",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "opacity 0.15s"
  },
  btnSecondary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    padding: "10px",
    background: "#f3f4f6",
    color: "#374151",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit"
  },
  btnDanger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    padding: "10px",
    background: "#fff",
    color: "#dc2626",
    border: "1px solid #fecaca",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit"
  },
  badge: (t) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 10px",
    borderRadius: "99px",
    fontSize: "12px",
    fontWeight: 600,
    background: t ? "#dcfce7" : "#f3f4f6",
    color: t ? "#166534" : "#6b7280"
  }),
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  label: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "2px"
  },
  value: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#111"
  },
  divider: {
    borderTop: "1px solid #f0f0f0",
    margin: "20px 0"
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }
};
function S(t) {
  t ? localStorage.setItem(C, JSON.stringify(t)) : localStorage.removeItem(C), window.dispatchEvent(new Event(B));
}
function M() {
  const { storedConfig: t, reloadConfig: o } = I(), [n, s] = g(t);
  v(() => {
    s(t);
  }, [t]);
  const i = () => {
    const c = `${D}/auth/plugin-connect`, l = window.open(c, "maitrx-connect", "width=440,height=600,left=200,top=100"), u = (p) => {
      var m;
      if (((m = p.data) == null ? void 0 : m.type) !== "MAITRX_PLUGIN_CONNECT") return;
      window.removeEventListener("message", u), l == null || l.close();
      const y = {
        token: p.data.token,
        endpoint: p.data.endpoint,
        productName: p.data.productName,
        enabled: !0
      };
      S(y), s(y), o();
    };
    window.addEventListener("message", u);
    const w = setInterval(() => {
      l != null && l.closed && (clearInterval(w), window.removeEventListener("message", u));
    }, 500);
  }, d = () => {
    if (!n) return;
    const c = { ...n, enabled: !n.enabled };
    S(c), s(c), o();
  }, h = () => {
    S(null), s(null), o();
  };
  return /* @__PURE__ */ e("div", { style: r.overlay, children: /* @__PURE__ */ a("div", { style: r.card, children: [
    /* @__PURE__ */ e("div", { style: r.logo, children: "🐛" }),
    /* @__PURE__ */ e("div", { style: r.title, children: "Bug Reporter" }),
    /* @__PURE__ */ e("div", { style: r.subtitle, children: "Verbinde diese App mit Maitrx — gemeldete Bugs landen direkt im internen Support-Tool." }),
    n ? /* @__PURE__ */ a(k, { children: [
      /* @__PURE__ */ a("div", { style: r.row, children: [
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e("div", { style: r.label, children: "Verbunden mit" }),
          /* @__PURE__ */ e("div", { style: r.value, children: n.productName })
        ] }),
        /* @__PURE__ */ e("span", { style: r.badge(n.enabled), children: n.enabled ? "● Aktiv" : "○ Inaktiv" })
      ] }),
      /* @__PURE__ */ e("div", { style: r.divider }),
      /* @__PURE__ */ a("div", { style: r.actions, children: [
        /* @__PURE__ */ e("button", { style: r.btnSecondary, onClick: d, children: n.enabled ? "⏸ Deaktivieren" : "▶ Aktivieren" }),
        /* @__PURE__ */ e("button", { style: r.btnSecondary, onClick: i, children: "🔄 Neu verbinden" }),
        /* @__PURE__ */ e("button", { style: r.btnDanger, onClick: h, children: "✕ Verbindung trennen" })
      ] })
    ] }) : /* @__PURE__ */ e("button", { style: r.btn, onClick: i, children: "🔗 Mit Maitrx anmelden" })
  ] }) });
}
const C = "maitrx_bug_reporter_config", O = "/bug-reporter", B = "maitrx-config-changed", E = N(null);
function I() {
  const t = P(E);
  if (!t) throw new Error("useBugReporter must be used within BugReporterProvider");
  return t;
}
function U() {
  const [t, o] = g(window.location.pathname);
  return v(() => {
    const n = () => o(window.location.pathname), s = window.history.pushState.bind(window.history);
    window.history.pushState = function(...d) {
      s(...d), n();
    };
    const i = window.history.replaceState.bind(window.history);
    return window.history.replaceState = function(...d) {
      i(...d), n();
    }, window.addEventListener("popstate", n), () => window.removeEventListener("popstate", n);
  }, []), t;
}
function T() {
  try {
    const t = localStorage.getItem(C);
    return t ? JSON.parse(t) : null;
  } catch {
    return null;
  }
}
function J({ children: t, getUser: o }) {
  const [n, s] = g(!1), [i, d] = g(T), h = U(), c = () => d(T());
  v(() => (window.addEventListener(B, c), () => window.removeEventListener(B, c)), []);
  const l = i ? { endpoint: i.endpoint, token: i.token, enabled: i.enabled, getUser: o } : null, u = h === O, w = !u && l !== null && l.enabled !== !1;
  return /* @__PURE__ */ a(E.Provider, { value: { config: l, storedConfig: i, open: n, setOpen: s, reloadConfig: c }, children: [
    t,
    u && R(/* @__PURE__ */ e(M, {}), document.body),
    w && R(/* @__PURE__ */ e(L, {}), document.body)
  ] });
}
export {
  J as BugReporterProvider
};
