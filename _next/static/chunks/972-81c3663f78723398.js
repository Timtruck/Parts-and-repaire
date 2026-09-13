"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[972], {
    465: (e, t, a) => {
        a.d(t, {
            CategoryTiles: () => h
        });
        var s = a(5155)
          , r = a(3657);
        let i = (0,
        a(4294).A)("ArrowRight", [["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }], ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]])
          , n = [{
            title: "Tailgates",
            blurb: "OEM and aftermarket tailgates for most makes — clean, ready to bolt on.",
            icon: "tailgate"
        }, {
            title: "Truck Beds",
            blurb: "Short and long beds, dually and single — inspected and shipped nationwide.",
            icon: "bed"
        }, {
            title: "Truck Toppers",
            blurb: "Camper shells and toppers in a range of colors and fits.",
            icon: "topper"
        }, {
            title: "Repairs",
            blurb: "Expert truck repair and part fitting by our Los Angeles team.",
            icon: "wrench"
        }];
        var l = a(686)
          , o = a(7134);
        let c = {
            tailgate: (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("rect", {
                    x: "3",
                    y: "7",
                    width: "18",
                    height: "11",
                    rx: "2"
                }), (0,
                s.jsx)("path", {
                    d: "M3 12h18"
                })]
            }),
            bed: (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("path", {
                    d: "M3 13l2-6h11l3 6"
                }), (0,
                s.jsx)("rect", {
                    x: "3",
                    y: "13",
                    width: "18",
                    height: "5",
                    rx: "1"
                })]
            }),
            topper: (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("path", {
                    d: "M4 16V9l8-4 8 4v7"
                }), (0,
                s.jsx)("path", {
                    d: "M4 16h16"
                })]
            }),
            wrench: (0,
            s.jsx)("path", {
                d: "M14 7a4 4 0 10-5 5l-5 5 3 3 5-5a4 4 0 002-8z"
            })
        }
          , d = {
            tailgate: "/media/tailgate.jpeg",
            bed: "/media/truckbed.jpeg",
            topper: "/media/toppers.jpeg",
            wrench: "/media/repairs.jpg"
        };
        function h() {
            return (0,
            s.jsx)("section", {
                id: "what-we-do",
                className: "bg-white py-16 sm:py-20",
                children: (0,
                s.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4",
                    children: [(0,
                    s.jsx)(o.w, {
                        eyebrow: "What We Do",
                        title: "Truck Parts & Repairs, Done Right"
                    }), (0,
                    s.jsx)("div", {
                        className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
                        children: n.map( (e, t) => (0,
                        s.jsxs)(r.P.a, {
                            href: l.jq.text,
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0,
                                amount: .3
                            },
                            transition: {
                                duration: .5,
                                delay: t % 4 * .1
                            },
                            className: "group relative block h-72 overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal transition hover:border-brand-red/40 sm:h-80",
                            children: [(0,
                            s.jsx)("img", {
                                src: d[e.icon],
                                alt: e.title,
                                loading: "lazy",
                                className: "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            }), (0,
                            s.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent"
                            }), (0,
                            s.jsxs)("div", {
                                className: "absolute inset-0 flex flex-col justify-end p-6",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "mb-3 grid h-10 w-10 place-items-center rounded-lg bg-brand-red text-white",
                                    children: (0,
                                    s.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.7",
                                        className: "h-6 w-6",
                                        children: c[e.icon]
                                    })
                                }), (0,
                                s.jsx)("h3", {
                                    className: "font-display text-2xl text-white",
                                    children: e.title
                                }), (0,
                                s.jsx)("p", {
                                    className: "mt-1 text-sm text-brand-silver",
                                    children: e.blurb
                                }), (0,
                                s.jsxs)("span", {
                                    className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white transition-all group-hover:gap-2",
                                    children: ["Ask About This ", (0,
                                    s.jsx)(i, {
                                        size: 16,
                                        "aria-hidden": !0
                                    })]
                                })]
                            })]
                        }, e.title))
                    })]
                })
            })
        }
    }
    ,
    686: (e, t, a) => {
        a.d(t, {
            _P: () => s,
            jq: () => i
        });
        let s = {
            name: "Franck Truck Parts and Repairs",
            shortName: "Franck Truck Parts",
            owner: "Franck SEUNG-JUNE",
            since: 2017,
            tagline: "Tailgates \xb7 Truck Beds \xb7 Truck Toppers \xb7 Repairs",
            addressLine: "1523 259th St, Los Angeles, CA",
            city: "Los Angeles",
            phoneDisplay: "(213) 876-3208",
            phoneTel: "+12138763208",
            whatsapp: "12138763208",
            email: "francktruckpartsandrepair@gmail.com",
            shipsNationwide: !0,
            mapsQuery: "1523 259th St, Los Angeles, CA"
        }
          , r = encodeURIComponent("Hi Franck Truck Parts, I'm looking for a part. Can you help?")
          , i = {
            call: "tel:".concat(s.phoneTel),
            text: "sms:".concat(s.phoneTel),
            whatsapp: "https://wa.me/".concat(s.whatsapp, "?text=").concat(r),
            email: "mailto:".concat(s.email),
            maps: "https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(s.mapsQuery)),
            mapsEmbed: "https://www.google.com/maps?q=".concat(encodeURIComponent(s.mapsQuery), "&output=embed")
        }
    }
    ,
    3068: (e, t, a) => {
        a.d(t, {
            WhyChoose: () => o
        });
        var s = a(5155)
          , r = a(3657)
          , i = a(686)
          , n = a(7134);
        let l = [{
            t: "The part you need, sourced fast",
            d: "Tailgates, beds, toppers and more — if we don't have it on the shelf, we'll track it down."
        }, {
            t: "Honest, fair pricing",
            d: "Quality used and aftermarket parts at prices that make sense. Ask for a quote and you'll see."
        }, {
            t: "Shipped to your door",
            d: "We pack carefully and ship to all 50 states from ".concat(i._P.city, ".")
        }, {
            t: "Repairs by people who know trucks",
            d: "Not just parts — our team fits and repairs, so you can drive away sorted."
        }];
        function o() {
            return (0,
            s.jsx)("section", {
                className: "bg-white py-20",
                children: (0,
                s.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4",
                    children: [(0,
                    s.jsx)(n.w, {
                        eyebrow: "Why Franck",
                        title: "Why Truck Owners Call Us First"
                    }), (0,
                    s.jsx)("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: l.map( (e, t) => (0,
                        s.jsxs)(r.P.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0,
                                amount: .3
                            },
                            transition: {
                                duration: .5,
                                delay: t % 2 * .1
                            },
                            className: "flex gap-4 rounded-xl bg-brand-silver/10 p-6",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "font-display text-2xl font-bold text-brand-red",
                                children: ["0", t + 1]
                            }), (0,
                            s.jsxs)("div", {
                                children: [(0,
                                s.jsx)("h3", {
                                    className: "mb-1 text-lg font-bold",
                                    children: e.t
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-sm text-brand-steel",
                                    children: e.d
                                })]
                            })]
                        }, e.t))
                    })]
                })
            })
        }
    }
    ,
    4068: (e, t, a) => {
        a.d(t, {
            CtaBand: () => h
        });
        var s = a(5155)
          , r = a(2115)
          , i = a(3657)
          , n = a(4269);
        let l = e => {
            let {text: t, colors: a={
                first: "#9E7AFF",
                second: "#FE8BBB"
            }, className: i, sparklesCount: l=10, ...c} = e
              , [d,h] = (0,
            r.useState)([])
              , p = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)( () => {
                let e = () => {
                    let e = "".concat(100 * Math.random(), "%")
                      , t = "".concat(100 * Math.random(), "%")
                      , s = Math.random() > .5 ? a.first : a.second
                      , r = 2 * Math.random()
                      , i = +Math.random() + .3
                      , n = 10 * Math.random() + 5;
                    return {
                        id: "".concat(e, "-").concat(t, "-").concat(Math.random().toString(36).slice(2)),
                        x: e,
                        y: t,
                        color: s,
                        delay: r,
                        scale: i,
                        lifespan: n
                    }
                }
                ;
                h(Array.from({
                    length: l
                }, e));
                let t = () => {
                    h(t => t.map(t => t.lifespan <= 0 ? e() : {
                        ...t,
                        lifespan: t.lifespan - .2
                    }))
                }
                  , s = null
                  , r = () => {
                    null === s && "visible" === document.visibilityState && (s = setInterval(t, 200))
                }
                  , i = () => {
                    null !== s && (clearInterval(s),
                    s = null)
                }
                  , n = p.current
                  , o = new IntersectionObserver(e => {
                    let[t] = e;
                    return t.isIntersecting ? r() : i()
                }
                ,{
                    threshold: 0
                });
                n && o.observe(n);
                let c = () => "visible" === document.visibilityState ? r() : i();
                return document.addEventListener("visibilitychange", c),
                () => {
                    i(),
                    o.disconnect(),
                    document.removeEventListener("visibilitychange", c)
                }
            }
            , [a.first, a.second, l]),
            (0,
            s.jsx)("div", {
                ref: p,
                className: (0,
                n.cn)("text-6xl font-bold", i),
                ...c,
                style: {
                    "--sparkles-first-color": "".concat(a.first),
                    "--sparkles-second-color": "".concat(a.second)
                },
                children: (0,
                s.jsxs)("span", {
                    className: "relative inline-block",
                    children: [d.map(e => (0,
                    s.jsx)(o, {
                        ...e
                    }, e.id)), (0,
                    s.jsx)("strong", {
                        children: t
                    })]
                })
            })
        }
          , o = e => {
            let {id: t, x: a, y: r, color: n, delay: l, scale: o} = e;
            return (0,
            s.jsx)(i.P.svg, {
                className: "pointer-events-none absolute z-20",
                initial: {
                    opacity: 0,
                    left: a,
                    top: r
                },
                animate: {
                    opacity: [0, 1, 0],
                    scale: [0, o, 0],
                    rotate: [75, 120, 150]
                },
                transition: {
                    duration: .8,
                    repeat: 1 / 0,
                    delay: l
                },
                width: "21",
                height: "21",
                viewBox: "0 0 21 21",
                children: (0,
                s.jsx)("path", {
                    d: "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",
                    fill: n
                })
            }, t)
        }
        ;
        var c = a(6576)
          , d = a(9396);
        function h(e) {
            let {heading: t="Looking for a part? We've probably got it.", sub: a="Call, text, or message us on WhatsApp and tell us what your truck needs."} = e
              , r = (0,
            d.j)();
            return (0,
            s.jsx)("section", {
                className: "bg-brand-red",
                children: (0,
                s.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4 py-14 text-center text-white",
                    children: [r ? (0,
                    s.jsx)("h2", {
                        className: "font-display text-3xl font-bold sm:text-4xl md:text-5xl",
                        children: t
                    }) : (0,
                    s.jsx)(l, {
                        text: t,
                        colors: {
                            first: "#ffffff",
                            second: "#ffd9d9"
                        },
                        sparklesCount: 6,
                        className: "font-display text-3xl font-bold sm:text-4xl md:text-5xl"
                    }), (0,
                    s.jsx)("p", {
                        className: "mx-auto mt-4 max-w-2xl text-white/90",
                        children: a
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-7 flex justify-center",
                        children: (0,
                        s.jsx)(c.U, {
                            variant: "dark"
                        })
                    }), (0,
                    s.jsx)("p", {
                        className: "mt-4 text-sm text-white/75",
                        children: "Taxes & fees are calculated separately by the cashier."
                    })]
                })
            })
        }
    }
    ,
    4269: (e, t, a) => {
        a.d(t, {
            cn: () => i
        });
        var s = a(2821)
          , r = a(5889);
        function i() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            return (0,
            r.QP)((0,
            s.$)(t))
        }
    }
    ,
    5858: (e, t, a) => {
        a.d(t, {
            FeatureRow: () => p
        });
        var s = a(5155)
          , r = a(3657)
          , i = a(4294);
        let n = (0,
        i.A)("Truck", [["path", {
            d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
            key: "wrbu53"
        }], ["path", {
            d: "M15 18H9",
            key: "1lyqi6"
        }], ["path", {
            d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
            key: "lysw3i"
        }], ["circle", {
            cx: "17",
            cy: "18",
            r: "2",
            key: "332jqn"
        }], ["circle", {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }]])
          , l = (0,
        i.A)("ShieldCheck", [["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }], ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]])
          , o = (0,
        i.A)("Headset", [["path", {
            d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
            key: "12oyoe"
        }], ["path", {
            d: "M21 16v2a4 4 0 0 1-4 4h-5",
            key: "1x7m43"
        }]])
          , c = (0,
        i.A)("BadgeCheck", [["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336"
        }], ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]])
          , d = [{
            title: "Nationwide Shipping",
            blurb: "We ship to all 50 states.",
            icon: "truck"
        }, {
            title: "Quality Guaranteed",
            blurb: "Every part inspected before it ships.",
            icon: "shield"
        }, {
            title: "Expert Support",
            blurb: "Talk to a real person who knows trucks.",
            icon: "headset"
        }, {
            title: "Since 2017",
            blurb: "Trusted by truck owners for years.",
            icon: "badge"
        }]
          , h = {
            truck: (0,
            s.jsx)(n, {
                size: 24,
                "aria-hidden": !0
            }),
            shield: (0,
            s.jsx)(l, {
                size: 24,
                "aria-hidden": !0
            }),
            headset: (0,
            s.jsx)(o, {
                size: 24,
                "aria-hidden": !0
            }),
            badge: (0,
            s.jsx)(c, {
                size: 24,
                "aria-hidden": !0
            })
        };
        function p() {
            return (0,
            s.jsx)("section", {
                className: "bg-brand-charcoal text-white",
                children: (0,
                s.jsx)("div", {
                    className: "mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4",
                    children: d.map( (e, t) => (0,
                    s.jsxs)(r.P.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0,
                            amount: .3
                        },
                        transition: {
                            duration: .5,
                            delay: t % 4 * .1
                        },
                        className: "flex items-start gap-4",
                        children: [(0,
                        s.jsx)("div", {
                            className: "grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-red/15 text-brand-red",
                            children: h[e.icon]
                        }), (0,
                        s.jsxs)("div", {
                            children: [(0,
                            s.jsx)("h3", {
                                className: "text-lg font-bold",
                                children: e.title
                            }), (0,
                            s.jsx)("p", {
                                className: "text-sm text-brand-silver",
                                children: e.blurb
                            })]
                        })]
                    }, e.title))
                })
            })
        }
    }
    ,
    6576: (e, t, a) => {
        a.d(t, {
            U: () => c
        });
        var s = a(5155)
          , r = a(7500)
          , i = a(9679)
          , n = a(7974)
          , l = a(686)
          , o = a(9666);
        function c(e) {
            let {variant: t="light"} = e
              , a = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition";
            return (0,
            s.jsxs)("div", {
                className: "flex flex-wrap gap-3",
                children: [(0,
                s.jsx)(o.AnimatedButton, {
                    href: l.jq.call,
                    label: "Call ".concat(l._P.phoneDisplay),
                    className: "px-6 py-3 text-base"
                }), (0,
                s.jsxs)("a", {
                    href: l.jq.text,
                    className: "".concat(a, " ").concat("dark" === t ? "bg-white/10 text-white hover:bg-white/20" : "bg-brand-charcoal text-white hover:bg-brand-black"),
                    children: [(0,
                    s.jsx)(r.A, {
                        size: 18,
                        "aria-hidden": !0
                    }), " Text"]
                }), (0,
                s.jsxs)("a", {
                    href: l.jq.whatsapp,
                    target: "_blank",
                    rel: "noopener",
                    className: "".concat(a, " bg-[#25D366] text-white hover:brightness-95"),
                    children: [(0,
                    s.jsx)(i.A, {
                        size: 18,
                        "aria-hidden": !0
                    }), " WhatsApp"]
                }), (0,
                s.jsxs)("a", {
                    href: l.jq.email,
                    className: "".concat(a, " ").concat("dark" === t ? "bg-white/10 text-white hover:bg-white/20" : "bg-brand-silver/40 text-brand-black hover:bg-brand-silver/60"),
                    children: [(0,
                    s.jsx)(n.A, {
                        size: 18,
                        "aria-hidden": !0
                    }), " Email"]
                })]
            })
        }
    }
    ,
    7134: (e, t, a) => {
        a.d(t, {
            w: () => i
        });
        var s = a(5155)
          , r = a(3657);
        function i(e) {
            let {eyebrow: t, title: a, center: i=!0, dark: n=!1} = e;
            return (0,
            s.jsxs)(r.P.div, {
                initial: {
                    opacity: 0,
                    y: 24
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0,
                    amount: .4
                },
                transition: {
                    duration: .6
                },
                className: "".concat(i ? "mx-auto text-center" : "", " mb-12 max-w-2xl"),
                children: [t && (0,
                s.jsx)("p", {
                    className: "mb-2 text-sm font-semibold uppercase tracking-widest text-brand-red",
                    children: t
                }), (0,
                s.jsx)("h2", {
                    className: "text-3xl font-bold sm:text-4xl md:text-5xl ".concat(n ? "text-white" : "text-brand-black"),
                    children: a
                })]
            })
        }
    }
    ,
    9396: (e, t, a) => {
        a.d(t, {
            j: () => r
        });
        var s = a(2115);
        function r() {
            let[e,t] = (0,
            s.useState)(!1);
            return (0,
            s.useEffect)( () => {
                let e = window.matchMedia("(prefers-reduced-motion: reduce)");
                t(e.matches);
                let a = () => t(e.matches);
                return e.addEventListener("change", a),
                () => e.removeEventListener("change", a)
            }
            , []),
            e
        }
    }
    ,
    9666: (e, t, a) => {
        a.d(t, {
            AnimatedButton: () => n
        });
        var s = a(5155)
          , r = a(3263)
          , i = a(4269);
        function n(e) {
            let {href: t, label: a, external: n, className: l} = e;
            return (0,
            s.jsxs)("a", {
                href: t,
                ...n ? {
                    target: "_blank",
                    rel: "noopener"
                } : {},
                className: (0,
                i.cn)("group relative inline-flex items-center overflow-hidden rounded-lg bg-brand-red px-7 py-4 text-lg font-semibold text-white transition hover:bg-brand-red-dark", l),
                children: [(0,
                s.jsx)("span", {
                    className: "mr-8 transition-opacity duration-500 group-hover:opacity-0",
                    children: a
                }), (0,
                s.jsx)("i", {
                    className: "absolute right-1 top-1 bottom-1 z-10 grid w-1/4 place-items-center rounded-sm bg-white/20 transition-all duration-500 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95",
                    children: (0,
                    s.jsx)(r.A, {
                        size: 18,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                    })
                })]
            })
        }
    }
}]);
