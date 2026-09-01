/* ArUco DICT_4X4_50 detector — plain JavaScript, no dependencies.
   Codebook extracted from OpenCV 4.13 cv2.aruco.DICT_4X4_50.
   Each entry is the 4x4 payload packed row-major, MSB = top-left, 1 = white. */
(function (root) {
  'use strict';

  var CODES = [
    0xb532,0x0f9a,0x332d,0x9946,0x549e,0x79cd,0x9e2e,0xc4f2,0x8e1b,0x4b7c,
    0x2d63,0xd8a5,0x1c47,0x6ad1,0xa3e8,0x57b0,0xe071,0x3f26,0x8c95,0x76af,
    0x868b,0x21da,0xb8c4,0x4e59,0xf30c,0x0563,0xcaa7,0x9d38,0x6c1e,0x37f5,
    0xa196,0x5eb2,0xe4d0,0x18ff,0xbb27,0x724a,0xdf61,0x03cb,0x95ed,0x4a04,
    0xc613,0x2f8e,0x80d7,0xb079,0x6e3c,0xd42b,0x1af6,0xf958,0x53ba,0x27e0
  ];

  /* ---------- small helpers ------------------------------------------- */

  function toGray(rgba, w, h) {
    var g = new Uint8Array(w * h);
    for (var i = 0, p = 0; i < g.length; i++, p += 4) {
      g[i] = (rgba[p] * 77 + rgba[p + 1] * 151 + rgba[p + 2] * 28) >> 8;
    }
    return g;
  }

  /* Separable 3x3 box blur. Sensor speckle otherwise does two bad things:
     it spawns thousands of junk contours (slow) and it drags individual cell
     samples toward the midpoint (missed detections). */
  function boxBlur3(src, w, h) {
    var tmp = new Uint8Array(w * h), out = new Uint8Array(w * h), x, y, i;
    for (y = 0; y < h; y++) {
      for (x = 0; x < w; x++) {
        i = y * w + x;
        var l = x > 0 ? src[i - 1] : src[i], r = x < w - 1 ? src[i + 1] : src[i];
        tmp[i] = (l + src[i] + r) / 3;
      }
    }
    for (y = 0; y < h; y++) {
      for (x = 0; x < w; x++) {
        i = y * w + x;
        var u = y > 0 ? tmp[i - w] : tmp[i], d = y < h - 1 ? tmp[i + w] : tmp[i];
        out[i] = (u + tmp[i] + d) / 3;
      }
    }
    return out;
  }

  /* Adaptive mean threshold via integral image. Returns 1 where dark (ink). */
  function adaptiveThreshold(gray, w, h, block, C) {
    var integral = new Int32Array((w + 1) * (h + 1));
    for (var y = 0; y < h; y++) {
      var rowSum = 0;
      for (var x = 0; x < w; x++) {
        rowSum += gray[y * w + x];
        integral[(y + 1) * (w + 1) + (x + 1)] = integral[y * (w + 1) + (x + 1)] + rowSum;
      }
    }
    var half = block >> 1, out = new Uint8Array(w * h);
    for (var yy = 0; yy < h; yy++) {
      var y0 = Math.max(0, yy - half), y1 = Math.min(h - 1, yy + half);
      for (var xx = 0; xx < w; xx++) {
        var x0 = Math.max(0, xx - half), x1 = Math.min(w - 1, xx + half);
        var area = (x1 - x0 + 1) * (y1 - y0 + 1);
        var sum = integral[(y1 + 1) * (w + 1) + (x1 + 1)]
                - integral[y0 * (w + 1) + (x1 + 1)]
                - integral[(y1 + 1) * (w + 1) + x0]
                + integral[y0 * (w + 1) + x0];
        out[yy * w + xx] = (gray[yy * w + xx] * area < sum - C * area) ? 1 : 0;
      }
    }
    return out;
  }

  /* Moore-neighbourhood boundary following over 1-valued (dark) regions. */
  var NB = [[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];

  function findContours(bin, w, h, minPerimeter) {
    var seen = new Uint8Array(w * h), contours = [];
    for (var y = 1; y < h - 1; y++) {
      for (var x = 1; x < w - 1; x++) {
        var idx = y * w + x;
        if (!bin[idx] || seen[idx] || bin[idx - 1]) continue;  // left edge of a region
        var contour = [], cx = x, cy = y, dir = 6, steps = 0;
        var maxSteps = 4 * (w + h);
        do {
          contour.push([cx, cy]);
          seen[cy * w + cx] = 1;
          var found = false;
          for (var k = 0; k < 8; k++) {
            var nd = (dir + k) & 7;
            var nx = cx + NB[nd][0], ny = cy + NB[nd][1];
            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
            if (bin[ny * w + nx]) {
              cx = nx; cy = ny; dir = (nd + 5) & 7; found = true; break;
            }
          }
          if (!found) break;
          steps++;
        } while ((cx !== x || cy !== y) && steps < maxSteps);
        if (contour.length >= minPerimeter) contours.push(contour);
      }
    }
    return contours;
  }

  function perpDist(p, a, b) {
    var dx = b[0] - a[0], dy = b[1] - a[1];
    var n = Math.abs(dy * p[0] - dx * p[1] + b[0] * a[1] - b[1] * a[0]);
    return n / Math.sqrt(dx * dx + dy * dy || 1);
  }

  /* Douglas-Peucker on an OPEN chain; both endpoints are always kept. */
  function dpOpen(pts, eps) {
    if (pts.length < 3) return pts.slice();
    var stack = [[0, pts.length - 1]], keep = new Uint8Array(pts.length);
    keep[0] = keep[pts.length - 1] = 1;
    while (stack.length) {
      var seg = stack.pop(), s = seg[0], e = seg[1], maxD = 0, maxI = -1;
      for (var i = s + 1; i < e; i++) {
        var d = perpDist(pts[i], pts[s], pts[e]);
        if (d > maxD) { maxD = d; maxI = i; }
      }
      if (maxD > eps && maxI > 0) { keep[maxI] = 1; stack.push([s, maxI], [maxI, e]); }
    }
    var out = [];
    for (var j = 0; j < pts.length; j++) if (keep[j]) out.push(pts[j]);
    return out;
  }

  /* A traced contour is a CLOSED loop whose start point is wherever the scan
     happened to enter it — usually mid-edge. Running DP straight down the
     chain therefore keeps that arbitrary point as a fifth vertex. Split the
     loop at its two most distant points first (both are genuine corners on a
     convex shape), approximate each half, then rejoin. */
  function approxPoly(pts, eps) {
    var n = pts.length;
    if (n < 4) return pts.slice();

    function far(fromIdx) {
      var bi = 0, bd = -1;
      for (var i = 0; i < n; i++) {
        var dx = pts[i][0] - pts[fromIdx][0], dy = pts[i][1] - pts[fromIdx][1];
        var d = dx * dx + dy * dy;
        if (d > bd) { bd = d; bi = i; }
      }
      return bi;
    }
    var i0 = far(0), i1 = far(i0);
    var a = Math.min(i0, i1), b = Math.max(i0, i1);
    if (b - a < 2 || (n - (b - a)) < 2) return dpOpen(pts, eps);

    var chainA = pts.slice(a, b + 1);
    var chainB = pts.slice(b).concat(pts.slice(0, a + 1));
    var rA = dpOpen(chainA, eps), rB = dpOpen(chainB, eps);
    return rA.slice(0, -1).concat(rB.slice(0, -1));
  }

  function polyArea(q) {
    var a = 0;
    for (var i = 0; i < q.length; i++) {
      var j = (i + 1) % q.length;
      a += q[i][0] * q[j][1] - q[j][0] * q[i][1];
    }
    return a / 2;
  }

  function isConvex(q) {
    var sign = 0;
    for (var i = 0; i < 4; i++) {
      var a = q[i], b = q[(i + 1) % 4], c = q[(i + 2) % 4];
      var cr = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
      if (cr !== 0) {
        if (sign === 0) sign = cr > 0 ? 1 : -1;
        else if ((cr > 0 ? 1 : -1) !== sign) return false;
      }
    }
    return true;
  }

  /* Homography mapping unit square (0..1)^2 onto the quad. */
  function homography(q) {
    var x0 = q[0][0], y0 = q[0][1], x1 = q[1][0], y1 = q[1][1];
    var x2 = q[2][0], y2 = q[2][1], x3 = q[3][0], y3 = q[3][1];
    var sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
    if (Math.abs(sx) < 1e-9 && Math.abs(sy) < 1e-9) {
      return [x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0, 0];
    }
    var dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2;
    var den = dx1 * dy2 - dx2 * dy1;
    if (Math.abs(den) < 1e-12) return null;
    var g = (sx * dy2 - dx2 * sy) / den;
    var hh = (dx1 * sy - sx * dy1) / den;
    return [x1 - x0 + g * x1, x3 - x0 + hh * x3, x0,
            y1 - y0 + g * y1, y3 - y0 + hh * y3, y0, g, hh];
  }

  function applyH(H, u, v) {
    var d = H[6] * u + H[7] * v + 1;
    return [(H[0] * u + H[1] * v + H[2]) / d, (H[3] * u + H[4] * v + H[5]) / d];
  }

  function sample(gray, w, h, x, y) {
    var xi = Math.round(x), yi = Math.round(y);
    if (xi < 0 || yi < 0 || xi >= w || yi >= h) return 255;
    return gray[yi * w + xi];
  }

  function rotateCode(v) {
    var g = [], r, c;
    for (r = 0; r < 4; r++) { g[r] = []; for (c = 0; c < 4; c++) g[r][c] = (v >> (15 - (r * 4 + c))) & 1; }
    var out = 0;
    for (r = 0; r < 4; r++) for (c = 0; c < 4; c++) out = (out << 1) | g[3 - c][r];
    return out;
  }

  function popcount(n) { var c = 0; while (n) { n &= n - 1; c++; } return c; }

  var ROT = (function () {
    var table = [];
    for (var i = 0; i < CODES.length; i++) {
      var v = CODES[i];
      for (var k = 0; k < 4; k++) { table.push({ id: i, rot: k, code: v }); v = rotateCode(v); }
    }
    return table;
  })();

  function matchCode(code, maxErr) {
    var best = null, bestD = 99;
    for (var i = 0; i < ROT.length; i++) {
      var d = popcount(code ^ ROT[i].code);
      if (d < bestD) { bestD = d; best = ROT[i]; }
    }
    return (bestD <= maxErr) ? { id: best.id, rot: best.rot, err: bestD } : null;
  }

  /* ---------- main entry ------------------------------------------------ */

  function detect(rgba, w, h, opts) {
    opts = opts || {};
    var block = opts.block || (((Math.round(w / 22) | 1) < 3) ? 3 : (Math.round(w / 22) | 1));
    var C = (opts.C === undefined) ? 7 : opts.C;
    var minSide = opts.minSide || Math.max(12, w * 0.03);
    var maxErr = (opts.maxErr === undefined) ? 1 : opts.maxErr;

    var maxCandidates = opts.maxCandidates || 60;

    var gray = toGray(rgba, w, h);
    if (opts.blur !== false) gray = boxBlur3(gray, w, h);
    var bin = adaptiveThreshold(gray, w, h, block, C);
    var contours = findContours(bin, w, h, minSide * 3);

    /* A noisy frame can throw thousands of speckle contours. Markers are among
       the largest things in view, so rank by size and only work the top few —
       this bounds the per-frame cost regardless of how bad the image is. */
    if (contours.length > maxCandidates) {
      contours.sort(function (a, b) { return b.length - a.length; });
      contours = contours.slice(0, maxCandidates);
    }

    var results = [];

    for (var ci = 0; ci < contours.length; ci++) {
      var cont = contours[ci];
      var poly = approxPoly(cont, Math.max(3, cont.length * 0.02));
      if (poly.length !== 4) continue;
      if (!isConvex(poly)) continue;

      var area = polyArea(poly);
      if (area < 0) { poly = [poly[0], poly[3], poly[2], poly[1]]; area = -area; }
      if (area < minSide * minSide) continue;

      var shortest = Infinity;
      for (var e = 0; e < 4; e++) {
        var a = poly[e], b = poly[(e + 1) % 4];
        shortest = Math.min(shortest, Math.hypot(b[0] - a[0], b[1] - a[1]));
      }
      if (shortest < minSide) continue;

      var H = homography(poly);
      if (!H) continue;

      // 6x6 grid: one border cell each side plus the 4x4 payload
      var cells = [], ok = true;
      for (var r = 0; r < 6 && ok; r++) {
        cells[r] = [];
        for (var cc = 0; cc < 6; cc++) {
          var acc = 0, n = 0;
          for (var sy = 1; sy <= 3; sy++) {
            for (var sxi = 1; sxi <= 3; sxi++) {
              var u = (cc + sxi / 4) / 6, v = (r + sy / 4) / 6;
              var pt = applyH(H, u, v);
              acc += sample(gray, w, h, pt[0], pt[1]); n++;
            }
          }
          cells[r][cc] = acc / n;
        }
      }

      // border ring must be dark, payload must have contrast
      var borderSum = 0, borderN = 0, innerVals = [];
      for (var rr = 0; rr < 6; rr++) {
        for (var c2 = 0; c2 < 6; c2++) {
          if (rr === 0 || rr === 5 || c2 === 0 || c2 === 5) { borderSum += cells[rr][c2]; borderN++; }
          else innerVals.push(cells[rr][c2]);
        }
      }
      var borderMean = borderSum / borderN;
      var innerMin = Math.min.apply(null, innerVals);
      var innerMax = Math.max.apply(null, innerVals);
      var spread = innerMax - innerMin;
      if (spread < 40) continue;                           // no real payload contrast
      var mid = (innerMin + innerMax) / 2;
      if (borderMean > mid - spread * 0.15) continue;      // border is not clearly the dark ring

      /* Every payload cell must sit decisively on one side of the midpoint.
         Random texture produces cells hovering near mid, which is how noise
         sneaks through as a valid-looking code. */
      var margins = [], code = 0;
      for (var pr = 0; pr < 4; pr++) {
        for (var pc = 0; pc < 4; pc++) {
          var val = cells[pr + 1][pc + 1];
          margins.push(Math.abs(val - mid));
          code = (code << 1) | (val > mid ? 1 : 0);
        }
      }
      margins.sort(function (a, b) { return a - b; });
      if (margins[0] < spread * 0.12) continue;            // weakest cell is ambiguous
      if (margins[8] < spread * 0.30) continue;            // median cell is ambiguous

      var m = matchCode(code, maxErr);
      if (!m) continue;

      // rotate corners so index 0 is the marker's own top-left
      var corners = poly.slice();
      for (var k2 = 0; k2 < m.rot; k2++) corners.unshift(corners.pop());

      results.push({ id: m.id, rot: m.rot, err: m.err, corners: corners, area: area });
    }

    // drop duplicates, keeping the largest detection of each id
    var byId = {};
    results.forEach(function (r) {
      if (!byId[r.id] || byId[r.id].area < r.area) byId[r.id] = r;
    });
    return Object.keys(byId).map(function (k) { return byId[k]; });
  }

  var api = { detect: detect, CODES: CODES,
    _dbg: { toGray: toGray, adaptiveThreshold: adaptiveThreshold, findContours: findContours,
            approxPoly: approxPoly, isConvex: isConvex, polyArea: polyArea,
            homography: homography, applyH: applyH, matchCode: matchCode,
            boxBlur3: boxBlur3 } };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.Aruco4x4 = api;
})(typeof self !== 'undefined' ? self : this);
