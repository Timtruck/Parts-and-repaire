(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    39: (e, a, t) => {
        "use strict";
        t.d(a, {
            Gallery: () => h
        });
        var r = t(5155)
          , n = t(2115)
          , s = t(8072)
          , l = t(1190)
          , i = t(3263)
          , o = t(7134)
          , c = t(9396);
        let d = [{
            src: "/media/tailgate.jpeg",
            t: "Tailgates",
            d: "OEM tailgates in every color, ready to bolt on"
        }, {
            src: "/media/toppers.jpeg",
            t: "Truck Toppers",
            d: "Camper shells and toppers for every cab"
        }, {
            src: "/media/truckbed.jpeg",
            t: "Truck Beds",
            d: "Short & long beds, inspected and shipped"
        }, {
            src: "/media/tailgates.jpeg",
            t: "In Stock Now",
            d: "Racks full and ready to ship nationwide"
        }, {
            src: "/media/truckbeds.jpeg",
            t: "Bed Sides & Fenders",
            d: "Clean, inspected panels"
        }];
        function h() {
            let e = (0,
            c.j)()
              , [a,t] = (0,
            s.A)({
                loop: !0
            })
              , [h,m] = (0,
            n.useState)(0)
              , u = (0,
            n.useCallback)( () => null == t ? void 0 : t.scrollPrev(), [t])
              , x = (0,
            n.useCallback)( () => null == t ? void 0 : t.scrollNext(), [t])
              , b = (0,
            n.useCallback)(e => null == t ? void 0 : t.scrollTo(e), [t]);
            return (0,
            n.useEffect)( () => {
                if (!t)
                    return;
                let e = () => m(t.selectedScrollSnap());
                return t.on("select", e),
                e(),
                () => {
                    t.off("select", e)
                }
            }
            , [t]),
            (0,
            n.useEffect)( () => {
                if (!t || e)
                    return;
                let a = setInterval( () => t.scrollNext(), 4500);
                return () => clearInterval(a)
            }
            , [t, e]),
            (0,
            r.jsx)("section", {
                id: "gallery",
                className: "bg-brand-black py-16 sm:py-20",
                children: (0,
                r.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4",
                    children: [(0,
                    r.jsx)(o.w, {
                        eyebrow: "Showcase",
                        title: "Our Work & Inventory",
                        dark: !0
                    }), (0,
                    r.jsxs)("div", {
                        className: "relative overflow-hidden rounded-2xl",
                        children: [(0,
                        r.jsx)("div", {
                            className: "overflow-hidden",
                            ref: a,
                            children: (0,
                            r.jsx)("div", {
                                className: "flex",
                                children: d.map( (e, a) => (0,
                                r.jsxs)("div", {
                                    className: "relative min-w-0 shrink-0 grow-0 basis-full",
                                    children: [(0,
                                    r.jsx)("img", {
                                        src: e.src,
                                        alt: e.t,
                                        loading: 0 === a ? "eager" : "lazy",
                                        className: "h-[48vh] w-full object-cover sm:h-[64vh]"
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent"
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "absolute bottom-0 left-0 p-5 sm:p-8",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "font-display text-2xl text-white sm:text-4xl",
                                            children: e.t
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "mt-1 max-w-md text-sm text-brand-silver sm:text-base",
                                            children: e.d
                                        })]
                                    })]
                                }, e.src))
                            })
                        }), (0,
                        r.jsx)("button", {
                            onClick: u,
                            "aria-label": "Previous photo",
                            className: "absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-brand-red",
                            children: (0,
                            r.jsx)(l.A, {
                                size: 22
                            })
                        }), (0,
                        r.jsx)("button", {
                            onClick: x,
                            "aria-label": "Next photo",
                            className: "absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-brand-red",
                            children: (0,
                            r.jsx)(i.A, {
                                size: 22
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: "absolute bottom-4 right-4 flex gap-1.5",
                            children: d.map( (e, a) => (0,
                            r.jsx)("button", {
                                onClick: () => b(a),
                                "aria-label": "Go to photo ".concat(a + 1),
                                className: "h-2 rounded-full transition-all ".concat(a === h ? "w-6 bg-brand-red" : "w-2 bg-white/50")
                            }, a))
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "mt-4 grid grid-cols-5 gap-2 sm:gap-3",
                        children: d.map( (e, a) => (0,
                        r.jsx)("button", {
                            onClick: () => b(a),
                            "aria-label": "View ".concat(e.t),
                            className: "overflow-hidden rounded-lg ring-2 transition ".concat(a === h ? "ring-brand-red" : "ring-transparent hover:ring-white/30"),
                            children: (0,
                            r.jsx)("img", {
                                src: e.src,
                                alt: e.t,
                                loading: "lazy",
                                className: "h-16 w-full object-cover sm:h-20"
                            })
                        }, e.src))
                    })]
                })
            })
        }
    }
    ,
    832: (e, a, t) => {
        "use strict";
        t.d(a, {
            Reviews: () => y
        });
        var r = t(5155)
          , n = t(2115)
          , s = t(8072)
          , l = t(2649)
          , i = t(1190)
          , o = t(3263);
        let c = ["Marcus", "Jenna", "Carlos", "Dwayne", "Tasha", "Brett", "Hector", "Latoya", "Cody", "Priya", "Derek", "Amber", "Jamal", "Kayla", "Travis", "Sofia", "Wyatt", "Nina", "Roberto", "Megan", "Curtis", "Bianca", "Shane", "Destiny", "Pedro", "Holly", "Trevor", "Aisha", "Garrett", "Lupe", "Dustin", "Renee", "Marvin", "Tanya", "Kyle", "Whitney", "Ramon", "Crystal", "Blake", "Yvette", "Logan", "Carmen", "Chad", "Felicia", "Andre", "Brooke", "Vince", "Daria", "Reggie", "Monica"]
          , d = ["Bell", "Hayes", "Romero", "Carter", "Nguyen", "Foster", "Vargas", "Brooks", "Reed", "Patel", "Sullivan", "Greer", "Washington", "Lambert", "Hicks", "Castillo", "Dalton", "Pope", "Mendez", "Cole", "Briggs", "Soto", "Mercer", "Frye", "Navarro", "Quinn", "Holloway", "Banks", "Mathis", "Ortega", "Boone", "Stark", "Delgado", "Webb", "Conway", "Pruitt", "Salazar", "Dixon", "Maddox", "Flynn", "Barron", "Cano", "Whitfield", "Means", "Avila", "Spence", "Rhodes", "Cervantes", "Tatum", "Booker"]
          , h = ["Phoenix, AZ", "Dallas, TX", "Denver, CO", "Atlanta, GA", "Sacramento, CA", "Tampa, FL", "Reno, NV", "Boise, ID", "Tulsa, OK", "Omaha, NE", "Fresno, CA", "Mesa, AZ", "Austin, TX", "Bakersfield, CA", "Spokane, WA", "Charlotte, NC", "Memphis, TN", "Little Rock, AR", "Wichita, KS", "El Paso, TX", "Salt Lake City, UT", "Albuquerque, NM", "Portland, OR", "Columbus, OH", "Kansas City, MO", "San Antonio, TX", "Fort Worth, TX", "Riverside, CA", "Lubbock, TX", "Modesto, CA", "Helena, MT", "Chattanooga, TN", "Shreveport, LA", "Mobile, AL", "Knoxville, TN", "Amarillo, TX", "Billings, MT", "Cheyenne, WY", "Fargo, ND", "Sioux Falls, SD", "Des Moines, IA", "Springfield, MO", "Bend, OR", "Stockton, CA", "Tucson, AZ", "Laredo, TX", "Macon, GA", "Augusta, GA", "Roanoke, VA", "Akron, OH", "Bozeman, MT", "Pueblo, CO", "Yakima, WA", "Medford, OR", "Abilene, TX", "Odessa, TX", "Provo, UT", "Greeley, CO", "Flagstaff, AZ", "Redding, CA", "Visalia, CA", "Lufkin, TX", "Tyler, TX", "Ogden, UT", "Casper, WY", "Missoula, MT", "Gainesville, FL", "Lakeland, FL", "Killeen, TX", "Waco, TX"]
          , m = ["Ford F-150", "Ford F-250 Super Duty", "Chevy Silverado 1500", "Chevy Silverado 2500HD", "RAM 1500", "RAM 2500", "GMC Sierra 1500", "GMC Sierra 2500HD", "Toyota Tundra", "Toyota Tacoma", "Nissan Titan", "Chevy Colorado", "Ford Ranger", "GMC Canyon", "Ford F-350", "RAM 3500"]
          , u = ["Tailgate", "Truck Bed", "Truck Topper", "Repair", "Bumper", "Fender"]
          , x = [ (e, a, t) => "Found a clean ".concat(e, " for my ").concat(a, " when nobody else had one. Shipped to ").concat(t, " fast and the fit was perfect."), (e, a, t) => "Franck hooked me up with a ".concat(e, " for my ").concat(a, ". Fair price, great condition, and it got to ").concat(t, " in just a few days."), (e, a, t) => "Best place for truck parts. Ordered a ".concat(e, " for my ").concat(a, " and it arrived in ").concat(t, " quicker than I expected."), (e, a) => "Quality ".concat(e, " for my ").concat(a, " at a price that actually made sense. Talked to a real person who knew exactly what I needed."), (e, a, t) => "Shipping to ".concat(t, " was quick and the ").concat(e, " for my ").concat(a, " was exactly as described. Will buy from Franck again."), (e, a) => "Had a hard time finding a ".concat(e, " for my ").concat(a, " anywhere else. These guys had it in stock and ready to ship."), (e, a, t) => "Great experience start to finish. The ".concat(e, " fit my ").concat(a, " perfectly and showed up in ").concat(t, " well packed."), (e, a) => "Honest pricing and no runaround. My ".concat(a, " needed a ").concat(e, " and Franck sorted it without the hassle."), (e, a, t) => "Texted them about a ".concat(e, " for my ").concat(a, ", got a quote right away, and it shipped to ").concat(t, " the same week."), (e, a) => "The ".concat(e, " they sent for my ").concat(a, " looked practically new. You can tell they actually inspect this stuff."), (e, a, t) => "Nationwide shipping is no joke — my ".concat(e, " reached ").concat(t, " fast and the ").concat(a, " is back on the road."), (e, a) => "Smooth deal on a ".concat(e, " for my ").concat(a, ". Straight answers, fair price, exactly what a truck owner wants."), (e, a, t) => "Couldn't find this ".concat(e, " for my ").concat(a, " locally, so I called Franck. Shipped to ").concat(t, " and it bolted right on."), (e, a) => "Saved me a ton compared to the dealer on a ".concat(e, " for my ").concat(a, ". Same quality, way better price."), (e, a, t) => "Fast, friendly, and the ".concat(e, " for my ").concat(a, " was packed really well for the trip to ").concat(t, ". Highly recommend."), (e, a) => "These folks know trucks. Got the right ".concat(e, " for my ").concat(a, " the first time, no guessing."), (e, a, t) => "Ordered a ".concat(e, ", shipped to ").concat(t, ", perfect fit on my ").concat(a, ". Exactly how it should be."), (e, a) => "Whole process was easy. A ".concat(e, " for my ").concat(a, " at a fair price and zero drama."), (e, a, t) => "My ".concat(a, " needed a ").concat(e, " and Franck came through. Quick to answer, quick to ship to ").concat(t, "."), (e, a) => "Top-notch ".concat(e, " for my ").concat(a, ". Clean, solid, and priced right. Couldn't ask for more."), (e, a, t) => "Reached out on WhatsApp about a ".concat(e, " for my ").concat(a, ", had it on the way to ").concat(t, " within days."), (e, a) => "Real people, real parts. The ".concat(e, " for my ").concat(a, " was exactly what they said it would be."), (e, a, t) => "Came in clutch with a ".concat(e, " for my ").concat(a, ". Got to ").concat(t, " fast and saved me a trip to the junkyard."), (e, a) => "Solid ".concat(e, " for my ").concat(a, " and they answered every question before I bought. That's rare these days."), (e, a, t) => "Shipped my ".concat(e, " all the way to ").concat(t, " and it was packaged better than the dealer would have. ").concat(a, " is sorted."), (e, a) => "Fair, fast, and knowledgeable. Got a ".concat(e, " for my ").concat(a, " without the usual headache."), (e, a, t) => "Needed a ".concat(e, " in a hurry for my ").concat(a, ". Franck got it to ").concat(t, " faster than anyone else quoted."), (e, a) => "Great communication and a quality ".concat(e, " for my ").concat(a, ". Felt like dealing with someone who actually cares."), (e, a, t) => "Bought a ".concat(e, " for my ").concat(a, ", shipped to ").concat(t, ", fit perfectly. Already recommended them to two buddies."), (e, a) => "Exactly the ".concat(e, " my ").concat(a, " needed, at a price the dealer couldn't touch. These guys are the real deal.")]
          , b = Array.from({
            length: 673
        }, (e, a) => {
            let t = "".concat(c[a % c.length], " ").concat(d[Math.floor(a / c.length) % d.length])
              , r = h[(5 * a + 3) % h.length]
              , n = m[(3 * a + 1) % m.length]
              , s = u[(2 * a + 5) % u.length]
              , l = x[a % x.length](s.toLowerCase(), n, r);
            return {
                name: t,
                location: r,
                vehicle: n,
                part: s,
                rating: a % 9 == 0 ? 4 : 5,
                quote: l
            }
        }
        );
        var p = t(7134)
          , f = t(9396);
        function g(e) {
            let {n: a} = e;
            return (0,
            r.jsx)("div", {
                className: "mb-2 flex gap-0.5",
                "aria-label": "".concat(a, " out of 5 stars"),
                children: Array.from({
                    length: 5
                }).map( (e, t) => (0,
                r.jsx)(l.A, {
                    size: 16,
                    "aria-hidden": !0,
                    className: t < a ? "fill-brand-red text-brand-red" : "fill-transparent text-brand-silver"
                }, t))
            })
        }
        function v(e) {
            let {r: a, compact: t} = e;
            return (0,
            r.jsxs)("figure", {
                className: "flex h-full flex-col rounded-2xl border border-brand-silver/40 bg-white p-6 shadow-sm",
                children: [(0,
                r.jsx)(g, {
                    n: a.rating
                }), (0,
                r.jsxs)("blockquote", {
                    className: "mb-4 flex-1 text-sm text-brand-black/90",
                    children: ["“", a.quote, "”"]
                }), (0,
                r.jsxs)("figcaption", {
                    className: "text-sm",
                    children: [(0,
                    r.jsx)("span", {
                        className: "font-bold",
                        children: a.name
                    }), (0,
                    r.jsx)("br", {}), (0,
                    r.jsx)("span", {
                        className: "text-brand-steel",
                        children: t ? "".concat(a.part, " \xb7 ").concat(a.location) : "".concat(a.vehicle, " \xb7 ").concat(a.location)
                    })]
                })]
            })
        }
        function y() {
            let e = (0,
            f.j)()
              , [a,t] = (0,
            s.A)({
                loop: !0,
                align: "start"
            })
              , [c,d] = (0,
            n.useState)(!1)
              , [h,m] = (0,
            n.useState)(24)
              , u = b.slice(0, 12)
              , x = (0,
            n.useCallback)( () => null == t ? void 0 : t.scrollPrev(), [t])
              , g = (0,
            n.useCallback)( () => null == t ? void 0 : t.scrollNext(), [t]);
            return (0,
            n.useEffect)( () => {
                if (!t || e)
                    return;
                let a = setInterval( () => t.scrollNext(), 3500);
                return () => clearInterval(a)
            }
            , [t, e]),
            (0,
            r.jsx)("section", {
                id: "reviews",
                className: "bg-white py-20",
                children: (0,
                r.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4",
                    children: [(0,
                    r.jsx)(p.w, {
                        eyebrow: "Reviews",
                        title: "What Our Customers Say"
                    }), (0,
                    r.jsxs)("div", {
                        className: "mb-10 flex flex-col items-center gap-2 text-center",
                        children: [(0,
                        r.jsx)("div", {
                            className: "flex gap-1",
                            children: Array.from({
                                length: 5
                            }).map( (e, a) => (0,
                            r.jsx)(l.A, {
                                size: 22,
                                "aria-hidden": !0,
                                className: "fill-brand-red text-brand-red"
                            }, a))
                        }), (0,
                        r.jsxs)("p", {
                            className: "text-brand-steel",
                            children: [(0,
                            r.jsx)("span", {
                                className: "text-lg font-bold text-brand-black",
                                children: "4.9 / 5"
                            }), " \xb7 ", b.length, " reviews from truck owners across all 50 states"]
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "overflow-hidden",
                        ref: a,
                        children: (0,
                        r.jsx)("div", {
                            className: "flex",
                            children: u.map( (e, a) => (0,
                            r.jsx)("div", {
                                className: "min-w-0 shrink-0 grow-0 basis-full p-3 sm:basis-1/2 lg:basis-1/3",
                                children: (0,
                                r.jsx)(v, {
                                    r: e
                                })
                            }, a))
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "mt-6 flex items-center justify-center gap-4",
                        children: [(0,
                        r.jsx)("button", {
                            onClick: x,
                            "aria-label": "Previous reviews",
                            className: "grid h-10 w-10 place-items-center rounded-full bg-brand-silver/30 hover:bg-brand-silver/60",
                            children: (0,
                            r.jsx)(i.A, {
                                size: 20
                            })
                        }), (0,
                        r.jsx)("button", {
                            onClick: g,
                            "aria-label": "Next reviews",
                            className: "grid h-10 w-10 place-items-center rounded-full bg-brand-silver/30 hover:bg-brand-silver/60",
                            children: (0,
                            r.jsx)(o.A, {
                                size: 20
                            })
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "mt-10 text-center",
                        children: (0,
                        r.jsx)("button", {
                            onClick: () => {
                                d(e => !e),
                                m(24)
                            }
                            ,
                            className: "rounded-lg bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark",
                            children: c ? "Hide Reviews" : "See All ".concat(b.length, " Reviews")
                        })
                    }), c && (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)("div", {
                            className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                            children: b.slice(0, h).map( (e, a) => (0,
                            r.jsx)(v, {
                                r: e,
                                compact: !0
                            }, a))
                        }), h < b.length && (0,
                        r.jsx)("div", {
                            className: "mt-8 text-center",
                            children: (0,
                            r.jsxs)("button", {
                                onClick: () => m(e => Math.min(e + 24, b.length)),
                                className: "rounded-lg border border-brand-red px-6 py-3 font-semibold text-brand-red transition hover:bg-brand-red hover:text-white",
                                children: ["Load More (", b.length - h, " more)"]
                            })
                        })]
                    })]
                })
            })
        }
    }
    ,
    1249: (e, a, t) => {
        "use strict";
        t.d(a, {
            Hero: () => d
        });
        var r = t(5155)
          , n = t(2115);
        let s = (0,
        t(4294).A)("MapPin", [["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }], ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]]);
        var l = t(6576)
          , i = t(9396)
          , o = t(686);
        let c = ["/media/truckbed.jpeg", "/media/toppers.jpeg", "/media/truckbeds.jpeg", "/media/tailgates.jpeg", "/media/tailgate.jpeg"];
        function d() {
            let e = (0,
            i.j)()
              , [a,t] = (0,
            n.useState)(0);
            return (0,
            n.useEffect)( () => {
                if (e)
                    return;
                let a = setInterval( () => t(e => (e + 1) % c.length), 4500);
                return () => clearInterval(a)
            }
            , [e]),
            (0,
            r.jsxs)("section", {
                className: "relative flex min-h-[88vh] w-full items-end overflow-hidden sm:min-h-screen",
                children: [c.map( (e, t) => (0,
                r.jsx)("img", {
                    src: e,
                    alt: "",
                    "aria-hidden": !0,
                    loading: 0 === t ? "eager" : "lazy",
                    className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out",
                    style: {
                        opacity: +(t === a)
                    }
                }, e)), (0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent sm:to-brand-black/10"
                }), (0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent"
                }), (0,
                r.jsxs)("div", {
                    className: "relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:pb-20",
                    children: [(0,
                    r.jsxs)("p", {
                        className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-red sm:text-sm",
                        children: [(0,
                        r.jsx)(s, {
                            size: 16,
                            "aria-hidden": !0
                        }), " ", o._P.city, ", CA \xb7 Since ", o._P.since, " \xb7 Ships Nationwide"]
                    }), (0,
                    r.jsxs)("h1", {
                        className: "mt-3 font-display text-4xl leading-[0.95] text-white sm:text-6xl md:text-7xl",
                        children: ["Heavy-Duty Truck Parts", (0,
                        r.jsx)("br", {}), (0,
                        r.jsx)("span", {
                            className: "text-brand-red",
                            children: "& Repairs"
                        })]
                    }), (0,
                    r.jsxs)("p", {
                        className: "mt-4 max-w-xl text-base text-brand-silver sm:text-lg",
                        children: [o._P.tagline, ". Need a part? We've probably got it — call, text, or message us and we'll take care of the rest."]
                    }), (0,
                    r.jsx)("div", {
                        className: "mt-7",
                        children: (0,
                        r.jsx)(l.U, {
                            variant: "dark"
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "mt-8 flex gap-2",
                        children: c.map( (e, n) => (0,
                        r.jsx)("button", {
                            onClick: () => t(n),
                            "aria-label": "Show slide ".concat(n + 1),
                            className: "h-2 rounded-full transition-all ".concat(n === a ? "w-7 bg-brand-red" : "w-2 bg-white/40")
                        }, n))
                    })]
                })]
            })
        }
    }
    ,
    3910: (e, a, t) => {
        "use strict";
        t.d(a, {
            TrustBar: () => h
        });
        var r = t(5155)
          , n = t(2115)
          , s = t(1037);
        let l = {
            some: 0,
            all: 1
        };
        var i = t(2649)
          , o = t(9396);
        function c(e) {
            let {to: a, decimals: t=0} = e
              , i = (0,
            n.useRef)(null)
              , c = function(e, {root: a, margin: t, amount: r, once: i=!1}={}) {
                let[o,c] = (0,
                n.useState)(!1);
                return (0,
                n.useEffect)( () => {
                    if (!e.current || i && o)
                        return;
                    let n = {
                        root: a && a.current || void 0,
                        margin: t,
                        amount: r
                    };
                    return function(e, a, {root: t, margin: r, amount: n="some"}={}) {
                        let i = (0,
                        s.KJ)(e)
                          , o = new WeakMap
                          , c = new IntersectionObserver(e => {
                            e.forEach(e => {
                                let t = o.get(e.target);
                                if (!!t !== e.isIntersecting)
                                    if (e.isIntersecting) {
                                        let t = a(e);
                                        "function" == typeof t ? o.set(e.target, t) : c.unobserve(e.target)
                                    } else
                                        "function" == typeof t && (t(e),
                                        o.delete(e.target))
                            }
                            )
                        }
                        ,{
                            root: t,
                            rootMargin: r,
                            threshold: "number" == typeof n ? n : l[n]
                        });
                        return i.forEach(e => c.observe(e)),
                        () => c.disconnect()
                    }(e.current, () => (c(!0),
                    i ? void 0 : () => c(!1)), n)
                }
                , [a, e, t, i, r]),
                o
            }(i, {
                once: !0,
                amount: .5
            })
              , d = (0,
            o.j)()
              , [h,m] = (0,
            n.useState)(0);
            (0,
            n.useEffect)( () => {
                if (!c)
                    return;
                if (d)
                    return void m(a);
                let e = 0
                  , t = null
                  , r = n => {
                    null === t && (t = n);
                    let s = Math.min(1, (n - t) / 1400);
                    m(s * a),
                    s < 1 ? e = requestAnimationFrame(r) : m(a)
                }
                ;
                return e = requestAnimationFrame(r),
                () => cancelAnimationFrame(e)
            }
            , [c, d, a]);
            let u = t > 0 ? h.toFixed(t) : Math.floor(h).toLocaleString();
            return (0,
            r.jsx)("span", {
                ref: i,
                children: u
            })
        }
        let d = [{
            to: 9,
            suffix: "+",
            label: "Years in Business"
        }, {
            to: 5e3,
            suffix: "+",
            label: "Parts Shipped"
        }, {
            to: 50,
            suffix: "",
            label: "States Served"
        }, {
            to: 4.9,
            suffix: "",
            label: "Average Rating",
            decimals: 1,
            star: !0
        }];
        function h() {
            return (0,
            r.jsx)("section", {
                className: "bg-brand-red text-white",
                children: (0,
                r.jsx)("div", {
                    className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 text-center md:grid-cols-4",
                    children: d.map(e => {
                        var a;
                        return (0,
                        r.jsxs)("div", {
                            children: [(0,
                            r.jsxs)("div", {
                                className: "flex items-center justify-center font-display text-4xl font-bold md:text-5xl",
                                children: [(0,
                                r.jsx)(c, {
                                    to: e.to,
                                    decimals: null != (a = e.decimals) ? a : 0
                                }), e.suffix, e.star && (0,
                                r.jsx)(i.A, {
                                    size: 28,
                                    "aria-hidden": !0,
                                    className: "ml-1 fill-white text-white"
                                })]
                            }), (0,
                            r.jsx)("div", {
                                className: "mt-1 text-sm uppercase tracking-wide text-white/85",
                                children: e.label
                            })]
                        }, e.label)
                    }
                    )
                })
            })
        }
    }
    ,
    5887: (e, a, t) => {
        Promise.resolve().then(t.t.bind(t, 1356, 23)),
        Promise.resolve().then(t.bind(t, 8955)),
        Promise.resolve().then(t.bind(t, 465)),
        Promise.resolve().then(t.bind(t, 4068)),
        Promise.resolve().then(t.bind(t, 5858)),
        Promise.resolve().then(t.bind(t, 39)),
        Promise.resolve().then(t.bind(t, 1249)),
        Promise.resolve().then(t.bind(t, 7695)),
        Promise.resolve().then(t.bind(t, 832)),
        Promise.resolve().then(t.bind(t, 3910)),
        Promise.resolve().then(t.bind(t, 3068)),
        Promise.resolve().then(t.bind(t, 9666))
    }
    ,
    7695: (e, a, t) => {
        "use strict";
        t.d(a, {
            ImageBand: () => s
        });
        var r = t(5155)
          , n = t(3657);
        function s(e) {
            let {title: a, subtitle: t, image: s} = e;
            return (0,
            r.jsxs)("section", {
                className: "relative overflow-hidden bg-gradient-to-br from-brand-charcoal to-brand-black",
                children: [s && (0,
                r.jsx)(n.P.img, {
                    src: s,
                    alt: "",
                    "aria-hidden": !0,
                    initial: {
                        scale: 1.12
                    },
                    whileInView: {
                        scale: 1
                    },
                    viewport: {
                        once: !0,
                        amount: .3
                    },
                    transition: {
                        duration: 1.6,
                        ease: "easeOut"
                    },
                    className: "absolute inset-0 h-full w-full object-cover"
                }), (0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-brand-black/65"
                }), (0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,31,31,0.14),transparent_65%)]"
                }), (0,
                r.jsx)("div", {
                    className: "relative z-10 flex min-h-[42vh] items-center justify-center px-4 py-16 text-center sm:py-24",
                    children: (0,
                    r.jsxs)(n.P.div, {
                        initial: {
                            opacity: 0,
                            y: 30
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
                            duration: .7
                        },
                        children: [(0,
                        r.jsx)("h2", {
                            className: "font-display text-3xl leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl",
                            children: a
                        }), t && (0,
                        r.jsx)("p", {
                            className: "mx-auto mt-4 max-w-xl text-brand-silver sm:text-lg",
                            children: t
                        })]
                    })
                })]
            })
        }
    }
    ,
    8955: (e, a, t) => {
        "use strict";
        t.d(a, {
            BuiltBanner: () => s
        });
        var r = t(5155)
          , n = t(3657);
        function s() {
            return (0,
            r.jsxs)("section", {
                className: "relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-brand-black py-20",
                children: [(0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,31,31,0.18),transparent_65%)]"
                }), (0,
                r.jsxs)(n.P.h2, {
                    initial: {
                        opacity: 0,
                        y: 30
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
                        duration: .7
                    },
                    className: "relative z-10 px-4 text-center font-display text-4xl leading-tight text-white sm:text-6xl md:text-7xl",
                    children: ["Built For Trucks.", (0,
                    r.jsx)("br", {}), (0,
                    r.jsx)("span", {
                        className: "text-brand-red",
                        children: "Trusted Since 2017."
                    })]
                })]
            })
        }
    }
}, e => {
    e.O(0, [766, 416, 356, 173, 972, 441, 255, 358], () => e(e.s = 5887)),
    _N_E = e.O()
}
]);