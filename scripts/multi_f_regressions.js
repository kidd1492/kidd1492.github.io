// 2-Feature Linear Regression Demo
// Model: y_hat = w1 * x1 + w2 * x2 + b

const x1Input = document.getElementById('x1Input');
const x2Input = document.getElementById('x2Input');
const yInput  = document.getElementById('yInput');

const plotBtn  = document.getElementById('plotBtn');
const randomBtn = document.getElementById('randomBtn');
const resetBtn  = document.getElementById('resetBtn');

const w1Range = document.getElementById('w1Range');
const w1Num   = document.getElementById('w1Num');
const w2Range = document.getElementById('w2Range');
const w2Num   = document.getElementById('w2Num');
const bRange  = document.getElementById('bRange');
const bNum    = document.getElementById('bNum');

const fitBtn      = document.getElementById('fitBtn');
const stopAnimBtn = document.getElementById('stopAnimBtn');

const selX      = document.getElementById('selX');
const selY      = document.getElementById('selY');
const predY     = document.getElementById('predY');
const dotProdEl = document.getElementById('dotProd');
const residualEl= document.getElementById('residual');

const dataBody  = document.getElementById('dataBody');
const plot3dDiv = document.getElementById('plot3d');

let data = {
  x1: [1,2,3,4,5],
  x2: [2,1,3,2,4],
  y:  [3,3,6,5,9]
};

let w1 = parseFloat(w1Range.value);
let w2 = parseFloat(w2Range.value);
let b  = parseFloat(bRange.value);

let selectedIndex = null;

let animState = {
  running: false,
  startTime: 0,
  duration: 1000,
  fromW1: w1,
  fromW2: w2,
  fromB:  b,
  toW1:   w1,
  toW2:   w2,
  toB:    b,
  rafId:  null
};

// Helpers
function parseArray(str) {
  if (!str) return [];
  return str.split(',')
    .map(s => parseFloat(s.trim()))
    .filter(v => !Number.isNaN(v));
}

function round(v, d=3){
  const p = Math.pow(10,d);
  return Math.round(v*p)/p;
}

// Data update
function updateDataFromInputs(){
  const x1s = parseArray(x1Input.value);
  const x2s = parseArray(x2Input.value);
  const ys  = parseArray(yInput.value);

  const n = Math.min(x1s.length, x2s.length, ys.length);
  data.x1 = x1s.slice(0,n);
  data.x2 = x2s.slice(0,n);
  data.y  = ys.slice(0,n);
  selectedIndex = null;
  updateTable();
  updateInfo();
  draw3D();
}

// Table + info
function updateTable(){
  dataBody.innerHTML = '';
  for (let i=0;i<data.y.length;i++){
    const yi   = data.y[i];
    const x1i  = data.x1[i];
    const x2i  = data.x2[i];
    const yhat = w1*x1i + w2*x2i + b;
    const resid = yi - yhat;

    const tr = document.createElement('tr');
    tr.dataset.index = i;
    if (selectedIndex === i) tr.classList.add('selected');

    tr.innerHTML = `
      <td>${i}</td>
      <td>${round(x1i,3)}</td>
      <td>${round(x2i,3)}</td>
      <td>${round(yi,3)}</td>
      <td>${round(yhat,3)}</td>
      <td>${round(resid,3)}</td>
    `;
    tr.addEventListener('click', () => {
      selectedIndex = i;
      updateInfo();
      updateTable();
    });

    dataBody.appendChild(tr);
  }
}

function updateInfo(){
  if (selectedIndex == null || selectedIndex >= data.y.length){
    selX.textContent      = '—';
    selY.textContent      = '—';
    predY.textContent     = '—';
    dotProdEl.textContent = '—';
    residualEl.textContent= '—';
    return;
  }

  const i   = selectedIndex;
  const x1i = data.x1[i];
  const x2i = data.x2[i];
  const yi  = data.y[i];
  const dot = w1*x1i + w2*x2i;
  const yhat= dot + b;
  const resid = yi - yhat;

  selX.textContent  = `(${round(x1i,3)}, ${round(x2i,3)})`;
  selY.textContent  = round(yi,3);
  predY.textContent = round(yhat,3);
  dotProdEl.textContent = `w·x = ${round(w1,3)}·${round(x1i,3)} + ${round(w2,3)}·${round(x2i,3)} = ${round(dot,3)}`;
  residualEl.textContent= round(resid,3);
}

