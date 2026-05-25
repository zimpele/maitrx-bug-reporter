import ie, { useState as E, useRef as se, useEffect as J, createContext as le, useContext as ce, useCallback as de } from "react";
var C = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function ue() {
  if ($) return T;
  $ = 1;
  var n = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function a(s, l, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      u = {};
      for (var h in l)
        h !== "key" && (u[h] = l[h]);
    } else u = l;
    return l = u.ref, {
      $$typeof: n,
      type: s,
      key: f,
      ref: l !== void 0 ? l : null,
      props: u
    };
  }
  return T.Fragment = o, T.jsx = a, T.jsxs = a, T;
}
var O = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function fe() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case X:
          return "Profiler";
        case P:
          return "StrictMode";
        case K:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case v:
            return "Portal";
          case Z:
            return e.displayName || "Context";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case te:
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
    function o(e) {
      return "" + e;
    }
    function a(e) {
      try {
        o(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var i = r.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), o(e);
      }
    }
    function s(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = N.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function h(e, r) {
      function i() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function _() {
      var e = n(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function p(e, r, i, c, A, B) {
      var d = i.ref;
      return e = {
        $$typeof: R,
        type: e,
        key: r,
        props: i,
        _owner: c
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: _
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
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, r, i, c, A, B) {
      var d = r.children;
      if (d !== void 0)
        if (c)
          if (oe(d)) {
            for (c = 0; c < d.length; c++)
              b(d[c]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(d);
      if (W.call(r, "key")) {
        d = n(e);
        var j = Object.keys(r).filter(function(ae) {
          return ae !== "key";
        });
        c = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", U[d + c] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          d,
          j,
          d
        ), U[d + c] = !0);
      }
      if (d = null, i !== void 0 && (a(i), d = "" + i), f(r) && (a(r.key), d = "" + r.key), "key" in r) {
        i = {};
        for (var F in r)
          F !== "key" && (i[F] = r[F]);
      } else i = r;
      return d && h(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), p(
        e,
        d,
        i,
        l(),
        A,
        B
      );
    }
    function b(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === I && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    var m = ie, R = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), N = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, oe = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var M, Y = {}, D = m.react_stack_bottom_frame.bind(
      m,
      u
    )(), L = z(s(u)), U = {};
    O.Fragment = w, O.jsx = function(e, r, i) {
      var c = 1e4 > N.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        i,
        !1,
        c ? Error("react-stack-top-frame") : D,
        c ? z(s(e)) : L
      );
    }, O.jsxs = function(e, r, i) {
      var c = 1e4 > N.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        i,
        !0,
        c ? Error("react-stack-top-frame") : D,
        c ? z(s(e)) : L
      );
    };
  }()), O;
}
process.env.NODE_ENV === "production" ? C.exports = ue() : C.exports = fe();
var t = C.exports;
const y = {
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
async function pe() {
  try {
    const n = (await import("./html2canvas.esm-d2sM-0Wm.mjs")).default;
    return (await n(document.body, { useCORS: !0, logging: !1 })).toDataURL("image/jpeg", 0.7);
  } catch {
    return null;
  }
}
function xe() {
  return {
    userAgent: navigator.userAgent,
    url: window.location.href,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language
  };
}
function me({ onSubmitted: n }) {
  const { config: o } = q(), [a, s] = E(""), [l, u] = E(""), [f, h] = E(!1), [_, p] = E(""), x = async (b) => {
    var S;
    if (b.preventDefault(), !!a.trim()) {
      h(!0), p("");
      try {
        const [m, R] = await Promise.all([
          pe(),
          Promise.resolve(xe())
        ]), v = ((S = o.getUser) == null ? void 0 : S.call(o)) ?? null, w = await fetch(o.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: o.token,
            title: a.trim(),
            description: l.trim() || void 0,
            browser_info: R,
            screenshot_base64: m ?? void 0,
            reporter_name: (v == null ? void 0 : v.name) ?? void 0,
            reporter_email: (v == null ? void 0 : v.email) ?? void 0
          })
        });
        if (!w.ok) {
          const P = await w.json().catch(() => ({}));
          throw new Error(P.error || "Fehler beim Senden");
        }
        n();
      } catch (m) {
        p(m.message || "Unbekannter Fehler");
      } finally {
        h(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs("form", { onSubmit: x, style: y.body, children: [
    /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: "12px" }, children: [
      /* @__PURE__ */ t.jsx("label", { style: y.label, children: "Was ist passiert? *" }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          style: y.input,
          value: a,
          onChange: (b) => s(b.target.value),
          placeholder: "Kurze Zusammenfassung",
          required: !0,
          autoFocus: !0
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx("label", { style: y.label, children: "Beschreibung (optional)" }),
      /* @__PURE__ */ t.jsx(
        "textarea",
        {
          style: y.textarea,
          value: l,
          onChange: (b) => u(b.target.value),
          placeholder: "Was hast du erwartet? Was ist stattdessen passiert?"
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { style: y.meta, children: [
      /* @__PURE__ */ t.jsx("span", { children: "📸" }),
      /* @__PURE__ */ t.jsx("span", { children: "Screenshot + Browser-Info wird automatisch mitgeschickt" })
    ] }),
    _ && /* @__PURE__ */ t.jsx("p", { style: y.error, children: _ }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "submit",
        style: { ...y.submitBtn, opacity: f ? 0.7 : 1 },
        disabled: f || !a.trim(),
        children: f ? "Wird gesendet…" : "Bug melden"
      }
    )
  ] });
}
const k = {
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
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    fontSize: "20px"
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
function be() {
  const { open: n, setOpen: o } = q(), [a, s] = E(!1), l = se(null);
  J(() => {
    n || s(!1);
  }, [n]);
  const u = () => {
    s(!0), setTimeout(() => o(!1), 2e3);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        style: k.fab,
        onClick: () => o(!n),
        title: "Bug melden",
        onMouseEnter: (f) => {
          f.currentTarget.style.transform = "scale(1.08)";
        },
        onMouseLeave: (f) => {
          f.currentTarget.style.transform = "scale(1)";
        },
        children: "🐛"
      }
    ),
    n && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx("div", { style: k.overlay, onClick: () => o(!1) }),
      /* @__PURE__ */ t.jsxs("div", { style: k.dialog, ref: l, children: [
        /* @__PURE__ */ t.jsxs("div", { style: k.header, children: [
          /* @__PURE__ */ t.jsx("span", { style: k.headerTitle, children: "🐛 Bug melden" }),
          /* @__PURE__ */ t.jsx("button", { style: k.closeBtn, onClick: () => o(!1), children: "×" })
        ] }),
        a ? /* @__PURE__ */ t.jsxs("div", { style: { padding: "32px 16px", textAlign: "center" }, children: [
          /* @__PURE__ */ t.jsx("div", { style: { fontSize: "32px", marginBottom: "8px" }, children: "✅" }),
          /* @__PURE__ */ t.jsx("p", { style: { fontSize: "14px", color: "#444", margin: 0 }, children: "Danke! Bug wurde gemeldet." })
        ] }) : /* @__PURE__ */ t.jsx(me, { onSubmitted: u })
      ] })
    ] })
  ] });
}
const G = le(null);
function q() {
  const n = ce(G);
  if (!n) throw new Error("useBugReporter must be used within BugReporterProvider");
  return n;
}
function ye({ config: n, children: o }) {
  const [a, s] = E(!1), l = n.enabled !== !1;
  return /* @__PURE__ */ t.jsxs(G.Provider, { value: { config: n, open: a, setOpen: s }, children: [
    o,
    l && /* @__PURE__ */ t.jsx(be, {})
  ] });
}
const ge = "https://support.maitrx.ai", he = "tineon_bug_reporter_config", g = {
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "20px",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    maxWidth: "460px",
    background: "#fff"
  },
  title: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#111",
    marginBottom: "4px"
  },
  subtitle: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "20px"
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "9px 16px",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit"
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "9px 16px",
    background: "#f3f4f6",
    color: "#111",
    border: "1px solid #e5e7eb",
    borderRadius: "7px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit"
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "12px"
  },
  badge: (n) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    padding: "3px 8px",
    borderRadius: "99px",
    fontSize: "11px",
    fontWeight: 600,
    background: n ? "#dcfce7" : "#f3f4f6",
    color: n ? "#166534" : "#555"
  }),
  toggle: {
    position: "relative",
    width: "36px",
    height: "20px",
    cursor: "pointer"
  },
  label: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "2px"
  },
  meta: {
    fontSize: "12px",
    color: "#999"
  },
  divider: {
    borderTop: "1px solid #f0f0f0",
    margin: "16px 0"
  }
};
function Se({
  maitrxUrl: n = ge,
  storageKey: o = he,
  onConfigChange: a
}) {
  const [s, l] = E(null);
  J(() => {
    try {
      const p = localStorage.getItem(o);
      if (p) {
        const x = JSON.parse(p);
        l(x), a == null || a(x);
      }
    } catch {
    }
  }, [o]);
  const u = de((p) => {
    p ? localStorage.setItem(o, JSON.stringify(p)) : localStorage.removeItem(o), l(p), a == null || a(p);
  }, [o, a]), f = () => {
    const p = `${n}/auth/plugin-connect`, x = window.open(p, "maitrx-connect", "width=440,height=600,left=200,top=100"), b = (m) => {
      var R;
      ((R = m.data) == null ? void 0 : R.type) === "MAITRX_PLUGIN_CONNECT" && (window.removeEventListener("message", b), x == null || x.close(), u({
        token: m.data.token,
        endpoint: m.data.endpoint,
        productName: m.data.productName,
        enabled: !0
      }));
    };
    window.addEventListener("message", b);
    const S = setInterval(() => {
      x != null && x.closed && (clearInterval(S), window.removeEventListener("message", b));
    }, 500);
  }, h = () => {
    s && u({ ...s, enabled: !s.enabled });
  }, _ = () => {
    u(null);
  };
  return /* @__PURE__ */ t.jsxs("div", { style: g.card, children: [
    /* @__PURE__ */ t.jsx("div", { style: g.title, children: "🐛 Bug Reporter" }),
    /* @__PURE__ */ t.jsx("div", { style: g.subtitle, children: "Verbinde diese App mit Maitrx um Bug-Reports direkt ins interne Tool zu senden." }),
    s ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsxs("div", { style: g.row, children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("div", { style: g.label, children: "Verbunden mit" }),
          /* @__PURE__ */ t.jsx("div", { style: { fontSize: "14px", fontWeight: 600, color: "#111" }, children: s.productName })
        ] }),
        /* @__PURE__ */ t.jsx("span", { style: g.badge(s.enabled), children: s.enabled ? "● Aktiv" : "○ Inaktiv" })
      ] }),
      /* @__PURE__ */ t.jsx("div", { style: g.divider }),
      /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ t.jsx("button", { style: g.btnSecondary, onClick: h, children: s.enabled ? "Deaktivieren" : "Aktivieren" }),
        /* @__PURE__ */ t.jsx("button", { style: g.btnSecondary, onClick: f, children: "Neu verbinden" }),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            style: { ...g.btnSecondary, color: "#dc2626", borderColor: "#fecaca" },
            onClick: _,
            children: "Trennen"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { style: { ...g.meta, marginTop: "12px" }, children: "Token wird sicher im localStorage gespeichert." })
    ] }) : /* @__PURE__ */ t.jsxs("button", { style: g.btn, onClick: f, children: [
      /* @__PURE__ */ t.jsx("span", { children: "🔗" }),
      " Mit Maitrx anmelden"
    ] })
  ] });
}
export {
  ye as BugReporterProvider,
  Se as BugReporterSettings
};
