/* ── Data injection ── */
document.querySelector('.hero-bio').textContent       = RESUME.heroBio;
document.querySelector('#aboutText').textContent      = RESUME.aboutText;
// hero-role은 타이핑 효과로 채움 (아래 setupHeroEffects)

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

/* ── Hero Effects ── */
function setupHeroEffects() {
  setupParticles();
  setupTyping();
  setupSpotlight();
  setupFloatingOrb();
  setup3DTilt();
  setupStaggerFadeIn();
}

/* 1) Particle canvas */
function setupParticles() {
  const hero = document.querySelector('.hero');
  const canvas = document.createElement('canvas');
  canvas.id = 'heroCanvas';
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.1,
    };
  }

  function initParticles() {
    resize();
    particles = Array.from({ length: 80 }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,108,191,${p.alpha})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  initParticles();
  draw();
}

/* 2) Typewriter effect */
function setupTyping() {
  const el = document.querySelector('.hero-role');
  const text = RESUME.role;
  el.textContent = '';
  el.style.borderRight = '2px solid var(--clr-accent)';
  el.style.display = 'inline-block';

  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, i === text.length + 1 ? 600 : 90);
    } else {
      let blinks = 0;
      const blink = setInterval(() => {
        el.style.borderRightColor = blinks % 2 === 0 ? 'transparent' : 'var(--clr-accent)';
        if (++blinks > 5) { clearInterval(blink); el.style.borderRight = 'none'; }
      }, 400);
    }
  }
  setTimeout(type, 600);
}

/* 3) Mouse spotlight – 보라색 글로우가 hero 위에서 마우스를 따라다님 */
function setupSpotlight() {
  const hero = document.querySelector('.hero');
  const spot = document.createElement('div');
  spot.id = 'heroSpotlight';
  hero.appendChild(spot);

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spot.style.background =
      `radial-gradient(520px circle at ${x}px ${y}px, rgba(180,80,220,0.13), transparent 65%)`;
    spot.style.opacity = '1';
  });

  hero.addEventListener('mouseleave', () => {
    spot.style.opacity = '0';
  });
}

/* 4) Floating orb – 우측 상단 청록색 블러 오브, 8초 주기 부유 */
function setupFloatingOrb() {
  const hero = document.querySelector('.hero');
  const orb = document.createElement('div');
  orb.className = 'hero-orb';
  hero.appendChild(orb);
}

/* 5) 3D Tilt + Shine – 프로필 사진 위에서 기울어짐 & 광택 이동 */
function setup3DTilt() {
  const ring = document.querySelector('.hero-photo-ring');
  if (!ring) return;

  const shine = document.createElement('div');
  shine.className = 'photo-shine';
  ring.appendChild(shine);

  ring.addEventListener('mousemove', e => {
    const rect = ring.getBoundingClientRect();
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const dx = (e.clientX - rect.left - cx) / cx;
    const dy = (e.clientY - rect.top  - cy) / cy;

    ring.style.transform =
      `perspective(700px) rotateY(${dx * 14}deg) rotateX(${-dy * 14}deg) scale(1.04)`;

    const sx = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const sy = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    shine.style.background =
      `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.22) 0%, transparent 55%)`;
    shine.style.opacity = '1';
  });

  ring.addEventListener('mouseleave', () => {
    ring.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)';
    shine.style.opacity = '0';
  });

  ring.style.transition = 'transform 0.12s ease-out';
}

/* 6) Stagger fade-in – hero 텍스트 요소가 순서대로 등장 */
function setupStaggerFadeIn() {
  const targets = [
    { sel: '.hero-greeting', delay: 0    },
    { sel: '.hero-name',     delay: 180  },
    { sel: '.hero-role',     delay: 360  },
    { sel: '.hero-bio',      delay: 520  },
    { sel: '.hero-btns',     delay: 700  },
    { sel: '.hero-photo-wrap', delay: 200 },
  ];

  targets.forEach(({ sel, delay }) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.classList.remove('visible');
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 80);
  });
}

/* ── Init ── */
function init() {
  renderSkills();
  renderTimeline(RESUME.experience,     'experienceTimeline');
  renderTimeline(RESUME.education,      'educationTimeline');
  renderTimeline(RESUME.certifications, 'certTimeline');
  renderProjects();
  renderContact();

  setupObserver();
  setupNav();
  setupHeroEffects();
}

document.addEventListener('DOMContentLoaded', init);