// 3D plot
function draw3D(){
  const xs1 = data.x1;
  const xs2 = data.x2;
  const ys  = data.y;

  if (xs1.length === 0){
    Plotly.newPlot(plot3dDiv, [], {
      paper_bgcolor:'rgba(0,0,0,0)',
      plot_bgcolor:'rgba(0,0,0,0)',
      scene:{}
    }, {responsive:true});
    return;
  }

  // scatter points
  const scatter = {
    x: xs1,
    y: xs2,
    z: ys,
    mode: 'markers',
    type: 'scatter3d',
    marker: {
      color: '#34d399',
      size: 6
    },
    name: 'Data'
  };

  // predicted points
  const zPred = xs1.map((x1i, idx) => w1*x1i + w2*xs2[idx] + b);
  const scatterPred = {
    x: xs1,
    y: xs2,
    z: zPred,
    mode: 'markers',
    type: 'scatter3d',
    marker: {
      color: '#fbbf24',
      size: 4
    },
    name: 'Predictions'
  };

  // regression plane
  const gridSize = 15;
  const x1Min = Math.min(...xs1), x1Max = Math.max(...xs1);
  const x2Min = Math.min(...xs2), x2Max = Math.max(...xs2);
  const x1Grid = [];
  const x2Grid = [];
  const zGrid  = [];

  for (let i=0;i<gridSize;i++){
    const rowX1 = [];
    const rowX2 = [];
    const rowZ  = [];
    const t = i/(gridSize-1);
    const x1ValRow = x1Min + t*(x1Max - x1Min);
    for (let j=0;j<gridSize;j++){
      const s = j/(gridSize-1);
      const x2Val = x2Min + s*(x2Max - x2Min);
      rowX1.push(x1ValRow);
      rowX2.push(x2Val);
      rowZ.push(w1*x1ValRow + w2*x2Val + b);
    }
    x1Grid.push(rowX1);
    x2Grid.push(rowX2);
    zGrid.push(rowZ);
  }

  const plane = {
    x: x1Grid,
    y: x2Grid,
    z: zGrid,
    type: 'surface',
    colorscale: 'Blues',
    showscale: false,
    opacity: 0.6,
    name: 'Regression plane'
  };

  const layout = {
    paper_bgcolor:'rgba(0,0,0,0)',
    plot_bgcolor:'rgba(0,0,0,0)',
    margin: {l:0,r:0,b:0,t:0},
    scene: {
      xaxis: {title:'x1', gridcolor:'rgba(148,163,184,0.4)', zerolinecolor:'rgba(148,163,184,0.7)'},
      yaxis: {title:'x2', gridcolor:'rgba(148,163,184,0.4)', zerolinecolor:'rgba(148,163,184,0.7)'},
      zaxis: {title:'y',  gridcolor:'rgba(148,163,184,0.4)', zerolinecolor:'rgba(148,163,184,0.7)'},
      camera: {eye: {x:1.5, y:1.4, z:1.3}}
    },
    showlegend:true,
    legend:{
      font:{color:'#e5e7eb'},
      bgcolor:'rgba(15,23,42,0.7)'
    }
  };

  Plotly.newPlot(plot3dDiv, [plane, scatter, scatterPred], layout, {responsive:true});
}

// OLS for 2 features
function computeOLS2Feature(xs1, xs2, ys){
  const n = xs1.length;
  if (n === 0) return {w1:0,w2:0,b:0};
  let meanX1=0, meanX2=0, meanY=0;
  for (let i=0;i<n;i++){
    meanX1 += xs1[i];
    meanX2 += xs2[i];
    meanY  += ys[i];
  }
  meanX1/=n; meanX2/=n; meanY/=n;

  let S11=0, S22=0, S12=0, S1Y=0, S2Y=0;
  for (let i=0;i<n;i++){
    const dx1 = xs1[i]-meanX1;
    const dx2 = xs2[i]-meanX2;
    const dy  = ys[i]-meanY;
    S11 += dx1*dx1;
    S22 += dx2*dx2;
    S12 += dx1*dx2;
    S1Y += dx1*dy;
    S2Y += dx2*dy;
  }
  const det = S11*S22 - S12*S12;
  let w1Opt=0, w2Opt=0;
  if (Math.abs(det) < 1e-12){
    // degenerate: fall back to one-feature fit using x1
    w1Opt = S1Y/(S11 || 1);
    w2Opt = 0;
  } else {
    w1Opt = ( S22*S1Y - S12*S2Y )/det;
    w2Opt = (-S12*S1Y + S11*S2Y )/det;
  }
  const bOpt = meanY - w1Opt*meanX1 - w2Opt*meanX2;
  return {w1:w1Opt, w2:w2Opt, b:bOpt};
}

// Animation
function cancelAnimation(){
  if (animState.rafId != null){
    cancelAnimationFrame(animState.rafId);
  }
  animState.running = false;
  animState.rafId = null;
}

