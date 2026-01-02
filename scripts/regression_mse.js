/* Linear Regression Interactive Demo with Fit Animation
    - Single-feature linear model: y_hat = w * x + b
    - Fit button computes closed-form OLS and animates from current (w,b) to optimal (w*, b*)
  */

  const canvas = document.getElementById('plot');
  const ctx = canvas.getContext('2d');

  const xInput = document.getElementById('xInput');
  const yInput = document.getElementById('yInput');
  const plotBtn = document.getElementById('plotBtn');
  const randomBtn = document.getElementById('randomBtn');
  const resetBtn = document.getElementById('resetBtn');

  const weightRange = document.getElementById('weightRange');
  const weightNum = document.getElementById('weightNum');
  const biasRange = document.getElementById('biasRange');
  const biasNum = document.getElementById('biasNum');

  const fitBtn = document.getElementById('fitBtn');
  const stopAnimBtn = document.getElementById('stopAnimBtn');

  const selX = document.getElementById('selX');
  const selY = document.getElementById('selY');
  const predY = document.getElementById('predY');
  const dotProd = document.getElementById('dotProd');
  const riseEl = document.getElementById('rise');
  const runEl = document.getElementById('run');

  let data = { x: [1,2,3,4,5], y: [2,4,6,8,10] };
  let w = parseFloat(weightRange.value);
  let b = parseFloat(biasRange.value);
  let selectedIndex = null;

  let animState = { running: false, startTime: 0, duration: 1000, fromW: w, fromB: b, toW: w, toB: b, rafId: null };

  // coordinate transform
  const padding = 50;
  function computeBounds() {
    const xs = data.x.slice();
    const ys = data.y.slice();
    if (xs.length === 0) return {xmin:0,xmax:1,ymin:0,ymax:1};
    const xmin = Math.min(...xs);
    const xmax = Math.max(...xs);
    const ymin = Math.min(...ys);
    const ymax = Math.max(...ys);
    const xpad = (xmax - xmin) * 0.2 || 1;
    const ypad = (ymax - ymin) * 0.2 || 1;
    return { xmin: xmin - xpad, xmax: xmax + xpad, ymin: ymin - ypad, ymax: ymax + ypad };
  }
  function xToCanvas(x, bounds) {
    const wCanvas = canvas.width - padding*2;
    return padding + (x - bounds.xmin) / (bounds.xmax - bounds.xmin) * wCanvas;
  }
  function yToCanvas(y, bounds) {
    const hCanvas = canvas.height - padding*2;
    return padding + (bounds.ymax - y) / (bounds.ymax - bounds.ymin) * hCanvas;
  }
  function canvasToData(cx, cy, bounds) {
    const wCanvas = canvas.width - padding*2;
    const hCanvas = canvas.height - padding*2;
    const x = bounds.xmin + (cx - padding) / wCanvas * (bounds.xmax - bounds.xmin);
    const y = bounds.ymax - (cy - padding) / hCanvas * (bounds.ymax - bounds.ymin);
    return {x,y};
  }

  function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }

  function drawAxes(bounds) {
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    const y0 = yToCanvas(0, bounds);
    ctx.moveTo(padding, y0);
    ctx.lineTo(canvas.width - padding, y0);
    const x0 = xToCanvas(0, bounds);
    ctx.moveTo(x0, padding);
    ctx.lineTo(x0, canvas.height - padding);
    ctx.stroke();

    ctx.fillStyle = 'rgba(230,238,248,0.7)';
    ctx.font = '12px system-ui, Arial';
    const xRange = bounds.xmax - bounds.xmin;
    const xStep = niceStep(xRange);
    for (let v = Math.ceil(bounds.xmin/xStep)*xStep; v <= bounds.xmax; v += xStep) {
      const cx = xToCanvas(v, bounds);
      ctx.beginPath();
      ctx.moveTo(cx, canvas.height - padding);
      ctx.lineTo(cx, canvas.height - padding + 6);
      ctx.stroke();
      ctx.fillText(round(v,2), cx-10, canvas.height - padding + 20);
    }
    const yRange = bounds.ymax - bounds.ymin;
    const yStep = niceStep(yRange);
    for (let v = Math.ceil(bounds.ymin/yStep)*yStep; v <= bounds.ymax; v += yStep) {
      const cy = yToCanvas(v, bounds);
      ctx.beginPath();
      ctx.moveTo(padding-6, cy);
      ctx.lineTo(padding, cy);
      ctx.stroke();
      ctx.fillText(round(v,2), 6, cy+4);
    }
  }

  function niceStep(range) {
    const rough = range / 6;
    const pow = Math.pow(10, Math.floor(Math.log10(Math.max(rough,1e-9))));
    const norm = rough / pow;
    let step = pow;
    if (norm < 1.5) step = 1 * pow;
    else if (norm < 3) step = 2 * pow;
    else if (norm < 7) step = 5 * pow;
    else step = 10 * pow;
    return step;
  }

  function round(v, d=2) {
    return Math.round(v * Math.pow(10,d)) / Math.pow(10,d);
  }

  function draw() {
    clear();
    const bounds = computeBounds();
    drawAxes(bounds);

    // draw model line
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(56,189,248,0.95)';
    ctx.beginPath();
    const x1 = bounds.xmin;
    const x2 = bounds.xmax;
    const y1 = w * x1 + b;
    const y2 = w * x2 + b;
    ctx.moveTo(xToCanvas(x1,bounds), yToCanvas(y1,bounds));
    ctx.lineTo(xToCanvas(x2,bounds), yToCanvas(y2,bounds));
    ctx.stroke();

    // draw data points and predicted points
    for (let i=0;i<data.x.length;i++){
      const xi = data.x[i];
      const yi = data.y[i];
      const px = xToCanvas(xi,bounds);
      const py = yToCanvas(yi,bounds);
      // actual point
      ctx.fillStyle = 'rgba(52,211,153,0.95)';
      ctx.beginPath();
      ctx.arc(px,py,6,0,Math.PI*2);
      ctx.fill();
      // predicted
      const yhat = w*xi + b;
      const ppx = xToCanvas(xi,bounds);
      const ppy = yToCanvas(yhat,bounds);
      ctx.fillStyle = 'rgba(245,158,11,0.95)';
      ctx.beginPath();
      ctx.arc(ppx,ppy,4,0,Math.PI*2);
      ctx.fill();

      // if selected, draw transformation vector and rise/run
      if (selectedIndex === i) {
        ctx.strokeStyle = 'rgba(167,139,250,0.95)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ppx,ppy);
        ctx.lineTo(px,py);
        ctx.stroke();

        const baseX = xToCanvas(xi,bounds);
        const baseY = yToCanvas(0,bounds);
        ctx.strokeStyle = 'rgba(167,139,250,0.6)';
        ctx.setLineDash([6,4]);
        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        ctx.lineTo(ppx, ppy);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px,py,10,0,Math.PI*2);
        ctx.stroke();
      }
    }

    ctx.fillStyle = 'rgba(230,238,248,0.95)';
    ctx.font = '14px system-ui, Arial';
    ctx.fillText(`Model: y = ${round(w,3)}·x + ${round(b,3)}`, padding, 22);
    ctx.fillStyle = 'rgba(230,238,248,0.6)';
    ctx.font = '12px system-ui, Arial';
    ctx.fillText(`Click a point to inspect dot product and rise/run`, padding, 40);
  }

  // parse input arrays
  function parseArray(str) {
    if (!str) return [];
    return str.split(',').map(s => parseFloat(s.trim())).filter(v => !Number.isNaN(v));
  }

  function updateDataFromInputs() {
    const xs = parseArray(xInput.value);
    const ys = parseArray(yInput.value);
    if (xs.length !== ys.length) {
      const n = Math.min(xs.length, ys.length);
      data.x = xs.slice(0,n);
      data.y = ys.slice(0,n);
    } else {
      data.x = xs;
      data.y = ys;
    }
    selectedIndex = null;
    updateInfo();
    draw();
  }

  function updateInfo() {
    if (selectedIndex === null) {
      selX.textContent = '—';
      selY.textContent = '—';
      predY.textContent = '—';
      dotProd.textContent = '—';
      riseEl.textContent = '—';
      runEl.textContent = '—';
    } else {
      const xi = data.x[selectedIndex];
      const yi = data.y[selectedIndex];
      const yhat = w*xi + b;
      selX.textContent = round(xi,4);
      selY.textContent = round(yi,4);
      predY.textContent = round(yhat,4);
      dotProd.textContent = `${round(w,4)} · ${round(xi,4)} = ${round(w*xi,4)}`;
      const rise = yi - yhat;
      const dx = 1;
      const slopeRise = w * dx;
      riseEl.textContent = `actual - pred = ${round(rise,4)}; slope rise for dx=1 is ${round(slopeRise,4)}`;
      runEl.textContent = `run = ${round(dx,4)} (for slope visualization)`;
    }
  }

  // compute ordinary least squares closed-form solution
  function computeOLS(xs, ys) {
    const n = xs.length;
    if (n === 0) return {w:0,b:0};
    const meanX = xs.reduce((a,c)=>a+c,0)/n;
    const meanY = ys.reduce((a,c)=>a+c,0)/n;
    let num = 0, den = 0;
    for (let i=0;i<n;i++){
      num += (xs[i] - meanX) * (ys[i] - meanY);
      den += (xs[i] - meanX) * (xs[i] - meanX);
    }
    const wOpt = den === 0 ? 0 : num / den;
    const bOpt = meanY - wOpt * meanX;
    return {w: wOpt, b: bOpt};
  }

  // animate parameters from current to target
  function animateTo(targetW, targetB, duration=1200) {
    if (animState.running) cancelAnimation();
    animState.running = true;
    animState.startTime = performance.now();
    animState.duration = duration;
    animState.fromW = w;
    animState.fromB = b;
    animState.toW = targetW;
    animState.toB = targetB;

    function step(now) {
      const t = Math.min(1, (now - animState.startTime) / animState.duration);
      // ease in-out cubic
      const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2;
      w = animState.fromW + (animState.toW - animState.fromW) * ease;
      b = animState.fromB + (animState.toB - animState.fromB) * ease;
      // update UI controls
      weightRange.value = w;
      weightNum.value = round(w,3);
      biasRange.value = b;
      biasNum.value = round(b,3);
      updateInfo();
      draw();

      if (t < 1 && animState.running) {
        animState.rafId = requestAnimationFrame(step);
      } else {
        animState.running = false;
        // ensure exact final values
        w = animState.toW;
        b = animState.toB;
        weightRange.value = w;
        weightNum.value = round(w,3);
        biasRange.value = b;
        biasNum.value = round(b,3);
        updateInfo();
        draw();
      }
    }
    animState.rafId = requestAnimationFrame(step);
  }

  function cancelAnimation() {
    if (animState.rafId) cancelAnimationFrame(animState.rafId);
    animState.running = false;
    animState.rafId = null;
  }

  // event handlers
  plotBtn.addEventListener('click', () => {
    updateDataFromInputs();
  });

  randomBtn.addEventListener('click', () => {
    const n = 8;
    const trueW = (Math.random()*4 - 2);
    const trueB = (Math.random()*10 - 5);
    const xs = [];
    const ys = [];
    for (let i=0;i<n;i++){
      const x = round(i + Math.random()*2,3);
      const noise = (Math.random()-0.5)*3;
      const y = trueW * x + trueB + noise;
      xs.push(round(x,3));
      ys.push(round(y,3));
    }
    xInput.value = xs.join(',');
    yInput.value = ys.join(',');
    updateDataFromInputs();
  });

  resetBtn.addEventListener('click', () => {
    xInput.value = '1,2,3,4,5';
    yInput.value = '2,4,6,8,10';
    weightRange.value = 1; weightNum.value = 1;
    biasRange.value = 0; biasNum.value = 0;
    w = 1; b = 0;
    cancelAnimation();
    updateDataFromInputs();
  });

  weightRange.addEventListener('input', (e) => {
    w = parseFloat(e.target.value);
    weightNum.value = round(w,3);
    cancelAnimation();
    draw();
    updateInfo();
  });
  weightNum.addEventListener('change', (e) => {
    w = parseFloat(e.target.value);
    weightRange.value = w;
    cancelAnimation();
    draw();
    updateInfo();
  });
  biasRange.addEventListener('input', (e) => {
    b = parseFloat(e.target.value);
    biasNum.value = round(b,3);
    cancelAnimation();
    draw();
    updateInfo();
  });
  biasNum.addEventListener('change', (e) => {
    b = parseFloat(e.target.value);
    biasRange.value = b;
    cancelAnimation();
    draw();
    updateInfo();
  });

  fitBtn.addEventListener('click', () => {
    // compute optimal parameters
    const xs = data.x;
    const ys = data.y;
    if (xs.length === 0) return;
    const {w: wOpt, b: bOpt} = computeOLS(xs, ys);
    // animate from current to optimal
    animateTo(wOpt, bOpt, 1200);
  });

  stopAnimBtn.addEventListener('click', () => {
    cancelAnimation();
  });

  // canvas click to select nearest point
  canvas.addEventListener('click', (ev) => {
    const rect = canvas.getBoundingClientRect();
    const cx = (ev.clientX - rect.left) * (canvas.width / rect.width);
    const cy = (ev.clientY - rect.top) * (canvas.height / rect.height);
    const bounds = computeBounds();
    let best = {idx:null,dist:Infinity};
    for (let i=0;i<data.x.length;i++){
      const px = xToCanvas(data.x[i],bounds);
      const py = yToCanvas(data.y[i],bounds);
      const d = Math.hypot(px - cx, py - cy);
      if (d < best.dist) { best = {idx:i,dist:d}; }
    }
    if (best.dist < 20) {
      selectedIndex = best.idx;
    } else {
      selectedIndex = null;
    }
    updateInfo();
    draw();
  });

  // initial draw
  updateDataFromInputs();
  draw();