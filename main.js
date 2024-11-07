"use strict";
(self.webpackChunktelegram_t = self.webpackChunktelegram_t || []).push([[236], {
    63744: (e, t, n) => {
        n.d(t, {
            A: () => A
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(29807)
          , r = n(71331)
          , s = n(87357)
          , l = n(14)
          , c = n(59030)
          , d = n(50680)
          , m = n(26875)
          , u = n(64493);
        const A = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n} = t;
            const a = (0,
            i.hds)(e, n)
              , o = (0,
            r.mD)(e, n);
            return {
                groupCall: o,
                isActive: ((0,
                i.nTw)(e).isMasterTab ? e.groupCalls.activeGroupCallId : void 0) !== o?.id && Boolean(o ? o.participantsCount > 0 && o.isLoaded : a && a.isCallNotEmpty && a.isCallActive)
            }
        }
        ))((e => {
            let {chatId: t, isActive: n, className: i, groupCall: r, hasPinnedOffset: A} = e;
            const {requestMasterAndJoinGroupCall: h, subscribeToGroupCallUpdates: p} = (0,
            o.ko)()
              , y = (0,
            c.A)()
              , g = (0,
            a.hb)(( () => {
                h({
                    chatId: t
                })
            }
            ), [h, t])
              , f = r?.participants
              , v = (0,
            a.Kr)(( () => {
                if (!f)
                    return [];
                const e = (0,
                o.mS)().users.byId
                  , t = (0,
                o.mS)().chats.byId;
                return Object.values(f).slice(0, 3).map((n => {
                    let {id: a} = n;
                    return e[a] || t[a]
                }
                )).filter(Boolean)
            }
            ), [f]);
            (0,
            a.vJ)(( () => {
                if (r?.id && (n || !r.isLoaded))
                    return p({
                        id: r.id,
                        subscribed: !0
                    }),
                    () => {
                        p({
                            id: r.id,
                            subscribed: !1
                        })
                    }
            }
            ), [r?.id, r?.isLoaded, n, p]);
            const {shouldRender: E, transitionClassNames: C} = (0,
            d.A)(Boolean(r && n))
              , b = (0,
            l.A)(r?.participantsCount, !0)
              , w = (0,
            l.A)(v, !0);
            if (E)
                return a.Ay.createElement("div", {
                    className: (0,
                    s.A)("GroupCallTopPane", A && "has-pinned-offset", i, C),
                    onClick: g
                }, a.Ay.createElement("div", {
                    className: "info"
                }, a.Ay.createElement("span", {
                    className: "title"
                }, y("VoipGroupVoiceChat")), a.Ay.createElement("span", {
                    className: "participants"
                }, y("Participants", b ?? 0, "i"))), Boolean(w?.length) && a.Ay.createElement(m.A, {
                    size: "small",
                    peers: w,
                    className: "avatars"
                }), a.Ay.createElement(u.A, {
                    round: !0,
                    className: "join"
                }, y("VoipChatJoin")))
        }
        )))
    }
    ,
    68292: (e, t, n) => {
        n.d(t, {
            A: () => A
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(29807)
          , r = n(87357)
          , s = n(37836)
          , l = n(30857)
          , c = n(39351)
          , d = n(73767);
        let m = 0;
        const u = (0,
        s.Fe)(( () => {
            m = 0
        }
        ))
          , A = (0,
        a.ph)((e => {
            let {text: t, className: n, isDisabled: s} = e;
            const {isRtl: A} = (0,
            c.A)()
              , h = (0,
            d.A)(t)
              , p = (0,
            l.A)()
              , y = !(!(!s && (0,
            i.PKK)((0,
            o.mS)()) && void 0 !== h && h !== t) || m >= 10 || (0 === m && u(),
            m++,
            0))
              , g = (0,
            a.Kr)(( () => y ? function(e, t) {
                const n = []
                  , o = e.length
                  , i = t?.length ?? 0;
                for (let r = 0; r <= o; r++) {
                    const s = o - r
                      , l = i - r;
                    t && l >= 0 && e[s] !== t[l] ? n.unshift(a.Ay.createElement("div", {
                        className: "IYTzbS8o"
                    }, a.Ay.createElement("div", {
                        className: "Jw1oQFdk"
                    }, e[s] ?? ""), a.Ay.createElement("div", {
                        className: "TZfEz3sc"
                    }, t[l]), a.Ay.createElement("div", {
                        className: "Y9ied8_t"
                    }, e[s] ?? ""))) : n.unshift(a.Ay.createElement("span", null, e[s] ?? ""))
                }
                return n
            }(t, h) : t), [y, h, t]);
            return (0,
            a.vJ)(( () => {
                if (!y)
                    return;
                const e = window.setTimeout(( () => {
                    p()
                }
                ), 200);
                return () => {
                    window.clearTimeout(e)
                }
            }
            ), [y, t]),
            a.Ay.createElement("span", {
                className: (0,
                r.A)(n, !s && "tgKbsVmz"),
                dir: A ? "rtl" : void 0
            }, g)
        }
        ))
    }
    ,
    79577: (e, t, n) => {
        n.d(t, {
            A: () => c
        });
        var a = n(84051)
          , o = n(23174)
          , i = n(90709)
          , r = n(62587)
          , s = n(64489);
        function l() {
            return l = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ,
            l.apply(this, arguments)
        }
        const c = (0,
        a.ph)((function(e) {
            const {sticker: t, noLoad: n, forcePreview: c, ...d} = e
              , m = t?.thumbnail?.dataUri
              , u = t && `sticker${t.id}`
              , A = (0,
            r.A)(t ? (0,
            i.Mw)(t, "preview") : void 0, n && !c, o.qZ.BlobUrl)
              , h = (0,
            r.A)(u, n);
            return a.Ay.createElement(s.A, l({
                tgsUrl: h,
                previewUrl: A,
                thumbDataUri: m
            }, d))
        }
        ))
    }
    ,
    64489: (e, t, n) => {
        n.d(t, {
            A: () => A
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(95807)
          , r = n(37661)
          , s = n(17712)
          , l = n(83057)
          , c = n(4438);
        const d = "lM2usrZU";
        function m() {
            return m = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ,
            m.apply(this, arguments)
        }
        const u = new Set
          , A = (0,
        a.ph)((function(e) {
            const {previewUrl: t, thumbDataUri: n, className: A, ...h} = e
              , [p,,y] = (0,
            r.A)(Boolean(n))
              , g = (0,
            l.A)(p)
              , [f,v,E] = (0,
            r.A)(u.has(t))
              , C = (0,
            l.A)(f)
              , [b,w] = (0,
            r.A)(!1)
              , S = (0,
            s.A)(( () => {
                v(),
                u.add(t)
            }
            ))
              , I = (0,
            s.A)(( () => {
                y(),
                E(),
                setTimeout(w, 300)
            }
            ))
              , {size: N} = e;
            return a.Ay.createElement("div", {
                className: (0,
                o.A)(A, "xCi2f0YH"),
                style: (0,
                i.A)(void 0 !== N && `width: ${N}px; height: ${N}px;`)
            }, n && !b && a.Ay.createElement("img", {
                src: n,
                className: (0,
                o.A)(d, g),
                draggable: !1
            }), t && !b && a.Ay.createElement("img", {
                src: t,
                className: (0,
                o.A)(d, C),
                draggable: !1,
                onLoad: S
            }), a.Ay.createElement(c.A, m({}, h, {
                onLoad: I
            })))
        }
        ))
    }
    ,
    65240: (e, t, n) => {
        n.d(t, {
            Ay: () => x
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(89925)
          , s = n(90709)
          , l = n(53827)
          , c = n(87357)
          , d = n(50442)
          , m = n(17663)
          , u = n(42186)
          , A = n(91525)
          , h = n(4961);
        var p = n(43874)
          , y = n(88792)
          , g = n(71533)
          , f = n(17712)
          , v = n(62587)
          , E = n(69419)
          , C = n(59030)
          , b = n(50680)
          , w = n(64493)
          , S = n(96530)
          , I = n(35913)
          , N = n(4438)
          , M = n(18276);
        const k = window.matchMedia("(max-width: 375px)")
          , T = window.matchMedia("(max-width: 410px)");
        function P(e, t, n) {
            return a.Ay.createElement("div", {
                className: "seekline",
                ref: n
            }, t.map((e => {
                let {start: t, end: n} = e;
                return a.Ay.createElement("div", {
                    className: "seekline-buffered-progress",
                    style: `left: ${100 * t}%; right: ${100 - 100 * n}%`
                })
            }
            )), a.Ay.createElement("span", {
                className: "seekline-play-progress"
            }, a.Ay.createElement("i", {
                className: "seekline-play-progress-inner",
                style: `transform: translateX(${100 * e}%)`
            })), a.Ay.createElement("span", {
                className: "seekline-thumb"
            }, a.Ay.createElement("i", {
                className: "seekline-thumb-inner",
                style: `transform: translateX(${100 * e}%)`
            })))
        }
        const x = (0,
        a.ph)((e => {
            let {theme: t, message: n, senderTitle: x, uploadProgress: R, origin: L, date: B, noAvatars: O, className: F, isSelectable: D, isSelected: U, isDownloading: K, isTranscribing: j, isTranscriptionHidden: z, isTranscribed: $, isTranscriptionError: _, canDownload: J, canTranscribe: V, autoPlay: H, onHideTranscription: q, onPlay: G, onPause: W, onReadMedia: Z, onCancelUpload: Q, onDateClick: Y} = e;
            const {cancelMediaDownload: X, downloadMedia: ee, transcribeAudio: te, openOneTimeMediaModal: ne} = (0,
            o.ko)()
              , {content: {audio: ae, voice: oe, video: ie}, isMediaUnread: re} = n
              , se = ae || (0,
            s.Rp)(n)
              , le = oe || ie || se
              , ce = Boolean(oe || ie)
              , de = (0,
            a.li)(!1)
              , me = (0,
            a.li)(null)
              , ue = (0,
            C.A)()
              , {isRtl: Ae} = ue
              , {isMobile: he} = (0,
            p.Ay)()
              , [pe,ye] = (0,
            a.J0)(!1)
              , ge = pe || !0
              , fe = (0,
            s.VO)(le, "pictogram")
              , ve = (0,
            v.A)(fe, !1, i.qZ.BlobUrl)
              , Ee = (0,
            s.G5)(n)
              , Ce = L === r.d9.OneTimeModal
              , be = ce ? Ee ? "oneTimeVoice" : "voice" : "audio"
              , we = (0,
            v.A)((0,
            s.VO)(le, "inline"), !ge, (0,
            s.Cz)(le, "inline"))
              , {loadProgress: Se} = (0,
            E.A)((0,
            s.VO)(le, "download"), !K, (0,
            s.Cz)(le, "download"))
              , Ie = (0,
            f.A)(( () => {
                ye(!0),
                G?.(n.id, n.chatId)
            }
            ))
              , Ne = (0,
            f.A)(( () => {
                ye(!1)
            }
            ))
              , {isBuffered: Me, bufferedRanges: ke, bufferingHandlers: Te, checkBuffering: Pe} = (0,
            g.A)()
              , xe = Ce
              , {isPlaying: Re, playProgress: Le, playPause: Be, setCurrentTime: Oe, duration: Fe} = (0,
            y.A)((0,
            l.dj)(n), (0,
            s.Fk)(n), be, we, Te, void 0, Pe, Boolean(pe || H), Ie, Ne, (0,
            s.Nb)(n) || Ee, void 0, W, xe, Ee && !Ce)
              , De = 1 - Le
              , Ue = (0,
            s.Ie)(n)
              , Ke = Ee && Ce
              , je = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                  , r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
                  , s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                const l = (0,
                a.li)(null)
                  , {data: c, peak: d} = (0,
                a.Kr)(( () => {
                    if (!t)
                        return;
                    const {waveform: e, duration: n} = t;
                    if (!e)
                        return {
                            data: new Array(Math.min(n, 30)).fill(0),
                            peak: 0
                        };
                    const {MIN_SPIKES: a, MAX_SPIKES: o} = function(e, t) {
                        return {
                            MIN_SPIKES: e ? k.matches ? 16 : 20 : 25,
                            MAX_SPIKES: e ? k.matches ? 35 : t && T.matches ? 40 : 45 : 75
                        }
                    }(r, i)
                      , s = Math.min(n / 10, 1)
                      , l = Math.round(a + (o - a) * s);
                    return function(e, t) {
                        let n = 0;
                        const a = new Array(t)
                          , o = e.length / t
                          , i = e[0]
                          , r = e[e.length - 1];
                        for (let s = 0; s < t; s++) {
                            const t = Math.floor(s * o)
                              , l = ((e[t - 1] ?? i) + (e[t] ?? i) + (e[t + 1] ?? r)) / 3;
                            a[s] = l,
                            n < l && (n = l)
                        }
                        return {
                            data: a,
                            peak: n
                        }
                    }(function(e) {
                        const t = 8 * e.length
                          , n = Math.floor(t / 5);
                        if (!n)
                            return [];
                        const a = Array(n)
                          , o = e;
                        for (let e = 0, t = n - 1; e !== t; ++e) {
                            const t = Math.floor(5 * e / 8)
                              , n = Math.floor(5 * e % 8)
                              , i = o[t] + (o[t + 1] << 8);
                            a[e] = i >> n & 31
                        }
                        const i = Math.floor(5 * (n - 1) / 8)
                          , r = Math.floor(5 * (n - 1) % 8)
                          , s = o[i] + (o[i + 1] << 8);
                        return a[n - 1] = s >> r & 31,
                        a
                    }(new Uint8Array(e)), l)
                }
                ), [r, t, i]) || {};
                return (0,
                a.Nf)(( () => {
                    const t = l.current;
                    t && c && void 0 !== d && function(e, t, n, a) {
                        let {peak: o, fillStyle: i, progressFillStyle: r} = a;
                        const s = 4 * t.length;
                        e.width = 2 * s,
                        e.height = 46,
                        e.style.width = `${s}px`,
                        e.style.height = "23px";
                        const l = e.getContext("2d");
                        l.scale(2, 2),
                        t.forEach(( (e, a) => {
                            l.globalAlpha = a / t.length >= n ? .5 : 1,
                            l.fillStyle = n > a / t.length ? r : i;
                            const s = Math.max(2, e / Math.max(1, o) * 23);
                            !function(e, t, n, a, o, i) {
                                2 < 2 * i && (i = 1),
                                o < 2 * i && (i = o / 2),
                                e.beginPath(),
                                e.moveTo(t + i, n),
                                e.arcTo(t + 2, n, t + 2, n - o, i),
                                e.arcTo(t + 2, n - o, t, n - o, i),
                                e.arcTo(t, n - o, t, n, i),
                                e.arcTo(t, n, t + 2, n, i),
                                e.closePath()
                            }(l, 4 * a, (23 + s) / 2, 0, s, 1),
                            l.fill()
                        }
                        ))
                    }(t, c, s ? 1 - n : n, {
                        peak: d,
                        fillStyle: o ? "dark" === e ? "#B7ABED" : "#AEDFA4" : "dark" === e ? "#494A78" : "#ADD3F7",
                        progressFillStyle: o ? "dark" === e ? "#FFFFFF" : "#4FAE4E" : "dark" === e ? "#8774E1" : "#3390EC"
                    })
                }
                ), [o, d, n, c, e, s]),
                l
            }(t, oe, !re || Ue || Ke ? Le : 1, Ue, !O, he, Ke)
              , ze = Re || Le > 0 && Le < 1;
            (0,
            a.vJ)(( () => {
                ye(Re)
            }
            ), [Re]);
            const $e = pe && !Me
              , {isUploading: _e, isTransferring: Je, transferProgress: Ve} = (0,
            s.LK)(R || Se, $e || K, void 0 !== R)
              , {shouldRender: He, transitionClassNames: qe} = (0,
            b.A)(Je)
              , Ge = He && ($e || _e)
              , We = (0,
            f.A)(( () => {
                if (_e)
                    Q?.();
                else {
                    if (Ee)
                        return ne({
                            message: n
                        }),
                        void Z?.();
                    Re || G?.(n.id, n.chatId),
                    (0,
                    o.ko)().setAudioPlayerOrigin({
                        origin: L
                    }),
                    ye(!pe),
                    Be()
                }
            }
            ));
            (0,
            a.vJ)(( () => {
                Z && re && (Re || K) && Z()
            }
            ), [Re, re, Z, K]);
            const Ze = (0,
            f.A)(( () => {
                K ? X({
                    media: le
                }) : ee({
                    media: le,
                    originMessage: n
                })
            }
            ))
              , Qe = (0,
            f.A)((e => {
                if (de.current && me.current) {
                    const {width: t, left: n} = me.current.getBoundingClientRect()
                      , a = e instanceof MouseEvent ? e.clientX : e.targetTouches[0].clientX;
                    e.stopPropagation(),
                    Oe(Math.max(Math.min(Fe * ((a - n) / t), Fe - .1), .001))
                }
            }
            ))
              , Ye = (0,
            f.A)((e => {
                e instanceof MouseEvent && 2 === e.button || (de.current = !0,
                Qe(e))
            }
            ))
              , Xe = (0,
            f.A)(( () => {
                de.current = !1
            }
            ))
              , et = (0,
            f.A)(( () => {
                Y(n)
            }
            ))
              , tt = (0,
            f.A)(( () => {
                te({
                    chatId: n.chatId,
                    messageId: n.id
                })
            }
            ));
            function nt() {
                if (ce)
                    return x || "Voice";
                const {title: e, fileName: t} = se;
                return e || t
            }
            (0,
            a.vJ)(( () => {
                if (me.current && ze && !Ce)
                    return (0,
                    d.wJ)(me.current, {
                        onCapture: Ye,
                        onRelease: Xe,
                        onClick: Xe,
                        onDrag: Qe
                    })
            }
            ), [ze, Ye, Qe, Xe, Ce]);
            const at = (0,
            c.A)("Audio", F, Ce && "non-interactive", L === r.d9.Inline && "inline", Ue && L === r.d9.Inline && "own", (L === r.d9.Search || L === r.d9.SharedMedia) && "bigger", U && "audio-is-selected")
              , ot = ["toogle-play-wrapper"];
            Ge ? ot.push("loading") : ot.push(Re ? "pause" : "play");
            const it = (0,
            c.A)("content", ze && "with-seekline");
            function rt() {
                return a.Ay.createElement("div", {
                    className: it
                }, a.Ay.createElement("div", {
                    className: "content-row"
                }, a.Ay.createElement("p", {
                    className: "title",
                    dir: "auto",
                    title: nt()
                }, (0,
                h.A)(nt())), a.Ay.createElement("div", {
                    className: "message-date"
                }, Boolean(B) && a.Ay.createElement(S.A, {
                    className: "date",
                    onClick: et
                }, (0,
                m.be)(ue, 1e3 * B)))), ze && a.Ay.createElement("div", {
                    className: "meta search-result",
                    dir: Ae ? "rtl" : void 0
                }, a.Ay.createElement("span", {
                    className: "duration with-seekline",
                    dir: "auto"
                }, Le < 1 && `${(0,
                m.QO)(Fe * Le, Fe)}`), P(Le, ke, me)), !ze && function() {
                    if (ce)
                        return a.Ay.createElement("div", {
                            className: "meta",
                            dir: Ae ? "rtl" : void 0
                        }, (0,
                        m.QO)((oe || ie).duration));
                    const {performer: e} = se;
                    return a.Ay.createElement("div", {
                        className: "meta",
                        dir: Ae ? "rtl" : void 0
                    }, (0,
                    m.QO)(Fe), a.Ay.createElement("span", {
                        className: "bullet"
                    }, "•"), e && a.Ay.createElement("span", {
                        className: "performer",
                        title: e
                    }, (0,
                    h.A)(e)), e && x && a.Ay.createElement("span", {
                        className: "bullet"
                    }, "•"), x && a.Ay.createElement("span", {
                        title: x
                    }, (0,
                    h.A)(x)))
                }())
            }
            return a.Ay.createElement("div", {
                className: at,
                dir: ue.isRtl ? "rtl" : "ltr"
            }, D && a.Ay.createElement("div", {
                className: "message-select-control"
            }, U && a.Ay.createElement("i", {
                className: "icon icon-select"
            })), a.Ay.createElement("div", {
                className: (0,
                c.A)(...ot)
            }, a.Ay.createElement(w.A, {
                round: !0,
                ripple: !he,
                size: "smaller",
                className: "toggle-play",
                color: ve ? "translucent-white" : "primary",
                ariaLabel: Re ? "Pause audio" : "Play audio",
                onClick: We,
                isRtl: ue.isRtl,
                backgroundImage: ve,
                nonInteractive: Ce
            }, !Ce && a.Ay.createElement(M.A, {
                name: "play"
            }), !Ce && a.Ay.createElement(M.A, {
                name: "pause"
            }), Ce && a.Ay.createElement(N.A, {
                className: "flame",
                tgsUrl: u.w.Flame,
                nonInteractive: !0,
                noLoop: !1,
                size: 40
            })), Ee && !Ce && a.Ay.createElement(M.A, {
                name: "view-once"
            })), He && a.Ay.createElement("div", {
                className: (0,
                c.A)("media-loading", qe, Ge && "interactive")
            }, a.Ay.createElement(I.A, {
                progress: Ve,
                transparent: !0,
                withColor: !0,
                size: "m",
                onClick: Ge ? We : void 0,
                noCross: !Ge
            })), Ce && !He && a.Ay.createElement("div", {
                className: (0,
                c.A)("media-loading")
            }, a.Ay.createElement(I.A, {
                progress: Le,
                transparent: !0,
                size: "m",
                noCross: !0,
                rotationOffset: 3 / 4
            })), se && J && !_e && a.Ay.createElement(w.A, {
                round: !0,
                size: "tiny",
                className: "download-button",
                ariaLabel: K ? "Cancel download" : "Download",
                onClick: Ze
            }, a.Ay.createElement("i", {
                className: (0,
                c.A)("icon", K ? "icon-close" : "icon-arrow-down")
            })), L === r.d9.Search && rt(), L !== r.d9.Search && se && function(e, t, n, o, i, r, s, l, c, d, u) {
                const {title: p, performer: y, fileName: g} = t
                  , f = o || i > 0 && i < 1
                  , {isRtl: v} = e;
                return a.Ay.createElement("div", {
                    className: "content"
                }, a.Ay.createElement("p", {
                    className: "title",
                    dir: "auto",
                    title: p
                }, (0,
                h.A)(p || g)), f && a.Ay.createElement("div", {
                    className: "meta",
                    dir: v ? "rtl" : void 0
                }, a.Ay.createElement("span", {
                    className: "duration with-seekline",
                    dir: "auto"
                }, (0,
                m.QO)(n * i, n)), P(i, r, s)), !f && l && a.Ay.createElement("div", {
                    className: "meta",
                    dir: v ? "rtl" : void 0
                }, d ? `${(0,
                A.zV)(t.size * d)} / ` : void 0, (0,
                A.zV)(t.size)), !f && !l && a.Ay.createElement("div", {
                    className: "meta",
                    dir: v ? "rtl" : void 0
                }, a.Ay.createElement("span", {
                    className: "duration",
                    dir: "auto"
                }, (0,
                m.QO)(n)), y && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                    className: "bullet"
                }, "•"), a.Ay.createElement("span", {
                    className: "performer",
                    dir: "auto",
                    title: y
                }, (0,
                h.A)(y))), Boolean(c) && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                    className: "bullet"
                }, "•"), a.Ay.createElement(S.A, {
                    className: "date",
                    onClick: u
                }, (0,
                m.fS)(e, 1e3 * c, !0)))))
            }(ue, se, Fe, Re, Le, ke, me, K || _e, B, Ve, Y ? et : void 0), L === r.d9.SharedMedia && (oe || ie) && rt(), (L === r.d9.Inline || Ce) && oe && function(e, t, n, o, i, s, l, d, u, A, h, p) {
                return a.Ay.createElement("div", {
                    className: "content"
                }, a.Ay.createElement("div", {
                    className: "waveform-wrapper"
                }, a.Ay.createElement("div", {
                    className: "waveform",
                    draggable: !1,
                    ref: t
                }, a.Ay.createElement("canvas", {
                    ref: n
                })), A && a.Ay.createElement(w.A, {
                    onClick: () => {
                        (d || u) && h ? h(!l) : s || A()
                    }
                }, a.Ay.createElement("i", {
                    className: (0,
                    c.A)("transcribe-icon", "icon", d || u ? "icon-down" : "icon-transcribe", (d || u) && !l && "transcribe-shown")
                }), s && a.Ay.createElement("svg", {
                    viewBox: "0 0 32 24",
                    className: "loading-svg"
                }, a.Ay.createElement("rect", {
                    className: "loading-rect",
                    fill: "transparent",
                    width: "32",
                    height: "24",
                    "stroke-width": "3",
                    "stroke-linejoin": "round",
                    rx: "6",
                    ry: "6",
                    stroke: "var(--accent-color)",
                    "stroke-dashoffset": "1",
                    "stroke-dasharray": "32,68"
                })))), a.Ay.createElement("p", {
                    className: (0,
                    c.A)("voice-duration", p !== r.d9.OneTimeModal && i && "unread"),
                    dir: "auto"
                }, 0 === o || 1 === o ? (0,
                m.QO)(e.duration) : (0,
                m.QO)(e.duration * o)))
            }(oe, me, je, Ee ? De : Le, re, j, z, $, _, V ? tt : void 0, q, L))
        }
        ))
    }
    ,
    26875: (e, t, n) => {
        n.d(t, {
            A: () => c
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(59030)
          , r = n(21849);
        const s = {
            root: "kXs18Nmi",
            "size-micro": "bnYA0Wm9",
            sizeMicro: "bnYA0Wm9",
            "size-mini": "ZGpPX4Wb",
            sizeMini: "ZGpPX4Wb",
            "size-tiny": "ufyZRVf5",
            sizeTiny: "ufyZRVf5",
            "size-small": "UA2exR6e",
            sizeSmall: "UA2exR6e",
            "size-small-mobile": "PTbjjZjF",
            sizeSmallMobile: "PTbjjZjF",
            "size-medium": "jncPG8PA",
            sizeMedium: "jncPG8PA",
            "size-large": "pd70AQAO",
            sizeLarge: "pd70AQAO",
            "size-huge": "ceLzD19m",
            sizeHuge: "ceLzD19m",
            "size-jumbo": "KpwfP5mr",
            sizeJumbo: "KpwfP5mr",
            avatar: "XND8fhC1",
            badge: "SHyAyGFO"
        }
          , l = 3
          , c = (0,
        a.ph)((e => {
            let {peers: t, size: n, className: c, limit: d=l, badgeText: m} = e;
            const u = (0,
            i.A)()
              , A = (0,
            a.Kr)(( () => m || (!t?.length || t.length <= d ? void 0 : "+" + (t.length - d))), [m, t, d]);
            return a.Ay.createElement("div", {
                className: (0,
                o.A)(c, s.root, s[`size-${n}`]),
                dir: u.isRtl ? "rtl" : "ltr"
            }, t?.slice(0, d).map((e => a.Ay.createElement(r.A, {
                size: n,
                peer: e,
                className: s.avatar
            }))), A && a.Ay.createElement("div", {
                className: s.badge
            }, A))
        }
        ))
    }
    ,
    58674: (e, t, n) => {
        n.d(t, {
            A: () => kt
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(31481)
          , s = n(66644)
          , l = n(90709)
          , c = n(29807)
          , d = n(64520)
          , m = n(87357)
          , u = n(17663)
          , A = n(55148)
          , h = n(46275)
          , p = n(60261)
          , y = n(36353)
          , g = n(79824)
          , f = n(80539)
          , v = n(39074)
          , E = n(80140)
          , C = n(82393)
          , b = n(43503);
        let w;
        function S(e) {
            w.focus(),
            e.focus()
        }
        C.pz && (w = document.createElement("input"),
        w.classList.add("for-ios-autocapitalization-fix"),
        document.body.appendChild(w));
        var I = n(55153)
          , N = n(58734)
          , M = n(11359)
          , k = n(35049)
          , T = n(4961)
          , P = n(18501)
          , x = n(32625)
          , R = n(14737)
          , L = n(10722)
          , B = n(19129)
          , O = n(82117)
          , F = n(37661)
          , D = n(41316)
          , U = n(17712)
          , K = n(59030)
          , j = n(73767)
          , z = n(24531)
          , $ = n(73172)
          , _ = n(50680)
          , J = n(41257)
          , V = n(35297)
          , H = n(17778)
          , q = n(63988)
          , G = n(83414);
        const W = /^\/([\w@]{1,32})?$/i;
        var Z = n(78396);
        const Q = /id="docs-internal-guid/i
          , Y = {
            BOLD: "700",
            ITALIC: "italic",
            UNDERLINE: "underline",
            STRIKETHROUGH: "line-through",
            SUPERSCRIPT: "super",
            SUBSCRIPT: "sub"
        }
          , X = {
            ANCHOR: "a",
            BOLD: "strong",
            ITALIC: "em",
            UNDERLINE: "u",
            BLOCKQUOTE: "blockquote",
            STRIKETHROUGH: "del",
            SUPERSCRIPT: "sup",
            SUBSCRIPT: "sub"
        }
          , ee = ["H1", "H2", "H3", "H4", "H5", "H6"];
        function te(e) {
            return (new DOMParser).parseFromString(e, "text/html").body
        }
        function ne(e, t) {
            const n = document.createElement(X.ANCHOR);
            return n.href = t,
            n.appendChild(e.cloneNode(!0)),
            n
        }
        function ae(e, t) {
            const n = document.createElement(t);
            return n.appendChild(e.cloneNode(!0)),
            n
        }
        function oe(e, t) {
            let n = t.cloneNode(!0);
            return e ? (e.style && e.style.fontWeight === Y.BOLD && (n = ae(n, X.BOLD)),
            e.style && e.style.fontStyle === Y.ITALIC && (n = ae(n, X.ITALIC)),
            e.style && e.style.textDecoration === Y.UNDERLINE && (n = ae(n, X.UNDERLINE)),
            e.style && e.style.textDecoration === Y.STRIKETHROUGH && (n = ae(n, X.STRIKETHROUGH)),
            e.style && e.style.verticalAlign === Y.SUPERSCRIPT && (n = ae(n, X.SUPERSCRIPT)),
            e.style && e.style.verticalAlign === Y.SUBSCRIPT && (n = ae(n, X.SUBSCRIPT)),
            n) : n
        }
        function ie(e) {
            const t = e.cloneNode(!0);
            let n = document.createTextNode(t.textContent || "")
              , a = t;
            return "A" === t.nodeName && (n = ne(n, t.href),
            "style"in t.childNodes[0] && Boolean(t.childNodes[0].style) && (a = t.childNodes[0])),
            n = oe(a, n),
            n
        }
        function re(e) {
            if (e.childNodes && (e.childNodes.length <= 1 || "OL" === e.nodeName || "UL" === e.nodeName)) {
                let t, n = document.createTextNode(e.textContent || "");
                if ("UL" === e.nodeName || "OL" === e.nodeName || "LI" === e.nodeName) {
                    t = document.createElement(e.nodeName),
                    n = document.createDocumentFragment();
                    const a = [];
                    for (let t = 0; t < e.childNodes.length; t++)
                        a.push(...re(e.childNodes[t]));
                    a.map((e => n.appendChild(e)))
                } else
                    -1 !== ee.indexOf(e.nodeName) ? (t = document.createElement(e.nodeName),
                    n = ie(e.childNodes[0])) : "P" === e.nodeName ? (t = document.createElement("p"),
                    n = function(e) {
                        const t = e.cloneNode(!0);
                        let n = document.createTextNode(t.textContent || "")
                          , a = document.createTextNode("");
                        return "style"in t.childNodes[0] && Boolean(t.childNodes[0].style) && (a = t.childNodes[0]),
                        t.childNodes[0] && "A" === t.childNodes[0].nodeName && (n = ne(n.cloneNode(!0), t.childNodes[0].href),
                        a = t.childNodes[0].childNodes[0]),
                        n = oe(a, n),
                        n
                    }(e)) : "BR" === e.nodeName ? n = e : (t = document.createElement("span"),
                    n = ie(e));
                return t ? (t.appendChild(n),
                [t]) : [e.cloneNode(!0)]
            }
            if (e.childNodes) {
                const t = [];
                for (let n = 0; n < e.childNodes.length; n++)
                    t.push(...re(e.childNodes[n]));
                return t
            }
            return [e]
        }
        function se(e) {
            return 8 !== e.nodeType
        }
        const le = /<style>(.*?)<\/style>/gs;
        var ce = n(45761);
        const de = (e, t, n, s, c, d, m) => {
            const {showNotification: u} = (0,
            o.ko)()
              , A = (0,
            K.A)();
            (0,
            a.vJ)(( () => {
                if (e)
                    return document.addEventListener("paste", a, !1),
                    () => {
                        document.removeEventListener("paste", a, !1)
                    }
                    ;
                async function a(e) {
                    if (!e.clipboardData)
                        return;
                    const a = document.activeElement;
                    if (a && ![r.CfG, r.e0F, r.YVZ].includes(a.id))
                        return;
                    const o = e.clipboardData.getData("text").substring(0, 4096)
                      , h = e.clipboardData.getData("text/html");
                    let p = h ? (0,
                    f.Ay)(function(e) {
                        let t = document.createElement("div");
                        try {
                            e = (n = e).match(Q) ? function(e) {
                                const t = document.createElement("body")
                                  , n = e.childNodes
                                  , a = Array.from(n).filter(se)
                                  , o = [];
                                for (const e of a)
                                    o.push(...re(e));
                                for (let e = 0; e < o.length; e++)
                                    t.appendChild(o[e].cloneNode(!0));
                                return t
                            }(te(n.replace(/(\r\n|\n|\r)/, ""))).innerHTML : te(n.replace(/(\r\n|\n|\r)/, "")).innerHTML
                        } catch (e) {
                            r.Oig && console.error(e)
                        }
                        var n;
                        t.innerHTML = e.replace(/\u00a0/g, " ").replace(le, "");
                        const a = t.querySelectorAll(".text-content");
                        return a.length && (t = a[a.length - 1]),
                        Array.from(t.getElementsByTagName("*")).forEach((e => {
                            if (e instanceof HTMLElement)
                                switch (e.removeAttribute("style"),
                                "BR" === e.tagName && e.replaceWith("\n"),
                                "P" === e.tagName && e.appendChild(document.createTextNode("\n")),
                                "IMG" !== e.tagName || e.dataset.entityType || e.replaceWith(e.getAttribute("alt") || ""),
                                e.dataset.ignoreOnPaste && e.remove(),
                                f.qh[e.tagName] && e.setAttribute("data-entity-type", f.qh[e.tagName]),
                                e.dataset.entityType || e.textContent !== e.innerText || e.replaceWith(e.textContent),
                                e.dataset.alt && e.setAttribute("alt", e.dataset.alt),
                                e.dataset.entityType) {
                                case i.C7.MentionName:
                                    e.replaceWith(e.textContent || "");
                                    break;
                                case i.C7.CustomEmoji:
                                    e.textContent = e.dataset.alt || ""
                                }
                            else
                                e.remove()
                        }
                        )),
                        t.innerHTML.trimEnd()
                    }(h), void 0, !0) : void 0;
                    p && (0,
                    Z.T8)(p) && d && (p = (0,
                    Z.m4)(p),
                    m?.());
                    const {items: y} = e.clipboardData;
                    let g = [];
                    if (e.preventDefault(),
                    y.length > 0 && (g = await (0,
                    ce.A)(y),
                    c && (g = g?.slice(0, 1))),
                    !g?.length && !o)
                        return;
                    const v = p?.entities?.length ? p : {
                        text: o
                    };
                    let E = !1;
                    try {
                        E = "urn:schemas-microsoft-com:office:word" === (new DOMParser).parseFromString(h, "text/html").documentElement.getAttribute("xmlns:w")
                    } catch (e) {}
                    const C = v && v.text;
                    let b = g?.length && !E;
                    const w = g ? await Promise.all(g.map((e => (0,
                    I.A)(e.name, e)))) : []
                      , S = c && w?.length && (0,
                    l.eh)(c, w[0]) || Boolean(C)
                      , N = (0,
                    l.NK)(w[0])
                      , M = c && c?.groupedId;
                    c && N ? u({
                        message: A(M ? "lng_edit_media_album_error" : "lng_edit_media_invalid_file")
                    }) : !M || (b = S,
                    b) ? (b && n(c ? w : e => e.concat(w)),
                    C && (b ? s(v) : t(v, a?.id))) : u({
                        message: A("lng_edit_media_album_error")
                    })
                }
            }
            ), [t, c, n, e, d, m, s, A])
        }
        ;
        var me = n(3225)
          , ue = n(37859)
          , Ae = n(56133)
          , he = n(61157)
          , pe = n(60138);
        let ye = !1;
        const ge = new Set([i.C7.TextUrl, i.C7.Url]);
        var fe = n(25498)
          , ve = n(37830);
        const Ee = /^@([a-z0-9_]{1,32})[\u00A0\u0020]+(.*)/is
          , Ce = /^@([a-z0-9_]{1,32})[\u00A0\u0020]+\n{2,}/i
          , be = {
            username: "",
            query: "",
            canShowHelp: !1,
            usernameLowered: ""
        }
          , we = document.createElement("div");
        const Se = (0,
        ve.A)(( (e, t, n) => ({
            username: e,
            query: t,
            canShowHelp: n,
            usernameLowered: e.toLowerCase()
        })));
        var Ie = n(9442)
          , Ne = n(98221)
          , Me = n(17237);
        const ke = new RegExp(`^${r.bpX.source}$`,"g");
        var Te = n(11778);
        const Pe = {
            encoderPath: new URL(n(89755),n.b).href,
            reuseWorker: !0
        }
          , xe = {
            type: "audio/ogg"
        };
        let Re, Le, Be;
        async function Oe() {
            return Re || (Re = n.e(4550).then(n.t.bind(n, 14550, 23)),
            Le = (await Re).default,
            Be = new Le(Pe)),
            Re
        }
        async function Fe(e) {
            await async function() {
                await Oe(),
                await Be.start()
            }();
            const t = Date.now();
            let n;
            const a = []
              , o = [];
            Be.ondataavailable = e => {
                a.push(e)
            }
            ;
            const i = function(t, n) {
                const a = t.sourceNode
                  , i = a.context.createAnalyser();
                i.fftSize = 64,
                a.connect(i);
                const r = i.frequencyBinCount
                  , l = new Uint8Array(r);
                let c = !1;
                return function t() {
                    if (c)
                        return;
                    i.getByteFrequencyData(l);
                    const n = l.reduce(( (e, t) => e + t), 0) / r / 255;
                    (t => {
                        o.push(255 * t),
                        e(t)
                    }
                    )(n < .1 ? 0 : n),
                    (0,
                    s.YS)(t)
                }(),
                () => {
                    c = !0
                }
            }(Be);
            return {
                stop: () => new Promise(( (e, r) => {
                    Be.onstop = () => {
                        e({
                            blob: new Blob(a,xe),
                            duration: Math.round(((n || Date.now()) - t) / 1e3),
                            waveform: o
                        })
                    }
                    ,
                    Be.onerror = r;
                    const s = Math.max(0, t + 1e3 - Date.now());
                    setTimeout(( () => {
                        Be.stop(),
                        i()
                    }
                    ), s)
                }
                )),
                pause: () => {
                    const e = Math.max(0, t + 1e3 - Date.now());
                    setTimeout(( () => {
                        Be.pause(),
                        n = Date.now(),
                        i()
                    }
                    ), e)
                }
            }
        }
        var De = n(80089)
          , Ue = n(80464);
        const Ke = e => {
            const {attachments: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "AttachmentModal", !t.length);
            return n ? a.Ay.createElement(n, e) : void 0
        }
        ;
        var je = n(61182)
          , ze = n(87679)
          , $e = n(52844)
          , _e = n(36680)
          , Je = n(18276)
          , Ve = n(71429)
          , He = n(24433)
          , qe = n(66469)
          , Ge = n(54639);
        const We = (0,
        a.ph)((e => {
            let {chatId: t, threadId: n, isButtonVisible: o, canAttachMedia: i, canAttachPolls: s, canSendPhotos: c, canSendVideos: d, canSendDocuments: m, canSendAudios: u, attachBots: A, peerType: h, isScheduled: p, theme: y, shouldCollectDebugLogs: g, onFileSelect: f, onMenuOpen: v, onMenuClose: E, onPollCreate: b, hasReplaceableMedia: w, editingMessage: S} = e;
            const [I,N,M] = (0,
            F.A)()
              , [k,T,P] = (0,
            _e.A)(I, M)
              , x = c && d
              , R = c || d
              , [L,B,O] = (0,
            F.A)()
              , D = I || L
              , j = S && S?.groupedId && Boolean((0,
            l.yl)(S) || (0,
            l.dc)(S) || Boolean((0,
            l.zX)(S) || (0,
            l.QC)(S)))
              , z = S && S?.groupedId && Boolean((0,
            l.wp)(S) || (0,
            l.gB)(S) || (0,
            l.zC)(S));
            (0,
            a.vJ)(( () => {
                I && P()
            }
            ), [I, P]),
            (0,
            a.vJ)(( () => {
                D ? v() : E()
            }
            ), [D, E, v]);
            const $ = (0,
            U.A)(( () => {
                I ? M() : N()
            }
            ))
              , _ = (0,
            U.A)(( (e, t) => {
                const {files: n} = e.target
                  , a = (0,
                ze.kc)(n);
                a?.length && f(a, t)
            }
            ))
              , J = (0,
            U.A)(( () => {
                (0,
                $e.p)(Array.from(x ? r.mxD : c ? r.gex : r.fNs).join(","), (e => _(e, !0)))
            }
            ))
              , V = (0,
            U.A)(( () => {
                (0,
                $e.p)(!m && u ? Array.from(r.IH3).join(",") : "*", (e => _(e, !1)))
            }
            ))
              , H = (0,
            U.A)(( () => {
                const e = new File([(0,
                je.F8)()],r.lFE,{
                    type: "text/plain"
                });
                f([e])
            }
            ))
              , q = (0,
            a.Kr)(( () => A ? Object.values(A).filter((e => !(!h || !e.isForAttachMenu) && (!("bots" !== h || e.id !== t || !e.attachMenuPeerTypes.includes("self")) || e.attachMenuPeerTypes.includes(h)))) : void 0), [A, t, h])
              , G = (0,
            K.A)();
            if (o)
                return a.Ay.createElement("div", {
                    className: "AttachMenu"
                }, S && w ? a.Ay.createElement(qe.A, {
                    id: "replace-menu-button",
                    className: I ? "AttachMenu--button activated" : "AttachMenu--button",
                    round: !0,
                    color: "translucent",
                    onActivate: $,
                    ariaLabel: "Replace an attachment",
                    ariaControls: "replace-menu-controls",
                    hasPopup: !0
                }, a.Ay.createElement(Je.A, {
                    name: "replace"
                })) : a.Ay.createElement(qe.A, {
                    id: "attach-menu-button",
                    disabled: Boolean(S),
                    className: I ? "AttachMenu--button activated" : "AttachMenu--button",
                    round: !0,
                    color: "translucent",
                    onActivate: $,
                    ariaLabel: "Add an attachment",
                    ariaControls: "attach-menu-controls",
                    hasPopup: !0
                }, a.Ay.createElement(Je.A, {
                    name: "attach"
                })), a.Ay.createElement(Ve.A, {
                    id: "attach-menu-controls",
                    isOpen: D,
                    autoClose: !0,
                    positionX: "right",
                    positionY: "bottom",
                    onClose: M,
                    className: "AttachMenu--menu fluid",
                    onCloseAnimationEnd: M,
                    onMouseEnter: C.TF ? void 0 : k,
                    onMouseLeave: C.TF ? void 0 : T,
                    noCloseOnBackdrop: !C.TF,
                    ariaLabelledBy: "attach-menu-button"
                }, !i && a.Ay.createElement(He.A, {
                    className: "media-disabled",
                    disabled: !0
                }, "Posting media content is not allowed in this group."), i && a.Ay.createElement(a.Ay.Fragment, null, R && !z && a.Ay.createElement(He.A, {
                    icon: "photo",
                    onClick: J
                }, G(x ? "AttachmentMenu.PhotoOrVideo" : c ? "InputAttach.Popover.Photo" : "InputAttach.Popover.Video")), (m || u) && !j && a.Ay.createElement(He.A, {
                    icon: "document",
                    onClick: V
                }, G(!m && u ? "InputAttach.Popover.Music" : "AttachDocument")), m && g && a.Ay.createElement(He.A, {
                    icon: "bug",
                    onClick: H
                }, G("DebugSendLogs"))), s && !S && a.Ay.createElement(He.A, {
                    icon: "poll",
                    onClick: b
                }, G("Poll")), !S && !w && !p && q?.map((e => a.Ay.createElement(Ge.A, {
                    bot: e,
                    chatId: t,
                    threadId: n,
                    theme: y,
                    onMenuOpened: B,
                    onMenuClosed: O
                })))))
        }
        ))
          , Ze = e => {
            const {isOpen: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "BotCommandMenu", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
        ;
        var Qe = n(85449)
          , Ye = n(64493);
        const Xe = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {messageId: n} = t;
            const {chatId: a} = (0,
            c.Xf0)(e) || {};
            return a ? {
                message: (0,
                c.O5q)(e, a, n)
            } : {}
        }
        ))((e => {
            let {isOpen: t, message: n, onClose: i} = e;
            const {clickBotInlineButton: r} = (0,
            o.ko)()
              , s = (0,
            K.A)()
              , [l,c] = (0,
            _e.A)(t, i)
              , {isKeyboardSingleUse: d} = n || {}
              , m = (0,
            a.Kr)(( () => {
                const e = [];
                return n?.keyboardButtons.forEach((t => {
                    e.push(t.map((e => (0,
                    Qe.A)(s, e))))
                }
                )),
                e
            }
            ), [s, n?.keyboardButtons]);
            if (n && n.keyboardButtons)
                return a.Ay.createElement(Ve.A, {
                    isOpen: t,
                    autoClose: d,
                    positionX: "right",
                    positionY: "bottom",
                    onClose: i,
                    className: "BotKeyboardMenu",
                    onCloseAnimationEnd: i,
                    onMouseEnter: C.TF ? void 0 : l,
                    onMouseLeave: C.TF ? void 0 : c,
                    noCompact: !0
                }, a.Ay.createElement("div", {
                    className: "content custom-scroll"
                }, n.keyboardButtons.map(( (e, t) => a.Ay.createElement("div", {
                    className: "row"
                }, e.map(( (e, o) => a.Ay.createElement(Ye.A, {
                    ripple: !0,
                    disabled: "unsupported" === e.type,
                    onClick: () => r({
                        chatId: n.chatId,
                        messageId: n.id,
                        button: e
                    })
                }, m?.[t][o]))))))))
        }
        )))
          , et = (0,
        a.ph)((e => {
            let {isOpen: t, onClick: n, text: o, isDisabled: i} = e;
            const r = (0,
            a.li)(null);
            return (0,
            a.vJ)(( () => {
                const e = r.current;
                if (!e)
                    return;
                const t = e.scrollWidth + 1;
                e.closest(".Composer").style.setProperty("--bot-menu-text-width", `${t}px`)
            }
            ), [t, o]),
            (0,
            a.vJ)(( () => {
                const e = r.current;
                if (!e)
                    return;
                const t = e.closest(".Composer");
                return () => {
                    t.style.removeProperty("--bot-menu-text-width")
                }
            }
            ), []),
            a.Ay.createElement(Ye.A, {
                className: (0,
                m.A)("bot-menu", t && "open"),
                round: !0,
                color: "translucent",
                disabled: i,
                onClick: n,
                ariaLabel: "Open bot command keyboard"
            }, a.Ay.createElement("i", {
                className: (0,
                m.A)("bot-menu-icon", "icon", "icon-webapp", t && "open")
            }), a.Ay.createElement("span", {
                ref: r,
                className: "bot-menu-text"
            }, (0,
            T.A)(o)))
        }
        ))
          , tt = e => {
            const {isOpen: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "ChatCommandTooltip", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
        ;
        var nt = n(14)
          , at = n(39351)
          , ot = n(91930)
          , it = n(60859);
        const rt = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {shouldForceShowEditing: n, chatId: a, threadId: o, messageListType: i} = t;
            const {forwardMessages: {fromChatId: r, toChatId: s, messageIds: d, noAuthors: m, noCaptions: u}, isShareMessageModalShown: A, shouldPreventComposerAnimation: h} = (0,
            c.nTw)(e)
              , p = "scheduled" === i ? (0,
            c.VlN)(e, a) : (0,
            c.Ys6)(e, a, o)
              , y = (0,
            c.PKK)(e) && !h
              , g = s === a
              , f = d?.map((t => (0,
            c.O5q)(e, r, t)))
              , v = (0,
            c.GA4)(e, a, o)
              , E = v?.replyInfo
              , C = E?.replyToPeerId
              , b = C ? (0,
            c.hds)(e, C) : void 0;
            let w, S;
            if (p ? w = (0,
            c.KLw)(e, a, o, i) : g && 1 === d.length ? w = f?.[0] : E && !n && (w = (0,
            c.O5q)(e, E.replyToPeerId || a, E.replyToMsgId)),
            p && w)
                S = (0,
                c.Y7C)(e, w);
            else if (g)
                w && (S = (0,
                c.Szq)(e, w),
                S || (S = (0,
                c.Y7C)(e, w))),
                S || (S = (0,
                c.PVB)(e, r));
            else if (E && w && !n) {
                const {forwardInfo: t} = w
                  , n = (0,
                c.nZ4)(e, a);
                t && (t.isChannelPost || n) && (S = (0,
                c.Szq)(e, w)),
                S || t?.hiddenUserName && !Boolean(E.quoteText) || (S = (0,
                c.Y7C)(e, w))
            }
            const I = S && (0,
            c.hds)(e, S.id)
              , N = I && (0,
            l.WX)(I)
              , M = f?.some((e => e?.content.text && Object.keys(e.content).length > 1))
              , k = g && 1 === d.length && Boolean(w?.content.storyData)
              , T = E?.replyToMsgId === o && !E.replyToPeerId;
            return {
                replyInfo: E,
                editingId: p,
                message: w,
                sender: S,
                shouldAnimate: y,
                forwardedMessagesCount: g ? d.length : void 0,
                noAuthors: m,
                noCaptions: u,
                forwardsHaveCaptions: M,
                isCurrentUserPremium: (0,
                c.g29)(e),
                isContextMenuDisabled: k,
                isReplyToDiscussion: T,
                isInChangingRecipientMode: A,
                shouldPreventComposerAnimation: h,
                senderChat: b,
                currentUserId: e.currentUserId,
                isSenderChannel: N
            }
        }
        ))((e => {
            let {replyInfo: t, editingId: n, message: i, sender: r, shouldAnimate: s, forwardedMessagesCount: c, noAuthors: d, noCaptions: u, forwardsHaveCaptions: A, shouldForceShowEditing: h, isCurrentUserPremium: p, isContextMenuDisabled: y, isReplyToDiscussion: g, onClear: f, isInChangingRecipientMode: v, shouldPreventComposerAnimation: E, senderChat: C, chatId: b, currentUserId: w, isSenderChannel: S} = e;
            const {resetDraftReplyInfo: I, updateDraftReplyInfo: N, setEditingId: M, focusMessage: T, changeRecipient: P, openChatOrTopicWithReplyInDraft: x, setForwardNoAuthors: R, setForwardNoCaptions: B, exitForwardMode: O, setShouldPreventComposerAnimation: F} = (0,
            o.ko)()
              , D = (0,
            a.li)(null)
              , j = (0,
            K.A)()
              , z = (0,
            at.A)()
              , $ = "topicCreate" === i?.content.action?.type
              , J = t && !h
              , V = Boolean(t?.quoteText)
              , H = Boolean(c)
              , q = !(v || (!i || !t && !n) && (!r || !H))
              , {shouldRender: G, transitionClassNames: W} = (0,
            _.A)(q && !$ && !g, void 0, !s, void 0, !s, 350, !s);
            (0,
            a.vJ)(( () => {
                E && F({
                    shouldPreventComposerAnimation: !1
                })
            }
            ));
            const Z = (0,
            U.A)(( () => {
                n ? M({
                    messageId: void 0
                }) : c ? O() : t && !h && I(),
                f?.()
            }
            ));
            (0,
            a.vJ)(( () => q ? (0,
            Te.A)(Z) : void 0), [q, Z]);
            const {isContextMenuOpen: Q, contextMenuAnchor: Y, handleContextMenu: X, handleContextMenuClose: ee, handleContextMenuHide: te} = (0,
            L.A)(D)
              , ne = (0,
            U.A)((e => {
                X(e)
            }
            ))
              , ae = (0,
            U.A)((e => {
                e.stopPropagation(),
                Z(),
                te()
            }
            ))
              , oe = e => () => {
                ee(),
                e()
            }
              , ie = (0,
            U.A)(oe(P))
              , re = (0,
            U.A)(oe(( () => {
                T({
                    chatId: i.chatId,
                    messageId: i.id,
                    noForumTopicPanel: !0
                })
            }
            )))
              , se = (0,
            U.A)(oe(( () => N({
                quoteText: void 0
            }))))
              , le = (0,
            U.A)(oe(P))
              , ce = (0,
            U.A)(( () => {
                ee(),
                r && x({
                    chatId: r.id
                })
            }
            ))
              , de = (0,
            U.A)(oe(Z))
              , me = (0,
            U.A)(( () => D.current))
              , ue = (0,
            U.A)(( () => D.current))
              , Ae = (0,
            U.A)(( () => D.current.querySelector(".forward-context-menu .bubble")));
            (0,
            a.vJ)(( () => {
                G || (ee(),
                te())
            }
            ), [ee, te, G]);
            const he = (0,
            m.A)("ComposerEmbeddedMessage", W)
              , pe = (0,
            nt.A)(r, !0)
              , ye = (0,
            m.A)("ComposerEmbeddedMessage_inner", (0,
            k.y)(pe))
              , ge = (0,
            a.Kr)(( () => n ? "edit" : H ? "forward" : J ? "reply" : void 0), [n, H, J])
              , fe = c && c > 1 ? j("ForwardedMessageCount", c) : void 0
              , ve = (0,
            a.Kr)(( () => {
                if (!i || !H || !i.content.text || !d || p)
                    return i;
                const e = (0,
                l.m4)(i.content.text);
                return {
                    ...i,
                    content: {
                        ...i.content,
                        text: e
                    }
                }
            }
            ), [p, H, i, d])
              , Ee = (0,
            nt.A)(ge, !0);
            if (!G)
                return;
            const Ce = r && !S && b !== r.id && r.id !== w;
            return a.Ay.createElement("div", {
                className: he,
                ref: D,
                onContextMenu: X
            }, a.Ay.createElement("div", {
                className: ye
            }, a.Ay.createElement("div", {
                className: "embedded-left-icon",
                onClick: X
            }, Ee && a.Ay.createElement(Je.A, {
                name: Ee
            }), Boolean(t?.quoteText) && a.Ay.createElement(Je.A, {
                name: "quote",
                className: "quote-reply"
            })), a.Ay.createElement(ot.b, {
                isOpen: q,
                className: "inside-input",
                replyInfo: t,
                isInComposer: !0,
                message: ve,
                sender: d ? void 0 : r,
                customText: fe,
                title: n && !J ? j("EditMessage") : d ? j("HiddenSendersNameDescription") : void 0,
                onClick: ne,
                senderChat: C
            }), a.Ay.createElement(Ye.A, {
                className: "embedded-cancel",
                round: !0,
                faded: !0,
                color: "translucent",
                ariaLabel: j("Cancel"),
                onClick: ae
            }, a.Ay.createElement("i", {
                className: "icon icon-close"
            })), (J || H) && !y && a.Ay.createElement(Ve.A, {
                isOpen: Q,
                anchor: Y,
                getTriggerElement: me,
                getRootElement: ue,
                getMenuElement: Ae,
                className: "forward-context-menu",
                onClose: ee,
                onCloseAnimationEnd: te
            }, H && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(He.A, {
                icon: d ? void 0 : "message-succeeded",
                customIcon: d ? a.Ay.createElement("i", {
                    className: "icon icon-placeholder"
                }) : void 0,
                onClick: () => R({
                    noAuthors: !1
                })
            }, j(c > 1 ? "ShowSenderNames" : "ShowSendersName")), a.Ay.createElement(He.A, {
                icon: d ? "message-succeeded" : void 0,
                customIcon: d ? void 0 : a.Ay.createElement("i", {
                    className: "icon icon-placeholder"
                }),
                onClick: () => R({
                    noAuthors: !0
                })
            }, j(c > 1 ? "HideSenderNames" : "HideSendersName")), A && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(it.A, null), a.Ay.createElement(He.A, {
                icon: u ? void 0 : "message-succeeded",
                customIcon: u ? a.Ay.createElement("i", {
                    className: "icon icon-placeholder"
                }) : void 0,
                onClick: () => B({
                    noCaptions: !1
                })
            }, j(c > 1 ? "Conversation.ForwardOptions.ShowCaption" : "ShowCaption")), a.Ay.createElement(He.A, {
                icon: u ? "message-succeeded" : void 0,
                customIcon: u ? void 0 : a.Ay.createElement("i", {
                    className: "icon icon-placeholder"
                }),
                onClick: () => B({
                    noCaptions: !0
                })
            }, j(c > 1 ? "Conversation.ForwardOptions.HideCaption" : "HideCaption"))), a.Ay.createElement(it.A, null), a.Ay.createElement(He.A, {
                icon: "replace",
                onClick: ie
            }, j("ForwardAnotherChat"))), J && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(He.A, {
                icon: "show-message",
                onClick: re
            }, j("Message.Context.Goto")), V && a.Ay.createElement(He.A, {
                icon: "remove-quote",
                onClick: se
            }, j("RemoveQuote")), Ce && a.Ay.createElement(He.A, {
                icon: "user",
                onClick: ce
            }, z("ReplyInPrivateMessage")), a.Ay.createElement(He.A, {
                icon: "replace",
                onClick: le
            }, j("ReplyToAnotherChat")), a.Ay.createElement(He.A, {
                icon: "delete",
                onClick: de
            }, j("DoNotReply"))))))
        }
        )));
        var st = n(25897)
          , lt = n(83689)
          , ct = n(41510);
        const dt = e => {
            const {isOpen: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "DropArea", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
        ;
        var mt = n(49068);
        const ut = e => {
            const {isOpen: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "InlineBotTooltip", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
          , At = e => {
            const {isOpen: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "MentionTooltip", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
        ;
        var ht = n(78407);
        const pt = e => {
            const {isOpen: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "PollModal", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
          , yt = e => {
            const {isOpen: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "SendAsMenu", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
          , gt = e => {
            const {isOpen: t} = e
              , n = (0,
            Ue.A)(De.ar.Extra, "StickerTooltip", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
        ;
        var ft = n(26440)
          , vt = n(70314);
        const Et = new RegExp(r.kNZ,"i")
          , Ct = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n, threadId: a} = t;
            const o = (0,
            c.rQx)(e, n, a)
              , {attachmentSettings: i} = e;
            return {
                theme: (0,
                c.SJA)(e),
                webPagePreview: (0,
                c.nTw)(e).webPagePreview,
                noWebPage: o,
                attachmentSettings: i
            }
        }
        ))((e => {
            let {chatId: t, threadId: n, getHtml: r, isDisabled: s, webPagePreview: l, noWebPage: c, theme: d, attachmentSettings: u, isEditing: A} = e;
            const {loadWebPagePreview: h, clearWebPagePreview: p, toggleMessageWebPage: y, updateAttachmentSettings: g} = (0,
            o.ko)()
              , v = (0,
            K.A)()
              , E = (0,
            a.li)()
              , C = (0,
            a.li)(null)
              , b = u.isInvertedMedia
              , w = (0,
            q.tF)(( () => {
                const e = (0,
                f.Ay)(r())
                  , t = e.entities?.find((e => e.type === i.C7.TextUrl));
                return E.current = e,
                t?.url || e.text.match(Et)?.[0]
            }
            ), [r], 300, !0)
              , S = (0,
            G.A)(w, [w, r], !0);
            (0,
            a.vJ)(( () => {
                const e = S()
                  , a = E.current;
                e ? h({
                    text: a
                }) : (p(),
                y({
                    chatId: t,
                    threadId: n
                }))
            }
            ), [S, t, n]),
            (0,
            V.A)(( () => {
                p(),
                y({
                    chatId: t,
                    threadId: n
                })
            }
            ), [t, p, n, y]);
            const I = (0,
            B.A)(( () => Boolean(l && r() && !c && !s)), [s, r, c, l])
              , {shouldRender: N, transitionClassNames: M} = (0,
            _.A)(I)
              , k = (0,
            nt.A)(l, !0)
              , T = (0,
            U.A)(( () => {
                y({
                    chatId: t,
                    threadId: n,
                    noWebPage: !0
                })
            }
            ))
              , {isContextMenuOpen: P, contextMenuAnchor: x, handleContextMenu: R, handleContextMenuClose: O, handleContextMenuHide: F} = (0,
            L.A)(C, A, !0)
              , D = (0,
            U.A)(( () => C.current))
              , j = (0,
            U.A)(( () => C.current))
              , z = (0,
            U.A)(( () => C.current.querySelector(".web-page-preview-context-menu .bubble")))
              , $ = (0,
            U.A)((e => {
                R(e)
            }
            ));
            function J(e) {
                g({
                    isInvertedMedia: e
                })
            }
            if ((0,
            a.vJ)(( () => {
                N && k || (O(),
                F())
            }
            ), [O, F, N, k]),
            !N || !k)
                return;
            const {photo: H, ...W} = k
              , Z = {
                content: {
                    webPage: W
                }
            };
            return a.Ay.createElement("div", {
                className: (0,
                m.A)("WebPagePreview", M),
                ref: C
            }, a.Ay.createElement("div", {
                className: "WebPagePreview_inner"
            }, a.Ay.createElement("div", {
                className: "WebPagePreview-left-icon",
                onClick: $
            }, a.Ay.createElement("i", {
                className: "icon icon-link"
            })), a.Ay.createElement(vt.A, {
                message: Z,
                inPreview: !0,
                theme: d,
                onContainerClick: $,
                isEditing: A
            }), a.Ay.createElement(Ye.A, {
                className: "WebPagePreview-clear",
                round: !0,
                faded: !0,
                color: "translucent",
                ariaLabel: "Clear Webpage Preview",
                onClick: T
            }, a.Ay.createElement("i", {
                className: "icon icon-close"
            })), !A && a.Ay.createElement(Ve.A, {
                isOpen: P,
                anchor: x,
                getTriggerElement: D,
                getRootElement: j,
                getMenuElement: z,
                className: "web-page-preview-context-menu",
                onClose: O,
                onCloseAnimationEnd: F,
                autoClose: !0
            }, a.Ay.createElement(a.Ay.Fragment, null, b ? a.Ay.createElement(He.A, {
                icon: "move-caption-up",
                onClick: () => J(void 0)
            }, v("PreviewSender.MoveTextUp")) : a.Ay.createElement(He.A, {
                icon: "move-caption-down",
                onClick: () => J(!0)
            }, v("PreviewSender.MoveTextDown")), a.Ay.createElement(He.A, {
                icon: "delete",
                onClick: T
            }, v("ChatInput.EditLink.RemovePreview"))))))
        }
        )));
        var bt = n(97676)
          , wt = n(76283)
          , St = n(57474)
          , It = n(21849)
          , Nt = n(23470)
          , Mt = function(e) {
            return e.Send = "send",
            e.Record = "record",
            e.Edit = "edit",
            e.Schedule = "schedule",
            e.Forward = "forward",
            e.SendOneTime = "sendOneTime",
            e
        }(Mt || {});
        const kt = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n, threadId: a, storyId: o, messageListType: s, isMobile: m, type: u} = t;
            const A = (0,
            c.hds)(e, n)
              , h = n !== r.f51 ? (0,
            c.yps)(e, n) : void 0
              , p = Boolean(h)
              , y = (0,
            c.nZ4)(e, n)
              , g = (0,
            l.L8)(n)
              , f = p ? (0,
            c.vGo)(e, h.id) : void 0
              , v = g ? void 0 : (0,
            c.AWZ)(e, n)
              , E = (p || !g) && (0,
            c.tVS)(e, n, a)
              , C = (0,
            c.K3w)(e, n, a)
              , {language: b, shouldSuggestStickers: w, shouldSuggestCustomEmoji: S, shouldUpdateStickerSetOrder: I} = e.settings.byKey
              , N = e.emojiKeywords[r.cUY]
              , M = b !== r.cUY ? e.emojiKeywords[b] : void 0
              , k = E ? E.id : void 0
              , T = k ? (0,
            c.O5q)(e, n, k) : void 0
              , {currentUserId: P} = e
              , x = (0,
            c.mBe)(e, P)
              , R = v ? v?.sendAsId || P : void 0
              , L = A?.sendAsPeerIds && R && (A.sendAsPeerIds.some((e => e.id === R)) ? R : A?.adminRights?.anonymous ? A?.id : void 0)
              , B = L ? (0,
            c.mBe)(e, L) : void 0
              , O = !B && L ? (0,
            c.hds)(e, L) : void 0
              , F = (0,
            c.sam)(e, n)
              , D = (0,
            c.p6T)(e, n)
              , U = (0,
            c.nTw)(e)
              , K = Boolean(U.storyViewer.storyId)
              , j = (0,
            c.Xf0)(e)
              , z = n === j?.chatId && a === j?.threadId && s === j?.type && !K
              , $ = (0,
            c.mBe)(e, n)
              , _ = ($ && !(0,
            c.vGo)(e, $.id)?.noVoiceMessages) ?? !0
              , J = v?.slowMode
              , V = (0,
            c.g29)(e)
              , H = "scheduled" === s ? (0,
            c.dkp)(e, n) : (0,
            c.U0A)(e, n, a)
              , q = o && (0,
            c.Msb)(e, n, o)
              , G = q && "sentReaction"in q ? q.sentReaction : void 0
              , W = (0,
            c.GA4)(e, n, a)
              , Z = W?.replyInfo ? (0,
            c.O5q)(e, n, W.replyInfo.replyToMsgId) : void 0
              , Q = A?.isForum && A.isForumAsMessages && a === i.l3 && Z ? (0,
            c.nkm)(e, Z) : void 0
              , Y = "scheduled" === s
              , X = g && !p && !Y && !y
              , ee = (0,
            c.rQx)(e, n, a)
              , te = (0,
            c.vGo)(e, n)?.isContactRequirePremium
              , ne = g && !p && !Y && !y && "story" !== u && n !== r.zv8
              , ae = (0,
            c.xYJ)(e, "stickerEffects")
              , oe = U.shouldPlayEffectInComposer
              , ie = ne && W?.effectId
              , re = ie ? e.availableEffectById[ie] : void 0
              , se = e.reactions.effectReactions;
            return {
                availableReactions: e.reactions.availableReactions,
                topReactions: "story" === u ? e.reactions.topReactions : void 0,
                isOnActiveTab: !U.isBlurred,
                editingMessage: (0,
                c.KLw)(e, n, a, s),
                draft: W,
                chat: A,
                isChatWithBot: p,
                isChatWithSelf: y,
                isForCurrentMessageList: z,
                canScheduleUntilOnline: (0,
                c.RBq)(e, n),
                isChannel: A ? (0,
                l.WX)(A) : void 0,
                isRightColumnShown: (0,
                c.gjV)(e, m),
                isSelectModeActive: (0,
                c.rTV)(e),
                withScheduledButton: "thread" === s && Boolean(C?.length),
                isInScheduledList: Y,
                botKeyboardMessageId: k,
                botKeyboardPlaceholder: T?.keyboardPlaceholder,
                isForwarding: n === U.forwardMessages.toChatId,
                pollModal: U.pollModal,
                stickersForEmoji: e.stickers.forEmoji.stickers,
                customEmojiForEmoji: e.customEmojis.forEmoji.stickers,
                chatFullInfo: v,
                topInlineBotIds: e.topInlineBots?.userIds,
                currentUserId: P,
                currentUser: x,
                contentToBeScheduled: U.contentToBeScheduled,
                shouldSuggestStickers: w,
                shouldSuggestCustomEmoji: S,
                shouldUpdateStickerSetOrder: I,
                recentEmojis: e.recentEmojis,
                baseEmojiKeywords: N?.keywords,
                emojiKeywords: M?.keywords,
                inlineBots: U.inlineBots.byUsername,
                isInlineBotLoading: U.inlineBots.isLoading,
                botCommands: f ? f.botInfo?.commands || !1 : void 0,
                botMenuButton: f?.botInfo?.menuButton,
                sendAsUser: B,
                sendAsChat: O,
                sendAsId: L,
                editingDraft: H,
                requestedDraft: F,
                requestedDraftFiles: D,
                attachBots: e.attachMenu.bots,
                attachMenuPeerType: (0,
                c.dfQ)(e, n),
                theme: (0,
                c.SJA)(e),
                fileSizeLimit: (0,
                d.d)(e, "uploadMaxFileparts") * r.dK5,
                captionLimit: (0,
                d.d)(e, "captionLength"),
                isCurrentUserPremium: V,
                canSendVoiceByPrivacy: _,
                attachmentSettings: e.attachmentSettings,
                slowMode: J,
                currentMessageList: j,
                isReactionPickerOpen: (0,
                c.Ani)(e),
                canBuyPremium: !V && !(0,
                c.n_C)(e),
                canPlayAnimatedEmojis: (0,
                c.BWX)(e),
                canSendOneTimeMedia: !y && g && !p && !Y,
                shouldCollectDebugLogs: e.settings.byKey.shouldCollectDebugLogs,
                sentStoryReaction: G,
                stealthMode: e.stories.stealthMode,
                replyToTopic: Q,
                quickReplyMessages: e.quickReplies.messagesById,
                quickReplies: e.quickReplies.byId,
                canSendQuickReplies: X,
                noWebPage: ee,
                webPagePreview: (0,
                c.nTw)(e).webPagePreview,
                isContactRequirePremium: te,
                effect: re,
                effectReactions: se,
                areEffectsSupported: ne,
                canPlayEffect: ae,
                shouldPlayEffect: oe
            }
        }
        ))((e => {
            let {type: t, isOnActiveTab: n, dropAreaState: c, isInScheduledList: d, canScheduleUntilOnline: w, isReady: Z, isMobile: Q, onDropHide: Y, onFocus: X, onBlur: ee, editingMessage: te, chatId: ne, threadId: ae, storyId: oe, currentMessageList: ie, messageListType: re, draft: se, chat: le, chatFullInfo: ce, replyToTopic: ve, isForCurrentMessageList: Pe, isCurrentUserPremium: xe, canSendVoiceByPrivacy: Re, isChatWithBot: Le, isChatWithSelf: Be, isChannel: De, fileSizeLimit: Ue, isRightColumnShown: je, isSelectModeActive: ze, isReactionPickerOpen: $e, isForwarding: _e, pollModal: Ve, botKeyboardMessageId: He, botKeyboardPlaceholder: Ge, inputPlaceholder: Qe, withScheduledButton: nt, stickersForEmoji: at, customEmojiForEmoji: ot, topInlineBotIds: it, currentUserId: vt, currentUser: Et, captionLimit: kt, contentToBeScheduled: Tt, shouldSuggestStickers: Pt, shouldSuggestCustomEmoji: xt, baseEmojiKeywords: Rt, emojiKeywords: Lt, recentEmojis: Bt, inlineBots: Ot, isInlineBotLoading: Ft, botCommands: Dt, sendAsUser: Ut, sendAsChat: Kt, sendAsId: jt, editingDraft: zt, requestedDraft: $t, requestedDraftFiles: _t, botMenuButton: Jt, attachBots: Vt, attachMenuPeerType: Ht, attachmentSettings: qt, theme: Gt, slowMode: Wt, shouldUpdateStickerSetOrder: Zt, editableInputCssSelector: Qt, editableInputId: Yt, inputId: Xt, className: en, availableReactions: tn, topReactions: nn, canBuyPremium: an, canPlayAnimatedEmojis: on, shouldCollectDebugLogs: rn, sentStoryReaction: sn, stealthMode: ln, canSendOneTimeMedia: cn, quickReplyMessages: dn, quickReplies: mn, canSendQuickReplies: un, onForward: An, webPagePreview: hn, noWebPage: pn, isContactRequirePremium: yn, effect: gn, effectReactions: fn, areEffectsSupported: vn, canPlayEffect: En, shouldPlayEffect: Cn} = e;
            const {sendMessage: bn, clearDraft: wn, showDialog: Sn, forwardMessages: In, openPollModal: Nn, closePollModal: Mn, loadScheduledHistory: kn, openThread: Tn, addRecentEmoji: Pn, sendInlineBotResult: xn, loadSendAs: Rn, resetOpenChatWithDraft: Ln, callAttachBot: Bn, addRecentCustomEmoji: On, showNotification: Fn, showAllowedMessageTypesNotification: Dn, openStoryReactionPicker: Un, closeReactionPicker: Kn, sendStoryReaction: jn, editMessage: zn, updateAttachmentSettings: $n, saveEffectInDraft: _n, setReactionEffect: Jn, hideEffectInComposer: Vn} = (0,
            o.ko)()
              , Hn = (0,
            K.A)()
              , qn = (0,
            a.li)(null)
              , Gn = (0,
            a.li)(null)
              , [Wn,Zn] = (0,
            a.Ul)("")
              , [Qn,Yn] = (0,
            a.J0)(!1)
              , Xn = (0,
            D.A)(Qt)
              , ea = (0,
            a.li)()
              , ta = (0,
            j.A)(c)
              , {width: na} = b.A.get()
              , aa = "messageList" === t
              , oa = "story" === t
              , ia = aa ? le?.sendAsPeerIds : void 0
              , ra = ia && (ia.length > 1 || !ia.some((e => e.id === vt)))
              , [sa,la,ca] = (0,
            F.A)()
              , da = (0,
            $.A)(ne, ae)
              , [ma,ua,Aa] = (0,
            F.A)()
              , [ha,pa,ya] = (0,
            F.A)()
              , ga = te && (0,
            l.rO)(te)
              , {emojiSet: fa, members: va, botCommands: Ea} = ce || {}
              , Ca = fa?.id
              , ba = !(!sn || !("emoticon"in sn)) && sn.emoticon === r.tNZ.emoticon;
            (0,
            a.vJ)(p.VU, [Wn]);
            const wa = (0,
            a.li)(0)
              , [Sa,Ia] = (0,
            z.A)(aa && w, ca);
            (0,
            R.A)(( () => {
                Yn(!0)
            }
            ), 430),
            (0,
            a.vJ)(( () => {
                aa || Kn()
            }
            ), [aa, oe]),
            (0,
            a.vJ)(( () => {
                ea.current = void 0
            }
            ), [ne]),
            (0,
            a.vJ)(( () => {
                ne && Z && !oa && kn({
                    chatId: ne
                })
            }
            ), [Z, ne, ae, oa]),
            (0,
            a.vJ)(( () => {
                const e = De && le?.areProfilesShown;
                ne && le && !ia && Z && ((0,
                l.Vs)(le) || e) && Rn({
                    chatId: ne
                })
            }
            ), [le, ne, De, Z, Rn, ia]);
            const Na = (0,
            a.li)(!1);
            (0,
            V.A)((e => {
                let[t,n] = e;
                Na.current = Boolean(ne === t && ia && !n)
            }
            ), [ne, ia]);
            const [Ma,ka] = (0,
            a.J0)([])
              , Ta = Boolean(Ma.length)
              , [Pa,xa] = (0,
            a.J0)(void 0)
              , {canSendStickers: Ra, canSendGifs: La, canAttachMedia: Ba, canAttachPolls: Oa, canAttachEmbedLinks: Fa, canSendVoices: Da, canSendPlainText: Ua, canSendAudios: Ka, canSendVideos: ja, canSendPhotos: za, canSendDocuments: $a} = (0,
            a.Kr)(( () => (0,
            l.Q_)(le, ce, Le, oa)), [le, ce, Le, oa])
              , _a = yn && oa
              , Ja = _a || !Ua
              , Va = !Ta && Fa && !pn && Boolean(hn)
              , Ha = Ja && !te;
            (0,
            a.vJ)(( () => {
                Va || $n({
                    isInvertedMedia: void 0
                })
            }
            ), [Va]);
            const qa = (0,
            U.A)((function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yt;
                if (t === Yt && Ha)
                    return;
                const n = window.getSelection();
                let a;
                if (a = t === Yt ? document.querySelector(Qt) : document.getElementById(t),
                n.rangeCount) {
                    const o = n.getRangeAt(0);
                    if ((0,
                    M.L)(o, t))
                        return (0,
                        v.oR)(e),
                        void a.dispatchEvent(new Event("input",{
                            bubbles: !0
                        }))
                }
                Zn(`${Wn()}${e}`),
                (0,
                s.Uz)(( () => {
                    (0,
                    y.A)(a)
                }
                ))
            }
            ))
              , Ga = (0,
            U.A)((function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yt;
                const n = (0,
                T.A)(e, ["escape_html", "emoji_html", "br_html"]).join("").replace(/\u200b+/g, "​");
                qa(n, t)
            }
            ))
              , Wa = (0,
            U.A)((function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yt;
                const n = (0,
                P.Q)(e);
                qa(n, t)
            }
            ))
              , Za = (0,
            U.A)((function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yt;
                qa((0,
                N.hB)(e), t)
            }
            ))
              , Qa = (0,
            U.A)(( () => {
                Pa && (Wa(Pa, Yt),
                xa(void 0))
            }
            ))
              , {shouldSuggestCompression: Ya, shouldForceCompression: Xa, shouldForceAsFile: eo, handleAppendFiles: to, handleFileSelect: no, onCaptionUpdate: ao, handleClearAttachments: oo, handleSetAttachments: io} = function(e) {
                let {attachments: t, fileSizeLimit: n, setHtml: i, setAttachments: r, chatId: s, canSendAudios: c, canSendVideos: d, canSendPhotos: m, canSendDocuments: u, insertNextText: A, editedMessage: h} = e;
                const p = (0,
                K.A)()
                  , {openLimitReachedModal: y, showAllowedMessageTypesNotification: f, showNotification: v} = (0,
                o.ko)()
                  , [E,C] = (0,
                a.J0)(!1)
                  , [b,w] = (0,
                a.J0)(!1)
                  , [S,N] = (0,
                a.J0)(void 0)
                  , M = (0,
                U.A)(( () => {
                    r(g.p),
                    A()
                }
                ))
                  , k = (0,
                U.A)((e => {
                    const a = "function" == typeof e ? e(t) : e;
                    if (a.length)
                        if (a.some((e => {
                            const t = (0,
                            l.ES)(e);
                            return "audio" === t && !c && !u || "video" === t && !d && !u || "photo" === t && !m && !u || "file" === t && !u
                        }
                        )))
                            f({
                                chatId: s
                            });
                        else if (a.some((e => {
                            let {size: t} = e;
                            return t > n
                        }
                        )))
                            y({
                                limit: "uploadMaxFileparts"
                            });
                        else {
                            r(a);
                            const e = a.some((e => {
                                const t = (0,
                                l.ES)(e);
                                return "audio" === t && !c || "video" === t && !d || "photo" === t && !m
                            }
                            ));
                            C(Boolean(e && u)),
                            w(!u)
                        }
                    else
                        M()
                }
                ));
                return {
                    shouldSuggestCompression: S,
                    handleAppendFiles: (0,
                    U.A)((async (e, n) => {
                        if (h) {
                            const t = await (0,
                            I.A)(e[0].name, e[0])
                              , n = h && (0,
                            l.eh)(h, t);
                            h?.groupedId ? n ? k([t]) : v({
                                message: p("lng_edit_media_album_error")
                            }) : k([t])
                        } else {
                            const a = await Promise.all(e.map((e => (0,
                            I.A)(e.name, e, {
                                shouldSendAsSpoiler: n || void 0
                            }))));
                            k([...t, ...a])
                        }
                    }
                    )),
                    handleFileSelect: (0,
                    U.A)((async (e, t) => {
                        if (h) {
                            const t = await (0,
                            I.A)(e[0].name, e[0])
                              , n = h && (0,
                            l.eh)(h, t);
                            h?.groupedId ? n ? k([t]) : v({
                                message: p("lng_edit_media_album_error")
                            }) : k([t])
                        } else {
                            const t = await Promise.all(e.map((e => (0,
                            I.A)(e.name, e))));
                            k(t)
                        }
                        N(t)
                    }
                    )),
                    onCaptionUpdate: i,
                    handleClearAttachments: M,
                    handleSetAttachments: k,
                    shouldForceCompression: b,
                    shouldForceAsFile: E
                }
            }({
                attachments: Ma,
                setHtml: Zn,
                setAttachments: ka,
                fileSizeLimit: Ue,
                chatId: ne,
                canSendAudios: Ka,
                canSendVideos: ja,
                canSendPhotos: za,
                canSendDocuments: $a,
                insertNextText: Qa,
                editedMessage: te
            })
              , [ro,so,lo] = (0,
            F.A)()
              , [co,mo,uo] = (0,
            F.A)()
              , [Ao,ho,po] = (0,
            F.A)()
              , [yo,go,fo] = (0,
            F.A)()
              , [vo,Eo,Co] = (0,
            F.A)()
              , {startRecordingVoice: bo, stopRecordingVoice: wo, pauseRecordingVoice: So, activeVoiceRecording: Io, currentRecordTime: No, recordButtonRef: Mo, startRecordTimeRef: ko, isViewOnceEnabled: To, setIsViewOnceEnabled: Po, toogleViewOnceEnabled: xo} = ( () => {
                const e = (0,
                a.li)(null)
                  , [t,n] = (0,
                a.J0)()
                  , o = (0,
                a.li)()
                  , [i,r] = (0,
                a.J0)()
                  , [l,c] = (0,
                a.J0)(!1);
                (0,
                a.vJ)(( () => {
                    C.Yw && C.pW && Oe()
                }
                ), []);
                const d = (0,
                U.A)((async () => {
                    try {
                        const {stop: t, pause: a} = await Fe((t => {
                            e.current && (o.current && Date.now() % 4 == 0 && (0,
                            s.RK)(( () => {
                                e.current && (e.current.style.boxShadow = `0 0 0 ${50 * (t || 0)}px rgba(0,0,0,.15)`)
                            }
                            )),
                            r(Date.now()))
                        }
                        ));
                        o.current = Date.now(),
                        r(Date.now()),
                        n({
                            stop: t,
                            pause: a
                        })
                    } catch (e) {
                        console.error(e)
                    }
                }
                ))
                  , m = (0,
                U.A)(( () => {
                    if (t) {
                        (0,
                        s.RK)(( () => {
                            e.current && (e.current.style.boxShadow = "none")
                        }
                        ));
                        try {
                            return t.pause()
                        } catch (e) {
                            return void console.error(e)
                        }
                    }
                }
                ))
                  , u = (0,
                U.A)(( () => {
                    if (t) {
                        n(void 0),
                        o.current = void 0,
                        r(void 0),
                        (0,
                        s.RK)(( () => {
                            e.current && (e.current.style.boxShadow = "none")
                        }
                        ));
                        try {
                            return t.stop()
                        } catch (e) {
                            return void console.error(e)
                        }
                    }
                }
                ));
                (0,
                a.vJ)(( () => t ? (0,
                Te.A)(u) : void 0), [t, u]);
                const A = (0,
                U.A)(( () => {
                    c(!l)
                }
                ));
                return {
                    startRecordingVoice: d,
                    pauseRecordingVoice: m,
                    stopRecordingVoice: u,
                    activeVoiceRecording: t,
                    currentRecordTime: i,
                    recordButtonRef: e,
                    startRecordTimeRef: o,
                    isViewOnceEnabled: l,
                    setIsViewOnceEnabled: c,
                    toogleViewOnceEnabled: A
                }
            }
            )()
              , Ro = Pe && !oa;
            (0,
            x.A)(( () => {
                da({
                    type: "recordAudio"
                })
            }
            ), Ro ? Io && r.cqp : void 0),
            (0,
            a.vJ)(( () => {
                Pe && !oa && (Io || da({
                    type: "cancel"
                }))
            }
            ), [Io, Pe, oa, da]);
            const Lo = (0,
            J.i)(Boolean(te));
            (0,
            a.vJ)(( () => {
                Pe && !oa && Wn() && !Lo.current && da({
                    type: "typing"
                })
            }
            ), [Wn, Lo, Pe, oa, da]);
            const Bo = le && (0,
            l.SJ)(le)
              , {isEmojiTooltipOpen: Oo, closeEmojiTooltip: Fo, filteredEmojis: Do, filteredCustomEmojis: Uo, insertEmoji: Ko} = (0,
            fe.A)(Boolean(Z && n && (oa || Pe) && Pt && !Ta), Wn, Zn, void 0, Bt, Rt, Lt)
              , {isCustomEmojiTooltipOpen: jo, closeCustomEmojiTooltip: zo, insertCustomEmoji: $o} = (0,
            me.A)(Boolean(Z && n && (oa || Pe) && xt && !Ta), Wn, Zn, Xn, qn, ot)
              , {isStickerTooltipOpen: _o, closeStickerTooltip: Jo} = function(e, t, n) {
                const {loadStickersForEmoji: i, clearStickersForEmoji: s} = (0,
                o.ko)()
                  , [l,c,d] = (0,
                F.A)(!1)
                  , m = (0,
                G.A)(( () => {
                    const n = t();
                    if (!e || !n || C.TL && n.length > 8)
                        return;
                    if (!n.match(C.TL ? Ne.A : r.bpX))
                        return;
                    const a = (0,
                    H.S)(n);
                    return a && (C.TL && 1 === (0,
                    Me.A)(a) || !C.TL && Boolean(n.match(ke))) ? C.TL ? a : a.match(/alt="(.+)"/)?.[1] : void 0
                }
                ), [t, e])
                  , u = (0,
                B.A)(( () => Boolean(m())), [m])
                  , A = Boolean(n?.length);
                return (0,
                a.vJ)(( () => {
                    if (!e || !u)
                        return;
                    const t = m();
                    t ? A || i({
                        emoji: t
                    }) : s()
                }
                ), [e, u, m, A, i, s]),
                (0,
                a.vJ)(d, [d, t]),
                {
                    isStickerTooltipOpen: Boolean(u && A && !l),
                    closeStickerTooltip: c
                }
            }(Boolean(Z && n && (oa || Pe) && Pt && Ra && !Ta), Wn, at)
              , {isMentionTooltipOpen: Vo, closeMentionTooltip: Ho, insertMention: qo, mentionFilteredUsers: Go} = (0,
            Ie.A)(Boolean(aa && Z && Pe && !Ta), Wn, Zn, Xn, qn, va, it, vt)
              , {isOpen: Wo, botId: Zo, isGallery: Qo, switchPm: Yo, switchWebview: Xo, results: ei, closeTooltip: ti, help: ni, loadMore: ai} = function(e, t, n, i) {
                const {queryInlineBot: r, resetInlineBot: s, resetAllInlineBots: l} = (0,
                o.ko)()
                  , [c,d,m] = (0,
                F.A)(!1)
                  , u = (0,
                q.gs)(( () => {
                    const t = n();
                    return e && t.startsWith("@") ? function(e) {
                        if (!e.startsWith("@"))
                            return be;
                        const t = function(e) {
                            return we.innerHTML = e.replace(/<br>/g, "\n"),
                            we.querySelectorAll("[alt]").forEach((e => {
                                e.innerText || (e.innerText = e.getAttribute("alt"))
                            }
                            )),
                            we.innerText
                        }(e)
                          , n = t.match(Ee);
                        return n ? Se(n[1], n[2], "" === n[2] && !t.match(Ce)) : be
                    }(t) : be
                }
                ), [n, e], 300)
                  , {username: A, query: h, canShowHelp: p, usernameLowered: y} = (0,
                B.A)(u, [u, n], !0);
                (0,
                V.A)((e => {
                    let[t] = e;
                    t && s({
                        username: t
                    })
                }
                ), [A, s]),
                (0,
                a.vJ)(( () => {
                    y && r({
                        chatId: t,
                        username: y,
                        query: h
                    })
                }
                ), [t, h, r, y]),
                (0,
                a.vJ)(m, [m, n]);
                const {id: g, switchPm: f, switchWebview: v, offset: E, results: C, isGallery: b, help: w} = y && i?.[y] || {}
                  , S = Boolean((C?.length || f) && !c);
                (0,
                a.vJ)(( () => {
                    S || A || l()
                }
                ), [S, l, A]);
                const I = (0,
                U.A)(( () => {
                    y && r({
                        chatId: t,
                        username: y,
                        query: h,
                        offset: E
                    })
                }
                ));
                return {
                    isOpen: S,
                    botId: g,
                    isGallery: b,
                    switchPm: f,
                    switchWebview: v,
                    results: C,
                    closeTooltip: d,
                    help: p && w ? `@${A} ${w}` : void 0,
                    loadMore: I
                }
            }(Boolean(aa && Z && Pe && !Ta), ne, Wn, Ot)
              , oi = Boolean(mn && Object.keys(mn).length)
              , {isOpen: ii, close: ri, filteredBotCommands: si, filteredQuickReplies: li} = function(e, t, n, o, i) {
                const [r,s] = (0,
                a.J0)()
                  , [l,c] = (0,
                a.J0)()
                  , [d,m,u] = (0,
                F.A)(!1)
                  , A = (0,
                q.gs)(( () => {
                    const n = t();
                    return e && n.startsWith("/") ? (0,
                    H.S)(n).match(W)?.[0].trim() : void 0
                }
                ), [t, e], 300)
                  , h = (0,
                G.A)(A, [A, t], !0);
                return (0,
                a.vJ)(( () => {
                    const e = h()
                      , t = n || o;
                    if (!e || !t && !i)
                        return s(void 0),
                        void c(void 0);
                    const a = e.substring(1)
                      , r = t?.filter((e => !a || e.command.startsWith(a)));
                    s(r?.length ? r : void 0);
                    const l = Object.values(i || {}).filter((e => !a || e.shortcut.startsWith(a)));
                    c(l?.length ? l : void 0)
                }
                ), [h, n, o, i]),
                (0,
                a.vJ)(u, [u, t]),
                {
                    isOpen: Boolean((r?.length || l?.length) && !d),
                    close: m,
                    filteredBotCommands: r,
                    filteredQuickReplies: l
                }
            }(Boolean(aa && Z && Pe && (Dt && Dt?.length || Ea?.length || oi && un)), Wn, Dt, Ea, un ? mn : void 0);
            (e => {
                let {draft: t, chatId: n, threadId: l, getHtml: c, setHtml: d, editedMessage: m, isDisabled: u} = e;
                const {saveDraft: A, clearDraft: h, loadCustomEmojis: p} = (0,
                o.ko)()
                  , y = (0,
                a.li)(!1);
                (0,
                a.vJ)(( () => {
                    const e = c()
                      , n = void 0 !== t?.isLocal;
                    (0,
                    P.Q)(t?.text) !== e || n ? y.current = !0 : y.current = !1
                }
                ), [t, c]),
                (0,
                a.vJ)(( () => {
                    y.current = !1
                }
                ), [n, l]);
                const g = Boolean(m)
                  , v = (0,
                U.A)((function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (u || g || !y.current)
                        return;
                    const t = c();
                    t ? (0,
                    s.YS)(( () => {
                        A({
                            chatId: e.chatId ?? n,
                            threadId: e.threadId ?? l,
                            text: (0,
                            f.Ay)(t)
                        })
                    }
                    )) : h({
                        chatId: e.chatId ?? n,
                        threadId: e.threadId ?? l,
                        shouldKeepReply: !0
                    })
                }
                ))
                  , E = (0,
                Ae.A)(r.mPG, !0, void 0, [n, l]);
                (0,
                ue.A)((e => {
                    let[a,o,r] = e;
                    if (u)
                        return;
                    const s = y.current;
                    if (n === a && l === o) {
                        if (s && !t)
                            return;
                        if (!t && r && d(""),
                        s)
                            return
                    }
                    if (m || !t)
                        return;
                    d((0,
                    P.Q)(t.text));
                    const c = t.text?.entities?.map((e => e.type === i.C7.CustomEmoji && e.documentId)).filter(Boolean) || [];
                    c.length && p({
                        ids: c
                    })
                }
                ), [n, l, t, c, d, m, u]),
                (0,
                a.Nf)(( () => {
                    if (!u)
                        return () => {
                            g || v({
                                chatId: n,
                                threadId: l
                            }),
                            ye = !0,
                            (0,
                            s.YS)(( () => {
                                ye = !1
                            }
                            ))
                        }
                }
                ), [n, l, g, v, u]);
                const C = (0,
                J.i)(n)
                  , b = (0,
                J.i)(l);
                (0,
                a.vJ)(( () => {
                    if (u || ye)
                        return;
                    if (!c())
                        return void v();
                    const e = C.current
                      , t = b.current;
                    E(( () => {
                        C.current === e && b.current === t && v()
                    }
                    ))
                }
                ), [C, c, u, E, b, v]),
                (0,
                he.A)(v),
                (0,
                pe.A)(v)
            }
            )({
                draft: se,
                chatId: ne,
                threadId: ae,
                getHtml: Wn,
                setHtml: Zn,
                editedMessage: te,
                isDisabled: oa || Boolean($t)
            });
            const ci = (0,
            U.A)((function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || Zn(""),
                ka(g.p),
                xa(void 0),
                Fo(),
                zo(),
                Jo(),
                Ho(),
                Q ? setTimeout(( () => po()), 350) : po()
            }
            ))
              , [di,mi,ui] = ( (e, t, n, i, c, d, m, u, A) => {
                const {editMessage: h, setEditingDraft: p, toggleMessageWebPage: g, openDeleteMessageModal: v} = (0,
                o.ko)()
                  , [E,C] = (0,
                a.J0)(!1)
                  , b = u?.replyInfo?.replyToMsgId;
                (0,
                O.A)((e => {
                    let[a,o] = e;
                    if (!n)
                        return;
                    if (b && o !== b)
                        return t(""),
                        void C(!1);
                    if (a?.id === n.id && b === o)
                        return;
                    const i = !a && A?.text.length ? A : n.content.text
                      , l = (0,
                    P.Q)(i);
                    t(l),
                    C(!0),
                    (0,
                    s.Uz)(( () => {
                        const e = document.querySelector(r.m$5);
                        e && (0,
                        y.A)(e, !0)
                    }
                    ))
                }
                ), [n, b, A, t]),
                (0,
                a.vJ)(( () => {
                    if (!n)
                        return;
                    const e = !("webPage"in n.content) && n.content.text?.entities?.some((e => ge.has(e.type)));
                    g({
                        chatId: c,
                        threadId: d,
                        noWebPage: e
                    })
                }
                ), [c, d, n]),
                (0,
                a.vJ)(( () => {
                    if (n)
                        return () => {
                            const t = (0,
                            f.Ay)(e())
                              , n = t.text.length ? t : void 0;
                            p({
                                chatId: c,
                                threadId: d,
                                type: m,
                                text: n
                            })
                        }
                }
                ), [c, n, e, p, d, m]);
                const w = (0,
                q.tF)(( () => {
                    if (!n)
                        return !1;
                    const t = (0,
                    f.Ay)(e());
                    return !("webPage"in n.content) && n.content.text?.entities?.some((e => ge.has(e.type))) && !t.entities?.some((e => ge.has(e.type)))
                }
                ), [n, e], 300, !0)
                  , S = (0,
                G.A)(w, [w, e], !0);
                (0,
                O.A)((e => {
                    let[t] = e;
                    n && t?.id === n.id && S() && g({
                        chatId: c,
                        threadId: d,
                        noWebPage: !1
                    })
                }
                ), [n, c, e, d, S]);
                const I = (0,
                U.A)(( () => {
                    u && (0,
                    s.YS)(( () => {
                        t((0,
                        P.Q)(u.text)),
                        (0,
                        s.Uz)(( () => {
                            const e = document.querySelector(r.m$5);
                            e && (0,
                            y.A)(e, !0)
                        }
                        ))
                    }
                    ))
                }
                ))
                  , N = (0,
                U.A)(( () => {
                    i(),
                    I()
                }
                ))
                  , M = (0,
                U.A)(( () => {
                    const {text: t, entities: a} = (0,
                    f.Ay)(e());
                    n && (t || (0,
                    l.mR)(n) ? (h({
                        messageList: {
                            chatId: c,
                            threadId: d,
                            type: m
                        },
                        text: t,
                        entities: a
                    }),
                    i(),
                    I()) : v({
                        isSchedule: "scheduled" === m,
                        message: n
                    }))
                }
                ))
                  , k = (0,
                U.A)(( () => {
                    if (!n)
                        return;
                    const t = (0,
                    f.Ay)(e())
                      , a = t.text.length ? t : void 0;
                    p({
                        chatId: c,
                        threadId: d,
                        type: m,
                        text: a
                    })
                }
                ));
                return (0,
                he.A)(k),
                (0,
                pe.A)(k),
                [M, N, E]
            }
            )(Wn, Zn, te, ci, ne, ae, re, se, zt)
              , Ai = (0,
            J.i)(ci)
              , hi = (0,
            J.i)(wo);
            (0,
            a.vJ)(( () => () => {
                hi.current(),
                Ai.current()
            }
            ), [ne, ae, Ai, hi]);
            const pi = (0,
            U.A)(( () => {
                const e = wa.current;
                Fn(e ? {
                    message: Hn("UnlockPremiumEmojiHint2"),
                    action: {
                        action: "openChat",
                        payload: {
                            id: vt,
                            shouldReplaceHistory: !0
                        }
                    },
                    actionText: Hn("Open")
                } : {
                    message: Hn("UnlockPremiumEmojiHint"),
                    action: {
                        action: "openPremiumModal",
                        payload: {
                            initialSection: "animated_emoji"
                        }
                    },
                    actionText: Hn("PremiumMore")
                }),
                wa.current = Number(!e)
            }
            ))
              , yi = (0,
            B.A)(( () => ma || !An || Wn() && !Ta ? te && ui ? Mt.Edit : !C.pW || Io || _e || Wn() && !Ta ? d ? Mt.Schedule : Mt.Send : Mt.Record : Mt.Forward), [Io, te, Wn, Ta, _e, ma, An, ui, d])
              , gi = !d
              , {isContextMenuOpen: fi, handleContextMenu: vi, handleContextMenuClose: Ei, handleContextMenuHide: Ci} = (0,
            L.A)(Mo, !(yi === Mt.Send && gi))
              , {contextMenuAnchor: bi, handleContextMenu: wi, handleBeforeContextMenu: Si, handleContextMenuHide: Ii} = (0,
            L.A)(Gn, !oa);
            (0,
            a.vJ)(( () => {
                $e || bi && (Un({
                    peerId: ne,
                    storyId: oe,
                    position: bi
                }),
                Ii())
            }
            ), [ne, Ii, $e, oe, bi]),
            de(Pe || oa, Wa, io, xa, te, !xe && !Be, pi);
            const Ni = (0,
            U.A)(( () => {
                te && mi()
            }
            ))
              , Mi = (0,
            U.A)(( (e, t) => {
                const n = t ? kt : 4096;
                if (e?.length > n) {
                    const t = e.length - n;
                    return Sn({
                        data: {
                            message: "MESSAGE_TOO_LONG_PLEASE_REMOVE_CHARACTERS",
                            textParams: {
                                "{EXTRA_CHARS_COUNT}": t.toString(),
                                "{PLURAL_S}": t > 1 ? "s" : ""
                            },
                            hasErrorKey: !0
                        }
                    }),
                    !1
                }
                return !0
            }
            ))
              , ki = (0,
            U.A)(( () => {
                if (Wt && !Bo) {
                    const e = document.querySelector(Qt)
                      , t = (0,
                    E.Fm)()
                      , n = ea.current && Math.floor(t - ea.current)
                      , a = Wt.nextSendDate && Wt.nextSendDate > t;
                    if (n && n < Wt.seconds || a) {
                        const o = a ? Wt.nextSendDate - t : Wt.seconds - n;
                        return Sn({
                            data: {
                                message: Hn("SlowModeHint", (0,
                                u.QO)(o)),
                                isSlowMode: !0,
                                hasErrorKey: !1
                            }
                        }),
                        e?.blur(),
                        !1
                    }
                }
                return !0
            }
            ))
              , Ti = (0,
            U.A)((e => {
                let {attachments: t, sendCompressed: n=qt.shouldCompress, sendGrouped: a=qt.shouldSendGrouped, isSilent: o, scheduledAt: i, isInvertedMedia: r} = e;
                if (!ie && !oe)
                    return;
                const {text: l, entities: c} = (0,
                f.Ay)(Wn());
                (l || t.length) && Mi(l, !0) && ki() && (r = l && n && a ? r : void 0,
                te ? zn({
                    messageList: ie,
                    text: l,
                    entities: c,
                    attachments: (0,
                    I.L)(t, n)
                }) : bn({
                    messageList: ie,
                    text: l,
                    entities: c,
                    scheduledAt: i,
                    isSilent: o,
                    shouldUpdateStickerSetOrder: Zt,
                    attachments: (0,
                    I.L)(t, n),
                    shouldGroupMessages: a,
                    isInvertedMedia: r
                }),
                ea.current = (0,
                E.Fm)(),
                wn({
                    chatId: ne,
                    isLocalOnly: !0
                }),
                (0,
                s.YS)(( () => {
                    ci()
                }
                )))
            }
            ))
              , Pi = (0,
            U.A)(( (e, t, n) => {
                Ti({
                    attachments: Ma,
                    sendCompressed: e,
                    sendGrouped: t,
                    isInvertedMedia: n
                })
            }
            ))
              , xi = (0,
            U.A)(( (e, t, n, a, o) => {
                Ti({
                    attachments: Ma,
                    sendCompressed: e,
                    sendGrouped: t,
                    isSilent: n,
                    scheduledAt: a,
                    isInvertedMedia: o
                })
            }
            ))
              , Ri = (0,
            U.A)((async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (!ie && !oe)
                    return;
                let n = Ma;
                if (Io) {
                    const e = await wo()
                      , t = To ? r.dxe : void 0;
                    if (e) {
                        const {blob: a, duration: o, waveform: i} = e;
                        n = [await (0,
                        I.A)("wonderful-voice-message.ogg", a, {
                            voice: {
                                duration: o,
                                waveform: i
                            },
                            ttlSeconds: t
                        })]
                    }
                }
                const {text: a, entities: o} = (0,
                f.Ay)(Wn());
                if (n.length)
                    return void Ti({
                        attachments: n,
                        scheduledAt: t,
                        isSilent: e
                    });
                if (!a && !_e)
                    return;
                if (!Mi(a))
                    return;
                const i = document.querySelector(Qt)
                  , l = gn?.id;
                if (a) {
                    if (!ki())
                        return;
                    const n = Va ? qt.isInvertedMedia : void 0;
                    vn && _n({
                        chatId: ne,
                        threadId: ae,
                        effectId: void 0
                    }),
                    bn({
                        messageList: ie,
                        text: a,
                        entities: o,
                        scheduledAt: t,
                        isSilent: e,
                        shouldUpdateStickerSetOrder: Zt,
                        isInvertedMedia: n,
                        effectId: l
                    })
                }
                _e && In({
                    scheduledAt: t,
                    isSilent: e
                }),
                ea.current = (0,
                E.Fm)(),
                wn({
                    chatId: ne,
                    threadId: ae,
                    isLocalOnly: !0,
                    shouldKeepReply: _e
                }),
                C.pz && i && i === document.activeElement && S(i),
                (0,
                s.YS)(( () => {
                    ci()
                }
                ))
            }
            ))
              , Li = (0,
            U.A)(( () => {
                if ("webApp" !== Jt?.type)
                    return;
                const e = (0,
                h.v)(Jt.url);
                "publicUsernameOrBotLink" === e?.type && e.appName ? (0,
                A.__)(Jt.url) : Bn({
                    chatId: ne,
                    url: Jt.url,
                    threadId: ae
                })
            }
            ))
              , Bi = (0,
            U.A)(( () => {
                po(),
                mo()
            }
            ))
              , Oi = (0,
            U.A)(( (e, t, n, a) => {
                if (e && "queryId"in e) {
                    const {id: a, queryId: o, isSilent: i} = e;
                    return void xn({
                        id: a,
                        queryId: o,
                        scheduledAt: t,
                        isSilent: i,
                        messageList: n
                    })
                }
                const {isSilent: o, ...i} = e || {};
                if (e && 0 !== Object.keys(i).length)
                    if (void 0 !== e.sendCompressed || void 0 !== e.sendGrouped) {
                        const {sendCompressed: n=!1, sendGrouped: a=!1, isInvertedMedia: i} = e;
                        xi(n, a, o, t, i)
                    } else
                        bn({
                            ...e,
                            messageList: n,
                            scheduledAt: t,
                            effectId: a
                        });
                else
                    Ri(Boolean(o), t)
            }
            ));
            (0,
            O.A)((e => {
                let[t] = e;
                ie && Tt && Tt !== t && Sa((e => {
                    Oi(Tt, e, ie)
                }
                ))
            }
            ), [Tt, ie, Oi, Sa]),
            (0,
            a.vJ)(( () => {
                $t && (Wa($t),
                Ln(),
                (0,
                s.Uz)(( () => {
                    const e = document.getElementById(Yt);
                    (0,
                    y.A)(e, !0)
                }
                )))
            }
            ), [Yt, $t, Ln, Zn]),
            (0,
            a.vJ)(( () => {
                _t?.length && (no(_t),
                Ln())
            }
            ), [no, _t, Ln]);
            const Fi = (0,
            U.A)(( (e, t) => {
                const n = "id"in e.stickerSetInfo && e.stickerSetInfo.id;
                e.isFree || xe || Be || n === Ca ? Za(e, t) : pi()
            }
            ))
              , Di = (0,
            U.A)((e => {
                Fi(e, r.e0F)
            }
            ))
              , Ui = (0,
            U.A)(( (e, t, n) => {
                (ie || oe) && (d || n ? (la(),
                Sa((n => {
                    ca(),
                    Oi({
                        gif: e,
                        isSilent: t
                    }, n, ie),
                    (0,
                    s.YS)(( () => {
                        ci(!0)
                    }
                    ))
                }
                ))) : (bn({
                    messageList: ie,
                    gif: e,
                    isSilent: t
                }),
                (0,
                s.YS)(( () => {
                    ci(!0)
                }
                ))))
            }
            ))
              , Ki = (0,
            U.A)((function(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , o = arguments.length > 4 ? arguments[4] : void 0;
                (ie || oe) && (e = {
                    ...e,
                    isPreloadedGlobally: !0
                },
                d || n ? (la(),
                Sa((n => {
                    ca(),
                    Oi({
                        sticker: e,
                        isSilent: t
                    }, n, ie),
                    (0,
                    s.YS)(( () => {
                        ci(a)
                    }
                    ))
                }
                ))) : (bn({
                    messageList: ie,
                    sticker: e,
                    isSilent: t,
                    shouldUpdateStickerSetOrder: Zt && o
                }),
                wn({
                    chatId: ne,
                    threadId: ae,
                    isLocalOnly: !0
                }),
                (0,
                s.YS)(( () => {
                    ci(a)
                }
                ))))
            }
            ))
              , ji = (0,
            U.A)(( (e, t, n) => {
                if (!ie && !oe)
                    return;
                d || n ? Sa((n => {
                    Oi({
                        id: e.id,
                        queryId: e.queryId,
                        isSilent: t
                    }, n, ie)
                }
                )) : xn({
                    id: e.id,
                    queryId: e.queryId,
                    isSilent: t,
                    messageList: ie
                });
                const a = document.querySelector(Qt);
                C.pz && a && a === document.activeElement && S(a),
                wn({
                    chatId: ne,
                    isLocalOnly: !0
                }),
                (0,
                s.YS)(( () => {
                    ci()
                }
                ))
            }
            ))
              , zi = (0,
            U.A)(( () => {
                wn({
                    chatId: ne,
                    isLocalOnly: !0
                }),
                (0,
                s.YS)(( () => {
                    ci()
                }
                ))
            }
            ))
              , $i = (0,
            U.A)((e => {
                ie && (d ? (Sa((t => {
                    Oi({
                        poll: e
                    }, t, ie)
                }
                )),
                Mn()) : (bn({
                    messageList: ie,
                    poll: e
                }),
                Mn()))
            }
            ))
              , _i = (0,
            U.A)((e => {
                if (d)
                    Sa((t => {
                        Oi({
                            ...e,
                            isSilent: !0
                        }, t, ie)
                    }
                    ));
                else if (e && ("sendCompressed"in e || "sendGrouped"in e)) {
                    const {sendCompressed: t=!1, sendGrouped: n=!1, isInvertedMedia: a} = e;
                    xi(t, n, !0, void 0, a)
                } else
                    Ri(!0)
            }
            ))
              , Ji = (0,
            U.A)(( () => {
                const e = document.querySelector(Qt);
                if (!Q || e !== document.activeElement)
                    return uo(),
                    po(),
                    void go();
                e?.blur(),
                setTimeout(( () => {
                    uo(),
                    po(),
                    go()
                }
                ), 100)
            }
            ));
            (0,
            a.vJ)(( () => {
                Ha && Zn("")
            }
            ), [Ha, Zn, Ma]);
            const Vi = (0,
            U.A)((e => {
                Ga(e, r.e0F)
            }
            ))
              , Hi = (0,
            U.A)((function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yt;
                const t = window.getSelection();
                if (t.rangeCount) {
                    const n = t.getRangeAt(0);
                    if ((0,
                    M.L)(n, e))
                        return void document.execCommand("delete", !1)
                }
                Zn(function(e) {
                    const t = document.createElement("div");
                    t.contentEditable = "true",
                    t.style.position = "absolute",
                    t.style.left = "-10000px",
                    t.style.top = "-10000px",
                    t.innerHTML = e,
                    t.className = "allow-selection",
                    document.body.appendChild(t);
                    let n = t.lastChild;
                    if (n.lastChild)
                        for (; n.lastChild; )
                            n = n.lastChild;
                    const a = n.textContent.length
                      , o = document.createRange()
                      , i = window.getSelection();
                    o.setStart(n, a),
                    o.setEnd(n, a),
                    i.removeAllRanges(),
                    i.addRange(o),
                    document.execCommand("delete", !1);
                    const r = t.innerHTML;
                    return document.body.removeChild(t),
                    r
                }(Wn()))
            }
            ))
              , qi = (0,
            U.A)(( () => {
                Hi(r.e0F)
            }
            ))
              , Gi = (0,
            U.A)(( () => {
                Tn({
                    chatId: ne,
                    threadId: ae,
                    type: "scheduled",
                    noForumTopicPanel: !0
                })
            }
            ));
            (0,
            a.vJ)(( () => {
                je && Q && po()
            }
            ), [je, po, Q]),
            (0,
            a.vJ)(( () => {
                Z && (ze ? Eo() : setTimeout(( () => {
                    Co()
                }
                ), 200))
            }
            ), [ze, Co, Eo, Z]);
            const Wi = Le && "webApp" === Jt?.type && !te
              , Zi = (0,
            B.A)(( () => Wi && !Wn() && !Io), [Wi, Wn, Io])
              , [Qi,Yi] = (0,
            a.Kr)(( () => Wt?.nextSendDate ? ["SlowModeWait", Wt.nextSendDate] : ln?.activeUntil && oa ? ["StealthModeActiveHint", ln.activeUntil] : []), [oa, Wt?.nextSendDate, ln?.activeUntil])
              , Xi = ro || Ao || Oo || yo || Vo || Wo || co || ha || _o || ii || jo || Zi || fi || Boolean(Io) || Ma.length > 0 || ma
              , er = Xi && !$e && oa && !ha && !Ao
              , tr = le?.isForum && le?.isForumAsMessages && ae === i.l3 ? ve ? Hn("Chat.InputPlaceholderReplyInTopic", ve.title) : Hn("Message.Placeholder.MessageInGeneral") : void 0;
            (0,
            a.vJ)(( () => {
                Xi ? X?.() : ee?.()
            }
            ), [Xi, ee, X]);
            const {shouldRender: nr, transitionClassNames: ar} = (0,
            _.A)(er)
              , or = !(yi !== Mt.Record || Ba && Re && Da)
              , ir = (0,
            U.A)(( () => {
                switch (yi) {
                case Mt.Forward:
                    An?.();
                    break;
                case Mt.Send:
                    Ri();
                    break;
                case Mt.Record:
                    or ? Re ? Da || Dn({
                        chatId: ne
                    }) : Fn({
                        message: Hn("VoiceMessagesRestrictedByPrivacy", le?.title)
                    }) : (Po(!1),
                    bo());
                    break;
                case Mt.Edit:
                    di();
                    break;
                case Mt.Schedule:
                    if (Io && So(),
                    !ie)
                        return;
                    Sa((e => {
                        Oi({}, e, ie, gn?.id)
                    }
                    ))
                }
            }
            ))
              , rr = new Date;
            rr.setSeconds(0),
            rr.setMilliseconds(0);
            const sr = new Date;
            sr.setFullYear(sr.getFullYear() + 1);
            let lr = "SendMessage";
            switch (yi) {
            case Mt.Forward:
                lr = "Forward";
                break;
            case Mt.Edit:
                lr = "Save edited message";
                break;
            case Mt.Record:
                lr = Ba ? "AccDescrVoiceMessage" : "Conversation.DefaultRestrictedMedia"
            }
            const cr = (0,
            m.A)("Composer", !ze && "shown", vo && "hover-disabled", Qn && "mounted", en)
              , dr = (0,
            U.A)((e => {
                let t, n;
                if ("emoticon"in e)
                    t = e.emoticon;
                else {
                    const a = (0,
                    o.mS)().customEmojis.byId[e.documentId];
                    if (!a)
                        return;
                    if (!a.isFree && !xe && !Be)
                        return void pi();
                    const i = (0,
                    f.Ay)((0,
                    N.hB)(a));
                    t = i.text,
                    n = i.entities
                }
                bn({
                    text: t,
                    entities: n,
                    isReaction: !0
                }),
                Kn()
            }
            ))
              , mr = (0,
            U.A)((e => {
                Jn({
                    chatId: ne,
                    threadId: ae,
                    reaction: e
                }),
                Kn()
            }
            ))
              , ur = (0,
            U.A)((e => {
                Un({
                    peerId: ne,
                    storyId: oe,
                    position: e,
                    sendAsMessage: !0
                })
            }
            ))
              , Ar = (0,
            U.A)(( () => {
                const e = sn ? void 0 : r.tNZ;
                jn({
                    peerId: ne,
                    storyId: oe,
                    containerId: (0,
                    l.$_)(ne, oe),
                    reaction: e
                })
            }
            ))
              , hr = (0,
            U.A)(( () => {
                Sa((e => {
                    Oi({}, e, ie)
                }
                ))
            }
            ))
              , pr = (0,
            U.A)(( () => {
                _i()
            }
            ))
              , yr = (0,
            U.A)(( () => {
                Oi({}, r.NkL, ie, gn?.id)
            }
            ))
              , gr = (0,
            U.A)(( (e, t, n) => {
                Sa((a => {
                    Oi({
                        sendCompressed: e,
                        sendGrouped: t,
                        isInvertedMedia: n
                    }, a, ie)
                }
                ))
            }
            ))
              , fr = (0,
            U.A)(( (e, t, n) => {
                _i({
                    sendCompressed: e,
                    sendGrouped: t,
                    isInvertedMedia: n
                })
            }
            ))
              , vr = (0,
            U.A)(( () => {
                _n({
                    chatId: ne,
                    threadId: ae,
                    effectId: void 0
                })
            }
            ))
              , Er = (0,
            U.A)(( () => {
                Vn({})
            }
            ))
              , Cr = (0,
            a.Kr)(( () => {
                switch (yi) {
                case Mt.Edit:
                    return di;
                case Mt.Schedule:
                    return hr;
                default:
                    return Ri
                }
            }
            ), [yi, di])
              , br = Le && "commands" === Jt?.type && !te && !1 !== Dt && !Io
              , wr = vn && gn?.emoticon;
            return a.Ay.createElement("div", {
                className: cr
            }, aa && Ba && Z && a.Ay.createElement(dt, {
                isOpen: c !== ct.I.None,
                withQuick: c === ct.I.QuickFile || ta === ct.I.QuickFile,
                onHide: Y,
                onFileSelect: no,
                editingMessage: te
            }), nr && !_a && a.Ay.createElement(wt.A, {
                topReactions: nn,
                allAvailableReactions: tn,
                onToggleReaction: dr,
                isPrivate: !0,
                isReady: Z,
                canBuyPremium: an,
                isCurrentUserPremium: xe,
                isInSavedMessages: Be,
                isInStoryViewer: oa,
                canPlayAnimatedEmojis: on,
                onShowMore: ur,
                className: ar
            }), a.Ay.createElement(Ke, {
                chatId: ne,
                threadId: ae,
                canShowCustomSendMenu: gi,
                attachments: Ma,
                getHtml: Wn,
                isReady: Z,
                shouldSuggestCompression: Ya,
                shouldForceCompression: Xa,
                shouldForceAsFile: eo,
                isForCurrentMessageList: Pe,
                isForMessage: aa,
                shouldSchedule: d,
                forceDarkTheme: oa,
                onCaptionUpdate: ao,
                onSendSilent: fr,
                onSend: Pi,
                onSendScheduled: gr,
                onFileAppend: to,
                onClear: oo,
                onAttachmentsUpdate: io,
                onCustomEmojiSelect: Di,
                onRemoveSymbol: qi,
                onEmojiSelect: Vi,
                editingMessage: te
            }), a.Ay.createElement(pt, {
                isOpen: Ve.isOpen,
                isQuiz: Ve.isQuiz,
                shouldBeAnonymous: De,
                onClear: Mn,
                onSend: $i
            }), a.Ay.createElement(yt, {
                isOpen: yo,
                onClose: fo,
                chatId: ne,
                selectedSendAsId: jt,
                sendAsPeerIds: ia,
                isCurrentUserPremium: xe
            }), a.Ay.createElement(At, {
                isOpen: Vo,
                filteredUsers: Go,
                onInsertUserName: qo,
                onClose: Ho
            }), a.Ay.createElement(tt, {
                isOpen: ii,
                chatId: ne,
                withUsername: Boolean(Ea),
                botCommands: si,
                quickReplies: li,
                getHtml: Wn,
                self: Et,
                quickReplyMessages: dn,
                onClick: zi,
                onClose: ri
            }), a.Ay.createElement("div", {
                className: (0,
                m.A)("composer-wrapper", oa && "with-story-tweaks", _a && "is-need-premium")
            }, !_a && a.Ay.createElement("svg", {
                className: "svg-appendix",
                width: "9",
                height: "20"
            }, a.Ay.createElement("defs", null, a.Ay.createElement("filter", {
                x: "-50%",
                y: "-14.7%",
                width: "200%",
                height: "141.2%",
                filterUnits: "objectBoundingBox",
                id: "composerAppendix"
            }, a.Ay.createElement("feOffset", {
                dy: "1",
                in: "SourceAlpha",
                result: "shadowOffsetOuter1"
            }), a.Ay.createElement("feGaussianBlur", {
                stdDeviation: "1",
                in: "shadowOffsetOuter1",
                result: "shadowBlurOuter1"
            }), a.Ay.createElement("feColorMatrix", {
                values: "0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0",
                in: "shadowBlurOuter1"
            }))), a.Ay.createElement("g", {
                fill: "none",
                "fill-rule": "evenodd"
            }, a.Ay.createElement("path", {
                d: "M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z",
                fill: "#000",
                filter: "url(#composerAppendix)"
            }), a.Ay.createElement("path", {
                d: "M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z",
                fill: "#FFF",
                className: "corner"
            }))), aa && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(ut, {
                isOpen: Wo,
                botId: Zo,
                isGallery: Qo,
                inlineBotResults: ei,
                switchPm: Yo,
                switchWebview: Xo,
                loadMore: ai,
                isSavedMessages: Be,
                canSendGifs: La,
                isCurrentUserPremium: xe,
                onSelectResult: ji,
                onClose: ti
            }), a.Ay.createElement(rt, {
                onClear: Ni,
                shouldForceShowEditing: Boolean(ui && te),
                chatId: ne,
                threadId: ae,
                messageListType: re
            }), a.Ay.createElement(Ct, {
                chatId: ne,
                threadId: ae,
                getHtml: Wn,
                isDisabled: !Fa || Ta,
                isEditing: Boolean(te)
            })), a.Ay.createElement("div", {
                className: (0,
                m.A)("message-input-wrapper", (0,
                k.y)(Et))
            }, aa && a.Ay.createElement(a.Ay.Fragment, null, Wi && a.Ay.createElement(et, {
                isOpen: Zi,
                text: Jt.text,
                isDisabled: Boolean(Io),
                onClick: Li
            }), br && a.Ay.createElement(qe.A, {
                className: (0,
                m.A)("bot-commands", co && "activated"),
                round: !0,
                disabled: void 0 === Dt,
                color: "translucent",
                onActivate: Bi,
                ariaLabel: "Open bot command keyboard"
            }, a.Ay.createElement("i", {
                className: "icon icon-bot-commands-filled"
            })), ra && (Ut || Kt) && a.Ay.createElement(Ye.A, {
                round: !0,
                color: "translucent",
                onClick: yo ? fo : Ji,
                ariaLabel: Hn("SendMessageAsTitle"),
                className: (0,
                m.A)("send-as-button", Na.current && "appear-animation")
            }, a.Ay.createElement(It.A, {
                peer: Ut || Kt,
                size: "tiny"
            }))), (!Ha || La || Ra) && !_a && a.Ay.createElement(ft.A, {
                chatId: ne,
                threadId: ae,
                isMobile: Q,
                isReady: Z,
                isSymbolMenuOpen: Ao,
                openSymbolMenu: ho,
                closeSymbolMenu: po,
                canSendStickers: Ra,
                canSendGifs: La,
                isMessageComposer: aa,
                onGifSelect: Ui,
                onStickerSelect: Ki,
                onCustomEmojiSelect: Fi,
                onRemoveSymbol: Hi,
                onEmojiSelect: Ga,
                closeBotCommandMenu: uo,
                closeSendAsMenu: fo,
                isSymbolMenuForced: sa,
                canSendPlainText: !Ha,
                inputCssSelector: Qt,
                idPrefix: t,
                forceDarkTheme: oa
            }), a.Ay.createElement(ht.A, {
                ref: qn,
                id: Xt,
                editableInputId: Yt,
                customEmojiPrefix: t,
                isStoryInput: oa,
                chatId: ne,
                canSendPlainText: !Ha,
                threadId: ae,
                isReady: Z,
                isActive: !Ta,
                getHtml: Wn,
                placeholder: Io && na <= 600 ? "" : Ha ? Hn(oa ? "StoryRepliesLocked" : "Chat.PlaceholderTextNotAllowed") : Ge || Qe || Hn(tr || "Message"),
                timedPlaceholderDate: Yi,
                timedPlaceholderLangKey: Qi,
                forcedPlaceholder: ni,
                canAutoFocus: Z && Pe && !Ta && aa,
                noFocusInterception: Ta,
                shouldSuppressFocus: Q && Ao,
                shouldSuppressTextFormatter: Oo || Vo || Wo,
                onUpdate: Zn,
                onSend: Cr,
                onSuppressedFocus: po,
                onFocus: ua,
                onBlur: Aa,
                isNeedPremium: _a
            }), aa && a.Ay.createElement(a.Ay.Fragment, null, Ft && Boolean(Zo) && a.Ay.createElement(St.A, {
                color: "gray"
            }), nt && a.Ay.createElement(Ye.A, {
                round: !0,
                faded: !0,
                className: "scheduled-button",
                color: "translucent",
                onClick: Gi,
                ariaLabel: "Open scheduled messages"
            }, a.Ay.createElement("i", {
                className: "icon icon-schedule"
            })), Boolean(He) && !Io && !te && a.Ay.createElement(qe.A, {
                className: ro ? "activated" : "",
                round: !0,
                color: "translucent",
                onActivate: so,
                ariaLabel: "Open bot command keyboard"
            }, a.Ay.createElement("i", {
                className: "icon icon-bot-command"
            }))), Io && Boolean(No) && a.Ay.createElement("span", {
                className: "recording-state"
            }, (0,
            u.JW)(No - ko.current)), !_a && a.Ay.createElement(We, {
                chatId: ne,
                threadId: ae,
                editingMessage: te,
                hasReplaceableMedia: ga,
                isButtonVisible: !Io,
                canAttachMedia: Ba,
                canAttachPolls: Oa,
                canSendPhotos: za,
                canSendVideos: ja,
                canSendDocuments: $a,
                canSendAudios: Ka,
                onFileSelect: no,
                onPollCreate: Nn,
                isScheduled: d,
                attachBots: aa ? Vt : void 0,
                peerType: Ht,
                shouldCollectDebugLogs: rn,
                theme: Gt,
                onMenuOpen: pa,
                onMenuClose: ya
            }), aa && Boolean(He) && a.Ay.createElement(Xe, {
                messageId: He,
                isOpen: ro,
                onClose: lo
            }), aa && Dt && a.Ay.createElement(Ze, {
                isOpen: co,
                botCommands: Dt,
                onClose: uo
            }), a.Ay.createElement(st.A, {
                key: `custom-emoji-tooltip-${Yt}`,
                chatId: ne,
                isOpen: jo,
                onCustomEmojiSelect: $o,
                addRecentCustomEmoji: On,
                onClose: zo
            }), a.Ay.createElement(gt, {
                key: `sticker-tooltip-${Yt}`,
                chatId: ne,
                threadId: ae,
                isOpen: _o,
                onStickerSelect: Ki,
                onClose: Jo
            }), a.Ay.createElement(mt.A, {
                key: `emoji-tooltip-${Yt}`,
                isOpen: Oo,
                emojis: Do,
                customEmojis: Uo,
                addRecentEmoji: Pn,
                addRecentCustomEmoji: On,
                onEmojiSelect: Ko,
                onCustomEmojiSelect: Ko,
                onClose: Fo
            }))), cn && Io && a.Ay.createElement(Ye.A, {
                className: (0,
                m.A)("view-once", To && "active"),
                round: !0,
                color: "secondary",
                ariaLabel: Hn("Chat.PlayOnceVoiceMessageTooltip"),
                onClick: xo
            }, a.Ay.createElement(Je.A, {
                name: "view-once"
            }), a.Ay.createElement(Je.A, {
                name: "one-filled"
            })), Io && a.Ay.createElement(Ye.A, {
                round: !0,
                color: "danger",
                className: "cancel",
                onClick: wo,
                ariaLabel: "Cancel voice recording"
            }, a.Ay.createElement("i", {
                className: "icon icon-delete"
            })), oa && !Io && a.Ay.createElement(Ye.A, {
                round: !0,
                className: "story-reaction-button",
                color: "secondary",
                onClick: Ar,
                onContextMenu: wi,
                onMouseDown: Si,
                ariaLabel: Hn("AccDescrLike"),
                ref: Gn
            }, sn && a.Ay.createElement(Nt.A, {
                key: "documentId"in sn ? sn.documentId : sn.emoticon,
                containerId: (0,
                l.$_)(ne, oe),
                reaction: sn,
                withEffectOnly: ba
            }), (!sn || ba) && a.Ay.createElement("i", {
                className: (0,
                m.A)("icon", "icon-heart", ba && "story-reaction-heart"),
                "aria-hidden": !0
            })), a.Ay.createElement(Ye.A, {
                ref: Mo,
                round: !0,
                color: "secondary",
                className: (0,
                m.A)(yi, "main-button", !Z && "not-ready", Io && "recording"),
                disabled: or,
                allowDisabledClick: !0,
                noFastClick: !0,
                ariaLabel: Hn(lr),
                onClick: ir,
                onContextMenu: yi === Mt.Send && gi ? vi : void 0
            }, a.Ay.createElement("i", {
                className: "icon icon-send"
            }), a.Ay.createElement("i", {
                className: "icon icon-microphone-alt"
            }), An && a.Ay.createElement("i", {
                className: "icon icon-forward"
            }), aa && a.Ay.createElement("i", {
                className: "icon icon-schedule"
            }), aa && a.Ay.createElement("i", {
                className: "icon icon-check"
            })), wr && a.Ay.createElement("span", {
                className: "effect-icon",
                onClick: vr
            }, (0,
            T.A)(wr)), gn && En && a.Ay.createElement(bt.A, {
                shouldPlay: Cn,
                effect: gn,
                onStop: Er
            }), gi && a.Ay.createElement(lt.A, {
                isOpen: fi,
                canSchedule: aa && !To,
                canScheduleUntilOnline: w && !To,
                onSendSilent: Be ? void 0 : pr,
                onSendSchedule: d ? void 0 : hr,
                onSendWhenOnline: yr,
                onRemoveEffect: vr,
                onClose: Ei,
                onCloseAnimationEnd: Ci,
                isSavedMessages: Be,
                chatId: ne,
                withEffects: vn,
                hasCurrentEffect: Boolean(gn),
                effectReactions: fn,
                allAvailableReactions: tn,
                onToggleReaction: mr,
                isCurrentUserPremium: xe,
                isInSavedMessages: Be,
                isInStoryViewer: oa,
                canPlayAnimatedEmojis: on
            }), Ia)
        }
        )))
    }
    ,
    54314: (e, t, n) => {
        n.d(t, {
            A: () => u
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(29807)
          , s = n(4961)
          , l = n(59030)
          , c = n(64493)
          , d = n(8410)
          , m = n(21849);
        const u = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chat: n, isSavedDialog: a} = t;
            const o = (0,
            i.L8)(n.id)
              , s = (0,
            r.nZ4)(e, n.id)
              , l = o && (0,
            r.mBe)(e, (0,
            i.e7)(n))
              , c = l && (0,
            i.tv)(l) && !n.isSupport
              , d = o && !s && !c && !a
              , m = o ? (0,
            i.u0)((0,
            r.mBe)(e, (0,
            i.e7)(n))) : void 0;
            return {
                isPrivateChat: o,
                isChatWithSelf: s,
                isBot: c,
                isChannel: (0,
                i.WX)(n),
                isBasicGroup: (0,
                i.yn)(n),
                isSuperGroup: (0,
                i.Vs)(n),
                currentUserId: e.currentUserId,
                canDeleteForAll: d,
                contactName: m
            }
        }
        ))((e => {
            let {isOpen: t, chat: n, isSavedDialog: r, isChannel: u, isPrivateChat: A, isChatWithSelf: h, isBot: p, isBasicGroup: y, isSuperGroup: g, currentUserId: f, canDeleteForAll: v, contactName: E, onClose: C, onCloseAnimationEnd: b} = e;
            const {leaveChannel: w, deleteHistory: S, deleteSavedHistory: I, deleteChannel: N, deleteChatUser: M, blockUser: k} = (0,
            o.ko)()
              , T = (0,
            l.A)()
              , P = (0,
            i.Js)(T, n)
              , x = (0,
            a.hb)(( () => {
                S({
                    chatId: n.id,
                    shouldDeleteForAll: !0
                }),
                C()
            }
            ), [n.id, C])
              , R = (0,
            a.hb)(( () => {
                S({
                    chatId: n.id,
                    shouldDeleteForAll: !0
                }),
                k({
                    userId: n.id
                }),
                C()
            }
            ), [n.id, C])
              , L = (0,
            a.hb)(( () => {
                r ? I({
                    chatId: n.id
                }) : A ? S({
                    chatId: n.id,
                    shouldDeleteForAll: !1
                }) : y ? (M({
                    chatId: n.id,
                    userId: f
                }),
                S({
                    chatId: n.id,
                    shouldDeleteForAll: !1
                })) : !u && !g || n.isCreator ? (u || g) && n.isCreator && N({
                    chatId: n.id
                }) : w({
                    chatId: n.id
                }),
                C()
            }
            ), [A, y, u, g, f, n.isCreator, n.id, r, C])
              , B = (0,
            a.hb)(( () => {
                u || g ? (w({
                    chatId: n.id
                }),
                C()) : L()
            }
            ), [n.id, L, u, g, w, C]);
            return a.Ay.createElement(d.A, {
                isOpen: t,
                className: "DeleteChatModal",
                header: a.Ay.createElement("div", {
                    className: "modal-header",
                    dir: T.isRtl ? "rtl" : void 0
                }, a.Ay.createElement(m.A, {
                    size: "tiny",
                    peer: n,
                    isSavedMessages: h
                }), a.Ay.createElement("h3", {
                    className: "modal-title"
                }, T(r ? h ? "ClearHistoryMyNotesTitle" : "ClearHistoryTitleSingle2" : u && !n.isCreator ? "LeaveChannel" : u && n.isCreator ? "ChannelDelete" : y || g ? "Group.LeaveGroup" : "DeleteChatUser"))),
                onClose: C,
                onCloseAnimationEnd: b
            }, r ? a.Ay.createElement("p", null, (0,
            s.A)(h ? T("ClearHistoryMyNotesMessage") : T("ClearHistoryMessageSingle", P), ["simple_markdown", "emoji"])) : u && n.isCreator ? a.Ay.createElement("p", null, (0,
            s.A)(T("ChatList.DeleteAndLeaveGroupConfirmation", P), ["simple_markdown", "emoji"])) : u && !n.isCreator || y || g ? a.Ay.createElement("p", null, (0,
            s.A)(T("ChannelLeaveAlertWithName", P), ["simple_markdown", "emoji"])) : a.Ay.createElement("p", null, (0,
            s.A)(T("ChatList.DeleteChatConfirmation", E), ["simple_markdown", "emoji"])), a.Ay.createElement("div", {
                className: "dialog-buttons-column"
            }, p && !r && a.Ay.createElement(c.A, {
                color: "danger",
                className: "confirm-dialog-button",
                isText: !0,
                onClick: R
            }, T("DeleteAndStop")), v && a.Ay.createElement(c.A, {
                color: "danger",
                className: "confirm-dialog-button",
                isText: !0,
                onClick: x
            }, E ? (0,
            s.A)(T("ChatList.DeleteForEveryone", E)) : T("DeleteForAll")), !A && n.isCreator && !r && a.Ay.createElement(c.A, {
                color: "danger",
                className: "confirm-dialog-button",
                isText: !0,
                onClick: L
            }, T("DeleteForAll")), a.Ay.createElement(c.A, {
                color: "danger",
                className: "confirm-dialog-button",
                isText: !0,
                onClick: A || r ? L : B
            }, T(r ? "Delete" : u && !n.isCreator ? "LeaveChannel" : u && n.isCreator ? "Chat.Input.Delete" : y || g ? "Group.LeaveGroup" : v ? "ChatList.DeleteForCurrentUser" : "Delete")), a.Ay.createElement(c.A, {
                className: "confirm-dialog-button",
                isText: !0,
                onClick: C
            }, T("Cancel"))))
        }
        )))
    }
    ,
    44589: (e, t, n) => {
        n.d(t, {
            A: () => g
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(91525)
          , s = n(37661)
          , l = n(5912)
          , c = n(17712)
          , d = n(62587)
          , m = n(69419)
          , u = n(59030)
          , A = n(19806)
          , h = n(94189)
          , p = n(52988);
        const y = new Set(["svg", "svgz"])
          , g = (0,
        a.ph)((e => {
            let {document: t, observeIntersection: n, smaller: g, canAutoLoad: f, autoLoadFileMaxSizeMb: v, uploadProgress: E, withDate: C, datetime: b, className: w, sender: S, isSelected: I, isSelectable: N, shouldWarnAboutSvg: M, isDownloading: k, message: T, onCancelUpload: P, onMediaClick: x, onDateClick: R} = e;
            const {cancelMediaDownload: L, downloadMedia: B, setSettingOption: O} = (0,
            o.ko)()
              , F = (0,
            a.li)(null)
              , D = (0,
            u.A)()
              , [U,K,j] = (0,
            s.A)()
              , [z,$] = (0,
            a.J0)(!1)
              , {fileName: _, size: J, timestamp: V} = t
              , H = (0,
            r.rK)(t) || ""
              , q = (0,
            l.Vz)(F, n)
              , [G,W] = (0,
            s.A)();
            (0,
            a.vJ)(( () => {
                q && W()
            }
            ), [q, W]);
            const [Z,Q] = (0,
            a.J0)(f && (!v || J <= 1048576 * v))
              , Y = Boolean(k || Z && G)
              , X = (0,
            i.mr)(t, "download")
              , {loadProgress: ee, mediaData: te} = (0,
            m.A)(X, !Y, (0,
            i.Cz)(t, "download"), void 0, !0)
              , ne = Boolean(te)
              , {isUploading: ae, isTransferring: oe, transferProgress: ie} = (0,
            i.LK)(E || ee, Y && !ne, void 0 !== E)
              , re = (0,
            r.ON)(t)
              , se = re ? (0,
            i.VD)(t) : void 0
              , le = re ? t.previewBlobUrl : void 0
              , ce = (0,
            d.A)((0,
            i.mr)(t, "pictogram"), !q)
              , de = x && t.innerMediaType
              , me = (0,
            c.A)(( () => {
                B({
                    media: t,
                    originMessage: T
                })
            }
            ))
              , ue = (0,
            c.A)(( () => {
                ae ? P && P() : k ? L({
                    media: t
                }) : oe ? Q(!1) : de ? x() : y.has(H) && M ? K() : me()
            }
            ))
              , Ae = (0,
            c.A)(( () => {
                O({
                    shouldWarnAboutSvg: !z
                }),
                j(),
                me()
            }
            ))
              , he = (0,
            c.A)(( () => {
                R?.(T)
            }
            ));
            return a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(p.A, {
                ref: F,
                name: _,
                extension: H,
                size: J,
                timestamp: C ? b || V : void 0,
                thumbnailDataUri: se,
                previewData: le || ce,
                smaller: g,
                isTransferring: oe,
                isUploading: ae,
                transferProgress: ie,
                className: w,
                sender: S,
                isSelectable: N,
                isSelected: I,
                actionIcon: de ? (0,
                i.hr)(t) ? "play" : "eye" : "download",
                onClick: ue,
                onDateClick: R ? he : void 0
            }), a.Ay.createElement(h.A, {
                isOpen: U,
                onClose: j,
                confirmHandler: Ae
            }, D("lng_launch_svg_warning"), a.Ay.createElement(A.A, {
                className: "dialog-checkbox",
                checked: z,
                label: D("lng_launch_exe_dont_ask"),
                onCheck: $
            })))
        }
        ))
    }
    ,
    80999: (e, t, n) => {
        n.d(t, {
            A: () => s
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(4961)
          , r = n(59030);
        const s = e => {
            let {content: t, className: n} = e;
            const s = (0,
            r.A)();
            return a.Ay.createElement("span", {
                className: (0,
                o.A)("DotAnimation", n),
                dir: s.isRtl ? "rtl" : "auto"
            }, (0,
            i.A)(t), a.Ay.createElement("span", {
                className: "ellipsis"
            }))
        }
    }
    ,
    52988: (e, t, n) => {
        n.d(t, {
            A: () => g
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(17663)
          , r = n(82393)
          , s = n(91525)
          , l = n(76023)
          , c = n(4961)
          , d = n(43874)
          , m = n(45470)
          , u = n(83057)
          , A = n(59030)
          , h = n(50680)
          , p = n(96530)
          , y = n(35913);
        const g = (0,
        a.ph)((e => {
            let {ref: t, name: n, size: g, extension: f="", timestamp: v, sender: E, thumbnailDataUri: C, previewData: b, className: w, smaller: S, isTransferring: I, isUploading: N, isSelectable: M, isSelected: k, transferProgress: T, actionIcon: P, onClick: x, onDateClick: R} = e;
            const L = (0,
            A.A)();
            let B = (0,
            a.li)(null);
            t && (B = t);
            const {isMobile: O} = (0,
            d.Ay)()
              , [F] = (0,
            a.J0)(!b)
              , D = Boolean(b)
              , U = (0,
            m.A)(C, D, O && !r.QH)
              , K = (0,
            u.A)(!D)
              , {shouldRender: j, transitionClassNames: z} = (0,
            h.A)(I, void 0, !0)
              , $ = (0,
            s.fE)(f)
              , _ = (0,
            s.zV)(g)
              , J = (0,
            a.Kr)(( () => I && T ? `${(0,
            s.zV)(g * T)} / ${_}` : _), [I, g, _, T])
              , {width: V, height: H} = (0,
            l.tP)(S)
              , q = (0,
            o.A)("File", w, S && "smaller", x && !N && "interactive", k && "file-is-selected");
            return a.Ay.createElement("div", {
                ref: B,
                className: q,
                dir: L.isRtl ? "rtl" : void 0
            }, M && a.Ay.createElement("div", {
                className: "message-select-control"
            }, k && a.Ay.createElement("i", {
                className: "icon icon-select"
            })), a.Ay.createElement("div", {
                className: "file-icon-container",
                onClick: N ? void 0 : x
            }, C || b ? a.Ay.createElement("div", {
                className: "file-preview media-inner"
            }, a.Ay.createElement("img", {
                src: b,
                className: "full-media",
                width: V,
                height: H,
                draggable: !1,
                alt: ""
            }), F && a.Ay.createElement("canvas", {
                ref: U,
                className: (0,
                o.A)("thumbnail", K)
            })) : a.Ay.createElement("div", {
                className: `file-icon ${$}`
            }, f.length <= 4 && a.Ay.createElement("span", {
                className: "file-ext",
                dir: "auto"
            }, f)), j && a.Ay.createElement("div", {
                className: (0,
                o.A)("file-progress", $, z)
            }, a.Ay.createElement(y.A, {
                progress: T,
                size: S ? "s" : "m",
                onClick: N ? x : void 0
            })), x && a.Ay.createElement("i", {
                className: (0,
                o.A)("action-icon", "icon", P ? `icon-${P}` : "icon-download", j && "hidden")
            })), a.Ay.createElement("div", {
                className: "file-info"
            }, a.Ay.createElement("div", {
                className: "file-title",
                dir: "auto",
                title: n
            }, (0,
            c.A)(n)), a.Ay.createElement("div", {
                className: "file-subtitle",
                dir: "auto"
            }, a.Ay.createElement("span", null, J), E && a.Ay.createElement("span", {
                className: "file-sender"
            }, (0,
            c.A)(E)), !E && Boolean(v) && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                className: "bullet"
            }), a.Ay.createElement(p.A, {
                onClick: R
            }, (0,
            i.fS)(L, 1e3 * v, !0))))), E && Boolean(v) && a.Ay.createElement(p.A, {
                onClick: R
            }, (0,
            i.be)(L, 1e3 * v)))
        }
        ))
    }
    ,
    51083: (e, t, n) => {
        n.d(t, {
            A: () => C
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(89925)
          , r = n(90709)
          , s = n(29807)
          , l = n(87357)
          , c = n(76023)
          , d = n(4961)
          , m = n(17712)
          , u = n(59030)
          , A = n(41036)
          , h = n(21849)
          , p = n(80999)
          , y = n(34431)
          , g = n(18276)
          , f = n(38102)
          , v = n(80477);
        const E = 2.5 * c.$
          , C = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n, threadId: a} = t;
            const o = (0,
            s.hds)(e, n)
              , i = a ? (0,
            s.Vw0)(e, n, a) : void 0
              , r = o ? (0,
            s.ToO)(e, o) : void 0
              , l = Boolean((0,
            s.zeq)(e, n))
              , c = a ? (0,
            s.S0q)(e, n, a) : void 0;
            return {
                chat: o,
                threadInfo: i,
                onlineCount: r,
                topic: c,
                areMessagesLoaded: l,
                messagesCount: c && (0,
                s.QbG)(e, n, a),
                self: (0,
                s.mBe)(e, e.currentUserId)
            }
        }
        ))((e => {
            let {typingStatus: t, className: n, statusIcon: s, avatarSize: c="medium", noAvatar: C, status: b, withDots: w, withMediaViewer: S, withUsername: I, withFullInfo: N, withUpdatingStatus: M, withChatType: k, threadInfo: T, noRtl: P, chat: x, onlineCount: R, areMessagesLoaded: L, topic: B, messagesCount: O, noStatusOrTyping: F, withStory: D, storyViewerOrigin: U, noEmojiStatus: K, emojiStatusSize: j, isSavedDialog: z, self: $, onClick: _, onEmojiStatusClick: J} = e;
            const {loadFullChat: V, openMediaViewer: H, loadMoreProfilePhotos: q} = (0,
            o.ko)()
              , G = (0,
            u.A)()
              , W = x && (0,
            r.Vs)(x)
              , Z = Boolean(x?.isForum && T && B)
              , {id: Q, isMin: Y, isRestricted: X} = x || {};
            (0,
            a.vJ)(( () => {
                Q && !Y && (N && V({
                    chatId: Q
                }),
                S && q({
                    peerId: Q,
                    isPreload: !0
                }))
            }
            ), [Q, Y, N, W, S]);
            const ee = (0,
            m.A)(( (e, t) => {
                x && t && (e.stopPropagation(),
                H({
                    isAvatarView: !0,
                    chatId: x.id,
                    mediaIndex: 0,
                    origin: "jumbo" === c ? i.TQ.ProfileAvatar : i.TQ.MiddleHeaderAvatar
                }))
            }
            ))
              , te = (0,
            a.Kr)(( () => x && I && (0,
            r.Kl)(x)), [x, I]);
            if (x)
                return a.Ay.createElement("div", {
                    className: (0,
                    l.A)("ChatInfo", n),
                    dir: !P && G.isRtl ? "rtl" : void 0,
                    onClick: _
                }, !C && !Z && a.Ay.createElement(a.Ay.Fragment, null, z && $ && a.Ay.createElement(h.A, {
                    key: "saved-messages",
                    size: c,
                    peer: $,
                    isSavedMessages: !0,
                    className: "saved-dialog-avatar"
                }), a.Ay.createElement(h.A, {
                    key: x.id,
                    className: (0,
                    l.A)(z && "overlay-avatar"),
                    size: c,
                    peer: x,
                    withStory: D,
                    storyViewerOrigin: U,
                    storyViewerMode: "single-peer",
                    isSavedDialog: z,
                    onClick: S ? ee : void 0
                })), Z && a.Ay.createElement(f.A, {
                    topic: B,
                    className: "topic-header-icon",
                    size: E
                }), a.Ay.createElement("div", {
                    className: "info"
                }, B ? a.Ay.createElement("h3", {
                    dir: "auto",
                    className: "fullName"
                }, (0,
                d.A)(B.title)) : a.Ay.createElement(y.A, {
                    peer: x,
                    emojiStatusSize: j,
                    withEmojiStatus: !K,
                    isSavedDialog: z,
                    onEmojiStatusClick: J
                }), !F && function() {
                    if (b)
                        return w ? a.Ay.createElement(p.A, {
                            className: "status",
                            content: b
                        }) : a.Ay.createElement("span", {
                            className: "status",
                            dir: "auto"
                        }, s && a.Ay.createElement(g.A, {
                            className: "status-icon",
                            name: s
                        }), (0,
                        d.A)(b));
                    if (M && !L && !X)
                        return a.Ay.createElement(p.A, {
                            className: "status",
                            content: G("Updating")
                        });
                    if (!x)
                        return;
                    if (t)
                        return a.Ay.createElement(v.A, {
                            typingStatus: t
                        });
                    if (Z)
                        return a.Ay.createElement("span", {
                            className: "status",
                            dir: "auto"
                        }, a.Ay.createElement(A.Ay, {
                            name: "fade",
                            shouldRestoreHeight: !0,
                            activeKey: void 0 !== O ? 1 : 2,
                            className: "message-count-transition"
                        }, void 0 !== O && G("messages", O, "i")));
                    if (k)
                        return a.Ay.createElement("span", {
                            className: "status",
                            dir: "auto"
                        }, G((0,
                        r.Gg)(x)));
                    const e = (0,
                    r.sT)(G, x)
                      , n = R ? `, ${G("OnlineCount", R, "i")}` : void 0;
                    return a.Ay.createElement("span", {
                        className: "status"
                    }, te && a.Ay.createElement("span", {
                        className: "handle withStatus"
                    }, te), a.Ay.createElement("span", {
                        className: "group-status"
                    }, e), n && a.Ay.createElement("span", {
                        className: "online-status"
                    }, n))
                }()))
        }
        )))
    }
    ,
    81642: (e, t, n) => {
        n.d(t, {
            A: () => l
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(17663)
          , r = n(59030)
          , s = n(45);
        const l = (0,
        a.ph)((e => {
            let {className: t, message: n, outgoingStatus: l, draftDate: c} = e;
            const d = (0,
            r.A)()
              , m = c && c > n.date;
            return a.Ay.createElement("div", {
                className: (0,
                o.A)("LastMessageMeta", t)
            }, l && !m && a.Ay.createElement(s.A, {
                status: l
            }), a.Ay.createElement("span", {
                className: "time"
            }, (0,
            i.be)(d, 1e3 * (m ? c : n.date))))
        }
        ))
    }
    ,
    47058: (e, t, n) => {
        n.d(t, {
            A: () => h
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(87357)
          , r = n(85982)
          , s = n(43874)
          , l = n(17712)
          , c = n(59030)
          , d = n(64493)
          , m = n(22699)
          , u = n(24433)
          , A = n(18276);
        const h = (0,
        a.ph)((e => {
            let {title: t, link: n, isDisabled: h, className: p, withShare: y, onRevoke: g} = e;
            const f = (0,
            c.A)()
              , {showNotification: v, openChatWithDraft: E} = (0,
            o.ko)()
              , {isMobile: C} = (0,
            s.Ay)()
              , b = !g
              , w = (0,
            l.A)(( () => {
                (0,
                r.eM)(n),
                v({
                    message: f("LinkCopied")
                })
            }
            ))
              , S = (0,
            l.A)(( () => {
                h || w()
            }
            ))
              , I = (0,
            l.A)(( () => {
                E({
                    text: {
                        text: n
                    }
                })
            }
            ))
              , N = (0,
            a.Kr)(( () => e => {
                let {onTrigger: t, isOpen: n} = e;
                return a.Ay.createElement(d.A, {
                    round: !0,
                    ripple: !C,
                    size: "smaller",
                    color: "translucent",
                    className: n ? "active" : "",
                    onClick: t,
                    ariaLabel: f("AccDescrOpenMenu2")
                }, a.Ay.createElement("i", {
                    className: "icon icon-more"
                }))
            }
            ), [C, f]);
            return a.Ay.createElement("div", {
                className: p
            }, a.Ay.createElement("p", {
                className: "vCMpiQTJ"
            }, f(t || "InviteLink.InviteLink")), a.Ay.createElement("div", {
                className: "xNjJHI7j"
            }, a.Ay.createElement("input", {
                className: (0,
                i.A)("form-control", "Ag6k_p7b"),
                value: n,
                readOnly: !0,
                onClick: S
            }), b ? a.Ay.createElement(d.A, {
                color: "translucent",
                className: "obuPXobw",
                size: "smaller",
                round: !0,
                disabled: h,
                onClick: S
            }, a.Ay.createElement(A.A, {
                name: "copy"
            })) : a.Ay.createElement(m.A, {
                className: "p7t3macG",
                trigger: N,
                positionX: "right"
            }, a.Ay.createElement(u.A, {
                icon: "copy",
                onClick: S,
                disabled: h
            }, f("Copy")), g && a.Ay.createElement(u.A, {
                icon: "delete",
                onClick: g,
                destructive: !0
            }, f("RevokeButton")))), y && a.Ay.createElement(d.A, {
                size: "smaller",
                disabled: h,
                onClick: I
            }, f("FolderLinkScreen.LinkActionShare")))
        }
        ))
    }
    ,
    81524: (e, t, n) => {
        n.d(t, {
            A: () => h
        });
        var a = n(84051)
          , o = n(90709)
          , i = n(87357)
          , r = n(17663)
          , s = n(83868)
          , l = n(37661)
          , c = n(5912)
          , d = n(17712)
          , m = n(62587)
          , u = n(83057)
          , A = n(27860);
        const h = (0,
        a.ph)((e => {
            let {message: t, idPrefix: n="shared-media", isProtected: h, observeIntersection: p, onClick: y} = e;
            const g = (0,
            a.li)(null)
              , f = (0,
            c.Vz)(g, p)
              , v = (0,
            o.CI)(t)
              , E = (0,
            m.A)((0,
            o.EO)(t, "pictogram"), !f)
              , C = (0,
            u.A)(E)
              , b = (0,
            o.zX)(t)
              , w = (0,
            o.y2)(t)
              , [S,,I] = (0,
            l.A)(w)
              , N = (0,
            d.A)(( () => {
                I(),
                y(t.id, t.chatId)
            }
            ));
            return a.Ay.createElement("div", {
                ref: g,
                id: `${n}${(0,
                o.GZ)(t.id)}`,
                className: "Media scroll-item",
                onClick: y ? N : void 0
            }, a.Ay.createElement("img", {
                src: v,
                className: "media-miniature",
                alt: "",
                draggable: !h,
                decoding: "async",
                onContextMenu: h ? s.A : void 0
            }), a.Ay.createElement("img", {
                src: E,
                className: (0,
                i.A)("full-media", "media-miniature", C),
                alt: "",
                draggable: !h,
                decoding: "async",
                onContextMenu: h ? s.A : void 0
            }), w && a.Ay.createElement(A.A, {
                thumbDataUri: E || v,
                isVisible: S,
                className: "media-spoiler"
            }), b && a.Ay.createElement("span", {
                className: "video-duration"
            }, b.isGif ? "GIF" : (0,
            r.QO)(b.duration)), h && a.Ay.createElement("span", {
                className: "protector"
            }))
        }
        ))
    }
    ,
    27860: (e, t, n) => {
        n.d(t, {
            A: () => c
        });
        var a = n(84051)
          , o = n(66644)
          , i = n(87357)
          , r = n(45470)
          , s = n(17712)
          , l = n(50680);
        const c = (0,
        a.ph)((e => {
            let {isVisible: t, withAnimation: n, thumbDataUri: c, className: d, width: m, height: u} = e;
            const A = (0,
            a.li)(null)
              , {shouldRender: h, transitionClassNames: p} = (0,
            l.A)(t, void 0, !0, !n && void 0, void 0, 500)
              , y = (0,
            r.A)(c, !h, void 0, 25, m, u)
              , g = (0,
            s.A)((e => {
                if (!A.current)
                    return;
                const t = A.current
                  , n = e.currentTarget.getBoundingClientRect()
                  , a = e.clientX - n.left
                  , i = e.clientY - n.top
                  , r = a - n.width / 2
                  , s = i - n.height / 2;
                (0,
                o.RK)(( () => {
                    t.setAttribute("style", `--click-shift-x: ${r}px; --click-shift-y: ${s}px`)
                }
                ))
            }
            ));
            if (h)
                return a.Ay.createElement("div", {
                    className: (0,
                    i.A)("qF2WgYVg", p, d, n && "pNM3cgkY"),
                    ref: A,
                    onClick: n ? g : void 0
                }, a.Ay.createElement("canvas", {
                    ref: y,
                    className: "eULqS2yR",
                    width: m,
                    height: u
                }), a.Ay.createElement("div", {
                    className: "XBor45hE"
                }))
        }
        ))
    }
    ,
    45: (e, t, n) => {
        n.d(t, {
            A: () => s
        });
        var a = n(84051)
          , o = n(41036)
          , i = n(18276)
          , r = function(e) {
            return e[e.failed = 0] = "failed",
            e[e.pending = 1] = "pending",
            e[e.succeeded = 2] = "succeeded",
            e[e.read = 3] = "read",
            e
        }(r || {});
        const s = (0,
        a.ph)((e => {
            let {status: t} = e;
            return a.Ay.createElement("div", {
                className: "MessageOutgoingStatus"
            }, a.Ay.createElement(o.Ay, {
                name: "reveal",
                activeKey: r[t]
            }, "failed" === t ? a.Ay.createElement("div", {
                className: "MessageOutgoingStatus--failed"
            }, a.Ay.createElement(i.A, {
                name: "message-failed"
            })) : a.Ay.createElement(i.A, {
                name: `message-${t}`
            })))
        }
        ))
    }
    ,
    42827: (e, t, n) => {
        n.d(t, {
            A: () => c
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(4961)
          , r = n(59030)
          , s = n(50680);
        const l = "Nothing found."
          , c = (0,
        a.ph)((e => {
            let {text: t=l, description: n} = e;
            const c = (0,
            r.A)()
              , {transitionClassNames: d} = (0,
            s.A)(!0);
            return a.Ay.createElement("div", {
                className: (0,
                o.A)("NothingFound", d, n && "with-description")
            }, t, n && a.Ay.createElement("p", {
                className: "description"
            }, (0,
            i.A)(c(n), ["br"])))
        }
        ))
    }
    ,
    15535: (e, t, n) => {
        n.d(t, {
            A: () => A
        });
        var a = n(84051)
          , o = n(31481)
          , i = n(66644)
          , r = n(87357)
          , s = n(83868)
          , l = n(82393)
          , c = n(14737)
          , d = n(43874)
          , m = n(59030)
          , u = n(64493);
        const A = (0,
        a.ph)((e => {
            let {isLoading: t=!1, isPasswordVisible: n, error: A, hint: h, placeholder: p="Password", submitLabel: y="Next", description: g, shouldShowSubmit: f, shouldResetValue: v, shouldDisablePasswordManager: E=!1, noRipple: C=!1, clearError: b, onChangePasswordVisibility: w, onInputChange: S, onSubmit: I} = e;
            const N = (0,
            a.li)(null)
              , M = (0,
            m.A)()
              , {isMobile: k} = (0,
            d.Ay)()
              , [T,P] = (0,
            a.J0)("")
              , [x,R] = (0,
            a.J0)(!1)
              , L = k ? 550 : 400;
            return (0,
            a.vJ)(( () => {
                v && P("")
            }
            ), [v]),
            (0,
            c.A)(( () => {
                l.TF || N.current.focus()
            }
            ), L),
            (0,
            a.vJ)(( () => {
                A && (0,
                i.RK)(( () => {
                    N.current.focus(),
                    N.current.select()
                }
                ))
            }
            ), [A]),
            a.Ay.createElement("form", {
                action: "",
                onSubmit: I ? function(e) {
                    e.preventDefault(),
                    t || x && I(T)
                }
                : s.A,
                autoComplete: "off"
            }, a.Ay.createElement("div", {
                className: (0,
                r.A)("input-group password-input", T && "touched", A && "error"),
                dir: M.isRtl ? "rtl" : void 0
            }, E && a.Ay.createElement("input", {
                type: "password",
                id: "prevent_autofill",
                autoComplete: "off",
                className: "visually-hidden",
                tabIndex: -2
            }), a.Ay.createElement("input", {
                ref: N,
                className: "form-control",
                type: n ? "text" : "password",
                id: "sign-in-password",
                value: T || "",
                autoComplete: E ? "one-time-code" : "current-password",
                onChange: function(e) {
                    A && b();
                    const {target: t} = e;
                    P(t.value),
                    R(t.value.length >= o.AGC),
                    S && S(t.value)
                },
                maxLength: 256,
                dir: "auto"
            }), a.Ay.createElement("label", null, A || h || p), a.Ay.createElement("div", {
                className: "div-button toggle-password",
                onClick: function() {
                    w(!n)
                },
                role: "button",
                tabIndex: 0,
                title: "Toggle password visibility",
                "aria-label": "Toggle password visibility"
            }, a.Ay.createElement("i", {
                className: (0,
                r.A)("icon", n ? "icon-eye" : "icon-eye-closed")
            }))), g && a.Ay.createElement("p", {
                className: "description"
            }, g), I && (x || f) && a.Ay.createElement(u.A, {
                type: "submit",
                ripple: !C,
                isLoading: t,
                disabled: !x
            }, y))
        }
        ))
    }
    ,
    20333: (e, t, n) => {
        n.d(t, {
            A: () => m
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(95807)
          , r = n(59030)
          , s = n(93545)
          , l = n(18276);
        const c = "_b5HgBXr"
          , d = "P6mch4bB"
          , m = (0,
        a.ph)((e => {
            let {leftText: t, rightText: n, floatingBadgeText: m, floatingBadgeIcon: u, progress: A, className: h} = e;
            const p = (0,
            r.A)()
              , y = (0,
            a.li)(null)
              , g = (0,
            a.li)(null)
              , [f,v] = (0,
            a.J0)(0)
              , [E,C] = (0,
            a.J0)(0)
              , b = () => {
                if (y.current && g.current && void 0 !== A) {
                    const e = y.current.offsetWidth
                      , t = g.current.offsetWidth
                      , n = e / 2
                      , a = t - e / 2
                      , o = A * t
                      , i = Math.max(n, Math.min(o, a));
                    let r;
                    v(i / t),
                    r = o < n ? A * t / (2 * n) : o > a ? .5 + (A - a / t) / (1 - a / t) * .4 : .5,
                    C(r)
                }
            }
            ;
            (0,
            a.vJ)(b, [A]),
            (0,
            s.A)(g, b);
            const w = Boolean(u || m)
              , S = Boolean(A) && A > .99;
            return a.Ay.createElement("div", {
                ref: g,
                className: (0,
                o.A)("nY2ggBsF", w && "RYtVQAjM", h),
                style: (0,
                i.A)(void 0 !== A && `--progress: ${A}`, void 0 !== E && `--tail-position: ${E}`, `--shift-x: ${f}`)
            }, w && a.Ay.createElement("div", {
                className: "dhigNjAq"
            }, a.Ay.createElement("div", {
                className: "cOpfCGPh"
            }, a.Ay.createElement("div", {
                className: "uNwBLNOy",
                ref: y
            }, u && a.Ay.createElement(l.A, {
                name: u,
                className: "MJ7MTmxi"
            }), m && a.Ay.createElement("div", {
                className: "MwzZt3Qo",
                dir: p.isRtl ? "rtl" : void 0
            }, m)), a.Ay.createElement("div", {
                className: "qRwO7SZm"
            }, a.Ay.createElement("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 28 28",
                fill: "none"
            }, a.Ay.createElement("path", {
                d: "m 28,4 v 9 c 0.0089,7.283278 -3.302215,5.319646 -6.750951,8.589815 l -5.8284,5.82843 c -0.781,0.78105 -2.0474,0.78104 -2.8284,0 L 6.7638083,21.589815 C 2.8288652,17.959047 0.04527024,20.332086 0,13 V 4 C 0,4 0.00150581,0.97697493 3,1 5.3786658,1.018266 22.594519,0.9142007 25,1 c 2.992326,0.1067311 3,3 3,3 z",
                fill: "#7E85FF"
            }))))), a.Ay.createElement("div", {
                className: c
            }, a.Ay.createElement("span", null, t)), a.Ay.createElement("div", {
                className: d
            }, a.Ay.createElement("span", null, n)), a.Ay.createElement("div", {
                className: (0,
                o.A)("sZZV0yoe", S && "m8ie8IxL")
            }, a.Ay.createElement("div", {
                className: c
            }, a.Ay.createElement("span", null, t)), a.Ay.createElement("div", {
                className: d
            }, a.Ay.createElement("span", null, n))))
        }
        ))
    }
    ,
    17751: (e, t, n) => {
        n.d(t, {
            A: () => f
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(89925)
          , r = n(90709)
          , s = n(29807)
          , l = n(87357)
          , c = n(4961)
          , d = n(17712)
          , m = n(59030)
          , u = n(42452)
          , A = n(21849)
          , h = n(80999)
          , p = n(34431)
          , y = n(18276)
          , g = n(80477);
        const f = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {userId: n, forceShowSelf: a} = t;
            const {isSynced: o} = e
              , i = n ? (0,
            s.mBe)(e, n) : void 0
              , r = n ? (0,
            s.K0y)(e, n) : void 0
              , l = !a && i && i.isSelf
              , c = l ? i : (0,
            s.mBe)(e, e.currentUserId);
            return {
                user: i,
                userStatus: r,
                isSavedMessages: l,
                areMessagesLoaded: Boolean(n && (0,
                s.zeq)(e, n)),
                self: c,
                isSynced: o
            }
        }
        ))((e => {
            let {customPeer: t, typingStatus: n, avatarSize: s="medium", status: f, statusIcon: v, withDots: E, withMediaViewer: C, withUsername: b, withStory: w, withFullInfo: S, withUpdatingStatus: I, emojiStatusSize: N, noStatusOrTyping: M, noEmojiStatus: k, noFake: T, noVerified: P, noRtl: x, user: R, userStatus: L, self: B, isSavedMessages: O, isSavedDialog: F, areMessagesLoaded: D, adminMember: U, ripple: K, className: j, storyViewerOrigin: z, isSynced: $, onEmojiStatusClick: _, iconElement: J, rightElement: V} = e;
            const {loadFullUser: H, openMediaViewer: q, loadMoreProfilePhotos: G} = (0,
            o.ko)()
              , W = (0,
            m.A)()
              , {id: Z} = R || {};
            (0,
            a.vJ)(( () => {
                Z && (S && $ && H({
                    userId: Z
                }),
                C && G({
                    peerId: Z,
                    isPreload: !0
                }))
            }
            ), [Z, S, C, $]);
            const Q = (0,
            d.A)(( (e, t) => {
                R && t && (e.stopPropagation(),
                q({
                    isAvatarView: !0,
                    chatId: R.id,
                    mediaIndex: 0,
                    origin: "jumbo" === s ? i.TQ.ProfileAvatar : i.TQ.MiddleHeaderAvatar
                }))
            }
            ))
              , Y = (0,
            a.Kr)(( () => R && b && (0,
            r.Kl)(R)), [R, b]);
            if (!R && !t)
                return;
            const X = U ? U.customTitle || W(U.isOwner ? "GroupInfo.LabelOwner" : "GroupInfo.LabelAdmin") : void 0;
            return a.Ay.createElement("div", {
                className: (0,
                l.A)("ChatInfo", j),
                dir: !x && W.isRtl ? "rtl" : void 0
            }, F && B && a.Ay.createElement(A.A, {
                key: "saved-messages",
                size: s,
                peer: B,
                isSavedMessages: !0,
                className: "saved-dialog-avatar"
            }), a.Ay.createElement(A.A, {
                key: R?.id,
                size: s,
                peer: t || R,
                className: (0,
                l.A)(F && "overlay-avatar"),
                isSavedMessages: O,
                isSavedDialog: F,
                withStory: w,
                storyViewerOrigin: z,
                storyViewerMode: "single-peer",
                onClick: C ? Q : void 0
            }), a.Ay.createElement("div", {
                className: "info"
            }, X ? a.Ay.createElement("div", {
                className: "info-name-title"
            }, a.Ay.createElement(p.A, {
                peer: R,
                withEmojiStatus: !k,
                emojiStatusSize: N,
                isSavedMessages: O,
                isSavedDialog: F,
                onEmojiStatusClick: _
            }), X && a.Ay.createElement("span", {
                className: "custom-title"
            }, X)) : a.Ay.createElement(p.A, {
                peer: t || R,
                noFake: T,
                noVerified: P,
                withEmojiStatus: !k,
                emojiStatusSize: N,
                isSavedMessages: O,
                isSavedDialog: F,
                onEmojiStatusClick: _,
                iconElement: J
            }), (f || !O && !M) && function() {
                if (f)
                    return E ? a.Ay.createElement(h.A, {
                        className: "status",
                        content: f
                    }) : a.Ay.createElement("span", {
                        className: "status",
                        dir: "auto"
                    }, v && a.Ay.createElement(y.A, {
                        className: "status-icon",
                        name: v
                    }), (0,
                    c.A)(f));
                if (I && !D)
                    return a.Ay.createElement(h.A, {
                        className: "status",
                        content: W("Updating")
                    });
                if (t?.subtitleKey)
                    return a.Ay.createElement("span", {
                        className: "status",
                        dir: "auto"
                    }, a.Ay.createElement("span", {
                        className: "user-status",
                        dir: "auto"
                    }, W(t.subtitleKey)));
                if (!R)
                    return;
                if (n)
                    return a.Ay.createElement(g.A, {
                        typingStatus: n
                    });
                const e = (0,
                r.CD)(W, R, L)
                  , o = (0,
                l.A)("handle", e && "withStatus");
                return a.Ay.createElement("span", {
                    className: (0,
                    l.A)("status", (0,
                    r.PF)(R, L, !0) && "online")
                }, Y && a.Ay.createElement("span", {
                    className: o
                }, Y), e && a.Ay.createElement("span", {
                    className: "user-status",
                    dir: "auto"
                }, e))
            }()), K && a.Ay.createElement(u.A, null), V)
        }
        )))
    }
    ,
    70195: (e, t, n) => {
        n.d(t, {
            A: () => K
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(89925)
          , r = n(90709)
          , s = n(29807)
          , l = n(87357)
          , c = n(50442)
          , d = n(79824)
          , m = n(82393)
          , u = n(4961)
          , A = n(17712)
          , h = n(59030)
          , p = n(73767)
          , y = n(23174)
          , g = n(58554)
          , f = n(41036)
          , v = n(21849)
          , E = n(34431)
          , C = n(14242)
          , b = n(35049)
          , w = n(43874)
          , S = n(45470)
          , I = n(37661)
          , N = n(62587)
          , M = n(83057)
          , k = n(65843)
          , T = n(57474)
          , P = n(18276);
        const x = (0,
        a.ph)((e => {
            let {chat: t, user: n, photo: o, isSavedMessages: i, isSavedDialog: s, canPlayVideo: c, onClick: d} = e;
            const A = (0,
            a.li)(null)
              , p = (0,
            h.A)()
              , {isMobile: y} = (0,
            w.Ay)()
              , g = n && (0,
            r.PL)(n)
              , f = t && (0,
            r.kE)(t.id)
              , v = t && (0,
            r.Qe)(t.id)
              , E = n || t
              , x = E && !i && !g && !f && !v
              , {isVideo: R} = o || {}
              , L = (!o || o.id === E.avatarPhotoId) && (0,
            r.cP)(E, "normal")
              , B = x && o && !L && (0,
            r.rI)(o, "pictogram")
              , O = (0,
            N.A)(B || L)
              , F = x && o && !R && (0,
            r.mU)(o)
              , D = (0,
            N.A)(F)
              , U = x && o && R && (0,
            r.Pg)(o)
              , K = (0,
            N.A)(U) || D
              , [j,z] = (0,
            I.A)()
              , $ = Boolean(K && (!R || j))
              , _ = (0,
            M.A)($)
              , J = x && !$ && !O && o?.thumbnail?.dataUri
              , V = (0,
            S.A)(o?.thumbnail?.dataUri, !J, y && !m.QH)
              , H = o || O || J;
            (0,
            a.vJ)(( () => {
                A.current && !c && (A.current.currentTime = 0)
            }
            ), [c]);
            const q = (0,
            a.Kr)(( () => i ? s ? "my-notes" : "avatar-saved-messages" : g ? "avatar-deleted-account" : f ? "reply-filled" : v ? "author-hidden" : void 0), [v, g, s, f, i]);
            let G;
            if (q)
                G = a.Ay.createElement(P.A, {
                    name: q,
                    role: "img"
                });
            else if (H)
                G = a.Ay.createElement(a.Ay.Fragment, null, J ? a.Ay.createElement("canvas", {
                    ref: V,
                    className: "thumb"
                }) : a.Ay.createElement("img", {
                    src: O,
                    draggable: !1,
                    className: "thumb",
                    alt: ""
                }), o && (R ? a.Ay.createElement(k.A, {
                    canPlay: c,
                    ref: A,
                    src: K,
                    className: (0,
                    l.A)("avatar-media", _),
                    muted: !0,
                    disablePictureInPicture: !0,
                    loop: !0,
                    playsInline: !0,
                    onReady: z
                }) : a.Ay.createElement("img", {
                    src: K,
                    className: (0,
                    l.A)("avatar-media", _),
                    alt: ""
                })));
            else if (n) {
                const e = (0,
                r.Yg)(n);
                G = e ? (0,
                C.Qh)(e, 2) : void 0
            } else if (t) {
                const e = (0,
                r.Js)(p, t);
                G = e && (0,
                C.Qh)(e, (0,
                r.L8)(t.id) ? 2 : 1)
            } else
                G = a.Ay.createElement("div", {
                    className: "spinner-wrapper"
                }, a.Ay.createElement(T.A, {
                    color: "white"
                }));
            const W = (0,
            l.A)("ProfilePhoto", (0,
            b.y)(E), i && "saved-messages", v && "anonymous-forwards", g && "deleted-account", f && "replies-bot-account", !i && !H && "no-photo");
            return a.Ay.createElement("div", {
                className: W,
                onClick: H ? d : void 0
            }, "string" == typeof G ? (0,
            u.A)(G, ["hq_emoji"]) : G)
        }
        ));
        var R = n(38102);
        const L = "cpyXyZDl"
          , B = "Wm9Ygb23"
          , O = "nflKKT3R"
          , F = "tFkRrvxe"
          , D = "GBGLnrA7"
          , U = "ZZRcBh8v"
          , K = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {peerId: n} = t;
            const a = (0,
            s.mBe)(e, n)
              , o = (0,
            s.K0y)(e, n)
              , i = (0,
            s.hds)(e, n)
              , r = (0,
            s.IVq)(e, n)
              , {mediaIndex: l, chatId: c} = (0,
            s.nTw)(e).mediaViewer
              , d = i?.isForum
              , {threadId: m} = (0,
            s.Xf0)(e) || {}
              , u = d && m ? (0,
            s.S0q)(e, n, m) : void 0
              , A = (a || i)?.emojiStatus;
            return {
                user: a,
                userStatus: o,
                chat: i,
                mediaIndex: l,
                avatarOwnerId: c,
                emojiStatusSticker: A ? e.customEmojis.byId[A.documentId] : void 0,
                profilePhotos: r,
                ...u && {
                    topic: u,
                    messagesCount: (0,
                    s.QbG)(e, n, m)
                }
            }
        }
        ))((e => {
            let {forceShowSelf: t, canPlayVideo: n, user: s, userStatus: C, chat: b, mediaIndex: w, avatarOwnerId: S, topic: I, messagesCount: N, emojiStatusSticker: M, profilePhotos: k, peerId: T} = e;
            const {openMediaViewer: P, openPremiumModal: K, openStickerSet: j, openPrivacySettingsNoticeModal: z, loadMoreProfilePhotos: $} = (0,
            o.ko)()
              , _ = (0,
            h.A)()
              , J = k?.photos || d.p
              , V = (0,
            p.A)(w)
              , H = (0,
            p.A)(S)
              , [q,G] = (0,
            a.J0)(!0)
              , W = q ? _.isRtl ? "slideRtl" : "slide" : "none"
              , [Z,Q] = (0,
            a.J0)(0)
              , Y = J.length <= 1 || 0 === Z
              , X = J.length <= 1 || Z === J.length - 1;
            (0,
            a.vJ)(( () => {
                J.length - Z <= 3 && $({
                    peerId: T
                })
            }
            ), [Z, T, J.length]),
            (0,
            a.vJ)(( () => {
                H && void 0 !== V && void 0 === w && (G(!1),
                Q(V))
            }
            ), [w, V, H]),
            (0,
            a.vJ)(( () => {
                Z > J.length && (G(!1),
                Q(Math.max(0, J.length - 1)))
            }
            ), [Z, J.length]),
            function(e, t) {
                (0,
                a.vJ)(( () => {
                    e.slice(t, t + 4).forEach((e => {
                        const t = (0,
                        r.mU)(e);
                        g.Ih(t) || g.hd(t, y.qZ.BlobUrl)
                    }
                    ))
                }
                ), [t, e])
            }(J, Z);
            const ee = (0,
            A.A)(( () => {
                P({
                    isAvatarView: !0,
                    chatId: T,
                    mediaIndex: Z,
                    origin: t ? i.TQ.SettingsAvatar : i.TQ.ProfileAvatar
                })
            }
            ))
              , te = (0,
            A.A)(( () => {
                T ? K({
                    fromUserId: T
                }) : j({
                    stickerSetInfo: M.stickerSetInfo
                })
            }
            ))
              , ne = (0,
            A.A)(( () => {
                Y || (G(!0),
                Q(Z - 1))
            }
            ))
              , ae = (0,
            A.A)(( () => {
                X || (G(!0),
                Q(Z + 1))
            }
            ))
              , oe = (0,
            A.A)(( () => {
                z({
                    chatId: b.id,
                    isReadDate: !1
                })
            }
            ));
            if ((0,
            a.vJ)(( () => {
                const e = document.querySelector(`.${D}`);
                if (e)
                    return (0,
                    c.wJ)(e, {
                        selectorToPreventScroll: ".Profile, .settings-content",
                        onSwipe: m.TF ? (e, t) => t === c.ez.Right ? (ne(),
                        !0) : t === c.ez.Left && (ae(),
                        !0) : void 0
                    })
            }
            ), [ae, ne]),
            s || b)
                return I ? a.Ay.createElement("div", {
                    className: "yzg267rr"
                }, a.Ay.createElement(R.A, {
                    topic: I,
                    size: 120,
                    className: "ZCxp0_t4",
                    letterClassName: "lkfZNWOm",
                    noLoopLimit: !0
                }), a.Ay.createElement("h3", {
                    className: "umOuiu3K",
                    dir: _.isRtl ? "rtl" : void 0
                }, (0,
                u.A)(I.title)), a.Ay.createElement("p", {
                    className: "tLTzQ2ks"
                }, N ? _("Chat.Title.Topic", N, "i") : _("lng_forum_no_messages"))) : a.Ay.createElement("div", {
                    className: (0,
                    l.A)("ProfileInfo", t && "DnvLcTfv"),
                    dir: _.isRtl ? "rtl" : void 0
                }, a.Ay.createElement("div", {
                    className: D
                }, function() {
                    const e = Math.max(J.length, k?.count || 0);
                    if (!J || e <= 1)
                        return;
                    const t = Array.from({
                        length: Math.min(e, 30)
                    })
                      , n = Z >= 30 ? 29 : Z;
                    return a.Ay.createElement("div", {
                        className: "uyvKpR3B"
                    }, t.map(( (e, t) => a.Ay.createElement("span", {
                        className: (0,
                        l.A)("wB4yjvei", t === n && "aZmp9FLh")
                    }))))
                }(), !t && k?.personalPhoto && a.Ay.createElement("div", {
                    className: (0,
                    l.A)(B, Y && F)
                }, a.Ay.createElement("div", {
                    className: O
                }, _(k.personalPhoto.isVideo ? "UserInfo.CustomVideo" : "UserInfo.CustomPhoto"))), t && k?.fallbackPhoto && a.Ay.createElement("div", {
                    className: (0,
                    l.A)(B, (Y || X) && F)
                }, a.Ay.createElement("div", {
                    className: O,
                    onClick: function() {
                        Y && (G(!0),
                        Q(J.length - 1))
                    }
                }, !X && a.Ay.createElement(v.A, {
                    photo: k.fallbackPhoto,
                    className: "R7w3H5eC",
                    size: "mini"
                }), _(k.fallbackPhoto.isVideo ? "UserInfo.PublicVideo" : "UserInfo.PublicPhoto"))), a.Ay.createElement(f.Ay, {
                    activeKey: Z,
                    name: W
                }, ie), !Y && a.Ay.createElement("button", {
                    type: "button",
                    dir: _.isRtl ? "rtl" : void 0,
                    className: (0,
                    l.A)(U, "RQITz4WQ"),
                    "aria-label": _("AccDescrPrevious"),
                    onClick: ne
                }), !X && a.Ay.createElement("button", {
                    type: "button",
                    dir: _.isRtl ? "rtl" : void 0,
                    className: (0,
                    l.A)(U, "_0F1Txru"),
                    "aria-label": _("Next"),
                    onClick: ae
                })), a.Ay.createElement("div", {
                    className: "UcyW7tVh",
                    dir: _.isRtl ? "rtl" : "auto"
                }, (s || b) && a.Ay.createElement(E.A, {
                    peer: s || b,
                    withEmojiStatus: !0,
                    emojiStatusSize: 24,
                    onEmojiStatusClick: te,
                    noLoopLimit: !0,
                    canCopyTitle: !0
                }), function() {
                    if (!(0,
                    r.Qe)(T))
                        return s ? a.Ay.createElement("div", {
                            className: (0,
                            l.A)(L, "status", (0,
                            r.PF)(s, C) && "online")
                        }, a.Ay.createElement("span", {
                            className: "_HDVUj4P",
                            dir: "auto"
                        }, (0,
                        r.CD)(_, s, C)), C?.isReadDateRestrictedByMe && a.Ay.createElement("span", {
                            className: "Qga38M20",
                            onClick: oe
                        }, a.Ay.createElement("span", null, _("StatusHiddenShow")))) : a.Ay.createElement("span", {
                            className: (0,
                            l.A)(L, "status"),
                            dir: "auto"
                        }, (0,
                        r.WX)(b) ? _("Subscribers", b.membersCount ?? 0, "i") : _("Members", b.membersCount ?? 0, "i"))
                }()));
            function ie(e) {
                const t = J.length > 0 ? J[Z] : void 0;
                return a.Ay.createElement(x, {
                    key: Z,
                    user: s,
                    chat: b,
                    photo: t,
                    canPlayVideo: Boolean(e && n),
                    onClick: ee
                })
            }
        }
        )))
    }
    ,
    45603: (e, t, n) => {
        n.d(t, {
            A: () => m
        });
        var a = n(84051)
          , o = n(23174)
          , i = n(90709)
          , r = n(87357)
          , s = n(62587)
          , l = n(83057)
          , c = n(87412)
          , d = n(61911);
        const m = (0,
        a.ph)((e => {
            let {reaction: t, availableReactions: n, className: m, size: u, withIconHeart: A, observeIntersection: h} = e;
            const p = "documentId"in t
              , y = (0,
            a.Kr)(( () => n?.find((e => (0,
            i.a0)(e.reaction, t)))), [n, t])
              , g = y?.staticIcon?.id
              , f = (0,
            s.A)(`document${g}`, !g, o.qZ.BlobUrl)
              , v = (0,
            l.A)(f)
              , E = "emoticon"in t && "🦄" === t.emoticon
              , C = A && "emoticon"in t && "❤" === t.emoticon;
            return p ? a.Ay.createElement(c.A, {
                documentId: t.documentId,
                className: (0,
                r.A)("ReactionStaticEmoji", m),
                size: u,
                observeIntersectionForPlaying: h
            }) : C ? a.Ay.createElement("i", {
                className: "ReactionStaticEmoji icon icon-heart",
                style: `font-size: ${u}px; width: ${u}px`
            }) : a.Ay.createElement("img", {
                className: (0,
                r.A)("ReactionStaticEmoji", E && "with-unicorn-fix", v, m),
                style: u ? `width: ${u}px; height: ${u}px` : void 0,
                src: f || d,
                alt: y?.title,
                draggable: !1
            })
        }
        ))
    }
    ,
    94285: (e, t, n) => {
        n.d(t, {
            A: () => u
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(87357)
          , r = n(17712)
          , s = n(59030)
          , l = n(64493)
          , c = n(40664)
          , d = n(8410)
          , m = n(1087);
        const u = (0,
        a.ph)((e => {
            let {isOpen: t, subject: n="messages", peerId: u, photo: A, messageIds: h, storyId: p, onClose: y, onCloseAnimationEnd: g} = e;
            const {reportMessages: f, reportPeer: v, reportProfilePhoto: E, reportStory: C, exitMessageSelectMode: b} = (0,
            o.ko)()
              , [w,S] = (0,
            a.J0)("spam")
              , [I,N] = (0,
            a.J0)("")
              , M = (0,
            r.A)(( () => {
                switch (n) {
                case "messages":
                    f({
                        messageIds: h,
                        reason: w,
                        description: I
                    }),
                    b();
                    break;
                case "peer":
                    v({
                        chatId: u,
                        reason: w,
                        description: I
                    });
                    break;
                case "media":
                    E({
                        chatId: u,
                        photo: A,
                        reason: w,
                        description: I
                    });
                    break;
                case "story":
                    C({
                        peerId: u,
                        storyId: p,
                        reason: w,
                        description: I
                    })
                }
                y()
            }
            ))
              , k = (0,
            r.A)((e => {
                S(e)
            }
            ))
              , T = (0,
            r.A)((e => {
                N(e.target.value)
            }
            ))
              , P = (0,
            s.A)()
              , x = (0,
            a.Kr)(( () => [{
                value: "spam",
                label: P("lng_report_reason_spam")
            }, {
                value: "violence",
                label: P("lng_report_reason_violence")
            }, {
                value: "pornography",
                label: P("lng_report_reason_pornography")
            }, {
                value: "childAbuse",
                label: P("lng_report_reason_child_abuse")
            }, {
                value: "copyright",
                label: P("ReportPeer.ReasonCopyright")
            }, {
                value: "illegalDrugs",
                label: "Illegal Drugs"
            }, {
                value: "personalDetails",
                label: "Personal Details"
            }, {
                value: "other",
                label: P("lng_report_reason_other")
            }]), [P]);
            if ("messages" === n && !h || "peer" === n && !u || "media" === n && (!u || !A) || "story" === n && (!p || !u))
                return;
            const R = P("messages" === n ? "lng_report_message_title" : "ReportPeer.Report");
            return a.Ay.createElement(d.A, {
                isOpen: t,
                onClose: y,
                onEnter: t ? M : void 0,
                onCloseAnimationEnd: g,
                className: (0,
                i.A)("narrow", "story" === n && "component-theme-dark"),
                title: R
            }, a.Ay.createElement(m.A, {
                name: "report-message",
                options: x,
                onChange: k,
                selected: w
            }), a.Ay.createElement(c.A, {
                label: P("lng_report_reason_description"),
                value: I,
                onChange: T
            }), a.Ay.createElement("div", {
                className: "dialog-buttons"
            }, a.Ay.createElement(l.A, {
                color: "danger",
                className: "confirm-dialog-button",
                isText: !0,
                onClick: M
            }, P("lng_report_button")), a.Ay.createElement(l.A, {
                className: "confirm-dialog-button",
                isText: !0,
                onClick: y
            }, P("Cancel"))))
        }
        ))
    }
    ,
    38102: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(87412)
          , i = n(76471);
        const r = (0,
        a.ph)((e => {
            let {topic: t, className: n, letterClassName: r, size: s, noLoopLimit: l, observeIntersection: c, onClick: d} = e;
            return t.iconEmojiId && "0" !== t.iconEmojiId ? a.Ay.createElement(o.A, {
                documentId: t.iconEmojiId,
                className: n,
                size: s,
                observeIntersectionForPlaying: c,
                loopLimit: l ? void 0 : 2,
                onClick: d
            }) : a.Ay.createElement(i.A, {
                iconColor: t.iconColor,
                title: t.title,
                topicId: t.id,
                className: n,
                letterClassName: r,
                onClick: d
            })
        }
        ))
    }
    ,
    80477: (e, t, n) => {
        n.d(t, {
            A: () => d
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(29807)
          , s = n(4961)
          , l = n(59030)
          , c = n(80999);
        const d = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {typingStatus: n} = t;
            return n.userId ? {
                typingUser: (0,
                r.mBe)(e, n.userId)
            } : {}
        }
        ))((e => {
            let {typingStatus: t, typingUser: n} = e;
            const o = (0,
            l.A)()
              , r = n && !n.isSelf && (0,
            i.u0)(n)
              , d = o(t.action).replace("{user}", "").replace("{emoji}", t.emoji || "").trim();
            return a.Ay.createElement("p", {
                className: "typing-status",
                dir: o.isRtl ? "rtl" : "auto"
            }, r && a.Ay.createElement("span", {
                className: "sender-name",
                dir: "auto"
            }, (0,
            s.A)(r)), a.Ay.createElement(c.A, {
                content: d
            }))
        }
        )))
    }
    ,
    37378: (e, t, n) => {
        n.d(t, {
            A: () => p
        });
        var a = n(84051)
          , o = n(90709)
          , i = n(87357)
          , r = n(17663)
          , s = n(58849)
          , l = n(49086)
          , c = n(4961)
          , d = n(17712)
          , m = n(59030)
          , u = n(96530)
          , A = n(81524)
          , h = n(56440);
        const p = (0,
        a.ph)((e => {
            let {message: t, senderTitle: n, isProtected: p, observeIntersection: y, onMessageClick: g} = e;
            const f = (0,
            m.A)();
            let v = (0,
            o.T_)(t);
            if (!v) {
                const e = (0,
                o.ZD)(t);
                if (e) {
                    const {url: n, domain: a} = e;
                    v = {
                        siteName: a.replace(/^www./, ""),
                        url: n.includes("://") ? n : n.includes("@") ? `mailto:${n}` : `http://${n}`,
                        formattedDescription: (0,
                        o.P5)(t) !== n ? (0,
                        l.C)(f, t, void 0, void 0, 170) : void 0
                    }
                }
            }
            const E = (0,
            d.A)(( () => {
                g(t)
            }
            ));
            if (!v)
                return;
            const {siteName: C, url: b, displayUrl: w, title: S, description: I, formattedDescription: N, photo: M, video: k} = v
              , T = !n && I && (0,
            s.A)(I, 170)
              , P = (0,
            i.A)("WebLink scroll-item", !M && !k && "without-media")
              , x = b.replace("mailto:", "") || w;
            return a.Ay.createElement("div", {
                className: P,
                "data-initial": (C || w)[0],
                dir: f.isRtl ? "rtl" : void 0
            }, M && a.Ay.createElement(A.A, {
                message: t,
                isProtected: p,
                observeIntersection: y
            }), a.Ay.createElement("div", {
                className: "content"
            }, a.Ay.createElement(u.A, {
                isRtl: f.isRtl,
                className: "site-title",
                onClick: E
            }, (0,
            c.A)(S || C || w)), (T || N) && a.Ay.createElement(u.A, {
                isRtl: f.isRtl,
                className: "site-description",
                onClick: E
            }, N || T && (0,
            c.A)(T)), a.Ay.createElement(h.A, {
                url: b,
                className: "site-name",
                text: x,
                isRtl: f.isRtl
            }), n && a.Ay.createElement("div", {
                className: "sender-name"
            }, (0,
            c.A)(n))), n && a.Ay.createElement("div", {
                className: "message-date"
            }, a.Ay.createElement(u.A, {
                className: "date",
                onClick: E,
                isRtl: f.isRtl
            }, (0,
            r.be)(f, 1e3 * t.date))))
        }
        ))
    }
    ,
    91930: (e, t, n) => {
        n.d(t, {
            A: () => k,
            b: () => M
        });
        var a = n(84051)
          , o = n(31481)
          , i = n(90709)
          , r = n(3544)
          , s = n(87357)
          , l = n(91034)
          , c = n(76023)
          , d = n(35049)
          , m = n(4961)
          , u = n(18501)
          , A = n(11217)
          , h = n(5912)
          , p = n(62587)
          , y = n(59030)
          , g = n(22867)
          , f = n(64154)
          , v = n(95685)
          , E = n(42452)
          , C = n(18276)
          , b = n(27860)
          , w = n(18653)
          , S = n(39877);
        const I = " "
          , N = e => {
            let {className: t, message: n, replyInfo: l, sender: N, senderChat: M, forwardSender: k, title: T, customText: P, isProtected: x, isInComposer: R, noUserColors: L, chatTranslations: B, requestedChatTranslationLanguage: O, observeIntersectionForLoading: F, observeIntersectionForPlaying: D, onClick: U} = e;
            const K = (0,
            a.li)(null)
              , j = (0,
            h.Vz)(K, F)
              , z = (0,
            a.Kr)(( () => {
                const e = "message" === l?.type && l.replyMedia || n?.content;
                if (e)
                    return {
                        content: e
                    }
            }
            ), [n, l])
              , $ = z && (0,
            i.EO)(z, "pictogram")
              , _ = (0,
            p.A)($, !j)
              , J = (0,
            g.A)(z)
              , V = Boolean(n && (0,
            i.lk)(n))
              , H = Boolean(n && (0,
            i.y2)(n))
              , q = Boolean("message" === l?.type && l.isQuote)
              , G = "message" === l?.type ? l.replyFrom : void 0
              , W = n && (0,
            i.ZR)(n)
              , {translatedText: Z} = (0,
            f.A)(B, n?.chatId, W ? n?.id : void 0, O)
              , Q = (0,
            y.A)()
              , Y = N ? (0,
            i.qg)(Q, N) : G?.hiddenUserName || n?.forwardInfo?.hiddenUserName
              , X = M ? (0,
            i.qg)(Q, M) : void 0
              , ee = k ? (0,
            i.qg)(Q, k) : n?.forwardInfo?.hiddenUserName
              , te = N && N.id === k?.id
              , {handleClick: ne, handleMouseDown: ae} = (0,
            A.Q)(U);
            return a.Ay.createElement("div", {
                ref: K,
                className: (0,
                s.A)("EmbeddedMessage", t, (0,
                d.y)(N, L, !0), q && "is-quote", J && "with-thumb"),
                dir: Q.isRtl ? "rtl" : void 0,
                onClick: ne,
                onMouseDown: ae
            }, a.Ay.createElement("div", {
                className: "hover-effect"
            }), a.Ay.createElement(E.A, null), J && function(e, t, n, o, i) {
                const {width: r, height: l} = (0,
                c.mr)()
                  , d = t || e;
                return a.Ay.createElement("div", {
                    className: (0,
                    s.A)("embedded-thumb", n && "round")
                }, !i && a.Ay.createElement("img", {
                    src: d,
                    width: r,
                    height: l,
                    alt: "",
                    className: "pictogram",
                    draggable: !1
                }), a.Ay.createElement(b.A, {
                    thumbDataUri: d,
                    isVisible: Boolean(i),
                    width: r,
                    height: l
                }), o && a.Ay.createElement("span", {
                    className: "protector"
                }))
            }(J, _, V, x, H), N?.color?.backgroundEmojiId && a.Ay.createElement(S.A, {
                emojiDocumentId: N.color.backgroundEmojiId,
                className: "EmbeddedMessage--background-icons"
            }), a.Ay.createElement("div", {
                className: "message-text"
            }, a.Ay.createElement("p", {
                className: (0,
                s.A)("embedded-text-wrapper", q && "multiline")
            }, "message" === l?.type && l.quoteText ? (0,
            u.f)({
                text: l.quoteText.text,
                entities: l.quoteText.entities,
                noLineBreaks: R,
                emojiSize: 17
            }) : n ? (0,
            i._P)(n) ? a.Ay.createElement(v.A, {
                message: n,
                isEmbedded: !0,
                observeIntersectionForLoading: F,
                observeIntersectionForPlaying: D
            }) : a.Ay.createElement(w.A, {
                message: n,
                noEmoji: Boolean(J),
                translatedText: Z,
                observeIntersectionForLoading: F,
                observeIntersectionForPlaying: D,
                emojiSize: 17
            }) : P || function(e) {
                if (!e || e.content.text)
                    return I;
                const t = (0,
                r.GG)(Q, e.content);
                return t && t !== o.bVP ? a.Ay.createElement("span", null, (0,
                m.A)(t)) : I
            }(z) || I), a.Ay.createElement("div", {
                className: "message-title"
            }, function() {
                if (T)
                    return (0,
                    m.A)(T);
                if (!Y)
                    return I;
                let e;
                M && ((0,
                i.WX)(M) && (e = "channel-filled"),
                (0,
                i.YE)(M) && (e = "group-filled"));
                const t = R && Boolean(l && "quoteText"in l && l?.quoteText);
                return a.Ay.createElement(a.Ay.Fragment, null, (!M || !!(0,
                i.L8)(M?.id) || M.id !== N?.id) && a.Ay.createElement("span", {
                    className: "embedded-sender"
                }, (0,
                m.A)(t ? Q("ReplyToQuote", Y) : Y)), e && a.Ay.createElement(C.A, {
                    name: e,
                    className: "embedded-chat-icon"
                }), e && X && a.Ay.createElement("span", {
                    className: "embedded-sender-chat"
                }, (0,
                m.A)(X)))
            }(), ee && !te && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(C.A, {
                name: k ? "share-filled" : "forward",
                className: "embedded-origin-icon"
            }), (0,
            m.A)(ee)))))
        }
          , M = (0,
        l.A)(N)
          , k = N
    }
    ,
    39877: (e, t, n) => {
        n.d(t, {
            A: () => v
        });
        var a = n(84051)
          , o = n(66644)
          , i = n(90709)
          , r = n(87357)
          , s = n(87679)
          , l = n(76023)
          , c = n(86974)
          , d = n(84080)
          , m = n(17712)
          , u = n(62587)
          , A = n(59030)
          , h = n(93545)
          , p = n(38691)
          , y = n(47483);
        const g = [{
            inline: 22,
            block: 38,
            opacity: .35,
            scale: .75
        }, {
            inline: 32,
            block: 12,
            opacity: .3,
            scale: 1
        }, {
            inline: 60,
            block: 22,
            opacity: .25,
            scale: .75
        }, {
            inline: 75,
            block: 44,
            opacity: .25,
            scale: 1
        }, {
            inline: 75,
            block: 2,
            opacity: .2,
            scale: .625
        }, {
            inline: 95,
            block: 18,
            opacity: .2,
            scale: 1
        }, {
            inline: 115,
            block: 38,
            opacity: .2,
            scale: .625
        }, {
            inline: 125,
            block: 12,
            opacity: .1,
            scale: .75
        }]
          , f = l.$
          , v = (0,
        a.ph)((e => {
            let {emojiDocumentId: t, className: n} = e;
            const l = (0,
            a.li)(null)
              , v = (0,
            a.li)(null)
              , [E,C] = (0,
            a.J0)()
              , b = (0,
            p.A)()
              , w = (0,
            A.A)()
              , {customEmoji: S} = (0,
            y.A)(t)
              , I = S ? (0,
            i.Mw)(S, "preview") : void 0
              , N = (0,
            u.A)(I)
              , M = (0,
            c.A)(v)
              , k = (0,
            d.KE)(( () => {
                N && (0,
                s.NN)(N).then(C)
            }
            ), [N]);
            (0,
            a.vJ)(( () => {
                k()
            }
            ), [k]);
            const T = (0,
            m.A)(( () => {
                const e = l.current;
                if (!e || !E || !M)
                    return;
                const t = e.getContext("2d")
                  , {width: n, height: a} = e;
                t.clearRect(0, 0, n, a),
                g.forEach((e => {
                    let {inline: a, block: o, opacity: i, scale: r} = e;
                    const s = (w.isRtl ? a : n / b - a) * b
                      , l = o * b
                      , c = f * b;
                    t.save(),
                    t.globalAlpha = i,
                    t.translate(s, l),
                    t.scale(r, r),
                    t.drawImage(E, -c / 2, -c / 2, c, c),
                    t.restore()
                }
                ));
                const o = `${M}${S.isLottie ? "ff" : "bb"}`;
                t.save(),
                t.fillStyle = o,
                t.globalCompositeOperation = "source-atop",
                t.fillRect(0, 0, n, a),
                t.restore()
            }
            ))
              , P = (0,
            d.KE)(T, [T]);
            (0,
            a.vJ)(( () => {
                P()
            }
            ), [E, w.isRtl, M, P]);
            const x = (0,
            d.KE)(( (e, t) => {
                (0,
                o.RK)(( () => {
                    const n = l.current;
                    n && (n.width = e * b,
                    n.height = t * b,
                    n.style.width = `${e}px`,
                    n.style.height = `${t}px`,
                    T())
                }
                ))
            }
            ), [b])
              , R = (0,
            d.KE)((e => {
                const {width: t, height: n} = e.contentRect;
                x(t, n)
            }
            ), [x]);
            return (0,
            h.A)(v, R),
            (0,
            a.vJ)(( () => {
                const e = v.current;
                if (!e)
                    return;
                const {width: t, height: n} = e.getBoundingClientRect();
                x(t, n)
            }
            ), [x]),
            a.Ay.createElement("div", {
                className: (0,
                r.A)("pTWe_CYU", n),
                ref: v
            }, a.Ay.createElement("canvas", {
                ref: l
            }))
        }
        ))
    }
    ,
    55317: (e, t, n) => {
        function a(e, t) {
            const {level: n, boosts: a, currentLevelBoosts: o, nextLevelBoosts: i, hasMyBoost: r, prepaidGiveaways: s} = e
              , l = t && a === o && r;
            return {
                currentLevel: l ? n - 1 : n,
                hasNextLevel: Boolean(i),
                boosts: a,
                levelProgress: !i || l ? 1 : (a - o) / (i - o),
                remainingBoosts: i ? i - a : 0,
                isMaxLevel: void 0 === i,
                prepaidGiveaways: s
            }
        }
        n.d(t, {
            z: () => a
        })
    }
    ,
    24899: (e, t, n) => {
        n.d(t, {
            A: () => o
        });
        var a = n(31481);
        function o(e, t) {
            return t ? `${a.jsp}${e}` : `@${e}`
        }
    }
    ,
    49086: (e, t, n) => {
        n.d(t, {
            C: () => m,
            V: () => d
        });
        var a = n(23174)
          , o = n(90709)
          , i = n(3544)
          , r = n(60343)
          , s = n(58849)
          , l = n(4961)
          , c = n(18501);
        function d(e) {
            let {message: t, highlight: n, emojiSize: a, isSimple: i, truncateLength: l, isProtected: d, forcePlayback: m, shouldRenderAsHtml: u, isForMediaViewer: A} = e;
            const {text: h, entities: p} = t.content.text || {};
            if (!h) {
                const e = (0,
                o.P5)(t);
                return e ? [(0,
                s.A)(e, l)] : void 0
            }
            const y = (0,
            r.bj)(t);
            return (0,
            c.f)({
                text: (0,
                s.A)(h, l),
                entities: p,
                highlight: n,
                emojiSize: a,
                shouldRenderAsHtml: u,
                containerId: `${A ? "mv-" : ""}${y}`,
                isSimple: i,
                isProtected: d,
                forcePlayback: m
            })
        }
        function m(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , o = arguments.length > 3 ? arguments[3] : void 0
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.vs;
            const {entities: c} = t.content.text || {}
              , m = c?.some((e => e.type === a.C7.Spoiler))
              , u = c?.some((e => e.type === a.C7.CustomEmoji));
            if (!m && !u) {
                const a = (0,
                s.A)((0,
                i.dS)(e, t, n), r);
                return o ? (0,
                l.A)(a, ["emoji", "highlight"], {
                    highlight: o
                }) : (0,
                l.A)(a)
            }
            const A = !n && (0,
            i.Su)(t)
              , h = A ? `${A} ` : ""
              , p = d({
                message: t,
                highlight: o,
                isSimple: !0,
                truncateLength: r
            })
              , y = (0,
            i.oL)(e, t, p);
            return [...(0,
            l.A)(h), ...Array.isArray(y) ? y : [y]].filter(Boolean)
        }
    }
    ,
    79582: (e, t, n) => {
        n.d(t, {
            A: () => l
        });
        var a = n(13439)
          , o = n(29807)
          , i = n(87894);
        const r = 3e9
          , s = 3e8;
        function l(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 ? arguments[2] : void 0
              , l = arguments.length > 3 ? arguments[3] : void 0;
            const c = (0,
            a.mS)();
            return (0,
            i.My)(e, (e => {
                if (e === l)
                    return 1 / 0;
                const a = (0,
                o.hds)(c, e);
                if (!a)
                    return 0;
                let i = 0;
                const d = (0,
                o.yHC)(c, e);
                return d && (i += d.date),
                t && a.isVerified && (i += r),
                n && n.includes(e) && (i = Date.now() + s + (n.length - n.indexOf(e))),
                i
            }
            ), "desc")
        }
    }
    ,
    54960: (e, t, n) => {
        n.d(t, {
            A: () => k
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(66644)
          , s = n(90709)
          , l = n(70636)
          , c = n(29807)
          , d = n(87357)
          , m = n(87894)
          , u = n(79824)
          , A = n(96374)
          , h = n(17712)
          , p = n(59030)
          , y = n(19806)
          , g = n(46222)
          , f = n(40664)
          , v = n(52745)
          , E = n(24956)
          , C = n(21849)
          , b = n(34431)
          , w = n(18276)
          , S = n(45780)
          , I = n(71690)
          , N = n(31722);
        const M = "PeerPickerItem"
          , k = (0,
        a.ph)((e => {
            let {className: t, categories: n, itemIds: k, categoryPlaceholderKey: T, filterValue: P, filterPlaceholder: x, notFoundText: R, searchInputId: L, itemClassName: B, isLoading: O, noScrollRestore: F, isSearchable: D, lockedUnselectedSubtitle: U, forceShowSelf: K, isViewOnly: j, itemInputType: z, withStatus: $, withPeerTypes: _, withDefaultPadding: J, onFilterChange: V, onDisabledClick: H, onLoadMore: q, ...G} = e;
            const W = (0,
            p.A)()
              , Z = G.allowMultiple
              , Q = Z ? G.lockedSelectedIds : void 0
              , Y = Z ? G.lockedUnselectedIds : void 0
              , X = (0,
            a.Kr)(( () => Z ? G.selectedCategories : G.selectedCategory ? [G.selectedCategory] : u.p), [Z, G.selectedCategory, G.selectedCategories])
              , ee = (0,
            a.Kr)(( () => Z ? G.selectedIds : G.selectedId ? [G.selectedId] : u.p), [Z, G.selectedId, G.selectedIds])
              , te = (0,
            a.li)(null)
              , ne = ee.length > 10;
            (0,
            a.vJ)(( () => {
                if (!D)
                    return;
                const e = window.setTimeout(( () => {
                    (0,
                    r.YS)(( () => {
                        te.current?.focus()
                    }
                    ))
                }
                ), 500);
                return () => {
                    window.clearTimeout(e)
                }
            }
            ), [D]);
            const ae = (0,
            a.Kr)(( () => new Set(Q)), [Q])
              , oe = (0,
            a.Kr)(( () => new Set(Y)), [Y])
              , ie = (0,
            a.Kr)(( () => ee.filter((e => !ae.has(e)))), [ae, ee])
              , re = (0,
            a.Kr)(( () => n ? (0,
            m.dU)(n, "type") : {}), [n])
              , se = (0,
            a.Kr)(( () => {
                if (P)
                    return k;
                const e = []
                  , t = []
                  , n = [];
                return k.forEach((a => {
                    ae.has(a) ? e.push(a) : oe.has(a) ? n.push(a) : t.push(a)
                }
                )),
                e.concat(t, n)
            }
            ), [P, k, ae, oe])
              , le = (0,
            h.A)((e => {
                if (ae.has(e))
                    H?.(e, !0);
                else if (oe.has(e))
                    H?.(e, !1);
                else {
                    if (Z && re[e]) {
                        const t = re[e].type
                          , n = X?.slice() || [];
                        return n.includes(t) ? n.splice(n.indexOf(t), 1) : n.push(t),
                        void G.onSelectedCategoriesChange?.(n)
                    }
                    if (Z) {
                        const t = ee.slice();
                        return t.includes(e) ? t.splice(t.indexOf(e), 1) : t.push(e),
                        void G.onSelectedIdsChange?.(t)
                    }
                    re[e] ? G.onSelectedCategoryChange?.(re[e].type) : G.onSelectedIdChange?.(e)
                }
            }
            ))
              , ce = (0,
            h.A)((e => {
                const {value: t} = e.currentTarget;
                V?.(t)
            }
            ))
              , [de,me] = (0,
            A.A)(q, se, Boolean(P))
              , ue = (0,
            a.hb)(( (e, t) => {
                const n = (0,
                o.mS)()
                  , r = t ? re[e] : void 0
                  , m = t ? void 0 : (0,
                c.PVB)(n, e)
                  , u = m || r;
                if (!u)
                    return i.Oig ? a.Ay.createElement("div", {
                        key: e
                    }, "No peer or category with ID ", e) : void 0;
                const A = m && !(0,
                l.vj)(m) ? m.isSelf && !K : void 0
                  , h = oe.has(e)
                  , p = ae.has(e)
                  , g = h || p
                  , f = r ? X?.includes(r.type) : ee.includes(e)
                  , [v,I] = function() {
                    if (h)
                        return [U];
                    if ($ && m) {
                        if ((0,
                        l.vj)(m))
                            return [(0,
                            s.sT)(W, m)];
                        const e = (0,
                        c.K0y)(n, m.id);
                        return [(0,
                        s.CD)(W, m, e), (0,
                        d.A)((0,
                        s.PF)(m, e, !0) && N.A.onlineStatus)]
                    }
                    if (_ && m) {
                        const e = (0,
                        l.cy)(m);
                        return e && [W(e)]
                    }
                }() || [];
                return a.Ay.createElement(S.A, {
                    key: e,
                    className: (0,
                    d.A)(M, B),
                    title: a.Ay.createElement(b.A, {
                        peer: u
                    }),
                    avatarElement: a.Ay.createElement(C.A, {
                        peer: m || r,
                        isSavedMessages: A,
                        size: "medium"
                    }),
                    subtitle: v,
                    subtitleClassName: I,
                    disabled: g,
                    inactive: j,
                    ripple: !0,
                    inputElement: g ? a.Ay.createElement(w.A, {
                        name: "lock-badge"
                    }) : "radio" === z ? a.Ay.createElement(E.A, {
                        checked: f,
                        disabled: g,
                        onlyInput: !0
                    }) : "checkbox" === z ? a.Ay.createElement(y.A, {
                        checked: f,
                        disabled: g,
                        onlyInput: !0
                    }) : void 0,
                    inputPosition: "end",
                    onClick: () => le(e),
                    onDisabledClick: H && ( () => H(e, p))
                })
            }
            ), [re, K, j, B, z, W, ae, oe, U, H, X, ee, _, $])
              , Ae = (0,
            a.Kr)(( () => {
                if (n?.length)
                    return a.Ay.createElement("div", {
                        key: "categories"
                    }, T && a.Ay.createElement("div", {
                        className: N.A.pickerCategoryTitle
                    }, W(T)), n?.map((e => ue(e.type, !0))), a.Ay.createElement("div", {
                        className: N.A.pickerCategoryTitle
                    }, W("FilterChats")))
            }
            ), [n, T, W, ue]);
            return a.Ay.createElement("div", {
                className: (0,
                d.A)(N.A.container, t)
            }, D && a.Ay.createElement("div", {
                className: (0,
                d.A)(N.A.header, "custom-scroll"),
                dir: W.isRtl ? "rtl" : void 0
            }, X?.map((e => a.Ay.createElement(I.A, {
                customPeer: re[e],
                onClick: le,
                clickArg: e,
                canClose: !0
            }))), Q?.map(( (e, t) => a.Ay.createElement(I.A, {
                peerId: e,
                isMinimized: ne && t < ee.length - 5,
                forceShowSelf: K,
                onClick: le,
                clickArg: e
            }))), ie.map(( (e, t) => a.Ay.createElement(I.A, {
                peerId: e,
                isMinimized: ne && t + (Q?.length || 0) < ee.length - 5,
                canClose: !0,
                onClick: le,
                clickArg: e
            }))), a.Ay.createElement(f.A, {
                id: L,
                ref: te,
                value: P,
                onChange: ce,
                placeholder: x || W("SelectChat")
            })), de?.length ? a.Ay.createElement(g.A, {
                className: (0,
                d.A)(N.A.pickerList, J && N.A.padded, "custom-scroll"),
                items: de,
                itemSelector: `.${M}`,
                beforeChildren: Ae,
                onLoadMore: me,
                noScrollRestore: F
            }, de.map((e => ue(e)))) : O || !de || de.length ? a.Ay.createElement(v.A, null) : a.Ay.createElement("p", {
                className: N.A.noResults
            }, R || "Sorry, nothing found."))
        }
        ))
    }
    ,
    45780: (e, t, n) => {
        n.d(t, {
            A: () => c
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(82393)
          , r = n(17712)
          , s = n(59030)
          , l = n(42452);
        const c = e => {
            let {title: t, subtitle: n, avatarElement: c, inputElement: d, inputPosition: m="start", disabled: u, inactive: A, ripple: h, className: p, titleClassName: y, subtitleClassName: g, style: f, onClick: v, onDisabledClick: E} = e;
            const C = (0,
            s.A)()
              , b = !A && !u
              , w = (0,
            r.A)(( () => {
                A || (u ? E?.() : v?.())
            }
            ));
            return a.Ay.createElement("div", {
                className: (0,
                o.A)("OHkx_W75", n && "neXqB2_A", u && "tvZeVJPh", b && "VUSwo4t5", c && "dMT9byM6", p),
                onClick: w,
                style: f,
                dir: C.isRtl ? "rtl" : void 0,
                role: b ? "button" : void 0,
                tabIndex: b ? 0 : void 0
            }, !u && !A && h && a.Ay.createElement(l.A, null), d && a.Ay.createElement("div", {
                className: (0,
                o.A)("kmjqObdP", "end" === m ? "iqGhSQGm" : "F0Hv3EQm")
            }, d), c && a.Ay.createElement("div", {
                className: "dnAaRPCo"
            }, c), a.Ay.createElement("div", {
                className: (0,
                o.A)("JSSC0N8V", y)
            }, t), n && a.Ay.createElement("div", {
                className: (0,
                o.A)("OYmzCSp2", g)
            }, n), !d && i.pz && a.Ay.createElement("div", {
                className: "P53DrbWA"
            }))
        }
    }
    ,
    71690: (e, t, n) => {
        n.d(t, {
            A: () => A
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(29807)
          , s = n(87357)
          , l = n(35049)
          , c = n(4961)
          , d = n(59030)
          , m = n(21849)
          , u = n(18276);
        const A = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {peerId: n, forceShowSelf: a} = t;
            if (!n)
                return {};
            const o = (0,
            r.hds)(e, n)
              , i = (0,
            r.mBe)(e, n);
            return {
                chat: o,
                user: i,
                isSavedMessages: !a && i && i.isSelf
            }
        }
        ))((e => {
            let {icon: t, title: n, isMinimized: o, canClose: r, clickArg: A, chat: h, user: p, customPeer: y, className: g, fluid: f, isSavedMessages: v, withPeerColors: E, onClick: C} = e;
            const b = (0,
            d.A)();
            let w, S;
            if (t && n)
                w = a.Ay.createElement("div", {
                    className: "item-icon"
                }, a.Ay.createElement(u.A, {
                    name: t
                })),
                S = n;
            else if (y || p || h) {
                w = a.Ay.createElement(m.A, {
                    peer: y || p || h,
                    size: "small",
                    isSavedMessages: v
                });
                const e = y && b(y.titleKey) || (!h || p && !v ? (0,
                i.u0)(p) : (0,
                i.Js)(b, h, v));
                S = n || (e ? (0,
                c.A)(e) : void 0)
            }
            const I = (0,
            s.A)("PickerSelectedItem", g, (h?.isForum || y?.isAvatarSquare) && "square-avatar", o && "minimized", r && "closeable", f && "fluid", E && (0,
            l.y)(y || h || p));
            return a.Ay.createElement("div", {
                className: I,
                onClick: () => C(A),
                title: o ? S : void 0,
                dir: b.isRtl ? "rtl" : void 0
            }, w, !o && a.Ay.createElement("div", {
                className: "item-name",
                dir: "auto"
            }, S), r && a.Ay.createElement("div", {
                className: "item-remove"
            }, a.Ay.createElement(u.A, {
                name: "close"
            })))
        }
        )))
    }
    ,
    44784: (e, t, n) => {
        n.d(t, {
            A: () => ae
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(31481)
          , s = n(90709)
          , l = n(29807)
          , c = n(85982)
          , d = n(64713)
          , m = n(37836)
          , u = n(83868)
          , A = n(59852)
          , h = n(79882)
          , p = n(24899)
          , y = n(4961)
          , g = n(82117)
          , f = n(39351)
          , v = n(17712)
          , E = n(62587)
          , C = n(59030)
          , b = n(38691)
          , w = n(32754)
          , S = n(64493)
          , I = n(22720)
          , N = n(55158)
          , M = n(63152)
          , k = n(56440)
          , T = n(66644)
          , P = n(87357)
          , x = n(17663);
        const R = 1440
          , L = 10080;
        function B() {
            const e = new Date;
            e.setHours(0, 0, 0, 0);
            const t = e.getDay()
              , n = e.getDate() - t + (0 === t ? -6 : 1);
            return new Date(e.setDate(n)).getTime()
        }
        function O(e, t) {
            if (0 === t)
                return e;
            const n = [];
            for (const a of e) {
                let e = (a.startMinute + t) % L
                  , o = (a.endMinute + t) % L;
                e < 0 && (e += L),
                o <= 0 && (o += L),
                e > o ? (n.push({
                    startMinute: e,
                    endMinute: 10079
                }),
                n.push({
                    startMinute: 0,
                    endMinute: o
                })) : n.push({
                    startMinute: e,
                    endMinute: o
                })
            }
            return n.sort(( (e, t) => e.startMinute - t.startMinute)),
            n.reduce(( (e, t) => {
                const n = e[e.length - 1];
                return n && n.endMinute >= t.startMinute ? n.endMinute = Math.max(n.endMinute, t.endMinute) : e.push(t),
                e
            }
            ), [])
        }
        var F = n(82393)
          , D = n(98255)
          , U = n(32625)
          , K = n(19129)
          , j = n(37661)
          , z = n(30857)
          , $ = n(41036)
          , _ = n(18276);
        const J = "MPBKHdZL"
          , V = Array.from({
            length: 7
        }, ( (e, t) => t))
          , H = (0,
        a.ph)((e => {
            let {businessHours: t} = e;
            const n = (0,
            a.li)(null)
              , [o,i,r] = (0,
            j.A)(!1)
              , [s,l,c] = (0,
            j.A)(!1)
              , d = (0,
            C.A)()
              , m = (0,
            z.A)();
            (0,
            U.A)(m, 6e4);
            const u = (0,
            D.A)((e => e.timezones?.byId))
              , A = (0,
            K.A)(u, [u])
              , h = (0,
            a.Kr)(( () => {
                if (!A)
                    return 0;
                const e = A[t.timezoneId];
                return (-60 * (new Date).getTimezoneOffset() - e.utcOffset) / 60
            }
            ), [t.timezoneId, A])
              , p = (0,
            a.Kr)(( () => {
                const e = B()
                  , n = function(e) {
                    const t = {};
                    for (const n of e) {
                        const e = n.startMinute
                          , a = n.endMinute
                          , o = Math.floor(e / R)
                          , i = Math.floor((a - 1) / R);
                        for (let n = o; n <= i; n++)
                            t[n] || (t[n] = []),
                            t[n].push({
                                startMinute: Math.max(0, e - n * R),
                                endMinute: Math.min(R, a - n * R)
                            })
                    }
                    return t
                }(O(t.workHours, s ? h : 0))
                  , a = {};
                return V.forEach((t => {
                    const o = n[t];
                    a[t] = o ? o.map((t => {
                        let {startMinute: n, endMinute: a} = t;
                        return a - n == 1440 ? d("BusinessHoursDayFullOpened") : `${(0,
                        x.fU)(d, e + 60 * n * 1e3)} – ${(0,
                        x.fU)(d, e + 60 * a * 1e3)}`
                    }
                    )) : [d("BusinessHoursDayClosed")]
                }
                )),
                a
            }
            ), [t.workHours, s, d, h])
              , y = (0,
            a.Kr)(( () => {
                const e = O(t.workHours, h)
                  , n = B()
                  , a = ((new Date).getTime() - n) / 1e3 / 60;
                return e.some((e => {
                    let {startMinute: t, endMinute: n} = e;
                    return t <= a && a <= n
                }
                ))
            }
            ), [t.workHours, h])
              , g = (0,
            a.Kr)(( () => (new Date(Date.now() - (s ? 0 : 60 * h * 1e3)).getDay() + 6) % 7), [s, h])
              , f = (0,
            v.A)(( () => {
                o ? r() : i()
            }
            ))
              , E = (0,
            v.A)((e => {
                e.stopPropagation(),
                s ? c() : l()
            }
            ));
            (0,
            a.vJ)(( () => {
                if (!o)
                    return;
                const e = document.querySelector(`.${$.uo} > .${J}`);
                if (!e)
                    return;
                const t = e.offsetHeight;
                (0,
                T.RK)(( () => {
                    n.current.style.height = `${t}px`
                }
                ))
            }
            ), [o]);
            const b = (0,
            v.A)(( () => {
                const e = document.querySelector(`.${$.VY} > .${J}`);
                (0,
                T.YS)(( () => {
                    const t = e.offsetHeight;
                    (0,
                    T.RK)(( () => {
                        n.current.style.height = `${t}px`
                    }
                    ))
                }
                ))
            }
            ));
            return a.Ay.createElement(I.A, {
                icon: "clock",
                iconClassName: "rlM4Mbnn",
                multiline: !0,
                className: "Ef_0p5Qm",
                isStatic: o,
                ripple: !0,
                narrow: !0,
                withColorTransition: !0,
                onClick: f
            }, a.Ay.createElement("div", {
                className: "nHSmCUNs"
            }, a.Ay.createElement("div", {
                className: "JTZ8UnnP"
            }, a.Ay.createElement("div", null, d("BusinessHoursProfile")), a.Ay.createElement("div", {
                className: (0,
                P.A)("JVL7ZnnJ", y && "segAfYXs")
            }, d(y ? "BusinessHoursProfileNowOpen" : "BusinessHoursProfileNowClosed"))), a.Ay.createElement(_.A, {
                className: "dYxw2cFn",
                name: o ? "up" : "down"
            })), o && a.Ay.createElement("div", {
                className: "lp9VIV1o"
            }, Boolean(h) && a.Ay.createElement("div", {
                className: "gVwflFhz",
                role: "button",
                tabIndex: 0,
                onMouseDown: F.TF ? void 0 : E,
                onClick: F.TF ? E : void 0
            }, d(s ? "BusinessHoursProfileSwitchMy" : "BusinessHoursProfileSwitchLocal")), a.Ay.createElement($.Ay, {
                className: "WKgL_XiP",
                ref: n,
                name: "fade",
                activeKey: Number(s),
                onStart: b
            }, a.Ay.createElement("dl", {
                className: J
            }, V.map((e => a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("dt", {
                className: (0,
                P.A)("cmxPqAof", e === g && "YZVvP_56")
            }, (0,
            x.wv)(d, 6 === e ? 0 : e + 1)), a.Ay.createElement("dd", {
                className: "Rs0VPgpq"
            }, p[e].map((e => a.Ay.createElement("div", null, e)))))))))))
        }
        ));
        var q = n(87894)
          , G = n(58554)
          , W = n(14737)
          , Z = n(82855);
        const Q = ["🎉", "🎆", "🎈"]
          , Y = (0,
        a.ph)((0,
        o.EK)((e => {
            const {birthdayNumbers: t, animatedEmojiEffects: n} = e;
            return {
                birthdayNumbers: t,
                animatedEmojiEffects: n,
                isPremiumPurchaseBlocked: (0,
                l.n_C)(e)
            }
        }
        ))((e => {
            let {user: t, birthday: n, isPremiumPurchaseBlocked: r, birthdayNumbers: l, animatedEmojiEffects: c, isInSettings: d} = e;
            const {openPremiumGiftModal: m, requestConfetti: u} = (0,
            o.ko)()
              , A = (0,
            a.li)(null)
              , h = (0,
            a.li)(!1)
              , [p,g,f] = (0,
            j.A)()
              , E = (0,
            C.A)()
              , {formattedDate: b, isToday: w, age: S} = (0,
            a.Kr)(( () => {
                const e = new Date
                  , t = new Date;
                return n.year && t.setFullYear(n.year),
                t.setMonth(n.month - 1),
                t.setDate(n.day),
                t.setHours(0, 0, 0, 0),
                {
                    formattedDate: (0,
                    x.A)(t, E.code, !0, "long"),
                    isToday: t.getDate() === e.getDate() && t.getMonth() === e.getMonth(),
                    age: n.year && X(t)
                }
            }
            ), [n, E])
              , N = (0,
            a.Kr)(( () => {
                if (!S || !w)
                    return;
                const e = l?.stickers?.filter((e => {
                    let {emoji: t} = e;
                    return t?.endsWith("️⃣")
                }
                ));
                if (!e)
                    return;
                const t = (0,
                q.dU)(e, "emoji");
                return S.toString().split("").map((e => t[e + "️⃣"]))
            }
            ), [S, l?.stickers, w])
              , M = (0,
            a.Kr)(( () => {
                if (!w)
                    return;
                const e = Q[Math.floor(Math.random() * Q.length)];
                return c?.stickers?.find((t => {
                    let {emoji: n} = t;
                    return n === e
                }
                ))
            }
            ), [c?.stickers, w]);
            (0,
            a.vJ)(( () => {
                if (w && N && (N.forEach((e => {
                    const t = (0,
                    s.Mw)(e, "preview");
                    G.hd(t, i.qZ.BlobUrl)
                }
                )),
                M)) {
                    const e = (0,
                    s.Mw)(M, "preview");
                    G.hd(e, i.qZ.BlobUrl)
                }
            }
            ), [M, w, N]),
            (0,
            W.A)(f, p ? 3e3 : void 0),
            (0,
            a.vJ)(( () => {
                if (p) {
                    h.current = !0;
                    const e = document.getElementById(d ? "LeftColumn" : "RightColumn");
                    if (!e)
                        return;
                    (0,
                    T.YS)(( () => {
                        const {top: t, left: n, width: a, height: o} = e.getBoundingClientRect();
                        u({
                            top: t,
                            left: n,
                            width: a,
                            height: o,
                            style: "top-down"
                        })
                    }
                    ))
                }
            }
            ), [d, p]);
            const k = `ProfileBirthday${w ? "Today" : ""}Value${S ? "Year" : ""}`
              , R = w && !t.isPremium && !t.isSelf && !r
              , L = (0,
            v.A)(( () => {
                m({
                    forUserIds: [t.id]
                })
            }
            ))
              , B = (0,
            v.A)(( () => {
                w && (R && h.current ? L() : g())
            }
            ))
              , O = !w && !R;
            return a.Ay.createElement("div", {
                className: "wCp6TBYF"
            }, a.Ay.createElement(I.A, {
                icon: "calendar",
                secondaryIcon: R ? "gift" : void 0,
                secondaryIconClassName: "c4HDQNGJ",
                multiline: !0,
                narrow: !0,
                ref: A,
                ripple: !O,
                onClick: B,
                isStatic: O,
                onSecondaryIconClick: L
            }, a.Ay.createElement("div", {
                className: "title",
                dir: E.isRtl ? "rtl" : void 0
            }, (0,
            y.A)(E(k, [b, S], void 0, S))), a.Ay.createElement("span", {
                className: "subtitle"
            }, E(w ? "ProfileBirthdayToday" : "ProfileBirthday"))), p && F.ol && N?.map(( (e, t) => a.Ay.createElement("div", {
                className: (0,
                P.A)("lQeU96Fj", t > 0 && "e1ezfWJb"),
                style: `--digit-offset: ${t}`
            }, a.Ay.createElement(Z.A, {
                containerRef: A,
                sticker: e,
                size: 128,
                forceAlways: !0
            })))), p && M && a.Ay.createElement("div", {
                className: "cFEXGUih"
            }, a.Ay.createElement(Z.A, {
                containerRef: A,
                sticker: M,
                size: 288,
                shouldLoop: !0,
                forceAlways: !0
            })))
        }
        )));
        function X(e) {
            const t = new Date;
            let n = t.getFullYear() - e.getFullYear();
            const a = t.getMonth() - e.getMonth();
            return (a < 0 || 0 === a && t.getDate() < e.getDate()) && n--,
            n
        }
        const ee = "UZbkeFDB"
          , te = {
            width: 64,
            height: 64,
            zoom: 15
        }
          , ne = (0,
        m.sg)((e => e()), 500, !1)
          , ae = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatOrUserId: n, isSavedDialog: a} = t;
            const {countryList: {phoneCodes: o}} = e
              , i = n ? (0,
            l.hds)(e, n) : void 0
              , r = n ? (0,
            l.mBe)(e, n) : void 0
              , c = i?.isForum
              , d = i && (0,
            s.W1)(i, (0,
            l.$5S)(e), (0,
            l.GrP)(e))
              , {threadId: m} = (0,
            l.Xf0)(e) || {}
              , u = c && m ? Number(m) : void 0
              , A = i && (0,
            l.AWZ)(e, i.id)
              , h = r && (0,
            l.vGo)(e, r.id)
              , p = A?.inviteLink
              , y = h?.bio || A?.about
              , g = i && !r && (!(0,
            s.WX)(i) && !(0,
            s.Sq)(i, "inviteUsers") || (0,
            s.ub)(i, "inviteUsers"))
              , f = u ? (0,
            l.sZk)(e, n, u) : void 0
              , v = !a && e.chats.listIds.saved?.includes(n)
              , E = h?.personalChannelId ? (0,
            l.hds)(e, h.personalChannelId) : void 0
              , C = r?.hasMainMiniApp;
            return {
                phoneCodeList: o,
                chat: i,
                user: r,
                userFullInfo: h,
                canInviteUsers: g,
                isMuted: d,
                topicId: u,
                chatInviteLink: p,
                description: y,
                topicLink: f,
                hasSavedMessages: v,
                personalChannel: E,
                hasMainMiniApp: C
            }
        }
        ))((e => {
            let {chatOrUserId: t, user: n, chat: l, userFullInfo: m, isInSettings: T, canInviteUsers: P, isMuted: x, phoneCodeList: R, topicId: L, description: B, chatInviteLink: O, topicLink: F, hasSavedMessages: D, personalChannel: U, hasMainMiniApp: K} = e;
            const {showNotification: j, updateChatMutedState: z, updateTopicMutedState: $, loadPeerStories: _, openSavedDialog: J, openMapModal: V, requestCollectibleInfo: q, requestMainWebView: G} = (0,
            o.ko)()
              , {id: W, usernames: Z, phoneNumber: Q, isSelf: X} = n || {}
              , {id: ae, usernames: oe} = l || {}
              , ie = W || ae
              , {businessLocation: re, businessWorkHours: se, personalChannelMessageId: le, birthday: ce} = m || {}
              , de = (0,
            C.A)()
              , me = (0,
            f.A)()
              , [ue,Ae] = (0,
            a.J0)(!x);
            (0,
            a.vJ)(( () => {
                Ae(!x)
            }
            ), [x]),
            (0,
            g.A)((e => {
                let[t] = e;
                ie && t !== ie && (n || l && (0,
                s.WX)(l)) && _({
                    peerId: ie
                })
            }
            ), [ie, l, n]);
            const {width: he, height: pe, zoom: ye} = te
              , ge = (0,
            b.A)()
              , fe = re?.geo && (0,
            s.rt)(re.geo, he, pe, ye, ge)
              , ve = (0,
            E.A)(fe)
              , Ee = (0,
            a.Kr)(( () => {
                if (re?.geo)
                    return ve ? a.Ay.createElement("img", {
                        src: ve,
                        alt: "",
                        className: ee
                    }) : a.Ay.createElement(N.A, {
                        className: ee
                    })
            }
            ), [re, ve])
              , Ce = Boolean(L && L !== i.l3)
              , be = l && (0,
            s.WX)(l) || n?.isPremium
              , we = (0,
            a.Kr)(( () => {
                const e = Z?.filter((e => e.isActive));
                return e?.length ? e : void 0
            }
            ), [Z])
              , Se = (0,
            a.Kr)(( () => {
                const e = n ? void 0 : oe?.filter((e => e.isActive));
                return e?.length ? e : void 0
            }
            ), [oe, n])
              , Ie = (0,
            a.Kr)(( () => {
                if (l)
                    return Ce ? F : (0,
                    s.L7)(l) || O
            }
            ), [l, Ce, F, O])
              , Ne = (0,
            v.A)(( () => {
                const {address: e, geo: t} = re;
                if (!t)
                    return (0,
                    c.eM)(e),
                    void j({
                        message: de("BusinessLocationCopied")
                    });
                V({
                    geoPoint: t,
                    zoom: ye
                })
            }
            ))
              , Me = (0,
            v.A)(( () => {
                Ae((e => {
                    const t = !e;
                    return ne(( () => {
                        Ce ? $({
                            chatId: ae,
                            topicId: L,
                            isMuted: !t
                        }) : z({
                            chatId: ae,
                            isMuted: !t
                        })
                    }
                    )),
                    t
                }
                ))
            }
            ))
              , ke = (0,
            v.A)(( () => {
                J({
                    chatId: t
                })
            }
            ));
            function Te(e, t) {
                (0,
                c.eM)(e),
                j({
                    message: `${t} was copied`
                })
            }
            const Pe = Q && (0,
            d.Ox)(R, Q)
              , xe = (0,
            v.A)(( () => {
                Q?.length === r.PGI && Q.startsWith(r._Bb) ? q({
                    collectible: Q,
                    peerId: ie,
                    type: "phone"
                }) : Te(Pe, de("Phone"))
            }
            ))
              , Re = (0,
            v.A)(( (e, t) => {
                e.isEditable ? Te((0,
                p.A)(e.username, t), de(t ? "Link" : "Username")) : q({
                    collectible: e.username,
                    peerId: ie,
                    type: "username"
                })
            }
            ))
              , Le = (0,
            v.A)(( () => {
                if (!l)
                    return;
                const e = n?.id;
                if (!e)
                    return;
                const t = (0,
                A.A)();
                G({
                    botId: e,
                    peerId: e,
                    theme: t,
                    shouldMarkBotTrusted: !0
                })
            }
            ))
              , Be = me("ProfileOpenAppAbout", {
                terms: a.Ay.createElement(k.A, {
                    text: me("ProfileOpenAppTerms"),
                    url: me("ProfileBotOpenAppInfoLink")
                })
            }, {
                withNodes: !0
            });
            if (l && !l.isRestricted && (!X || T))
                return a.Ay.createElement("div", {
                    className: "ChatExtra"
                }, U && a.Ay.createElement("div", {
                    className: "HP5EJx7s"
                }, a.Ay.createElement("h3", {
                    className: "cHyTGri2"
                }, de("ProfileChannel")), a.Ay.createElement("span", {
                    className: "kYd2GrmU"
                }, de("Subscribers", U.membersCount, "i")), a.Ay.createElement(w.A, {
                    chatId: U.id,
                    orderDiff: 0,
                    animationType: h.I.None,
                    isPreview: !0,
                    previewMessageId: le,
                    className: "qOJwhXMC"
                })), Boolean(Pe?.length) && a.Ay.createElement(I.A, {
                    icon: "phone",
                    multiline: !0,
                    narrow: !0,
                    ripple: !0,
                    onClick: xe
                }, a.Ay.createElement("span", {
                    className: "title",
                    dir: me.isRtl ? "rtl" : void 0
                }, Pe), a.Ay.createElement("span", {
                    className: "subtitle"
                }, de("Phone"))), we && Oe(we), B && Boolean(B.length) && a.Ay.createElement(I.A, {
                    icon: "info",
                    multiline: !0,
                    narrow: !0,
                    isStatic: !0,
                    allowSelection: !0
                }, a.Ay.createElement("span", {
                    className: "title word-break allow-selection",
                    dir: me.isRtl ? "rtl" : void 0
                }, (0,
                y.A)(B, ["br", be ? "links" : "tg_links", "emoji"])), a.Ay.createElement("span", {
                    className: "subtitle"
                }, de(W ? "UserBio" : "Info"))), Se && !Ce && Oe(Se, !0), (!Se && P || Ce) && Ie && a.Ay.createElement(I.A, {
                    icon: "link",
                    multiline: !0,
                    narrow: !0,
                    ripple: !0,
                    onClick: () => Te(Ie, de("SetUrlPlaceholder"))
                }, a.Ay.createElement("div", {
                    className: "title"
                }, Ie), a.Ay.createElement("span", {
                    className: "subtitle"
                }, de("SetUrlPlaceholder"))), ce && a.Ay.createElement(Y, {
                    key: ie,
                    birthday: ce,
                    user: n,
                    isInSettings: T
                }), K && a.Ay.createElement(I.A, {
                    multiline: !0,
                    isStatic: !0,
                    narrow: !0
                }, a.Ay.createElement(S.A, {
                    className: "x925YeS3",
                    size: "smaller",
                    onClick: Le
                }, de("ProfileBotOpenApp")), a.Ay.createElement("div", {
                    className: "IrqRJFxm"
                }, Be)), !T && a.Ay.createElement(I.A, {
                    icon: "unmute",
                    narrow: !0,
                    ripple: !0,
                    onClick: Me
                }, a.Ay.createElement("span", null, de("Notifications")), a.Ay.createElement(M.A, {
                    id: "group-notifications",
                    label: W ? "Toggle User Notifications" : "Toggle Chat Notifications",
                    checked: ue,
                    inactive: !0
                })), se && a.Ay.createElement(H, {
                    businessHours: se
                }), re && a.Ay.createElement(I.A, {
                    icon: "location",
                    ripple: !0,
                    multiline: !0,
                    narrow: !0,
                    rightElement: Ee,
                    onClick: Ne
                }, a.Ay.createElement("div", {
                    className: "title"
                }, re.address), a.Ay.createElement("span", {
                    className: "subtitle"
                }, de("BusinessProfileLocation"))), D && !T && a.Ay.createElement(I.A, {
                    icon: "saved-messages",
                    narrow: !0,
                    ripple: !0,
                    onClick: ke
                }, a.Ay.createElement("span", null, de("SavedMessagesTab"))));
            function Oe(e, t) {
                const [n,...o] = e
                  , i = o.length ? de("UsernameAlso", "%USERNAMES%").split("%").map((e => "USERNAMES" === e ? a.Ay.createElement(a.Ay.Fragment, null, o.map(( (e, n) => a.Ay.createElement(a.Ay.Fragment, null, n > 0 ? ", " : "", a.Ay.createElement("a", {
                    key: e.username,
                    href: (0,
                    p.A)(e.username, !0),
                    onMouseDown: u.A,
                    onClick: n => {
                        (0,
                        u.A)(n),
                        Re(e, t)
                    }
                    ,
                    className: "text-entity-link username-link"
                }, (0,
                p.A)(e.username)))))) : e)) : void 0;
                return a.Ay.createElement(I.A, {
                    icon: t ? "link" : "mention",
                    multiline: !0,
                    narrow: !0,
                    ripple: !0,
                    onClick: () => {
                        Re(n, t)
                    }
                }, a.Ay.createElement("span", {
                    className: "title",
                    dir: me.isRtl ? "rtl" : void 0
                }, (0,
                p.A)(n.username, t)), a.Ay.createElement("span", {
                    className: "subtitle"
                }, i && a.Ay.createElement("span", {
                    className: "other-usernames"
                }, i), de(t ? "Link" : "Username")))
            }
        }
        )))
    }
    ,
    83594: (e, t, n) => {
        n.d(t, {
            A: () => m
        });
        var a = n(84051)
          , o = n(90709)
          , i = n(87357)
          , r = n(95807)
          , s = n(82393)
          , l = n(62587)
          , c = n(87412);
        const d = "PZAuNVZH"
          , m = (0,
        a.ph)((e => {
            let {reaction: t, isLottie: n, className: m, particleSize: u, onEnded: A} = e;
            const h = (0,
            o.aL)(t.documentId)
              , p = (0,
            l.A)(n ? void 0 : h)
              , y = (0,
            a.Kr)(( () => s.ol ? Array.from({
                length: 7
            }).map(( () => function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20;
                const t = (e / 2 + Math.random() * e * 3) * (Math.random() > .5 ? 1 : -1)
                  , n = e + Math.random() * e * 4;
                return `M 0 0 C 0 0 ${t} ${-n - e} ${t} ${n}`
            }(u))) : []), [u]);
            if (p || n)
                return a.Ay.createElement("div", {
                    className: (0,
                    i.A)("aInga6VW", m),
                    style: (0,
                    r.A)(Boolean(u) && `--particle-size: ${u}px`)
                }, y.map(( (e, o) => {
                    const i = `--offset-path: path('${e}');`;
                    return n ? a.Ay.createElement(c.A, {
                        documentId: t.documentId,
                        className: d,
                        style: i,
                        withSharedAnimation: !0,
                        size: u,
                        onAnimationEnd: 0 === o ? A : void 0
                    }) : a.Ay.createElement("img", {
                        src: p,
                        alt: "",
                        className: d,
                        style: i,
                        draggable: !1,
                        onAnimationEnd: 0 === o ? A : void 0
                    })
                }
                )))
        }
        ))
    }
    ,
    23470: (e, t, n) => {
        n.d(t, {
            A: () => S
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(29807)
          , s = n(87357)
          , l = n(43336)
          , c = n(76023)
          , d = n(37661)
          , m = n(5912)
          , u = n(17712)
          , A = n(62587)
          , h = n(50680)
          , p = n(47483)
          , y = n(18104)
          , g = n(87412)
          , f = n(45603)
          , v = n(83594);
        const E = {
            root: "O9uCTt5C",
            "animated-icon": "HiI6SMxF",
            animatedIcon: "HiI6SMxF",
            effect: "NhFcTGja",
            animating: "ikfZ6Igz",
            withEffectOnly: "jjRJmHCg"
        }
          , C = 1.5 * c.$
          , b = 6.5 * c.$
          , w = c.$
          , S = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {containerId: n} = t;
            const {genericEmojiEffects: a, reactions: o} = e
              , {activeReactions: i} = (0,
            r.nTw)(e)
              , s = (0,
            r.xYJ)(e, "reactionEffects");
            return {
                activeReactions: i?.[n],
                availableReactions: o.availableReactions,
                genericEffects: a,
                withEffects: s
            }
        }
        ))((e => {
            let {containerId: t, reaction: n, className: r, size: c=C, effectSize: S=b, activeReactions: I, availableReactions: N, genericEffects: M, withEffects: k, withEffectOnly: T, shouldPause: P, shouldLoop: x, loopLimit: R, observeIntersection: L} = e;
            const {stopActiveReaction: B} = (0,
            o.ko)()
              , O = (0,
            a.li)(null)
              , F = "documentId"in n
              , D = (0,
            a.Kr)(( () => N?.find((e => (0,
            i.a0)(e.reaction, n)))), [N, n])
              , U = D?.centerIcon?.id
              , {customEmoji: K} = (0,
            p.A)(F ? n.documentId : void 0)
              , j = (0,
            a.Kr)(( () => {
                if (!F)
                    return D?.aroundAnimation?.id;
                if (!K)
                    return;
                const e = N?.find((e => e.reaction.emoticon === K.emoji))?.aroundAnimation?.id;
                return e
            }
            ), [D, N, K, F])
              , z = (0,
            a.Kr)(( () => {
                if (j)
                    return j;
                if (!M?.stickers)
                    return;
                const {stickers: e} = M;
                return e[Math.floor(Math.random() * e.length)].id
            }
            ), [j, M])
              , $ = (0,
            m.Vz)(O, L)
              , _ = U && `sticker${U}`
              , J = z && `sticker${z}`
              , V = (0,
            A.A)(_, !U)
              , H = (0,
            A.A)(J, !z)
              , q = (0,
            a.Kr)(( () => I?.find((e => (0,
            i.a0)(e, n)))), [I, n])
              , G = Boolean(k && q && (F || V) && H)
              , W = $ && (G && !T || x)
              , {shouldRender: Z, transitionClassNames: Q} = (0,
            h.A)(G, void 0, !0, "slow")
              , {shouldRender: Y, transitionClassNames: X} = (0,
            h.A)(W, void 0, !0, "slow")
              , ee = (0,
            u.A)(( () => {
                B({
                    containerId: t,
                    reaction: n
                })
            }
            ))
              , [te,ne,ae] = (0,
            d.A)()
              , oe = !(F || W && te)
              , {shouldRender: ie, transitionClassNames: re} = (0,
            h.A)(oe, void 0, !0)
              , se = (0,
            s.A)(E.root, Z && E.animating, T && E.withEffectOnly, r);
            return a.Ay.createElement("div", {
                className: se,
                ref: O
            }, !T && ie && a.Ay.createElement(f.A, {
                className: re,
                reaction: n,
                availableReactions: N,
                size: c,
                observeIntersection: L
            }), !T && F && a.Ay.createElement(g.A, {
                documentId: n.documentId,
                className: E.customEmoji,
                size: c,
                noPlay: P,
                noVideoOnMobile: !0,
                loopLimit: R,
                observeIntersectionForPlaying: L
            }), Y && !F && a.Ay.createElement(y.A, {
                key: `${U}-${c}`,
                className: (0,
                s.A)(E.animatedIcon, X),
                size: (0,
                l.Ki)(1.9 * c),
                tgsUrl: V,
                play: $ && !P,
                noLoop: !x,
                onLoad: ne,
                onEnded: ae
            }), Z && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(y.A, {
                key: `${z}-${S}`,
                className: (0,
                s.A)(E.effect, Q),
                size: S,
                tgsUrl: H,
                play: $,
                noLoop: !0,
                onEnded: ee
            }), F && !j && $ && a.Ay.createElement(v.A, {
                reaction: n,
                className: Q,
                particleSize: Math.max(.5 * c, w),
                onEnded: ee
            })))
        }
        )))
    }
    ,
    97967: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(80089)
          , i = n(80464);
        const r = e => {
            const {isOpen: t} = e
              , n = (0,
            i.A)(o.ar.Extra, "ChatFolderModal", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
    }
    ,
    97046: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(80089)
          , i = n(80464);
        const r = e => {
            const {isOpen: t} = e
              , n = (0,
            i.A)(o.ar.Extra, "MuteChatModal", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
    }
    ,
    32754: (e, t, n) => {
        n.d(t, {
            A: () => L
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(89925)
          , s = n(90709)
          , l = n(26129)
          , c = n(29807)
          , d = n(87357)
          , m = n(66414)
          , u = n(82393)
          , A = n(98255)
          , h = n(43874)
          , p = n(47067)
          , y = n(49746)
          , g = n(37661)
          , f = n(5912)
          , v = n(17712)
          , E = n(50680)
          , C = n(53188)
          , b = n(21849)
          , w = n(54314)
          , S = n(34431)
          , I = n(81642)
          , N = n(94285)
          , M = n(22720)
          , k = n(97967)
          , T = n(97046)
          , P = n(24807);
        const x = "AA5s1Pu4"
          , R = (0,
        a.ph)((e => {
            let {isSelected: t, isActive: n, isMobile: o} = e;
            return a.Ay.createElement("div", {
                className: (0,
                d.A)("byPckqUT", n && "IsUWP16T", t && !o && "qy2i51dM")
            }, a.Ay.createElement("div", {
                className: "nl36F75B"
            }, a.Ay.createElement("div", {
                className: x
            }), a.Ay.createElement("div", {
                className: x
            }), a.Ay.createElement("div", {
                className: x
            })))
        }
        ))
          , L = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n, isSavedDialog: a, isPreview: o, previewMessageId: r} = t;
            const d = (0,
            c.hds)(e, n);
            if (!d)
                return {
                    currentUserId: e.currentUserId
                };
            const m = r || (0,
            c.ZZX)(e, n, a ? "saved" : "all")
              , u = r ? (0,
            c.O5q)(e, n, r) : (0,
            c.yHC)(e, n, a ? "saved" : "all")
              , {senderId: A, isOutgoing: h, forwardInfo: p} = u || {}
              , y = a ? p?.fromId : A
              , g = u && (0,
            l.Q)(u)?.replyToMsgId
              , f = y ? (0,
            c.PVB)(e, y) : void 0
              , v = u ? (0,
            s.mK)(u) : void 0
              , E = v && g ? (0,
            c.O5q)(e, d.id, g) : void 0
              , {targetUserIds: C, targetChatId: b} = v || {}
              , w = (0,
            s.e7)(d)
              , {chatId: S, threadId: I, type: N} = (0,
            c.Xf0)(e) || {}
              , M = !o && n === S && (a ? n === I : I === i.l3)
              , k = d.isForum && n === S || n === (0,
            c.nTw)(e).forumPanelChatId
              , T = w ? (0,
            c.mBe)(e, w) : void 0
              , P = w ? (0,
            c.K0y)(e, w) : void 0
              , x = u && (0,
            c.nkm)(e, u)
              , R = (0,
            c.C5H)(e, n, i.l3, "typingStatus")
              , L = (0,
            c.xyP)(e, n);
            return {
                chat: d,
                isMuted: (0,
                s.W1)(d, (0,
                c.$5S)(e), (0,
                c.GrP)(e)),
                lastMessageSender: f,
                actionTargetUserIds: C,
                actionTargetChatId: b,
                actionTargetMessage: E,
                draft: (0,
                c.GA4)(e, n, i.l3),
                isSelected: M,
                isSelectedForum: k,
                isForumPanelOpen: (0,
                c.clw)(e),
                canScrollDown: M && "thread" === N,
                canChangeFolder: (e.chatFolders.orderedIds?.length || 0) > 1,
                ...h && u && {
                    lastMessageOutgoingStatus: (0,
                    c.Tl2)(e, u)
                },
                user: T,
                userStatus: P,
                lastMessageTopic: x,
                typingStatus: R,
                withInterfaceAnimations: (0,
                c.PKK)(e),
                lastMessage: u,
                lastMessageId: m,
                currentUserId: e.currentUserId,
                listedTopicIds: L?.listedTopicIds,
                topics: L?.topicsById,
                isSynced: e.isSynced
            }
        }
        ))((e => {
            let {chatId: t, folderId: n, orderDiff: l, animationType: x, isPinned: L, listedTopicIds: B, topics: O, observeIntersection: F, chat: D, isMuted: U, user: K, userStatus: j, actionTargetUserIds: z, lastMessageSender: $, lastMessageOutgoingStatus: _, actionTargetMessage: J, actionTargetChatId: V, offsetTop: H, draft: q, withInterfaceAnimations: G, isSelected: W, isSelectedForum: Z, isForumPanelOpen: Q, canScrollDown: Y, canChangeFolder: X, lastMessageTopic: ee, typingStatus: te, lastMessageId: ne, lastMessage: ae, isSavedDialog: oe, currentUserId: ie, isPreview: re, previewMessageId: se, className: le, isSynced: ce, onDragEnter: de} = e;
            const {openChat: me, openSavedDialog: ue, toggleChatInfo: Ae, focusLastMessage: he, focusMessage: pe, loadTopics: ye, openForumPanel: ge, closeForumPanel: fe, setShouldCloseRightColumn: ve} = (0,
            o.ko)()
              , {isMobile: Ee} = (0,
            h.Ay)()
              , [Ce,be,we] = (0,
            g.A)()
              , [Se,Ie,Ne] = (0,
            g.A)()
              , [Me,ke,Te] = (0,
            g.A)()
              , [Pe,xe,Re] = (0,
            g.A)()
              , [Le,Be,Oe] = (0,
            g.A)()
              , [Fe,De,Ue] = (0,
            g.A)()
              , [Ke,je,ze] = (0,
            g.A)()
              , [$e,_e,Je] = (0,
            g.A)()
              , {isForum: Ve, isForumAsMessages: He} = D || {};
            (0,
            y.A)(oe ? ie : t, ne, ae);
            const {renderSubtitle: qe, ref: Ge} = (0,
            C.A)({
                chat: D,
                chatId: t,
                lastMessage: ae,
                typingStatus: te,
                draft: q,
                actionTargetMessage: J,
                actionTargetUserIds: z,
                actionTargetChatId: V,
                lastMessageTopic: ee,
                lastMessageSender: $,
                observeIntersection: F,
                animationType: x,
                withInterfaceAnimations: G,
                orderDiff: l,
                isSavedDialog: oe,
                isPreview: re,
                topics: O
            })
              , We = (0,
            A.A)(c.sRo)
              , Ze = (0,
            v.A)(( () => {
                const e = Ee && He;
                if (Ee && ve({
                    value: !0
                }),
                re)
                    pe({
                        chatId: t,
                        messageId: se
                    });
                else {
                    if (oe)
                        return ue({
                            chatId: t,
                            noForumTopicPanel: !0
                        }, {
                            forceOnHeavyAnimation: !0
                        }),
                        void (Ee && Ae({
                            force: !1
                        }));
                    if (Ve) {
                        if (Q)
                            return void fe(void 0, {
                                forceOnHeavyAnimation: !0
                            });
                        if (e || ge({
                            chatId: t
                        }, {
                            forceOnHeavyAnimation: !0
                        }),
                        !He)
                            return
                    }
                    me({
                        id: t,
                        noForumTopicPanel: e,
                        shouldReplaceHistory: !0
                    }, {
                        forceOnHeavyAnimation: !0
                    }),
                    W && Y && he()
                }
            }
            ))
              , Qe = (0,
            v.A)((e => {
                e.preventDefault(),
                de?.(t)
            }
            ))
              , Ye = (0,
            v.A)(( () => {
                Be(),
                be()
            }
            ))
              , Xe = (0,
            v.A)(( () => {
                De(),
                Ie()
            }
            ))
              , et = (0,
            v.A)(( () => {
                je(),
                ke()
            }
            ))
              , tt = (0,
            v.A)(( () => {
                _e(),
                xe()
            }
            ))
              , nt = (0,
            p.A)({
                chat: D,
                user: K,
                handleDelete: Ye,
                handleMute: Xe,
                handleChatFolderChange: et,
                handleReport: tt,
                folderId: n,
                isPinned: L,
                isMuted: U,
                canChangeFolder: X,
                isSavedDialog: oe,
                currentUserId: ie,
                isPreview: re
            })
              , at = (0,
            f.Vz)(Ge, D ? F : void 0);
            (0,
            a.vJ)(( () => {
                at && Ve && ce && void 0 === B && ye({
                    chatId: t
                })
            }
            ), [t, B, ce, Ve, at]);
            const ot = K && j && (0,
            s.PF)(K, j)
              , {hasShownClass: it} = (0,
            E.A)(ot)
              , rt = (0,
            a.Kr)(( () => {
                if (u.OS)
                    return oe ? `#${(0,
                    m.az)(ie, "thread", t)}` : `#${(0,
                    m.az)(t, "thread", i.l3)}`
            }
            ), [t, ie, oe]);
            if (!D)
                return;
            const st = K || D
              , lt = (0,
            d.A)("Chat chat-item-clickable", (0,
            s.L8)(t) ? "private" : "group", Ve && "forum", W && "selected", Z && "selected-forum", re && "standalone", le);
            return a.Ay.createElement(M.A, {
                ref: Ge,
                className: lt,
                href: rt,
                style: `top: ${H}px`,
                ripple: !Ve && !Ee,
                contextActions: nt,
                onClick: Ze,
                onDragEnter: Qe,
                withPortalForMenu: !0
            }, a.Ay.createElement("div", {
                className: (0,
                d.A)("status", "status-clickable")
            }, a.Ay.createElement(b.A, {
                peer: st,
                isSavedMessages: K?.isSelf,
                isSavedDialog: oe,
                size: re ? "medium" : "large",
                withStory: !K?.isSelf,
                withStoryGap: it,
                storyViewerOrigin: r.G9.ChatList,
                storyViewerMode: "single-peer"
            }), a.Ay.createElement("div", {
                className: "avatar-badge-wrapper"
            }, a.Ay.createElement("div", {
                className: (0,
                d.A)("avatar-online", it && "avatar-online-shown")
            }), a.Ay.createElement(P.A, {
                chat: D,
                isMuted: U,
                shouldShowOnlyMostImportant: !0,
                forceHidden: We,
                topics: O
            })), D.isCallActive && D.isCallNotEmpty && a.Ay.createElement(R, {
                isMobile: Ee,
                isSelected: W,
                isActive: G
            })), a.Ay.createElement("div", {
                className: "info"
            }, a.Ay.createElement("div", {
                className: "info-row"
            }, a.Ay.createElement(S.A, {
                peer: st,
                withEmojiStatus: !0,
                isSavedMessages: t === K?.id && K?.isSelf,
                isSavedDialog: oe,
                observeIntersection: F
            }), U && !oe && a.Ay.createElement("i", {
                className: "icon icon-muted"
            }), a.Ay.createElement("div", {
                className: "separator"
            }), ae && a.Ay.createElement(I.A, {
                message: ae,
                outgoingStatus: oe ? void 0 : _,
                draftDate: q?.date
            })), a.Ay.createElement("div", {
                className: "subtitle"
            }, qe(), !re && a.Ay.createElement(P.A, {
                chat: D,
                isPinned: L,
                isMuted: U,
                isSavedDialog: oe,
                topics: O
            }))), Le && a.Ay.createElement(w.A, {
                isOpen: Ce,
                onClose: we,
                onCloseAnimationEnd: Oe,
                chat: D,
                isSavedDialog: oe
            }), Fe && a.Ay.createElement(T.A, {
                isOpen: Se,
                onClose: Ne,
                onCloseAnimationEnd: Ue,
                chatId: t
            }), Ke && a.Ay.createElement(k.A, {
                isOpen: Me,
                onClose: Te,
                onCloseAnimationEnd: ze,
                chatId: t
            }), $e && a.Ay.createElement(N.A, {
                isOpen: Pe,
                onClose: Re,
                onCloseAnimationEnd: Je,
                peerId: t,
                subject: "peer"
            }))
        }
        )))
    }
    ,
    24807: (e, t, n) => {
        n.d(t, {
            A: () => d
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(22237)
          , r = n(14242)
          , s = n(19129)
          , l = n(68292)
          , c = n(26607);
        const d = (0,
        a.ph)((e => {
            let {topic: t, topics: n, chat: d, isPinned: m, isMuted: u, shouldShowOnlyMostImportant: A, wasTopicOpened: h, forceHidden: p, isSavedDialog: y} = e;
            const {unreadMentionsCount: g=0, unreadReactionsCount: f=0} = d.isForum ? {} : d
              , v = !m && t && !h
              , E = d.isForum && !t
              , C = (0,
            a.Kr)(( () => E && n ? Object.values(n).filter((e => {
                let {unreadCount: t} = e;
                return t
            }
            )) : void 0), [n, E])
              , b = (0,
            a.Kr)(( () => E ? u && C?.filter((e => !1 === e.isMuted)).length || C?.length : (t || d).unreadCount), [d, t, C, E, u])
              , w = (0,
            a.Kr)(( () => {
                const e = n && Object.values(n).some((e => !e.isMuted && e.unreadCount));
                return u || n && !e
            }
            ), [n, u])
              , S = !t && d.hasUnreadMark
              , I = !(0,
            s.A)(( () => (0,
            i.Hp)(p) ? p() : p), [p]) && Boolean(b || g || S || m || f || v)
              , N = Boolean((b || S) && !y)
              , M = (0,
            o.A)("ChatBadge", w && "muted", !N && m && "pinned", N && "unread");
            return a.Ay.createElement(c.A, {
                isCustom: !0,
                className: "ChatBadge-transition",
                isOpen: I
            }, function() {
                const e = f && a.Ay.createElement("div", {
                    className: (0,
                    o.A)("ChatBadge reaction", w && "muted")
                }, a.Ay.createElement("i", {
                    className: "icon icon-heart"
                }))
                  , t = g && a.Ay.createElement("div", {
                    className: "ChatBadge mention"
                }, a.Ay.createElement("i", {
                    className: "icon icon-mention"
                }))
                  , n = v && a.Ay.createElement("div", {
                    className: (0,
                    o.A)("ChatBadge unopened", w && "muted")
                })
                  , i = S || b ? a.Ay.createElement("div", {
                    className: M
                }, !S && a.Ay.createElement(l.A, {
                    text: (0,
                    r.Vw)(b)
                })) : void 0
                  , s = m && a.Ay.createElement("div", {
                    className: M
                }, a.Ay.createElement("i", {
                    className: "icon icon-pinned-chat"
                }))
                  , c = [n, e, t, i, !i && !t && !e && s].filter(Boolean);
                return y ? s : 0 !== c.length ? 1 === c.length ? c[0] : A ? [t, i, e, s].filter(Boolean)[0] : a.Ay.createElement("div", {
                    className: "ChatBadge-wrapper"
                }, c) : void 0
            }())
        }
        ))
    }
    ,
    62830: (e, t, n) => {
        n.d(t, {
            A: () => $
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(89925)
          , r = n(31481)
          , s = n(87357)
          , l = n(49763)
          , c = n(80140)
          , d = n(82393)
          , m = n(23459)
          , u = n(66644)
          , A = n(9718)
          , h = n(16581)
          , p = n(17712)
          , y = n(74984)
          , g = n(2178)
          , f = n(96374)
          , v = n(5912)
          , E = n(9717)
          , C = n(46222)
          , b = n(52745)
          , w = n(90709)
          , S = n(87894)
          , I = n(14242)
          , N = n(4961)
          , M = n(59030)
          , k = n(24713)
          , T = n(22720);
        const P = {
            root: "sG8AAzvK",
            minimized: "lTOui0dp",
            button: "bNkLqJf1",
            title: "rMTpNazX",
            "unread-count": "O7esHjyC",
            unreadCount: "O7esHjyC",
            info: "OS2LWzdu",
            name: "bkCtPuPQ",
            icon: "f4LUPgr4",
            avatarWrapper: "RMY__Znz",
            avatar: "qeb0Aox1",
            chatsPreview: "_1817Hwgd",
            unread: "SS39xuL3"
        }
          , x = (0,
        a.ph)((e => {
            let {archiveSettings: t, onDragEnter: n, onClick: i} = e;
            const {updateArchiveSettings: l} = (0,
            o.ko)()
              , c = (0,
            M.A)()
              , d = (0,
            y.Rh)(r._E9)
              , m = (0,
            y.ic)()
              , u = m[r._E9]?.chatsCount
              , A = (0,
            a.Kr)(( () => {
                if (!d?.length)
                    return c("Loading");
                const e = (0,
                o.mS)().chats.byId;
                return d.slice(0, 5).map(( (t, n, o) => {
                    const i = n === o.length - 1
                      , r = e[t];
                    if (!r)
                        return;
                    const l = (0,
                    w.Js)(c, r);
                    return a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                        className: (0,
                        s.A)(P.chat, u && r.unreadCount && P.unread)
                    }, (0,
                    N.A)(l)), i ? "" : ", ")
                }
                ))
            }
            ), [d, c, u])
              , h = (0,
            a.Kr)(( () => {
                const e = !t.isMinimized && {
                    title: c("lng_context_archive_collapse"),
                    icon: "collapse",
                    handler: () => {
                        l({
                            isMinimized: !0
                        })
                    }
                }
                  , n = t.isMinimized && {
                    title: c("lng_context_archive_expand"),
                    icon: "expand",
                    handler: () => {
                        l({
                            isMinimized: !1
                        })
                    }
                }
                  , a = {
                    title: c("lng_context_archive_to_menu"),
                    icon: "archive-to-main",
                    handler: () => {
                        l({
                            isHidden: !0
                        })
                    }
                };
                return (0,
                S.oE)([e, n, a])
            }
            ), [t.isMinimized, c, l])
              , p = (0,
            a.hb)((e => {
                e.preventDefault(),
                n?.()
            }
            ), [n]);
            return a.Ay.createElement(T.A, {
                onClick: i,
                onDragEnter: p,
                className: (0,
                s.A)(P.root, t.isMinimized && P.minimized, "chat-item-clickable", "chat-item-archive"),
                buttonClassName: P.button,
                contextActions: h,
                withPortalForMenu: !0
            }, t.isMinimized ? a.Ay.createElement("div", {
                className: (0,
                s.A)(P.info, "info")
            }, a.Ay.createElement("div", {
                className: "info-row"
            }, a.Ay.createElement("div", {
                className: (0,
                s.A)("title", P.title)
            }, a.Ay.createElement("h3", {
                dir: "auto",
                className: (0,
                s.A)(P.name, "fullName")
            }, a.Ay.createElement("i", {
                className: (0,
                s.A)(P.icon, "icon", "icon-archive-filled")
            }), c("ArchivedChats"))), a.Ay.createElement(k.A, {
                className: P.unreadCount,
                text: u ? (0,
                I.Vw)(u) : void 0
            }))) : a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("div", {
                className: (0,
                s.A)("status", P.avatarWrapper)
            }, a.Ay.createElement("div", {
                className: (0,
                s.A)("Avatar", P.avatar)
            }, a.Ay.createElement("i", {
                className: "icon icon-archive-filled"
            }))), a.Ay.createElement("div", {
                className: (0,
                s.A)(P.info, "info")
            }, a.Ay.createElement("div", {
                className: "info-row"
            }, a.Ay.createElement("div", {
                className: (0,
                s.A)("title", P.title)
            }, a.Ay.createElement("h3", {
                dir: "auto",
                className: (0,
                s.A)(P.name, "fullName")
            }, c("ArchivedChats")))), a.Ay.createElement("div", {
                className: "subtitle"
            }, a.Ay.createElement("div", {
                className: (0,
                s.A)("status", P.chatsPreview)
            }, A), a.Ay.createElement(k.A, {
                className: P.unreadCount,
                text: u ? (0,
                I.Vw)(u) : void 0
            })))))
        }
        ));
        var R = n(32754)
          , L = n(29807)
          , B = n(43874)
          , O = n(79577)
          , F = n(64493);
        const D = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {folderId: n, folderType: a} = t;
            return {
                chatFolder: n && "folder" === a ? (0,
                L.$aQ)(e, n) : void 0,
                animatedEmoji: (0,
                L.oei)(e, "📂")
            }
        }
        ))((e => {
            let {chatFolder: t, animatedEmoji: n, foldersDispatch: o, onSettingsScreenSelect: r} = e;
            const s = (0,
            M.A)()
              , {isMobile: l} = (0,
            B.Ay)()
              , c = (0,
            a.hb)(( () => {
                o({
                    type: "editFolder",
                    payload: t
                }),
                r(i.VS.FoldersEditFolderFromChatList)
            }
            ), [t, o, r]);
            return a.Ay.createElement("div", {
                className: "yftKUVDQ"
            }, a.Ay.createElement("div", {
                className: "UCBfMOiz"
            }, n && a.Ay.createElement(O.A, {
                sticker: n,
                size: 96
            })), a.Ay.createElement("h3", {
                className: "dB9cHelg",
                dir: "auto"
            }, s("FilterNoChatsToDisplay")), a.Ay.createElement("p", {
                className: "TJ_liZcJ",
                dir: "auto"
            }, s(t ? "ChatList.EmptyChatListFilterText" : "Chat.EmptyChat")), t && a.Ay.createElement(F.A, {
                ripple: !l,
                fluid: !0,
                pill: !0,
                onClick: c,
                size: "smaller",
                isRtl: s.isRtl
            }, a.Ay.createElement("i", {
                className: "icon icon-settings"
            }), a.Ay.createElement("div", {
                className: "aL7e0w4t"
            }, s("ChatList.EmptyChatListEditFilter"))))
        }
        )));
        var U = n(93545);
        const K = "pedMJD_v"
          , j = (0,
        a.ph)((e => {
            let {sessions: t, onHeightChange: n} = e;
            const {changeSessionSettings: i, terminateAuthorization: r, showNotification: s} = (0,
            o.ko)()
              , l = (0,
            a.li)(null)
              , c = (0,
            M.A)();
            (0,
            U.A)(l, (e => {
                const t = e.borderBoxSize?.[0]?.blockSize || e.contentRect.height;
                n(t)
            }
            ));
            const d = (0,
            a.Kr)(( () => Object.values(t).sort(( (e, t) => t.dateCreated - e.dateCreated)).find((e => e.isUnconfirmed))), [t])
              , m = (0,
            a.Kr)(( () => [d.deviceModel, d.region, d.country].filter(Boolean).join(", ")), [d])
              , u = (0,
            p.A)(( () => {
                i({
                    hash: d.hash,
                    isConfirmed: !0
                })
            }
            ))
              , A = (0,
            p.A)(( () => {
                r({
                    hash: d.hash
                }),
                s({
                    title: c("UnconfirmedAuthDeniedTitle", 1),
                    message: c("UnconfirmedAuthDeniedMessageSingle", m)
                })
            }
            ));
            return a.Ay.createElement("div", {
                className: "yEkGgZVL",
                ref: l
            }, a.Ay.createElement("h2", {
                className: "VhAJDrnz"
            }, c("UnconfirmedAuthTitle")), a.Ay.createElement("p", {
                className: "WmyL1NJ8"
            }, c("UnconfirmedAuthSingle", m)), a.Ay.createElement("div", {
                className: "_40UGD1Y"
            }, a.Ay.createElement(F.A, {
                fluid: !0,
                isText: !0,
                size: "smaller",
                className: K,
                onClick: u
            }, c("UnconfirmedAuthConfirm")), a.Ay.createElement(F.A, {
                fluid: !0,
                isText: !0,
                size: "smaller",
                color: "danger",
                onClick: A,
                className: K
            }, c("UnconfirmedAuthDeny"))))
        }
        ))
          , z = new Set(["9", "0"])
          , $ = (0,
        a.ph)((e => {
            let {className: t, folderType: n, folderId: w, isActive: S, isForumPanelOpen: I, canDisplayArchive: N, archiveSettings: M, sessions: k, foldersDispatch: T, onSettingsScreenSelect: P, onLeftColumnContentChange: L} = e;
            const {openChat: B, openNextChat: O, closeForumPanel: F, toggleStoryRibbon: U} = (0,
            o.ko)()
              , K = (0,
            a.li)(null)
              , $ = (0,
            a.li)(!1)
              , [_,J] = (0,
            a.J0)(0)
              , V = "archived" === n
              , H = "all" === n
              , q = "saved" === n
              , G = H ? r.DSF : V ? r._E9 : q ? r.pX9 : w
              , W = H && N && M
              , Z = (0,
            y.Rh)(G);
            (0,
            m.A)(Z);
            const Q = (Z?.length || 0) * r.yq1
              , Y = W ? M?.isMinimized ? r.eqO : r.yq1 : 0
              , {orderDiffById: X, getAnimationType: ee} = (0,
            E.A)(Z)
              , [te,ne] = (0,
            f.A)(void 0, Z, void 0, r.T7t)
              , ae = (0,
            a.Kr)(( () => {
                const e = Object.values(k || {})
                  , t = e.find((e => e.isCurrent));
                return !(!t || (0,
                c.Fm)() - t.dateCreated < r.C7Y) && H && e.some((e => e.isUnconfirmed))
            }
            ), [H, k]);
            (0,
            a.vJ)(( () => {
                ae || J(0)
            }
            ), [ae]),
            (0,
            g.v)((0,
            a.Kr)(( () => S && Z?.length ? {
                "Alt+ArrowUp": e => {
                    e.preventDefault(),
                    O({
                        targetIndexDelta: -1,
                        orderedIds: Z
                    })
                }
                ,
                "Alt+ArrowDown": e => {
                    e.preventDefault(),
                    O({
                        targetIndexDelta: 1,
                        orderedIds: Z
                    })
                }
            } : void 0), [S, Z])),
            (0,
            a.vJ)(( () => {
                if (S && !q && Z && d.lE)
                    return document.addEventListener("keydown", e),
                    () => {
                        document.removeEventListener("keydown", e)
                    }
                    ;
                function e(e) {
                    if ((d.MP && e.metaKey || !d.MP && e.ctrlKey) && e.code.startsWith("Digit")) {
                        const [,t] = e.code.match(/Digit(\d)/) || [];
                        if (!t || z.has(t))
                            return;
                        const n = W && M && !M.isMinimized
                          , a = n ? -1 : 0
                          , o = Number(t) + a - 1;
                        if (n && -1 === o)
                            return void L?.(i.Bn.Archived);
                        if (o > Z.length - 1)
                            return;
                        B({
                            id: Z[o],
                            shouldReplaceHistory: !0
                        })
                    }
                }
            }
            ), [M, q, S, L, B, O, Z, W]);
            const {observe: oe} = (0,
            v.BL)({
                rootRef: K,
                throttleMs: 200
            })
              , ie = (0,
            p.A)(( () => {
                L(i.Bn.Archived),
                F()
            }
            ))
              , re = (0,
            p.A)(( () => {
                $.current ? $.current = !1 : ie()
            }
            ))
              , se = (0,
            h.A)((e => {
                $.current ? $.current = !1 : B({
                    id: e,
                    shouldReplaceHistory: !0
                })
            }
            ), [B], 500, !0)
              , le = (0,
            p.A)((e => {
                const t = e.currentTarget.getBoundingClientRect()
                  , n = e.clientX - t.left
                  , a = e.clientY - t.top;
                n < t.width || a < t.y || ($.current = !0)
            }
            ))
              , ce = function(e, t, n, o) {
                const i = (0,
                a.li)(null)
                  , r = (0,
                a.li)(!1)
                  , s = (0,
                a.li)(0)
                  , l = (0,
                a.li)(!1)
                  , c = (0,
                a.li)(!0)
                  , m = (0,
                a.li)(0)
                  , y = (0,
                a.li)(!1)
                  , g = (0,
                p.A)((function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    l.current || i.current && e.current && (i.current.style.display = "block",
                    e.current.scrollTop = 1,
                    d.Yw || t || (0,
                    A.E)(e.current),
                    r.current = !0,
                    s.current = 1,
                    l.current = !0,
                    c.current = !0)
                }
                ))
                  , f = (0,
                p.A)(( () => {
                    l.current && i.current && (i.current.style.display = "none",
                    l.current = !1)
                }
                ))
                  , v = (0,
                p.A)(( () => {
                    if (!e.current)
                        return;
                    if (r.current)
                        return void (r.current = !1);
                    const a = e.current.scrollTop
                      , o = a > s.current
                      , d = a < s.current
                      , A = 0 === a
                      , h = Date.now() - m.current;
                    if (i.current) {
                        if (A && !l.current)
                            return void (0,
                            u.dL)(g, [e.current, i.current]);
                        (0,
                        u.dL)(f, i.current)
                    }
                    d && (c.current && h > 100 || a < 0 && y.current) ? t?.() : o && a > 0 && n?.(),
                    s.current = a,
                    c.current = A,
                    m.current = Date.now(),
                    y.current = o && a < 0
                }
                ))
                  , E = (0,
                h.A)((a => {
                    if (!e.current)
                        return;
                    const o = e.current;
                    o.scrollHeight > o.offsetHeight || 0 === a.deltaY || (a.deltaY < 0 ? t?.() : n?.())
                }
                ), [e, t, n], 250);
                return (0,
                a.vJ)(( () => {
                    const t = e.current;
                    if (t)
                        return 0 === t.scrollTop && (0,
                        u.RK)(( () => {
                            g(!0)
                        }
                        )),
                        t.addEventListener("scroll", v, {
                            passive: !0
                        }),
                        t.addEventListener("wheel", E, {
                            passive: !0
                        }),
                        () => {
                            t.removeEventListener("scroll", v),
                            t.removeEventListener("wheel", E)
                        }
                }
                ), [e, E]),
                d.pz || o ? void 0 : a.Ay.createElement("div", {
                    ref: i,
                    className: "overscroll-trigger",
                    key: "overscroll-trigger"
                })
            }(K, (0,
            p.A)(( () => {
                U({
                    isShown: !0,
                    isArchived: V
                })
            }
            )), (0,
            p.A)(( () => {
                U({
                    isShown: !1,
                    isArchived: V
                })
            }
            )), q);
            return a.Ay.createElement(C.A, {
                className: (0,
                s.A)("chat-list custom-scroll", I && "forum-panel-open", t),
                ref: K,
                items: te,
                itemSelector: ".ListItem:not(.chat-item-archive)",
                preloadBackwards: r.T7t,
                withAbsolutePositioning: !0,
                beforeChildren: ce,
                maxHeight: Q + Y + _,
                onLoadMore: ne,
                onDragLeave: le
            }, ae && a.Ay.createElement(j, {
                key: "unconfirmed",
                sessions: k,
                onHeightChange: J
            }), W && a.Ay.createElement(x, {
                key: "archive",
                archiveSettings: M,
                onClick: ie,
                onDragEnter: re
            }), te?.length ? function() {
                const e = Z.indexOf(te[0])
                  , t = (0,
                l.zm)(G) || 0;
                return te.map(( (n, o) => {
                    const i = e + o < t
                      , s = _ + Y + (e + o) * r.yq1;
                    return a.Ay.createElement(R.A, {
                        key: n,
                        teactOrderKey: i ? o : (0,
                        l.uk)(n, q),
                        chatId: n,
                        isPinned: i,
                        folderId: w,
                        isSavedDialog: q,
                        animationType: ee(n),
                        orderDiff: X[n],
                        offsetTop: s,
                        observeIntersection: oe,
                        onDragEnter: se
                    })
                }
                ))
            }() : !te || te.length || q ? a.Ay.createElement(b.A, {
                key: "loading"
            }) : a.Ay.createElement(D, {
                folderId: w,
                folderType: n,
                foldersDispatch: T,
                onSettingsScreenSelect: P
            }))
        }
        ))
    }
    ,
    90054: (e, t, n) => {
        n.d(t, {
            A: () => q
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(31481)
          , s = n(66644)
          , l = n(90709)
          , c = n(29807)
          , d = n(87357)
          , m = n(11778)
          , u = n(50442)
          , A = n(25903)
          , h = n(82393)
          , p = n(43874)
          , y = n(26072)
          , g = n(96374)
          , f = n(5912)
          , v = n(17712)
          , E = n(59030)
          , C = n(73767)
          , b = n(9717)
          , w = n(63744)
          , S = n(51083)
          , I = n(48553)
          , N = n(64493)
          , M = n(46222)
          , k = n(52745)
          , T = n(76023)
          , P = n(79577);
        const x = {
            root: "Ky16H_sV",
            "button-text": "W01t9CIf",
            buttonText: "W01t9CIf",
            sticker: "c8lE3XW5",
            title: "wlwD1B1Q",
            description: "V8OCFHmp",
            "is-ios": "IxW_z_r0",
            isIos: "IxW_z_r0",
            "is-macos": "OFxKGCEJ",
            isMacos: "OFxKGCEJ"
        }
          , R = 7 * T.$
          , L = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n} = t;
            const a = (0,
            c.hds)(e, n)
              , o = a && (a.isCreator || (0,
            l.ub)(a, "manageTopics"));
            return {
                animatedEmoji: (0,
                c.oei)(e, "🐣"),
                canManageTopics: o
            }
        }
        ))((e => {
            let {chatId: t, animatedEmoji: n, canManageTopics: i} = e;
            const {openCreateTopicPanel: r} = (0,
            o.ko)()
              , s = (0,
            E.A)()
              , {isMobile: l} = (0,
            p.Ay)()
              , c = (0,
            a.hb)(( () => {
                r({
                    chatId: t
                })
            }
            ), [t, r]);
            return a.Ay.createElement("div", {
                className: x.root
            }, a.Ay.createElement("div", {
                className: x.sticker
            }, n && a.Ay.createElement(P.A, {
                sticker: n,
                size: R
            })), a.Ay.createElement("h3", {
                className: x.title,
                dir: "auto"
            }, s("ChatList.EmptyTopicsTitle")), a.Ay.createElement("p", {
                className: (0,
                d.A)(x.description, x.centered),
                dir: "auto"
            }, s("ChatList.EmptyTopicsDescription")), i && a.Ay.createElement(N.A, {
                ripple: !l,
                fluid: !0,
                onClick: c,
                size: "smaller",
                isRtl: s.isRtl
            }, a.Ay.createElement("div", {
                className: x.buttonText
            }, s("ChatList.EmptyTopicsCreate"))))
        }
        )));
        var B = n(26129)
          , O = n(66414)
          , F = n(4961)
          , D = n(37661)
          , U = n(53188)
          , K = n(87894)
          , j = n(81642)
          , z = n(38102)
          , $ = n(94189)
          , _ = n(22720)
          , J = n(97046)
          , V = n(24807);
        const H = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n, topic: a, isSelected: o} = t;
            const i = (0,
            c.hds)(e, n)
              , r = (0,
            c.O5q)(e, n, a.lastMessageId)
              , {senderId: s, isOutgoing: d} = r || {}
              , m = r && (0,
            B.Q)(r)?.replyToMsgId
              , u = s ? (0,
            c.mBe)(e, s) || (0,
            c.hds)(e, s) : void 0
              , A = r ? (0,
            l.mK)(r) : void 0
              , h = A && m ? (0,
            c.O5q)(e, n, m) : void 0
              , {targetUserIds: p, targetChatId: y} = A || {}
              , g = (0,
            c.C5H)(e, n, a.id, "typingStatus")
              , f = (0,
            c.GA4)(e, n, a.id)
              , v = (0,
            c.Vw0)(e, n, a.id)
              , E = Boolean(v?.lastReadInboxMessageId)
              , C = (0,
            c.pSx)(e, n)
              , {chatId: b, threadId: w} = (0,
            c.Xf0)(e) || {};
            return {
                chat: i,
                lastMessage: r,
                actionTargetUserIds: p,
                actionTargetChatId: y,
                actionTargetMessage: h,
                lastMessageSender: u,
                typingStatus: g,
                canDelete: (0,
                c.DBV)(e, n, a.id),
                withInterfaceAnimations: (0,
                c.PKK)(e),
                draft: f,
                ...d && r && {
                    lastMessageOutgoingStatus: (0,
                    c.Tl2)(e, r)
                },
                canScrollDown: o && i?.id === b && w === a.id,
                wasTopicOpened: E,
                topics: C
            }
        }
        ))((e => {
            let {topic: t, isSelected: n, chatId: i, chat: r, style: s, lastMessage: c, canScrollDown: m, lastMessageOutgoingStatus: u, observeIntersection: A, canDelete: p, actionTargetMessage: y, actionTargetUserIds: g, actionTargetChatId: f, lastMessageSender: C, animationType: b, withInterfaceAnimations: w, orderDiff: S, typingStatus: I, draft: N, wasTopicOpened: M, topics: k} = e;
            const {openThread: T, deleteTopic: P, focusLastMessage: x, setViewForumAsMessages: R} = (0,
            o.ko)()
              , L = (0,
            E.A)()
              , [B,H,q] = (0,
            D.A)()
              , [G,W,Z] = (0,
            D.A)()
              , [Q,Y,X] = (0,
            D.A)()
              , [ee,te,ne] = (0,
            D.A)()
              , {isPinned: ae, isClosed: oe} = t
              , ie = t.isMuted || void 0 === t.isMuted && r.isMuted
              , re = (0,
            v.A)(( () => {
                Y(),
                H()
            }
            ))
              , se = (0,
            v.A)(( () => {
                P({
                    chatId: r.id,
                    topicId: t.id
                })
            }
            ))
              , le = (0,
            v.A)(( () => {
                te(),
                W()
            }
            ))
              , {renderSubtitle: ce, ref: de} = (0,
            U.A)({
                chat: r,
                chatId: i,
                lastMessage: c,
                draft: N,
                actionTargetMessage: y,
                actionTargetUserIds: g,
                actionTargetChatId: f,
                lastMessageSender: C,
                lastMessageTopic: t,
                observeIntersection: A,
                isTopic: !0,
                typingStatus: I,
                topics: k,
                animationType: b,
                withInterfaceAnimations: w,
                orderDiff: S
            })
              , me = (0,
            v.A)(( () => {
                T({
                    chatId: i,
                    threadId: t.id,
                    shouldReplaceHistory: !0
                }),
                R({
                    chatId: i,
                    isEnabled: !1
                }),
                m && x()
            }
            ))
              , ue = function(e) {
                let {topic: t, chat: n, wasOpened: i, canDelete: r, handleDelete: s, handleMute: c} = e;
                const d = (0,
                E.A)();
                return (0,
                a.Kr)(( () => {
                    const {isPinned: e, isMuted: a, isClosed: m, id: u} = t
                      , A = n.id
                      , {editTopic: p, toggleTopicPinned: y, markTopicRead: g, updateTopicMutedState: f, openChatInNewTab: v} = (0,
                    o.ko)()
                      , E = (0,
                    l.l1)(n, t)
                      , C = n.isCreator || (0,
                    l.ub)(n, "manageTopics")
                      , b = h.OS && {
                        title: "Open in new tab",
                        icon: "open-in-new-tab",
                        handler: () => {
                            v({
                                chatId: n.id,
                                threadId: u
                            })
                        }
                    }
                      , w = t.unreadCount || !i ? {
                        title: d("MarkAsRead"),
                        icon: "readchats",
                        handler: () => {
                            g({
                                chatId: A,
                                topicId: u
                            })
                        }
                    } : void 0
                      , S = C ? e ? {
                        title: d("UnpinFromTop"),
                        icon: "unpin",
                        handler: () => y({
                            chatId: A,
                            topicId: u,
                            isPinned: !1
                        })
                    } : {
                        title: d("PinToTop"),
                        icon: "pin",
                        handler: () => y({
                            chatId: A,
                            topicId: u,
                            isPinned: !0
                        })
                    } : void 0
                      , I = n.isMuted && !1 !== a || !0 === a ? {
                        title: d("ChatList.Unmute"),
                        icon: "unmute",
                        handler: () => f({
                            chatId: A,
                            topicId: u,
                            isMuted: !1
                        })
                    } : {
                        title: `${d("ChatList.Mute")}...`,
                        icon: "mute",
                        handler: c
                    }
                      , N = E ? m ? {
                        title: d("lng_forum_topic_reopen"),
                        icon: "reopen-topic",
                        handler: () => p({
                            chatId: A,
                            topicId: u,
                            isClosed: !1
                        })
                    } : {
                        title: d("lng_forum_topic_close"),
                        icon: "close-topic",
                        handler: () => p({
                            chatId: A,
                            topicId: u,
                            isClosed: !0
                        })
                    } : void 0
                      , M = r ? {
                        title: d("lng_forum_topic_delete"),
                        icon: "delete",
                        destructive: !0,
                        handler: s
                    } : void 0;
                    return (0,
                    K.oE)([b, S, w, I, N, M])
                }
                ), [t, n, i, d, r, s, c])
            }({
                topic: t,
                chat: r,
                wasOpened: M,
                canDelete: p,
                handleDelete: re,
                handleMute: le
            });
            return a.Ay.createElement(_.A, {
                className: (0,
                d.A)("Fn34Vu_9", "Chat", n && "selected", "chat-item-clickable"),
                onClick: me,
                style: s,
                href: h.OS ? `#${(0,
                O.az)(i, "thread", t.id)}` : void 0,
                contextActions: ue,
                withPortalForMenu: !0,
                ref: de
            }, a.Ay.createElement("div", {
                className: "info"
            }, a.Ay.createElement("div", {
                className: "info-row"
            }, a.Ay.createElement("div", {
                className: (0,
                d.A)("title")
            }, a.Ay.createElement(z.A, {
                topic: t,
                className: "oXJl4tra",
                observeIntersection: A
            }), a.Ay.createElement("h3", {
                dir: "auto",
                className: "fullName"
            }, (0,
            F.A)(t.title))), t.isMuted && a.Ay.createElement("i", {
                className: "icon icon-muted"
            }), a.Ay.createElement("div", {
                className: "separator"
            }), oe && a.Ay.createElement("i", {
                className: (0,
                d.A)("icon", "icon-lock-badge", "MB7Gomjn")
            }), c && a.Ay.createElement(j.A, {
                message: c,
                outgoingStatus: u
            })), a.Ay.createElement("div", {
                className: "subtitle"
            }, ce(), a.Ay.createElement(V.A, {
                chat: r,
                isPinned: ae,
                isMuted: ie,
                topic: t,
                wasTopicOpened: M,
                topics: k
            }))), Q && a.Ay.createElement($.A, {
                isOpen: B,
                onClose: q,
                onCloseAnimationEnd: X,
                confirmIsDestructive: !0,
                confirmHandler: se,
                text: L("lng_forum_topic_delete_sure"),
                confirmLabel: L("Delete")
            }), ee && a.Ay.createElement(J.A, {
                isOpen: G,
                onClose: Z,
                onCloseAnimationEnd: ne,
                chatId: i,
                topicId: t.id
            }))
        }
        )))
          , q = (0,
        a.ph)((0,
        o.EK)((e => {
            const t = (0,
            c.nTw)(e).forumPanelChatId
              , n = t ? (0,
            c.hds)(e, t) : void 0
              , {chatId: a, threadId: o} = (0,
            c.Xf0)(e) || {}
              , i = t ? (0,
            c.xyP)(e, t) : void 0;
            return {
                chat: n,
                currentTopicId: t === a ? Number(o) : void 0,
                withInterfaceAnimations: (0,
                c.PKK)(e),
                topicsInfo: i
            }
        }
        ), (e => (0,
        c.clw)(e)))((e => {
            let {chat: t, currentTopicId: n, isOpen: c, isHidden: T, topicsInfo: P, onTopicSearch: x, onCloseAnimationEnd: R, onOpenAnimationStart: B, withInterfaceAnimations: O} = e;
            const {closeForumPanel: F, openChatWithInfo: D, loadTopics: U} = (0,
            o.ko)()
              , K = (0,
            a.li)(null)
              , j = (0,
            a.li)(null)
              , z = (0,
            a.li)(null)
              , {isMobile: $} = (0,
            p.Ay)()
              , _ = t?.id;
            (0,
            a.vJ)(( () => {
                _ && !P && U({
                    chatId: _
                })
            }
            ), [P, _]);
            const [J,V] = (0,
            a.J0)(!1)
              , q = (0,
            E.A)()
              , G = (0,
            v.A)(( () => {
                F()
            }
            ));
            (0,
            a.vJ)(( () => {
                O || c || R?.()
            }
            ), [O, c, R]);
            const W = (0,
            v.A)(( () => {
                t && D({
                    id: t.id,
                    shouldReplaceHistory: !0
                })
            }
            ))
              , {observe: Z} = (0,
            f.BL)({
                rootRef: j,
                throttleMs: 200
            });
            (0,
            f.mv)(z, Z, (e => {
                let {isIntersecting: t} = e;
                V(!t)
            }
            ));
            const Q = (0,
            a.Kr)(( () => P ? (0,
            l.CO)(Object.values(P.topicsById), P.orderedPinnedTopicIds).map((e => {
                let {id: t} = e;
                return t
            }
            )) : []), [P])
              , {orderDiffById: Y, getAnimationType: X} = (0,
            b.A)(Q, t?.id)
              , [ee,te] = (0,
            g.A)(( () => {
                t && U({
                    chatId: t.id
                })
            }
            ), Q, !P?.totalCount || Q.length >= P.totalCount, r.iIc)
              , ne = (0,
            a.li)(!1)
              , ae = c && !T
              , oe = (0,
            C.A)(ae);
            oe !== ae && (ne.current = !1),
            (0,
            y.A)({
                isActive: ae,
                onBack: G
            }),
            (0,
            a.vJ)(( () => ae ? (0,
            m.A)(G) : void 0), [G, ae]),
            (0,
            a.vJ)(( () => {
                oe !== ae && (0,
                s.Uz)(( () => {
                    if (!K.current)
                        return;
                    const e = (0,
                    a.VK)();
                    (0,
                    A.j)(K.current, e),
                    B?.(),
                    ae ? (ne.current = !0,
                    K.current.style.transform = "none") : (ne.current = !1,
                    K.current.style.transform = "")
                }
                ))
            }
            ), [ae, B, oe]),
            (0,
            a.vJ)(( () => {
                if (h.TF)
                    return (0,
                    u.wJ)(K.current, {
                        selectorToPreventScroll: ".chat-list",
                        onSwipe: (e, t) => t === (q.isRtl ? u.ez.Left : u.ez.Right) && (F(),
                        !0)
                    })
            }
            ), [F, q.isRtl]);
            const ie = void 0 === P;
            return a.Ay.createElement("div", {
                ref: K,
                className: (0,
                d.A)("MlF2n1nb", J && "SZ24u3cn", q.isRtl && "Xs2y1fCE", !O && "kmDMv6D8"),
                onTransitionEnd: c ? void 0 : R
            }, a.Ay.createElement("div", {
                id: "TopicListHeader",
                className: "left-header"
            }, a.Ay.createElement(N.A, {
                round: !0,
                size: "smaller",
                color: "translucent",
                onClick: G,
                ariaLabel: q("Close")
            }, a.Ay.createElement("i", {
                className: "icon icon-close"
            })), t && a.Ay.createElement(S.A, {
                noAvatar: !0,
                className: "Sf633zAP",
                chatId: t.id,
                onClick: W
            }), t && a.Ay.createElement(I.A, {
                chatId: t.id,
                threadId: i.l3,
                messageListType: "thread",
                canExpandActions: !1,
                isForForum: !0,
                isMobile: $,
                onTopicSearch: x
            })), t && a.Ay.createElement(w.A, {
                chatId: t.id,
                hasPinnedOffset: !1,
                className: "wUpRjGJ2"
            }), a.Ay.createElement("div", {
                className: "hGeb3TQJ"
            }), a.Ay.createElement(M.A, {
                className: "chat-list custom-scroll",
                ref: j,
                items: ee,
                preloadBackwards: r.iIc,
                withAbsolutePositioning: !0,
                maxHeight: (Q?.length || 0) * r.HGU,
                onLoadMore: te,
                sensitiveArea: r.C$_,
                beforeChildren: a.Ay.createElement("div", {
                    ref: z,
                    className: "ERz3fcar"
                })
            }, Boolean(ee?.length) && function() {
                const e = Q.indexOf(ee[0]);
                return ee?.map(( (o, i) => a.Ay.createElement(H, {
                    key: o,
                    chatId: t.id,
                    topic: P.topicsById[o],
                    style: `top: ${(e + i) * r.HGU}px;`,
                    isSelected: n === o,
                    observeIntersection: Z,
                    animationType: X(o),
                    orderDiff: Y[o]
                })))
            }(), ie && !ee?.length && a.Ay.createElement(k.A, {
                key: "loading"
            })), !ie && 1 === ee?.length && ee[0] === r.HxB && a.Ay.createElement(L, {
                chatId: _
            }))
        }
        )))
    }
    ,
    79882: (e, t, n) => {
        n.d(t, {
            I: () => o,
            W: () => i
        });
        var a = n(84051);
        let o = function(e) {
            return e[e.Move = 0] = "Move",
            e[e.Opacity = 1] = "Opacity",
            e[e.None = 2] = "None",
            e
        }({});
        function i(e) {
            return (0,
            a.Kr)(( () => {
                const t = Object.values(e)
                  , n = t.filter((e => e < 0)).length
                  , a = t.filter((e => e > 0)).length;
                return t => {
                    const i = e[t];
                    return 0 === i ? o.None : i === 1 / 0 || i === -1 / 0 || n <= a && i < 0 || a < n && i > 0 ? o.Opacity : o.Move
                }
            }
            ), [e])
        }
    }
    ,
    53188: (e, t, n) => {
        n.d(t, {
            A: () => P
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(66644)
          , s = n(90709)
          , l = n(26129)
          , c = n(87357)
          , d = n(59776)
          , m = n(4961)
          , u = n(18501)
          , A = n(79882)
          , h = n(49746)
          , p = n(62587)
          , y = n(59030)
          , g = n(76023)
          , f = n(43874)
          , v = n(11217)
          , E = n(38102);
        const C = "CBda1UmC"
          , b = "BhS75ocD"
          , w = "uWo2dhui"
          , S = "g3XnC73g"
          , I = Number(g.$)
          , N = (0,
        a.ph)((e => {
            let {chat: t, topics: n, renderLastMessage: i, observeIntersection: r} = e;
            const {openThread: l} = (0,
            o.ko)()
              , d = (0,
            a.li)(null)
              , u = (0,
            a.li)(null)
              , A = (0,
            y.A)()
              , [h,...p] = (0,
            a.Kr)(( () => n ? (0,
            s.CO)(Object.values(n), void 0, !0).slice(0, 3) : []), [n])
              , [g,N] = (0,
            a.J0)(!1)
              , [M,k] = (0,
            a.J0)(void 0)
              , {handleClick: T, handleMouseDown: P} = (0,
            v.Q)((e => {
                0 === h.unreadCount || t.isForumAsMessages || (e.stopPropagation(),
                e.preventDefault(),
                l({
                    chatId: t.id,
                    threadId: h.id,
                    shouldReplaceHistory: !0,
                    noForumTopicPanel: (0,
                    f.Ny)()
                }))
            }
            ));
            return (0,
            a.vJ)(( () => {
                const e = d.current
                  , t = u.current;
                if (!e || !t)
                    return;
                const n = e.offsetWidth
                  , a = t.offsetWidth;
                Math.abs(n - a) < I ? k(Math.max(n, a)) : k(void 0),
                N(n > a)
            }
            ), [h, i]),
            a.Ay.createElement("div", {
                className: (0,
                c.A)("Ow6Ij9O5", g && "U_yhhC0w", M && "HV0wCR4O"),
                dir: A.isRtl ? "rtl" : void 0,
                style: M ? `--overwritten-width: ${M}px` : void 0
            }, h && a.Ay.createElement("div", {
                className: C
            }, a.Ay.createElement("div", {
                className: (0,
                c.A)("lEbV6HrI", h.unreadCount && b),
                ref: u,
                onClick: T,
                onMouseDown: P
            }, a.Ay.createElement(E.A, {
                topic: h,
                observeIntersection: r
            }), a.Ay.createElement("div", {
                className: "k3Ch25ZQ"
            }, (0,
            m.A)(h.title)), !M && g && a.Ay.createElement("div", {
                className: w
            }, a.Ay.createElement("div", {
                className: S
            }))), a.Ay.createElement("div", {
                className: "IkuCBmvA"
            }, p.map((e => a.Ay.createElement("div", {
                className: (0,
                c.A)("d0hTIVJn", e.unreadCount && b),
                key: e.id
            }, a.Ay.createElement(E.A, {
                topic: e,
                className: "oknhG11L",
                observeIntersection: r
            }), a.Ay.createElement("span", {
                className: "ZUj3xAjs"
            }, (0,
            m.A)(e.title)))))), a.Ay.createElement("div", {
                className: "_m_2xcPW"
            })), !h && a.Ay.createElement("div", {
                className: (0,
                c.A)(C, "L4Zk0yMN")
            }, A("Loading")), a.Ay.createElement("div", {
                className: (0,
                c.A)("KJ16dBus", h?.unreadCount && b),
                ref: d,
                onClick: T,
                onMouseDown: P
            }, i(), !M && !g && a.Ay.createElement("div", {
                className: w
            }, a.Ay.createElement("div", {
                className: S
            }))))
        }
        ));
        var M = n(18653)
          , k = n(80477);
        const T = 200;
        function P(e) {
            let {chat: t, topics: n, lastMessage: g, chatId: f, typingStatus: v, draft: E, actionTargetMessage: C, actionTargetUserIds: b, lastMessageTopic: w, lastMessageSender: S, actionTargetChatId: I, observeIntersection: P, animationType: x, orderDiff: R, withInterfaceAnimations: L, isTopic: B, isSavedDialog: O, isPreview: F} = e;
            const D = (0,
            y.A)()
              , U = (0,
            a.li)(null)
              , K = g && (0,
            s._P)(g)
              , j = g && (0,
            l.Q)(g)?.replyToMsgId;
            (0,
            h.A)(f, K ? j : void 0, C);
            const z = g && !(0,
            s.fP)(g)
              , $ = z ? (0,
            s.CI)(g) : void 0
              , _ = (0,
            p.A)(z ? (0,
            s.EO)(g, "micro") : void 0)
              , J = Boolean(g && (0,
            s.lk)(g))
              , V = (0,
            a.Kr)(( () => {
                if (!b)
                    return;
                const e = (0,
                o.mS)().users.byId;
                return b.map((t => e[t])).filter(Boolean)
            }
            ), [b])
              , H = (0,
            a.hb)(( () => {
                if (!O && !F && v && g && v.timestamp > 1e3 * g.date)
                    return a.Ay.createElement(k.A, {
                        typingStatus: v
                    });
                const e = E && E.replyInfo?.replyToMsgId === w?.id
                  , n = E?.replyInfo && !E.text && E.isLocal;
                if (!t?.isForum && !O && !F && E && !n && (!B || !e))
                    return a.Ay.createElement("p", {
                        className: "last-message",
                        dir: D.isRtl ? "auto" : "ltr"
                    }, a.Ay.createElement("span", {
                        className: "draft"
                    }, D("Draft")), (0,
                    u.f)({
                        text: E.text?.text || "",
                        entities: E.text?.entities,
                        isSimple: !0,
                        withTranslucentThumbs: !0
                    }));
                if (!g)
                    return;
                if ((0,
                s.r$)(g))
                    return a.Ay.createElement("p", {
                        className: "last-message shared-canvas-container",
                        dir: D.isRtl ? "auto" : "ltr"
                    }, (0,
                    s.Po)(D, g));
                if (K) {
                    const e = t && ((0,
                    s.WX)(t) || g.senderId === g.chatId);
                    return a.Ay.createElement("p", {
                        className: "last-message shared-canvas-container",
                        dir: D.isRtl ? "auto" : "ltr"
                    }, (0,
                    d.V)(D, g, e ? void 0 : S, e ? t : void 0, V, C, I, w, {
                        isEmbedded: !0
                    }, void 0, void 0))
                }
                const o = (0,
                s.Q5)(D, f, S);
                return a.Ay.createElement("p", {
                    className: "last-message shared-canvas-container",
                    dir: D.isRtl ? "auto" : "ltr"
                }, o && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("span", {
                    className: "sender-name"
                }, (0,
                m.A)(o)), a.Ay.createElement("span", {
                    className: "colon"
                }, ":")), !O && g.forwardInfo && a.Ay.createElement("i", {
                    className: "icon icon-share-filled chat-prefix-icon"
                }), "story" === g.replyInfo?.type && a.Ay.createElement("i", {
                    className: "icon icon-story-reply chat-prefix-icon"
                }), function(e, t, n, o) {
                    const i = a.Ay.createElement(M.A, {
                        message: e,
                        noEmoji: Boolean(n),
                        observeIntersectionForLoading: t,
                        inChatList: !0
                    });
                    if (!n)
                        return i;
                    const r = (0,
                    s.y2)(e);
                    return a.Ay.createElement("span", {
                        className: "media-preview"
                    }, a.Ay.createElement("img", {
                        src: n,
                        alt: "",
                        className: (0,
                        c.A)("media-preview--image", o && "round", r && "media-preview-spoiler"),
                        draggable: !1
                    }), (0,
                    s.zX)(e) && a.Ay.createElement("i", {
                        className: "icon icon-play"
                    }), i)
                }(g, P, _ || $, J))
            }
            ), [I, C, V, t, f, E, K, J, B, D, g, S, w, _, $, P, v, O, F]);
            return (0,
            a.Nf)(( () => {
                const e = U.current;
                if (L && e) {
                    if (x === A.I.Opacity)
                        e.style.opacity = "0",
                        (0,
                        r.RK)(( () => {
                            e.classList.add("animate-opacity"),
                            e.style.opacity = "1"
                        }
                        ));
                    else {
                        if (x !== A.I.Move)
                            return;
                        e.style.transform = `translate3d(0, ${-R * i.yq1}px, 0)`,
                        (0,
                        r.RK)(( () => {
                            e.classList.add("animate-transform"),
                            e.style.transform = ""
                        }
                        ))
                    }
                    setTimeout(( () => {
                        (0,
                        r.RK)(( () => {
                            e.classList.remove("animate-opacity", "animate-transform"),
                            e.style.opacity = "",
                            e.style.transform = ""
                        }
                        ))
                    }
                    ), T + i.xB5)
                }
            }
            ), [L, R, x]),
            {
                renderSubtitle: function() {
                    return t?.isForum && !B ? a.Ay.createElement(N, {
                        chat: t,
                        renderLastMessage: H,
                        observeIntersection: P,
                        topics: n
                    }) : H()
                },
                ref: U
            }
        }
    }
    ,
    24920: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(30857)
          , i = n(73767);
        function r(e) {
            const t = (0,
            o.A)()
              , n = (0,
            a.li)(e)
              , r = (0,
            i.A)(e);
            return !1 === e && r !== e && (n.current = !1),
            {
                shouldDisableDropdownMenuTransitionRef: n,
                handleDropdownMenuTransitionEnd: function() {
                    n.current = Boolean(e),
                    t()
                }
            }
        }
    }
    ,
    9717: (e, t, n) => {
        n.d(t, {
            A: () => s
        });
        var a = n(84051)
          , o = n(87894)
          , i = n(79882)
          , r = n(73767);
        function s(e, t) {
            const n = (0,
            a.Kr)(( () => {
                if (e)
                    return e.reduce(( (e, t, n) => (e[t] = n,
                    e)), {})
            }
            ), [e])
              , s = (0,
            r.A)(n)
              , l = (0,
            r.A)(t)
              , c = (0,
            a.Kr)(( () => n && s && t === l ? (0,
            o.LG)(n, ( (e, t) => void 0 !== s[t] ? e - s[t] : -1 / 0)) : {}), [t, n, l, s]);
            return {
                orderDiffById: c,
                getAnimationType: (0,
                i.W)(c)
            }
        }
    }
    ,
    55429: (e, t, n) => {
        n.d(t, {
            N: () => o
        });
        var a = n(90709);
        function o(e, t, n, o) {
            const {senderId: i} = t;
            if (!i)
                return;
            const r = (0,
            a.L8)(i) ? o[i] : n[i];
            let s = (0,
            a.qg)(e, r);
            const l = n[t.chatId];
            return l && ("isSelf"in r && r.isSelf ? s = `${e("FromYou")} → ${(0,
            a.Js)(e, l)}` : (0,
            a.YE)(l) && (s += ` → ${(0,
            a.Js)(e, l)}`)),
            s
        }
    }
    ,
    95685: (e, t, n) => {
        n.d(t, {
            A: () => W
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(26129)
          , s = n(29807)
          , l = n(87357)
          , c = n(14242)
          , d = n(59776)
          , m = n(4961)
          , u = n(54464)
          , A = n(10722)
          , h = n(49746)
          , p = n(37661)
          , y = n(5912)
          , g = n(39351)
          , f = n(59030)
          , v = n(50680)
          , E = n(79519)
          , C = n(79577)
          , b = n(23174)
          , w = n(89925)
          , S = n(87679)
          , I = n(17712)
          , N = n(62587)
          , M = n(21849)
          , k = n(94189)
          , T = n(68584);
        const P = (0,
        a.ph)((e => {
            let {message: t, renderContent: n} = e;
            const {openMediaViewer: r, uploadProfilePhoto: s, showNotification: l} = (0,
            o.ko)()
              , {isOutgoing: c} = t
              , d = (0,
            f.A)()
              , [m,u] = (0,
            a.J0)()
              , [A,h,y] = (0,
            p.A)(!1)
              , g = t.content.action.photo
              , v = (0,
            N.A)((0,
            i.rI)(g, "full"))
              , E = (0,
            N.A)((0,
            i.Pg)(g))
              , C = t.content.action.photo?.isVideo
              , P = (0,
            I.A)(( () => {
                l({
                    title: d("ApplyAvatarHintTitle"),
                    message: d("ApplyAvatarHint"),
                    action: {
                        action: "requestNextSettingsScreen",
                        payload: {
                            screen: w.VS.Main
                        }
                    },
                    actionText: d("Open")
                })
            }
            ))
              , x = (0,
            I.A)((e => {
                u(void 0),
                s({
                    file: e
                }),
                P()
            }
            ))
              , R = (0,
            I.A)(( () => {
                u(void 0)
            }
            ))
              , L = (0,
            I.A)((async () => {
                if (!E)
                    return;
                y(),
                P();
                const e = await (0,
                S.sZ)(E);
                s({
                    file: new File([e],"avatar.mp4"),
                    isVideo: !0,
                    videoTs: g.videoSizes?.find((e => void 0 !== e.videoStartTs))?.videoStartTs
                })
            }
            ));
            return a.Ay.createElement("span", {
                className: "action-message-suggested-avatar",
                tabIndex: 0,
                role: "button",
                onClick: async () => {
                    !c && v ? C ? h() : u(await (0,
                    S.sZ)(v)) : r({
                        chatId: t.chatId,
                        messageId: t.id,
                        threadId: b.l3,
                        origin: w.TQ.SuggestedAvatar
                    })
                }
            }, a.Ay.createElement(M.A, {
                photo: t.content.action.photo,
                loopIndefinitely: !0,
                withVideo: C,
                size: "jumbo"
            }), a.Ay.createElement("span", null, n()), a.Ay.createElement("span", {
                className: "action-message-button"
            }, d(C ? "ViewVideoAction" : "ViewPhotoAction")), a.Ay.createElement(T.A, {
                file: m,
                onClose: R,
                onChange: x
            }), a.Ay.createElement(k.A, {
                isOpen: A,
                title: d("SuggestedVideo"),
                confirmHandler: L,
                onClose: y,
                textParts: n()
            }))
        }
        ));
        var x = n(19381)
          , R = n(14737)
          , L = n(48894);
        var B = n(36838)
          , O = n(18276)
          , F = n(64493)
          , D = n(55158);
        const U = "d8axZxyN"
          , K = "glDpC2av"
          , j = "gqCs9fSo"
          , z = "gnYhwnvf"
          , $ = "HWgwnKui"
          , _ = "BTNQ4KBH"
          , J = "Xl9MVMTn"
          , V = "Qizai7yv";
        function H(e) {
            let {channel: t} = e;
            const {openChat: n} = (0,
            o.ko)()
              , r = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#00000000";
                const [n,o] = (0,
                a.J0)(t)
                  , r = (0,
                N.A)((0,
                i.cP)(e), !1, b.qZ.BlobUrl);
                return (0,
                a.vJ)(( () => {
                    (async () => {
                        if (!r)
                            return;
                        const e = await (0,
                        L.rX)(r);
                        o(`#${(0,
                        L.v2)(e)}`)
                    }
                    )()
                }
                ), [r]),
                n
            }(t, "#3C3C4399");
            return a.Ay.createElement("div", {
                className: K,
                onClick: () => n({
                    id: t.id
                })
            }, a.Ay.createElement(M.A, {
                className: j,
                key: t.id,
                size: "large",
                peer: t
            }), a.Ay.createElement("div", {
                style: `background: ${r}`,
                className: z
            }, a.Ay.createElement("i", {
                className: (0,
                l.A)(U, "icon icon-user-filled")
            }), a.Ay.createElement("span", {
                className: $
            }, (0,
            c.Vw)(t?.membersCount || 0))), a.Ay.createElement("span", {
                className: _
            }, t.title))
        }
        function q(e) {
            let {channel: t, chatId: n, channelsCount: i, isCurrentUserPremium: r} = e;
            const {openPremiumModal: s, openChatWithInfo: c} = (0,
            o.ko)()
              , d = (0,
            f.A)();
            return a.Ay.createElement("div", {
                className: (0,
                l.A)(K, "MBChXyXk"),
                onClick: () => {
                    r ? c({
                        id: n,
                        shouldReplaceHistory: !0,
                        profileTab: "similarChannels",
                        forceScrollProfileTab: !0
                    }) : s()
                }
            }, a.Ay.createElement(M.A, {
                className: j,
                key: t.id,
                size: "large",
                peer: t
            }), a.Ay.createElement("div", {
                className: J
            }, a.Ay.createElement("div", {
                className: V
            })), a.Ay.createElement("div", {
                className: (0,
                l.A)(J, "JxSmtOFi")
            }, a.Ay.createElement("div", {
                className: V
            })), a.Ay.createElement("div", {
                className: z
            }, a.Ay.createElement("span", {
                className: $
            }, `+${i}`), !r && a.Ay.createElement(O.A, {
                name: "lock-badge",
                className: U
            })), a.Ay.createElement("span", {
                className: _
            }, d("MoreSimilar")))
        }
        const G = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n} = t;
            const {similarChannelIds: a, shouldShowInChat: o, count: i} = (0,
            s.dg4)(e, n) || {};
            return {
                similarChannelIds: a,
                shouldShowInChat: o,
                count: i,
                isCurrentUserPremium: (0,
                s.g29)(e)
            }
        }
        ))((e => {
            let {chatId: t, similarChannelIds: n, shouldShowInChat: i, count: r, isCurrentUserPremium: c} = e;
            const d = (0,
            f.A)()
              , {toggleChannelRecommendations: m, loadChannelRecommendations: u} = (0,
            o.ko)()
              , [A,h,y] = (0,
            p.A)(!1)
              , [g,v,E] = (0,
            p.A)(!1)
              , C = (0,
            a.li)(null)
              , b = (0,
            a.Kr)(( () => {
                if (!n)
                    return;
                const e = (0,
                o.mS)();
                return n.map((t => (0,
                s.hds)(e, t))).filter(Boolean)
            }
            ), [n])
              , [w,S] = (0,
            a.J0)(!n)
              , N = (0,
            a.Kr)(( () => b?.slice(0, 10)), [b])
              , M = Boolean(N?.length);
            (0,
            B.A)(C, !M || !i || w, !0);
            const k = Boolean(!w && (i || g || A) && M);
            (0,
            a.vJ)(( () => {
                n || u({
                    chatId: t
                })
            }
            ), [t, n]),
            (0,
            R.A)(( () => S(!1)), 2e3),
            (0,
            a.vJ)(( () => {
                if (w && b && i) {
                    const e = setTimeout(( () => {
                        S(!1)
                    }
                    ), 300);
                    return () => clearTimeout(e)
                }
            }
            ), [b, i, w]);
            const T = (0,
            I.A)(( () => {
                m({
                    chatId: t
                }),
                i ? (y(),
                v()) : (h(),
                E())
            }
            ));
            return a.Ay.createElement("div", {
                className: (0,
                l.A)("V3RHiOJR")
            }, a.Ay.createElement("div", {
                className: "join-text"
            }, a.Ay.createElement("span", {
                className: (0,
                l.A)(M && "UHAMd4fI"),
                onClick: M ? T : void 0
            }, d("ChannelJoined"))), w && a.Ay.createElement(D.A, {
                className: "xKVZv7KE"
            }), k && a.Ay.createElement("div", {
                className: (0,
                l.A)(A && "eb8rX09E", g && "XR6_qLCc")
            }, a.Ay.createElement("div", {
                className: "tfG_BSDt"
            }, a.Ay.createElement("svg", {
                width: "19",
                height: "7",
                viewBox: "0 0 19 7",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, a.Ay.createElement("path", {
                className: "HVbeGv4t",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M19 7C16.8992 7 13.59 3.88897 11.5003 1.67424C10.7648 0.894688 10.397 0.50491 10.0434 0.385149C9.70568 0.270811 9.4225 0.270474 9.08456 0.38401C8.73059 0.50293 8.36133 0.892443 7.62279 1.67147C5.52303 3.88637 2.18302 7 0 7L19 7Z",
                fill: "white"
            }))), a.Ay.createElement("div", {
                className: "njAC8dR9"
            }, a.Ay.createElement("div", {
                className: "s7QOi22Q"
            }, a.Ay.createElement("span", {
                className: "JstcOhAN"
            }, d("SimilarChannels")), a.Ay.createElement(F.A, {
                className: "meewH7t_",
                color: "translucent",
                onClick: T
            }, a.Ay.createElement(O.A, {
                name: "close"
            }))), a.Ay.createElement("div", {
                ref: C,
                className: (0,
                l.A)("h4gWlNen", "no-scrollbar")
            }, N?.map(( (e, n) => 9 === n ? a.Ay.createElement(q, {
                channel: e,
                chatId: t,
                channelsCount: r - 10 + 1,
                isCurrentUserPremium: c
            }) : a.Ay.createElement(H, {
                channel: e
            })))))))
        }
        )))
          , W = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {message: n, threadId: a} = t;
            const {chatId: o, senderId: i, content: l} = n
              , {targetUserIds: c, targetChatId: d} = l.action || {}
              , m = (0,
            r.Q)(n)?.replyToMsgId
              , u = m ? (0,
            s.O5q)(e, o, m) : void 0
              , A = !!a && (0,
            s.nJv)(e, n, a)
              , {direction: h, noHighlight: p} = A && (0,
            s.nTw)(e).focusedMessage || {}
              , y = (0,
            s.mBe)(e, i || o)
              , g = (0,
            s.hds)(e, o)
              , f = d ? (0,
            s.hds)(e, d) : void 0
              , v = l.action?.months
              , E = (0,
            s.t0O)(e, v)
              , C = l.action?.stars;
            return {
                senderUser: y,
                senderChat: g,
                targetChat: f,
                targetChatId: d,
                targetUserIds: c,
                targetMessage: u,
                isFocused: A,
                premiumGiftSticker: E,
                starGiftSticker: (0,
                s.WLj)(e, C),
                topic: (0,
                s.nkm)(e, n),
                canPlayAnimatedEmojis: (0,
                s.BWX)(e),
                ...A && {
                    focusDirection: h,
                    noFocusHighlight: p
                }
            }
        }
        ))((e => {
            let {message: t, isEmbedded: n, appearanceOrder: r=0, isJustAdded: s, isLastInList: b, senderUser: w, senderChat: S, targetUserIds: I, targetMessage: N, targetChatId: M, targetChat: k, isFocused: T, focusDirection: R, noFocusHighlight: L, premiumGiftSticker: B, starGiftSticker: O, isInsideTopic: F, topic: D, memoFirstUnreadIdRef: U, canPlayAnimatedEmojis: K, observeIntersectionForReading: j, observeIntersectionForLoading: z, observeIntersectionForPlaying: $, onIntersectPinnedMessage: _} = e;
            const {openPremiumModal: J, requestConfetti: V, checkGiftCode: H, getReceipt: q, openStarsTransactionFromGift: W, openPrizeStarsTransactionFromGiveaway: Z} = (0,
            o.ko)()
              , Q = (0,
            f.A)()
              , Y = (0,
            g.A)()
              , X = (0,
            a.li)(null);
            (0,
            y.mv)(X, j),
            (0,
            h.A)(t.chatId, "message" === t.replyInfo?.type ? t.replyInfo.replyToMsgId : void 0, N),
            (0,
            E.A)(X, t.chatId, T, R, L, s),
            (0,
            a._W)(( () => {
                t.isPinned && _?.({
                    viewportPinnedIdsToRemove: [t.id]
                })
            }
            ));
            const ee = r <= 0
              , [te,ne] = (0,
            p.A)(ee)
              , ae = "giftPremium" === t.content.action?.type
              , oe = "giftCode" === t.content.action?.type
              , ie = "suggestProfilePhoto" === t.content.action?.type && t.content.action.photo
              , re = (0,
            i.CV)(t)
              , se = "giftStars" === t.content.action?.type
              , le = "prizeStars" === t.content.action?.type;
            (0,
            a.vJ)(( () => {
                ee || setTimeout(ne, 10 * r)
            }
            ), [r, ne, ee]);
            const ce = (0,
            y.Vz)(X, $)
              , de = (0,
            a.li)(( () => {
                const e = U?.current && t.id >= U.current;
                return ae && !t.isOutgoing && e
            }
            )());
            (0,
            a.vJ)(( () => {
                ce && de.current && (de.current = !1,
                V({
                    withStars: !0
                }))
            }
            ), [ce, V]);
            const {transitionClassNames: me} = (0,
            v.A)(te, void 0, ee, !1)
              , ue = (0,
            o.mS)().users.byId
              , Ae = (0,
            a.Kr)(( () => I ? I.map((e => ue?.[e])).filter(Boolean) : void 0), [I, ue])
              , he = (0,
            a.hb)(( () => (0,
            d.V)(Q, t, w, S, Ae, N, M, D, {
                isEmbedded: n
            }, z, $)), [n, t, z, $, Q, S, w, M, N, Ae, D])
              , {isContextMenuOpen: pe, contextMenuAnchor: ye, handleBeforeContextMenu: ge, handleContextMenu: fe, handleContextMenuClose: ve, handleContextMenuHide: Ee} = (0,
            A.A)(X)
              , Ce = void 0 !== ye
              , be = () => {
                Z({
                    chatId: t.chatId,
                    messageId: t.id
                })
            }
              , we = () => {
                const e = t.content.action?.slug;
                e && H({
                    slug: e,
                    message: {
                        chatId: t.chatId,
                        messageId: t.id
                    }
                })
            }
            ;
            if (F && "TopicWasCreatedAction" === t.content.action?.text)
                return a.Ay.createElement("span", {
                    ref: X
                });
            if (n)
                return a.Ay.createElement("span", {
                    ref: X,
                    className: "embedded-action-message"
                }, he());
            const Se = (0,
            l.A)("ActionMessage message-list-item", T && !L && "focused", (ae || ie) && "centered-action", Ce && "has-menu-open", b && "last-in-list", me);
            return a.Ay.createElement("div", {
                ref: X,
                id: (0,
                i.GZ)(t.id),
                className: Se,
                "data-message-id": t.id,
                "data-is-pinned": t.isPinned || void 0,
                onMouseDown: e => {
                    (0,
                    u.l)(e),
                    ge(e)
                }
                ,
                onContextMenu: fe
            }, !ie && !oe && !re && a.Ay.createElement("span", {
                className: "action-message-content",
                onClick: () => {
                    "receipt" === t.content.action?.type && q({
                        chatId: t.chatId,
                        messageId: t.id
                    })
                }
            }, he()), ae && a.Ay.createElement("span", {
                className: "action-message-gift",
                tabIndex: 0,
                role: "button",
                onClick: () => {
                    J({
                        isGift: !0,
                        fromUserId: w?.id,
                        toUserId: I?.[0],
                        monthsAmount: t.content.action?.months || 0
                    })
                }
            }, a.Ay.createElement(C.A, {
                key: t.id,
                sticker: B,
                play: K,
                noLoop: !0,
                nonInteractive: !0
            }), a.Ay.createElement("strong", null, Q("ActionGiftPremiumTitle")), a.Ay.createElement("span", null, Q("ActionGiftPremiumSubtitle", Q("Months", t.content.action?.months, "i"))), a.Ay.createElement("span", {
                className: "action-message-button"
            }, Q("ActionGiftPremiumView"))), oe && function() {
                const e = t.content.action?.isGiveaway
                  , n = t.content.action?.isUnclaimed;
                return a.Ay.createElement("span", {
                    className: "action-message-gift action-message-gift-code",
                    tabIndex: 0,
                    role: "button",
                    onClick: we
                }, a.Ay.createElement(C.A, {
                    key: t.id,
                    sticker: B,
                    play: K,
                    noLoop: !0,
                    nonInteractive: !0
                }), a.Ay.createElement("strong", null, Q(n ? "BoostingUnclaimedPrize" : "BoostingCongratulations")), a.Ay.createElement("span", {
                    className: "action-message-subtitle"
                }, k && (0,
                m.A)(Q(e ? "BoostingReceivedGiftFrom" : n ? "BoostingReceivedPrizeFrom" : "BoostingYouHaveUnclaimedPrize", (0,
                i.Js)(Q, k)), ["simple_markdown"])), a.Ay.createElement("span", {
                    className: "action-message-subtitle"
                }, (0,
                m.A)(Q("BoostingUnclaimedPrizeDuration", Q("Months", t.content.action?.months, "i")), ["simple_markdown"])), a.Ay.createElement("span", {
                    className: "action-message-button"
                }, Q("BoostingReceivedGiftOpenBtn")))
            }(), se && a.Ay.createElement("span", {
                className: "action-message-gift action-message-gift-code",
                tabIndex: 0,
                role: "button",
                onClick: () => {
                    W({
                        chatId: t.chatId,
                        messageId: t.id
                    })
                }
            }, a.Ay.createElement(C.A, {
                key: t.id,
                sticker: O,
                play: K,
                noLoop: !0,
                nonInteractive: !0
            }), a.Ay.createElement("div", {
                className: "action-message-stars-balance"
            }, (0,
            c.Sm)(t.content.action.stars), a.Ay.createElement("strong", null, Q("Stars"))), a.Ay.createElement("span", {
                className: "action-message-stars-subtitle"
            }, (0,
            m.A)(Q(t.isOutgoing ? "ActionGiftStarsSubtitle" : "ActionGiftStarsSubtitleYou", (0,
            i.Js)(Q, k)), ["simple_markdown"])), a.Ay.createElement("span", {
                className: "action-message-button"
            }, Q("ActionGiftPremiumView"))), le && function() {
                const e = t.content.action?.isUnclaimed;
                return a.Ay.createElement("span", {
                    className: "action-message-gift action-message-gift-code",
                    tabIndex: 0,
                    role: "button",
                    onClick: be
                }, a.Ay.createElement(C.A, {
                    key: t.id,
                    sticker: O,
                    play: K,
                    noLoop: !0,
                    nonInteractive: !0
                }), a.Ay.createElement("strong", null, Q(e ? "BoostingUnclaimedPrize" : "BoostingCongratulations")), a.Ay.createElement("span", {
                    className: "action-message-subtitle"
                }, k && (0,
                m.A)(Q(e ? "BoostingReceivedPrizeFrom" : "BoostingYouHaveUnclaimedPrize", (0,
                i.Js)(Q, k)), ["simple_markdown"])), a.Ay.createElement("span", {
                    className: "action-message-subtitle"
                }, (0,
                m.A)(Y("PrizeCredits", {
                    count: a.Ay.createElement("b", null, (0,
                    c.Sm)(t.content.action?.stars))
                }, {
                    withNodes: !0
                }), ["simple_markdown"])), a.Ay.createElement("span", {
                    className: "action-message-button"
                }, Q("ActionGiftPremiumView")))
            }(), ie && a.Ay.createElement(P, {
                message: t,
                renderContent: he
            }), re && a.Ay.createElement(G, {
                chatId: M
            }), ye && a.Ay.createElement(x.A, {
                isOpen: pe,
                anchor: ye,
                message: t,
                messageListType: "thread",
                onClose: ve,
                onCloseAnimationEnd: Ee
            }))
        }
        )))
    }
    ,
    48553: (e, t, n) => {
        n.d(t, {
            A: () => C
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(89925)
          , s = n(66644)
          , l = n(90709)
          , c = n(29807)
          , d = n(82393)
          , m = n(2178)
          , u = n(17712)
          , A = n(59030)
          , h = n(64493)
          , p = n(22699)
          , y = n(24433)
          , g = n(60859)
          , f = n(80089)
          , v = n(80464);
        const E = e => {
            const {isOpen: t} = e
              , n = (0,
            v.A)(f.ar.Extra, "HeaderMenuContainer", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
          , C = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n, threadId: a, messageListType: o, isMobile: r} = t;
            const s = (0,
            c.hds)(e, n)
              , m = Boolean(s && (0,
            l.WX)(s))
              , u = Boolean(s && (0,
            l.Vs)(s))
              , A = (0,
            c.wmb)(e)
              , h = (0,
            c.Qq_)(e)
              , p = (0,
            l.L8)(n)
              , {doNotTranslate: y} = e.settings.byKey;
            if (!s || s.isRestricted || (0,
            c.rTV)(e))
                return {
                    noMenu: !0,
                    language: A,
                    translationLanguage: h,
                    doNotTranslate: y
                };
            const g = (0,
            c.yps)(e, n)
              , f = p ? void 0 : (0,
            c.AWZ)(e, n)
              , v = p ? (0,
            c.vGo)(e, n) : void 0
              , E = f || v
              , C = (0,
            c.nZ4)(e, n)
              , b = "thread" === o && a === i.l3
              , w = "thread" === o && a !== i.l3
              , S = (0,
            c.gjV)(e, r)
              , I = (0,
            l.cG)(n, a, e.currentUserId)
              , N = !!p && (0,
            c.apd)(e, n)
              , M = Boolean(g && N)
              , k = !M && Boolean((0,
            c.I_m)(e, n))
              , T = N && !g
              , P = Boolean((b || s.isForum) && (m || u) && s.isNotJoined)
              , x = b || w
              , R = d.OL && (0,
            l.L8)(s.id) && !C && !g && !s.isSupport && !(0,
            l.Qe)(s.id)
              , L = b && !C && !P
              , B = I || b && !P
              , O = d.OL && b && s.isCallActive
              , F = d.OL && b && !s.isCallActive && (s.adminRights?.manageCall || s.isCreator && (0,
            l.yn)(s))
              , D = b && f?.canViewStatistics
              , U = b && f?.canViewMonetization
              , K = b && (u || m) && (D || (0,
            l.ub)(s, "postStories"))
              , j = !K && (u || m)
              , z = b ? f?.requestsPending : void 0
              , $ = Boolean(s?.isNotJoined && s.isJoinToSend)
              , _ = Boolean(s?.isNotJoined && s.isJoinRequest)
              , J = !(0,
            c.PKK)(e)
              , V = Boolean((0,
            c.qZq)(e, n));
            return {
                noMenu: !1,
                isChannel: m,
                isRightColumnShown: S,
                canStartBot: k,
                canRestartBot: M,
                canSubscribe: P,
                canSearch: x,
                canCall: R,
                canMute: L,
                canViewStatistics: D,
                canViewMonetization: U,
                canViewBoosts: K,
                canShowBoostModal: j,
                canLeave: B,
                canEnterVoiceChat: O,
                canCreateVoiceChat: F,
                pendingJoinRequests: z,
                shouldJoinToSend: $,
                shouldSendJoinRequest: _,
                noAnimation: J,
                canTranslate: (0,
                c.jGY)(e, n) && !E?.isTranslationDisabled,
                isTranslating: V,
                translationLanguage: h,
                language: A,
                doNotTranslate: y,
                detectedChatLanguage: s.detectedLanguage,
                canUnblock: T
            }
        }
        ))((e => {
            let {chatId: t, threadId: n, noMenu: i, isMobile: l, isChannel: c, canStartBot: f, canRestartBot: v, canUnblock: C, canSubscribe: w, canSearch: S, canCall: I, canMute: N, canViewStatistics: M, canViewMonetization: k, canViewBoosts: T, canShowBoostModal: P, canLeave: x, canEnterVoiceChat: R, canCreateVoiceChat: L, pendingJoinRequests: B, isRightColumnShown: O, isForForum: F, canExpandActions: D, shouldJoinToSend: U, shouldSendJoinRequest: K, noAnimation: j, canTranslate: z, isTranslating: $, translationLanguage: _, language: J, detectedChatLanguage: V, doNotTranslate: H, onTopicSearch: q} = e;
            const {joinChannel: G, sendBotCommand: W, openMiddleSearch: Z, restartBot: Q, requestMasterAndRequestCall: Y, requestNextManagementScreen: X, showNotification: ee, openChat: te, requestChatTranslation: ne, togglePeerTranslations: ae, openChatLanguageModal: oe, setSettingOption: ie, unblockUser: re, setViewForumAsMessages: se} = (0,
            o.ko)()
              , le = (0,
            a.li)(null)
              , ce = (0,
            A.A)()
              , [de,me] = (0,
            a.J0)(!1)
              , [ue,Ae] = (0,
            a.J0)(void 0)
              , he = (0,
            u.A)(( () => {
                me(!0);
                const e = le.current.getBoundingClientRect();
                Ae({
                    x: e.right,
                    y: e.bottom
                })
            }
            ))
              , pe = (0,
            u.A)(( () => {
                me(!1)
            }
            ))
              , ye = (0,
            u.A)(( () => {
                Ae(void 0)
            }
            ))
              , ge = (0,
            u.A)(( () => {
                G({
                    chatId: t
                }),
                K && ee({
                    message: ce(c ? "RequestToJoinChannelSentDescription" : "RequestToJoinGroupSentDescription")
                })
            }
            ))
              , fe = (0,
            u.A)(( () => {
                W({
                    command: "/start"
                })
            }
            ))
              , ve = (0,
            u.A)(( () => {
                Q({
                    chatId: t
                })
            }
            ))
              , Ee = (0,
            u.A)(( () => {
                re({
                    userId: t
                })
            }
            ))
              , Ce = (0,
            u.A)(( () => {
                ne($ ? {
                    chatId: t,
                    toLanguageCode: void 0
                } : {
                    chatId: t,
                    toLanguageCode: _
                })
            }
            ))
              , be = (0,
            u.A)(( () => {
                X({
                    screen: r.je.JoinRequests
                })
            }
            ))
              , we = (0,
            u.A)(( () => {
                F ? q?.() : (Z(),
                l ? b() : j ? (0,
                s.YS)(( () => {
                    (0,
                    s.Uz)(b)
                }
                )) : setTimeout(b, 320))
            }
            ))
              , Se = (0,
            u.A)(( () => {
                te({
                    id: t
                }),
                se({
                    chatId: t,
                    isEnabled: !0
                })
            }
            ))
              , Ie = (0,
            u.A)(( () => {
                Y({
                    userId: t
                })
            }
            ))
              , Ne = (0,
            u.A)((e => {
                S && d.lE && !e.shiftKey && (e.preventDefault(),
                we())
            }
            ))
              , Me = (0,
            u.A)(( (e, t) => {
                const n = `TranslateLanguage${t.split("-")[0].toUpperCase()}`
                  , a = ce(n);
                if (a !== n)
                    return ce(e, a);
                const o = new Intl.DisplayNames([J],{
                    type: "language"
                }).of(t);
                return ce(`${e}Other`, o)
            }
            ))
              , ke = (0,
            a.Kr)(( () => $ ? ce("ShowOriginalButton") : Me("TranslateToButton", _)), [_, Me, $, ce])
              , Te = (0,
            a.Kr)(( () => {
                if (V)
                    return Me("DoNotTranslateLanguage", V)
            }
            ), [Me, V])
              , Pe = (0,
            u.A)(( () => {
                ae({
                    chatId: t,
                    isEnabled: !1
                }),
                ne({
                    chatId: t,
                    toLanguageCode: void 0
                })
            }
            ))
              , xe = (0,
            u.A)(( () => {
                oe({
                    chatId: t
                })
            }
            ))
              , Re = (0,
            u.A)(( () => {
                V && (ie({
                    doNotTranslate: [...H, V]
                }),
                ne({
                    chatId: t,
                    toLanguageCode: void 0
                }),
                ee({
                    message: Me("AddedToDoNotTranslate", V)
                }))
            }
            ));
            (0,
            m.v)((0,
            a.Kr)(( () => ({
                "Mod+F": Ne
            })), []));
            const Le = (0,
            a.Kr)(( () => e => {
                let {onTrigger: t, isOpen: n} = e;
                return a.Ay.createElement(h.A, {
                    round: !0,
                    ripple: O,
                    color: "translucent",
                    size: "smaller",
                    className: n ? "active" : "",
                    onClick: t,
                    ariaLabel: ce("TranslateMessage")
                }, a.Ay.createElement("i", {
                    className: "icon icon-language",
                    "aria-hidden": !0
                }))
            }
            ), [O, ce]);
            return a.Ay.createElement("div", {
                className: "HeaderActions"
            }, !F && z && a.Ay.createElement(p.A, {
                className: "stickers-more-menu with-menu-transitions",
                trigger: Le,
                positionX: "right"
            }, a.Ay.createElement(y.A, {
                icon: "language",
                onClick: Ce
            }, ke), a.Ay.createElement(y.A, {
                icon: "replace",
                onClick: xe
            }, ce("Chat.Translate.Menu.To")), a.Ay.createElement(g.A, null), V && a.Ay.createElement(y.A, {
                icon: "hand-stop",
                onClick: Re
            }, Te), a.Ay.createElement(y.A, {
                icon: "close-circle",
                onClick: Pe
            }, ce("Hide"))), !l && a.Ay.createElement(a.Ay.Fragment, null, D && !K && (w || U) && a.Ay.createElement(h.A, {
                size: "tiny",
                ripple: !0,
                fluid: !0,
                onClick: ge
            }, ce(c ? "ProfileJoinChannel" : "ProfileJoinGroup")), D && K && a.Ay.createElement(h.A, {
                size: "tiny",
                ripple: !0,
                fluid: !0,
                onClick: ge
            }, ce("ChannelJoinRequest")), D && f && a.Ay.createElement(h.A, {
                size: "tiny",
                ripple: !0,
                fluid: !0,
                onClick: fe
            }, ce("BotStart")), D && v && a.Ay.createElement(h.A, {
                size: "tiny",
                ripple: !0,
                fluid: !0,
                onClick: ve
            }, ce("BotRestart")), D && C && a.Ay.createElement(h.A, {
                size: "tiny",
                ripple: !0,
                fluid: !0,
                onClick: Ee
            }, ce("Unblock")), S && a.Ay.createElement(h.A, {
                round: !0,
                ripple: O,
                color: "translucent",
                size: "smaller",
                onClick: we,
                ariaLabel: ce("Conversation.SearchPlaceholder")
            }, a.Ay.createElement("i", {
                className: "icon icon-search",
                "aria-hidden": !0
            })), I && a.Ay.createElement(h.A, {
                round: !0,
                color: "translucent",
                size: "smaller",
                onClick: Ie,
                ariaLabel: "Call"
            }, a.Ay.createElement("i", {
                className: "icon icon-phone",
                "aria-hidden": !0
            }))), !F && Boolean(B) && a.Ay.createElement(h.A, {
                round: !0,
                className: "badge-button",
                ripple: O,
                color: "translucent",
                size: "smaller",
                onClick: be,
                ariaLabel: ce(c ? "SubscribeRequests" : "MemberRequests")
            }, a.Ay.createElement("i", {
                className: "icon icon-user",
                "aria-hidden": !0
            }), a.Ay.createElement("div", {
                className: "badge"
            }, B)), a.Ay.createElement(h.A, {
                ref: le,
                className: de ? "active" : "",
                round: !0,
                ripple: !l,
                size: "smaller",
                color: "translucent",
                disabled: i,
                ariaLabel: "More actions",
                onClick: he
            }, a.Ay.createElement("i", {
                className: "icon icon-more",
                "aria-hidden": !0
            })), ue && a.Ay.createElement(E, {
                chatId: t,
                threadId: n,
                isOpen: de,
                anchor: ue,
                withExtraActions: l || !D,
                isChannel: c,
                canStartBot: f,
                canSubscribe: w,
                canSearch: S,
                canCall: I,
                canMute: N,
                canViewStatistics: M,
                canViewBoosts: T,
                canViewMonetization: k,
                canShowBoostModal: P,
                canLeave: x,
                canEnterVoiceChat: R,
                canCreateVoiceChat: L,
                pendingJoinRequests: B,
                onJoinRequestsClick: be,
                withForumActions: F,
                onSubscribeChannel: ge,
                onSearchClick: we,
                onAsMessagesClick: Se,
                onClose: pe,
                onCloseAnimationEnd: ye
            }))
        }
        )));
        function b() {
            const e = document.querySelector("#MiddleSearch input");
            e?.focus()
        }
    }
    ,
    54639: (e, t, n) => {
        n.d(t, {
            A: () => f
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(37661)
          , r = n(17712)
          , s = n(59030)
          , l = n(71429)
          , c = n(24433)
          , d = n(23174)
          , m = n(90709)
          , u = n(87357)
          , A = n(43874)
          , h = n(62587);
        const p = "VGmPJoga"
          , y = /#fff/gi
          , g = (0,
        a.ph)((e => {
            let {icon: t, theme: n} = e;
            const {isTouchScreen: o} = (0,
            A.Ay)()
              , i = (0,
            h.A)((0,
            m.mr)(t, "full"), !1, d.qZ.Text)
              , r = (0,
            a.Kr)(( () => {
                if (!i)
                    return "";
                const e = "dark" === n ? "rgb(170, 170, 170)" : "rgb(112, 117, 121)"
                  , t = i.replace(y, e)
                  , a = (new DOMParser).parseFromString(t, "image/svg+xml");
                return a.querySelectorAll("path").forEach((t => {
                    t.style.stroke = e,
                    t.style.strokeWidth = "0.5px"
                }
                )),
                `data:image/svg+xml;utf8,${a.documentElement.outerHTML}`
            }
            ), [i, n]);
            return a.Ay.createElement("i", {
                className: (0,
                u.A)("mklnEg0s", "icon", !o && p)
            }, a.Ay.createElement("img", {
                src: r,
                alt: "",
                className: (0,
                u.A)("tT8KQwg0", !o && p),
                draggable: !1
            }))
        }
        ))
          , f = (0,
        a.ph)((e => {
            let {bot: t, theme: n, chatId: d, threadId: m, isInSideMenu: u, canShowNew: A, onMenuOpened: h, onMenuClosed: p} = e;
            const {callAttachBot: y, toggleAttachBot: f} = (0,
            o.ko)()
              , v = (0,
            s.A)()
              , E = (0,
            a.Kr)(( () => t.icons.find((e => {
                let {name: t} = e;
                return "default_static" === t
            }
            ))?.document), [t.icons])
              , [C,b,w] = (0,
            i.A)()
              , [S,I] = (0,
            a.J0)(void 0)
              , N = (0,
            r.A)((e => {
                e.preventDefault();
                const t = e.currentTarget.getBoundingClientRect();
                I({
                    x: t.right,
                    y: t.bottom
                }),
                h(),
                b()
            }
            ))
              , M = (0,
            r.A)(( () => {
                y(u ? {
                    bot: t,
                    isFromSideMenu: !0
                } : {
                    bot: t,
                    chatId: d,
                    threadId: m
                })
            }
            ))
              , k = (0,
            r.A)(( () => {
                w(),
                p()
            }
            ))
              , T = (0,
            r.A)(( () => {
                I(void 0)
            }
            ))
              , P = (0,
            r.A)(( () => {
                f({
                    botId: t.id,
                    isEnabled: !1
                })
            }
            ));
            return a.Ay.createElement(c.A, {
                key: t.id,
                customIcon: E && a.Ay.createElement(g, {
                    icon: E,
                    theme: n
                }),
                icon: E ? void 0 : "bots",
                onClick: M,
                onContextMenu: N
            }, t.shortName, A && t.isDisclaimerNeeded && a.Ay.createElement("span", {
                className: "menu-item-badge"
            }, v("New")), S && a.Ay.createElement(l.A, {
                isOpen: C,
                positionX: "right",
                style: `left: ${S.x}px;top: ${S.y}px;`,
                className: "bot-attach-context-menu",
                autoClose: !0,
                withPortal: !0,
                onClose: k,
                onCloseAnimationEnd: T
            }, a.Ay.createElement(c.A, {
                icon: "stop",
                destructive: !0,
                onClick: P
            }, v("WebApp.RemoveBot"))))
        }
        ))
    }
    ,
    25897: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(80089)
          , i = n(80464);
        const r = e => {
            const {isOpen: t} = e
              , n = (0,
            i.A)(o.ar.Extra, "CustomEmojiTooltip", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
    }
    ,
    83689: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(80089)
          , i = n(80464);
        const r = e => {
            const {isOpen: t} = e
              , n = (0,
            i.A)(o.ar.Extra, "CustomSendMenu", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
    }
    ,
    41510: (e, t, n) => {
        n.d(t, {
            I: () => g,
            A: () => f
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(87357)
          , s = n(11778)
          , l = n(55153)
          , c = n(45761)
          , d = n(17712)
          , m = n(59030)
          , u = n(73767)
          , A = n(50680)
          , h = n(3325)
          , p = n(37661);
        const y = (0,
        a.ph)((e => {
            let {isQuick: t, isGeneric: n, onFileSelect: o} = e;
            const [i,s,l] = (0,
            p.A)()
              , c = (0,
            r.A)("DropTarget", i && "hovered");
            return a.Ay.createElement("div", {
                className: c,
                onDrop: o,
                onDragEnter: s,
                onDragLeave: e => {
                    const {relatedTarget: t} = e;
                    t && e.stopPropagation(),
                    l()
                }
                ,
                "data-dropzone": !0
            }, a.Ay.createElement("div", {
                className: "target-content"
            }, a.Ay.createElement("div", {
                className: "icon icon-" + (t ? "photo" : "document")
            }), a.Ay.createElement("div", {
                className: "title"
            }, "Drop files here to send them"), !n && a.Ay.createElement("div", {
                className: "description"
            }, t ? "in a quick way" : "without compression")))
        }
        ));
        let g = function(e) {
            return e.None = "none",
            e.Document = "document",
            e.QuickFile = "quick_file",
            e
        }({});
        const f = (0,
        a.ph)((e => {
            let {isOpen: t, withQuick: n, onHide: p, onFileSelect: g, editingMessage: f} = e;
            const v = (0,
            m.A)()
              , {showNotification: E} = (0,
            o.ko)()
              , C = (0,
            a.li)(null)
              , b = (0,
            u.A)(n)
              , {shouldRender: w, transitionClassNames: S} = (0,
            A.A)(t)
              , I = f && f?.groupedId;
            (0,
            a.vJ)(( () => t ? (0,
            s.A)(p) : void 0), [t, p]);
            const N = (0,
            d.A)((async e => {
                const {dataTransfer: t} = e;
                let a = [];
                if (!(t.files && t.files.length > 0) || t.items && t.items.length) {
                    if (t.items && t.items.length > 0) {
                        const e = await (0,
                        c.A)(t.items)
                          , n = e && await (0,
                        l.A)(e[0].name, e[0]);
                        if (f && n && (0,
                        i.eh)(f, n))
                            return void E({
                                message: v(I ? "lng_edit_media_album_error" : "lng_edit_media_invalid_file")
                            });
                        e?.length && (a = a.concat(e))
                    }
                } else
                    a = a.concat(Array.from(t.files));
                p(),
                g(a, !n && void 0)
            }
            ))
              , M = (0,
            d.A)((e => {
                const {dataTransfer: t} = e;
                t.files && t.files.length > 0 && (p(),
                g(Array.from(t.files), !0))
            }
            ))
              , k = (0,
            d.A)((e => {
                e.stopPropagation();
                const {target: t, relatedTarget: n} = e;
                !t.matches(".DropTarget, .DropArea") || n && n.matches(".DropTarget, .DropArea") || (C.current = window.setTimeout(( () => {
                    p()
                }
                ), 150))
            }
            ));
            if (!w)
                return;
            const T = n || b
              , P = (0,
            r.A)("DropArea", S);
            return a.Ay.createElement(h.A, {
                containerId: "#middle-column-portals"
            }, a.Ay.createElement("div", {
                className: P,
                onDragLeave: k,
                onDragOver: () => {
                    C.current && window.clearTimeout(C.current)
                }
                ,
                onDrop: p,
                onClick: p
            }, a.Ay.createElement(y, {
                onFileSelect: N,
                isGeneric: !T
            }), T && a.Ay.createElement(y, {
                onFileSelect: M,
                isQuick: !0
            })))
        }
        ))
    }
    ,
    49068: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(80089)
          , i = n(80464);
        const r = e => {
            const {isOpen: t} = e
              , n = (0,
            i.A)(o.ar.Extra, "EmojiTooltip", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
    }
    ,
    78407: (e, t, n) => {
        n.d(t, {
            A: () => H
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(66644)
          , s = n(29807)
          , l = n(87357)
          , c = n(52674)
          , d = n(14680)
          , m = n(17237)
          , u = n(36353)
          , A = n(37836)
          , h = n(82393)
          , p = n(4961)
          , y = n(11359)
          , g = n(43874)
          , f = n(19129)
          , v = n(37661)
          , E = n(17712)
          , C = n(59030)
          , b = n(88458)
          , w = n(41733);
        function S(e, t, n) {
            var a;
            return (t = "symbol" == typeof (a = function(e, t) {
                if ("object" != typeof e || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, "string");
                    if ("object" != typeof a)
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(t)) ? a : a + "")in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        class I {
            constructor(e, t, n) {
                this.container = t,
                this.options = n,
                S(this, "video", void 0),
                S(this, "isPlaying", !1),
                this.video = document.createElement("video"),
                this.video.src = e,
                this.video.disablePictureInPicture = !0,
                this.video.muted = !0,
                n.style && this.video.setAttribute("style", n.style),
                this.video.style.position = "absolute",
                this.video.load(),
                this.options.noLoop || (this.video.loop = !0),
                (0,
                r.RK)(( () => {
                    this.container.appendChild(this.video),
                    this.recalculatePositionAndSize()
                }
                ))
            }
            play() {
                !this.isPlaying && this.video && (this.recalculatePositionAndSize(),
                this.video.paused && (0,
                w.A)(this.video),
                this.isPlaying = !0)
            }
            pause() {
                this.isPlaying && this.video && (this.video.paused || this.video.pause(),
                this.isPlaying = !1)
            }
            destroy() {
                this.pause(),
                this.video?.remove(),
                this.video = void 0
            }
            updatePosition(e) {
                this.options.position = e,
                this.recalculatePositionAndSize()
            }
            recalculatePositionAndSize() {
                const {size: e, position: {x: t, y: n}} = this.options;
                (0,
                r.YS)(( () => {
                    if (!this.video)
                        return;
                    const a = this.video
                      , {width: o, height: i} = this.container.getBoundingClientRect();
                    (0,
                    r.RK)(( () => {
                        a.style.left = `${Math.round(t * o)}px`,
                        a.style.top = `${Math.round(n * i)}px`,
                        a.style.width = `${e}px`,
                        a.style.height = `${e}px`
                    }
                    ))
                }
                ))
            }
        }
        var N = n(60261)
          , M = n(43336)
          , k = n(71322)
          , T = n(76023)
          , P = n(28021)
          , x = n(86974)
          , R = n(82117)
          , L = n(93545)
          , B = n(672)
          , O = n(61157)
          , F = n(38691);
        const D = 1.25 * T.$;
        var U = n(64493)
          , K = n(61361)
          , j = n(80089)
          , z = n(80464);
        const $ = e => {
            const {isOpen: t} = e
              , n = (0,
            z.A)(j.ar.Extra, "TextFormatter", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
          , _ = "input-scroller"
          , J = 140
          , V = ["Esc", "Escape", "Enter", "PageUp", "PageDown", "Meta", "Alt", "Ctrl", "ArrowDown", "ArrowUp", "Control", "Shift"]
          , H = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {chatId: n, threadId: a} = t;
            const {messageSendKeyCombo: o} = e.settings.byKey;
            return {
                messageSendKeyCombo: o,
                replyInfo: n && a ? (0,
                s.GA4)(e, n, a)?.replyInfo : void 0,
                isSelectModeActive: (0,
                s.rTV)(e),
                canPlayAnimatedEmojis: (0,
                s.BWX)(e)
            }
        }
        ))((e => {
            let {ref: t, id: n, chatId: w, captionLimit: S, isAttachmentModalInput: T, isStoryInput: j, customEmojiPrefix: z, editableInputId: H, isReady: q, isActive: G, getHtml: W, placeholder: Z, timedPlaceholderLangKey: Q, timedPlaceholderDate: Y, forcedPlaceholder: X, canSendPlainText: ee, canAutoFocus: te, noFocusInterception: ne, shouldSuppressFocus: ae, shouldSuppressTextFormatter: oe, replyInfo: ie, isSelectModeActive: re, canPlayAnimatedEmojis: se, messageSendKeyCombo: le, onUpdate: ce, onSuppressedFocus: de, onSend: me, onScroll: ue, onFocus: Ae, onBlur: he, isNeedPremium: pe} = e;
            const {editLastMessage: ye, replyToNextMessage: ge, showAllowedMessageTypesNotification: fe, openPremiumModal: ve} = (0,
            o.ko)();
            let Ee = (0,
            a.li)(null);
            t && (Ee = t);
            const Ce = (0,
            a.li)(null)
              , be = (0,
            a.li)(null)
              , we = (0,
            a.li)(null)
              , Se = (0,
            a.li)(null)
              , Ie = (0,
            a.li)(null)
              , Ne = (0,
            a.li)(null)
              , Me = (0,
            C.A)()
              , ke = (0,
            a.li)(!1)
              , [Te,Pe,xe] = (0,
            v.A)()
              , [Re,Le] = (0,
            a.J0)()
              , [Be,Oe] = (0,
            a.J0)()
              , [Fe,De] = (0,
            a.J0)(!1)
              , {isMobile: Ue} = (0,
            g.Ay)()
              , Ke = Ue && (h.pz || h.Ni)
              , [je,ze] = (0,
            a.J0)(!1);
            (0,
            a.vJ)(( () => {
                ze(Boolean(Q && Y))
            }
            ), [Y, Q]);
            const $e = (0,
            E.A)(( () => {
                ze(!1)
            }
            ));
            !function(e, t, n, i, l, c, d, m, u) {
                const A = (0,
                x.A)(t, !m)
                  , h = (0,
                P.A)(A, !0)
                  , p = (0,
                F.A)()
                  , y = (0,
                a.li)(new Map)
                  , g = (0,
                E.A)((e => {
                    e.forEach((e => {
                        const t = y.current.get(e);
                        t && (t.destroy(),
                        y.current.delete(e))
                    }
                    ))
                }
                ))
                  , f = (0,
                E.A)(( () => {
                    if (!(m && t.current && n.current && i.current))
                        return;
                    const e = (0,
                    o.mS)()
                      , a = new Set(y.current.keys());
                    Array.from(t.current.querySelectorAll(".custom-emoji")).forEach((t => {
                        if (!t.dataset.uniqueId)
                            return;
                        const o = `${c}${t.dataset.uniqueId}${A || ""}`
                          , r = t.dataset.documentId;
                        a.delete(o);
                        const m = (0,
                        N.ZR)(r);
                        if (!m)
                            return;
                        const u = n.current.getBoundingClientRect()
                          , g = t.getBoundingClientRect()
                          , f = (0,
                        M.LI)((g.left - u.left) / u.width, 4)
                          , v = (0,
                        M.LI)((g.top - u.top) / u.height, 4);
                        if (y.current.has(o))
                            return void y.current.get(o).updatePosition(f, v);
                        const E = e.customEmojis.byId[r];
                        if (!E)
                            return;
                        const C = E?.stickerSetInfo && (0,
                        s.CzR)(e, E.stickerSetInfo)
                          , w = [c, r, A, p].filter(Boolean).join("_");
                        (async function(e) {
                            let {customEmoji: t, sharedCanvasRef: n, sharedCanvasHqRef: a, absoluteContainerRef: o, renderId: i, viewId: r, mediaUrl: s, position: l, isHq: c, textColor: d, colorFilter: m} = e;
                            if (t.isLottie) {
                                const e = t.shouldUseTextColor && d ? (0,
                                k.E2)(d) : void 0
                                  , o = (await (0,
                                b.Y)()).init(s, c ? a.current : n.current, i, {
                                    size: D,
                                    coords: l,
                                    isLowPriority: !c
                                }, r, e ? [e.r, e.g, e.b] : void 0);
                                return {
                                    play: () => o.play(),
                                    pause: () => o.pause(),
                                    destroy: () => o.removeView(r),
                                    updatePosition: (e, t) => o.setSharedCanvasCoords(r, {
                                        x: e,
                                        y: t
                                    })
                                }
                            }
                            if (t.isVideo) {
                                const e = t.shouldUseTextColor && m ? `filter: ${m};` : void 0
                                  , n = new I(s,o.current,{
                                    size: D,
                                    position: l,
                                    style: e
                                });
                                return {
                                    play: () => n.play(),
                                    pause: () => n.pause(),
                                    destroy: () => n.destroy(),
                                    updatePosition: (e, t) => n.updatePosition({
                                        x: e,
                                        y: t
                                    })
                                }
                            }
                            throw new Error("Unsupported custom emoji type")
                        }
                        )({
                            customEmoji: E,
                            sharedCanvasRef: n,
                            sharedCanvasHqRef: i,
                            absoluteContainerRef: l,
                            renderId: w,
                            viewId: o,
                            mediaUrl: m,
                            isHq: C,
                            position: {
                                x: f,
                                y: v
                            },
                            textColor: A,
                            colorFilter: h
                        }).then((e => {
                            d && e.play(),
                            y.current.set(o, e)
                        }
                        ))
                    }
                    )),
                    g(Array.from(a))
                }
                ));
                (0,
                a.vJ)(( () => (0,
                N.K3)(f)), [f]),
                (0,
                a.vJ)(( () => {
                    const e = y.current;
                    return () => {
                        g(Array.from(e.keys()))
                    }
                }
                ), []),
                (0,
                a.vJ)(( () => {
                    e() && t.current && n.current && u && m ? (0,
                    r.YS)(( () => {
                        f()
                    }
                    )) : g(Array.from(y.current.keys()))
                }
                ), [e, f, t, g, n, u, m]),
                (0,
                a.Nf)(( () => {
                    document.documentElement.style.setProperty("--input-custom-emoji-filter", h || "none")
                }
                ), [h]),
                (0,
                R.A)((e => {
                    let[t] = e;
                    void 0 !== t && A !== t && f()
                }
                ), [A, f]);
                const v = (0,
                B.A)(f, [f], 300, !1);
                (0,
                L.A)(n, v),
                (0,
                R.A)((e => {
                    let[t] = e;
                    p !== t && (g(Array.from(y.current.keys())),
                    f())
                }
                ), [p, f]);
                const C = (0,
                E.A)(( () => {
                    y.current.forEach((e => {
                        e.pause()
                    }
                    ))
                }
                ))
                  , w = (0,
                E.A)(( () => {
                    d && y.current?.forEach((e => {
                        e.play()
                    }
                    ))
                }
                ))
                  , S = (0,
                E.A)(( () => {
                    (0,
                    r.YS)(w)
                }
                ));
                (0,
                O.A)(C, S)
            }(W, Ee, Se, Ie, Ne, z, se, q, G);
            const _e = T ? 160 : j ? 128 : Ue ? 256 : 416
              , Je = (0,
            E.A)((function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (0,
                r.gm)(( () => {
                    const t = Ee.current.closest(`.${_}`)
                      , n = Number(t.style.height.replace("px", ""))
                      , a = we.current
                      , {scrollHeight: o} = a
                      , i = Math.min(o, _e);
                    if (i === n)
                        return;
                    const s = o > _e;
                    function l() {
                        const e = Math.round(50 * Math.log(Math.abs(i - n)));
                        t.style.height = `${i}px`,
                        t.style.transitionDuration = `${e}ms`,
                        t.classList.toggle("overflown", s)
                    }
                    return e ? void (0,
                    r.RK)(l) : l
                }
                ))
            }
            ));
            (0,
            a.Nf)(( () => {
                T && Je(!1)
            }
            ), [T, Je]);
            const Ve = (0,
            a.li)(W());
            (0,
            a.Nf)(( () => {
                const e = G ? W() : "";
                e !== Ee.current.innerHTML && (Ee.current.innerHTML = e),
                e !== be.current.innerHTML && (be.current.innerHTML = e),
                e !== Ve.current && (Ve.current = e,
                Je(!e))
            }
            ), [W, G, Je]),
            (0,
            a.li)(w).current = w;
            const He = (0,
            E.A)(( () => {
                Ee.current && !pe && ((0,
                a.OV)() ? setTimeout(He, 350) : (0,
                u.A)(Ee.current))
            }
            ))
              , qe = (0,
            E.A)(( () => {
                xe(),
                function() {
                    const e = window.getSelection();
                    e && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty())
                }()
            }
            ));
            function Ge() {
                if (h.pz)
                    return !1;
                const e = window.getSelection();
                if (!e || !e.rangeCount || ke.current)
                    return xe(),
                    h.Ni && De(!1),
                    !1;
                const t = e.getRangeAt(0)
                  , n = t.toString().trim();
                return !(oe || !(0,
                y.L)(t, H || i.CfG) || !n || (0,
                m.A)(n) || !t.START_TO_END) || (xe(),
                !1)
            }
            function We() {
                if (!Ge())
                    return;
                if (Fe)
                    return;
                const e = window.getSelection().getRangeAt(0)
                  , t = e.getBoundingClientRect()
                  , n = Ee.current.closest(`.${_}`).getBoundingClientRect();
                let a = t.left + t.width / 2 - n.left;
                a < J ? a = J : a > n.width - J && (a = n.width - J),
                Le({
                    x: a,
                    y: t.top - n.top
                }),
                Oe(e),
                Pe()
            }
            function Ze() {
                Ce.current && window.clearTimeout(Ce.current),
                Ce.current = window.setTimeout(We, 260)
            }
            const Qe = (0,
            E.A)(( () => ve()));
            (0,
            a.vJ)(( () => {
                h.TF || te && He()
            }
            ), [w, He, ie, te]),
            (0,
            a.vJ)(( () => {
                if (!w || H !== i.CfG || ne || Ke || re)
                    return;
                const e = e => {
                    if ((0,
                    d.ZJ)())
                        return;
                    const {key: t} = e
                      , n = e.target;
                    if (!n || V.includes(t))
                        return;
                    const a = Ee.current
                      , o = document.getSelection()?.isCollapsed;
                    if (!((t.startsWith("Arrow") || e.shiftKey && "Shift" === t) && !o || "KeyC" === e.code && (e.ctrlKey || e.metaKey) && "INPUT" !== n.tagName) && a && n !== a && "INPUT" !== n.tagName && "TEXTAREA" !== n.tagName && !n.isContentEditable) {
                        (0,
                        u.A)(a, !0, !0);
                        const t = new KeyboardEvent(e.type,e);
                        a.dispatchEvent(t)
                    }
                }
                ;
                return document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0)
                }
            }
            ), [w, H, Ke, re, ne]),
            (0,
            a.vJ)(( () => {
                const e = (0,
                A.sg)((e => {
                    "Tab" !== e.key || (0,
                    d.ZJ)() || (e.preventDefault(),
                    (0,
                    r.RK)(He))
                }
                ), 2e3, !0, !1);
                return (0,
                c.A)({
                    onTab: e
                })
            }
            ), [He]),
            (0,
            a.vJ)(( () => {
                const e = Ee.current;
                function t() {
                    e.blur()
                }
                return ae && e.addEventListener("focus", t),
                () => {
                    e.removeEventListener("focus", t)
                }
            }
            ), [ae]);
            const Ye = (0,
            f.A)(( () => Boolean(G && W())), [G, W])
              , Xe = (0,
            l.A)("form-control allow-selection", Ye && "touched", ae && "focus-disabled")
              , et = (0,
            l.A)("input-scroller-content", pe && "is-need-premium");
            return a.Ay.createElement("div", {
                id: n,
                onClick: ae ? de : void 0,
                dir: Me.isRtl ? "rtl" : void 0
            }, a.Ay.createElement("div", {
                className: (0,
                l.A)("custom-scroll", _, pe && "is-need-premium"),
                onScroll: ue,
                onClick: T || ee ? void 0 : function() {
                    T || ee || j && pe || fe({
                        chatId: w
                    })
                }
            }, a.Ay.createElement("div", {
                className: et
            }, a.Ay.createElement("div", {
                ref: Ee,
                id: H || i.CfG,
                className: Xe,
                contentEditable: T || ee,
                role: "textbox",
                dir: "auto",
                tabIndex: 0,
                onClick: He,
                onChange: function(e) {
                    const {innerHTML: t, textContent: n} = e.currentTarget;
                    if (ce("<br>" === t ? "" : t),
                    !h.TF && (!n || !n.length) && (h.TL || !t.includes("emoji-small")) && !t.includes("custom-emoji")) {
                        const e = window.getSelection();
                        e && (Ee.current.blur(),
                        e.removeAllRanges(),
                        (0,
                        u.A)(Ee.current, !0))
                    }
                },
                onKeyDown: function(e) {
                    const {isComposing: t} = e
                      , n = W();
                    if (!t && !n && (e.metaKey || e.ctrlKey)) {
                        const t = "ArrowDown" === e.key ? 1 : "ArrowUp" === e.key ? -1 : void 0;
                        if (t)
                            return e.preventDefault(),
                            void ge({
                                targetIndexDelta: t
                            })
                    }
                    t || "Enter" !== e.key || e.shiftKey ? t || "ArrowUp" !== e.key || n || e.metaKey || e.ctrlKey || e.altKey ? e.target.addEventListener("keyup", Ze, {
                        once: !0
                    }) : (e.preventDefault(),
                    ye()) : !Ke && ("enter" === le && !e.shiftKey || "ctrl-enter" === le && (e.ctrlKey || e.metaKey)) && (e.preventDefault(),
                    xe(),
                    me())
                },
                onMouseDown: function(e) {
                    function t(e) {
                        e instanceof KeyboardEvent && "Esc" !== e.key && "Escape" !== e.key || (setTimeout(( () => {
                            ke.current = !1
                        }
                        ), 100),
                        window.removeEventListener("keydown", t),
                        window.removeEventListener("mousedown", t))
                    }
                    2 === e.button ? ke.current || (ke.current = !0,
                    document.addEventListener("mousedown", t),
                    document.addEventListener("keydown", t)) : (e.currentTarget.closest(".message-input-wrapper") || e.target).addEventListener("mouseup", Ze, {
                        once: !0
                    })
                },
                onContextMenu: h.Ni ? function(e) {
                    Ge() && (De(!Fe),
                    Fe ? xe() : (e.preventDefault(),
                    e.stopPropagation(),
                    We()))
                }
                : void 0,
                onTouchCancel: h.Ni ? Ze : void 0,
                "aria-label": Z,
                onFocus: pe ? void 0 : Ae,
                onBlur: pe ? void 0 : he
            }), !X && a.Ay.createElement("span", {
                className: (0,
                l.A)("placeholder-text", !T && !ee && "with-icon", pe && "is-need-premium"),
                dir: "auto"
            }, !T && !ee && a.Ay.createElement("i", {
                className: "icon icon-lock-badge placeholder-icon"
            }), je ? a.Ay.createElement(K.A, {
                langKey: Q,
                endsAt: Y,
                onEnd: $e
            }) : Z, j && pe && a.Ay.createElement(U.A, {
                className: "unlock-button",
                size: "tiny",
                color: "adaptive",
                onClick: Qe
            }, Me("StoryRepliesLockedButton"))), a.Ay.createElement("canvas", {
                ref: Se,
                className: "shared-canvas"
            }), a.Ay.createElement("canvas", {
                ref: Ie,
                className: "shared-canvas"
            }), a.Ay.createElement("div", {
                ref: Ne,
                className: "absolute-video-container"
            }))), a.Ay.createElement("div", {
                ref: we,
                className: (0,
                l.A)("custom-scroll", _, "clone", pe && "is-need-premium")
            }, a.Ay.createElement("div", {
                className: et
            }, a.Ay.createElement("div", {
                ref: be,
                className: (0,
                l.A)(Xe, "clone"),
                dir: "auto"
            }))), void 0 !== S && a.Ay.createElement("div", {
                className: "max-length-indicator",
                dir: "auto"
            }, S), a.Ay.createElement($, {
                isOpen: Te,
                anchorPosition: Re,
                selectedRange: Be,
                setSelectedRange: Oe,
                onClose: qe
            }), X && a.Ay.createElement("span", {
                className: "forced-placeholder"
            }, (0,
            p.A)(X)))
        }
        )))
    }
    ,
    26440: (e, t, n) => {
        n.d(t, {
            A: () => p
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(87357)
          , s = n(37661)
          , l = n(17712)
          , c = n(64493)
          , d = n(66469)
          , m = n(57474)
          , u = n(80089)
          , A = n(80464);
        const h = e => {
            const {isOpen: t} = e
              , n = (0,
            A.A)(u.ar.Extra, "SymbolMenu", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
          , p = (0,
        a.ph)((e => {
            let {chatId: t, threadId: n, isMobile: u, canSendGifs: A, canSendStickers: p, isMessageComposer: y, isReady: g, isSymbolMenuOpen: f, idPrefix: v, isAttachmentModal: E, canSendPlainText: C, isSymbolMenuForced: b, className: w, forceDarkTheme: S, inputCssSelector: I=i.m$5, openSymbolMenu: N, closeSymbolMenu: M, onCustomEmojiSelect: k, onStickerSelect: T, onGifSelect: P, onRemoveSymbol: x, onEmojiSelect: R, closeBotCommandMenu: L, closeSendAsMenu: B} = e;
            const {setStickerSearchQuery: O, setGifSearchQuery: F, addRecentEmoji: D, addRecentCustomEmoji: U} = (0,
            o.ko)()
              , K = (0,
            a.li)(null)
              , [j,z] = (0,
            s.A)()
              , [$,_] = (0,
            a.J0)(void 0)
              , J = (0,
            r.A)("mobile-symbol-menu-button", !g && "not-ready", j ? f && "menu-opened" : f && "is-loading")
              , V = (0,
            l.A)(( () => {
                L?.(),
                B?.(),
                N();
                const e = K.current;
                if (!e)
                    return;
                const {x: t, y: n} = e.getBoundingClientRect();
                _({
                    x: t,
                    y: n
                })
            }
            ))
              , H = (0,
            l.A)((e => {
                "stickers" === e ? (O({
                    query: ""
                }),
                F({
                    query: void 0
                })) : (F({
                    query: ""
                }),
                O({
                    query: void 0
                }))
            }
            ))
              , q = (0,
            l.A)(( () => {
                const e = document.querySelector(E ? i.wVm : I);
                u && e === document.activeElement ? (e?.blur(),
                setTimeout(( () => {
                    L?.(),
                    N()
                }
                ), 100)) : N()
            }
            ))
              , G = (0,
            l.A)(( () => K.current))
              , W = (0,
            l.A)(( () => K.current?.closest(".custom-scroll, .no-scrollbar")))
              , Z = (0,
            l.A)(( () => document.querySelector("#portals .SymbolMenu .bubble")))
              , Q = (0,
            l.A)(( () => ({
                withPortal: !0
            })));
            return a.Ay.createElement(a.Ay.Fragment, null, u ? a.Ay.createElement(c.A, {
                className: J,
                round: !0,
                color: "translucent",
                onClick: f ? M : q,
                ariaLabel: "Choose emoji, sticker or GIF"
            }, a.Ay.createElement("i", {
                className: "icon icon-smile"
            }), a.Ay.createElement("i", {
                className: "icon icon-keyboard"
            }), f && !j && a.Ay.createElement(m.A, {
                color: "gray"
            })) : a.Ay.createElement(d.A, {
                className: (0,
                r.A)("symbol-menu-button", f && "activated"),
                round: !0,
                color: "translucent",
                onActivate: V,
                ariaLabel: "Choose emoji, sticker or GIF"
            }, a.Ay.createElement("div", {
                ref: K,
                className: "symbol-menu-trigger"
            }), a.Ay.createElement("i", {
                className: "icon icon-smile"
            })), a.Ay.createElement(h, {
                chatId: t,
                threadId: n,
                isOpen: f || Boolean(b),
                canSendGifs: A,
                canSendStickers: p,
                isMessageComposer: y,
                idPrefix: v,
                onLoad: z,
                onClose: M,
                onEmojiSelect: R,
                onStickerSelect: T,
                onCustomEmojiSelect: k,
                onGifSelect: P,
                onRemoveSymbol: x,
                onSearchOpen: H,
                addRecentEmoji: D,
                addRecentCustomEmoji: U,
                isAttachmentModal: E,
                canSendPlainText: C,
                className: (0,
                r.A)(w, S && "component-theme-dark"),
                anchor: E ? $ : void 0,
                getTriggerElement: E ? G : void 0,
                getRootElement: E ? W : void 0,
                getMenuElement: E ? Z : void 0,
                getLayout: E ? Q : void 0
            }))
        }
        ))
    }
    ,
    55153: (e, t, n) => {
        n.d(t, {
            A: () => d,
            L: () => m
        });
        var a = n(31481)
          , o = n(87679)
          , i = n(24909);
        const r = 1280
          , s = 40
          , l = 20
          , c = /\.[^/.]+$/;
        async function d(e, t, l) {
            const m = URL.createObjectURL(t)
              , {type: A, size: h} = t;
            let p, y, g, f;
            if (a.gex.has(A)) {
                const n = await (0,
                o.NN)(m)
                  , {width: h, height: y} = n;
                f = !u(h, y);
                const v = Math.max(h, y) > r
                  , E = A === a.Vz3;
                if (!f) {
                    if (!l?.compressedBlobUrl && !E && (v || "image/jpeg" !== A)) {
                        const n = await (0,
                        i.s)(m, v ? r / Math.max(h, y) : 1, "image/jpeg");
                        return URL.revokeObjectURL(m),
                        d(e, t, {
                            compressedBlobUrl: n
                        })
                    }
                    "image/jpeg" === A && (e = e.replace(c, ".jpg")),
                    p = {
                        width: h,
                        height: y
                    }
                }
                g = Math.max(h, y) > s ? await (0,
                i.s)(m, s / Math.max(h, y), "image/jpeg") : m
            } else if (a.fNs.has(A)) {
                try {
                    const {videoWidth: e, videoHeight: t, duration: n} = await (0,
                    o.FW)(m);
                    f = !u(e, t),
                    f || (p = {
                        width: e,
                        height: t,
                        duration: n
                    })
                } catch (e) {
                    f = !0
                }
                g = await (0,
                o.eT)(m)
            } else if (a.IH3.has(A)) {
                const {duration: e, title: t, performer: a, coverUrl: o} = await async function(e) {
                    const {fetchFromUrl: t, selectCover: a} = await n.e(244).then(n.t.bind(n, 30244, 23))
                      , o = await t(e)
                      , {common: {title: i, artist: r, picture: s}, format: {duration: l}} = o
                      , c = a(s)
                      , d = c ? new Blob([c.data],{
                        type: c.format
                    }) : void 0;
                    return {
                        title: i,
                        performer: r,
                        duration: l,
                        coverUrl: d ? URL.createObjectURL(d) : void 0
                    }
                }(m);
                y = {
                    duration: e || 0,
                    title: t,
                    performer: a
                },
                g = o
            }
            return {
                blobUrl: m,
                filename: e,
                mimeType: A,
                size: h,
                quick: p,
                audio: y,
                previewBlobUrl: g,
                shouldSendAsFile: f || void 0,
                uniqueId: `${Date.now()}-${Math.random()}`,
                ...l
            }
        }
        function m(e, t) {
            return e.map((e => t ? e.compressedBlobUrl ? {
                ...e,
                blobUrl: e.compressedBlobUrl
            } : e : {
                ...e,
                shouldSendAsFile: !(e.voice || e.audio) || void 0,
                shouldSendAsSpoiler: void 0
            }))
        }
        function u(e, t) {
            return Math.max(e, t) / Math.min(e, t) <= l
        }
    }
    ,
    45761: (e, t, n) => {
        n.d(t, {
            A: () => o
        });
        var a = n(87679);
        async function o(e) {
            const t = [];
            function n(e, a) {
                return new Promise((o => {
                    if (e instanceof File)
                        t.push(e),
                        o(e);
                    else if (e.isFile) {
                        const n = a.getAsFile();
                        e.file((e => {
                            t.push(e),
                            o(e)
                        }
                        ), ( () => {
                            n && t.push(n),
                            o(n)
                        }
                        ))
                    } else
                        e.isDirectory && e.createReader().readEntries((e => {
                            const t = [];
                            for (let o = 0; o < e.length; o++)
                                t.push(n(e[o], a));
                            o(Promise.all(t))
                        }
                        ))
                }
                ))
            }
            const o = [];
            for (let t = 0; t < e.length; t++) {
                const a = e[t];
                if ("file" === a.kind) {
                    const e = a.webkitGetAsEntry() || a.getAsFile();
                    e && o.push(n(e, a))
                }
            }
            return await Promise.all(o),
            (0,
            a.kc)(t)
        }
    }
    ,
    17778: (e, t, n) => {
        n.d(t, {
            S: () => s
        });
        const a = /(<br>|<br\s?\/>)/g
          , o = /(&nbsp;|\u00A0)/g
          , i = /(<div>|<\/div>)/gi
          , r = /\n$/i;
        function s(e) {
            return e.replace(o, " ").replace(a, "\n").replace(i, "").replace(r, "")
        }
    }
    ,
    85449: (e, t, n) => {
        n.d(t, {
            A: () => l
        });
        var a = n(84051)
          , o = n(31481)
          , i = n(98607)
          , r = n(4961)
          , s = n(18276);
        function l(e, t) {
            return "receipt" === t.type ? e("PaymentReceipt") : "buy" === t.type ? (0,
            i.i)(t.text, o.Cyx, a.Ay.createElement(s.A, {
                className: "star-currency-icon",
                name: "star"
            })) : (0,
            r.A)(t.text)
        }
    }
    ,
    11359: (e, t, n) => {
        n.d(t, {
            L: () => o
        });
        const a = 5;
        function o(e, t) {
            const {commonAncestorContainer: n} = e;
            let o = n
              , i = 1;
            for (; o && o.id !== t && i < a; )
                o = o.parentElement,
                i++;
            return Boolean(o && o.id === t)
        }
    }
    ,
    3225: (e, t, n) => {
        n.d(t, {
            A: () => E
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(66644)
          , s = n(98221)
          , l = n(36353)
          , c = n(39074)
          , d = n(82393)
          , m = n(58734)
          , u = n(63988)
          , A = n(83414)
          , h = n(19129)
          , p = n(37661)
          , y = n(17712);
        const g = 300
          , f = new RegExp(`(${s.A.source})$`,"g")
          , v = new RegExp(`${i.bpX.source}$`,"g");
        function E(e, t, n, E, C, b) {
            const {loadCustomEmojiForEmoji: w, clearCustomEmojiForEmoji: S} = (0,
            o.ko)()
              , [I,N,M] = (0,
            p.A)(!1)
              , k = (0,
            u.gs)(( () => {
                const n = t();
                if (!e || !n || !E()?.collapsed)
                    return;
                if (!n.match(d.TL ? s.A : i.bpX))
                    return;
                const a = (0,
                c.LV)(C.current);
                return a.match(d.TL ? f : v)?.[0]
            }
            ), [t, E, C, e], g)
              , T = (0,
            A.A)(k, [k, t, E], !0)
              , P = (0,
            h.A)(( () => Boolean(T())), [T])
              , x = Boolean(b?.length);
            (0,
            a.vJ)(( () => {
                if (!e || !P)
                    return;
                const t = T();
                t ? x || w({
                    emoji: d.TL ? t : t.match(/.+alt="(.+)"/)?.[1]
                }) : S()
            }
            ), [e, P, T, x, S, w]);
            const R = (0,
            y.A)((t => {
                const a = T();
                if (!e || !a)
                    return;
                const o = C.current
                  , i = (0,
                c.LV)(o)
                  , s = d.TL ? a : a.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
                  , u = new RegExp(`(${s})\\1*$`,"")
                  , A = i.match(u)[0].length / a.length
                  , h = i.replace(u, (0,
                m.hB)(t).repeat(A))
                  , p = o.innerHTML.substring(i.length);
                n(`${h}${p}`),
                (0,
                r.Uz)(( () => {
                    (0,
                    l.A)(o, !0, !0)
                }
                ))
            }
            ));
            return (0,
            a.vJ)(M, [M, t]),
            {
                isCustomEmojiTooltipOpen: Boolean(P && x && !I),
                closeCustomEmojiTooltip: N,
                insertCustomEmoji: R
            }
        }
    }
    ,
    25498: (e, t, n) => {
        n.d(t, {
            A: () => x
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(66644)
          , s = n(29807)
          , l = n(52491)
          , c = n(36353)
          , d = n(87894)
          , m = n(79824)
          , u = n(37830)
          , A = n(4961)
          , h = n(58734)
          , p = n(17778)
          , y = n(63988)
          , g = n(83414)
          , f = n(37661)
          , v = n(17712);
        let E, C, b, w, S;
        const I = 36
          , N = 2
          , M = 300
          , k = (0,
        u.A)((function(e, t, n) {
            return e && t.length ? Object.values((0,
            d._E)(e, t)).slice(0, n) : m.p
        }
        ))
          , T = (0,
        u.A)((function(e, t, n) {
            const a = Object.values(e)
              , o = (0,
            d.dU)(a, "native")
              , i = t ? (0,
            d.LG)(t, (e => Object.values((0,
            d._E)(o, e)))) : {}
              , r = n ? (0,
            d.LG)(n, (e => Object.values((0,
            d._E)(o, e)))) : {}
              , s = {
                ...i,
                ...r
            }
              , l = [].concat(Object.keys(i), Object.keys(r))
              , c = a.reduce(( (e, t) => (t.names.forEach((n => {
                e[n] || (e[n] = []),
                e[n].push(t)
            }
            )),
            e)), {})
              , m = Object.keys(c)
              , u = l.reduce(( (e, t) => Math.max(e, t.length)), 0);
            return {
                byKeyword: s,
                keywords: l,
                byName: c,
                names: m,
                maxKeyLength: u
            }
        }
        ))
          , P = (0,
        u.A)((function(e, t, n) {
            const {byKeyword: a, keywords: o, byName: i, names: r, maxKeyLength: s} = e;
            let l = [];
            if (t.length > s)
                return m.p;
            const c = o.filter((e => e.startsWith(t))).sort();
            l = l.concat(Object.values((0,
            d._E)(a, c)).flat());
            const u = r.filter((e => e.startsWith(t)));
            return l = l.concat(Object.values((0,
            d._E)(i, u)).flat()),
            l = (0,
            d.Am)(l),
            l.length ? l.slice(0, n) : m.p
        }
        ));
        try {
            w = /(^|\s):(?!\s)[-+_:'\s\p{L}\p{N}]*$/giu,
            S = /\p{Ll}/u
        } catch (e) {
            w = /(^|\s):(?!\s)[-+_:'\s\d\wа-яёґєії]*$/gi,
            S = /[a-zяёґєії]/
        }
        function x(e, t, u) {
            let x = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.CfG
              , R = arguments.length > 4 ? arguments[4] : void 0
              , L = arguments.length > 5 ? arguments[5] : void 0
              , B = arguments.length > 6 ? arguments[6] : void 0;
            const [O,F,D] = (0,
            f.A)(!1)
              , [U,K] = (0,
            a.J0)()
              , [j,z] = (0,
            a.J0)(m.p)
              , [$,_] = (0,
            a.J0)(m.p);
            (0,
            a.vJ)(( () => {
                function t() {
                    K(b.emojis)
                }
                e && (b ? t() : async function() {
                    return E || (E = n.e(996).then(n.t.bind(n, 20996, 19)),
                    C = (await E).default,
                    b = (0,
                    l.cp)(C)),
                    E
                }().then(t))
            }
            ), [e]);
            const J = (0,
            y.gs)(( () => {
                const n = t();
                return e && n.includes(":") ? (0,
                p.S)(n).match(w)?.[0].trim() : void 0
            }
            ), [t, e], M)
              , V = (0,
            g.A)(J, [J, t], !0)
              , H = (0,
            v.A)((e => {
                if (z(e),
                e === m.p)
                    return void _(m.p);
                const t = e.map((e => e.native))
                  , n = (0,
                d.Xd)((0,
                s.oZ0)((0,
                o.mS)(), t), "id");
                _(n)
            }
            ))
              , q = (0,
            v.A)((function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const a = t();
                if (!a)
                    return;
                const o = a.lastIndexOf(":", n ? a.lastIndexOf(":") - 1 : void 0);
                if (-1 !== o) {
                    const t = "string" == typeof e ? (0,
                    A.A)(e, ["emoji_html"]) : (0,
                    h.hB)(e);
                    u(`${a.substring(0, o)}${t}`);
                    const n = x === i.CfG ? document.querySelector(i.m$5) : document.getElementById(x);
                    (0,
                    r.Uz)(( () => {
                        (0,
                        c.A)(n, !0, !0)
                    }
                    ))
                }
                H(m.p)
            }
            ));
            return (0,
            a.vJ)(( () => {
                const e = V();
                if (!e || !U)
                    return void H(m.p);
                const t = e.length > 2 && e.endsWith(":")
                  , n = e.substring(1, t ? 1 + e.length - 2 : void 0);
                let a = m.p;
                if (n) {
                    if (1 === n.length && S.test(n) || n.length >= N) {
                        const e = T(U, L, B);
                        a = P(e, n.toLowerCase(), I)
                    }
                } else
                    a = k(U, R, I);
                a.length ? t ? q(a[0].native, !0) : H(a) : H(m.p)
            }
            ), [L, U, V, B, q, R, H]),
            (0,
            a.vJ)(D, [D, t]),
            {
                isEmojiTooltipOpen: Boolean(j.length || $.length) && !O,
                closeEmojiTooltip: F,
                filteredEmojis: j,
                filteredCustomEmojis: $,
                insertEmoji: q
            }
        }
    }
    ,
    9442: (e, t, n) => {
        n.d(t, {
            A: () => f
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(66644)
          , s = n(90709)
          , l = n(36353)
          , c = n(87894)
          , d = n(39074)
          , m = n(17778)
          , u = n(63988)
          , A = n(83414)
          , h = n(37661)
          , p = n(17712);
        const y = 300;
        let g;
        try {
            g = /(^|\s)@[-_\p{L}\p{M}\p{N}]*$/giu
        } catch (e) {
            g = /(^|\s)@[-_\d\wа-яёґєії]*$/gi
        }
        function f(e, t, n, f, E, C, b, w) {
            const [S,I] = (0,
            a.J0)()
              , [N,M,k] = (0,
            h.A)(!1)
              , T = (0,
            u.gs)(( () => {
                const n = t();
                if (!e || !f()?.collapsed || !n.includes("@"))
                    return;
                const a = (0,
                d.LV)(E.current);
                return (0,
                m.S)(a).match(g)?.[0].trim()
            }
            ), [e, t, f, E], y)
              , P = (0,
            A.A)(T, [T, t, f], !0)
              , x = (0,
            A.A)(( () => e && t().startsWith("@")), [t, e]);
            (0,
            a.vJ)(( () => {
                const e = P();
                if (!e || !C && !b)
                    return void I(void 0);
                const t = (0,
                o.mS)().users.byId;
                if (!t)
                    return void I(void 0);
                const n = C?.reduce(( (e, t) => (t.userId !== w && e.push(t.userId),
                e)), [])
                  , a = e.substring(1)
                  , i = (0,
                s.Z$)((0,
                c.Am)([...x() && b || [], ...n || []]), t, a);
                I(Object.values((0,
                c._E)(t, i)))
            }
            ), [w, C, b, P, x]);
            const R = (0,
            p.A)((function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!e.usernames && !(0,
                s.u0)(e))
                    return;
                const a = (0,
                s.Kl)(e)
                  , o = (0,
                s.u0)(e) || ""
                  , c = a ? `@${a}` : `<a\n          class="text-entity-link"\n          data-entity-type="${i.C7.MentionName}"\n          data-user-id="${e.id}"\n          contenteditable="false"\n          dir="auto"\n        >${o}</a>`
                  , m = E.current
                  , u = v((0,
                d.LV)(m))
                  , A = u.lastIndexOf("@")
                  , h = (a ? a.length + 1 : o.length) - (u.length - A);
                if (-1 !== A) {
                    const e = `${u.substr(0, A)}${c}&nbsp;`
                      , a = v(m.innerHTML).substring(u.length)
                      , o = (0,
                    d.JC)(m);
                    n(`${e}${a}`),
                    (0,
                    r.Uz)(( () => {
                        const e = o + h + 1;
                        (0,
                        l.A)(m, t),
                        e >= 0 && (0,
                        d.vZ)(m, e)
                    }
                    ))
                }
                I(void 0)
            }
            ));
            return (0,
            a.vJ)(k, [k, t]),
            {
                isMentionTooltipOpen: Boolean(S?.length && !N),
                closeMentionTooltip: M,
                insertMention: R,
                mentionFilteredUsers: S
            }
        }
        function v(e) {
            return e.replace(/<div>(<br>|<br\s?\/>)?<\/div>/gi, "<br>")
        }
    }
    ,
    70297: (e, t, n) => {
        n.d(t, {
            A: () => g
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(87357)
          , s = n(17663)
          , l = n(82393)
          , c = n(43874)
          , d = n(45470)
          , m = n(14)
          , u = n(17712)
          , A = n(62587)
          , h = n(59030)
          , p = n(50680)
          , y = n(83429);
        const g = (0,
        a.ph)((function(e) {
            let {story: t, isPreview: n, isProtected: g, isConnected: f} = e;
            const {openStoryViewer: v, loadPeerStoriesByIds: E, showNotification: C} = (0,
            o.ko)()
              , b = (0,
            h.A)()
              , {isMobile: w} = (0,
            c.Ay)()
              , S = t && "isDeleted"in t
              , I = t && "content"in t
              , N = I ? t.content.video : void 0
              , M = I ? (0,
            i.EN)(t) : void 0
              , k = (0,
            A.A)(M)
              , T = I ? N ? N.thumbnail?.dataUri : t.content.photo?.thumbnail?.dataUri : void 0
              , P = (0,
            m.A)(k, !0)
              , {shouldRender: x, transitionClassNames: R} = (0,
            p.A)(Boolean(P))
              , L = (0,
            d.A)(T, S && !n, w && !l.QH)
              , B = (0,
            r.A)("EVLTkrt1", "media-inner", (!f || S) && "AQWPv0bP", S && "tprkr7qf", n && "V3HabdKr");
            (0,
            a.vJ)(( () => {
                !t || I || S || E({
                    peerId: t.peerId,
                    storyIds: [t.id]
                })
            }
            ), [t, S, I]);
            const O = (0,
            u.A)(( () => {
                S ? C({
                    message: b("StoryNotFound")
                }) : v({
                    peerId: t.peerId,
                    storyId: t.id,
                    isSinglePeer: !0,
                    isSingleStory: !0
                })
            }
            ));
            return a.Ay.createElement("div", {
                className: B,
                onClick: f ? O : void 0
            }, !S && n && a.Ay.createElement("canvas", {
                ref: L,
                className: "thumbnail blurred-bg"
            }), x && a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement("img", {
                src: P,
                alt: "",
                className: (0,
                r.A)("WAItYc5d", n && "ClGe8yij", R),
                draggable: !1
            }), I && a.Ay.createElement(y.A, {
                story: t,
                className: R
            })), S && a.Ay.createElement("span", null, a.Ay.createElement("i", {
                className: (0,
                r.A)("nLA7VEhv", "icon icon-story-expired"),
                "aria-hidden": !0
            }), b("StoryExpiredSubtitle")), Boolean(N?.duration) && a.Ay.createElement("div", {
                className: "message-media-duration"
            }, (0,
            s.QO)(N.duration)), g && a.Ay.createElement("span", {
                className: "protector"
            }))
        }
        ))
    }
    ,
    19381: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(80089)
          , i = n(80464);
        const r = e => {
            const {isOpen: t} = e
              , n = (0,
            i.A)(o.ar.Extra, "ContextMenuContainer", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
    }
    ,
    97676: (e, t, n) => {
        n.d(t, {
            A: () => u
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(37661)
          , r = n(5912)
          , s = n(17712)
          , l = n(62587)
          , c = n(10221)
          , d = n(18104)
          , m = n(3325);
        const u = (0,
        a.ph)((e => {
            let {messageId: t, isMirrored: n, effect: u, shouldPlay: A, observeIntersectionForLoading: h, observeIntersectionForPlaying: p, onStop: y} = e;
            const g = (0,
            a.li)(null)
              , f = (0,
            a.li)(null)
              , v = (0,
            r.Vz)(g, h)
              , E = (0,
            r.Vz)(g, p)
              , [C,b,w] = (0,
            i.A)()
              , [S,I,N] = (0,
            i.A)()
              , M = function(e) {
                return e.effectAnimationId ? `sticker${e.effectAnimationId}` : `sticker${e.effectStickerId}?size=f`
            }(u)
              , k = (0,
            l.A)(M, !v)
              , T = (0,
            s.A)(( () => {
                w(),
                y?.()
            }
            ))
              , P = (0,
            c.A)({
                anchorRef: g,
                overlayRef: f,
                isMirrored: n,
                isDisabled: !C,
                isForMessageEffect: !0,
                id: u.id
            });
            (0,
            a.vJ)(( () => {
                S && P(),
                N()
            }
            ), [P, N, S]),
            (0,
            a.vJ)(( () => {
                E && A && k && (b(),
                I())
            }
            ), [E, k, A, P]);
            const x = (0,
            o.A)("McmbiWZE", n && "wNvU2uqi");
            return a.Ay.createElement("div", {
                className: (0,
                o.A)("IYu2f7FM", n && "GsTZawTE"),
                ref: g
            }, C && a.Ay.createElement(m.A, null, a.Ay.createElement(d.A, {
                ref: f,
                key: `effect-${t ?? u.id}`,
                className: x,
                tgsUrl: k,
                size: 256,
                play: !0,
                isLowPriority: !0,
                noLoop: !0,
                forceAlways: !0,
                onEnded: T
            })))
        }
        ))
    }
    ,
    51644: (e, t, n) => {
        n.d(t, {
            A: () => b
        });
        var a = n(84051)
          , o = n(31481)
          , i = n(66644)
          , r = n(90709)
          , s = n(87357)
          , l = n(40435)
          , c = n(35127)
          , d = n(43874)
          , m = n(37661)
          , u = n(5912)
          , A = n(17712)
          , h = n(37859)
          , p = n(37960)
          , y = n(69419)
          , g = n(73767)
          , f = n(21511)
          , v = n(61097)
          , E = n(27860)
          , C = n(35913);
        const b = e => {
            let {id: t, photo: n, messageText: b, isOwn: w, observeIntersection: S, noAvatars: I, canAutoLoad: N, isInSelectMode: M, isSelected: k, uploadProgress: T, forcedWidth: P, size: x="inline", dimensions: R, asForwarded: L, nonInteractive: B, shouldAffectAppendix: O, isDownloading: F, isProtected: D, theme: U, isInWebPage: K, clickArg: j, className: z, onClick: $, onCancelUpload: _} = e;
            const J = (0,
            a.li)(null)
              , V = "extendedMediaPreview" === n.mediaType
              , H = V ? void 0 : n.blobUrl
              , q = (0,
            u.Vz)(J, S)
              , {isMobile: G} = (0,
            d.Ay)()
              , [W,Z] = (0,
            a.J0)(N)
              , Q = W && q && !V
              , {mediaData: Y, loadProgress: X} = (0,
            y.A)(V ? void 0 : (0,
            r.rI)(n, x), !Q)
              , ee = H || Y
              , te = Boolean(P)
              , [ne] = (0,
            a.J0)(!ee)
              , ae = Boolean(ee)
              , oe = (0,
            v.A)(n, ae);
            (0,
            p.A)(!ae, {
                ref: oe
            });
            const ie = (0,
            v.A)(n, !te)
              , re = (0,
            r.VD)(n)
              , [se,le,ce] = (0,
            m.A)(V || n.isSpoiler);
            (0,
            a.vJ)(( () => {
                V || n.isSpoiler ? le() : ce()
            }
            ), [V, n]);
            const {loadProgress: de} = (0,
            y.A)(V ? void 0 : (0,
            r.rI)(n, "download"), !F, V ? void 0 : (0,
            r.Cz)(n, "download"))
              , {isUploading: me, isTransferring: ue, transferProgress: Ae} = (0,
            r.LK)(T || (F ? de : X), Q && !ee, void 0 !== T)
              , he = !1 === (0,
            g.A)(W)
              , {ref: pe, shouldRender: ye} = (0,
            f.A)({
                isOpen: ue,
                noMountTransition: he,
                className: "slow",
                withShouldRender: !0
            })
              , {ref: ge, shouldRender: fe} = (0,
            f.A)({
                isOpen: !ee && !W,
                withShouldRender: !0
            })
              , ve = (0,
            A.A)((e => {
                me ? _?.(j) : ee ? se ? ce() : $?.(j, e) : Z((e => !e))
            }
            ));
            (0,
            h.A)((e => {
                let[t] = e;
                if (!O)
                    return void (t && J.current.closest(o.KFG).removeAttribute(o.D3G));
                const n = J.current.closest(o.KFG);
                if (ee) {
                    const e = Number(n.closest(".Message").dataset.messageId);
                    (0,
                    l.A)(ee, Boolean(w), e, k, U).then((e => {
                        (0,
                        i.RK)(( () => {
                            n.style.setProperty("--appendix-bg", e),
                            n.setAttribute(o.D3G, "")
                        }
                        ))
                    }
                    ))
                } else
                    n.classList.add("has-appendix-thumb")
            }
            ), [O, ee, w, M, k, U]);
            const {width: Ee, height: Ce, isSmall: be} = R || (0,
            c.yA)({
                media: n,
                isOwn: w,
                asForwarded: L,
                noAvatars: I,
                isMobile: G,
                messageText: b,
                isInWebPage: K
            })
              , we = (0,
            s.A)("media-inner", !me && !B && "interactive", be && "small-image", Ee === Ce && "square-image", Ce < c.ej && "fix-min-height", z)
              , Se = R ? ` width: ${Ee}px; left: ${R.x}px; top: ${R.y}px;` : ""
              , Ie = "inline" === x ? `height: ${Ce}px;${Se}` : void 0;
            return a.Ay.createElement("div", {
                id: t,
                ref: J,
                className: we,
                style: Ie,
                onClick: me ? void 0 : ve
            }, te && a.Ay.createElement("canvas", {
                ref: ie,
                className: "thumbnail blurred-bg"
            }), ee && a.Ay.createElement("img", {
                src: ee,
                className: (0,
                s.A)("full-media", te && "with-blurred-bg"),
                alt: "",
                style: P ? `width: ${P}px` : void 0,
                draggable: !D
            }), ne && a.Ay.createElement("canvas", {
                ref: oe,
                className: "thumbnail"
            }), D && a.Ay.createElement("span", {
                className: "protector"
            }), ye && !fe && a.Ay.createElement("div", {
                ref: pe,
                className: "media-loading"
            }, a.Ay.createElement(C.A, {
                progress: Ae,
                onClick: me ? ve : void 0
            })), fe && a.Ay.createElement("i", {
                ref: ge,
                className: "icon icon-download"
            }), a.Ay.createElement(E.A, {
                isVisible: se,
                withAnimation: !0,
                thumbDataUri: re,
                width: Ee,
                height: Ce,
                className: "media-spoiler"
            }), ue && a.Ay.createElement("span", {
                className: "message-transfer-progress"
            }, Math.round(100 * Ae), "%"))
        }
    }
    ,
    84555: (e, t, n) => {
        n.d(t, {
            A: () => T
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(90709)
          , s = n(53827)
          , l = n(87357)
          , c = n(17663)
          , d = n(41733)
          , m = n(76023)
          , u = n(63988)
          , A = n(37661)
          , h = n(5912)
          , p = n(17712)
          , y = n(37960)
          , g = n(69419)
          , f = n(73767)
          , v = n(21511)
          , E = n(61097)
          , C = n(18276)
          , b = n(27860)
          , w = n(64493)
          , S = n(65843)
          , I = n(35913);
        const N = m.Wd / 2
          , M = 2 * (N - 6) * Math.PI;
        let k;
        const T = e => {
            let {message: t, className: n, canAutoLoad: T, isDownloading: P, origin: x, observeIntersection: R, onStop: L, onReadMedia: B} = e;
            const O = (0,
            a.li)(null)
              , F = (0,
            a.li)(null)
              , D = (0,
            a.li)(null)
              , U = t.content.video
              , {cancelMediaDownload: K, openOneTimeMediaModal: j} = (0,
            o.ko)()
              , z = (0,
            h.Vz)(O, R)
              , [$,_] = (0,
            a.J0)(T)
              , J = Boolean($ && z)
              , {mediaData: V, loadProgress: H} = (0,
            g.A)((0,
            r.sC)(U, "inline"), !J, (0,
            r.Cz)(U, "inline"))
              , {loadProgress: q} = (0,
            g.A)((0,
            r.sC)(U, "download"), !P, i.qZ.BlobUrl)
              , [G,W] = (0,
            A.A)()
              , Z = (0,
            r.G5)(t)
              , Q = "oneTimeModal" === x
              , Y = Z && !Q
              , X = !Boolean((0,
            r.CI)(t)) || G || Y
              , ee = (0,
            E.A)(U, X);
            (0,
            y.A)(!X, {
                ref: ee
            });
            const te = (0,
            r.CI)(t)
              , ne = $ && !G || P
              , ae = !1 === (0,
            f.A)($)
              , {ref: oe, shouldRender: ie} = (0,
            v.A)({
                isOpen: ne,
                noMountTransition: ae,
                withShouldRender: !0
            })
              , [re,se] = (0,
            a.J0)(!1)
              , [le,ce] = (0,
            a.Ul)(0)
              , de = (0,
            u.aG)(le, 16);
            (0,
            a.vJ)(( () => {
                if (!re)
                    return;
                const e = F.current;
                ce(e.currentTime / e.duration)
            }
            ), [ce, re, de]),
            (0,
            a.Nf)(( () => {
                if (!re || !D.current)
                    return;
                const e = M - de() * M;
                D.current.setAttribute("stroke-dashoffset", e.toString())
            }
            ), [re, de]);
            const me = Boolean(V && z)
              , ue = (0,
            p.A)(( () => {
                F.current && (se(!1),
                ce(0),
                (0,
                d.A)(F.current))
            }
            ))
              , Ae = (0,
            p.A)(( () => {
                k?.(),
                k = ue
            }
            ))
              , he = (0,
            p.A)(( () => {
                const e = F.current;
                re ? e.paused ? ((0,
                d.A)(e),
                (0,
                s._K)()) : e.pause() : (Ae(),
                e.pause(),
                e.currentTime = 0,
                (0,
                d.A)(e),
                (0,
                s._K)(),
                se(!0))
            }
            ));
            (0,
            a.vJ)(( () => {
                Q && he()
            }
            ), [Q]);
            const pe = (0,
            p.A)(( () => {
                if (V) {
                    if (!P)
                        return Z && !Q ? (j({
                            message: t
                        }),
                        void B?.()) : void he();
                    K({
                        media: U
                    })
                } else
                    _((e => !e))
            }
            ))
              , ye = (0,
            p.A)((e => {
                const t = e.currentTarget;
                ce(t.currentTime / t.duration)
            }
            ));
            return a.Ay.createElement("div", {
                ref: O,
                className: (0,
                l.A)("RoundVideo", "media-inner", Q && "non-interactive", n),
                onClick: pe
            }, V && a.Ay.createElement("div", {
                className: "video-wrapper"
            }, Y && a.Ay.createElement(b.A, {
                isVisible: !0,
                thumbDataUri: te,
                width: m.Wd,
                height: m.Wd,
                className: "media-spoiler"
            }), a.Ay.createElement(S.A, {
                canPlay: me,
                ref: F,
                src: V,
                className: "full-media",
                width: m.Wd,
                height: m.Wd,
                autoPlay: !Y,
                disablePictureInPicture: !0,
                muted: !re,
                loop: !re,
                playsInline: !0,
                isPriority: !0,
                onEnded: re ? L ?? ue : void 0,
                onTimeUpdate: re ? ye : void 0,
                onReady: W
            })), !Y && a.Ay.createElement("canvas", {
                ref: ee,
                className: "thumbnail",
                style: `width: ${m.Wd}px; height: ${m.Wd}px`
            }), a.Ay.createElement("div", {
                className: "progress"
            }, re && a.Ay.createElement("svg", {
                width: m.Wd,
                height: m.Wd
            }, a.Ay.createElement("circle", {
                ref: D,
                cx: N,
                cy: N,
                r: N - 6,
                className: "progress-circle",
                transform: `rotate(-90, ${N}, ${N})`,
                "stroke-dasharray": M,
                "stroke-dashoffset": M
            }))), ie && a.Ay.createElement("div", {
                ref: oe,
                className: "media-loading"
            }, a.Ay.createElement(I.A, {
                progress: P ? q : H
            })), Y && !ie && a.Ay.createElement("div", {
                className: "play-wrapper"
            }, a.Ay.createElement(w.A, {
                color: "dark",
                round: !0,
                size: "smaller",
                className: "play",
                nonInteractive: !0
            }, a.Ay.createElement(C.A, {
                name: "play"
            })), a.Ay.createElement(C.A, {
                name: "view-once"
            })), !V && !$ && a.Ay.createElement("i", {
                className: "icon icon-download"
            }), !Q && a.Ay.createElement("div", {
                className: "message-media-duration"
            }, re ? (0,
            c.QO)(F.current.currentTime) : (0,
            c.QO)(U.duration), (!re || F.current.paused) && a.Ay.createElement(C.A, {
                name: "muted"
            })))
        }
    }
    ,
    25477: (e, t, n) => {
        n.d(t, {
            A: () => I
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(87357)
          , s = n(17663)
          , l = n(58554)
          , c = n(76023)
          , d = n(35127)
          , m = n(84313)
          , u = n(43874)
          , A = n(37661)
          , h = n(5912)
          , p = n(17712)
          , y = n(62587)
          , g = n(37960)
          , f = n(69419)
          , v = n(73767)
          , E = n(21511)
          , C = n(61097)
          , b = n(27860)
          , w = n(65843)
          , S = n(35913);
        const I = e => {
            let {id: t, video: n, isOwn: I, isInWebPage: N, observeIntersectionForLoading: M, observeIntersectionForPlaying: k, noAvatars: T, canAutoLoad: P, canAutoPlay: x, uploadProgress: R, forcedWidth: L, dimensions: B, asForwarded: O, isDownloading: F, isProtected: D, className: U, clickArg: K, onClick: j, onCancelUpload: z} = e;
            const {cancelMediaDownload: $} = (0,
            o.ko)()
              , _ = (0,
            a.li)(null)
              , J = (0,
            a.li)(null)
              , V = "extendedMediaPreview" === n.mediaType
              , H = V ? void 0 : n.blobUrl
              , [q,G,W] = (0,
            A.A)(V || n.isSpoiler);
            (0,
            a.vJ)(( () => {
                V || n.isSpoiler ? G() : W()
            }
            ), [V, n]);
            const Z = (0,
            h.Vz)(_, M)
              , Q = (0,
            h.Vz)(_, k) && Z
              , Y = (0,
            a.li)(Z);
            Q && !Y.current && (Y.current = !0);
            const {isMobile: X} = (0,
            u.Ay)()
              , [ee,te] = (0,
            a.J0)(P)
              , ne = Boolean(ee && Z && !V)
              , [ae,oe] = (0,
            a.J0)(Boolean(x && !q))
              , ie = V ? void 0 : (0,
            i.sC)(n, "inline")
              , [re] = (0,
            a.J0)(Boolean(ie && l.Ih(ie)))
              , {mediaData: se, loadProgress: le} = (0,
            f.A)(ie, !ne, V ? void 0 : (0,
            i.Cz)(n, "inline"))
              , ce = H || se
              , [de,me] = (0,
            A.A)()
              , ue = (0,
            i.VD)(n)
              , Ae = Boolean(ue)
              , he = Boolean(L)
              , pe = V ? void 0 : (0,
            i.sC)(n, "preview")
              , [ye] = (0,
            a.J0)(Boolean(pe && l.Ih(pe)))
              , ge = Z
              , fe = (0,
            y.A)(pe, !ge)
              , ve = (0,
            g.A)((Ae || fe) && !de)
              , Ee = Boolean(!Ae || fe || de)
              , Ce = (0,
            C.A)(n, Ee);
            (0,
            g.A)(!Ee, {
                ref: Ce
            });
            const be = (0,
            C.A)(n, !he)
              , we = ce && Y.current
              , Se = (0,
            m.A)(J, !0, !we)
              , {loadProgress: Ie} = (0,
            f.A)(V ? void 0 : (0,
            i.sC)(n, "download"), !F, V ? void 0 : (0,
            i.Cz)(n, "download"))
              , {isUploading: Ne, isTransferring: Me, transferProgress: ke} = (0,
            i.LK)(R || (F ? Ie : le), ne && !de && !re || F, void 0 !== R)
              , Te = !1 === (0,
            v.A)(ee)
              , {ref: Pe, shouldRender: xe} = (0,
            E.A)({
                isOpen: Me && !Se,
                noMountTransition: Te,
                withShouldRender: !0
            })
              , {ref: Re} = (0,
            E.A)({
                isOpen: Boolean((ee || ce) && !ae && !xe)
            })
              , [Le,Be] = (0,
            a.J0)(0)
              , Oe = (0,
            p.A)((e => {
                Be(Math.max(0, e.currentTarget.currentTime - 1))
            }
            ))
              , Fe = (Number.isFinite(J.current?.duration) ? J.current?.duration : n.duration) || 0
              , {width: De, height: Ue} = B || (V ? (0,
            c.ri)(n, Boolean(I), O, N, T, X) : (0,
            c.rO)(n, Boolean(I), O, N, T, X))
              , Ke = (0,
            p.A)(( (e, t) => {
                if (Ne)
                    z?.(K);
                else if (V || !F)
                    if (ce) {
                        if (ce && !ae && oe(!0),
                        !q)
                            return t && ne && !de && !re ? (te(!1),
                            void e.stopPropagation()) : void j?.(K, e);
                        W()
                    } else
                        te((e => !e));
                else
                    $({
                        media: n
                    })
            }
            ))
              , je = (0,
            p.A)((e => {
                Ke(e, !0)
            }
            ))
              , ze = (0,
            r.A)("media-inner dark", !Ne && "interactive", Ue < d.ej && "fix-min-height", U)
              , $e = `height: ${Ue}px;${B ? ` width: ${De}px; left: ${B.x}px; top: ${B.y}px;` : ""}`;
            return a.Ay.createElement("div", {
                ref: _,
                id: t,
                className: ze,
                style: $e,
                onClick: Ne ? void 0 : e => Ke(e)
            }, he && a.Ay.createElement("canvas", {
                ref: be,
                className: "thumbnail blurred-bg"
            }), we && a.Ay.createElement(w.A, {
                ref: J,
                src: ce,
                className: (0,
                r.A)("full-media", he && "with-blurred-bg"),
                canPlay: ae && Q && !Se,
                muted: !0,
                loop: !0,
                playsInline: !0,
                draggable: !D,
                onTimeUpdate: Oe,
                onReady: me,
                style: L ? `width: ${L}px` : void 0
            }), a.Ay.createElement("img", {
                ref: ve,
                src: fe,
                className: (0,
                r.A)("thumbnail", he && "with-blurred-bg"),
                alt: "",
                style: L ? `width: ${L}px;` : void 0,
                draggable: !D
            }), Ae && !ye && a.Ay.createElement("canvas", {
                ref: Ce,
                className: "thumbnail"
            }), D && a.Ay.createElement("span", {
                className: "protector"
            }), a.Ay.createElement("i", {
                ref: Re,
                className: "icon icon-large-play"
            }), a.Ay.createElement(b.A, {
                isVisible: q,
                withAnimation: !0,
                thumbDataUri: ue,
                width: De,
                height: Ue,
                className: "media-spoiler"
            }), xe && a.Ay.createElement("div", {
                ref: Pe,
                className: "media-loading"
            }, a.Ay.createElement(S.A, {
                progress: ke,
                onClick: je
            })), !ee && !ce && a.Ay.createElement("i", {
                className: "icon icon-download"
            }), !Me || Se && !F ? a.Ay.createElement("div", {
                className: "message-media-duration"
            }, !V && n.isGif ? "GIF" : (0,
            s.QO)(Math.max(Fe - Le, 0)), Se && a.Ay.createElement("i", {
                className: "icon icon-message-failed playback-failed"
            })) : a.Ay.createElement("span", {
                className: "message-transfer-progress"
            }, Ne || F ? `${Math.round(100 * ke)}%` : "..."))
        }
    }
    ,
    70314: (e, t, n) => {
        n.d(t, {
            A: () => I
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(89925)
          , r = n(90709)
          , s = n(87357)
          , l = n(58849)
          , c = n(4961)
          , d = n(35127)
          , m = n(86974)
          , u = n(43874)
          , A = n(21488)
          , h = n(17712)
          , p = n(59030)
          , y = n(65240)
          , g = n(44589)
          , f = n(39877)
          , v = n(56440)
          , E = n(82855)
          , C = n(64493)
          , b = n(70297)
          , w = n(51644)
          , S = n(25477);
        const I = (0,
        a.ph)((e => {
            let {message: t, observeIntersectionForLoading: n, observeIntersectionForPlaying: I, noAvatars: N, canAutoLoad: M, canAutoPlay: k, inPreview: T, asForwarded: P, isDownloading: x=!1, isProtected: R, isConnected: L, story: B, theme: O, backgroundEmojiId: F, shouldWarnAboutSvg: D, autoLoadFileMaxSizeMb: U, onMediaClick: K, onContainerClick: j, onAudioPlay: z, onCancelMediaTransfer: $, isEditing: _} = e;
            const {openTelegramLink: J} = (0,
            o.ko)()
              , V = (0,
            r.T_)(t)
              , {isMobile: H} = (0,
            u.Ay)()
              , q = (0,
            a.li)(null)
              , G = (0,
            a.li)(null)
              , W = (0,
            p.A)()
              , Z = (0,
            h.A)(( () => {
                K()
            }
            ))
              , Q = (0,
            h.A)((e => {
                j?.(e)
            }
            ))
              , Y = (0,
            h.A)(( () => {
                V && J({
                    url: V.url
                })
            }
            ))
              , {story: X, stickers: ee} = V || {};
            (0,
            A.A)(X?.peerId, X?.id, B);
            const te = ee?.isWithTextColor || ee?.documents?.[0]?.shouldUseTextColor
              , ne = (0,
            m.A)(G, !te);
            if (!V)
                return;
            const {siteName: ae, url: oe, displayUrl: ie, title: re, description: se, photo: le, video: ce, audio: de, type: me, document: ue} = V
              , Ae = "telegram_story" === me
              , he = T || B && "isDeleted"in B ? void 0 : function(e) {
                switch (e) {
                case "telegram_channel_request":
                case "telegram_megagroup_request":
                case "telegram_chat_request":
                    return "lng_view_button_request_join";
                case "telegram_message":
                    return "lng_view_button_message";
                case "telegram_bot":
                    return "lng_view_button_bot";
                case "telegram_voicechat":
                    return "lng_view_button_voice_chat";
                case "telegram_livestream":
                    return "lng_view_button_voice_chat_channel";
                case "telegram_megagroup":
                case "telegram_chat":
                    return "lng_view_button_group";
                case "telegram_channel":
                    return "lng_view_button_channel";
                case "telegram_user":
                    return "lng_view_button_user";
                case "telegram_botapp":
                    return "lng_view_button_bot_app";
                case "telegram_chatlist":
                    return "ViewChatList";
                case "telegram_story":
                    return "lng_view_button_story";
                case "telegram_channel_boost":
                case "telegram_group_boost":
                    return "lng_view_button_boost";
                case "telegram_stickerset":
                    return "lng_view_button_stickerset";
                default:
                    return
                }
            }(me)
              , pe = (0,
            l.A)(se, 170)
              , ye = Boolean(pe || re || ae);
            let ge = Boolean(ee);
            if (ye && V?.photo && !V.video) {
                const {width: e, height: n} = (0,
                d.yA)({
                    media: V.photo,
                    isOwn: t.isOutgoing,
                    isInWebPage: !0,
                    asForwarded: P,
                    noAvatars: N,
                    isMobile: H
                });
                ge = e === n
            }
            const fe = (le || ce) && K && !ge
              , ve = (0,
            s.A)("WebPage", T && "in-preview", !_ && T && "interactive", ge && "with-square-photo", !le && !ce && !T && "without-media", ce && "with-video", !ye && "no-article", ue && "with-document", he && "with-quick-button");
            return a.Ay.createElement("div", {
                ref: q,
                className: ve,
                "data-initial": (ae || ie)[0],
                dir: W.isRtl ? "rtl" : "auto",
                onClick: Q
            }, a.Ay.createElement("div", {
                className: (0,
                s.A)("WebPage--content", Ae && "is-story")
            }, F && a.Ay.createElement(f.A, {
                emojiDocumentId: F,
                className: "WebPage--background-icons"
            }), Ae && a.Ay.createElement(b.A, {
                story: B,
                isProtected: R,
                isConnected: L,
                isPreview: !0
            }), le && !ce && a.Ay.createElement(w.A, {
                photo: le,
                isOwn: t.isOutgoing,
                isInWebPage: !0,
                observeIntersection: n,
                noAvatars: N,
                canAutoLoad: M,
                size: ge ? "pictogram" : "inline",
                asForwarded: P,
                nonInteractive: !fe,
                isDownloading: x,
                isProtected: R,
                theme: O,
                onClick: fe ? Z : void 0,
                onCancelUpload: $
            }), ye && a.Ay.createElement("div", {
                className: "WebPage-text"
            }, a.Ay.createElement(v.A, {
                className: "site-name",
                url: oe,
                text: ae || ie
            }), !T && re && a.Ay.createElement("p", {
                className: "site-title"
            }, (0,
            c.A)(re)), pe && a.Ay.createElement("p", {
                className: "site-description"
            }, (0,
            c.A)(pe, ["emoji", "br"]))), !T && ce && a.Ay.createElement(S.A, {
                video: ce,
                isOwn: t.isOutgoing,
                isInWebPage: !0,
                observeIntersectionForLoading: n,
                noAvatars: N,
                canAutoLoad: M,
                canAutoPlay: k,
                asForwarded: P,
                isDownloading: x,
                isProtected: R,
                onClick: fe ? Z : void 0,
                onCancelUpload: $
            }), !T && de && a.Ay.createElement(y.Ay, {
                theme: O,
                message: t,
                origin: i.d9.Inline,
                noAvatars: N,
                isDownloading: x,
                onPlay: z,
                onCancelUpload: $
            }), !T && ue && a.Ay.createElement(g.A, {
                document: ue,
                message: t,
                observeIntersection: n,
                autoLoadFileMaxSizeMb: U,
                onMediaClick: Z,
                onCancelUpload: $,
                isDownloading: x,
                shouldWarnAboutSvg: D
            }), !T && ee && a.Ay.createElement("div", {
                ref: G,
                className: (0,
                s.A)("media-inner", "square-image", ee.isEmoji && "WebPage--emoji-grid", "WebPage--stickers")
            }, ee.documents.map((e => a.Ay.createElement("div", {
                key: e.id,
                className: "WebPage--sticker"
            }, a.Ay.createElement(E.A, {
                containerRef: G,
                sticker: e,
                shouldLoop: !0,
                size: ee.isEmoji ? 38 : 80,
                customColor: ne,
                observeIntersectionForPlaying: I,
                observeIntersectionForLoading: n
            }))))), T && ie && !ye && a.Ay.createElement("div", {
                className: "WebPage-text"
            }, a.Ay.createElement("p", {
                className: "site-name"
            }, ie), a.Ay.createElement("p", {
                className: "site-description"
            }, W("Chat.Empty.LinkPreview")))), he && (Ee = he,
            a.Ay.createElement(C.A, {
                className: "WebPage--quick-button",
                size: "tiny",
                color: "translucent",
                isRectangular: !0,
                onClick: Y
            }, W(Ee))));
            var Ee
        }
        ))
    }
    ,
    40435: (e, t, n) => {
        n.d(t, {
            A: () => i
        });
        var a = n(41074);
        const o = {
            dark: {
                outgoing: "rgb(135,116,225)",
                incoming: "rgb(33,33,33)"
            },
            light: {
                outgoing: "rgb(238,255,222)",
                incoming: "rgb(255,255,255)"
            }
        };
        function i(e, t, n, i, r) {
            return i ? Promise.resolve(o[r || "light"][t ? "outgoing" : "incoming"]) : (0,
            a.M1)({
                name: "offscreen-canvas:getAppendixColorFromImage",
                args: [e, t]
            }, Math.round(n) % a.bP)
        }
    }
    ,
    35127: (e, t, n) => {
        n.d(t, {
            MC: () => r,
            ej: () => l,
            nP: () => c,
            yA: () => d
        });
        var a = n(76023);
        const o = 12
          , i = 40
          , r = 20 * a.$
          , s = o * a.$
          , l = 5 * a.$;
        function c(e, t) {
            return (e?.length ?? 0) > i || t ? r : s
        }
        function d(e) {
            let {media: t, messageText: n, isOwn: i, isInWebPage: r, asForwarded: s, noAvatars: d, isMobile: m} = e;
            const u = "photo" === t.mediaType
              , A = "video" === t.mediaType
              , h = u && r
              , p = A && r
              , {width: y, height: g} = u ? (0,
            a.ck)(t, i, s, h, d, m) : A ? (0,
            a.rO)(t, i, s, p, d, m) : (0,
            a.ri)(t, i, s, r, d, m)
              , f = c(n);
            let v = 1;
            y < f && f - y < o && (v = f / y),
            g * v < l && l - g * v < o && (v = l / g);
            const E = Math.round(y * v)
              , C = Math.round(g * v);
            return {
                width: E,
                height: C,
                isSmall: E < f || C < l
            }
        }
    }
    ,
    61097: (e, t, n) => {
        n.d(t, {
            A: () => c
        });
        var a = n(90709)
          , o = n(84051)
          , i = n(67054)
          , r = n(41074);
        const s = 7;
        let l = -1;
        function c(e, t) {
            return function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
                const a = (0,
                o.li)(null)
                  , c = (0,
                o.Kr)(( () => (0,
                i.A)(r.bP, ++l)), [])
                  , d = (0,
                o.li)();
                return (0,
                o.Nf)(( () => {
                    if (!e || t || d.current)
                        return;
                    const o = a.current;
                    o && (d.current = o.transferControlToOffscreen(),
                    (0,
                    r.M1)({
                        name: "offscreen-canvas:blurThumb",
                        args: [d.current, e, n],
                        transferables: [d.current]
                    }, c))
                }
                ), [e, t, n, c]),
                a
            }(e ? "string" == typeof e ? e : (0,
            a.VD)(e) : void 0, t)
        }
    }
    ,
    79519: (e, t, n) => {
        n.d(t, {
            A: () => m
        });
        var a = n(84051)
          , o = n(61433)
          , i = n(31481)
          , r = n(66644)
          , s = n(81954);
        const l = 500
          , c = i.nxZ
          , d = 20;
        function m(e, t, n, i, m, u, A, h, p) {
            const y = (0,
            a.li)(!A);
            (0,
            a.Nf)(( () => {
                const t = y.current;
                if (y.current = !1,
                n && e.current) {
                    const n = e.current.closest(".MessageList")
                      , a = m
                      , A = p || a ? "end" : "centerOrTop"
                      , y = () => {
                        const t = (0,
                        s.Ay)(n, e.current, A, d, void 0 !== i ? a ? l : c : void 0, i, void 0, u, !0);
                        if (h) {
                            const t = e.current.querySelector(".is-quote");
                            t && (0,
                            r.RK)(( () => {
                                (0,
                                o.YM)(t, "animate")
                            }
                            ))
                        }
                        return t
                    }
                    ;
                    t ? (0,
                    r.gm)(y) : (0,
                    r.YS)(( () => {
                        (0,
                        r.RK)(y())
                    }
                    ))
                }
            }
            ), [e, t, n, i, m, u, h, p])
        }
    }
    ,
    64154: (e, t, n) => {
        n.d(t, {
            A: () => s
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(37836);
        const r = new Map;
        function s(e, t, n, i) {
            const s = i && n ? e?.byLangCode[i]?.[n] : void 0
              , {isPending: c, text: d} = s || {};
            return (0,
            a.vJ)(( () => {
                t && n && !d && void 0 === c && i && function(e, t, n) {
                    const a = r.get(n) || new Map
                      , i = a.get(e) || [];
                    i.includes(t) || (i.push(t),
                    a.set(e, i),
                    r.set(n, a),
                    (0,
                    o.ko)().markMessagesTranslationPending({
                        chatId: e,
                        messageIds: i,
                        toLanguageCode: n
                    })),
                    l()
                }(t, n, i)
            }
            ), [t, d, c, n, i]),
            t && n ? {
                isPending: c,
                translatedText: d
            } : {
                isPending: !1,
                translatedText: void 0
            }
        }
        const l = (0,
        i.nF)((function() {
            const {translateMessages: e} = (0,
            o.ko)();
            let t = !1;
            r.forEach(( (n, a) => {
                n.forEach(( (n, o) => {
                    const i = n.slice(0, 20);
                    i.length < n.length && (t = !0),
                    e({
                        chatId: o,
                        messageIds: i,
                        toLanguageCode: a
                    }),
                    function(e, t, n) {
                        const a = r.get(n);
                        if (!a?.size)
                            return void r.delete(n);
                        const o = a.get(e);
                        if (!o?.length)
                            return void a.delete(e);
                        const i = o.filter((e => !t.includes(e)));
                        if (!i?.length)
                            return a.delete(e),
                            void (a.size || r.delete(n));
                        a.set(e, i)
                    }(o, i, a)
                }
                ))
            }
            )),
            t && l()
        }
        ), 500)
    }
    ,
    10221: (e, t, n) => {
        n.d(t, {
            A: () => l
        });
        var a = n(84051)
          , o = n(66644)
          , i = n(76023)
          , r = n(17712);
        const s = i.$;
        function l(e) {
            let {anchorRef: t, overlayRef: n, isMirrored: i, isForMessageEffect: l, isDisabled: c, id: d} = e;
            const m = (0,
            r.A)(( () => {
                const e = n.current
                  , a = t.current;
                if (!e || !a)
                    return;
                const r = a.getBoundingClientRect()
                  , c = e.getBoundingClientRect()
                  , d = window.innerWidth;
                (0,
                o.RK)(( () => {
                    const t = r.top + r.height / 2
                      , n = r.bottom
                      , a = l ? n : t;
                    e.style.top = a - c.height / 2 + "px",
                    i ? e.style.left = r.left - s + "px" : e.style.right = d - r.right - s + "px"
                }
                ))
            }
            ));
            return (0,
            a.vJ)(( () => {
                c || m()
            }
            ), [c, d]),
            (0,
            a.vJ)(( () => {
                if (c)
                    return;
                const e = t.current.closest(".MessageList");
                return e ? (e.addEventListener("scroll", m, {
                    passive: !0
                }),
                () => {
                    e.removeEventListener("scroll", m)
                }
                ) : void 0
            }
            ), [c, t]),
            m
        }
    }
    ,
    76283: (e, t, n) => {
        n.d(t, {
            A: () => I
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(87357)
          , s = n(17712)
          , l = n(59030)
          , c = n(64493)
          , d = n(96530)
          , m = n(76023)
          , u = n(87412)
          , A = n(18276);
        const h = "uGUjDZKl"
          , p = "M62HGuIV"
          , y = "WMpEr5XQ"
          , g = 2 * m.$
          , f = (0,
        a.ph)((e => {
            let {reaction: t, chosen: n, isReady: o, noAppearAnimation: i, style: s, isLocked: l, onToggleReaction: c} = e;
            return a.Ay.createElement("div", {
                className: (0,
                r.A)(h, "oc1hpMwv", n && p, !i && o && "sx6RTuAU", i && "kqcWe4tf"),
                style: s,
                onClick: function() {
                    c(t)
                }
            }, a.Ay.createElement(u.A, {
                documentId: t.documentId,
                size: g
            }), l && a.Ay.createElement(A.A, {
                className: y,
                name: "lock-badge"
            }))
        }
        ));
        var v = n(37661)
          , E = n(62587)
          , C = n(18104);
        const b = 2 * m.$
          , w = (0,
        a.ph)((e => {
            let {reaction: t, isReady: n, noAppearAnimation: o, chosen: i, isLocked: s, onToggleReaction: l} = e;
            const c = (0,
            E.A)(`sticker${t.appearAnimation?.id}`, !n || o)
              , d = (0,
            E.A)(`document${t.selectAnimation?.id}`, !n || o)
              , m = (0,
            E.A)(`document${t.staticIcon?.id}`, !o)
              , [u,g] = (0,
            v.A)()
              , [f,,w] = (0,
            v.A)(!0)
              , [S,I,N] = (0,
            v.A)();
            return a.Ay.createElement("div", {
                className: (0,
                r.A)(h, i && p),
                onClick: function() {
                    l(t.reaction)
                },
                onMouseEnter: n && !f ? I : void 0
            }, o && a.Ay.createElement("img", {
                className: "MZ2tH980",
                src: m,
                alt: t.reaction.emoticon,
                draggable: !1
            }), !u && !o && a.Ay.createElement(C.A, {
                key: t.appearAnimation?.id,
                tgsUrl: c,
                play: f,
                noLoop: !0,
                size: b,
                onEnded: w,
                forceAlways: !0
            }), !f && !o && a.Ay.createElement(C.A, {
                key: t.selectAnimation?.id,
                tgsUrl: d,
                play: S,
                noLoop: !0,
                size: b,
                onLoad: g,
                onEnded: N,
                forceAlways: !0
            }), s && a.Ay.createElement(A.A, {
                className: y,
                name: "lock-badge"
            }))
        }
        ))
          , S = (0,
        r.x)("ReactionSelector")
          , I = (0,
        a.ph)((e => {
            let {allAvailableReactions: t, topReactions: n, defaultTagReactions: m, enabledReactions: u, currentReactions: A, reactionsLimit: h, isPrivate: p, isReady: y, canPlayAnimatedEmojis: g, className: v, isCurrentUserPremium: E, isInSavedMessages: C, isInStoryViewer: b, isForEffects: I, effectReactions: N, onClose: M, onToggleReaction: k, onShowMore: T} = e;
            const {openPremiumModal: P} = (0,
            o.ko)()
              , x = (0,
            a.li)(null)
              , R = (0,
            l.A)()
              , L = C && !E && !b
              , B = Boolean(h && A && A.length >= h)
              , O = (0,
            a.Kr)(( () => {
                const e = B ? A?.map((e => e.reaction)) : I ? N : C ? m : "some" === u?.type ? u.allowed : t?.map((e => e.reaction))
                  , a = e?.map((e => {
                    const n = "documentId"in e
                      , a = t?.find((t => (0,
                    i.a0)(t.reaction, e)));
                    return I ? a : (n || a) && !a?.isInactive && (p || B || u && (0,
                    i.A3)(e, u)) ? n ? e : a : void 0
                }
                )).filter(Boolean) || [];
                return (0,
                i.fu)(a, n)
            }
            ), [t, A, m, u, C, p, n, I, N, B])
              , F = (0,
            a.Kr)(( () => 8 === O.length ? O : O.slice(0, 7)), [O])
              , D = F.length < O.length
              , U = (0,
            a.Kr)(( () => {
                const e = A?.filter((e => {
                    let {chosenOrder: t} = e;
                    return void 0 !== t
                }
                )) || [];
                return new Set(e.map((e => {
                    let {reaction: t} = e;
                    return F.findIndex((e => e && (0,
                    i.a0)("reaction"in e ? e.reaction : e, t)))
                }
                )))
            }
            ), [A, F])
              , K = (0,
            s.A)(( () => {
                const e = x.current?.getBoundingClientRect() || {
                    x: 0,
                    y: 0
                };
                T({
                    x: e.x,
                    y: e.y
                })
            }
            ))
              , j = (0,
            s.A)(( () => {
                M?.(),
                P({
                    initialSection: "saved_tags"
                })
            }
            ))
              , z = (0,
            a.Kr)(( () => {
                if (C) {
                    if (!E) {
                        const e = R("lng_subscribe_tag_about").split("{link}");
                        return a.Ay.createElement("span", null, e[0], a.Ay.createElement(d.A, {
                            isPrimary: !0,
                            onClick: j
                        }, R("lng_subscribe_tag_link")), e[1])
                    }
                    return R("SavedTagReactionsHint2")
                }
                return b ? R("StoryReactionsHint") : I ? R("AddEffectMessageHint") : void 0
            }
            ), [E, C, b, R, I]);
            if (F.length)
                return a.Ay.createElement("div", {
                    className: (0,
                    r.A)(S("&"), v),
                    ref: x
                }, a.Ay.createElement("div", {
                    className: S("bubble-small", R.isRtl && "isRtl")
                }), a.Ay.createElement("div", {
                    className: S("items-wrapper")
                }, a.Ay.createElement("div", {
                    className: S("bubble-big", R.isRtl && "isRtl")
                }), a.Ay.createElement("div", {
                    className: S("items")
                }, z && a.Ay.createElement("div", {
                    className: S("hint")
                }, z), a.Ay.createElement("div", {
                    className: S("reactions"),
                    dir: R.isRtl ? "rtl" : void 0
                }, F.map(( (e, t) => "reaction"in e ? a.Ay.createElement(w, {
                    key: (0,
                    i.Jj)(e.reaction),
                    isReady: y,
                    onToggleReaction: k,
                    reaction: e,
                    noAppearAnimation: !g,
                    chosen: U.has(t),
                    isLocked: L
                }) : a.Ay.createElement(f, {
                    key: (0,
                    i.Jj)(e),
                    isReady: y,
                    onToggleReaction: k,
                    reaction: e,
                    noAppearAnimation: !g,
                    chosen: U.has(t),
                    isLocked: L,
                    style: `--_animation-delay: ${20 * (7 - t)}ms`
                }))), D && a.Ay.createElement(c.A, {
                    color: "translucent",
                    className: S("show-more"),
                    onClick: K
                }, a.Ay.createElement("i", {
                    className: "icon icon-down"
                }))))))
        }
        ))
    }
    ,
    92915: (e, t, n) => {
        n.d(t, {
            A: () => E
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(87357)
          , r = n(76023)
          , s = n(10722)
          , l = n(37661)
          , c = n(17712)
          , d = n(59030)
          , m = n(23470)
          , u = n(64493)
          , A = n(40664)
          , h = n(8410);
        const p = (0,
        a.ph)((e => {
            let {isOpen: t, title: n, subtitle: o, placeholder: i, submitText: r, maxLength: s, initialValue: l="", onClose: m, onSubmit: p} = e;
            const y = (0,
            d.A)()
              , [g,f] = (0,
            a.J0)(l)
              , v = (0,
            c.A)((e => {
                f(e.target.value)
            }
            ))
              , E = (0,
            c.A)(( () => {
                p(g)
            }
            ));
            return a.Ay.createElement(h.A, {
                className: "narrow",
                title: n,
                isOpen: t,
                onClose: m,
                isSlim: !0
            }, Boolean(o) && a.Ay.createElement("div", {
                className: "cGrbcqD_"
            }, o), a.Ay.createElement(A.A, {
                placeholder: i,
                value: g,
                onChange: v,
                maxLength: s,
                teactExperimentControlled: !0
            }), a.Ay.createElement("div", {
                className: "dialog-buttons mt-2"
            }, a.Ay.createElement(u.A, {
                className: "confirm-dialog-button",
                onClick: E
            }, r || y("Save")), a.Ay.createElement(u.A, {
                className: "confirm-dialog-button",
                isText: !0,
                onClick: m
            }, y("Cancel"))))
        }
        ));
        var y = n(71429)
          , g = n(24433)
          , f = n(69988);
        const v = 1.25 * r.$
          , E = (0,
        a.ph)((e => {
            let {reaction: t, tag: n, containerId: r, isChosen: A, isOwnMessage: h, className: E, chosenClassName: C, withCount: b, isDisabled: w, withContextMenu: S, observeIntersection: I, onClick: N, onRemove: M} = e;
            const {editSavedReactionTag: k} = (0,
            o.ko)()
              , T = (0,
            a.li)(null)
              , P = (0,
            a.li)(null)
              , x = (0,
            d.A)()
              , [R,L,B] = (0,
            l.A)()
              , {title: O, count: F} = n || {}
              , D = Boolean(O || b && F)
              , U = (0,
            c.A)(( () => {
                N?.(t)
            }
            ))
              , K = (0,
            c.A)(( () => {
                M?.(t)
            }
            ))
              , j = (0,
            c.A)((e => {
                k({
                    reaction: t,
                    title: e
                }),
                B()
            }
            ))
              , {isContextMenuOpen: z, contextMenuAnchor: $, handleBeforeContextMenu: _, handleContextMenu: J, handleContextMenuClose: V, handleContextMenuHide: H} = (0,
            s.A)(T, !S)
              , q = (0,
            c.A)(( () => T.current))
              , G = (0,
            c.A)(( () => document.body))
              , W = (0,
            c.A)(( () => P.current))
              , Z = (0,
            c.A)(( () => ({
                withPortal: !0,
                shouldAvoidNegativePosition: !0
            })));
            if (!b || 0 !== F)
                return a.Ay.createElement(u.A, {
                    className: (0,
                    i.A)(f.A.root, f.A.tag, h && f.A.own, A && f.A.chosen, A && C, w && f.A.disabled, E),
                    size: "tiny",
                    onClick: U,
                    onMouseDown: _,
                    onContextMenu: J,
                    ref: T
                }, a.Ay.createElement(m.A, {
                    className: f.A.animatedEmoji,
                    containerId: r,
                    reaction: t,
                    loopLimit: 1,
                    size: v,
                    observeIntersection: I
                }), D && a.Ay.createElement("span", {
                    className: f.A.tagText
                }, O && a.Ay.createElement("span", null, O), b && a.Ay.createElement("span", null, F)), a.Ay.createElement("svg", {
                    className: f.A.tail,
                    width: "15",
                    height: "30",
                    viewBox: "0 0 15 30"
                }, a.Ay.createElement("path", {
                    className: f.A.tailFill,
                    d: "m 0,30 c 3.1855,0 6.1803,-1.5176 8.0641,-4.0864 l 5.835,-7.9568 c 1.2906,-1.7599 1.2906,-4.1537 0,-5.9136 L 8.0641,4.08636 C 6.1803,1.51761 3.1855,0 0,0"
                })), S && a.Ay.createElement(p, {
                    isOpen: R,
                    maxLength: 15,
                    title: x(n?.title ? "SavedTagRenameTag" : "SavedTagLabelTag"),
                    subtitle: x("SavedTagLabelTagText"),
                    placeholder: x("SavedTagLabelPlaceholder"),
                    initialValue: n?.title,
                    onClose: B,
                    onSubmit: j
                }), S && $ && a.Ay.createElement(y.A, {
                    ref: P,
                    isOpen: z,
                    anchor: $,
                    getTriggerElement: q,
                    getRootElement: G,
                    getMenuElement: W,
                    getLayout: Z,
                    autoClose: !0,
                    withPortal: !0,
                    onClose: V,
                    onCloseAnimationEnd: H
                }, a.Ay.createElement(g.A, {
                    icon: "tag-filter",
                    onClick: U
                }, x("SavedTagFilterByTag")), a.Ay.createElement(g.A, {
                    icon: "tag-name",
                    onClick: L
                }, x(n?.title ? "SavedTagRenameTag" : "SavedTagLabelTag")), a.Ay.createElement(g.A, {
                    icon: "tag-crossed",
                    destructive: !0,
                    onClick: K
                }, x("SavedTagRemoveTag"))))
        }
        ))
    }
    ,
    93809: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(30857)
          , i = n(35297);
        function r(e, t) {
            const n = void 0 === t
              , r = (0,
            a.li)(n)
              , s = (0,
            a.li)()
              , l = (0,
            o.A)();
            return (0,
            i.A)(( () => {
                n || (r.current = !1,
                s.current && (clearTimeout(s.current),
                s.current = void 0))
            }
            ), e),
            (0,
            a.vJ)(( () => {
                if (n || r.current)
                    return;
                const e = () => {
                    r.current = !0,
                    l()
                }
                ;
                t > 0 ? s.current = window.setTimeout(e, t) : e()
            }
            ), e),
            r.current
        }
    }
    ,
    71950: (e, t, n) => {
        n.d(t, {
            A: () => g
        });
        var a = n(84051)
          , o = n(87357)
          , i = n(17663)
          , r = n(14242)
          , s = n(59030)
          , l = n(18276);
        const c = "gvrp3KoR"
          , d = "IHb3ZATQ"
          , m = "zAPFdKbZ"
          , u = [[{
            name: "followers",
            title: "ChannelStats.Overview.Followers"
        }, {
            name: "enabledNotifications",
            title: "ChannelStats.Overview.EnabledNotifications",
            isPercentage: !0
        }], [{
            name: "viewsPerPost",
            title: "ChannelStats.Overview.ViewsPerPost"
        }, {
            name: "viewsPerStory",
            title: "ChannelStats.Overview.ViewsPerStory"
        }], [{
            name: "sharesPerPost",
            title: "ChannelStats.Overview.SharesPerPost"
        }, {
            name: "sharesPerStory",
            title: "ChannelStats.Overview.SharesPerStory"
        }], [{
            name: "reactionsPerPost",
            title: "ChannelStats.Overview.ReactionsPerPost"
        }, {
            name: "reactionsPerStory",
            title: "ChannelStats.Overview.ReactionsPerStory"
        }]]
          , A = [[{
            name: "members",
            title: "Stats.GroupMembers"
        }, {
            name: "messages",
            title: "Stats.GroupMessages"
        }], [{
            name: "viewers",
            title: "Stats.GroupViewers"
        }, {
            name: "posters",
            title: "Stats.GroupPosters"
        }]]
          , h = [[{
            name: "viewsCount",
            title: "Stats.Message.Views",
            isPlain: !0
        }, {
            name: "publicForwards",
            title: "Stats.Message.PublicShares",
            isPlain: !0
        }], [{
            name: "reactionsCount",
            title: "Channel.Stats.Overview.Reactions",
            isPlain: !0
        }, {
            name: "forwardsCount",
            title: "Stats.Message.PrivateShares",
            isPlain: !0,
            isApproximate: !0
        }]]
          , p = [[{
            name: "viewsCount",
            title: "Channel.Stats.Overview.Views",
            isPlain: !0
        }, {
            name: "publicForwards",
            title: "PublicShares",
            isPlain: !0
        }], [{
            name: "reactionsCount",
            title: "Channel.Stats.Overview.Reactions",
            isPlain: !0
        }, {
            name: "forwardsCount",
            title: "PrivateShares",
            isPlain: !0
        }]]
          , y = [[{
            name: "level",
            title: "Stats.Boosts.Level",
            isPlain: !0
        }, {
            name: "premiumSubscribers",
            title: "Stats.Boosts.PremiumSubscribers",
            isPercentage: !0,
            isApproximate: !0,
            withAbsoluteValue: !0
        }], [{
            name: "boosts",
            title: "Stats.Boosts.ExistingBoosts",
            isPlain: !0
        }, {
            name: "remainingBoosts",
            title: "Stats.Boosts.BoostsToLevelUp",
            isPlain: !0
        }]]
          , g = (0,
        a.ph)((e => {
            let {title: t, type: n, statistics: g, isToncoin: f, className: v, subtitle: E} = e;
            const C = (0,
            s.A)()
              , b = (e, t, n) => {
                const [o,i] = e.toFixed(4).split(".")
                  , [r,s] = (e * t).toFixed(2).split(".");
                return a.Ay.createElement("div", null, a.Ay.createElement(l.A, {
                    className: "it39BC_c",
                    name: "toncoin"
                }), a.Ay.createElement("b", {
                    className: m
                }, o, a.Ay.createElement("span", {
                    className: "ZAfXkuWL"
                }, ".", i)), " ", a.Ay.createElement("span", {
                    className: d
                }, "≈ $", r, a.Ay.createElement("span", {
                    className: "HRXb_S2M"
                }, ".", s)), a.Ay.createElement("h3", {
                    className: d
                }, C(n)))
            }
              , {period: w} = g
              , {balances: S, usdRate: I} = g
              , N = function(e) {
                switch (e) {
                case "group":
                    return A;
                case "message":
                    return h;
                case "boost":
                    return y;
                case "story":
                    return p;
                default:
                    return u
                }
            }(n);
            return a.Ay.createElement("div", {
                className: (0,
                o.A)("Gi8Nokbl", v)
            }, a.Ay.createElement("div", {
                className: "H01lE7mv"
            }, t && a.Ay.createElement("div", {
                className: "VQbs04hT"
            }, t), w && a.Ay.createElement("div", {
                className: "X7bBlGdi"
            }, (0,
            i.Lu)(C, 1e3 * w.minDate), " — ", (0,
            i.Lu)(C, 1e3 * w.maxDate))), a.Ay.createElement("table", {
                className: "s5beXqqL"
            }, f ? a.Ay.createElement("tr", null, a.Ay.createElement("td", {
                className: c
            }, b(S?.availableBalance || 0, I || 0, "lng_channel_earn_available"), b(S?.currentBalance || 0, I || 0, "lng_channel_earn_reward"), b(S?.overallRevenue || 0, I || 0, "lng_channel_earn_total"))) : N.map((e => a.Ay.createElement("tr", null, e.map((e => {
                const t = g[e.name];
                return e.isPlain ? a.Ay.createElement("td", {
                    className: c
                }, a.Ay.createElement("b", {
                    className: m
                }, `${e.isApproximate ? "≈" : ""}${(0,
                r.Sm)(t)}`), a.Ay.createElement("h3", {
                    className: d
                }, C(e.title))) : e.isPercentage ? a.Ay.createElement("td", {
                    className: c
                }, e.withAbsoluteValue && a.Ay.createElement("span", {
                    className: m
                }, `${e.isApproximate ? "≈" : ""}${(0,
                r.Sm)(t.part)}`), a.Ay.createElement("span", {
                    className: e.withAbsoluteValue ? "_mYEmh_u" : m
                }, t.percentage, "%"), a.Ay.createElement("h3", {
                    className: d
                }, C(e.title))) : a.Ay.createElement("td", {
                    className: c
                }, a.Ay.createElement("b", {
                    className: m
                }, (0,
                r.Vw)(t.current)), " ", (e => {
                    let {change: t, percentage: n} = e;
                    if (!t)
                        return;
                    const i = Number(t) < 0;
                    return a.Ay.createElement("span", {
                        className: (0,
                        o.A)("idLrmbhS", i && "SLfwGHQC")
                    }, i ? `-${(0,
                    r.Vw)(Math.abs(t))}` : `+${(0,
                    r.Vw)(t)}`, n && a.Ay.createElement(a.Ay.Fragment, null, " ", "(", n, "%)"))
                }
                )(t), a.Ay.createElement("h3", {
                    className: d
                }, C(e.title)))
            }
            )))))), E)
        }
        ))
    }
    ,
    75343: (e, t, n) => {
        n.d(t, {
            A: () => E
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(87357)
          , r = n(43874)
          , s = n(36838)
          , l = n(59030)
          , c = n(89925)
          , d = n(90709)
          , m = n(54464)
          , u = n(10722)
          , A = n(17712)
          , h = n(92111)
          , p = n(21849)
          , y = n(71429)
          , g = n(24433)
          , f = n(2429);
        const v = (0,
        a.ph)((function(e) {
            let {peer: t, isArchived: n} = e;
            const {openChat: r, openChatWithInfo: s, openStoryViewer: v, toggleStoriesHidden: E} = (0,
            o.ko)()
              , C = (0,
            l.A)()
              , b = (0,
            a.li)(null)
              , w = "isSelf"in t && t.isSelf
              , S = !(0,
            d.L8)(t.id);
            (0,
            h.A)(t.id);
            const {isContextMenuOpen: I, contextMenuAnchor: N, handleBeforeContextMenu: M, handleContextMenu: k, handleContextMenuClose: T, handleContextMenuHide: P} = (0,
            u.A)(b)
              , x = (0,
            A.A)(( () => b.current))
              , R = (0,
            A.A)(( () => document.body))
              , L = (0,
            A.A)(( () => b.current.querySelector(".story-peer-context-menu .bubble")))
              , B = (0,
            A.A)(( () => ({
                withPortal: !0,
                isDense: !0
            })))
              , O = (0,
            A.A)(( () => {
                I || v({
                    peerId: t.id,
                    origin: c.G9.StoryRibbon
                })
            }
            ))
              , F = (0,
            A.A)((e => {
                (0,
                m.u)(e),
                M(e)
            }
            ))
              , D = (0,
            A.A)(( () => {
                s({
                    id: t.id,
                    shouldReplaceHistory: !0,
                    profileTab: "stories"
                })
            }
            ))
              , U = (0,
            A.A)(( () => {
                s({
                    id: t.id,
                    shouldReplaceHistory: !0,
                    profileTab: "storiesArchive"
                })
            }
            ))
              , K = (0,
            A.A)(( () => {
                r({
                    id: t.id,
                    shouldReplaceHistory: !0
                })
            }
            ))
              , j = (0,
            A.A)(( () => {
                s({
                    id: t.id,
                    shouldReplaceHistory: !0
                })
            }
            ))
              , z = (0,
            A.A)(( () => {
                E({
                    peerId: t.id,
                    isHidden: !n
                })
            }
            ));
            return a.Ay.createElement("div", {
                ref: b,
                role: "button",
                "data-peer-id": t.id,
                tabIndex: 0,
                className: f.A.peer,
                onMouseDown: F,
                onClick: O,
                onContextMenu: k
            }, a.Ay.createElement(p.A, {
                peer: t,
                withStory: !0,
                storyViewerOrigin: c.G9.StoryRibbon,
                storyViewerMode: "full"
            }), a.Ay.createElement("div", {
                className: (0,
                i.A)(f.A.name, t.hasUnreadStories && f.A.name_hasUnreadStory)
            }, w ? C("MyStory") : (0,
            d.qg)(C, t)), void 0 !== N && a.Ay.createElement(y.A, {
                isOpen: I,
                anchor: N,
                getTriggerElement: x,
                getRootElement: R,
                getMenuElement: L,
                getLayout: B,
                className: (0,
                i.A)("story-peer-context-menu", f.A.contextMenu),
                autoClose: !0,
                withPortal: !0,
                onClose: T,
                onCloseAnimationEnd: P
            }, w ? a.Ay.createElement(a.Ay.Fragment, null, a.Ay.createElement(g.A, {
                onClick: D,
                icon: "play-story"
            }, C("StoryList.Context.SavedStories")), a.Ay.createElement(g.A, {
                onClick: U,
                icon: "archive"
            }, C("StoryList.Context.ArchivedStories"))) : a.Ay.createElement(a.Ay.Fragment, null, !S && a.Ay.createElement(g.A, {
                onClick: K,
                icon: "message"
            }, C("SendMessageTitle")), S ? a.Ay.createElement(g.A, {
                onClick: j,
                icon: "channel"
            }, C("ChatList.ContextOpenChannel")) : a.Ay.createElement(g.A, {
                onClick: j,
                icon: "user"
            }, C("StoryList.Context.ViewProfile")), a.Ay.createElement(g.A, {
                onClick: z,
                icon: n ? "unarchive" : "archive"
            }, C(n ? "StoryList.Context.Unarchive" : "StoryList.Context.Archive")))))
        }
        ))
          , E = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {isArchived: n} = t;
            const {orderedPeerIds: {active: a, archived: o}} = e.stories;
            return {
                orderedPeerIds: n ? o : a,
                usersById: e.users.byId,
                chatsById: e.chats.byId
            }
        }
        ))((function(e) {
            let {isArchived: t, className: n, orderedPeerIds: o, usersById: c, chatsById: d, isClosing: m} = e;
            const u = (0,
            l.A)()
              , A = (0,
            i.A)(f.A.root, !o.length && f.A.hidden, m && f.A.closing, n, "no-scrollbar")
              , h = (0,
            a.li)(null);
            return (0,
            s.A)(h, (0,
            r.Ny)()),
            a.Ay.createElement("div", {
                ref: h,
                id: "StoryRibbon",
                className: A,
                dir: u.isRtl ? "rtl" : void 0
            }, o.map((e => {
                const n = c[e] || d[e];
                if (n)
                    return a.Ay.createElement(v, {
                        key: e,
                        peer: n,
                        isArchived: t
                    })
            }
            )))
        }
        )))
    }
    ,
    40175: (e, t, n) => {
        n.d(t, {
            A: () => A
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(29807)
          , s = n(34458)
          , l = n(59030)
          , c = n(21511)
          , d = n(92111)
          , m = n(21849)
          , u = n(17169);
        const A = (0,
        a.ph)((0,
        o.EK)(( (e, t) => {
            let {isArchived: n} = t;
            const {orderedPeerIds: {archived: a, active: o}, byPeerId: i} = e.stories
              , {storyViewer: {isRibbonShown: s, isArchivedRibbonShown: l}} = (0,
            r.nTw)(e)
              , c = (0,
            r.clw)(e)
              , d = (0,
            r.xYJ)(e, "storyRibbonAnimations");
            return {
                currentUserId: e.currentUserId,
                orderedPeerIds: n ? a : o,
                isShown: n ? !l : !s,
                isForumPanelOpen: c,
                withAnimation: d,
                usersById: e.users.byId,
                chatsById: e.chats.byId,
                peerStories: i
            }
        }
        ))((function(e) {
            let {currentUserId: t, orderedPeerIds: n, usersById: r, chatsById: A, canShow: h, isShown: p, isForumPanelOpen: y, isArchived: g, withAnimation: f, peerStories: v} = e;
            const {toggleStoryRibbon: E} = (0,
            o.ko)()
              , C = (0,
            l.A)()
              , b = (0,
            a.Kr)(( () => 1 === n.length ? [r[n[0]] || A[n[0]]] : n.map((e => r[e] || A[e])).filter((e => e && e.id !== t)).slice(0, i.dqH).reverse()), [t, n, r, A])
              , w = (0,
            a.Kr)(( () => b?.length ? b.reduce(( (e, t) => {
                const n = v[t.id];
                if (!n)
                    return e;
                const a = n.orderedIds.some((e => {
                    const t = n.byId[e];
                    if (!t || !("isForCloseFriends"in t))
                        return !1;
                    const a = n.lastReadId && t.id <= n.lastReadId;
                    return t.isForCloseFriends && !a
                }
                ));
                return e[t.id] = a,
                e
            }
            ), {}) : {}), [v, b])
              , S = (0,
            a.Kr)(( () => n.slice(0, 5)), [n]);
            (0,
            d.A)(S);
            const I = h && p
              , {ref: N, shouldRender: M} = (0,
            c.A)({
                isOpen: I,
                className: "slow",
                withShouldRender: !0
            });
            if ((0,
            a.vJ)(( () => {
                f && !y && (I ? ((0,
                a.VK)(s.UG + i.xB5),
                (0,
                s.$)(g)) : ((0,
                a.VK)(s.UG + i.xB5),
                (0,
                s.wV)(g)))
            }
            ), [g, I, f, y]),
            M)
                return a.Ay.createElement("button", {
                    ref: N,
                    type: "button",
                    id: "StoryToggler",
                    className: u.A.root,
                    "aria-label": C("Chat.Context.Peer.OpenStory"),
                    onClick: () => E({
                        isShown: !0,
                        isArchived: g
                    }),
                    dir: C.isRtl ? "rtl" : void 0
                }, b.map((e => a.Ay.createElement(m.A, {
                    key: e.id,
                    peer: e,
                    size: "tiny",
                    className: u.A.avatar,
                    withStorySolid: !0,
                    forceFriendStorySolid: w[e.id]
                }))))
        }
        )))
    }
    ,
    34458: (e, t, n) => {
        n.d(t, {
            $: () => g,
            UG: () => d,
            wV: () => y
        });
        var a = n(31481)
          , o = n(66644)
          , i = n(19822)
          , r = n(83868)
          , s = n(76023)
          , l = n(2429)
          , c = n(17169);
        const d = 250
          , m = .25 * s.$
          , u = 11
          , A = .1875 * s.$
          , h = .125 * s.$
          , p = new Set;
        function y(e) {
            w();
            const {container: t, toggler: n, leftMainHeader: r, ribbonPeers: s, toggleAvatars: l} = f(e);
            if (!(n && l && s && t && r))
                return;
            const {bottom: h, right: y} = r.getBoundingClientRect()
              , g = h + m
              , S = l[0]
              , I = l[l.length - 1]
              , N = E(S);
            Array.from(s).reverse().forEach(( (e, r, s) => {
                let {length: l} = s;
                const m = E(e);
                if (!m)
                    return;
                const h = m === N;
                let f = C(n, m)
                  , w = u + r + 1;
                if (f || (f = r === l - 1 ? I : S,
                w = u),
                !f)
                    return;
                let {top: M, left: k, width: T} = f.getBoundingClientRect();
                const {left: P, width: x} = e.getBoundingClientRect();
                if (P > y)
                    return;
                k -= A,
                T += 2 * A;
                const R = k - P
                  , L = M - g
                  , B = T / x;
                M -= A;
                const O = P - k + 2 * A
                  , F = g - M + A
                  , D = x / (T + 2 * A);
                (0,
                o.RK)(( () => {
                    if (!f)
                        return;
                    const n = v(e);
                    let r;
                    w > u ? (r = v(f),
                    h && r.classList.add(c.A.ghostLast)) : n.classList.add(c.A.ghostAnimateName),
                    (0,
                    i.ZM)(n, {
                        top: `${g}px`,
                        left: `${P}px`,
                        zIndex: `${w}`,
                        opacity: r ? "0" : "",
                        transform: `translate3d(${R}px, ${L}px, 0) scale(${B})`
                    }),
                    r && (0,
                    i.ZM)(r, {
                        top: `${M}px`,
                        left: `${k}px`,
                        zIndex: `${w}`
                    }),
                    t.appendChild(n),
                    r && t.appendChild(r),
                    f.classList.add("animating"),
                    e.classList.add("animating"),
                    (0,
                    o.RK)(( () => {
                        (0,
                        i.ZM)(n, {
                            opacity: "",
                            transform: ""
                        }),
                        r ? (0,
                        i.ZM)(r, {
                            opacity: "0",
                            transform: `translate3d(${O}px, ${F}px, 0) scale(${D})`
                        }) : n.classList.add(c.A.ghostRevealName);
                        const s = b(( () => {
                            (0,
                            o.RK)(( () => {
                                t.contains(n) && t.removeChild(n),
                                r && t.contains(r) && t.removeChild(r),
                                f?.classList.remove("animating"),
                                e.classList.remove("animating")
                            }
                            ))
                        }
                        ), d + a.xB5);
                        p.add(s)
                    }
                    ))
                }
                ))
            }
            ))
        }
        function g(e) {
            w();
            const {container: t, toggler: n, toggleAvatars: r, ribbonPeers: s, leftMainHeader: l} = f(e);
            if (!(n && r && s && t && l))
                return;
            const {right: m} = l.getBoundingClientRect()
              , y = r[0]
              , g = r[r.length - 1]
              , S = E(y);
            Array.from(s).reverse().forEach(( (e, r, s) => {
                let {length: l} = s;
                const f = E(e);
                if (!f)
                    return;
                const w = f === S;
                let I = C(n, f)
                  , N = u + r + 1;
                if (I || (I = r === l - 1 ? g : y,
                N = u),
                !I)
                    return;
                const {top: M, left: k, width: T} = e.getBoundingClientRect();
                let {left: P, width: x, top: R} = I.getBoundingClientRect();
                if (k > m)
                    return;
                P -= A,
                x += 2 * A;
                const L = P - k
                  , B = R - M - h
                  , O = x / T;
                R -= A;
                const F = k - P + 2 * A
                  , D = M - R + A
                  , U = T / (x + 2 * A);
                (0,
                o.RK)(( () => {
                    const n = v(e);
                    let r;
                    N > u ? (r = v(I),
                    w && r.classList.add(c.A.ghostLast)) : n.classList.add(c.A.ghostAnimateName, c.A.ghostRevealName),
                    (0,
                    i.ZM)(n, {
                        top: `${M}px`,
                        left: `${k}px`,
                        width: `${T}px`,
                        zIndex: `${N}`
                    }),
                    r && (0,
                    i.ZM)(r, {
                        top: `${R}px`,
                        left: `${P}px`,
                        zIndex: `${N}`,
                        opacity: "0",
                        transform: `translate3d(${F}px, ${D}px, 0) scale(${U})`
                    }),
                    e.classList.add("animating"),
                    I.classList.add("animating"),
                    t.appendChild(n),
                    r && t.appendChild(r),
                    (0,
                    o.RK)(( () => {
                        (0,
                        i.ZM)(n, {
                            opacity: r ? "0" : "",
                            transform: `translate3d(${L}px, ${B}px, 0) scale(${O})`
                        }),
                        r ? (0,
                        i.ZM)(r, {
                            opacity: "",
                            transform: ""
                        }) : n.classList.remove(c.A.ghostRevealName);
                        const s = b(( () => {
                            (0,
                            o.RK)(( () => {
                                t.contains(n) && t.removeChild(n),
                                r && t.contains(r) && t.removeChild(r),
                                e.classList.remove("animating"),
                                I.classList.remove("animating")
                            }
                            ))
                        }
                        ), d + a.xB5);
                        p.add(s)
                    }
                    ))
                }
                ))
            }
            ))
        }
        function f(e) {
            let t = document.getElementById("LeftColumn");
            if (t && e && (t = t.querySelector(".ArchivedChats")),
            !t)
                return {};
            const n = t.querySelector("#StoryToggler")
              , a = t.querySelector("#StoryRibbon")
              , o = t.querySelector(".left-header")
              , i = a?.querySelectorAll(`.${l.A.peer}`)
              , r = n?.querySelectorAll(".Avatar");
            return {
                container: t,
                toggler: n,
                leftMainHeader: o,
                ribbonPeers: i,
                toggleAvatars: r
            }
        }
        function v(e) {
            const t = e.cloneNode(!0);
            t.classList.add(c.A.ghost),
            t.classList.remove("animating"),
            t.draggable = !1,
            t.oncontextmenu = r.A;
            const n = e.querySelector("canvas");
            if (n) {
                const e = t.querySelector("canvas");
                e?.getContext("2d")?.drawImage(n, 0, 0)
            }
            return t
        }
        function E(e) {
            return e?.getAttribute("data-peer-id")
        }
        function C(e, t) {
            return e?.querySelector(`[data-peer-id="${t}"]`)
        }
        function b(e, t) {
            const n = setTimeout(e, t);
            return () => {
                clearTimeout(n),
                e()
            }
        }
        function w() {
            p.forEach((e => e())),
            p.clear()
        }
    }
    ,
    46051: (e, t, n) => {
        n.d(t, {
            G: () => a,
            w: () => o
        });
        const a = "video/mp4; codecs=hvc1.1.6.L63.00"
          , o = "video/mp4; codecs=avc1.64001E"
    }
    ,
    92111: (e, t, n) => {
        n.d(t, {
            A: () => g
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(23174)
          , r = n(90709)
          , s = n(29807)
          , l = n(39761)
          , c = n(87679)
          , d = n(58554)
          , m = n(20897)
          , u = n(37836)
          , A = n(46051)
          , h = n(66991);
        const p = {}
          , y = (0,
        u.v7)(1e3)
          , g = function(e, t) {
            (0,
            a.vJ)(( () => {
                if (void 0 === e)
                    return;
                (Array.isArray(e) ? e : [e]).forEach((e => {
                    const n = t || (0,
                    o.mS)().stories.byPeerId[e]?.orderedIds?.[0];
                    n && (async e => {
                        await y,
                        e.forEach((e => {
                            let {hash: t, format: n, isStream: a} = e;
                            a ? async function(e) {
                                const t = (0,
                                m.h)((0,
                                d.RB)(e));
                                let n = 0;
                                for await(const e of t)
                                    if (n += e.byteLength,
                                    n >= 2097152)
                                        break
                            }(t) : d.hd(t, n).then((e => {
                                e && (n === i.qZ.Progressive && function(e) {
                                    const t = document.head
                                      , n = document.createElement("video");
                                    n.preload = "auto",
                                    n.src = e,
                                    n.muted = !0,
                                    n.autoplay = !0,
                                    n.disableRemotePlayback = !0,
                                    n.style.display = "none",
                                    t.appendChild(n),
                                    n.load(),
                                    setTimeout(( () => {
                                        (0,
                                        l.A)(n),
                                        t.removeChild(n)
                                    }
                                    ), 1e3)
                                }(e),
                                n === i.qZ.BlobUrl && (0,
                                c.NN)(e))
                            }
                            ))
                        }
                        ))
                    }
                    )(function(e, t) {
                        const n = (0,
                        s._bp)((0,
                        o.mS)(), e);
                        if (!n || !n.orderedIds?.length)
                            return [];
                        const a = function(e, t, n) {
                            const a = e.indexOf(t)
                              , o = Math.max(a - 5, 0)
                              , i = Math.min(a + 5, e.length);
                            return e.slice(o, i)
                        }(n.orderedIds, t)
                          , l = [];
                        return a.forEach((t => {
                            if (p[e]?.has(t))
                                return;
                            const a = n.byId[t];
                            if (!a || !("content"in a))
                                return;
                            const o = Boolean(a.content.video);
                            l.push({
                                hash: (0,
                                r.EN)(a, "full"),
                                format: o ? i.qZ.Progressive : i.qZ.BlobUrl,
                                isStream: o && (0,
                                h.c)(A.G)
                            }),
                            l.push({
                                hash: (0,
                                r.EN)(a),
                                format: i.qZ.BlobUrl
                            }),
                            a.content.altVideo && l.push({
                                hash: (0,
                                r.EN)(a, "full", !0),
                                format: i.qZ.Progressive
                            }),
                            p[e] = (p[e] || new Set).add(t)
                        }
                        )),
                        l
                    }(e, n))
                }
                ))
            }
            ), [t, e])
        }
    }
    ,
    83429: (e, t, n) => {
        n.d(t, {
            A: () => E
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(66644)
          , s = n(87357)
          , l = n(95807)
          , c = n(39751)
          , d = n(90709)
          , m = n(76023)
          , u = n(82117)
          , A = n(17712)
          , h = n(93545)
          , p = n(23470);
        const y = "pruw1nLm"
          , g = (0,
        a.ph)((e => {
            let {story: t, mediaArea: n, index: i, className: r, style: c, isPreview: y} = e;
            const {sendStoryReaction: g} = (0,
            o.ko)()
              , f = (0,
            a.li)(null)
              , [v,E] = (0,
            a.J0)(1.5 * m.$)
              , {peerId: C, id: b, views: w} = t
              , {reactions: S} = w || {}
              , {reaction: I, isDark: N, isFlipped: M} = n
              , k = !(0,
            d.L8)(C)
              , T = `${(0,
            d.$_)(C, b)}-${i}-${y ? "preview" : "viewer"}`
              , P = (0,
            a.Kr)(( () => S?.find((e => (0,
            d.a0)(e.reaction, I)))?.count), [I, S])
              , x = !y && Boolean(P) && k
              , R = (0,
            A.A)(( () => {
                if (!f.current)
                    return;
                const e = f.current.clientHeight;
                E(Math.round(.6 * e))
            }
            ));
            (0,
            u.A)((e => {
                let[t] = e;
                Boolean(P) !== Boolean(t) && R()
            }
            ), [P]),
            (0,
            h.A)(f, R);
            const L = (0,
            A.A)(( () => {
                g({
                    peerId: C,
                    storyId: b,
                    containerId: T,
                    reaction: I
                })
            }
            ));
            return a.Ay.createElement("div", {
                ref: f,
                className: (0,
                s.A)("WQ5DA3P_", N && "eic2vQ8c", r),
                style: (0,
                l.A)(c, `--custom-emoji-size: ${v}px`),
                onClick: L
            }, a.Ay.createElement("div", {
                className: (0,
                s.A)("j4MKFabm", M && "furSXGdL")
            }), Boolean(v) && a.Ay.createElement(p.A, {
                className: (0,
                s.A)("Et3MvYmN", x && "mFTLUHm2"),
                reaction: I,
                containerId: T,
                size: v,
                effectSize: 4 * v,
                shouldPause: y,
                shouldLoop: !y
            }), x && a.Ay.createElement("span", {
                className: "Tr8mYyDk"
            }, P))
        }
        ))
          , f = 9 / 16;
        function v(e) {
            const {x: t, y: n, width: a, height: o, rotation: i, radius: r} = e.coordinates;
            return (0,
            l.A)(`left: ${t}%`, `top: ${n}%`, `width: ${a}%`, `height: ${o}%`, `transform: rotate(${i}deg) translate(-50%, -50%)`, Boolean(r) && `border-radius: ${r}%`)
        }
        const E = (0,
        a.ph)((e => {
            let {story: t, isActive: n, className: l} = e;
            const {openMapModal: d, focusMessage: m, closeStoryViewer: u, openUrl: A} = (0,
            o.ko)()
              , h = (0,
            a.li)(null)
              , p = (0,
            c.A)();
            (0,
            a.vJ)(( () => {
                if (!h.current || !n)
                    return;
                const e = h.current;
                if (p.width > i.c2m)
                    return void (0,
                    r.RK)(( () => {
                        e.style.removeProperty("--media-width"),
                        e.style.removeProperty("--media-height")
                    }
                    ));
                const t = p.width / p.height
                  , a = t < f ? e.clientHeight * f : e.clientWidth
                  , o = t < f ? e.clientHeight : e.clientWidth / f;
                (0,
                r.RK)(( () => {
                    e.style.setProperty("--media-width", `${a}px`),
                    e.style.setProperty("--media-height", `${o}px`)
                }
                ))
            }
            ), [n, p]);
            const E = t.mediaAreas;
            return a.Ay.createElement("div", {
                className: (0,
                s.A)("RXAMu4VD", !n && "_5HkplWee", l),
                ref: h
            }, E?.map(( (e, o) => {
                switch (e.type) {
                case "geoPoint":
                case "venue":
                case "channelPost":
                case "url":
                    {
                        const t = n && "channelPost" !== e.type;
                        return a.Ay.createElement("div", {
                            className: (0,
                            s.A)(y, t && "xFjJpeOA"),
                            style: v(e),
                            onClick: () => (e => {
                                switch (e.type) {
                                case "geoPoint":
                                case "venue":
                                    d({
                                        geoPoint: e.geo
                                    });
                                    break;
                                case "channelPost":
                                    m({
                                        chatId: e.channelId,
                                        messageId: e.messageId
                                    }),
                                    u();
                                    break;
                                case "url":
                                    A({
                                        url: e.url
                                    })
                                }
                            }
                            )(e)
                        })
                    }
                case "suggestedReaction":
                    return a.Ay.createElement(g, {
                        key: `${e.type}-${o}`,
                        story: t,
                        mediaArea: e,
                        index: o,
                        isPreview: !n,
                        className: y,
                        style: v(e)
                    });
                default:
                    return
                }
            }
            )))
        }
        ))
    }
    ,
    86046: (e, t, n) => {
        n.d(t, {
            D5: () => c,
            M6: () => l,
            Pc: () => r,
            hk: () => s,
            jA: () => i
        });
        var a = n(14242)
          , o = n(29807);
        function i(e, t) {
            if ("slug" === t.type)
                return t;
            if ("starsgift" === t.type) {
                const {userId: n, stars: a, amount: i, currency: r} = t
                  , s = (0,
                o.mBe)(e, n);
                if (!s)
                    return;
                return {
                    type: "stars",
                    purpose: {
                        type: "starsgift",
                        user: s,
                        stars: a,
                        amount: i,
                        currency: r
                    }
                }
            }
            if ("stars" === t.type) {
                const {stars: e, amount: n, currency: a} = t;
                return {
                    type: "stars",
                    purpose: {
                        type: "stars",
                        stars: e,
                        amount: n,
                        currency: a
                    }
                }
            }
            if ("message" === t.type) {
                const n = (0,
                o.hds)(e, t.chatId);
                if (!n)
                    return;
                return {
                    type: "message",
                    chat: n,
                    messageId: t.messageId
                }
            }
            if ("giftcode" === t.type) {
                const {userIds: n, boostChannelId: a, amount: i, currency: r, option: s} = t;
                return {
                    type: "giveaway",
                    option: s,
                    purpose: {
                        type: "giftcode",
                        amount: i,
                        currency: r,
                        users: n.map((t => (0,
                        o.mBe)(e, t))).filter(Boolean),
                        boostChannel: a ? (0,
                        o.hds)(e, a) : void 0
                    }
                }
            }
            if ("starsgiveaway" === t.type) {
                const {chatId: n, additionalChannelIds: a, amount: i, currency: r, untilDate: s, areWinnersVisible: l, countries: c, isOnlyForNewSubscribers: d, prizeDescription: m, stars: u, users: A} = t
                  , h = (0,
                o.hds)(e, n);
                if (!h)
                    return;
                const p = a?.map((t => (0,
                o.hds)(e, t))).filter(Boolean);
                return {
                    type: "starsgiveaway",
                    purpose: {
                        type: "starsgiveaway",
                        amount: i,
                        currency: r,
                        chat: h,
                        additionalChannels: p,
                        untilDate: s,
                        areWinnersVisible: l,
                        countries: c,
                        isOnlyForNewSubscribers: d,
                        prizeDescription: m,
                        stars: u,
                        users: A
                    }
                }
            }
            if ("giveaway" === t.type) {
                const {chatId: n, additionalChannelIds: a, amount: i, currency: r, option: s, untilDate: l, areWinnersVisible: c, countries: d, isOnlyForNewSubscribers: m, prizeDescription: u} = t
                  , A = (0,
                o.hds)(e, n);
                if (!A)
                    return;
                const h = a?.map((t => (0,
                o.hds)(e, t))).filter(Boolean);
                return {
                    type: "giveaway",
                    option: s,
                    purpose: {
                        type: "giveaway",
                        amount: i,
                        currency: r,
                        chat: A,
                        additionalChannels: h,
                        untilDate: l,
                        areWinnersVisible: c,
                        countries: d,
                        isOnlyForNewSubscribers: m,
                        prizeDescription: u
                    }
                }
            }
        }
        function r(e) {
            return "appStore" === e.type ? {
                avatarIcon: "star",
                isCustomPeer: !0,
                titleKey: "Stars.Intro.Transaction.AppleTopUp.Title",
                subtitleKey: "Stars.Intro.Transaction.AppleTopUp.Subtitle",
                peerColorId: 5
            } : "playMarket" === e.type ? {
                avatarIcon: "star",
                isCustomPeer: !0,
                titleKey: "Stars.Intro.Transaction.GoogleTopUp.Title",
                subtitleKey: "Stars.Intro.Transaction.GoogleTopUp.Subtitle",
                peerColorId: 3
            } : "fragment" === e.type ? {
                avatarIcon: "star",
                isCustomPeer: !0,
                titleKey: "Stars.Intro.Transaction.FragmentTopUp.Title",
                subtitleKey: "Stars.Intro.Transaction.FragmentTopUp.Subtitle",
                customPeerAvatarColor: "#000000"
            } : "premiumBot" === e.type ? {
                avatarIcon: "star",
                isCustomPeer: !0,
                titleKey: "Stars.Intro.Transaction.PremiumBotTopUp.Title",
                subtitleKey: "Stars.Intro.Transaction.PremiumBotTopUp.Subtitle",
                peerColorId: 1,
                withPremiumGradient: !0
            } : "ads" === e.type ? {
                avatarIcon: "star",
                isCustomPeer: !0,
                titleKey: "Stars.Intro.Transaction.TelegramAds.Title",
                subtitleKey: "Stars.Intro.Transaction.TelegramAds.Subtitle",
                peerColorId: 2
            } : {
                avatarIcon: "star",
                isCustomPeer: !0,
                titleKey: "Stars.Intro.Transaction.Unsupported.Title",
                subtitleKey: "Stars.Intro.Transaction.Unsupported.Title",
                peerColorId: 0
            }
        }
        function s(e) {
            return e < 0 ? `- ${(0,
            a.Sm)(Math.abs(e))}` : `+ ${(0,
            a.Sm)(e)}`
        }
        function l(e) {
            const {action: t} = e.content;
            if ("giftStars" !== t?.type)
                return;
            const {transactionId: n, stars: a} = t;
            return {
                id: n,
                stars: a,
                peer: {
                    type: "peer",
                    id: e.isOutgoing ? e.chatId : e.senderId || e.chatId
                },
                date: e.date,
                isGift: !0,
                isMyGift: e.isOutgoing || void 0
            }
        }
        function c(e) {
            const {action: t} = e.content;
            if ("prizeStars" !== t?.type)
                return;
            const {transactionId: n, stars: a, targetChatId: o} = t;
            return {
                id: n,
                stars: a,
                peer: {
                    type: "peer",
                    id: o
                },
                date: e.date,
                isPrizeStars: !0
            }
        }
    }
    ,
    70636: (e, t, n) => {
        n.d(t, {
            cy: () => i,
            vj: () => o
        });
        var a = n(31481);
        function o(e) {
            return "title"in e
        }
        function i(e) {
            return o(e) ? "chatTypeBasicGroup" === e.type || "chatTypeSuperGroup" === e.type ? "ChatList.PeerTypeGroup" : "chatTypeChannel" === e.type ? "ChatList.PeerTypeChannel" : "chatTypePrivate" === e.type ? "ChatList.PeerTypeNonContact" : void 0 : e.id === a.zv8 ? "ServiceNotifications" : e.isSupport ? "SupportStatus" : e.type && "userTypeBot" === e.type ? "ChatList.PeerTypeBot" : e.isContact ? "ChatList.PeerTypeContact" : "ChatList.PeerTypeNonContactUser"
        }
    }
    ,
    84313: (e, t, n) => {
        n.d(t, {
            A: () => c
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(82393)
          , r = n(17712)
          , s = n(59030);
        const l = 8e3;
        function c(e, t, n) {
            const {showNotification: c} = (0,
            o.ko)()
              , d = (0,
            s.A)()
              , [m,u] = (0,
            a.J0)(!1)
              , A = (0,
            r.A)(( () => {
                u(!0),
                t || c({
                    message: i.yS ? d("Video.Unsupported.Mobile") : d("Video.Unsupported.Desktop"),
                    duration: l
                })
            }
            ))
              , h = (0,
            r.A)((e => {
                const t = e.currentTarget
                  , {error: n} = t;
                n && (3 !== n.code && 4 !== n.code || A())
            }
            ))
              , p = (0,
            r.A)((e => {
                const t = e.currentTarget;
                t.videoHeight && t.videoWidth || A()
            }
            ));
            return (0,
            a.vJ)(( () => {
                if (n)
                    return;
                const {current: t} = e;
                return t ? (t.addEventListener("error", h),
                t.addEventListener("canplay", p),
                () => {
                    t.removeEventListener("error", h),
                    t.removeEventListener("canplay", p)
                }
                ) : void 0
            }
            ), [n, e]),
            m
        }
    }
    ,
    23459: (e, t, n) => {
        n.d(t, {
            A: () => u
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(90709)
          , r = n(29807)
          , s = n(37836);
        const l = 36e5
          , c = new Map;
        let d = new Set;
        const m = (0,
        s.nF)(( () => {
            const e = Array.from(d)
              , t = e.slice(0, 100)
              , n = e.slice(101);
            (0,
            o.ko)().loadStoriesMaxIds({
                peerIds: t
            }),
            t.forEach((e => c.set(e, Date.now()))),
            d = new Set(n),
            d.size && m()
        }
        ), 500);
        function u(e) {
            const t = (0,
            a.Kr)(( () => {
                const t = (0,
                o.mS)();
                return e?.map((e => (0,
                r.PVB)(t, e))).filter(Boolean)
            }
            ), [e])
              , n = (0,
            a.Kr)(( () => {
                const e = (0,
                o.mS)();
                return t?.filter((t => {
                    const n = c.get(t.id) || 0;
                    if (Date.now() - n < l)
                        return !1;
                    if ((0,
                    i.L8)(t.id)) {
                        const n = t
                          , a = (0,
                        r.K0y)(e, n.id)
                          , o = a && "userStatusEmpty" !== a.type;
                        return !n.isContact && !n.isSelf && !(0,
                        i.tv)(n) && !t.isSupport && o
                    }
                    {
                        const e = t;
                        return (0,
                        i.WX)(e) && !e.isRestricted
                    }
                }
                )).map((e => e.id))
            }
            ), [t]);
            (0,
            a.vJ)(( () => {
                n?.length && (n.forEach((e => d.add(e))),
                m())
            }
            ), [n])
        }
    }
    ,
    31880: (e, t, n) => {
        n.d(t, {
            A: () => A,
            a: () => c
        });
        var a = n(13439)
          , o = n(29807)
          , i = n(87894)
          , r = n(42215);
        const s = ["includedChatIds", "bots", "channels", "groups", "contacts", "nonContacts"]
          , l = ["excludedChatIds", "excludeArchived", "excludeMuted", "excludeRead"];
        function c(e, t, n) {
            let r = []
              , c = [];
            if ("included" === t) {
                const {includedChatIds: t, ...a} = n ? e.includeFilters || {} : (0,
                i.Up)(e.folder, s);
                r = t || [],
                c = Object.keys(a).filter((e => Boolean(a[e])))
            } else {
                const {excludedChatIds: t, ...a} = n ? e.excludeFilters || {} : (0,
                i.Up)(e.folder, l);
                r = t || [],
                c = Object.keys(a).filter((e => Boolean(a[e])))
            }
            const d = (0,
            a.mS)();
            return {
                selectedChatIds: r.filter((e => (0,
                o.hds)(d, e))),
                selectedChatTypes: c
            }
        }
        function d(e) {
            if (e) {
                const {includedChatIds: t, ...n} = e;
                if (Object.values(n).filter(Boolean).length > 1 || t?.length)
                    return "";
                if (n.bots)
                    return "Bots";
                if (n.groups)
                    return "Groups";
                if (n.channels)
                    return "Channels";
                if (n.contacts)
                    return "Contacts";
                if (n.nonContacts)
                    return "Non-Contacts"
            }
            return ""
        }
        const m = {
            mode: "create",
            chatFilter: "",
            folder: {
                title: "",
                includedChatIds: [],
                excludedChatIds: []
            }
        }
          , u = (e, t) => {
            switch (t.type) {
            case "setTitle":
                return {
                    ...e,
                    folder: {
                        ...e.folder,
                        title: t.payload
                    },
                    isTouched: !0
                };
            case "setFolderId":
                return {
                    ...e,
                    folderId: t.payload,
                    mode: "edit"
                };
            case "editIncludeFilters":
                return {
                    ...e,
                    includeFilters: (0,
                    i.Up)(e.folder, s)
                };
            case "editExcludeFilters":
                return {
                    ...e,
                    excludeFilters: (0,
                    i.Up)(e.folder, l)
                };
            case "setIncludeFilters":
                return {
                    ...e,
                    includeFilters: t.payload,
                    chatFilter: ""
                };
            case "setExcludeFilters":
                return {
                    ...e,
                    excludeFilters: t.payload,
                    chatFilter: ""
                };
            case "saveFilters":
                return e.includeFilters ? {
                    ...e,
                    folder: {
                        ...(0,
                        i.cJ)(e.folder, s),
                        title: e.folder.title ? e.folder.title : d(e.includeFilters),
                        ...e.includeFilters
                    },
                    includeFilters: void 0,
                    chatFilter: "",
                    isTouched: !0
                } : e.excludeFilters ? {
                    ...e,
                    folder: {
                        ...(0,
                        i.cJ)(e.folder, l),
                        ...e.excludeFilters
                    },
                    excludeFilters: void 0,
                    chatFilter: "",
                    isTouched: !0
                } : e;
            case "editFolder":
                {
                    const {id: e, description: n, ...a} = t.payload;
                    return {
                        mode: "edit",
                        folderId: e,
                        folder: a,
                        chatFilter: ""
                    }
                }
            case "setChatFilter":
                return {
                    ...e,
                    chatFilter: t.payload
                };
            case "setIsTouched":
                return {
                    ...e,
                    isTouched: t.payload
                };
            case "setIsLoading":
                return {
                    ...e,
                    isLoading: t.payload
                };
            case "setError":
                return {
                    ...e,
                    isLoading: !1,
                    error: t.payload
                };
            case "setIsChatlist":
                return {
                    ...e,
                    folder: {
                        ...e.folder,
                        isChatList: t.payload
                    }
                };
            case "reset":
                return m;
            default:
                return e
            }
        }
          , A = () => (0,
        r.A)(u, m)
    }
    ,
    14737: (e, t, n) => {
        n.d(t, {
            A: () => i
        });
        var a = n(84051)
          , o = n(17712);
        const i = function(e, t) {
            const n = (0,
            o.A)(e);
            (0,
            a.vJ)(( () => {
                if ("number" != typeof t)
                    return;
                const e = setTimeout(( () => n()), t);
                return () => clearTimeout(e)
            }
            ), [t])
        }
    }
    ,
    63988: (e, t, n) => {
        n.d(t, {
            D7: () => c,
            aG: () => s,
            gs: () => r,
            tF: () => l
        });
        var a = n(16581)
          , o = n(83414)
          , i = n(672);
        function r(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return (0,
            i.A)((t => {
                t(e())
            }
            ), t, n, a)
        }
        function s(e, t) {
            const n = r(( () => e()), [e], t, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
            return (0,
            o.A)(n, [n, e], !0)
        }
        function l(e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return (0,
            a.A)((t => {
                t(e())
            }
            ), t, n, o, i)
        }
        function c(e, t) {
            const n = l(( () => e()), [e], t, arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] && arguments[3]);
            return (0,
            o.A)(n, [n, e], !0)
        }
    }
    ,
    88792: (e, t, n) => {
        n.d(t, {
            A: () => A
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(29807)
          , s = n(53827)
          , l = n(49642)
          , c = n(80853)
          , d = n(82117)
          , m = n(17712)
          , u = n(35297);
        const A = function(e, t, n, A, h, p, y) {
            let g = arguments.length > 7 && void 0 !== arguments[7] && arguments[7]
              , f = arguments.length > 8 ? arguments[8] : void 0
              , v = arguments.length > 9 ? arguments[9] : void 0
              , E = arguments.length > 10 && void 0 !== arguments[10] && arguments[10]
              , C = arguments.length > 11 && void 0 !== arguments[11] && arguments[11]
              , b = arguments.length > 12 ? arguments[12] : void 0
              , w = arguments.length > 13 && void 0 !== arguments[13] && arguments[13]
              , S = arguments.length > 14 && void 0 !== arguments[14] && arguments[14];
            const I = (0,
            a.li)(null)
              , [N,M] = (0,
            a.J0)(!1);
            let k = N;
            const [T,P] = (0,
            a.J0)(0)
              , x = (0,
            m.A)(( () => {
                M(!1),
                v && v()
            }
            ));
            (0,
            u.A)(( () => {
                if (!e)
                    return;
                I.current = (0,
                s.kz)(e, n, ( (e, a) => {
                    if (!S) {
                        switch (e) {
                        case "onPlay":
                            {
                                const {setVolume: e, setPlaybackRate: a, toggleMuted: s, proxy: c} = I.current;
                                M(!0),
                                "oneTimeVoice" !== n && (0,
                                l.MV)(p, function(e) {
                                    let t = {};
                                    if (e && e.current) {
                                        const {play: n, pause: a, setCurrentTime: i, proxy: r, requestNextTrack: s, requestPreviousTrack: l, isFirst: c, isLast: d} = e.current;
                                        t = {
                                            play: () => {
                                                n(r.src)
                                            }
                                            ,
                                            pause: () => {
                                                a()
                                            }
                                            ,
                                            stop: () => {
                                                a(),
                                                i(0),
                                                (0,
                                                o.ko)().closeAudioPlayer()
                                            }
                                            ,
                                            seekbackward: e => {
                                                const t = e.seekOffset || 10;
                                                i(Math.max(r.currentTime - t, 0))
                                            }
                                            ,
                                            seekforward: e => {
                                                const t = e.seekOffset || 10;
                                                i(Math.min(r.currentTime + t, r.duration))
                                            }
                                            ,
                                            seekTo: e => {
                                                e.seekTime && i(e.seekTime)
                                            }
                                        },
                                        d() || (t.nexttrack = () => {
                                            s()
                                        }
                                        ),
                                        c() || (t.previoustrack = () => {
                                            l()
                                        }
                                        )
                                    }
                                    return t
                                }(I)),
                                (0,
                                l.HW)("playing");
                                const {audioPlayer: d} = (0,
                                r.nTw)((0,
                                o.mS)());
                                e(d.volume),
                                s(Boolean(d.isMuted));
                                const m = c.duration && Number.isFinite(c.duration) ? c.duration : t;
                                ("voice" === n || m > i.CVm) && a(d.playbackRate),
                                (0,
                                l.hm)({
                                    duration: c.duration || 0,
                                    playbackRate: c.playbackRate,
                                    position: c.currentTime
                                });
                                break
                            }
                        case "onRateChange":
                            {
                                const {proxy: e} = I.current;
                                (0,
                                l.hm)({
                                    duration: e.duration || 0,
                                    playbackRate: e.playbackRate,
                                    position: e.currentTime
                                });
                                break
                            }
                        case "onPause":
                            M(!1),
                            (0,
                            l.HW)("paused"),
                            b?.();
                            break;
                        case "onTimeUpdate":
                            {
                                const {proxy: e} = I.current;
                                if (w && 0 === e.currentTime)
                                    break;
                                const n = e.duration && Number.isFinite(e.duration) ? e.duration : t;
                                C || P(e.currentTime / n);
                                break
                            }
                        case "onEnded":
                            (0,
                            l.HW)("paused")
                        }
                        h?.[e]?.(a)
                    }
                }
                ), f, x);
                const {proxy: a} = I.current;
                N || a.paused || (M(!0),
                k = !0),
                y && !S && y(a)
            }
            ), [e]),
            (0,
            a.vJ)(( () => {
                N && p && (0,
                l.D5)(p)
            }
            ), [p, N]);
            const {play: R, pause: L, setCurrentTime: B, proxy: O, destroy: F, setVolume: D, stop: U, isFirst: K, isLast: j, requestNextTrack: z, requestPreviousTrack: $, setPlaybackRate: _, toggleMuted: J} = I.current ?? {}
              , V = (0,
            a.Kr)(( () => O?.duration && Number.isFinite(O.duration) ? O.duration : t), [O?.duration, t]);
            (0,
            a.vJ)(( () => {
                O && (w && 0 === O.currentTime || !V || (0,
                c.f)(O) || C || P(O.currentTime / V))
            }
            ), [V, T, O, C, w]),
            (0,
            a.vJ)(( () => () => {
                F?.(E)
            }
            ), [F, E]),
            (0,
            d.A)((e => {
                let[t,n] = e;
                t === g && A === n || O?.src && O?.paused || g && A && !N && R?.(A)
            }
            ), [g, A, N, R, O?.src, O?.paused, n]);
            const H = (0,
            m.A)(( () => {
                A && R?.(A)
            }
            ))
              , q = (0,
            m.A)(( () => {
                N ? L?.() : H()
            }
            ))
              , G = (0,
            m.A)((e => {
                B?.(e),
                V && O && P(O.currentTime / V)
            }
            ));
            return {
                isPlaying: k,
                playProgress: T,
                playPause: q,
                pause: L,
                play: H,
                stop: U,
                setCurrentTime: G,
                setVolume: D,
                audioProxy: O,
                duration: V,
                requestNextTrack: z,
                requestPreviousTrack: $,
                isFirst: K,
                isLast: j,
                setPlaybackRate: _,
                toggleMuted: J
            }
        }
    }
    ,
    45470: (e, t, n) => {
        n.d(t, {
            A: () => d
        });
        var a = n(84051)
          , o = n(32610)
          , i = n(66644)
          , r = n(82393)
          , s = n(35297);
        const l = 2
          , c = 2;
        function d(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 ? arguments[2] : void 0
              , d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l
              , m = arguments.length > 4 ? arguments[4] : void 0
              , u = arguments.length > 5 ? arguments[5] : void 0;
            const A = (0,
            a.li)(null)
              , h = (0,
            a.li)();
            return (0,
            s.A)(( () => {
                t || (h.current = !1)
            }
            ), [e, t]),
            (0,
            a.vJ)(( () => {
                const a = A.current;
                if (!e || !a || t || h.current)
                    return;
                h.current = !0;
                const s = new Image
                  , l = () => {
                    const e = m || s.width
                      , t = u || s.height
                      , n = a.getContext("2d", {
                        alpha: !1
                    });
                    (0,
                    i.RK)(( () => {
                        a.width = e,
                        a.height = t,
                        r.QH && (n.filter = `blur(${d}px)`),
                        n.drawImage(s, 2 * -d, 2 * -d, e + 4 * d, t + 4 * d),
                        r.QH || (0,
                        o.A)(n, 0, 0, e, t, d, c)
                    }
                    ))
                }
                ;
                s.onload = () => {
                    n ? (0,
                    i.YS)(l) : l()
                }
                ,
                s.src = e
            }
            ), [e, t, u, m, d, n]),
            A
        }
    }
    ,
    47067: (e, t, n) => {
        n.d(t, {
            A: () => d
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(90709)
          , s = n(87894)
          , l = n(82393)
          , c = n(59030);
        const d = function(e) {
            let {chat: t, user: n, folderId: d, isPinned: m, isMuted: u, canChangeFolder: A, isSavedDialog: h, currentUserId: p, isPreview: y, handleDelete: g, handleMute: f, handleChatFolderChange: v, handleReport: E} = e
              , C = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const b = (0,
            c.A)()
              , {isSelf: w} = n || {}
              , S = n?.id === i.zv8
              , I = (0,
            a.Kr)(( () => {
                if (t)
                    return h ? b("Delete") : (0,
                    r.L8)(t.id) ? b("DeleteChatUser") : (0,
                    r.IC)(t) ? b("DeleteChat") : (0,
                    r.WX)(t) ? b("LeaveChannel") : b("Group.LeaveGroup")
            }
            ), [t, h, b]);
            return (0,
            a.Kr)(( () => {
                if (!t || y)
                    return;
                const {toggleChatPinned: e, toggleSavedDialogPinned: a, updateChatMutedState: i, toggleChatArchived: c, toggleChatUnread: N, openChatInNewTab: M} = (0,
                o.ko)()
                  , k = l.OS && {
                    title: l.cp ? "Open in new window" : "Open in new tab",
                    icon: "open-in-new-tab",
                    handler: () => {
                        M(h ? {
                            chatId: p,
                            threadId: t.id
                        } : {
                            chatId: t.id
                        })
                    }
                }
                  , T = () => {
                    h ? a({
                        id: t.id
                    }) : e({
                        id: t.id,
                        folderId: d
                    })
                }
                  , P = m ? {
                    title: b("UnpinFromTop"),
                    icon: "unpin",
                    handler: T
                } : {
                    title: b("PinToTop"),
                    icon: "pin",
                    handler: T
                }
                  , x = {
                    title: I,
                    icon: "delete",
                    destructive: !0,
                    handler: g
                };
                if (h)
                    return (0,
                    s.oE)([k, P, x]);
                const R = A ? {
                    title: b("ChatList.Filter.AddToFolder"),
                    icon: "folder",
                    handler: v
                } : void 0
                  , L = u ? {
                    title: b("ChatList.Unmute"),
                    icon: "unmute",
                    handler: () => i({
                        chatId: t.id,
                        isMuted: !1
                    })
                } : {
                    title: `${b("ChatList.Mute")}...`,
                    icon: "mute",
                    handler: f
                };
                if (C)
                    return (0,
                    s.oE)([k, P, R, L]);
                const B = t.unreadCount || t.hasUnreadMark ? {
                    title: b("MarkAsRead"),
                    icon: "readchats",
                    handler: () => N({
                        id: t.id
                    })
                } : void 0
                  , O = t.unreadCount || t.hasUnreadMark || t.isForum ? void 0 : {
                    title: b("MarkAsUnread"),
                    icon: "unread",
                    handler: () => N({
                        id: t.id
                    })
                }
                  , F = (0,
                r.TJ)(t) ? {
                    title: b("Unarchive"),
                    icon: "unarchive",
                    handler: () => c({
                        id: t.id
                    })
                } : {
                    title: b("Archive"),
                    icon: "archive",
                    handler: () => c({
                        id: t.id
                    })
                }
                  , D = E && ((0,
                r.WX)(t) || (0,
                r.YE)(t) || n && !n.isSelf) ? {
                    title: b("ReportPeer.Report"),
                    icon: "flag",
                    handler: E
                } : void 0
                  , U = void 0 !== d;
                return (0,
                s.oE)([k, R, B, O, P, !w && L, !w && !S && !U && F, D, x])
            }
            ), [t, n, A, b, v, m, C, u, p, g, f, E, d, w, S, h, I, y])
        }
    }
    ,
    49746: (e, t, n) => {
        n.d(t, {
            A: () => i
        });
        var a = n(84051)
          , o = n(13439);
        function i(e, t, n, i, r) {
            const {loadMessage: s} = (0,
            o.ko)();
            (0,
            a.vJ)(( () => {
                r || t && !n && s({
                    chatId: e,
                    messageId: t,
                    replyOriginForId: i
                })
            }
            ), [r, e, n, t, i])
        }
    }
    ,
    21488: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(37836);
        const r = function(e, t, n) {
            const {loadPeerStoriesByIds: r} = (0,
            o.ko)()
              , s = (0,
            a.Kr)(( () => {
                const n = (0,
                i.nF)(r, 200, !0);
                return () => {
                    n({
                        peerId: e,
                        storyIds: [t]
                    })
                }
            }
            ), [t, e]);
            (0,
            a.vJ)(( () => {
                e && t && (!n || !("content"in n) && !("isDeleted"in n)) && s()
            }
            ), [s, n, t, e])
        }
    }
    ,
    74984: (e, t, n) => {
        n.d(t, {
            Rh: () => r,
            g5: () => l,
            ic: () => s
        });
        var a = n(84051)
          , o = n(49763)
          , i = n(30857);
        function r(e) {
            const t = (0,
            i.A)();
            return (0,
            a.vJ)(( () => (0,
            o.Yw)(e, t)), [e, t]),
            (0,
            o.YA)(e)
        }
        function s() {
            const e = (0,
            i.A)();
            return (0,
            a.vJ)(( () => (0,
            o.P1)(e)), [e]),
            (0,
            o.PZ)()
        }
        function l() {
            const e = (0,
            i.A)();
            return (0,
            a.vJ)(( () => (0,
            o.BU)(e)), [e]),
            (0,
            o.jn)()
        }
    }
    ,
    11462: (e, t, n) => {
        n.d(t, {
            A: () => s
        });
        var a = n(84051)
          , o = n(30857)
          , i = n(17712)
          , r = n(35297);
        function s() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            const t = (0,
            a.li)(e)
              , n = (0,
            a.li)(!1)
              , s = (0,
            o.A)();
            (0,
            r.A)(( () => {
                e && (t.current = !0)
            }
            ), [e]);
            const l = (0,
            i.A)(( () => {
                t.current = !1,
                n.current = !1,
                s()
            }
            ))
              , c = (0,
            i.A)(( () => {
                n.current = !0,
                s()
            }
            ));
            return {
                shouldRenderForumPanel: t.current,
                isAnimationStarted: n.current,
                handleForumPanelAnimationEnd: l,
                handleForumPanelAnimationStart: c
            }
        }
    }
    ,
    41316: (e, t, n) => {
        n.d(t, {
            A: () => o
        });
        var a = n(84051);
        function o(e) {
            const [t,n] = (0,
            a.Ul)();
            return (0,
            a.vJ)(( () => {
                function t() {
                    const t = window.getSelection();
                    if (!t?.rangeCount)
                        return;
                    const a = t.getRangeAt(0);
                    if (!a)
                        return;
                    if (!document.querySelector(e))
                        return;
                    const {commonAncestorContainer: o} = a;
                    (o instanceof Element ? o : o.parentElement).closest(e) && n(a)
                }
                return document.addEventListener("selectionchange", t),
                () => document.removeEventListener("selectionchange", t)
            }
            ), [e, n]),
            t
        }
    }
    ,
    36838: (e, t, n) => {
        n.d(t, {
            A: () => o
        });
        var a = n(84051);
        const o = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0,
            a.vJ)(( () => {
                if (t)
                    return;
                const a = e.current;
                function o(e) {
                    e.deltaX || (a.scrollLeft += e.deltaY / 4,
                    n && e.preventDefault())
                }
                return a.addEventListener("wheel", o, {
                    passive: !n
                }),
                () => {
                    a.removeEventListener("wheel", o)
                }
            }
            ), [e, t, n])
        }
    }
    ,
    2178: (e, t, n) => {
        n.d(t, {
            v: () => s
        });
        var a = n(84051)
          , o = n(46536);
        const i = new Set(["INPUT", "TEXTAREA", "SELECT"])
          , r = (0,
        o.h)();
        function s(e) {
            (0,
            a.vJ)(( () => {
                if (!e)
                    return;
                const t = Object.entries(e);
                return r.addCallback((function(e) {
                    (function(e) {
                        return !(e.target instanceof HTMLElement) || !i.has(e.target.tagName)
                    }
                    )(e) && t.forEach((t => {
                        let[n,a] = t;
                        (function(e) {
                            return t => function(e, t) {
                                const {alt: n, ctrl: a, meta: o, mod: i, shift: r, key: s} = e
                                  , {altKey: l, ctrlKey: c, metaKey: d, shiftKey: m, key: u} = t;
                                if (n !== l)
                                    return !1;
                                if (i) {
                                    if (!c && !d)
                                        return !1
                                } else {
                                    if (a !== c)
                                        return !1;
                                    if (o !== d)
                                        return !1
                                }
                                return r === m && Boolean(s && (u.toLowerCase() === s.toLowerCase() || t.code.replace("Key", "").toLowerCase() === s.toLowerCase()))
                            }(function(e) {
                                const t = e.toLowerCase().split("+").map((e => e.trim()))
                                  , n = {
                                    alt: t.includes("alt"),
                                    ctrl: t.includes("ctrl"),
                                    meta: t.includes("meta"),
                                    mod: t.includes("mod"),
                                    shift: t.includes("shift")
                                }
                                  , a = ["alt", "ctrl", "meta", "shift", "mod"];
                                return {
                                    ...n,
                                    key: t.find((e => !a.includes(e)))
                                }
                            }(e), t)
                        }
                        )(n)(e) && a(e)
                    }
                    ))
                }
                ))
            }
            ), [e])
        }
        document.documentElement.addEventListener("keydown", r.runCallbacks)
    }
    ,
    79174: (e, t, n) => {
        n.d(t, {
            A: () => l
        });
        var a = n(84051)
          , o = n(66644)
          , i = n(43874);
        const r = 500
          , s = 300;
        function l(e, t, n) {
            const {isMobile: l} = (0,
            i.Ay)();
            (0,
            a.vJ)(( () => {
                t ? l || setTimeout(( () => {
                    (0,
                    o.RK)(( () => {
                        e.current?.isConnected && e.current.focus()
                    }
                    ))
                }
                ), r) : (e.current?.isConnected && e.current.blur(),
                n && setTimeout(n, s))
            }
            ), [e, l, t, n])
        }
    }
    ,
    39351: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(13376)
          , o = n(15283)
          , i = n(30857);
        const r = () => {
            const e = (0,
            i.A)();
            return (0,
            o.A)(( () => (0,
            a.iV)(e))),
            (0,
            a.Yw)()
        }
    }
    ,
    38218: (e, t, n) => {
        n.d(t, {
            A: () => i
        });
        var a = n(84051);
        const o = 250
          , i = function(e) {
            let {onClick: t, onStart: n, onEnd: i, threshold: r=o} = e;
            const s = (0,
            a.li)(!1)
              , l = (0,
            a.li)(!1)
              , c = (0,
            a.li)(void 0)
              , d = (0,
            a.hb)((e => {
                const t = "button"in e && 0 === e.button || "touches"in e && e.touches.length > 0;
                !l.current && t && (l.current = !0,
                c.current = window.setTimeout(( () => {
                    n?.(),
                    s.current = !0
                }
                ), r))
            }
            ), [n, r])
              , m = (0,
            a.hb)((e => {
                l.current && (s.current ? i?.() : t?.(e),
                s.current = !1,
                l.current = !1,
                window.clearTimeout(c.current))
            }
            ), [i, t]);
            return (0,
            a._W)(( () => {
                window.clearTimeout(c.current)
            }
            )),
            {
                onMouseDown: d,
                onMouseUp: m,
                onMouseLeave: m,
                onTouchStart: d,
                onTouchEnd: m
            }
        }
    }
    ,
    69419: (e, t, n) => {
        n.d(t, {
            A: () => p
        });
        var a = n(84051)
          , o = n(23174)
          , i = n(29807)
          , r = n(58554)
          , s = n(37836)
          , l = n(82393)
          , c = n(63527)
          , d = n(30857)
          , m = n(14745);
        const u = .75
          , A = 1500
          , h = 500;
        function p(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.qZ.BlobUrl
              , p = arguments.length > 3 ? arguments[3] : void 0
              , y = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            const g = e ? r.Ih(e) : void 0
              , f = l.Uz && n === o.qZ.Progressive
              , v = (0,
            d.A)()
              , E = (0,
            c.A)(i.nIz)
              , C = (0,
            m.A)()
              , [b,w] = (0,
            a.J0)(g && !f ? 1 : 0)
              , S = (0,
            a.li)()
              , I = (0,
            a.Kr)(( () => (0,
            s.nF)((e => {
                S.current && (!p || Date.now() - S.current > p) && w(e)
            }
            ), h, !0)), [p]);
            return (0,
            a.vJ)(( () => {
                !t && e && (g ? f && setTimeout(( () => {
                    w(u)
                }
                ), A) : (w(0),
                S.current && r.ch(I),
                S.current = Date.now(),
                r.hd(e, n, y, I, C).then(( () => {
                    const e = Date.now() - S.current;
                    S.current = void 0,
                    !p || e >= p ? v() : setTimeout(v, p - e)
                }
                ))))
            }
            ), [t, e, g, n, f, p, I, y, C, E]),
            (0,
            a.vJ)(( () => {
                t && S.current && (r.ch(I),
                w(0),
                S.current = void 0)
            }
            ), [I, t]),
            (0,
            a.vJ)(( () => () => {
                e && r.Cn(e, C)
            }
            ), [C, e]),
            {
                mediaData: g,
                loadProgress: b
            }
        }
    }
    ,
    36680: (e, t, n) => {
        n.d(t, {
            A: () => l
        });
        var a = n(84051)
          , o = n(82393)
          , i = n(17712);
        const r = 250;
        let s;
        function l(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r
              , l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const c = (0,
            a.li)(!1)
              , d = (0,
            i.A)(( () => {
                c.current = !0
            }
            ));
            return (0,
            a.vJ)(( () => {
                s && (clearTimeout(s),
                s = void 0),
                !e || o.TF || l || (s = window.setTimeout(( () => {
                    c.current || t()
                }
                ), 2 * n))
            }
            ), [l, e, n, t]),
            [(0,
            i.A)(( () => {
                c.current = !0
            }
            )), (0,
            i.A)(( () => {
                c.current = !1,
                s && (clearTimeout(s),
                s = void 0),
                s = window.setTimeout(( () => {
                    c.current || t()
                }
                ), n)
            }
            )), d]
        }
    }
    ,
    23565: (e, t, n) => {
        n.d(t, {
            A: () => s
        });
        var a = n(84051)
          , o = n(30857)
          , i = n(73767)
          , r = n(35297);
        function s(e, t) {
            const n = (0,
            i.A)(e, !0)
              , s = (0,
            a.li)()
              , l = (0,
            o.A)()
              , c = null != e
              , d = null != n;
            return c && s.current && (clearTimeout(s.current),
            s.current = void 0),
            (0,
            r.A)(( () => {
                t && !c && d && !s.current && (s.current = window.setTimeout(( () => {
                    s.current = void 0,
                    l()
                }
                ), t))
            }
            ), [t, l, c, d]),
            s.current && t && !c ? n : e
        }
    }
    ,
    42215: (e, t, n) => {
        n.d(t, {
            A: () => i
        });
        var a = n(84051)
          , o = n(30857);
        function i(e, t) {
            const n = (0,
            o.A)()
              , i = (0,
            a.li)(e)
              , r = (0,
            a.li)(t)
              , s = (0,
            a.hb)((e => (r.current = i.current(r.current, e),
            n(),
            r.current)), []);
            return [r.current, s]
        }
    }
    ,
    56133: (e, t, n) => {
        n.d(t, {
            A: () => o
        });
        var a = n(16581);
        function o(e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
            return (0,
            a.A)((e => {
                e()
            }
            ), o, e, t, n)
        }
    }
    ,
    24531: (e, t, n) => {
        n.d(t, {
            A: () => u
        });
        var a = n(84051)
          , o = n(31481)
          , i = n(17663)
          , r = n(80140)
          , s = n(17712)
          , l = n(59030)
          , c = n(80089)
          , d = n(80464);
        const m = e => {
            const {isOpen: t} = e
              , n = (0,
            d.A)(c.ar.Extra, "CalendarModal", !t);
            return n ? a.Ay.createElement(n, e) : void 0
        }
          , u = (e, t, n) => {
            const c = (0,
            l.A)()
              , [d,u] = (0,
            a.J0)()
              , A = (0,
            s.A)((function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = Math.round(Math.max(e.getTime(), Date.now() + 6e4) / 1e3) + (t ? 0 : (0,
                r.SF)());
                d?.(n),
                u(void 0)
            }
            ))
              , h = (0,
            s.A)(( () => {
                A(new Date(1e3 * o.NkL), !0)
            }
            ))
              , p = (0,
            s.A)(( () => {
                u(void 0),
                t?.()
            }
            ))
              , y = (0,
            s.A)((e => {
                u(( () => e))
            }
            ))
              , g = n ? new Date(1e3 * n) : new Date;
            g.setSeconds(0),
            g.setMilliseconds(0);
            const f = new Date;
            return f.setFullYear(f.getFullYear() + 1),
            [y, a.Ay.createElement(m, {
                isOpen: Boolean(d),
                withTimePicker: !0,
                selectedAt: g.getTime(),
                maxAt: (0,
                i.CS)(f),
                isFutureMode: !0,
                secondButtonLabel: e ? c("Schedule.SendWhenOnline") : void 0,
                onClose: p,
                onSubmit: A,
                onSecondButtonClick: e ? h : void 0
            })]
        }
    }
    ,
    73172: (e, t, n) => {
        n.d(t, {
            A: () => s
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(31481)
          , r = n(37836);
        const s = (e, t) => (0,
        a.Kr)(( () => (0,
        r.nF)((n => {
            e && t && (0,
            o.ko)().sendMessageAction({
                chatId: e,
                threadId: t,
                action: n
            })
        }
        ), i.cqp)), [e, t])
    }
    ,
    66991: (e, t, n) => {
        n.d(t, {
            Y: () => m,
            c: () => u
        });
        var a = n(84051)
          , o = n(31481)
          , i = n(66644)
          , r = n(19822)
          , s = n(39761)
          , l = n(20897)
          , c = n(82393);
        const d = 100;
        function m(e, t, n) {
            return (0,
            a.vJ)(( () => {
                if (!t || !e.current)
                    return;
                const a = p()
                  , o = e.current;
                if (!c.Yw || !n || !a?.isTypeSupported(n))
                    return;
                const m = new a;
                function u() {
                    if (!t || !n)
                        return;
                    const e = m.addSourceBuffer(n)
                      , a = (0,
                    l.h)(t);
                    e.addEventListener("updateend", (function() {
                        a.next().then((t => {
                            let {value: n, done: a} = t;
                            "open" === m.readyState && (a ? h(m) : A(e, n))
                        }
                        ))
                    }
                    )),
                    a.next().then((t => {
                        let {value: n, done: a} = t;
                        a || "open" !== m.readyState || ((0,
                        i.RK)(( () => {
                            o.style.display = "block",
                            setTimeout(( () => {
                                (0,
                                i.RK)(( () => {
                                    (0,
                                    r.ZM)(o, {
                                        opacity: "1"
                                    })
                                }
                                ))
                            }
                            ), d)
                        }
                        )),
                        A(e, n))
                    }
                    ))
                }
                return m.addEventListener("sourceopen", u, {
                    once: !0
                }),
                (0,
                i.RK)(( () => {
                    (0,
                    r.ZM)(o, {
                        display: "none",
                        opacity: "0"
                    }),
                    o.src = URL.createObjectURL(m)
                }
                )),
                () => {
                    (0,
                    i.RK)(( () => {
                        const e = o.src;
                        (0,
                        s.A)(o),
                        m.removeEventListener("sourceopen", u),
                        "open" === m.readyState && h(m),
                        URL.revokeObjectURL(e)
                    }
                    ))
                }
            }
            ), [n, t, e]),
            u(n)
        }
        function u(e) {
            return !(!c.Yw || !e) && Boolean(p()?.isTypeSupported(e))
        }
        function A(e, t) {
            try {
                e.appendBuffer(t)
            } catch (e) {
                o.Oig && console.warn("[Stream] failed to append buffer", e)
            }
        }
        function h(e) {
            try {
                e.endOfStream()
            } catch (e) {
                o.Oig && console.warn("[Stream] failed to end stream", e)
            }
        }
        function p() {
            return "ManagedMediaSource"in window ? ManagedMediaSource : "MediaSource"in window ? MediaSource : void 0
        }
    }
    ,
    60138: (e, t, n) => {
        n.d(t, {
            A: () => r
        });
        var a = n(84051)
          , o = n(37836)
          , i = n(17712);
        function r(e) {
            const t = (0,
            i.A)(e);
            (0,
            a.vJ)(( () => (0,
            o.yu)(t)), [t])
        }
    }
    ,
    5130: (e, t, n) => {
        n.d(t, {
            U: () => s
        });
        var a = n(14235)
          , o = n(37836);
        function i(e, t, n) {
            var a;
            return (t = "symbol" == typeof (a = function(e, t) {
                if ("object" != typeof e || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, "string");
                    if ("object" != typeof a)
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(t)) ? a : a + "")in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        class r {
            constructor(e, t, n) {
                this.target = e,
                this.onUpdate = t,
                this.channel = n,
                i(this, "requestStates", new Map),
                i(this, "requestStatesByCallback", new Map),
                i(this, "pendingPayloads", []),
                i(this, "pendingTransferables", []),
                i(this, "postMessagesOnTickEnd", (0,
                o.Fe)(( () => {
                    const {channel: e} = this
                      , t = this.pendingPayloads
                      , n = this.pendingTransferables;
                    this.pendingPayloads = [],
                    this.pendingTransferables = [],
                    this.target.postMessage({
                        channel: e,
                        payloads: t
                    }, n)
                }
                )))
            }
            destroy() {}
            init() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.postMessageOnTickEnd({
                    type: "init",
                    args: t
                })
            }
            request(e) {
                const {requestStates: t, requestStatesByCallback: n} = this
                  , {transferables: o, ...i} = e
                  , r = (0,
                a.A)()
                  , s = {
                    type: "callMethod",
                    messageId: r,
                    ...i
                }
                  , l = {
                    messageId: r
                }
                  , c = new Promise(( (e, t) => {
                    Object.assign(l, {
                        resolve: e,
                        reject: t
                    })
                }
                ));
                if ("function" == typeof s.args[s.args.length - 1]) {
                    s.withCallback = !0;
                    const e = s.args.pop();
                    l.callback = e,
                    n.set(e, l)
                }
                return t.set(r, l),
                c.catch(( () => {}
                )).finally(( () => {
                    t.delete(r),
                    l.callback && n.delete(l.callback)
                }
                )),
                this.postMessageOnTickEnd(s, o),
                c
            }
            cancelCallback(e) {
                e.isCanceled = !0;
                const {messageId: t} = this.requestStatesByCallback.get(e) || {};
                t && this.postMessageOnTickEnd({
                    type: "cancelProgress",
                    messageId: t
                })
            }
            onMessage(e) {
                const {requestStates: t, channel: n} = this;
                e.channel === n && e.payloads.forEach((e => {
                    if ("update" === e.type && this.onUpdate && this.onUpdate(e.update),
                    "methodResponse" === e.type) {
                        const n = t.get(e.messageId);
                        n && (e.error ? n.reject(e.error) : n.resolve(e.response))
                    } else if ("methodCallback" === e.type) {
                        const n = t.get(e.messageId);
                        n?.callback?.(...e.callbackArgs)
                    } else if ("unhandledError" === e.type)
                        throw new Error(e.error?.message)
                }
                ))
            }
            postMessageOnTickEnd(e, t) {
                this.pendingPayloads.push(e),
                t && this.pendingTransferables.push(...t),
                this.postMessagesOnTickEnd()
            }
        }
        function s(e, t, n) {
            const a = new r(e,t,n);
            function o(e) {
                let {data: t} = e;
                a.onMessage(t)
            }
            return e.addEventListener("message", o),
            a.destroy = () => {
                e.removeEventListener("message", o)
            }
            ,
            a
        }
    }
    ,
    57446: (e, t, n) => {
        n.d(t, {
            A: () => c
        });
        var a = n(13439)
          , o = n(66644)
          , i = n(29807)
          , r = n(19822);
        const s = 300
          , l = new Map;
        function c(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
            (0,
            i.PKK)((0,
            a.mS)()) || (n = 0);
            const c = "rtl" === e.getAttribute("dir")
              , {scrollLeft: d, offsetWidth: m, scrollWidth: u, dataset: {scrollId: A}} = e;
            let h = t - d;
            if (h < 0) {
                const e = -d * (c ? -1 : 1);
                h = Math.max(h, e)
            } else if (h > 0) {
                const e = u - (d + m);
                h = Math.min(h, e)
            }
            if (0 === h)
                return Promise.resolve();
            A && l.has(A) && l.get(A)();
            const p = d + h;
            return new Promise((t => {
                (0,
                o.RK)(( () => {
                    if (0 === n)
                        return e.scrollLeft = p,
                        void t();
                    let a = !1;
                    const i = Math.random().toString();
                    e.dataset.scrollId = i,
                    l.set(i, ( () => {
                        a = !0
                    }
                    )),
                    e.style.scrollSnapType = "none";
                    const s = Date.now();
                    (0,
                    r.i0)(( () => {
                        if (a)
                            return !1;
                        const o = Math.min((Date.now() - s) / n, 1)
                          , r = h * (1 - function(e) {
                            return 1 - (1 - e) ** 3.5
                        }(o));
                        return e.scrollLeft = Math.round(p - r),
                        o >= 1 && (e.style.scrollSnapType = "",
                        delete e.dataset.scrollId,
                        l.delete(i),
                        t()),
                        o < 1
                    }
                    ), o.RK)
                }
                ))
            }
            ))
        }
    }
    ,
    81954: (e, t, n) => {
        n.d(t, {
            Ay: () => h,
            H$: () => f,
            _v: () => p,
            o8: () => g
        });
        var a = n(84051)
          , o = n(13439)
          , i = n(89925)
          , r = n(31481)
          , s = n(66644)
          , l = n(29807)
          , c = n(19822)
          , d = n(82393);
        let m, u, A = !1;
        function h() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            m = t.slice(0, 8);
            const a = y(...m);
            if (t[8])
                return a;
            (0,
            s.RK)(a)
        }
        function p() {
            A && ((0,
            c.vk)(),
            (0,
            s.YS)(( () => {
                (0,
                s.RK)(y(...m))
            }
            )))
        }
        function y(e, t, n) {
            let h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.nxZ
              , y = arguments.length > 5 ? arguments[5] : void 0
              , g = arguments.length > 6 ? arguments[6] : void 0
              , f = arguments.length > 7 ? arguments[7] : void 0;
            y !== i.CC.Static && (0,
            l.PKK)((0,
            o.mS)()) || (g = 0);
            const {offsetTop: C, offsetHeight: b} = t
              , {scrollTop: w, offsetHeight: S, scrollHeight: I} = e
              , N = f && e.dataset.normalHeight ? Number(e.dataset.normalHeight) : S;
            let M;
            switch (n) {
            case "start":
                M = C - h + (d.Ni ? 1 : 0);
                break;
            case "end":
                M = C + b + h - N;
                break;
            case "nearest":
            case "center":
            case "centerOrTop":
                M = b < N ? C + b / 2 - N / 2 : C - h
            }
            const k = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.nxZ
                  , a = arguments.length > 3 ? arguments[3] : void 0;
                const {scrollTop: o} = e;
                if (void 0 === a) {
                    const e = t - o;
                    if (e < -n)
                        return o + (e + n);
                    if (e > n)
                        return o + (e - n)
                } else {
                    if (a === i.CC.Up)
                        return t + n;
                    if (a === i.CC.Down)
                        return Math.max(0, t - n)
                }
                return o
            }(e, M, p, y);
            let T = M - k;
            if (T < 0) {
                const e = -k;
                T = Math.max(T, e)
            } else if (T > 0) {
                const e = I - (k + N);
                T = Math.min(T, e)
            }
            const P = Math.abs(T);
            return () => {
                if (P < 1)
                    return void (w !== k && (e.scrollTop = k));
                const t = k + T;
                if (0 === g)
                    return void (e.scrollTop = t);
                const n = P <= r.s8T ? v : E
                  , o = g || r.SKD + P / r.nxZ * (r.OzO - r.SKD)
                  , i = Date.now();
                A = !0;
                const l = u;
                u = (0,
                a.VK)(void 0, !0),
                l?.(),
                (0,
                c.S0)(( () => {
                    const a = Math.min((Date.now() - i) / o, 1)
                      , r = T * (1 - n(a))
                      , s = Math.round(t - r);
                    return e.scrollTop = s,
                    A = a < 1 && s !== t,
                    A || (m = void 0,
                    u?.(),
                    u = void 0),
                    A
                }
                ), s.RK)
            }
        }
        function g() {
            return A
        }
        function f() {
            u(),
            u = void 0
        }
        function v(e) {
            return 1 - (1 - e) ** 3.5
        }
        function E(e) {
            return 1 - (1 - e) ** 6
        }
    }
    ,
    53827: (e, t, n) => {
        n.d(t, {
            _K: () => y,
            dj: () => v,
            kz: () => g
        });
        var a = n(13439)
          , o = n(89925)
          , i = n(66644)
          , r = n(29807)
          , s = n(60343)
          , l = n(80853)
          , c = n(41733)
          , d = n(82393);
        const m = new Map;
        let u, A = [], h = [];
        function p(e, t) {
            const n = u && m.get(u);
            n && (n.audio.pause(),
            n.audio.currentTime = 0,
            n.onTrackChange && n.onTrackChange());
            const i = f(e, (0,
            r.nTw)((0,
            a.mS)()).audioPlayer.origin || o.d9.Inline, t);
            if (!i)
                return;
            if (!m.has(i))
                return void (0,
                a.ko)().openAudioPlayer((0,
                s.ES)(E(i).messageKey));
            const l = m.get(i);
            l.onForcePlay && l.onForcePlay(),
            u = i,
            l.audio.src && (0,
            c.A)(l.audio)
        }
        function y() {
            const e = u && m.get(u);
            e && e.audio.pause()
        }
        function g(e, t, n, y, g) {
            if (!m.has(e)) {
                const n = function(e, t, n, a) {
                    const o = new Audio;
                    function i(t) {
                        return n => {
                            m.has(e) && ((0,
                            l.f)(o) || m.get(e).handlers.forEach((e => {
                                e(t, n)
                            }
                            )))
                        }
                    }
                    return o.addEventListener("timeupdate", i("onTimeUpdate")),
                    o.addEventListener("play", i("onPlay")),
                    o.addEventListener("pause", i("onPause")),
                    o.addEventListener("loadstart", i("onLoadStart")),
                    o.addEventListener("loadeddata", i("onLoadedData")),
                    o.addEventListener("playing", i("onPlaying")),
                    o.addEventListener("ended", ( () => {
                        m.has(e) && ((0,
                        l.f)(o) || p(e))
                    }
                    )),
                    {
                        audio: o,
                        type: t,
                        proxy: new Proxy(o,{
                            get: (e, t) => e[t]
                        }),
                        handlers: [],
                        onForcePlay: n,
                        onTrackChange: a
                    }
                }(e, t, y, g);
                m.set(e, n),
                function(e, t) {
                    "audio" !== e.type || h.includes(t) || (h.push(t),
                    h.sort(C)),
                    "voice" !== e.type || A.includes(t) || (A.push(t),
                    A.sort(C))
                }(n, e)
            }
            const {audio: v, proxy: b, handlers: w} = m.get(e);
            return w.push(n),
            {
                play(n) {
                    if (!v.paused)
                        return;
                    const i = u && m.get(u);
                    i && u !== e && (i.audio.pause(),
                    i.audio.currentTime = 0,
                    (0,
                    l.f)(i.audio) && (i.audio.dataset.preventPlayAfterPatch = "true"),
                    i.onTrackChange && i.onTrackChange()),
                    u = e,
                    v.src || (v.src = n,
                    v.preload = "auto",
                    n.includes("/progressive/") && d.Yw && (delete v.dataset.preventPlayAfterPatch,
                    (0,
                    l.C)(v))),
                    (0,
                    c.A)(v),
                    function(e, t) {
                        if ((0,
                        r.nTw)((0,
                        a.mS)()).globalSearch.currentContent === o.$C.Music)
                            return;
                        const {chatId: n} = (0,
                        s.ES)(E(t).messageKey)
                          , i = (0,
                        r.Xf0)((0,
                        a.mS)())?.chatId
                          , l = e => e.startsWith(`msg${n}`) || i && e.startsWith(`msg${i}`);
                        "audio" === e && (h = h.filter(l)),
                        "voice" === e && (A = A.filter(l))
                    }(t, e)
                },
                pause() {
                    u === e && v.pause()
                },
                stop() {
                    if (u === e) {
                        const e = v.src;
                        v.pause(),
                        (0,
                        i.Uz)(( () => {
                            v.src = "",
                            v.src = e
                        }
                        ))
                    }
                },
                setCurrentTime(t) {
                    u === e && (v.fastSeek ? v.fastSeek(t) : v.currentTime = t)
                },
                setVolume(t) {
                    u === e && (v.volume = t,
                    v.muted = !1)
                },
                setPlaybackRate(t) {
                    u === e && (v.playbackRate = t)
                },
                toggleMuted(e) {
                    v.muted = void 0 === e ? !v.muted : e
                },
                proxy: b,
                requestNextTrack() {
                    p(e)
                },
                isLast: () => !f(e, (0,
                r.nTw)((0,
                a.mS)()).audioPlayer.origin),
                isFirst: () => !f(e, (0,
                r.nTw)((0,
                a.mS)()).audioPlayer.origin, !0),
                requestPreviousTrack() {
                    p(e, !0)
                },
                destroy() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const a = m.get(e);
                    a && (a.handlers = a.handlers.filter((e => e !== n)),
                    a.handlers.length || (a.audio.pause(),
                    m.delete(e),
                    t && function(e, t) {
                        const n = e => e !== t;
                        "audio" === e.type && (h = h.filter(n)),
                        "voice" === e.type && (A = A.filter(n))
                    }(a, e),
                    e === u && (u = void 0)))
                }
            }
        }
        function f(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.d9.Inline
              , n = arguments.length > 2 ? arguments[2] : void 0;
            const a = function(e) {
                switch (e.type) {
                case "audio":
                    return h;
                case "voice":
                    return A;
                default:
                    return
                }
            }(m.get(e));
            if (!a)
                return;
            if (t === o.d9.Search) {
                const t = a.indexOf(e);
                if (t < 0)
                    return;
                return a[t + (n ? -1 : 1)]
            }
            const {chatId: i} = (0,
            s.ES)(E(e).messageKey)
              , r = a.filter((e => e.startsWith(`msg${i}`)))
              , l = r.indexOf(e);
            if (l < 0)
                return;
            let c = t === o.d9.Inline ? -1 : 1;
            return n && (c *= -1),
            r[l + c]
        }
        function v(e) {
            const t = (0,
            s.AD)(e);
            if (t)
                return `${t}-${e.date}`
        }
        function E(e) {
            return {
                messageKey: e.match(/^msg(-?\d+)-(\d+)/)[0],
                date: Number(e.split("-").pop())
            }
        }
        function C(e, t) {
            if (!e || !t)
                return 0;
            const {date: n, messageKey: a} = E(e)
              , {date: o, messageKey: i} = E(t)
              , r = o - n;
            return 0 === r ? i.localeCompare(a) : r
        }
    }
    ,
    48894: (e, t, n) => {
        n.d(t, {
            LS: () => c,
            Yi: () => d,
            Zf: () => s,
            bM: () => r,
            rX: () => l,
            v2: () => i,
            xp: () => o
        });
        var a = n(87679);
        function o(e) {
            return [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)]
        }
        function i(e) {
            const t = e[0].toString(16)
              , n = e[1].toString(16)
              , a = e[2].toString(16);
            return (1 == t.length ? "0" + t : t) + (1 == n.length ? "0" + n : n) + (1 == a.length ? "0" + a : a)
        }
        function r(e) {
            let[t,n,a] = e;
            t /= 255,
            n /= 255,
            a /= 255;
            let o, i, r = Math.max(t, n, a), s = Math.min(t, n, a), l = r, c = r - s;
            if (i = 0 == r ? 0 : c / r,
            r == s)
                o = 0;
            else {
                switch (r) {
                case t:
                    o = (n - a) / c + (n < a ? 6 : 0);
                    break;
                case n:
                    o = (a - t) / c + 2;
                    break;
                case a:
                    o = (t - n) / c + 4
                }
                o /= 6
            }
            return [o, i, l]
        }
        function s(e) {
            let t, n, a, [o,i,r] = e, s = Math.floor(6 * o), l = 6 * o - s, c = r * (1 - i), d = r * (1 - l * i), m = r * (1 - (1 - l) * i);
            switch (s % 6) {
            case 0:
                t = r,
                n = m,
                a = c;
                break;
            case 1:
                t = d,
                n = r,
                a = c;
                break;
            case 2:
                t = c,
                n = r,
                a = m;
                break;
            case 3:
                t = c,
                n = d,
                a = r;
                break;
            case 4:
                t = m,
                n = c,
                a = r;
                break;
            case 5:
                t = r,
                n = c,
                a = d
            }
            return [Math.round(255 * t), Math.round(255 * n), Math.round(255 * a)]
        }
        async function l(e) {
            const t = [0, 0, 0];
            let n, o, i, r, s = -4, l = [0, 0, 0], c = 0;
            const d = document.createElement("canvas")
              , m = d.getContext && d.getContext("2d");
            if (!m)
                return t;
            const u = await (0,
            a.NN)(e);
            i = u.naturalHeight || u.offsetHeight || u.height,
            o = u.naturalWidth || u.offsetWidth || u.width,
            d.height = i,
            d.width = o,
            m.drawImage(u, 0, 0);
            try {
                n = m.getImageData(0, 0, o, i)
            } catch (e) {
                return t
            }
            for (r = n.data.length; (s += 20) < r; )
                0 !== n.data[s + 3] && (++c,
                l[0] += n.data[s],
                l[1] += n.data[s + 1],
                l[2] += n.data[s + 2]);
            return l[0] = Math.floor(l[0] / c),
            l[1] = Math.floor(l[1] / c),
            l[2] = Math.floor(l[2] / c),
            l
        }
        function c(e) {
            const [t,n,a] = e;
            return .2126 * t + .7152 * n + .0722 * a
        }
        function d(e) {
            let[t,n,a] = r(e);
            return n = Math.min(1, n + .05 + .1 * (1 - n)),
            a = a > .5 ? Math.max(0, .65 * a) : Math.max(0, Math.min(1, 1 - .65 * a)),
            `hsla(${360 * t}, ${100 * n}%, ${100 * a}%, .4)`
        }
    }
    ,
    67054: (e, t, n) => {
        function a(e, t) {
            return t - Math.floor(t / e) * e
        }
        n.d(t, {
            A: () => a
        })
    }
    ,
    95362: (e, t, n) => {
        n.d(t, {
            A: () => l
        });
        var a = n(37836);
        const o = 10
          , i = 1e3;
        let r = []
          , s = !1;
        function l(e, t) {
            r.push({
                url: e,
                filename: t
            }),
            s || (s = !0,
            setTimeout((async () => {
                await async function() {
                    let e = 0;
                    for (const t of r)
                        c(t),
                        e++,
                        e === o && (await (0,
                        a.v7)(i),
                        e = 0);
                    r = []
                }(),
                s = !1
            }
            ), i))
        }
        function c(e) {
            let {url: t, filename: n} = e;
            const a = document.createElement("a");
            a.href = t,
            a.download = n;
            try {
                a.click()
            } catch (e) {
                console.error(e)
            }
        }
    }
    ,
    17237: (e, t, n) => {
        n.d(t, {
            A: () => s
        });
        var a = n(98221)
          , o = n(24282);
        const i = 100
          , r = 8 * i;
        function s(e) {
            const t = (0,
            o.A)(e).split("\n")
              , n = t.join("");
            if (n.length > r)
                return !1;
            const a = l(n);
            if (!a || a > i)
                return !1;
            let s = t.length;
            for (const e of t) {
                const t = l(e);
                if (!1 === t)
                    return !1;
                t > s && (s = t)
            }
            return s
        }
        function l(e) {
            const t = e.matchAll(a.A);
            let n = 0
              , o = 0;
            for (const e of t) {
                if (e.index !== o)
                    return !1;
                n++,
                o = e.index + e[0].length
            }
            return o === e.length && n
        }
    }
    ,
    36353: (e, t, n) => {
        n.d(t, {
            A: () => o
        });
        var a = n(82393);
        function o(e, t, n) {
            if (!t && e === document.activeElement)
                return;
            const o = window.getSelection()
              , i = document.createRange()
              , r = e.lastChild || e;
            a.TF || n || r && r.nodeValue ? (i.selectNodeContents(n ? e : r),
            i.collapse(!1),
            o.removeAllRanges(),
            o.addRange(i)) : e.focus()
        }
    }
    ,
    81686: (e, t, n) => {
        n.d(t, {
            A: () => i
        });
        var a = n(31481);
        const o = 1;
        function i() {
            const e = window.getSelection();
            let t = e?.rangeCount ? e.getRangeAt(0).cloneContents() : void 0;
            const n = e?.focusNode && e.focusOffset > 0 && r(e.focusNode, a.zPk);
            if (!t || 0 === t.childElementCount)
                return;
            const i = Array.from(t.children).reduce(( (e, t) => t.nodeType === o && t.classList.contains("message-date-group") ? Array.from(t.querySelectorAll(".Message")).reduce(( (e, t) => e.concat(Number(t.dataset.messageId))), e) : t.nodeType === o && t.classList.contains("Message") ? e.concat(Number(t.dataset.messageId)) : e), []);
            for (; t.firstChild; )
                t.removeChild(t.firstChild);
            return t = void 0,
            n || i.pop(),
            i
        }
        function r(e, t) {
            return !(e.nodeType !== o || !e.classList.contains(t)) || !!e.parentNode && r(e.parentNode, t)
        }
    }
    ,
    24909: (e, t, n) => {
        n.d(t, {
            s: () => i,
            y: () => r
        });
        var a = n(48894);
        const o = 240;
        function i(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png";
            const a = e instanceof Blob ? URL.createObjectURL(e) : e
              , o = new Image;
            return new Promise((i => {
                o.onload = () => {
                    s(o, o.width * t, o.height * t, n).then((e => {
                        if (!e)
                            throw new Error("Image resize failed!");
                        return URL.createObjectURL(e)
                    }
                    )).then(i).finally(( () => {
                        e instanceof Blob && URL.revokeObjectURL(a)
                    }
                    ))
                }
                ,
                o.src = a
            }
            ))
        }
        function r(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png";
            const o = e instanceof Blob ? URL.createObjectURL(e) : e
              , i = new Image;
            return new Promise((r => {
                i.onload = () => {
                    s(i, t, n, a).then((e => {
                        if (!e)
                            throw new Error("Image resize failed!");
                        return URL.createObjectURL(e)
                    }
                    )).then(r).finally(( () => {
                        e instanceof Blob && URL.revokeObjectURL(o)
                    }
                    ))
                }
                ,
                i.src = o
            }
            ))
        }
        async function s(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png";
            if (!("createImageBitmap"in window))
                return l(e, t, n, void 0, i);
            try {
                const r = await window.createImageBitmap(e, {
                    resizeWidth: t,
                    resizeHeight: n,
                    resizeQuality: "high"
                });
                if (r.height !== n || r.width !== t)
                    throw new Error("Image bitmap resize not supported!");
                const s = await (0,
                a.rX)(e.src)
                  , l = (0,
                a.LS)(s) < o ? "#fff" : "#000";
                return await new Promise((e => {
                    const t = document.createElement("canvas");
                    t.width = r.width,
                    t.height = r.height;
                    const n = t.getContext("2d");
                    n.fillStyle = l,
                    n.fillRect(0, 0, t.width, t.height);
                    const a = t.getContext("bitmaprenderer");
                    a ? a.transferFromImageBitmap(r) : n.drawImage(r, 0, 0),
                    t.toBlob(e, i)
                }
                ))
            } catch (a) {
                return l(e, t, n, void 0, i)
            }
        }
        async function l(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png";
            const s = document.createElement("canvas")
              , l = s.getContext("2d")
              , c = document.createElement("canvas")
              , d = c.getContext("2d");
            if (s.width = t,
            s.height = n,
            e.width * i > t) {
                const n = 1 / i;
                let a = {
                    width: Math.floor(e.width * i),
                    height: Math.floor(e.height * i)
                };
                for (c.width = a.width,
                c.height = a.height,
                d.drawImage(e, 0, 0, a.width, a.height); a.width * i > t; )
                    a = {
                        width: Math.floor(a.width * i),
                        height: Math.floor(a.height * i)
                    },
                    d.drawImage(c, 0, 0, a.width * n, a.height * n, 0, 0, a.width, a.height);
                l.drawImage(c, 0, 0, a.width, a.height, 0, 0, s.width, s.height)
            } else
                l.drawImage(e, 0, 0, s.width, s.height);
            const m = await (0,
            a.rX)(e.src)
              , u = (0,
            a.LS)(m) < o ? "#fff" : "#000";
            return l.fillStyle = u,
            l.globalCompositeOperation = "destination-over",
            l.fillRect(0, 0, s.width, s.height),
            new Promise((e => {
                s.toBlob(e, r)
            }
            ))
        }
    }
    ,
    4457: (e, t, n) => {
        n.d(t, {
            Y: () => o
        });
        var a = n(43503);
        function o(e) {
            if ("none" === e.style.display)
                return !1;
            const t = e.getBoundingClientRect()
              , {height: n} = a.A.get();
            return t.top <= n && t.top + t.height >= 0
        }
    }
    ,
    41074: (e, t, n) => {
        n.d(t, {
            Ay: () => s,
            M1: () => l,
            bP: () => i
        });
        var a = n(31481)
          , o = n(5130);
        const i = Math.min(navigator.hardwareConcurrency || 4, 4);
        let r;
        function s() {
            return a.W75 ? [] : (r || (r = new Array(i).fill(void 0).map(( () => {
                const e = new Worker(new URL(n.p + n.u(9722),n.b));
                return {
                    worker: e,
                    connector: (0,
                    o.U)(e, void 0, "media")
                }
            }
            ))),
            r)
        }
        function l(e, t) {
            return s()[t].connector.request(e)
        }
    }
    ,
    47526: (e, t, n) => {
        n.d(t, {
            KE: () => l,
            PP: () => c,
            _u: () => s,
            zS: () => r
        });
        const a = {
            google: "https://maps.google.com/maps",
            bing: "https://bing.com/maps/default.aspx",
            osm: "https://www.openstreetmap.org",
            apple: "https://maps.apple.com"
        }
          , o = new Map(Object.entries({
            "building/medical": "#43b3f4",
            "building/gym": "#43b3f4",
            "education/cafeteria": "#f7943f",
            "travel/bedandbreakfast": "#9987ff",
            "travel/hotel": "#9987ff",
            "travel/hostel": "#9987ff",
            "travel/resort": "#9987ff",
            "travel/hotel_bar": "#e56dd6",
            arts_entertainment: "#e56dd6",
            building: "#6e81b2",
            education: "#a57348",
            event: "#959595",
            food: "#f7943f",
            home: "#00aeef",
            nightlife: "#e56dd6",
            parks_outdoors: "#6cc039",
            shops: "#ffb300",
            travel: "#1c9fff",
            work: "#ad7854"
        }))
          , i = ["#e56cd5", "#f89440", "#9986ff", "#44b3f5", "#6dc139", "#ff5d5a", "#f87aad", "#6e82b3", "#f5ba21"];
        function r(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
            const {lat: o, long: i} = t
              , r = a[e];
            switch (e) {
            case "google":
                return `${r}/place/${o}+${i}/@${o},${i},${n}z`;
            case "bing":
                return `${r}?cp=${o}~${i}&lvl=${n}&sp=point.${o}_${i}`;
            case "apple":
                return `${r}?q=${o},${i}`;
            default:
                return `${r}/?mlat=${o}&mlon=${i}&zoom=${n}`
            }
        }
        function s(e, t) {
            return 156543.03392 * Math.cos(e * (Math.PI / 180)) / 2 ** t
        }
        function l(e) {
            return e ? `https://ss3.4sqi.net/img/categories_v2/${e}_88.png` : ""
        }
        function c(e) {
            return e ? o.get(e) || o.get(e.split("/")[0]) || i[(t = e,
            t.split("").reduce(( (e, t) => (e << 5) - e + t.charCodeAt(0) | 0), 0) % i.length)] : "#008df2";
            var t
        }
    }
    ,
    49642: (e, t, n) => {
        n.d(t, {
            D5: () => i,
            Eg: () => s,
            HW: () => l,
            MV: () => o,
            hm: () => c,
            wp: () => d
        });
        const a = {
            play: void 0,
            pause: void 0,
            seekbackward: void 0,
            seekforward: void 0,
            previoustrack: void 0,
            nexttrack: void 0,
            stop: void 0,
            seekTo: void 0
        };
        function o(e, t) {
            const {mediaSession: n} = window.navigator;
            n ? (e && i(e),
            t && r(t)) : console.warn("MediaSession API not supported in this browser")
        }
        function i(e) {
            const {mediaSession: t} = window.navigator;
            t && (t.metadata = e ?? null)
        }
        function r(e) {
            const {mediaSession: t} = window.navigator;
            t && Object.entries({
                ...a,
                ...e
            }).forEach((e => {
                let[n,a] = e;
                try {
                    t.setActionHandler(n, a)
                } catch (e) {}
            }
            ))
        }
        function s() {
            const {mediaSession: e} = window.navigator;
            e && (e.metadata = null,
            r(a),
            e.playbackState && (e.playbackState = "none"),
            e.setPositionState?.())
        }
        function l() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "none";
            const {mediaSession: t} = window.navigator;
            t && t.playbackState && (t.playbackState = e)
        }
        function c(e) {
            if (!e || void 0 === e.position || void 0 === e.duration)
                return;
            e.position = Math.min(e.position, e.duration);
            const {mediaSession: t} = window.navigator;
            t?.setPositionState?.(e)
        }
        function d(e) {
            let {title: t, artist: n, album: a, artwork: o} = e;
            if ("MediaMetadata"in window)
                return new window.MediaMetadata({
                    title: t,
                    artist: n,
                    album: a,
                    artwork: o
                })
        }
    }
    ,
    37830: (e, t, n) => {
        n.d(t, {
            A: () => i
        });
        var a = n(87894);
        const o = new WeakMap;
        function i(e) {
            return function() {
                const t = o.get(e);
                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                    i[r] = arguments[r];
                if (t && (0,
                a.k)(t.lastArgs, i))
                    return t.lastResult;
                const s = e(...i);
                return o.set(e, {
                    lastArgs: i,
                    lastResult: s
                }),
                s
            }
        }
    }
    ,
    58968: (e, t, n) => {
        n.d(t, {
            LS: () => s,
            V2: () => r,
            VI: () => o,
            lw: () => a,
            sZ: () => i
        });
        const a = {
            isCustomPeer: !0,
            type: "premium",
            titleKey: "PrivacyPremium",
            subtitleKey: "PrivacyPremiumText",
            avatarIcon: "star",
            isAvatarSquare: !0,
            withPremiumGradient: !0
        }
          , o = {
            isCustomPeer: !0,
            type: "toBeDistributed",
            titleKey: "BoostingToBeDistributed",
            avatarIcon: "user",
            withPremiumGradient: !0
        }
          , i = {
            isCustomPeer: !0,
            type: "stars",
            titleKey: "Stars",
            avatarIcon: "star",
            peerColorId: 1
        }
          , r = [{
            isCustomPeer: !0,
            type: "contacts",
            titleKey: "FilterContacts",
            avatarIcon: "user",
            isAvatarSquare: !0,
            peerColorId: 5
        }, {
            isCustomPeer: !0,
            type: "nonContacts",
            titleKey: "FilterNonContacts",
            avatarIcon: "non-contacts",
            isAvatarSquare: !0,
            peerColorId: 4
        }, {
            isCustomPeer: !0,
            type: "groups",
            titleKey: "FilterGroups",
            avatarIcon: "group",
            isAvatarSquare: !0,
            peerColorId: 3
        }, {
            isCustomPeer: !0,
            type: "channels",
            titleKey: "FilterChannels",
            avatarIcon: "channel",
            isAvatarSquare: !0,
            peerColorId: 1
        }, {
            isCustomPeer: !0,
            type: "bots",
            titleKey: "FilterBots",
            avatarIcon: "bots",
            isAvatarSquare: !0,
            peerColorId: 6
        }]
          , s = [{
            isCustomPeer: !0,
            type: "excludeMuted",
            titleKey: "FilterMuted",
            avatarIcon: "mute",
            isAvatarSquare: !0,
            peerColorId: 6
        }, {
            isCustomPeer: !0,
            type: "excludeRead",
            titleKey: "FilterRead",
            avatarIcon: "readchats",
            isAvatarSquare: !0,
            peerColorId: 4
        }, {
            isCustomPeer: !0,
            type: "excludeArchived",
            titleKey: "FilterArchived",
            avatarIcon: "archive",
            isAvatarSquare: !0,
            peerColorId: 5
        }]
    }
    ,
    80539: (e, t, n) => {
        n.d(t, {
            Ay: () => l,
            g4: () => c,
            qh: () => r
        });
        var a = n(23174)
          , o = n(31481)
          , i = n(82393);
        const r = {
            B: a.C7.Bold,
            STRONG: a.C7.Bold,
            I: a.C7.Italic,
            EM: a.C7.Italic,
            INS: a.C7.Underline,
            U: a.C7.Underline,
            S: a.C7.Strike,
            STRIKE: a.C7.Strike,
            DEL: a.C7.Strike,
            CODE: a.C7.Code,
            PRE: a.C7.Pre,
            BLOCKQUOTE: a.C7.Blockquote
        }
          , s = 3;
        function l(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const l = document.createElement("div");
            l.innerHTML = n ? e : function(e) {
                let t = e.slice(0);
                return t = t.replace(/&nbsp;/g, " "),
                t = t.replace(/<div><br([^>]*)?><\/div>/g, "\n"),
                t = t.replace(/<br([^>]*)?>/g, "\n"),
                t = t.replace(/<\/div>(\s*)<div>/g, "\n"),
                t = t.replace(/<div>/g, "\n"),
                t = t.replace(/<\/div>/g, ""),
                t = t.replace(/^`{3}(.*?)[\n\r](.*?[\n\r]?)`{3}/gms, '<pre data-language="$1">$2</pre>'),
                t = t.replace(/^`{3}[\n\r]?(.*?)[\n\r]?`{3}/gms, "<pre>$1</pre>"),
                t = t.replace(/[`]{3}([^`]+)[`]{3}/g, "<pre>$1</pre>"),
                t = t.replace(/(?!<(code|pre)[^<]*|<\/)[`]{1}([^`\n]+)[`]{1}(?![^<]*<\/(code|pre)>)/g, "<code>$2</code>"),
                i.TL || (t = t.replace(/\[<img[^>]+alt="([^"]+)"[^>]*>]/gm, "[$1]")),
                t = t.replace(/(?!<(?:code|pre)[^<]*|<\/)\[([^\]\n]+)\]\(customEmoji:(\d+)\)(?![^<]*<\/(?:code|pre)>)/g, '<img alt="$1" data-document-id="$2">'),
                t = t.replace(/(?!<(code|pre)[^<]*|<\/)[*]{2}([^*\n]+)[*]{2}(?![^<]*<\/(code|pre)>)/g, "<b>$2</b>"),
                t = t.replace(/(?!<(code|pre)[^<]*|<\/)[_]{2}([^_\n]+)[_]{2}(?![^<]*<\/(code|pre)>)/g, "<i>$2</i>"),
                t = t.replace(/(?!<(code|pre)[^<]*|<\/)[~]{2}([^~\n]+)[~]{2}(?![^<]*<\/(code|pre)>)/g, "<s>$2</s>"),
                t = t.replace(/(?!<(code|pre)[^<]*|<\/)[|]{2}([^|\n]+)[|]{2}(?![^<]*<\/(code|pre)>)/g, `<span data-entity-type="${a.C7.Spoiler}">$2</span>`),
                t
            }(t ? function(e) {
                return e.replace(new RegExp(`\\[([^\\]]+?)]\\((${o.kNZ}+?)\\)`,"g"), ( (e, t, n) => `<a href="${n.includes("://") ? n : n.includes("@") ? `mailto:${n}` : `https://${n}`}">${t}</a>`))
            }(e) : e),
            c(l);
            const d = l.innerText.trim().replace(/\u200b+/g, "");
            let m = -l.innerText.indexOf(d[0])
              , u = 0;
            const A = [];
            function h(e) {
                if (e.nodeType === Node.COMMENT_NODE)
                    return;
                const {index: t, entity: n} = function(e, t, n) {
                    const o = function(e) {
                        if (e instanceof HTMLElement && e.dataset.entityType)
                            return e.dataset.entityType;
                        if (r[e.nodeName])
                            return r[e.nodeName];
                        if ("A" === e.nodeName) {
                            const t = e;
                            return t.dataset.entityType === a.C7.MentionName ? a.C7.MentionName : t.dataset.entityType === a.C7.Url ? a.C7.Url : t.href.startsWith("mailto:") ? a.C7.Email : t.href.startsWith("tel:") ? a.C7.Phone : t.href !== t.textContent ? a.C7.TextUrl : a.C7.Url
                        }
                        return "SPAN" === e.nodeName ? e.dataset.entityType : "IMG" === e.nodeName && e.dataset.documentId ? a.C7.CustomEmoji : void 0
                    }(e);
                    if (!o || !e.textContent)
                        return {
                            index: n,
                            entity: void 0
                        };
                    const i = t.indexOf(e.textContent, n)
                      , s = i >= 0 ? i : n
                      , l = t.substring(0, s).length
                      , {length: c} = t.substring(s, s + e.textContent.length);
                    return o === a.C7.TextUrl ? {
                        index: s,
                        entity: {
                            type: o,
                            offset: l,
                            length: c,
                            url: e.href
                        }
                    } : o === a.C7.MentionName ? {
                        index: s,
                        entity: {
                            type: o,
                            offset: l,
                            length: c,
                            userId: e.dataset.userId
                        }
                    } : o === a.C7.Pre ? {
                        index: s,
                        entity: {
                            type: o,
                            offset: l,
                            length: c,
                            language: e.dataset.language
                        }
                    } : o === a.C7.CustomEmoji ? {
                        index: s,
                        entity: {
                            type: o,
                            offset: l,
                            length: c,
                            documentId: e.dataset.documentId
                        }
                    } : {
                        index: s,
                        entity: {
                            type: o,
                            offset: l,
                            length: c
                        }
                    }
                }(e, d, m);
                if (n)
                    m = t,
                    A.push(n);
                else if (e.textContent) {
                    if (0 === t && "" === e.textContent.trim())
                        return;
                    m += e.textContent.length
                }
                e.hasChildNodes() && u <= s && (u += 1,
                Array.from(e.childNodes).forEach(h))
            }
            return Array.from(l.childNodes).forEach((e => {
                u = 1,
                h(e)
            }
            )),
            {
                text: d,
                entities: A.length ? A : void 0
            }
        }
        function c(e) {
            e.querySelectorAll("img").forEach((e => {
                e.dataset.documentId ? e.textContent = e.alt || "" : e.replaceWith(e.alt || "")
            }
            ))
        }
    }
    ,
    20897: (e, t, n) => {
        n.d(t, {
            h: () => d
        });
        var a = n(23174)
          , o = n(4875);
        const i = 262144
          , r = 5242879
          , s = new Map
          , l = new Map
          , c = new Map;
        function d(e) {
            try {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
                return async function*() {
                    const i = e.match(/fileSize=(\d+)/);
                    let d;
                    for (d = i ? i && Number(i[1]) : l.get(e); ; ) {
                        if (d && t >= d)
                            return;
                        let i = t + n - 1;
                        d && i > d && (i = d - 1);
                        const m = `${e}:${t}-${i}`;
                        let u = s.get(m);
                        if (!u) {
                            let n = c.get(m);
                            n || (n = (0,
                            o.px)("downloadMedia", {
                                mediaFormat: a.qZ.Progressive,
                                url: e,
                                start: t,
                                end: i
                            }),
                            c.set(m, n));
                            const A = await n.finally(( () => {
                                c.delete(m)
                            }
                            ));
                            if (!A?.arrayBuffer)
                                return;
                            A.fullSize && !d && (d = A.fullSize,
                            l.set(e, A.fullSize)),
                            u = A.arrayBuffer,
                            i <= r && s.set(m, A.arrayBuffer)
                        }
                        yield u,
                        t = i + 1
                    }
                }()
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }
    ,
    39074: (e, t, n) => {
        n.d(t, {
            DY: () => l,
            JC: () => r,
            LV: () => i,
            oR: () => o,
            vZ: () => s
        });
        const a = document.createElement("div");
        function o(e) {
            const t = window.getSelection();
            if (t?.getRangeAt && t.rangeCount) {
                const n = t.getRangeAt(0);
                n.deleteContents();
                const a = n.createContextualFragment(e)
                  , o = a.lastChild;
                n.insertNode(a),
                o ? (n.setStartAfter(o),
                n.setEndAfter(o)) : n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n)
            }
        }
        function i(e, t) {
            if (!e)
                return "";
            const n = window.getSelection();
            if (!n || !n.rangeCount)
                return e.innerHTML;
            const o = n.getRangeAt(0).cloneRange();
            return o.intersectsNode(e) ? t || e.contains(o.commonAncestorContainer) ? (o.collapse(!0),
            o.setStart(e, 0),
            a.innerHTML = "",
            a.appendChild(o.cloneContents()),
            a.innerHTML) : "" : e.innerHTML
        }
        function r(e) {
            let t = 0;
            const n = window.getSelection();
            if (!n || 0 === n.rangeCount)
                return t;
            const a = n.getRangeAt(0)
              , o = a.cloneRange();
            return o.selectNodeContents(e),
            o.setEnd(a.endContainer, a.endOffset),
            t = o.toString().length,
            t
        }
        function s(e, t) {
            for (const n of e.childNodes)
                if (n.nodeType === Node.TEXT_NODE) {
                    if (n.length >= t) {
                        const e = document.createRange()
                          , a = window.getSelection();
                        return e.setStart(n, t),
                        e.collapse(!0),
                        a.removeAllRanges(),
                        a.addRange(e),
                        -1
                    }
                    t -= "length"in n ? n.length : 0
                } else if (-1 === (t = s(n, t)))
                    return -1;
            return t
        }
        function l() {
            const e = window.getSelection();
            e?.removeAllRanges()
        }
    }
    ,
    52844: (e, t, n) => {
        let a;
        function o() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "*"
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a || (a = document.createElement("input"),
            a.setAttribute("type", "file")),
            a.setAttribute("accept", e),
            n ? a.removeAttribute("multiple") : a.setAttribute("multiple", "multiple"),
            a.onchange = null,
            a.value = "",
            a.onchange = t,
            a.click()
        }
        n.d(t, {
            p: () => o
        })
    }
    ,
    31722: (e, t, n) => {
        n.d(t, {
            A: () => a
        });
        const a = {
            container: "YmM5biTv",
            header: "S7WFT2bv",
            pickerCategoryTitle: "YK1300x2",
            pickerList: "yLCbiItq",
            padded: "bXzIGw8s",
            noResults: "dXWKD0ve",
            onlineStatus: "d5GDOYh9"
        }
    }
    ,
    69988: (e, t, n) => {
        n.d(t, {
            A: () => a
        });
        const a = {
            root: "gXO57D98",
            chosen: "VXSJn0Sm",
            "animated-emoji": "lFjoRm_p",
            animatedEmoji: "lFjoRm_p",
            tag: "Dr889Kzc",
            tail: "cUfY1b26",
            "is-safari": "rxxUijuG",
            isSafari: "rxxUijuG",
            "tail-fill": "y591o4fN",
            tailFill: "y591o4fN",
            "tag-text": "ly7cruxF",
            tagText: "ly7cruxF",
            counter: "P2FqNJAi",
            disabled: "NRtGofbf"
        }
    }
    ,
    2429: (e, t, n) => {
        n.d(t, {
            A: () => a
        });
        const a = {
            root: "CdTfL4f7",
            fadeIn: "MyeHARy0",
            closing: "EZbKn_M3",
            peer: "kW0xpExG",
            name: "BDZrSTO_",
            name_hasUnreadStory: "OoUm5AUZ",
            nameHasUnreadStory: "OoUm5AUZ",
            hidden: "lnVtxMZI",
            contextMenu: "N1sagA0s"
        }
    }
    ,
    17169: (e, t, n) => {
        n.d(t, {
            A: () => a
        });
        const a = {
            name: "BDZrSTO_",
            root: "QOz6fQFU",
            avatar: "dXSy0i2c",
            avatarHidden: "n0vJEdNW",
            ghost: "E1IeDpeb",
            ghostAnimateName: "HMp3KTKQ",
            ghostRevealName: "unYkDic1",
            ghostLast: "dZJGfaXC"
        }
    }
    ,
    89755: (e, t, n) => {
        e.exports = n.p + "encoderWorker.min.40a69ba9ec4d2c4cf3a7.js"
    }
    ,
    72078: (e, t, n) => {
        e.exports = n.p + "GiftBlueRound.90e369f0f350cdfb20d4.svg"
    }
    ,
    68153: (e, t, n) => {
        e.exports = n.p + "GiftGreenRound.f66f0acd5d3dda1c7baf.svg"
    }
    ,
    65741: (e, t, n) => {
        e.exports = n.p + "GiftRedRound.a86b78b0b99e07f69a70.svg"
    }
    ,
    45318: (e, t, n) => {
        e.exports = n.p + "GiftStar.59a3e3598fdbab13b181.svg"
    }
}]);
//# sourceMappingURL=236.680f670a0d5072c11bf1.js.map
