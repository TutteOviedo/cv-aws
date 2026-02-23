// ── CONTADOR DE VISITAS ──────────────────────────────────
async function loadVisitCount() {
  try {
    const res  = await fetch('https://vanghn1sdk.execute-api.us-east-1.amazonaws.com/default/GetCloudResumeCount');
    const data = await res.json();

    document.getElementById('visits').textContent = data.visits;
    document.querySelector('.counter-note').textContent = 'Visitas registradas';
  } catch (err) {
    document.getElementById('visits').textContent = 'Error';
    console.error('No se pudo cargar el contador:', err);
  }
}

loadVisitCount();

// ── THEME TOGGLE ─────────────────────────────────────────
const btn   = document.getElementById('theme-toggle');
const label = document.getElementById('toggle-label');
const icon  = btn.querySelector('.toggle-icon');

btn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  icon.textContent  = isLight ? '☀️' : '🌙';
  label.textContent = isLight ? 'Dark' : 'Light';
});

// ── TYPEWRITER ────────────────────────────────────────
const firstName = 'Matías ';
const lastName  = 'Oviedo';
const fullName  = firstName + lastName;
const target    = document.getElementById('typewriter-name');
const cursor    = document.querySelector('.tw-cursor');

let i = 0;

function type() {
  if (i < fullName.length) {
    const char   = fullName[i];
    const isLast = i >= firstName.length;
    const span   = document.createElement('span');
    span.textContent = char;
    span.style.color = isLast ? 'var(--accent)' : 'var(--text)';
    target.appendChild(span);
    i++;
    setTimeout(type, 96);
  } else {
    cursor.classList.add('done');
  }
}

type();