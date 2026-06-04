/* ── Theme Manager ── */
const PALETTES = ['violet','blossom','slate','ocean','rose'];
const LABELS   = { violet:'바이올렛', blossom:'블로섬', slate:'슬레이트', ocean:'오션', rose:'로즈' };
const SWATCHES = {
  violet:  'linear-gradient(135deg,#c96cbf,#e8a4df)',
  blossom: 'linear-gradient(135deg,#E8622A,#F4956A)',
  slate:   'linear-gradient(135deg,#5C7FA0,#A8C0D0)',
  ocean:   'linear-gradient(135deg,#0B9E8E,#5ED0C6)',
  rose:    'linear-gradient(135deg,#D63864,#EE8CAA)',
};

let currentPalette = localStorage.getItem('palette') || 'violet';
let currentMode    = localStorage.getItem('mode')    || 'dark';

function applyTheme(palette, mode) {
  document.documentElement.setAttribute('data-palette', palette);
  document.documentElement.setAttribute('data-mode', mode);
  localStorage.setItem('palette', palette);
  localStorage.setItem('mode', mode);
  currentPalette = palette;
  currentMode    = mode;
  updatePanel();
  updateParticleColor();
}

function updatePanel() {
  // mode icon
  const icon = document.getElementById('modeIcon');
  if (icon) icon.textContent = currentMode === 'dark' ? '🌙' : '☀️';

  // active swatch ring
  document.querySelectorAll('.swatch').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.palette === currentPalette);
  });
}

function updateParticleColor() {
  // notify main.js that accent color changed
  window._accentRgb = getComputedStyle(document.documentElement)
    .getPropertyValue('--clr-accent-rgb').trim();
}

function buildPanel() {
  const panel = document.getElementById('palettePanel');
  if (!panel) return;

  // mode toggle
  panel.innerHTML = `
    <button class="mode-toggle" id="modeToggle" aria-label="라이트/다크 전환">
      <span id="modeIcon">${currentMode === 'dark' ? '🌙' : '☀️'}</span>
    </button>
    <div class="palette-divider"></div>
    <div class="palette-swatches">
      ${PALETTES.map(p => `
        <button class="swatch${p === currentPalette ? ' active' : ''}"
                data-palette="${p}" data-label="${LABELS[p]}" aria-label="${LABELS[p]}">
          <span class="swatch-dot" style="background:${SWATCHES[p]}"></span>
        </button>
      `).join('')}
    </div>`;

  document.getElementById('modeToggle').addEventListener('click', () => {
    applyTheme(currentPalette, currentMode === 'dark' ? 'light' : 'dark');
  });

  panel.querySelectorAll('.swatch').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.palette, currentMode));
  });
}

// Apply saved theme immediately (before DOMContentLoaded to avoid flash)
document.documentElement.setAttribute('data-palette', currentPalette);
document.documentElement.setAttribute('data-mode', currentMode);

document.addEventListener('DOMContentLoaded', () => {
  buildPanel();
  updateParticleColor();
});
