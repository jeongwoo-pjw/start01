/* ── Data injection ── */
document.querySelector('.hero-role').textContent      = RESUME.role;
document.querySelector('.hero-bio').textContent       = RESUME.heroBio;
document.querySelector('#aboutText').textContent      = RESUME.aboutText;

/* ── Stats counter animation ── */
function animateCount(el, target, duration = 1400) {
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

/* ── Skills ── */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!RESUME.skills.length) {
    grid.innerHTML = '<p style="color:var(--clr-muted)">기술 스택을 data.js에 추가해주세요.</p>';
    return;
  }
  grid.innerHTML = RESUME.skills.map(s => `
    <div class="skill-card fade-up">
      <div class="skill-card-icon">${s.icon || ''}</div>
      <div class="skill-card-name">${s.name}</div>
      <div class="skill-bar-wrap">
        <div class="skill-bar" data-level="${s.level}"></div>
      </div>
      <div class="skill-level">${s.level}%</div>
    </div>
  `).join('');
}

/* ── Timeline renderer ── */
function renderTimeline(items, containerId) {
  const el = document.getElementById(containerId);
  if (!items.length) {
    el.innerHTML = '<p style="color:var(--clr-muted)">data.js에 내용을 추가해주세요.</p>';
    return;
  }
  el.innerHTML = items.map(item => `
    <div class="timeline-item fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-body">
        <div class="timeline-header">
          <span class="timeline-period">${item.period}</span>
          ${item.current ? '<span class="timeline-badge">재직 중</span>' : ''}
        </div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-org">${item.org}</p>
        ${item.desc && item.desc.length
          ? `<ul class="timeline-desc">${item.desc.map(d => `<li>${d}</li>`).join('')}</ul>`
          : ''}
      </div>
    </div>
  `).join('');
}

/* ── Projects ── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!RESUME.projects.length) {
    grid.innerHTML = '<p style="color:var(--clr-muted)">프로젝트를 data.js에 추가해주세요.</p>';
    return;
  }
  grid.innerHTML = RESUME.projects.map(p => `
    <div class="project-card fade-up">
      <div class="project-img-wrap ${!p.image ? 'no-img' : ''}">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title}" onerror="this.parentElement.classList.add('no-img'); this.remove(); this.parentElement.textContent='${p.emoji || '📁'}'" />`
          : `${p.emoji || '📁'}`}
      </div>
      <div class="project-info">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" class="link-btn" target="_blank" rel="noopener">GitHub</a>` : ''}
          ${p.live   ? `<a href="${p.live}"   class="link-btn link-btn-live" target="_blank" rel="noopener">Live ↗</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Contact ── */
function renderContact() {
  const grid = document.getElementById('contactGrid');
  const cards = [];
  if (RESUME.email)
    cards.push({ icon: '✉️', label: '이메일', value: RESUME.email, href: `mailto:${RESUME.email}` });
  if (RESUME.github)
    cards.push({ icon: '🐙', label: 'GitHub',  value: RESUME.github.replace('https://github.com/', '@'), href: RESUME.github });
  if (RESUME.phone)
    cards.push({ icon: '📞', label: '전화',    value: RESUME.phone, href: `tel:${RESUME.phone.replace(/-/g,'')}` });
  if (RESUME.linkedin)
    cards.push({ icon: '💼', label: 'LinkedIn', value: 'LinkedIn', href: RESUME.linkedin });
  if (RESUME.blog)
    cards.push({ icon: '📝', label: '블로그',  value: '블로그 방문', href: RESUME.blog });

  grid.innerHTML = cards.map(c => `
    <a href="${c.href}" class="contact-card" target="${c.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener">
      <div class="contact-icon">${c.icon}</div>
      <span class="contact-label">${c.label}</span>
      <span class="contact-value">${c.value}</span>
    </a>
  `).join('');
}

/* ── Intersection Observer (fade-up + skill bars + stats) ── */
function setupObserver() {
  let statsDone = false;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('visible');

      // animate skill bars
      el.querySelectorAll('.skill-bar[data-level]').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });

      // animate stats once
      if (!statsDone && el.closest('#about')) {
        statsDone = true;
        animateCount(document.getElementById('statYears'),    RESUME.stats.years);
        animateCount(document.getElementById('statProjects'), RESUME.stats.projects);
        animateCount(document.getElementById('statCerts'),    RESUME.stats.certs);
      }

      io.unobserve(el);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

/* ── Nav: scroll highlight + sticky style ── */
function setupNav() {
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

/* ── Init ── */
function init() {
  renderSkills();
  renderTimeline(RESUME.experience,     'experienceTimeline');
  renderTimeline(RESUME.education,      'educationTimeline');
  renderTimeline(RESUME.certifications, 'certTimeline');
  renderProjects();
  renderContact();

  // initial fade-up trigger for hero elements
  setTimeout(() => {
    document.querySelectorAll('.hero .fade-up').forEach(el => el.classList.add('visible'));
  }, 100);

  setupObserver();
  setupNav();
}

document.addEventListener('DOMContentLoaded', init);
