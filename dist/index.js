import ue, { useState as y, useEffect as P, createContext as fe, useContext as pe } from "react";
import { createPortal as H } from "react-dom";
var D = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function me() {
  if (X) return k;
  X = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function o(c, a, s) {
    var g = null;
    if (s !== void 0 && (g = "" + s), a.key !== void 0 && (g = "" + a.key), "key" in a) {
      s = {};
      for (var f in a)
        f !== "key" && (s[f] = a[f]);
    } else s = a;
    return a = s.ref, {
      $$typeof: n,
      type: c,
      key: g,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return k.Fragment = i, k.jsx = o, k.jsxs = o, k;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function ge() {
  return Z || (Z = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case ee:
          return "Profiler";
        case A:
          return "StrictMode";
        case oe:
          return "Suspense";
        case ae:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case S:
            return "Portal";
          case re:
            return e.displayName || "Context";
          case te:
            return (e._context.displayName || "Context") + ".Consumer";
          case ne:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ie:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case I:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function o(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var l = r.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), i(e);
      }
    }
    function c(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = N.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function g(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function l() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function p() {
      var e = n(this.type);
      return V[e] || (V[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function b(e, r, l, d, O, B) {
      var u = l.ref;
      return e = {
        $$typeof: C,
        type: e,
        key: r,
        props: l,
        _owner: d
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function v(e, r, l, d, O, B) {
      var u = r.children;
      if (u !== void 0)
        if (d)
          if (ce(u)) {
            for (d = 0; d < u.length; d++)
              x(u[d]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(u);
      if ($.call(r, "key")) {
        u = n(e);
        var _ = Object.keys(r).filter(function(de) {
          return de !== "key";
        });
        d = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", q[u + d] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          u,
          _,
          u
        ), q[u + d] = !0);
      }
      if (u = null, l !== void 0 && (o(l), u = "" + l), g(r) && (o(r.key), u = "" + r.key), "key" in r) {
        l = {};
        for (var F in r)
          F !== "key" && (l[F] = r[F]);
      } else l = r;
      return u && f(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(
        e,
        u,
        l,
        a(),
        O,
        B
      );
    }
    function x(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === I && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    var h = ue, C = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), re = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), N = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ce = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var U, V = {}, G = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), J = z(c(s)), q = {};
    T.Fragment = R, T.jsx = function(e, r, l) {
      var d = 1e4 > N.recentlyCreatedOwnerStacks++;
      return v(
        e,
        r,
        l,
        !1,
        d ? Error("react-stack-top-frame") : G,
        d ? z(c(e)) : J
      );
    }, T.jsxs = function(e, r, l) {
      var d = 1e4 > N.recentlyCreatedOwnerStacks++;
      return v(
        e,
        r,
        l,
        !0,
        d ? Error("react-stack-top-frame") : G,
        d ? z(c(e)) : J
      );
    };
  }()), T;
}
process.env.NODE_ENV === "production" ? D.exports = me() : D.exports = ge();
var t = D.exports;
const E = {
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
async function xe() {
  try {
    const n = (await import("./html2canvas.esm-d2sM-0Wm.mjs")).default;
    return (await n(document.body, { useCORS: !0, logging: !1 })).toDataURL("image/jpeg", 0.7);
  } catch {
    return null;
  }
}
function be() {
  return {
    userAgent: navigator.userAgent,
    url: window.location.href,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language
  };
}
function he({ onSubmitted: n }) {
  const { config: i } = Y(), [o, c] = y(""), [a, s] = y(""), [g, f] = y(!1), [p, b] = y(""), v = async (x) => {
    var w;
    if (x.preventDefault(), !(!o.trim() || !i)) {
      f(!0), b("");
      try {
        const [h, C] = await Promise.all([
          xe(),
          Promise.resolve(be())
        ]), S = ((w = i.getUser) == null ? void 0 : w.call(i)) ?? null, R = await fetch(i.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: i.token,
            title: o.trim(),
            description: a.trim() || void 0,
            browser_info: C,
            screenshot_base64: h ?? void 0,
            reporter_name: (S == null ? void 0 : S.name) ?? void 0,
            reporter_email: (S == null ? void 0 : S.email) ?? void 0
          })
        });
        if (!R.ok) {
          const A = await R.json().catch(() => ({}));
          throw new Error(A.error || "Fehler beim Senden");
        }
        n();
      } catch (h) {
        b(h.message || "Unbekannter Fehler");
      } finally {
        f(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs("form", { onSubmit: v, style: E.body, children: [
    /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: "12px" }, children: [
      /* @__PURE__ */ t.jsx("label", { style: E.label, children: "Was ist passiert? *" }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          style: E.input,
          value: o,
          onChange: (x) => c(x.target.value),
          placeholder: "Kurze Zusammenfassung",
          required: !0,
          autoFocus: !0
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx("label", { style: E.label, children: "Beschreibung (optional)" }),
      /* @__PURE__ */ t.jsx(
        "textarea",
        {
          style: E.textarea,
          value: a,
          onChange: (x) => s(x.target.value),
          placeholder: "Was hast du erwartet? Was ist stattdessen passiert?"
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { style: E.meta, children: [
      /* @__PURE__ */ t.jsx("span", { children: "📸" }),
      /* @__PURE__ */ t.jsx("span", { children: "Screenshot + Browser-Info wird automatisch mitgeschickt" })
    ] }),
    p && /* @__PURE__ */ t.jsx("p", { style: E.error, children: p }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "submit",
        style: { ...E.submitBtn, opacity: g ? 0.7 : 1 },
        disabled: g || !o.trim(),
        children: g ? "Wird gesendet…" : "Bug melden"
      }
    )
  ] });
}
const j = {
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
function ye() {
  const { open: n, setOpen: i } = Y(), [o, c] = y(!1);
  P(() => {
    n || c(!1);
  }, [n]);
  const a = () => {
    c(!0), setTimeout(() => i(!1), 2e3);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        style: j.fab,
        onClick: () => i(!n),
        title: "Bug melden",
        onMouseEnter: (s) => {
          s.currentTarget.style.transform = "scale(1.08)";
        },
        onMouseLeave: (s) => {
          s.currentTarget.style.transform = "scale(1)";
        },
        children: "🐛"
      }
    ),
    n && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx("div", { style: j.overlay, onClick: () => i(!1) }),
      /* @__PURE__ */ t.jsxs("div", { style: j.dialog, children: [
        /* @__PURE__ */ t.jsxs("div", { style: j.header, children: [
          /* @__PURE__ */ t.jsx("span", { style: j.headerTitle, children: "🐛 Bug melden" }),
          /* @__PURE__ */ t.jsx("button", { style: j.closeBtn, onClick: () => i(!1), children: "×" })
        ] }),
        o ? /* @__PURE__ */ t.jsxs("div", { style: { padding: "32px 16px", textAlign: "center" }, children: [
          /* @__PURE__ */ t.jsx("div", { style: { fontSize: "32px", marginBottom: "8px" }, children: "✅" }),
          /* @__PURE__ */ t.jsx("p", { style: { fontSize: "14px", color: "#444", margin: 0 }, children: "Danke! Bug wurde gemeldet." })
        ] }) : /* @__PURE__ */ t.jsx(he, { onSubmitted: a })
      ] })
    ] })
  ] });
}
const ve = "https://support.maitrx.ai", m = {
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
  badge: (n) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 10px",
    borderRadius: "99px",
    fontSize: "12px",
    fontWeight: 600,
    background: n ? "#dcfce7" : "#f3f4f6",
    color: n ? "#166534" : "#6b7280"
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
function W(n) {
  n ? localStorage.setItem(L, JSON.stringify(n)) : localStorage.removeItem(L), window.dispatchEvent(new Event(M));
}
function we() {
  const { storedConfig: n, reloadConfig: i } = Y(), [o, c] = y(n);
  P(() => {
    c(n);
  }, [n]);
  const a = () => {
    const f = `${ve}/auth/plugin-connect`, p = window.open(f, "maitrx-connect", "width=440,height=600,left=200,top=100"), b = (x) => {
      var h;
      if (((h = x.data) == null ? void 0 : h.type) !== "MAITRX_PLUGIN_CONNECT") return;
      window.removeEventListener("message", b), p == null || p.close();
      const w = {
        token: x.data.token,
        endpoint: x.data.endpoint,
        productName: x.data.productName,
        enabled: !0
      };
      W(w), c(w), i();
    };
    window.addEventListener("message", b);
    const v = setInterval(() => {
      p != null && p.closed && (clearInterval(v), window.removeEventListener("message", b));
    }, 500);
  }, s = () => {
    if (!o) return;
    const f = { ...o, enabled: !o.enabled };
    W(f), c(f), i();
  }, g = () => {
    W(null), c(null), i();
  };
  return /* @__PURE__ */ t.jsx("div", { style: m.overlay, children: /* @__PURE__ */ t.jsxs("div", { style: m.card, children: [
    /* @__PURE__ */ t.jsx("div", { style: m.logo, children: "🐛" }),
    /* @__PURE__ */ t.jsx("div", { style: m.title, children: "Bug Reporter" }),
    /* @__PURE__ */ t.jsx("div", { style: m.subtitle, children: "Verbinde diese App mit Maitrx — gemeldete Bugs landen direkt im internen Support-Tool." }),
    o ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsxs("div", { style: m.row, children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("div", { style: m.label, children: "Verbunden mit" }),
          /* @__PURE__ */ t.jsx("div", { style: m.value, children: o.productName })
        ] }),
        /* @__PURE__ */ t.jsx("span", { style: m.badge(o.enabled), children: o.enabled ? "● Aktiv" : "○ Inaktiv" })
      ] }),
      /* @__PURE__ */ t.jsx("div", { style: m.divider }),
      /* @__PURE__ */ t.jsxs("div", { style: m.actions, children: [
        /* @__PURE__ */ t.jsx("button", { style: m.btnSecondary, onClick: s, children: o.enabled ? "⏸ Deaktivieren" : "▶ Aktivieren" }),
        /* @__PURE__ */ t.jsx("button", { style: m.btnSecondary, onClick: a, children: "🔄 Neu verbinden" }),
        /* @__PURE__ */ t.jsx("button", { style: m.btnDanger, onClick: g, children: "✕ Verbindung trennen" })
      ] })
    ] }) : /* @__PURE__ */ t.jsx("button", { style: m.btn, onClick: a, children: "🔗 Mit Maitrx anmelden" })
  ] }) });
}
const L = "maitrx_bug_reporter_config", Se = "/bug-reporter", M = "maitrx-config-changed", K = fe(null);
function Y() {
  const n = pe(K);
  if (!n) throw new Error("useBugReporter must be used within BugReporterProvider");
  return n;
}
function Ee() {
  const [n, i] = y(window.location.pathname);
  return P(() => {
    const o = () => i(window.location.pathname), c = window.history.pushState.bind(window.history);
    window.history.pushState = function(...s) {
      c(...s), o();
    };
    const a = window.history.replaceState.bind(window.history);
    return window.history.replaceState = function(...s) {
      a(...s), o();
    }, window.addEventListener("popstate", o), () => window.removeEventListener("popstate", o);
  }, []), n;
}
function Q() {
  try {
    const n = localStorage.getItem(L);
    return n ? JSON.parse(n) : null;
  } catch {
    return null;
  }
}
function je({ children: n, getUser: i }) {
  const [o, c] = y(!1), [a, s] = y(Q), g = Ee(), f = () => s(Q());
  P(() => (window.addEventListener(M, f), () => window.removeEventListener(M, f)), []);
  const p = a ? { endpoint: a.endpoint, token: a.token, enabled: a.enabled, getUser: i } : null, b = g === Se, v = !b && p !== null && p.enabled !== !1;
  return /* @__PURE__ */ t.jsxs(K.Provider, { value: { config: p, storedConfig: a, open: o, setOpen: c, reloadConfig: f }, children: [
    n,
    b && H(/* @__PURE__ */ t.jsx(we, {}), document.body),
    v && H(/* @__PURE__ */ t.jsx(ye, {}), document.body)
  ] });
}
export {
  je as BugReporterProvider
};
