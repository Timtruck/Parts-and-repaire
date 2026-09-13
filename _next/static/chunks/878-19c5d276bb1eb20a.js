(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[878], {
    63: (e, t, n) => {
        "use strict";
        var r = n(7260);
        n.o(r, "usePathname") && n.d(t, {
            usePathname: function() {
                return r.usePathname
            }
        })
    }
    ,
    2241: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => r
        });
        let r = (0,
        n(4294).A)("Menu", [["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }], ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }], ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]])
    }
    ,
    2296: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            DecodeError: function() {
                return m
            },
            MiddlewareNotFoundError: function() {
                return h
            },
            MissingStaticPage: function() {
                return v
            },
            NormalizeError: function() {
                return y
            },
            PageNotFoundError: function() {
                return g
            },
            SP: function() {
                return d
            },
            ST: function() {
                return p
            },
            WEB_VITALS: function() {
                return n
            },
            execOnce: function() {
                return r
            },
            getDisplayName: function() {
                return l
            },
            getLocationOrigin: function() {
                return i
            },
            getURL: function() {
                return u
            },
            isAbsoluteUrl: function() {
                return a
            },
            isResSent: function() {
                return s
            },
            loadGetInitialProps: function() {
                return f
            },
            normalizeRepeatedSlashes: function() {
                return c
            },
            stringifyError: function() {
                return b
            }
        });
        let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function r(e) {
            let t, n = !1;
            return function() {
                for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return n || (n = !0,
                t = e(...o)),
                t
            }
        }
        let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , a = e => o.test(e);
        function i() {
            let {protocol: e, hostname: t, port: n} = window.location;
            return e + "//" + t + (n ? ":" + n : "")
        }
        function u() {
            let {href: e} = window.location
              , t = i();
            return e.substring(t.length)
        }
        function l(e) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
        }
        function s(e) {
            return e.finished || e.headersSent
        }
        function c(e) {
            let t = e.split("?");
            return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
        }
        async function f(e, t) {
            let n = t.res || t.ctx && t.ctx.res;
            if (!e.getInitialProps)
                return t.ctx && t.Component ? {
                    pageProps: await f(t.Component, t.ctx)
                } : {};
            let r = await e.getInitialProps(t);
            if (n && s(n))
                return r;
            if (!r)
                throw Object.defineProperty(Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.'), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
            return r
        }
        let d = "undefined" != typeof performance
          , p = d && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
        class m extends Error {
        }
        class y extends Error {
        }
        class g extends Error {
            constructor(e) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + e
            }
        }
        class v extends Error {
            constructor(e, t) {
                super(),
                this.message = "Failed to load static file for page: " + e + " " + t
            }
        }
        class h extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function b(e) {
            return JSON.stringify({
                message: e.message,
                stack: e.stack
            })
        }
    }
    ,
    2619: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return g
            },
            useLinkStatus: function() {
                return h
            }
        });
        let r = n(9417)
          , o = n(5155)
          , a = r._(n(2115))
          , i = n(7670)
          , u = n(6752)
          , l = n(3011)
          , s = n(2296)
          , c = n(6058);
        n(4781);
        let f = n(3499)
          , d = n(8607)
          , p = n(1807);
        n(7045);
        let m = n(6048);
        function y(e) {
            return "string" == typeof e ? e : (0,
            i.formatUrl)(e)
        }
        function g(e) {
            var t;
            let n, r, i, [g,h] = (0,
            a.useOptimistic)(f.IDLE_LINK_STATUS), b = (0,
            a.useRef)(null), {href: S, as: P, children: O, prefetch: A=null, passHref: E, replace: _, shallow: j, scroll: w, onClick: L, onMouseEnter: x, onTouchStart: C, legacyBehavior: R=!1, onNavigate: T, ref: N, unstable_dynamicOnHover: D, ...I} = e;
            n = O,
            R && ("string" == typeof n || "number" == typeof n) && (n = (0,
            o.jsx)("a", {
                children: n
            }));
            let k = a.default.useContext(u.AppRouterContext)
              , M = !1 !== A
              , F = !1 !== A ? null === (t = A) || "auto" === t ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR
              , {href: U, as: z} = a.default.useMemo( () => {
                let e = y(S);
                return {
                    href: e,
                    as: P ? y(P) : e
                }
            }
            , [S, P]);
            R && (r = a.default.Children.only(n));
            let B = R ? r && "object" == typeof r && r.ref : N
              , K = a.default.useCallback(e => (null !== k && (b.current = (0,
            f.mountLinkInstance)(e, U, k, F, M, h)),
            () => {
                b.current && ((0,
                f.unmountLinkForCurrentNavigation)(b.current),
                b.current = null),
                (0,
                f.unmountPrefetchableInstance)(e)
            }
            ), [M, U, k, F, h])
              , V = {
                ref: (0,
                l.useMergedRef)(K, B),
                onClick(e) {
                    R || "function" != typeof L || L(e),
                    R && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    k && (e.defaultPrevented || function(e, t, n, r, o, i, u) {
                        let {nodeName: l} = e.currentTarget;
                        if (!("A" === l.toUpperCase() && function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || e.currentTarget.hasAttribute("download"))) {
                            if (!(0,
                            d.isLocalURL)(t)) {
                                o && (e.preventDefault(),
                                location.replace(t));
                                return
                            }
                            if (e.preventDefault(),
                            u) {
                                let e = !1;
                                if (u({
                                    preventDefault: () => {
                                        e = !0
                                    }
                                }),
                                e)
                                    return
                            }
                            a.default.startTransition( () => {
                                (0,
                                p.dispatchNavigateAction)(n || t, o ? "replace" : "push", null == i || i, r.current)
                            }
                            )
                        }
                    }(e, U, z, b, _, w, T))
                },
                onMouseEnter(e) {
                    R || "function" != typeof x || x(e),
                    R && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    k && M && (0,
                    f.onNavigationIntent)(e.currentTarget, !0 === D)
                },
                onTouchStart: function(e) {
                    R || "function" != typeof C || C(e),
                    R && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    k && M && (0,
                    f.onNavigationIntent)(e.currentTarget, !0 === D)
                }
            };
            return (0,
            s.isAbsoluteUrl)(z) ? V.href = z : R && !E && ("a" !== r.type || "href" in r.props) || (V.href = (0,
            c.addBasePath)(z)),
            i = R ? a.default.cloneElement(r, V) : (0,
            o.jsx)("a", {
                ...I,
                ...V,
                children: n
            }),
            (0,
            o.jsx)(v.Provider, {
                value: g,
                children: i
            })
        }
        let v = (0,
        a.createContext)(f.IDLE_LINK_STATUS)
          , h = () => (0,
        a.useContext)(v);
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    2750: e => {
        e.exports = {
            style: {
                fontFamily: "'Anton', 'Anton Fallback'",
                fontWeight: 400,
                fontStyle: "normal"
            },
            className: "__className_ec6dc7",
            variable: "__variable_ec6dc7"
        }
    }
    ,
    3078: (e, t) => {
        "use strict";
        function n(e) {
            let t = {};
            for (let[n,r] of e.entries()) {
                let e = t[n];
                void 0 === e ? t[n] = r : Array.isArray(e) ? e.push(r) : t[n] = [e, r]
            }
            return t
        }
        function r(e) {
            return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
        }
        function o(e) {
            let t = new URLSearchParams;
            for (let[n,o] of Object.entries(e))
                if (Array.isArray(o))
                    for (let e of o)
                        t.append(n, r(e));
                else
                    t.set(n, r(o));
            return t
        }
        function a(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            for (let t of n) {
                for (let n of t.keys())
                    e.delete(n);
                for (let[n,r] of t.entries())
                    e.append(n, r)
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            assign: function() {
                return a
            },
            searchParamsToUrlQuery: function() {
                return n
            },
            urlQueryToSearchParams: function() {
                return o
            }
        })
    }
    ,
    4652: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return u
            }
        });
        let r = n(8140)
          , o = n(5040)
          , a = n(1356)
          , i = r._(n(1124));
        function u(e) {
            let {props: t} = (0,
            o.getImgProps)(e, {
                defaultLoader: i.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image/",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
        let l = a.Image
    }
    ,
    5239: (e, t, n) => {
        "use strict";
        n.d(t, {
            default: () => o.a
        });
        var r = n(4652)
          , o = n.n(r)
    }
    ,
    6615: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => r
        });
        let r = (0,
        n(4294).A)("X", [["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }], ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]])
    }
    ,
    7045: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "errorOnce", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = e => {}
    }
    ,
    7670: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            formatUrl: function() {
                return a
            },
            formatWithValidation: function() {
                return u
            },
            urlObjectKeys: function() {
                return i
            }
        });
        let r = n(9417)._(n(3078))
          , o = /https?|ftp|gopher|file/;
        function a(e) {
            let {auth: t, hostname: n} = e
              , a = e.protocol || ""
              , i = e.pathname || ""
              , u = e.hash || ""
              , l = e.query || ""
              , s = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
            e.host ? s = t + e.host : n && (s = t + (~n.indexOf(":") ? "[" + n + "]" : n),
            e.port && (s += ":" + e.port)),
            l && "object" == typeof l && (l = String(r.urlQueryToSearchParams(l)));
            let c = e.search || l && "?" + l || "";
            return a && !a.endsWith(":") && (a += ":"),
            e.slashes || (!a || o.test(a)) && !1 !== s ? (s = "//" + (s || ""),
            i && "/" !== i[0] && (i = "/" + i)) : s || (s = ""),
            u && "#" !== u[0] && (u = "#" + u),
            c && "?" !== c[0] && (c = "?" + c),
            "" + a + s + (i = i.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + u
        }
        let i = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function u(e) {
            return a(e)
        }
    }
    ,
    7841: e => {
        e.exports = {
            style: {
                fontFamily: "'Work Sans', 'Work Sans Fallback'",
                fontStyle: "normal"
            },
            className: "__className_a2025e",
            variable: "__variable_a2025e"
        }
    }
    ,
    7853: function(e, t, n) {
        (function(e, t, n) {
            "use strict";
            function r(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var o = r(t)
              , a = r(n);
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })),
                    n.push.apply(n, r)
                }
                return n
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        var r, o;
                        r = t,
                        o = n[t],
                        (r = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r)
                                        return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(r)) in e ? Object.defineProperty(e, r, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            function s(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n = {};
                    for (var r in e)
                        if (({}).hasOwnProperty.call(e, r)) {
                            if (t.includes(r))
                                continue;
                            n[r] = e[r]
                        }
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.includes(n) || ({}).propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var c = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"]
              , f = function(e, t) {
                var r, u = e.animationData, f = e.loop, d = e.autoplay, p = e.initialSegment, m = e.onComplete, y = e.onLoopComplete, g = e.onEnterFrame, v = e.onSegmentStart, h = e.onConfigReady, b = e.onDataReady, S = e.onDataFailed, P = e.onLoadedImages, O = e.onDOMLoaded, A = e.onDestroy;
                e.lottieRef,
                e.renderer,
                e.name,
                e.assetsPath,
                e.rendererSettings;
                var E = s(e, c)
                  , _ = function(e) {
                    if (Array.isArray(e))
                        return e
                }(r = n.useState(!1)) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a, i, u = [], l = !0, s = !1;
                        try {
                            a = (n = n.call(e)).next,
                            !1;
                            for (; !(l = (r = a.call(n)).done) && (u.push(r.value),
                            u.length !== t); l = !0)
                                ;
                        } catch (e) {
                            s = !0,
                            o = e
                        } finally {
                            try {
                                if (!l && null != n.return && (i = n.return(),
                                Object(i) !== i))
                                    return
                            } finally {
                                if (s)
                                    throw o
                            }
                        }
                        return u
                    }
                }(r, 2) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return i(e, 2);
                        var n = ({}).toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                    }
                }(r, 2) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
                  , j = _[0]
                  , w = _[1]
                  , L = n.useRef()
                  , x = n.useRef(null)
                  , C = function() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (x.current) {
                        null == (t = L.current) || t.destroy();
                        var r = l(l(l({}, e), n), {}, {
                            container: x.current
                        });
                        return L.current = o.default.loadAnimation(r),
                        w(!!L.current),
                        function() {
                            var e;
                            null == (e = L.current) || e.destroy(),
                            L.current = void 0
                        }
                    }
                };
                return n.useEffect(function() {
                    var e = C();
                    return function() {
                        return null == e ? void 0 : e()
                    }
                }, [u, f]),
                n.useEffect(function() {
                    L.current && (L.current.autoplay = !!d)
                }, [d]),
                n.useEffect(function() {
                    if (L.current) {
                        if (!p)
                            return void L.current.resetSegments(!0);
                        Array.isArray(p) && p.length && ((L.current.currentRawFrame < p[0] || L.current.currentRawFrame > p[1]) && (L.current.currentRawFrame = p[0]),
                        L.current.setSegment(p[0], p[1]))
                    }
                }, [p]),
                n.useEffect(function() {
                    var e = [{
                        name: "complete",
                        handler: m
                    }, {
                        name: "loopComplete",
                        handler: y
                    }, {
                        name: "enterFrame",
                        handler: g
                    }, {
                        name: "segmentStart",
                        handler: v
                    }, {
                        name: "config_ready",
                        handler: h
                    }, {
                        name: "data_ready",
                        handler: b
                    }, {
                        name: "data_failed",
                        handler: S
                    }, {
                        name: "loaded_images",
                        handler: P
                    }, {
                        name: "DOMLoaded",
                        handler: O
                    }, {
                        name: "destroy",
                        handler: A
                    }].filter(function(e) {
                        return null != e.handler
                    });
                    if (e.length) {
                        var t = e.map(function(e) {
                            var t;
                            return null == (t = L.current) || t.addEventListener(e.name, e.handler),
                            function() {
                                var t;
                                null == (t = L.current) || t.removeEventListener(e.name, e.handler)
                            }
                        });
                        return function() {
                            t.forEach(function(e) {
                                return e()
                            })
                        }
                    }
                }, [m, y, g, v, h, b, S, P, O, A]),
                {
                    View: a.default.createElement("div", l({
                        style: t,
                        ref: x
                    }, E)),
                    play: function() {
                        var e;
                        null == (e = L.current) || e.play()
                    },
                    stop: function() {
                        var e;
                        null == (e = L.current) || e.stop()
                    },
                    pause: function() {
                        var e;
                        null == (e = L.current) || e.pause()
                    },
                    setSpeed: function(e) {
                        var t;
                        null == (t = L.current) || t.setSpeed(e)
                    },
                    goToAndStop: function(e, t) {
                        var n;
                        null == (n = L.current) || n.goToAndStop(e, t)
                    },
                    goToAndPlay: function(e, t) {
                        var n;
                        null == (n = L.current) || n.goToAndPlay(e, t)
                    },
                    setDirection: function(e) {
                        var t;
                        null == (t = L.current) || t.setDirection(e)
                    },
                    playSegments: function(e, t) {
                        var n;
                        null == (n = L.current) || n.playSegments(e, t)
                    },
                    setSubframe: function(e) {
                        var t;
                        null == (t = L.current) || t.setSubframe(e)
                    },
                    getDuration: function(e) {
                        var t;
                        return null == (t = L.current) ? void 0 : t.getDuration(e)
                    },
                    destroy: function() {
                        var e;
                        null == (e = L.current) || e.destroy(),
                        L.current = void 0
                    },
                    animationContainerRef: x,
                    animationLoaded: j,
                    animationItem: L.current
                }
            }
              , d = function(e) {
                var t = e.wrapperRef
                  , r = e.animationItem
                  , o = e.mode
                  , a = e.actions;
                n.useEffect(function() {
                    var e, n, i, u, l, s = t.current;
                    if (s && r && a.length)
                        switch (r.stop(),
                        o) {
                        case "scroll":
                            return e = null,
                            n = function() {
                                var t, n, o, i = (n = (t = s.getBoundingClientRect()).top,
                                o = t.height,
                                (window.innerHeight - n) / (window.innerHeight + o)), u = a.find(function(e) {
                                    var t = e.visibility;
                                    return t && i >= t[0] && i <= t[1]
                                });
                                if (u) {
                                    if ("seek" === u.type && u.visibility && 2 === u.frames.length) {
                                        var l = u.frames[0] + Math.ceil((i - u.visibility[0]) / (u.visibility[1] - u.visibility[0]) * u.frames[1]);
                                        r.goToAndStop(l - r.firstFrame - 1, !0)
                                    }
                                    "loop" === u.type && (null === e || e !== u.frames ? (r.playSegments(u.frames, !0),
                                    e = u.frames) : r.isPaused && (r.playSegments(u.frames, !0),
                                    e = u.frames)),
                                    "play" === u.type && r.isPaused && (r.resetSegments(!0),
                                    r.play()),
                                    "stop" === u.type && r.goToAndStop(u.frames[0] - r.firstFrame - 1, !0)
                                }
                            }
                            ,
                            document.addEventListener("scroll", n),
                            function() {
                                document.removeEventListener("scroll", n)
                            }
                            ;
                        case "cursor":
                            return i = function(e, t) {
                                var n = e
                                  , o = t;
                                if (-1 !== n && -1 !== o) {
                                    var i, u, l, c, f, d = (i = n,
                                    u = o,
                                    c = (l = s.getBoundingClientRect()).top,
                                    f = l.left,
                                    {
                                        x: (i - f) / l.width,
                                        y: (u - c) / l.height
                                    });
                                    n = d.x,
                                    o = d.y
                                }
                                var p = a.find(function(e) {
                                    var t = e.position;
                                    return t && Array.isArray(t.x) && Array.isArray(t.y) ? n >= t.x[0] && n <= t.x[1] && o >= t.y[0] && o <= t.y[1] : !(!t || Number.isNaN(t.x) || Number.isNaN(t.y)) && n === t.x && o === t.y
                                });
                                if (p) {
                                    if ("seek" === p.type && p.position && Array.isArray(p.position.x) && Array.isArray(p.position.y) && 2 === p.frames.length) {
                                        var m = (n - p.position.x[0]) / (p.position.x[1] - p.position.x[0])
                                          , y = (o - p.position.y[0]) / (p.position.y[1] - p.position.y[0]);
                                        r.playSegments(p.frames, !0),
                                        r.goToAndStop(Math.ceil((m + y) / 2 * (p.frames[1] - p.frames[0])), !0)
                                    }
                                    "loop" === p.type && r.playSegments(p.frames, !0),
                                    "play" === p.type && (r.isPaused && r.resetSegments(!1),
                                    r.playSegments(p.frames)),
                                    "stop" === p.type && r.goToAndStop(p.frames[0], !0)
                                }
                            }
                            ,
                            u = function(e) {
                                i(e.clientX, e.clientY)
                            }
                            ,
                            l = function() {
                                i(-1, -1)
                            }
                            ,
                            s.addEventListener("mousemove", u),
                            s.addEventListener("mouseout", l),
                            function() {
                                s.removeEventListener("mousemove", u),
                                s.removeEventListener("mouseout", l)
                            }
                        }
                }, [o, r])
            }
              , p = function(e) {
                var t = e.actions
                  , n = e.mode
                  , r = e.lottieObj
                  , o = r.animationItem
                  , a = r.View;
                return d({
                    actions: t,
                    animationItem: o,
                    mode: n,
                    wrapperRef: r.animationContainerRef
                }),
                a
            }
              , m = ["style", "interactivity"];
            Object.defineProperty(e, "LottiePlayer", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }),
            e.default = function(e) {
                var t, r, o, a = e.style, i = e.interactivity, u = f(s(e, m), a), l = u.View, c = u.play, d = u.stop, y = u.pause, g = u.setSpeed, v = u.goToAndStop, h = u.goToAndPlay, b = u.setDirection, S = u.playSegments, P = u.setSubframe, O = u.getDuration, A = u.destroy, E = u.animationContainerRef, _ = u.animationLoaded, j = u.animationItem;
                return n.useEffect(function() {
                    e.lottieRef && (e.lottieRef.current = {
                        play: c,
                        stop: d,
                        pause: y,
                        setSpeed: g,
                        goToAndPlay: h,
                        goToAndStop: v,
                        setDirection: b,
                        playSegments: S,
                        setSubframe: P,
                        getDuration: O,
                        destroy: A,
                        animationContainerRef: E,
                        animationLoaded: _,
                        animationItem: j
                    })
                }, [null == (t = e.lottieRef) ? void 0 : t.current]),
                p({
                    lottieObj: {
                        View: l,
                        play: c,
                        stop: d,
                        pause: y,
                        setSpeed: g,
                        goToAndStop: v,
                        goToAndPlay: h,
                        setDirection: b,
                        playSegments: S,
                        setSubframe: P,
                        getDuration: O,
                        destroy: A,
                        animationContainerRef: E,
                        animationLoaded: _,
                        animationItem: j
                    },
                    actions: null != (r = null == i ? void 0 : i.actions) ? r : [],
                    mode: null != (o = null == i ? void 0 : i.mode) ? o : "scroll"
                })
            }
            ,
            e.useLottie = f,
            e.useLottieInteractivity = p,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        )(t, n(9081), n(2115))
    },
    8607: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let r = n(2296)
          , o = n(2929);
        function a(e) {
            if (!(0,
            r.isAbsoluteUrl)(e))
                return !0;
            try {
                let t = (0,
                r.getLocationOrigin)()
                  , n = new URL(e,t);
                return n.origin === t && (0,
                o.hasBasePath)(n.pathname)
            } catch (e) {
                return !1
            }
        }
    }
    ,
    8623: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => r
        });
        let r = (0,
        n(4294).A)("MessageCircle", [["path", {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }]])
    }
}]);