function animateTo(targetW1, targetW2, targetB, duration=1200){
  cancelAnimation();
  animState.running   = true;
  animState.startTime = performance.now();
  animState.duration  = duration;
  animState.fromW1    = w1;
  animState.fromW2    = w2;
  animState.fromB     = b;
  animState.toW1      = targetW1;
  animState.toW2      = targetW2;
  animState.toB       = targetB;

  function step(now){
    const t = Math.min(1, (now - animState.startTime)/animState.duration);
    const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2;

    w1 = animState.fromW1 + (animState.toW1 - animState.fromW1)*ease;
    w2 = animState.fromW2 + (animState.toW2 - animState.fromW2)*ease;
    b  = animState.fromB  + (animState.toB  - animState.fromB )*ease;

    w1Range.value = w1; w1Num.value = round(w1,3);
    w2Range.value = w2; w2Num.value = round(w2,3);
    bRange.value  = b;  bNum.value  = round(b,3);

    updateTable();
    updateInfo();
    draw3D();

    if (t < 1 && animState.running){
      animState.rafId = requestAnimationFrame(step);
    } else {
      animState.running = false;
      w1 = animState.toW1;
      w2 = animState.toW2;
      b  = animState.toB;
      w1Range.value = w1; w1Num.value = round(w1,3);
      w2Range.value = w2; w2Num.value = round(w2,3);
      bRange.value  = b;  bNum.value  = round(b,3);
      updateTable();
      updateInfo();
      draw3D();
    }
  }

  animState.rafId = requestAnimationFrame(step);
}

// Events
plotBtn.addEventListener('click', () => {
  updateDataFromInputs();
});

randomBtn.addEventListener('click', () => {
  const n = 12;
  const trueW1 = Math.random()*4 - 2;
  const trueW2 = Math.random()*4 - 2;
  const trueB  = Math.random()*10 - 5;
  const xs1 = [];
  const xs2 = [];
  const ys  = [];
  for (let i=0;i<n;i++){
    const x1Val = round(Math.random()*10 - 5,3);
    const x2Val = round(Math.random()*10 - 5,3);
    const noise = (Math.random()-0.5)*3;
    const yVal  = trueW1*x1Val + trueW2*x2Val + trueB + noise;
    xs1.push(x1Val);
    xs2.push(x2Val);
    ys.push(round(yVal,3));
  }
  x1Input.value = xs1.join(',');
  x2Input.value = xs2.join(',');
  yInput.value  = ys.join(',');
  updateDataFromInputs();
});

resetBtn.addEventListener('click', () => {
  x1Input.value = '1,2,3,4,5';
  x2Input.value = '2,1,3,2,4';
  yInput.value  = '3,3,6,5,9';

  w1 = 1; w2 = 1; b = 0;
  w1Range.value = w1; w1Num.value = w1;
  w2Range.value = w2; w2Num.value = w2;
  bRange.value  = b;  bNum.value  = b;

  cancelAnimation();
  updateDataFromInputs();
});

w1Range.addEventListener('input', e => {
  w1 = parseFloat(e.target.value);
  w1Num.value = round(w1,3);
  cancelAnimation();
  updateTable();
  updateInfo();
  draw3D();
});
w1Num.addEventListener('change', e => {
  w1 = parseFloat(e.target.value);
  w1Range.value = w1;
  cancelAnimation();
  updateTable();
  updateInfo();
  draw3D();
});

w2Range.addEventListener('input', e => {
  w2 = parseFloat(e.target.value);
  w2Num.value = round(w2,3);
  cancelAnimation();
  updateTable();
  updateInfo();
  draw3D();
});
w2Num.addEventListener('change', e => {
  w2 = parseFloat(e.target.value);
  w2Range.value = w2;
  cancelAnimation();
  updateTable();
  updateInfo();
  draw3D();
});

bRange.addEventListener('input', e => {
  b = parseFloat(e.target.value);
  bNum.value = round(b,3);
  cancelAnimation();
  updateTable();
  updateInfo();
  draw3D();
});
bNum.addEventListener('change', e => {
  b = parseFloat(e.target.value);
  bRange.value = b;
  cancelAnimation();
  updateTable();
  updateInfo();
  draw3D();
});

fitBtn.addEventListener('click', () => {
  if (data.y.length === 0) return;
  const {w1:w1Opt, w2:w2Opt, b:bOpt} = computeOLS2Feature(data.x1, data.x2, data.y);
  animateTo(w1Opt, w2Opt, bOpt, 1200);
});

stopAnimBtn.addEventListener('click', () => {
  cancelAnimation();
});

// Initial
updateDataFromInputs();
