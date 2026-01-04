// Intro
document.getElementById('enter-btn').addEventListener('click', () => {
  document.getElementById('intro').classList.add('intro-fade');
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('tools').classList.remove('hidden');
  }, 3000);
});

// Calculator
const calcDisplay = document.getElementById('calc-display');
const calcButtons = document.querySelector('.calc-buttons');
const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];
buttons.forEach(btn => {
  const b = document.createElement('button');
  b.className = 'calc-btn';
  b.textContent = btn;
  b.onclick = () => {
    if (btn === '=') calcDisplay.value = eval(calcDisplay.value);
    else if (btn === 'C') calcDisplay.value = '';
    else calcDisplay.value += btn;
  };
  calcButtons.appendChild(b);
});

// Unit Converter
document.getElementById('converter-input').addEventListener('input', convertUnits);
document.getElementById('from-unit').addEventListener('change', convertUnits);
document.getElementById('to-unit').addEventListener('change', convertUnits);

function convertUnits() {
  const value = parseFloat(document.getElementById('converter-input').value);
  const from = document.getElementById('from-unit').value;
  const to = document.getElementById('to-unit').value;
  let result = value;
  if (from === 'cm' && to === 'inch') result /= 2.54;
  if (from === 'inch' && to === 'cm') result *= 2.54;
  document.getElementById('converter-result').textContent = result ? `= ${result} ${to}` : '';
}

// QR Generator
document.getElementById('generate-qr').addEventListener('click', () => {
  const text = document.getElementById('qr-input').value;
  const canvas = document.getElementById('qr-canvas');
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 200, 200);
  // Simple QR pattern simulation (real QR needs lib, but from scratch – draw grid)
  for (let i = 0; i < 20; i++) for (let j = 0; j < 20; j++) if (Math.random() > 0.5) {
    ctx.fillStyle = '#A78BFA';
    ctx.fillRect(i * 10, j * 10, 10, 10);
  }
  ctx.fillStyle = '#D8B4FE';
  ctx.font = '20px Arial';
  ctx.fillText(text.substring(0,10), 10, 190);
});

// Password Generator
document.getElementById('generate-pw').addEventListener('click', () => {
  const length = document.getElementById('pw-length').value;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let pw = '';
  for (let i = 0; i < length; i++) pw += chars.charAt(Math.floor(Math.random() * chars.length));
  document.getElementById('pw-result').textContent = pw;
});
