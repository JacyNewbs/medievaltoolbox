/* Planar pose estimation for a coplanar marker board.
   All markers sit on one flat card, so every object point has z = 0 and a
   single homography maps card millimetres to image pixels. One marker gives
   4 correspondences (exact), two give 8 (least squares, much steadier). */
(function (root) {
  'use strict';

  /* ---- symmetric eigen-decomposition by cyclic Jacobi rotations --------- */
  function jacobiEigen(Ain, n, sweeps) {
    var A = Ain.slice(), V = new Float64Array(n * n), i, j, k, p, q;
    for (i = 0; i < n; i++) V[i * n + i] = 1;
    sweeps = sweeps || 60;
    for (var s = 0; s < sweeps; s++) {
      var off = 0;
      for (p = 0; p < n; p++) for (q = p + 1; q < n; q++) off += A[p * n + q] * A[p * n + q];
      if (off < 1e-24) break;
      for (p = 0; p < n; p++) {
        for (q = p + 1; q < n; q++) {
          var apq = A[p * n + q];
          if (Math.abs(apq) < 1e-30) continue;
          var theta = (A[q * n + q] - A[p * n + p]) / (2 * apq);
          var t = Math.sign(theta || 1) / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
          var c = 1 / Math.sqrt(t * t + 1), sn = t * c;
          for (k = 0; k < n; k++) {
            var akp = A[k * n + p], akq = A[k * n + q];
            A[k * n + p] = c * akp - sn * akq;
            A[k * n + q] = sn * akp + c * akq;
          }
          for (k = 0; k < n; k++) {
            var apk = A[p * n + k], aqk = A[q * n + k];
            A[p * n + k] = c * apk - sn * aqk;
            A[q * n + k] = sn * apk + c * aqk;
          }
          for (k = 0; k < n; k++) {
            var vkp = V[k * n + p], vkq = V[k * n + q];
            V[k * n + p] = c * vkp - sn * vkq;
            V[k * n + q] = sn * vkp + c * vkq;
          }
        }
      }
    }
    var vals = [];
    for (i = 0; i < n; i++) vals.push(A[i * n + i]);
    return { values: vals, vectors: V };   // column k of V matches vals[k]
  }

  function smallestEigenvector(ATA, n) {
    var e = jacobiEigen(ATA, n);
    var best = 0;
    for (var i = 1; i < n; i++) if (e.values[i] < e.values[best]) best = i;
    var v = new Float64Array(n);
    for (var r = 0; r < n; r++) v[r] = e.vectors[r * n + best];
    return v;
  }

  /* ---- homography from >=4 planar correspondences ---------------------- */
  function computeHomography(obj, img) {
    var n = obj.length, i;
    if (n < 4) return null;

    // Hartley normalisation — without it the DLT is badly conditioned when
    // object units are millimetres and image units are pixels.
    function normalise(pts) {
      var cx = 0, cy = 0;
      for (i = 0; i < n; i++) { cx += pts[i][0]; cy += pts[i][1]; }
      cx /= n; cy /= n;
      var d = 0;
      for (i = 0; i < n; i++) d += Math.hypot(pts[i][0] - cx, pts[i][1] - cy);
      d /= n;
      var s = d > 1e-12 ? Math.SQRT2 / d : 1;
      var out = [];
      for (i = 0; i < n; i++) out.push([(pts[i][0] - cx) * s, (pts[i][1] - cy) * s]);
      return { pts: out, T: [s, 0, -s * cx, 0, s, -s * cy, 0, 0, 1] };
    }

    var no = normalise(obj), ni = normalise(img);
    var A = new Float64Array(81);          // accumulate A^T A directly (9x9)
    for (i = 0; i < n; i++) {
      var X = no.pts[i][0], Y = no.pts[i][1];
      var u = ni.pts[i][0], v = ni.pts[i][1];
      var r1 = [-X, -Y, -1, 0, 0, 0, u * X, u * Y, u];
      var r2 = [0, 0, 0, -X, -Y, -1, v * X, v * Y, v];
      for (var a = 0; a < 9; a++)
        for (var b = 0; b < 9; b++)
          A[a * 9 + b] += r1[a] * r1[b] + r2[a] * r2[b];
    }
    var h = smallestEigenvector(A, 9);

    // undo normalisation: H = Ti^-1 * Hn * To
    function inv3(m) {
      var d = m[0]*(m[4]*m[8]-m[5]*m[7]) - m[1]*(m[3]*m[8]-m[5]*m[6]) + m[2]*(m[3]*m[7]-m[4]*m[6]);
      if (Math.abs(d) < 1e-15) return null;
      var id = 1/d;
      return [ (m[4]*m[8]-m[5]*m[7])*id, (m[2]*m[7]-m[1]*m[8])*id, (m[1]*m[5]-m[2]*m[4])*id,
               (m[5]*m[6]-m[3]*m[8])*id, (m[0]*m[8]-m[2]*m[6])*id, (m[2]*m[3]-m[0]*m[5])*id,
               (m[3]*m[7]-m[4]*m[6])*id, (m[1]*m[6]-m[0]*m[7])*id, (m[0]*m[4]-m[1]*m[3])*id ];
    }
    function mul3(a, b) {
      var o = new Array(9);
      for (var r = 0; r < 3; r++) for (var c = 0; c < 3; c++) {
        o[r*3+c] = a[r*3]*b[c] + a[r*3+1]*b[3+c] + a[r*3+2]*b[6+c];
      }
      return o;
    }
    var Tii = inv3(ni.T);
    if (!Tii) return null;
    var H = mul3(Tii, mul3(Array.prototype.slice.call(h), no.T));
    if (Math.abs(H[8]) > 1e-15) for (i = 0; i < 9; i++) H[i] /= H[8];
    return H;
  }

  /* ---- pose from homography -------------------------------------------- */
  /* K = {fx, fy, cx, cy}. Returns rotation R (row-major 3x3) and translation
     t in the same units as the object points, in OpenCV camera convention:
     +x right, +y down, +z into the scene. */
  function poseFromHomography(H, K) {
    if (!H) return null;
    // A = K^-1 H
    var a = [
      (H[0] - K.cx * H[6]) / K.fx, (H[1] - K.cx * H[7]) / K.fx, (H[2] - K.cx * H[8]) / K.fx,
      (H[3] - K.cy * H[6]) / K.fy, (H[4] - K.cy * H[7]) / K.fy, (H[5] - K.cy * H[8]) / K.fy,
      H[6], H[7], H[8]
    ];
    var h1 = [a[0], a[3], a[6]], h2 = [a[1], a[4], a[7]], h3 = [a[2], a[5], a[8]];
    var n1 = Math.hypot(h1[0], h1[1], h1[2]), n2 = Math.hypot(h2[0], h2[1], h2[2]);
    if (n1 < 1e-12 || n2 < 1e-12) return null;
    var lambda = 1 / ((n1 + n2) / 2);

    var r1 = h1.map(function (v) { return v * lambda; });
    var r2 = h2.map(function (v) { return v * lambda; });
    var t  = h3.map(function (v) { return v * lambda; });

    // the card must be in front of the camera
    if (t[2] < 0) { r1 = r1.map(neg); r2 = r2.map(neg); t = t.map(neg); }
    function neg(v) { return -v; }

    // force r1,r2 orthonormal (Gram-Schmidt), then r3 = r1 x r2
    var d = r1[0]*r2[0] + r1[1]*r2[1] + r1[2]*r2[2];
    var e1 = [], e2 = [];
    for (var i = 0; i < 3; i++) { e1[i] = r1[i] - d/2 * r2[i]; e2[i] = r2[i] - d/2 * r1[i]; }
    var l1 = Math.hypot(e1[0], e1[1], e1[2]), l2 = Math.hypot(e2[0], e2[1], e2[2]);
    if (l1 < 1e-12 || l2 < 1e-12) return null;
    for (i = 0; i < 3; i++) { e1[i] /= l1; e2[i] /= l2; }
    var e3 = [e1[1]*e2[2] - e1[2]*e2[1], e1[2]*e2[0] - e1[0]*e2[2], e1[0]*e2[1] - e1[1]*e2[0]];

    return {
      R: [e1[0], e2[0], e3[0],
          e1[1], e2[1], e3[1],
          e1[2], e2[2], e3[2]],
      t: t
    };
  }

  /* ---- Rodrigues, for a minimal 6-parameter pose ------------------------ */
  function rodrigues(w) {
    var th = Math.hypot(w[0], w[1], w[2]);
    if (th < 1e-12) return [1,0,0, 0,1,0, 0,0,1];
    var x = w[0]/th, y = w[1]/th, z = w[2]/th;
    var c = Math.cos(th), s = Math.sin(th), C = 1 - c;
    return [ x*x*C + c,   x*y*C - z*s, x*z*C + y*s,
             y*x*C + z*s, y*y*C + c,   y*z*C - x*s,
             z*x*C - y*s, z*y*C + x*s, z*z*C + c ];
  }
  function toRodrigues(R) {
    var tr = R[0] + R[4] + R[8];
    var th = Math.acos(Math.max(-1, Math.min(1, (tr - 1) / 2)));
    if (th < 1e-9) return [0, 0, 0];
    var k = th / (2 * Math.sin(th));
    return [k * (R[7] - R[5]), k * (R[2] - R[6]), k * (R[3] - R[1])];
  }

  function solve6(A, b) {                       // Gaussian elimination, 6x6
    var n = 6, M = [], i, j, k;
    for (i = 0; i < n; i++) { M[i] = []; for (j = 0; j < n; j++) M[i][j] = A[i*n+j]; M[i][n] = b[i]; }
    for (i = 0; i < n; i++) {
      var piv = i;
      for (k = i + 1; k < n; k++) if (Math.abs(M[k][i]) > Math.abs(M[piv][i])) piv = k;
      if (Math.abs(M[piv][i]) < 1e-14) return null;
      var tmp = M[i]; M[i] = M[piv]; M[piv] = tmp;
      for (k = i + 1; k < n; k++) {
        var f = M[k][i] / M[i][i];
        for (j = i; j <= n; j++) M[k][j] -= f * M[i][j];
      }
    }
    var x = new Array(n);
    for (i = n - 1; i >= 0; i--) {
      var s = M[i][n];
      for (j = i + 1; j < n; j++) s -= M[i][j] * x[j];
      x[i] = s / M[i][i];
    }
    return x;
  }

  /* Levenberg-Marquardt on reprojection error. The closed-form homography
     pose is only an initialisation — it is exact on clean input but swings
     wildly with a pixel of corner noise, because a small planar target
     constrains depth weakly. Refining against the actual residuals is what
     makes the pose usable. Jacobian is numerical: 6 params, 16-ish residuals,
     so the cost is negligible next to detection. */
  function refinePose(pose, obj, img, K, iters) {
    var p = toRodrigues(pose.R).concat(pose.t.slice());
    var n = obj.length, lambda = 1e-3, i, j;

    function residuals(par) {
      var R = rodrigues(par), r = new Array(2 * n);
      for (var q = 0; q < n; q++) {
        var X = obj[q][0], Y = obj[q][1];
        var cz = R[6]*X + R[7]*Y + par[5];
        if (Math.abs(cz) < 1e-9) return null;
        var cx = R[0]*X + R[1]*Y + par[3];
        var cy = R[3]*X + R[4]*Y + par[4];
        r[2*q]     = K.fx * cx / cz + K.cx - img[q][0];
        r[2*q + 1] = K.fy * cy / cz + K.cy - img[q][1];
      }
      return r;
    }
    function cost(r) { var s = 0; for (var q = 0; q < r.length; q++) s += r[q]*r[q]; return s; }

    var r0 = residuals(p);
    if (!r0) return pose;
    var c0 = cost(r0);

    for (var it = 0; it < (iters || 12); it++) {
      // numerical Jacobian
      var J = [];
      for (j = 0; j < 6; j++) {
        var step = (j < 3) ? 1e-6 : 1e-4;
        var pp = p.slice(); pp[j] += step;
        var rp = residuals(pp);
        if (!rp) return pose;
        var col = new Array(2 * n);
        for (i = 0; i < 2 * n; i++) col[i] = (rp[i] - r0[i]) / step;
        J.push(col);
      }
      var JTJ = new Float64Array(36), JTr = new Array(6).fill(0);
      for (i = 0; i < 6; i++) {
        for (j = 0; j < 6; j++) {
          var s = 0;
          for (var q = 0; q < 2 * n; q++) s += J[i][q] * J[j][q];
          JTJ[i*6 + j] = s;
        }
        var sr = 0;
        for (q = 0; q < 2 * n; q++) sr += J[i][q] * r0[q];
        JTr[i] = -sr;
      }
      var damped = Float64Array.from(JTJ);
      for (i = 0; i < 6; i++) damped[i*6 + i] *= (1 + lambda);
      var dp = solve6(damped, JTr);
      if (!dp) break;

      var pn = p.slice();
      for (i = 0; i < 6; i++) pn[i] += dp[i];
      var rn = residuals(pn);
      if (!rn) { lambda *= 10; continue; }
      var cn = cost(rn);
      if (cn < c0) {
        p = pn; r0 = rn;
        if (c0 - cn < 1e-9 * c0) { c0 = cn; break; }
        c0 = cn; lambda = Math.max(lambda * 0.3, 1e-9);
      } else {
        lambda *= 10;
        if (lambda > 1e7) break;
      }
    }

    return { R: rodrigues(p), t: [p[3], p[4], p[5]] };
  }

  /* ---- board: marker corners in card millimetres ------------------------ */
  /* Detector corner order is the marker's own TL, TR, BR, BL. On the card,
     +x is right and +y is up, so TL = (cx - s/2, cy + s/2). */
  function boardObjectPoints(face) {
    var map = {};
    face.forEach(function (m) {
      var s = m.size_mm / 2;
      map[m.id] = [
        [m.cx_mm - s, m.cy_mm + s],
        [m.cx_mm + s, m.cy_mm + s],
        [m.cx_mm + s, m.cy_mm - s],
        [m.cx_mm - s, m.cy_mm - s]
      ];
    });
    return map;
  }

  /* Fuse every detected marker on one face into a single card pose. */
  function estimateBoardPose(detections, objMap, K) {
    var obj = [], img = [];
    detections.forEach(function (d) {
      var o = objMap[d.id];
      if (!o) return;
      for (var i = 0; i < 4; i++) { obj.push(o[i]); img.push(d.corners[i]); }
    });
    if (obj.length < 4) return null;
    var pose = poseFromHomography(computeHomography(obj, img), K);
    if (!pose) return null;
    pose = refinePose(pose, obj, img, K, 15);

    // reprojection error, in pixels — the honest quality signal
    var err = 0;
    for (var i = 0; i < obj.length; i++) {
      var X = obj[i][0], Y = obj[i][1];
      var cx = pose.R[0]*X + pose.R[1]*Y + pose.t[0];
      var cy = pose.R[3]*X + pose.R[4]*Y + pose.t[1];
      var cz = pose.R[6]*X + pose.R[7]*Y + pose.t[2];
      if (cz <= 1e-9) return null;
      var u = K.fx * cx / cz + K.cx, v = K.fy * cy / cz + K.cy;
      err += Math.hypot(u - img[i][0], v - img[i][1]);
    }
    pose.reprojError = err / obj.length;
    pose.markers = obj.length / 4;
    return pose;
  }

  var api = {
    computeHomography: computeHomography,
    poseFromHomography: poseFromHomography,
    boardObjectPoints: boardObjectPoints,
    estimateBoardPose: estimateBoardPose,
    refinePose: refinePose,
    rodrigues: rodrigues,
    jacobiEigen: jacobiEigen
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.BoardPose = api;
})(typeof self !== 'undefined' ? self : this);
