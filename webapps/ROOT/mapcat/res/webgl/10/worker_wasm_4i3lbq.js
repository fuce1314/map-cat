function aa() {
	this.j = {}
}
var ca;
ca = "undefined" !== typeof window ? window: self;
function fa(b) {
	var a = ha;
	a.j[b] = a.w()
}
function ka(b, a) {
	var c = ha;
	return parseFloat((c.j[a] - c.j[b]).toFixed(2))
}
aa.prototype.w = ca.performance && ca.performance.now ?
function() {
	return performance.now()
}: function() {
	return Date.now()
};
var ra, sa, ta, Aa, Ba, Ca, y, Ga, Ha, Ia, Ja, Ka, La, Ma, Va, Wa, Xa, Ya;
ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function(b, a) {
	void 0 === b && (b = 0);
	void 0 === a && (a = this.byteLength);
	b = Math.floor(b);
	a = Math.floor(a);
	0 > b && (b += this.byteLength);
	0 > a && (a += this.byteLength);
	b = Math.min(Math.max(0, b), this.byteLength);
	a = Math.min(Math.max(0, a), this.byteLength);
	if (0 >= a - b) return new ArrayBuffer(0);
	var c = new ArrayBuffer(a - b),
	r = new Uint8Array(c);
	b = new Uint8Array(this, b, a - b);
	r.set(b);
	return c
});
function Za(b, a) {
	var c = b.length;
	a = a || 2;
	Ya || (Ya = y._get_feature_points_address() >> 2);
	ta.set(b, Ya);
	y._parse_points(c, a);
	return new Float32Array(ra.slice(Ya << 2, Ya + c << 2))
}
function $a() {
	return y._get_block_vertex_count()
}
function ab() {
	La || (La = y._get_line_vertex_start());
	return new Float32Array(ra.slice(La, y._get_line_vertex_end()))
}
function ib() {
	Ka || (Ka = y._get_line_index_start());
	return new Uint16Array(ra.slice(Ka, y._get_line_index_end()))
}
function jb() {
	return y._get_line_vertex_count()
}
function kb(b, a, c, r, g, n, l, q, x, f, e) {
	var v = 0;
	r && (v = r.length, Ha || (Ha = y._get_line_altitudes_address() >> 1), Ba.set(r, Ha));
	q && q.length && (Ja || (Ja = y._get_line_turnings_address()), sa.set(q, Ja));
	g = g || 0;
	f = f || 0;
	e = e || l.length / 2;
	Ga || (Ga = y._get_line_data_address() >> 1);
	Ba.set(b, Ga);
	Ia || (Ia = y._get_line_points_address() >> 2);
	Aa.set(l, Ia);
	y._append_line_data(b.length, a[0], a[1], a[2], a[3], c, v, g, n ? 1 : 0, l.length, x, f, e)
}
function lb() {
	y._reset_line()
}
function mb(b) {
	if (ra) b && b();
	else {
		var a = nb();
		var c = new WebAssembly.Memory({
			initial: 70,
			maximum: 70
		});
		WebAssembly.instantiate(a, {
			env: {
				DYNAMICTOP_PTR: 0,
				tempDoublePtr: 0,
				ABORT: 0,
				STACKTOP: 0,
				STACK_MAX: 0,
				gb: 0,
				fb: 0,
				memory: c
			},
			global: {
				NaN: NaN,
				Infinity: Infinity
			}
		}).then(function(a) {
			ra = c.buffer;
			ta = new Float32Array(ra);
			Aa = new Int32Array(ra);
			sa = new Int8Array(ra);
			Ba = new Int16Array(ra);
			Ca = new Uint16Array(ra);
			y = a.instance.exports;
			b && b()
		})
	}
}
function ob(b, a, c, r, g) {
	var n = {
		fixedLabel: [],
		lineLabel: []
	};
	if (!b) return n;
	var l = [];
	if (a && a.length) for (var q = 0; q < a.length; q++) {
		var x = a[q],
		f = x[0] / 4;
		H[f + 1] === pb && l.push(Q(H[f] + 1, x[0], x[0] + x[1]))
	}
	a = Q(0, c[0], c[0] + c[1]) || [];
	r = r.height;
	n.fixedLabel = qb(b, l, r, g, void 0);
	l = [];
	for (c = 0; c < a.length; c++) {
		var e = b,
		v = a[c];
		q = g;
		x = r;
		f = l;
		var d = v[0] / 4,
		w = Q(H[d] + 1, v[0], v[0] + v[1]),
		u = Q(0, w[6][0], w[6][0] + w[6][1]);
		v = [];
		for (var k = 0; k < u.length; k++) v[k] = new Uint16Array(e, u[k][0], u[k][1] / 2);
		u = rb;
		var p = Math.pow(2, 18 - q.zoom),
		m = q.col * q.baseTileSize * p,
		h = q.row * q.baseTileSize * p,
		E = new Uint16Array(e, w[4][0], w[4][1] / 2),
		t = E.length,
		A = sb[d + 1],
		C = tb.b(ub, A, "pointText", q.useZoom, vb, !1, T);
		d = sb[d + 2];
		var B = wb(e, w[0][0], w[0][1], "utf-8"),
		z = v.length || B.split("").length;
		if (0 !== z) {
			var F = new Int32Array(e, w[1][0], w[1][1] / 4),
			G = new Int16Array(e, w[5][0], w[5][1] / 2),
			R = [G[0]],
			V = Array.prototype.slice.call(F.slice(0, 2)),
			K = 2;
			for (k = 1; K < F.length; K += 2, k++) V[K] = V[K - 2] + F[K],
			V[K + 1] = V[K - 1] + F[K + 1],
			1 === G.length ? R[k] = G[0] : 1 < G.length && (R[k] = R[k - 1] + G[k]);
			var M = new Uint16Array(e, w[3][0], w[3][1] / 2);
			e = new Uint16Array(e, w[2][0], w[2][1] / 2);
			for (k = 0; k < t; k++) if (w = E[k], xb(w, q.useZoom)) {
				if (q.processedLabelZooms && q.processedLabelZooms.length) {
					F = q.processedLabelZooms;
					var W = !1;
					for (K = 0; K < F.length; K++) if (xb(w, F[K])) {
						W = !0;
						break
					}
					if (W) continue
				}
				K = M[k];
				F = k * z * 2;
				F = V.slice(F, F + 2 * z);
				var Y = W = 1E3,
				X = -1E3,
				O = -1E3,
				J = v.slice(0);
				K && J.reverse();
				for (var L, U, P, N = [], D = 0; D < z; D++) {
					var I = e[z * k + D],
					Z = F[2 * D] / 100,
					da = F[2 * D + 1] / 100,
					Na = 0;
					0 < G.length && (Na = R[k * z] / 100);
					0 === D && (L = Z, U = da, P = {
						lng: m + L,
						lat: h + U
					});
					Z = (Z - L) / p;
					da = (da - U) / p;
					var S = J[D],
					ea = null,
					ua = null;
					if (S && 0 < S.length) {
						var xa = S[0];
						ea = S[1];
						var ia = S[2] / u;
						S = S[3] / u;
						ua = [ia, S];
						var la = xa / 512,
						ma = (x - ea - S * u) / x,
						Oa = xa = (xa + ia * u) / 512;
						ea = (x - ea) / x;
						ea = [la, ma, xa, ma, Oa, ea, la, ma, Oa, ea, la, ea];
						la = Z - ia / 2;
						ma = da + S / 2;
						S = da - S / 2;
						ia = Z + ia / 2;
						la < W && (W = la);
						ia > X && (X = ia);
						S < Y && (Y = S);
						ma > O && (O = ma)
					}
					N.push({
						offset: [Z, da],
						z: Na,
						size: ua,
						angle: I,
						texcoord: ea
					})
				}
				J = F[2 * (z - 1)] - F[0];
				F = F[2 * (z - 1) + 1] - F[1];
				1 === K && (J = -J, F = -F);
				0 === J ? F = 0 < F ? 90 : 270 : (D = Math.atan(F / J) / Math.PI * 180, 0 > J && 0 < F ? D += 180 : 0 > J && 0 > F ? D += 180 : 0 < J && 0 > F && (D += 360), 360 === D && (D = 0), F = D);
				f.push({
					type: "line",
					rank: d,
					name: B,
					wordCount: z,
					pt: P,
					mcInTile: {
						x: L,
						y: U
					},
					reverse: K,
					styleId: A,
					styleText: C,
					bds: [W, Y, X, O],
					wordsInfo: N,
					labelAngle: F,
					tracer: w,
					processedInZoom: q.useZoom,
					key: "line_" + d + "_" + P.lng + "_" + P.lat
				})
			}
		}
	}
	n.lineLabel = l;
	n.textureHeight = r;
	n.tileInfo = g;
	return n
}
function qb(b, a, c, r, g) {
	for (var n = [], l = 0; l < a.length; l++) {
		var q = b,
		x = a[l],
		f = r,
		e = c,
		v = n,
		d = g;
		if (x && x.length) {
			d = d || vb;
			var w = f.useZoom;
			9 === w && (w = 8);
			for (var u = Math.pow(2, 18 - f.zoom), k = f.col * f.baseTileSize * u, p = f.row * f.baseTileSize * u, m = f.col, h, E = m, t = 1536 * Math.pow(2, f.zoom - 3) / (f.baseTileSize || 256), A = t / 2 - 1, C = -t / 2; E > A;) E -= t;
			for (; E < C;) E += t;
			h = E;
			var B = k;
			h > m ? B = k - 40075452 : h < m && (B = k + 40075452);
			for (var z = 0; z < x.length; z++) {
				var F = x[z],
				G = F[0] / 4,
				R = H[G],
				V = H[G + 1],
				K = tb.b(ub, V, "point", w, d, !1, T),
				M = tb.b(ub, V, "pointText", w, d, !1, T),
				W = Q(R + 1, F[0], F[0] + F[1]);
				if (! (M && 0 !== M.length || K && 0 !== K.length)) if (5 === w) {
					if (!W || !W.length) continue;
					for (var Y = 0; Y < W.length; Y++) {
						var X = W[Y],
						O = X[0] / 4,
						J = H[O],
						L = Q(J + 1, X[0], X[0] + X[1]),
						U;
						X[1] && L[1][1] && (U = wb(q, L[1][0], L[1][1], "utf-8"));
						if ("\u5317\u4eac" === U) {
							K = tb.b(ub, V, "point", 6, d, !1, T);
							M = tb.b(ub, V, "pointText", 6, d, !1, T);
							break
						}
					}
				} else continue;
				if (W) {
					var P = null,
					N = 1,
					D = 0,
					I = 0;
					K && K[0] && (K = K[0], P = K.icon, N = (K.zoom || 100) / 100);
					for (Y = 0; Y < W.length; Y++) if (X = W[Y], O = X[0] / 4, J = H[O], L = Q(J + 1, X[0], X[0] + X[1]), X[1]) {
						var Z = H[O + 1];
						if (xb(Z, f.useZoom)) {
							if (f.processedLabelZooms && f.processedLabelZooms.length && !T) {
								for (var da = f.processedLabelZooms,
								Na = !1,
								S = 0; S < da.length; S++) if (xb(Z, da[S])) {
									Na = !0;
									break
								}
								if (Na) continue
							}
							var ea = Q(0, L[2][0], L[2][0] + L[2][1]),
							ua = [];
							for (S = 0; S < ea.length; S++) ua[S] = new Uint16Array(q, ea[S][0], ea[S][1]);
							var xa = void 0;
							L[1][1] && (xa = wb(q, L[1][0], L[1][1], "utf-8"));
							var ia = xa || "";
							if (! (M && 0 < M.length && 0 === ua.length && "" === ia)) {
								var la = H[O + 2],
								ma = H[O + 3],
								Oa = H[O + 4],
								dc = Math.round(la / 100),
								ec = Math.round(ma / 100),
								zb = {
									lng: k + dc,
									lat: p + ec
								},
								Hc = {
									lng: B + dc,
									lat: p + ec
								},
								fc = void 0;
								L[0][1] && (fc = wb(q, L[0][0], L[0][1], void 0));
								var Ab = H[O + 5],
								gc = 0 < ua.length || "" !== ia && 0 < M.length,
								Bb = yb(P),
								ic = !(4 !== Ab || !gc || !Bb),
								Ic = !!ia.match(/[qypjg]/g),
								Jc = fc || "",
								Kc = zb,
								Lc = Hc,
								Mc = ia,
								Nc = Ic,
								Oc = Oa,
								Pc = V,
								Qc = M,
								Rc = P,
								Sc = ic,
								Tc = Ab,
								Uc = x.R;
								a: {
									var va = void 0,
									bb = Z,
									jc = f.useZoom;
									Cb[bb] || (va = bb.toString(2), 8 > va.length && (va = Array(8 - va.length + 1).join("0") + va), Cb[bb] = va);
									va = Cb[bb];
									for (var kc = Rb[jc].start, Vc = Rb[jc].end - kc + 1, cb = 0; cb < Vc; cb++) if ("1" === va[cb]) {
										var lc = cb + kc;
										break a
									}
									lc = 99
								}
								var ba = {
									type: "fixed",
									guid: Jc,
									pt: Kc,
									ptFix: Lc,
									name: Mc,
									containDescendings: Nc,
									rank: Oc,
									iconPos: null,
									textPos: null,
									styleId: Pc,
									styleText: Qc,
									icon: Rc,
									textOnIcon: Sc,
									direction: Tc,
									onDefaultFloor: Uc,
									startZoom: lc || 99,
									tilePosStr: la + "," + ma,
									tracer: Z,
									processedInZoom: f.useZoom,
									key: "fixed_" + Oa + "_" + zb.lng + "_" + zb.lat
								};
								if (null === P || ic) null !== P && (ba.iconSize = Bb);
								else {
									var Db = yb(P);
									if (Db) {
										var Eb = Db[0] / 2 * N,
										Fb = Db[1] / 2 * N,
										db = Math.round( - Eb / 2),
										eb = Math.round( - Fb / 2),
										Gb = db + Eb,
										Hb = eb + Fb;
										var mc = {
											vertex: [db, eb, Gb, eb, Gb, Hb, db, eb, Gb, Hb, db, Hb],
											texcoord: null,
											width: Eb,
											height: Fb,
											iconType: P
										}
									} else mc = null;
									ba.iconPos = mc;
									ba.iconPos && (D = ba.iconPos.width, I = ba.iconPos.height)
								}
								if (ua.length) {
									var Wc = ba,
									fb = Ab,
									Ib = ua,
									Jb = D,
									nc = I,
									gb = e,
									Pa = rb;
									"number" !== typeof fb && (fb = 0);
									for (var Da = Ib.length,
									oc = [], pc = [], Ea = 0, Qa = 0, ja = 0; ja < Da; ja++) Qa += Math.round(Ib[ja][3] / Pa);
									for (ja = 0; ja < Da; ja++) {
										var hb = Ib[ja],
										qc = hb[0],
										rc = hb[1],
										Fa = Math.round(hb[2] / Pa),
										ya = Math.round(hb[3] / Pa);
										0 === Jb && (fb = 4);
										switch (fb) {
										case 3:
											var na = Qa / 2 - ya + 2 * (Da - 1) / 2;
											var wa = Math.round( - Jb / 2 - Fa - 2);
											var za = Math.round(na - Ea - 2 * ja);
											break;
										case 1:
											na = Qa / 2 - ya + 2 * (Da - 1) / 2;
											wa = Math.round(Jb / 2 + 2);
											za = Math.round(na - Ea - 2 * ja);
											break;
										case 2:
											na = nc / 2 + Qa - ya + 2 * Da;
											wa = Math.round( - Fa / 2);
											za = Math.round(na - Ea - 2 * ja);
											break;
										case 0:
											na = -nc / 2 - 2 - ya;
											wa = Math.round( - Fa / 2);
											za = Math.round(na - Ea - 2 * ja);
											break;
										case 4:
											na = -Qa / 2 - 2 * (Da - 1) / 2,
											wa = Math.round( - Fa / 2),
											za = Math.round(na - Ea - 2 * ja)
										}
										Ea += ya;
										var sc = wa + Math.round(Fa),
										tc = za,
										uc = sc,
										Kb = tc + Math.round(ya),
										Lb = qc / 512,
										Mb = (gb - rc - ya * Pa) / gb,
										vc = (qc + Fa * Pa) / 512,
										Xc = Mb,
										wc = vc,
										Nb = (gb - rc) / gb,
										Yc = Lb,
										Zc = Nb;
										oc.push(wa, za, sc, tc, uc, Kb, wa, za, uc, Kb, wa, Kb);
										pc.push(Lb, Mb, vc, Xc, wc, Nb, Lb, Mb, wc, Nb, Yc, Zc)
									}
									Wc.textPos = {
										vertex: oc,
										texcoord: pc
									}
								}
								if (ba.textPos || ba.iconPos) {
									var Ra = 1E3,
									Sa = 1E3,
									Ta = -1E3,
									Ua = -1E3;
									if (ba.iconPos) for (var Ob = ba.iconPos.vertex,
									oa = 0,
									Pb = Ob.length; oa < Pb; oa += 2) {
										var pa = Ob[oa],
										qa = Ob[oa + 1];
										pa < Ra && (Ra = pa);
										pa > Ta && (Ta = pa);
										qa < Sa && (Sa = qa);
										qa > Ua && (Ua = qa)
									}
									if (ba.textPos) {
										var Qb = ba.textPos.vertex;
										oa = 0;
										for (Pb = Qb.length; oa < Pb; oa += 2) pa = Qb[oa],
										qa = Qb[oa + 1],
										pa < Ra && (Ra = pa),
										pa > Ta && (Ta = pa),
										qa < Sa && (Sa = qa),
										qa > Ua && (Ua = qa)
									}
									ba.bds = [Ra, Sa, Ta, Ua]
								} (Bb || gc) && v.push(ba)
							}
						}
					}
				}
			}
		}
	}
	return n
}
function yb(b) {
	if (!b || "disekong" === b) return null;
	var a = Sb[b] || Sb["MapRes/" + b]; ! a && b && 48 <= b.charCodeAt(0) && 57 >= b.charCodeAt(0) && (a = Sb["_" + b]);
	return a
}
var Tb;
Tb = function(b, a, c, r) {
	var g, n;
	a = Q(0, a[0], a[0] + a[1]);
	if (!a.length) return {};
	for (var l = {},
	q = [], x = [], f = [], e = [], v = 0; v < a.length; v++) {
		var d = Q(0, a[v][0], a[v][0] + a[v][1]),
		w = d[0];
		w = Q(0, w[0], w[0] + w[1]);
		d = d[1];
		var u = Q(H[d[0] >> 2] + 1, d[0], d[0] + d[1]);
		a: {
			var k = b;
			if ((g = Q(0, u[2][0], u[2][0] + u[2][1])) && g[0]) {
				for (var p = 0; p < g.length; p++) {
					var m = g[p],
					h = m[0] >> 2;
					h = H[h];
					m = Q(h + 1, m[0], m[0] + m[1]);
					if (!m[0][1]) {
						k = [];
						g = [0, 0];
						var E = n = void 0;
						break a
					}
				}
				n = [];
				var t = [0, 0],
				A = [2.003772637E7, 1.102819087E7];
				d = [ - 2.003772637E7, -1.060158079E7];
				E = 0;
				p = c.mercatorSize;
				var C = c.col * p,
				B = c.row * p;
				for (p = 0; p < g.length; p++) {
					m = g[p];
					h = m[0] >> 2;
					h = H[h];
					m = Q(h + 1, m[0], m[0] + m[1]);
					m = new Int32Array(k, m[0][0], m[0][1] >> 2);
					h = [C + m[0] / 100, B + m[1] / 100];
					t[0] += h[0];
					t[1] += h[1];
					h[0] < A[0] && (A[0] = h[0]);
					h[1] < A[1] && (A[1] = h[1]);
					h[0] > d[0] && (d[0] = h[0]);
					h[1] > d[1] && (d[1] = h[1]);
					for (var z = 2; z < m.length; z += 2) h[z] = h[z - 2] + m[z] / 100,
					h[z + 1] = h[z - 1] + m[z + 1] / 100,
					t[0] += h[z],
					t[1] += h[z + 1],
					h[z] < A[0] && (A[0] = h[z]),
					h[z + 1] < A[1] && (A[1] = h[z + 1]),
					h[z] > d[0] && (d[0] = h[z]),
					h[z + 1] > d[1] && (d[1] = h[z + 1]);
					E += m.length;
					n.push(h)
				}
				t[0] /= E / 2;
				t[1] /= E / 2;
				k = n;
				g = t;
				n = A;
				E = d
			} else k = [],
			g = [0, 0],
			E = n = void 0
		}
		A = Q(0, u[3][0], u[3][0] + u[3][1]);
		d = [];
		for (t = 0; t < A.length; t++) d[t] = String.fromCharCode.apply(String, new Uint8Array(b, A[t][0], A[t][1]));
		C = String.fromCharCode.apply(String, new Uint8Array(b, u[1][0], u[1][1]));
		A = void 0;
		u = String.fromCharCode.apply(String, new Uint8Array(b, u[0][0], u[0][1]));
		for (t = 0; t < d.length; t++) if (d[t] === C) {
			A = t;
			break
		}
		k = {
			defaultFloor: A,
			currentFloor: A,
			uid: u,
			floors: [],
			contour: k,
			boundsMin: n,
			boundsMax: E,
			center: g,
			floorLength: d.length
		};
		for (t = 0; t < d.length; t++) {
			n = d[t];
			a: {
				g = b;
				E = w;
				C = n;
				for (p = 0; p < E.length; p++) if (B = Q(H[E[p][0] >> 2] + 1, E[p][0], E[p][0] + E[p][1]), String.fromCharCode.apply(String, new Uint8Array(g, B[0][0], B[0][1])) === C) {
					C = B[1];
					break a
				}
				C = null
			}
			g = b;
			B = u;
			m = n;
			n = c;
			var F = r;
			E = t === A ? !0 : !1;
			if (C) if (C = Q(0, C[0], C[0] + C[1]), C.length) {
				p = {
					base: [],
					contour: []
				};
				for (var G = 0; G < C.length; G++) {
					h = C[G];
					z = h[0] >> 2;
					var R = H[z + 1];
					7 === R && (F = Ub(g, h, n, p.contour, F, 1, {
						v: !0,
						M: !0
					}))
				}
				for (G = 0; G < p.contour.length; G++) p.contour[G].uid = B;
				for (G = 0; G < C.length; G++) h = C[G],
				z = h[0] >> 2,
				R = H[z + 1],
				7 === R && (F = Ub(g, h, n, p.base, F, 2, {
					v: !0
				}));
				for (G = 0; G < p.base.length; G++) p.base[G].uid = B; (h = Vb(g, C, n, !0)) && 0 !== h.vertex.length && (p.area3D = h, p.area3D.uid = B, p.area3D.border && (p.indoorBorder3D = p.area3D.border, p.indoorBorder3D.uid = B, delete p.area3D.border));
				p.floorName = m;
				B = [];
				for (m = 0; m < C.length; m++) h = C[m],
				z = h[0] >> 2,
				R = H[z + 1],
				R === pb && (h = Q(H[z] + 1, h[0], h[0] + h[1]), h.R = E, B.push(h));
				p.pois = qb(g, B, E ? H[2] : H[3], n, Wb);
				g = p
			} else g = {
				floorName: m
			};
			else g = {
				floorName: m
			};
			k.floors[t] = g
		}
		l[u] = k;
		if (k.floors[A]) {
			if (k.floors[A].base) for (t = 0; t < k.floors[A].base.length; t++) q.push(k.floors[A].base[t]);
			if (k.floors[A].contour) for (t = 0; t < k.floors[A].contour.length; t++) x.push(k.floors[A].contour[t]);
			k.floors[A].indoorBorder3D && f.push(k.floors[A].indoorBorder3D);
			k.floors[A].area3D && e.push(k.floors[A].area3D)
		}
		l.tileInfo = c
	}
	0 === q.length && (q = null);
	0 === x.length && (x = null);
	0 === f.length && (f = null);
	0 === e.length && (e = null);
	return {
		indoorDataResult: l,
		indoorBase: q,
		indoorBaseContour: x,
		indoorArea3D: e,
		indoorBorder3D: f
	}
};
var tb = function() {
	function b(b, r, c, g, f) {
		if (g = g || null) {
			f = g[2];
			switch (r) {
			case "point":
				f = f[0];
				break;
			case "pointText":
				f = f[1];
				break;
			case "line":
				f = f[3];
				break;
			case "polygon":
				f = f[4];
				break;
			case "polygon3d":
				f = f[5]
			}
			var e = c - 1;
			"line" === r && 12 === c && (e = c);
			e = g[1][e][0];
			e = e[b];
			e || "point" !== r && "pointText" !== r || (e = g[1][c][0], e = e[b]);
			c = {
				l: e,
				style: f,
				s: []
			}
		} else if (f) {
			g = f.baseFs;
			b: {
				var n = f.pa;
				if ("[object Object]" === Object.prototype.toString.call(n)) {
					for (e in n) {
						e = !1;
						break b
					}
					e = !0
				} else e = !1
			}
			f = e ? f.StyleBody || [] : f.zoomStyleBody[c] || [];
			e = g[2];
			switch (r) {
			case "point":
				e = e[0];
				f = f[0] || {};
				break;
			case "pointText":
				e = e[1];
				f = f[1] || {};
				break;
			case "line":
				e = e[3];
				f = f[3] || {};
				break;
			case "polygon":
				e = e[4];
				f = f[4] || {};
				break;
			case "polygon3d":
				e = e[5],
				f = f[5] || {}
			}
			c = {
				l: g[1][c - 1][0][b],
				style: e,
				s: f
			}
		} else c = {
			l: null,
			style: [],
			s: []
		};
		f = c;
		c = f.l;
		g = f.style;
		f = f.s;
		e = [];
		if (!c) return e;
		for (n = 0; n < c.length; n++) {
			var d = f[c[n]] || g[c[n]];
			if (d) {
				switch (r) {
				case "polygon":
					d = {
						g: b,
						f: a(d[0]),
						c: a(d[1]),
						borderWidth: d[2],
						B: d[3],
						C: d[4],
						oa: d[5],
						Y: d[6],
						la: d[7],
						ma: a(d[8])
					};
					break;
				case "line":
					d = {
						g: b,
						c: a(d[0]),
						f: a(d[1]),
						borderWidth: d[2],
						o: d[3],
						V: d[4],
						G: d[5],
						aa: d[6],
						ba: d[7],
						ca: d[8],
						ea: d[9],
						fa: d[10],
						B: d[11],
						i: d[12],
						C: d[13],
						X: d[14],
						da: d[15],
						Z: d[16],
						ha: d[17],
						ka: d[18]
					};
					break;
				case "pointText":
					d = d && 0 !== d.length ? {
						sid: b,
						fontRgba: a(d[0]),
						haloRgba: a(d[1]),
						backRgba: a(d[2]),
						fontSize: d[3],
						haloSize: d[4],
						fontWeight: d[5],
						fontStyle: d[6],
						density: d[7]
					}: null;
					break;
				case "point":
					d = {
						sid: b,
						rank: d[0],
						na: d[1],
						icon: d[2],
						iconType: d[3],
						ia: d[4],
						density: d[5],
						zoom: d[6]
					};
					break;
				case "polygon3d":
					d = {
						g: b,
						filter: d[0],
						ratio: d[1],
						$: d[2],
						borderWidth: d[3],
						c: a(d[4]),
						H: a(d[5]),
						m: a(d[6]),
						ja: d[7]
					}
				}
				d && (d.W = c[n], e[e.length] = d)
			}
		}
		return e
	}
	function a(a) {
		var b = a;
		if (g[b]) return g[b];
		a >>>= 0;
		g[b] = [a & 255, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255];
		return g[b]
	}
	var c = {},
	r = {},
	g = {};
	return {
		b: function(a, g, q, x, f, e, v) {
			a = (a || "default") + "-" + g + "-" + q + "-" + x;
			e && (a += "-indoor");
			if (f) return r[a] || (r[a] = b(g, q, x, f)),
			r[a];
			c[a] || (c[a] = b(g, q, x, f, v));
			return c[a]
		}
	}
} ();
function Xb(b, a) {
	if (b.fill) b.fill(a);
	else for (var c = 0; c < b.length; c++) b[c] = a
}
Uint8Array.prototype.slice || (Object.defineProperty(Uint8Array.prototype, "slice", {
	value: Array.prototype.slice
}), Object.defineProperty(Uint16Array.prototype, "slice", {
	value: Array.prototype.slice
}), Object.defineProperty(Uint32Array.prototype, "slice", {
	value: Array.prototype.slice
}), Object.defineProperty(Int8Array.prototype, "slice", {
	value: Array.prototype.slice
}), Object.defineProperty(Int16Array.prototype, "slice", {
	value: Array.prototype.slice
}), Object.defineProperty(Int32Array.prototype, "slice", {
	value: Array.prototype.slice
}), Object.defineProperty(Float32Array.prototype, "slice", {
	value: Array.prototype.slice
}));
var sb, H, Yb;
function wb(b, a, c, r) {
	b = new Uint8Array(b, a, c);
	if (self.TextDecoder) return Yb || (Yb = new TextDecoder("utf-8")),
	Yb.decode(b).replace(/\\\\/g, "\\");
	if ("utf-8" === r) for (r = "", a = 0; a < b.length; a++) c = b[a],
	128 > c ? r += String.fromCharCode(c) : 191 < c && 224 > c ? (r += String.fromCharCode((c & 31) << 6 | b[a + 1] & 63), a += 1) : 223 < c && 240 > c ? (r += String.fromCharCode((c & 15) << 12 | (b[a + 1] & 63) << 6 | b[a + 2] & 63), a += 2) : (c = ((c & 7) << 18 | (b[a + 1] & 63) << 12 | (b[a + 2] & 63) << 6 | b[a + 3] & 63) - 65536, r += String.fromCharCode(c >> 10 | 55296, c & 1023 | 56320), a += 3);
	else {
		if (4096 >= c) return String.fromCharCode.apply(String, b);
		r = "";
		var g = Math.ceil(c / 4096);
		for (a = 0; a < g; a++) r += String.fromCharCode.apply(String, b.slice(4096 * a, a === g - 1 ? c: 4096 * (a + 1)))
	}
	return r.replace(/\\\\/g, "\\")
}
function Q(b, a, c) {
	var r = a >> 2,
	g = H[r + b];
	a = 4 * (g + b + 1) + a;
	var n = [];
	if (a > c) return n;
	for (c = 0; c < g; c++) {
		var l = H[r + b + 1 + c],
		q = a + l;
		n[c] = [a, l];
		0 !== q % 4 ? a = q + 4 - q % 4 : a = q
	}
	return n
}
var pb = 3,
Zb = 1E-5,
$b = 1,
vb = null,
Wb = null,
Sb = null,
ub = "",
T = null,
ha = new aa,
ac = 20,
bc = 65536,
cc = [245, 245, 245, 255],
hc = 1,
xc = null,
yc = null,
Rb = {
	3 : {
		start: 3,
		end: 3,
		a: 3
	},
	4 : {
		start: 4,
		end: 5,
		a: 5
	},
	5 : {
		start: 4,
		end: 5,
		a: 5
	},
	6 : {
		start: 6,
		end: 7,
		a: 7
	},
	7 : {
		start: 6,
		end: 7,
		a: 7
	},
	8 : {
		start: 8,
		end: 9,
		a: 9
	},
	9 : {
		start: 8,
		end: 9,
		a: 9
	},
	10 : {
		start: 10,
		end: 10,
		a: 10
	},
	11 : {
		start: 11,
		end: 13,
		a: 12
	},
	12 : {
		start: 11,
		end: 13,
		a: 12
	},
	13 : {
		start: 11,
		end: 13,
		a: 12
	},
	14 : {
		start: 14,
		end: 15,
		a: 15
	},
	15 : {
		start: 14,
		end: 15,
		a: 15
	},
	16 : {
		start: 16,
		end: 17,
		a: 17
	},
	17 : {
		start: 16,
		end: 17,
		a: 17
	},
	18 : {
		start: 18,
		end: 25,
		a: 19
	},
	19 : {
		start: 18,
		end: 25,
		a: 19
	},
	20 : {
		start: 18,
		end: 25,
		a: 19
	},
	21 : {
		start: 18,
		end: 25,
		a: 19
	},
	22 : {
		start: 18,
		end: 25,
		a: 19
	},
	23 : {
		start: 18,
		end: 25,
		a: 19
	},
	24 : {
		start: 18,
		end: 25,
		a: 19
	},
	25 : {
		start: 18,
		end: 25,
		a: 19
	}
},
rb,
zc,
Ac = !1,
Bc = [],
Cc = !1;
function nb() {
	for (var b = atob("AGFzbQEAAAABNAdgAX8Bf2AAAX9gAX8AYAJ/fwBgAABgDX9/f39/fH9/f39/f38AYAt/f3x/f39/f39/fwACngEKA2Vudg5EWU5BTUlDVE9QX1BUUgN/AANlbnYNdGVtcERvdWJsZVB0cgN/AANlbnYFQUJPUlQDfwADZW52CFNUQUNLVE9QA38AA2VudglTVEFDS19NQVgDfwADZW52AmdiA38AA2VudgJmYgN/AAZnbG9iYWwDTmFOA3wABmdsb2JhbAhJbmZpbml0eQN8AANlbnYGbWVtb3J5AgFGRgMeHQABAgMDAQEBAQEBAQEBBAEBBAEBAQEBAQMFAwYEBnMUfwEjAAt/ASMBC38BIwILfwEjAwt/ASMEC38BIwULfwEjBgt/AUEAC38BQQALfwFBAAt/AUEAC3wBIwcLfAEjCAt/AUEAC38BQQALfwFBAAt/AUEAC3wBRAAAAAAAAAAAC38BQQALfAFEAAAAAAAAAAALB/AEHAtfcmVzZXRfbGluZQAOFl9nZXRfYmxvY2tfaW5kZXhfc3RhcnQAEghzZXRUaHJldwAEGl9nZXRfbGluZV90dXJuaW5nc19hZGRyZXNzAAgjX2dldF9ibG9ja190cmlhbmdsZV9pbmRpY2VzX2FkZHJlc3MAEBZfZ2V0X2xpbmVfdmVydGV4X2NvdW50AA0Kc3RhY2tBbGxvYwAAF19nZXRfYmxvY2tfdmVydGV4X2NvdW50ABYXX2dldF9ibG9ja192ZXJ0ZXhfc3RhcnQAFBRfZ2V0X2xpbmVfdmVydGV4X2VuZAAMG19nZXRfZmVhdHVyZV9wb2ludHNfYWRkcmVzcwAXDHN0YWNrUmVzdG9yZQACFF9nZXRfYmxvY2tfaW5kZXhfZW5kABMbX2dldF9saW5lX2FsdGl0dWRlc19hZGRyZXNzAAYVX2dldF9ibG9ja192ZXJ0ZXhfZW5kABUJc3RhY2tTYXZlAAELcnVuUG9zdFNldHMAHBZfZ2V0X2xpbmVfdmVydGV4X3N0YXJ0AAsNX3BhcnNlX3BvaW50cwAYGF9nZXRfbGluZV9wb2ludHNfYWRkcmVzcwAHE2VzdGFibGlzaFN0YWNrU3BhY2UAAxNfZ2V0X2xpbmVfaW5kZXhfZW5kAAoRX2FwcGVuZF9saW5lX2RhdGEAGRVfZ2V0X2xpbmVfaW5k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"), a = b.length, c = new Uint8Array(a), r = 0; r < a; r++) c[r] = b.charCodeAt(r);
	return c.buffer
}
function Dc() {
	Cc || (Cc = !0, mb(function() {
		Ac = !0;
		if (Bc.length) for (var b = 0; b < Bc.length; b++) {
			var a = Bc[b];
			Ec(a.data, a.u, a.T)
		}
		Bc = []
	}))
}
self.onmessage = function(b) {
	b = b.data;
	var a = b.action,
	c = b.isText,
	r = b.isPoi;
	if (self[a]) self[a](b);
	self.isText = c;
	self.isPoi = r
};
var Cb = {
	0 : "00000000",
	16 : "00010000",
	32 : "00100000",
	48 : "00110000",
	64 : "01000000",
	96 : "01100000"
};
function xb(b, a) {
	if (!Cb[b]) {
		var c = b.toString(2);
		8 > c.length && (c = Array(8 - c.length + 1).join("0") + c);
		Cb[b] = c
	}
	c = Cb[b];
	return "1" === c[a - Rb[a].start]
}
function Ec(b, a, c) {
	fa("finishLoadTile");
	try {
		fa("begin(ParseData)"),
		Fc(b, a, c,
		function(a) {
			fa("finishParseData");
			a.base = a.a;
			a.base3d = a.A;
			a.virtual = a.U;
			a.building3d = a.D;
			a.building3dMesh = a.F;
			a.indoorData = a.N;
			a.indoorBase = a.J;
			a.indoorBaseContour = a.K;
			a.indoorBorder3D = a.L;
			a.indoorArea3D = a.I;
			a.label = a.label;
			a.tileInfo = a.u;
			for (var b = [], c = 0; c < a.base.length; c++) {
				var l = a.base[c];
				b.push(l.data[0].buffer);
				b.push(l.data[1].buffer)
			}
			if (a.base3d) for (c = 0; c < a.base3d.length; c++) l = a.base3d[c],
			"block" === l.type ? (b.push(l.data.vertex.buffer), b.push(l.data.index.buffer)) : (b.push(l.data[0].buffer), b.push(l.data[1].buffer));
			if (a.virtual) for (c = 0; c < a.virtual.length; c++) l = a.virtual[c],
			b.push(l.data[0].buffer),
			b.push(l.data[1].buffer);
			a.building3d && (b.push(a.building3d.vertex.buffer), b.push(a.building3d.index.buffer));
			if (a.indoorBase) for (c = 0; c < a.indoorBase.length; c++) l = a.indoorBase[c],
			b.push(l.data[0].buffer),
			b.push(l.data[1].buffer);
			if (a.indoorBaseContour) for (c = 0; c < a.indoorBaseContour.length; c++) l = a.indoorBaseContour[c],
			b.push(l.data[0].buffer),
			b.push(l.data[1].buffer);
			if (a.indoorBorder3D && a.indoorBorder3D && 0 < a.indoorBorder3D.length) for (c = 0; c < a.indoorBorder3D.length; c++) b.push(a.indoorBorder3D[c].data[0].buffer),
			b.push(a.indoorBorder3D[c].data[1].buffer);
			if (a.indoorArea3D && 0 < a.indoorArea3D.length) for (c = 0; c < a.indoorArea3D.length; c++) b.push(a.indoorArea3D[c].vertex.buffer),
			b.push(a.indoorArea3D[c].index.buffer);
			a.label && (a.label.textImageBitmap && b.push(a.label.textImageBitmap), a.label.indoorTextImageBitmap && b.push(a.label.indoorTextImageBitmap));
			a.perfStat = [ka("beginLoadTile", "finishLoadTile"), ka("finishLoadTile", "beginParseData"), ka("beginParseData", "finishParseData"), zc];
			a.endTime = Date.now();
			postMessage(a, b)
		})
	} catch(r) {
		postMessage({
			tileInfo: a,
			tileKey: c,
			error: "parse_error",
			message: r.message
		})
	}
}
self.loadTileData = function(b) {
	var a = b.url,
	c = {};
	c.baseTileSize = b.tileInfo.baseTileSize;
	c.col = b.tileInfo.col;
	c.loopOffsetX = b.tileInfo.loopOffsetX;
	c.mercatorSize = b.tileInfo.mercatorSize;
	c.row = b.tileInfo.row;
	c.tileSize = b.tileInfo.tileSize;
	c.tileTypeName = b.tileInfo.tileTypeName;
	c.useZoom = b.tileInfo.useZoom;
	c.zoom = b.tileInfo.zoom;
	c.processedLabelZooms = b.tileInfo.processedLabelZooms;
	var r = b.tileKey;
	b.featureStyle && (vb = JSON.parse(b.featureStyle), T = null);
	b.indoorStyle && (Wb = JSON.parse(b.indoorStyle));
	b.iconSetInfo && (Sb = JSON.parse(b.iconSetInfo));
	b.iconInfo && (rb = b.iconInfo.textSizeRatio);
	b.mapStyleId && (ub = b.mapStyleId);
	b.customMapStyle && (T = JSON.parse(b.customMapStyle), vb = null);
	c.style = ub;
	xc = yc = null;
	zc = 0;
	var g = new XMLHttpRequest;
	g.open("GET", a, !0);
	b = b.tileInfo.header;
	if (b instanceof Array) for (var n = 0; n < b.length; n++) b[n] && b[n].hasOwnProperty("key") && b[n].hasOwnProperty("value") && g.setRequestHeader(b[n].key, b[n].value);
	g.responseType = "arraybuffer";
	g.timeout = 1E4;
	g.ontimeout = function() {
		postMessage({
			tileInfo: c,
			tileKey: r,
			error: "net_timeout",
			message: "net status: timeout"
		})
	};
	g.onreadystatechange = function() {
		4 === this.readyState && (200 === this.status && (zc = Math.round(g.response.byteLength / 1024), Ac ? Ec(g.response, c, r) : Bc[Bc.length] = {
			data: g.response,
			u: c,
			T: r
		}), (400 <= this.status || 0 === this.status) && postMessage({
			tileInfo: c,
			tileKey: r,
			error: "net_error",
			message: "net status: " + this.status,
			event: {
				title: a,
				ga: JSON.stringify({
					responseURL: a,
					status: this.status
				})
			}
		}))
	};
	g.send();
	Dc();
	fa("beginLoadTile")
};
function Fc(b, a, c, r) {
	var g = [],
	n = [],
	l = [],
	q = 0,
	x = a.useZoom,
	f = null,
	e = null;
	H = new Uint32Array(b);
	sb = new Int32Array(b);
	hc = H[0];
	for (var v = Q(H[1] + 2, 0, b.byteLength), d = Q(0, v[0][0], v[0][0] + v[0][1]), w, u = !1, k = 0; k < d.length; k++) {
		f = d[k];
		var p = f[0] >> 2,
		m = H[p + 1];
		if (7 === m) {
			u = !0;
			break
		}
	} ! 1 === u && (q = Ub(null, null, a, g, q, 0));
	for (k = 0; k < d.length; k++) f = d[k],
	p = f[0] >> 2,
	m = H[p + 1],
	u = H[p + 2],
	7 === m ? q = Ub(b, f, a, g, q, 0) : 4 === m ? 13E3 === u || 83500 === u ? Gc(b, f, x, l, 0) : q = Gc(b, f, x, g, q) : 15 === m ? (w = q, q = Ub(b, f, a, n, q, 1, {
		O: !0
	})) : 16 === m ? q = Gc(b, f, x, n, q, !0) : 18 === m ? T && T.zoomFrontStyle && T.zoomFrontStyle[x] && "off" === T.zoomFrontStyle[x].bmapRoadarrowVisibility || (q = $c(b, f, x, n, q)) : 19 === m ? q = ad(b, f, x, g, q) : 20 === m && (q = bd(b, f, x, n, q)); (k = cd(d, a)) && n.push({
		type: "block",
		data: k,
		has3D: !0,
		has2D: !1
	});
	f = Vb(b, d, a);
	k = dd(b, d, a);
	0 < k && (e = {
		vertex: new Float32Array(7 * k),
		index: new Uint16Array(k / 3)
	},
	dd(b, d, a, e.vertex, e.index));
	k = {
		S: wb(b, v[3][0], v[3][1], void 0) || "",
		height: H[2] || 0
	};
	var h = ob(b, d, v[2], k, a) || {};
	h.textImgStr = k.S || null;
	v[4][1] && H[3] ? (h.indoorTextImgStr = wb(b, v[4][0], v[4][1], void 0) || null, h.indoorTextureHeight = H[3]) : h.indoorTextImgStr = null;
	b = Tb(b, v[1], a, w ? w: q);
	h.indoorLabel = [];
	if (b.indoorDataResult) for (var E in b.indoorDataResult) if ("tileInfo" !== E) for (q = b.indoorDataResult[E], v = q.defaultFloor, b.indoorDataResult[E].tileKey = c, k = 0; k < q.floors.length; k++) v === k && q.floors[k].pois && (h.indoorLabel = h.indoorLabel.concat(q.floors[k].pois));
	H = sb = null;
	g.length && (g = ed(g));
	var t = {
		a: g,
		A: n.length ? n: null,
		U: l.length ? l: null,
		D: f,
		F: e,
		N: b.indoorDataResult,
		J: b.indoorBase,
		K: b.indoorBaseContour,
		L: b.indoorBorder3D,
		I: b.indoorArea3D,
		label: h,
		u: a
	};
	if ((h.textImgStr || h.indoorTextImgStr) && self.fetch && self.createImageBitmap && self.Promise) {
		var A = function() {
			r(t)
		},
		C = 0;
		h.textImgStr && (C++, fetch(h.textImgStr).then(function(a) {
			a.blob().then(function(a) {
				createImageBitmap(a, {
					imageOrientation: "flipY"
				}).then(function(a) {
					h.textImageBitmap = a;
					h.textImgStr = null;
					C--;
					0 === C && r(t)
				},
				A)
			},
			A)
		},
		A));
		h.indoorTextImgStr && (C++, fetch(h.indoorTextImgStr).then(function(a) {
			a.blob().then(function(a) {
				createImageBitmap(a, {
					imageOrientation: "flipY"
				}).then(function(a) {
					h.indoorTextImageBitmap = a;
					h.indoorTextImgStr = null;
					C--;
					0 === C && r(t)
				},
				A)
			},
			A)
		},
		A))
	} else r(t)
}
function ed(b) {
	for (var a = void 0,
	c = 0,
	r = 0,
	g = !1,
	n = 0; n < b.length; n++)"fill" !== b[n].type ? a = void 0 : b[n].type === a ? (b[c] = fd(b[c], b[n], r), b[n].P = !0, r += b[n].h, g = !0) : (c = n, a = b[n].type, r = b[n].h);
	return g ? b.filter(function(a) {
		return ! a.P
	}) : b
}
function fd(b, a, c) {
	var r = b.data[1],
	g = a.data[1];
	b.data[0] = gd(b.data[0], a.data[0]);
	b.data[1] = gd(r, g, c);
	b.has3D = b.has3D || a.has3D;
	b.has2D = b.has2D || a.has2D;
	return b
}
function gd(b, a, c) {
	if (b.constructor === ArrayBuffer) {
		var r = new Uint8Array(b.byteLength + a.byteLength);
		r.set(new Uint8Array(b), 0);
		r.set(new Uint8Array(a), b.byteLength);
		return r.buffer
	}
	r = new b.constructor(b.length + a.length);
	r.set(b, 0);
	if (c) for (var g = 0; g < a.length; g++) a[g] += c;
	r.set(a, b.length);
	return r
}
function Ub(b, a, c, r, g, n, l) {
	var q = [];
	b && (q = a ? a[0] >> 2 : 0, q = H[q], q = Q(q + 1, a[0], a[0] + a[1]));
	a = 0;
	var x = c.baseTileSize;
	c = c.useZoom;
	var f = [],
	e = [],
	v = [],
	d = [];
	l = l || {};
	var w = l.v || !1,
	u = l.O || !1;
	l = l.M || !1;
	if (!u && 0 === g) {
		e = cc;
		if (T && T.bmapLandColor) {
			e = T.bmapLandColor.replace("#", "");
			3 === e.length ? e += "f": 6 === e.length && (e += "ff");
			v = [];
			d = e.length;
			f = 8 === d ? 2 : 1;
			for (var k = 0; k < d; k += f) 2 === f ? v.push(parseInt(e.slice(k, k + 2), 16)) : v.push(parseInt(e.slice(k, k + 1) + e.slice(k, k + 1), 16));
			e = v
		}
		f = [0, 0, 0, e[0], e[1], e[2], e[3], 0, x, 0, 0, e[0], e[1], e[2], e[3], 0, x, x, 0, e[0], e[1], e[2], e[3], 0, 0, x, 0, e[0], e[1], e[2], e[3], 0];
		e = [0, 1, 2, 0, 2, 3];
		v = [72];
		d = [20]
	}
	1 === n ? (g++, a = g, g += 5) : 2 === n && (a = g + 3 * q.length + 1);
	k = [];
	for (var p = [], m = !1, h = !1, E = 0; E < q.length; E++) {
		var t = q[E],
		A = t[0] >> 2,
		C = H[A];
		A = H[A + 1];
		var B = tb.b(ub, A, "polygon", c, w ? Wb: vb, w, T);
		if (B && B.length) {
			B = B[0];
			if (B.g) {
				if (6 < c && (71013 === B.g || 71012 === B.g || 71011 === B.g)) continue;
				if (5 < c && 71011 === B.g) continue;
				if (5 > c && (71012 === B.g || 71013 === B.g)) continue
			}
			var z = B.f[0],
			F = B.f[1],
			G = B.f[2],
			R = B.f[3],
			V = B.c[0],
			K = B.c[1],
			M = B.c[2],
			W = B.c[3],
			Y = B.borderWidth / 4,
			X = 2.5 * Y;
			t = Q(C + 1, t[0], t[0] + t[1]);
			g += 3;
			for (C = 0; C < t.length; C++) {
				var O = t[C],
				J = O[0] >> 2,
				L = H[J];
				if (xb(H[J + 1], c)) {
					var U = Q(L + 1, O[0], O[0] + O[1]);
					O = new Int32Array(b, U[0][0], U[0][1] >> 2);
					if (O.length && !(4E3 < O.length)) {
						var P = new Uint16Array(b, U[2][0], U[2][1] >> 1); ! 0 !== l && P && f.length / 8 + O.length / 2 > bc && (f = hd(f), r.push({
							type: "fill",
							data: [f, new Uint16Array(e)],
							h: f.byteLength / ac,
							has3D: m,
							has2D: h,
							verticesLength: d,
							styleIds: v
						}), f = [], e = [], v = [], d = [], h = m = !1);
						L = null;
						var N = !1;
						if (u) {
							var D = 1 < hc ? new Int16Array(b, U[1][0], U[1][1] >> 1) : new Uint16Array(b, U[1][0], U[1][1] >> 1);
							if (1 === D.length && D[0]) L = Array(O.length >> 1),
							0 > D[0] && (N = !0),
							Xb(L, D[0]),
							m = !0;
							else if (1 < D.length) {
								L = [];
								for (var I = 0; I < D.length; I++) 0 > D[I] && (N = !0),
								L[I] = D[I] || $b;
								m = !0
							} else h = !0
						}
						I = f.length / 8;
						D = Za(O);
						J = H[J + 2];
						l && 1 === J && (Y = X);
						if (!0 !== l && P) {
							J = e;
							for (var Z = 0; Z < P.length; Z++) J[J.length] = P[Z] + I;
							I = 0;
							for (P = D.length / 2; I < P; I++) J = L ? L[I] : 0,
							f.push(D[2 * I], D[2 * I + 1], J, z, F, G, R, g);
							v.push(A);
							d.push(f.length / 1.6)
						}
						if (L && !N) for (k.length / 8 + D.length / 2 * 2 > bc && (k = hd(k), p = new Uint16Array(p), r.push({
							type: "fill",
							data: [k, p],
							h: k.byteLength / ac,
							has3D: m,
							has2D: h
						}), p = [], k = []), N = k.length / 8, I = 0; I < D.length; I += 2) {
							J = L[I / 2];
							P = J - 280;
							0 > P && (P = 0);
							k.push(D[I], D[I + 1], J, V, K, M, W, g, D[I], D[I + 1], P, V, K, M, W, g);
							J = D[I];
							P = D[I + 1];
							Z = I === D.length - 2 ? D[1] : D[I + 3];
							var da = !1;
							if (J === (I === D.length - 2 ? D[0] : D[I + 2])) {
								if (Math.abs(J) < Zb || Math.abs(J - x) < Zb) da = !0
							} else P === Z && (Math.abs(P) < Zb || Math.abs(P - x) < Zb) && (da = !0);
							da || (I === D.length - 2 ? p.push(N + I, N + I + 1, N, N, N + I + 1, N + 1) : p.push(N + I, N + I + 1, N + I + 2, N + I + 2, N + I + 1, N + I + 3))
						}
						if (n && B.borderWidth && D.length) {
							if (D[0] - D[D.length - 2] > Zb || D[1] - D[D.length - 1] > Zb) D[D.length] = D[0],
							D[D.length] = D[1],
							L && (L[L.length] = L[0]);
							if (U[3]) for (U = Q(0, U[3][0], U[3][0] + U[3][1]), D = 0; D < U.length; D++) N = U[D],
							J = Q(0, N[0], N[0] + N[1]),
							N = new Int16Array(b, J[0][0], J[0][1] >> 1),
							jb() + N.length / 2 > bc && (r.push({
								type: "line",
								data: [ab(), ib()],
								has3D: m,
								has2D: h
							}), lb()),
							I = new Uint16Array(b, J[1][0], J[1][1] >> 1),
							J = new Int8Array(b, J[2][0], J[2][1]),
							kb(N, [V, K, M, W], Y, L, a, !1, O, J, 0, I[0], I[1])
						}
					}
				}
			}
		}
	}
	k.length && (k = hd(k), p = new Uint16Array(p), r.push({
		type: "fill",
		data: [k, p],
		h: k.byteLength / ac,
		has3D: m,
		has2D: h
	}));
	f.length && (f = hd(f), r.push({
		type: "fill",
		data: [f, new Uint16Array(e)],
		h: f.byteLength / ac,
		has3D: m,
		has2D: h,
		verticesLength: d,
		styleIds: v
	}));
	n && (r.push({
		type: "line",
		data: [ab(), ib()],
		has3D: m,
		has2D: h
	}), lb());
	return Math.max(g, a)
}
function Gc(b, a, c, r, g, n) {
	a = Q(H[a[0] >> 2] + 1, a[0], a[0] + a[1]);
	for (var l = !1,
	q = !1,
	x = [], f = [], e = 0; 2 > e; e++) {
		0 === e && g++;
		for (var v = 0; v < a.length; v++) {
			var d = a[v],
			w = d[0] >> 2,
			u = H[w],
			k = H[w + 1];
			if ((w = tb.b(ub, k, "line", c, vb, !1, T)) && w.length && (71059 !== k || self.isText) && (0 !== e || w[0].borderWidth) && (d = Q(u + 1, d[0], d[0] + d[1]), 0 !== e || !w[0].i)) if (1 === e && w[0].i) {
				var p = w[0].i;
				u = p;
				var m = Sb[u] || Sb["MapRes/" + u];
				if (m) {
					m = [m[0], m[1]];
					jb() && (r[r.length] = {
						type: "line",
						data: [ab(), ib()],
						has3D: l,
						has2D: q,
						styleIds: x,
						verticesLength: f
					},
					lb(), q = l = !1, f = [], x = []);
					/guojietianqiaojieti/.test(p) ? g += 20 : g++;
					var h = w[0].o / 4,
					E = n ? !0 : !1,
					t = !1;
					/\b(32|16|8|4)$/.test(u) && (h *= 5, m[1] *= 2, t = E = !0, p = p.replace(/\b4$/, "8"));
					var A = !1,
					C = !1;
					for (u = 0; u < d.length; u++) {
						var B = d[u],
						z = B[0] >> 2,
						F = H[z];
						z = H[z + 1];
						if (xb(z, c) && (z = Q(F + 1, B[0], B[0] + B[1]), B = null, F = new Int32Array(b, z[0][0], z[0][1] >> 2), F.length && !(8E3 < F.length))) {
							if (t && 4 === F.length) {
								var G = F,
								R = G[2],
								V = G[3],
								K = Math.sqrt(R * R + V * V);
								K = 800 * ~~ (K / 800) / K;
								G[2] = ~~ (R * K);
								G[3] = ~~ (V * K)
							}
							if (n) {
								var M = 1 < hc ? new Int16Array(b, z[1][0], z[1][1] >> 1) : new Uint16Array(b, z[1][0], z[1][1] >> 1);
								if (1 === M.length && M[0]) B = Array(F.length >> 1),
								Xb(B, M[0]),
								A = !0;
								else if (1 < M.length) {
									B = [];
									for (A = 0; A < M.length; A++) B[A] = M[A] || $b;
									A = !0
								} else C = !0
							}
							G = new Int16Array(b, z[2][0], z[2][1] >> 1);
							R = new Int8Array(b, z[3][0], z[3][1]);
							kb(G, w[0].f, h, B, g, !0, F, R, 1);
							x.push(k);
							f.push(5 * jb())
						}
					}
					jb() && (r[r.length] = {
						type: "line",
						textureSize: m,
						texture: p + ".png",
						lineWidth: w[0].o / 2,
						data: [ab(), ib()],
						has3D: A,
						has2D: C,
						zoomWithMap: E,
						styleIds: x,
						verticesLength: f
					},
					x = [], f = [], lb())
				}
			} else if (0 === e ? (k = w[0].c, p = w[0].borderWidth) : (k = w[0].f, p = w[0].o), p /= 4, !(0 === p || 0 === k[3] || 100 < p)) for (1 === e && g++, u = 0; u < d.length; u++) if (B = d[u], z = B[0] >> 2, F = H[z], z = H[z + 1], xb(z, c) && (z = Q(F + 1, B[0], B[0] + B[1]), F = new Int32Array(b, z[0][0], z[0][1] >> 2), F.length && !(8E3 < F.length))) {
				G = new Int16Array(b, z[2][0], z[2][1] >> 1);
				R = new Int8Array(b, z[3][0], z[3][1]);
				jb() + G.length / 2 > bc && (r[r.length] = {
					type: "line",
					data: [ab(), ib()],
					has3D: l,
					has2D: q
				},
				q = l = !1, lb());
				B = null;
				if (n) if (1 < hc ? M = new Int16Array(b, z[1][0], z[1][1] >> 1) : M = new Uint16Array(b, z[1][0], z[1][1] >> 1), 1 === M.length && M[0]) B = Array(F.length >> 1),
				Xb(B, M[0]),
				l = !0;
				else if (1 < M.length) {
					B = [];
					for (l = 0; l < M.length; l++) B[l] = M[l] || $b;
					l = !0
				} else q = !0;
				kb(G, k, p, B, g, 1 === w[0].G, F, R, 0)
			}
		}
	}
	jb() && (r[r.length] = {
		type: "line",
		data: [ab(), ib()],
		has3D: l,
		has2D: q,
		styleIds: x,
		verticesLength: f
	},
	lb());
	return g
}
function bd(b, a, c, r, g) {
	var n = Q(H[a[0] >> 2] + 1, a[0], a[0] + a[1]),
	l = [];
	a = [];
	for (var q = !1,
	x = !1,
	f = 0; f < n.length; f++) {
		var e = n[f];
		e = Q(H[e[0] >> 2] + 1, e[0], e[0] + e[1])[0];
		var v = e[0] >> 2,
		d = H[v];
		if (xb(H[v + 1], c)) {
			var w = Q(d + 1, e[0], e[0] + e[1]);
			e = new Int32Array(b, w[0][0], w[0][1] >> 2);
			e = Za(e);
			d = 1 < hc ? new Int16Array(b, w[3][0], w[3][1] >> 1) : new Uint16Array(b, w[3][0], w[3][1] >> 1);
			v = void 0;
			if (1 === d.length && d[0]) v = Array(e.length >> 1),
			Xb(v, d[0]),
			q = !0;
			else if (1 < d.length) {
				v = [];
				for (var u = 0; u < d.length; u++) v[u] = d[u] || 1;
				q = !0
			} else x = !0;
			d = new Uint32Array(b, w[2][0], w[2][1] >> 2);
			u = l.length / 8;
			g += 8;
			var k = tb.b(ub, d[0], "polygon", c, vb, !1, T),
			p = tb.b(ub, d[1], "polygon", c, vb, !1, T);
			if (k && p) {
				var m = new Int32Array(b, w[1][0], w[1][1] >> 2);
				d = [m[0] / 100, m[1] / 100];
				k = k[0].f;
				m = [m[2] / 100, m[3] / 100];
				p = p[0].f;
				var h = [m[0] - d[0], m[1] - d[1]],
				E = Math.sqrt(Math.pow(h[0], 2) + Math.pow(h[1], 2)),
				t = a;
				w = new Uint16Array(b, w[4][0], w[4][1] >> 1);
				for (var A = 0; A < w.length; A++) t[t.length] = w[A] + u;
				u = 0;
				for (w = e.length / 2; u < w; u++) {
					t = [e[2 * u], e[2 * u + 1]];
					if (0 === h[0]) {
						A = d[0];
						var C = t[1]
					} else C = -((d[0] - t[0]) * h[0] + (d[1] - t[1]) * h[1]) / (h[0] * h[0] + h[1] * h[1]),
					A = C * h[0] + d[0],
					C = C * h[1] + d[1];
					C = Math.sqrt(Math.pow(A - m[0], 2) + Math.pow(C - m[1], 2)) / E;
					if (d[0] < m[0] && A < d[0] || d[0] > m[0] && A > d[0]) C = 1;
					else if (d[0] < m[0] && A > m[0] || d[0] > m[0] && A < m[0]) C = 0;
					l.push(t[0], t[1], v ? v[u] : 0, C * k[0] + (1 - C) * p[0], C * k[1] + (1 - C) * p[1], C * k[2] + (1 - C) * p[2], C * k[3] + (1 - C) * p[3], g)
				}
			}
		}
	}
	l.length && (b = hd(l), r.push({
		type: "fill",
		data: [b, new Uint16Array(a)],
		h: b.byteLength / ac,
		has3D: q,
		has2D: x
	}));
	return g
}
function $c(b, a, c, r, g) {
	var n = Q(H[a[0] >> 2] + 1, a[0], a[0] + a[1]);
	if (!n.length) return g;
	a = [];
	var l = [];
	g++;
	var q = Za(new Int32Array(b, n[0][0], n[0][1] >> 2)),
	x = new Int32Array(b, n[1][0], n[1][1] >> 2);
	b = new Int16Array(b, n[2][0], n[2][1] >> 1);
	var f = n = !1;
	1 === b.length && 0 === b[0] ? f = !0 : n = !0;
	b = Za(b, 1);
	if (1 === b.length) {
		var e = b[0];
		b = Array(q.length >> 1);
		Xb(b, e)
	}
	for (e = 0; e < x.length; e++) if (xb(x[e], c)) {
		var v = [q[4 * e], q[4 * e + 1], b[2 * e]],
		d = [q[4 * e + 2], q[4 * e + 3], b[2 * e + 1]],
		w = [(v[0] + d[0]) / 2, (v[1] + d[1]) / 2, (v[2] + d[2]) / 2],
		u = w[0] - v[0],
		k = w[1] - v[1],
		p = [d[0] - v[0], d[1] - v[1]],
		m = p[0] * p[0] + p[1] * p[1];
		0 < m && (m = 1 / Math.sqrt(m), p[0] *= m, p[1] *= m);
		m = a.length / 10;
		a[a.length] = w[0];
		a[a.length] = w[1];
		a[a.length] = v[2];
		a[a.length] = -u;
		a[a.length] = -k;
		a[a.length] = -p[1];
		a[a.length] = p[0];
		a[a.length] = .125;
		a[a.length] = .3125;
		a[a.length] = g;
		a[a.length] = w[0];
		a[a.length] = w[1];
		a[a.length] = v[2];
		a[a.length] = -u;
		a[a.length] = -k;
		a[a.length] = p[1];
		a[a.length] = -p[0];
		a[a.length] = .125;
		a[a.length] = .6875;
		a[a.length] = g;
		a[a.length] = w[0];
		a[a.length] = w[1];
		a[a.length] = d[2];
		a[a.length] = u;
		a[a.length] = k;
		a[a.length] = -p[1];
		a[a.length] = p[0];
		a[a.length] = 1;
		a[a.length] = .3125;
		a[a.length] = g;
		a[a.length] = w[0];
		a[a.length] = w[1];
		a[a.length] = d[2];
		a[a.length] = u;
		a[a.length] = k;
		a[a.length] = p[1];
		a[a.length] = -p[0];
		a[a.length] = 1;
		a[a.length] = .6875;
		a[a.length] = g;
		l[l.length] = m;
		l[l.length] = m + 1;
		l[l.length] = m + 2;
		l[l.length] = m + 2;
		l[l.length] = m + 1;
		l[l.length] = m + 3
	}
	l.length && r.push({
		type: "arrow",
		data: [new Float32Array(a), new Uint16Array(l)],
		has3D: n,
		has2D: f
	});
	return g
}
function ad(b, a, c, r, g) {
	a = Q(H[a[0] >> 2] + 1, a[0], a[0] + a[1]);
	g++;
	for (var n = 0; n < a.length; n++) {
		var l = a[n],
		q = l[0] >> 2,
		x = H[q];
		if ((q = tb.b(ub, H[q + 1], "line", c, vb, !1, T)) && q.length) {
			var f = q[0];
			if ("undefined" !== typeof f.i) {
				f = f.i + ".png";
				l = Q(x + 1, l[0], l[0] + l[1]);
				for (x = 0; x < l.length; x++) {
					var e = l[x],
					v = e[0] >> 2,
					d = H[v];
					xb(H[v + 1], c) && (v = H[v + 2] / 20, e = Q(d + 1, e[0], e[0] + e[1]), kb(new Int16Array(b, e[2][0], e[2][1] >> 1), q[0].f, v, null, g, !0, new Int32Array(b, e[0][0], e[0][1] >> 2), new Int8Array(b, e[3][0], e[3][1]), 2))
				}
				r[r.length] = {
					type: "line",
					texture: f,
					isSingle: !0,
					data: [ab(), ib()]
				};
				lb()
			}
		}
	}
	return g
}
function Vb(b, a, c, r) {
	var g = c.useZoom;
	if (!a || !a.length) return null;
	c = [];
	for (var n = [], l = 0; l < a.length; l++) {
		var q = a[l],
		x = q[0] >> 2,
		f = H[x];
		if (8 === H[x + 1]) for (q = Q(f + 1, q[0], q[0] + q[1]), x = 0; x < q.length; x++) {
			var e = q[x];
			f = e[0] >> 2;
			var v = H[f];
			f = H[f + 1];
			var d = tb.b(ub, f, "polygon3d", g, r ? Wb: vb, !1, T);
			if (d && d[0]) {
				d = d[0];
				var w = d.H,
				u = d.m;
				if (T) {
					if (T.buildingFill) {
						var k = void 0,
						p = u[0] / 255,
						m = u[1] / 255;
						u = u[2] / 255;
						var h = Math.max(p, m, u),
						E = h - Math.min(p, m, u);
						for (0 === E ? k = 0 : h === p ? k = (m - u) / E % 6 * 60 : h === m ? k = 60 * ((u - p) / E + 2) : h === u && (k = 60 * ((p - m) / E + 4)); 0 > k;) k += 360;
						var t = [k, 0 === h ? 0 : E / h, h];
						t[2] += .05;
						0 > t[2] && (t[2] = 0);
						p = k = u = void 0;
						m = t[2] * t[1];
						h = m * (1 - Math.abs(t[0] / 60 % 2 - 1));
						E = t[2] - m;
						t = t[0];
						0 <= t && 60 > t ? (p = m, k = h, u = 0) : 60 <= t && 120 > t ? (p = h, k = m, u = 0) : 120 <= t && 180 > t ? (p = 0, k = m, u = h) : 180 <= t && 240 > t ? (p = 0, k = h, u = m) : 240 <= t && 300 > t ? (p = h, k = 0, u = m) : 300 <= t && 360 > t && (p = m, k = 0, u = h);
						u = [Math.round(255 < 255 * (p + E) ? 255 : 255 * (p + E)), Math.round(255 < 255 * (k + E) ? 255 : 255 * (k + E)), Math.round(255 < 255 * (u + E) ? 255 : 255 * (u + E))];
						u[3] = w[3] || 255
					}
					xc || (xc = w, yc = u)
				}
				e = Q(v + 1, e[0], e[0] + e[1]);
				v = 0;
				if (d.borderWidth) {
					var A = d.c[0],
					C = d.c[1],
					B = d.c[2],
					z = d.c[3];
					v = d.borderWidth / 4
				}
				for (k = 0; k < e.length; k++) if (p = e[k], m = p[0] >> 2, h = H[m], xb(H[m + 1], g) && (m = H[m + 2], !(m < d.filter))) {
					h = Q(h + 1, p[0], p[0] + p[1]);
					p = new Int32Array(b, h[0][0], h[0][1] >> 2);
					t = new Uint16Array(b, h[1][0], h[1][1] >> 1);
					E = p;
					var F = m,
					G = w[0],
					R = w[1],
					V = w[2],
					K = w[3],
					M = u[0],
					W = u[1],
					Y = u[2],
					X = u[3],
					O = E;
					Ma || (Ma = y._get_block_points_address() >> 2);
					Aa.set(O, Ma);
					O = t;
					Va || (Va = y._get_block_triangle_indices_address() >> 1);
					Ca.set(O, Va);
					y._append_block_data(E.length, t.length, F, G, R, V, K, M, W, Y, X);
					c.push(f);
					n.push(7 * $a());
					if (d.borderWidth && p.length && (E = Array(p.length >> 1), Xb(E, 100 * m), h[2])) for (m = Q(0, h[2][0], h[2][0] + h[2][1]), h = 0; h < m.length; h++) t = m[h],
					G = Q(0, t[0], t[0] + t[1]),
					t = new Int16Array(b, G[0][0], G[0][1] >> 1),
					F = new Uint16Array(b, G[1][0], G[1][1] >> 1),
					G = new Int8Array(b, G[2][0], G[2][1]),
					kb(t, [A, C, B, z], v, E, 2, !0, p, G, 0, F[0], F[1])
				}
			}
		}
	}
	b = {
		type: "line",
		data: [ab(), ib()]
	};
	lb();
	return 0 < $a() ? (Xa || (Xa = y._get_block_vertex_start()), a = new Float32Array(ra.slice(Xa, y._get_block_vertex_end())), Wa || (Wa = y._get_block_index_start()), r = new Uint16Array(ra.slice(Wa, y._get_block_index_end())), c = {
		vertex: a,
		index: r,
		styleIds: c,
		verticesLength: n
	},
	y._reset_block(), c.border = b, c) : null
}
function hd(b) {
	var a = new ArrayBuffer(b.length / 8 * 20),
	c = new Float32Array(a);
	a = new Uint8Array(a);
	for (var r = 0,
	g = 12,
	n = 4,
	l = 0; l < b.length; l += 8) c[r] = b[l],
	c[r + 1] = b[l + 1],
	c[r + 2] = b[l + 2] / 100,
	a[g] = b[l + 3],
	a[g + 1] = b[l + 4],
	a[g + 2] = b[l + 5],
	a[g + 3] = b[l + 6],
	c[n] = b[l + 7],
	r += 5,
	g += 20,
	n += 5;
	return c
}
function dd(b, a, c, r, g) {
	if (!a || !a.length) return 0;
	c = c.useZoom;
	for (var n = 0,
	l = 0,
	q = 0,
	x = 0,
	f = 0; f < a.length; f++) {
		var e = a[f],
		v = e[0] >> 2;
		if (25 === H[v + 1]) {
			e = Q(H[v] + 1, e[0], e[0] + e[1])[0];
			var d = e[0] >> 2;
			v = H[d];
			if ((d = tb.b(ub, H[d + 1], "polygon3d", c, vb, !1, T)) && d[0]) {
				d = d[0];
				var w = d.m;
				yc && (w = yc);
				e = Q(v + 1, e[0], e[0] + e[1])[0];
				v = Q(H[e[0] >> 2] + 1, e[0], e[0] + e[1]);
				e = new Int32Array(b, v[1][0], v[1][1] >> 2);
				n += e.length;
				if (r) {
					d = new Int32Array(b, v[2][0], v[2][1] >> 2);
					v = e;
					for (var u = r,
					k = x,
					p = new DataView(u.buffer), m, h = 0; h < v.length; h += 3) m = h / 3 * 7 + k,
					u[m] = v[h] / 100,
					u[m + 1] = v[h + 1] / 100,
					u[m + 2] = v[h + 2] / 100,
					u[m + 3] = d[h],
					u[m + 4] = d[h + 1],
					u[m + 5] = d[h + 2],
					p.setUint8(4 * m + 24, w[0]),
					p.setUint8(4 * m + 25, w[1]),
					p.setUint8(4 * m + 26, w[2]),
					p.setUint8(4 * m + 27, w[3]);
					v = [];
					for (d = 0; d < e.length / 3; d++) v.push(d + l);
					g.set(v, q);
					x += e.length / 3 * 7;
					q += v.length;
					l += e.length / 3
				}
			}
		}
	}
	return n
}
function cd(b, a) {
	var c = [],
	r = [];
	a = a.useZoom;
	for (var g = 0; g < b.length; g++) {
		var n = b[g],
		l = n[0] >> 2;
		if (24 === H[l + 1]) {
			l = Q(H[l] + 1, n[0], n[0] + n[1])[0];
			n = l[0] >> 2;
			var q = H[n];
			if ((n = tb.b(ub, H[n + 1], "polygon3d", a, vb, !1, T)) && n[0]) for (n = n[0], n = n.m, yc && (n = yc), l = Q(q + 1, l[0], l[0] + l[1]), q = 0; q < l.length; q++) {
				var x = l[q][0] / 4,
				f = c,
				e = r,
				v = c.length / 10,
				d = H[x + 1] / 100,
				w = H[x + 2] / 100,
				u = H[x + 3] / 100,
				k = H[x + 4] / 100,
				p = n[0],
				m = n[1],
				h = n[2];
				for (x = 0; 360 >= x; x += 36) {
					var E = Math.cos(x * Math.PI / 180) * w + u,
					t = Math.sin(x * Math.PI / 180) * w + k,
					A = E + u,
					C = t + k;
					f.push(E, t, 0, A, C, 0, p, m, h, 255);
					f.push(E, t, d, A, C, 0, p, m, h, 255)
				}
				for (x = 0; 10 > x; x++) f = 2 * x + v,
				e.push(f, f + 2, f + 3),
				e.push(f, f + 3, f + 1)
			}
		}
	}
	if (0 < c.length) {
		b = c.length / 10;
		a = new Float32Array(7 * b);
		g = new DataView(a.buffer);
		for (l = 0; l < b; l++) n = 7 * l,
		a[n] = c[10 * l],
		a[n + 1] = c[10 * l + 1],
		a[n + 2] = c[10 * l + 2],
		a[n + 3] = c[10 * l + 3],
		a[n + 4] = c[10 * l + 4],
		a[n + 5] = c[10 * l + 5],
		g.setUint8(4 * n + 24, c[10 * l + 6]),
		g.setUint8(4 * n + 25, c[10 * l + 7]),
		g.setUint8(4 * n + 26, c[10 * l + 8]),
		g.setUint8(4 * n + 27, c[10 * l + 9]);
		c = {
			vertex: a,
			index: new Uint16Array(r)
		}
	} else c = null;
	return c
};