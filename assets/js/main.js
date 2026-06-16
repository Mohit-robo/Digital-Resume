/* ============================================================
   MOHIT GAIKWAD — Portfolio JS
   Shared utilities across all pages
   ============================================================ */

/* ---- Active nav link ---- */
(function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') ||
        (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ---- Mobile nav toggle ---- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-nav-close');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
if (mobileClose && mobileNav) {
  mobileClose.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
}
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---- Scroll Reveal ---- */
(function initReveal() {
  const pref = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (pref) return;

  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
})();

/* ---- Timeline accordion (home page) ---- */
document.querySelectorAll('.timeline__header').forEach(header => {
  header.addEventListener('click', () => {
    const node = header.closest('.timeline__node');
    const isOpen = node.classList.contains('open');

    // close all
    document.querySelectorAll('.timeline__node.open').forEach(n => n.classList.remove('open'));

    // toggle clicked
    if (!isOpen) node.classList.add('open');
  });
});

/* ---- Case study TOC highlight ---- */
(function initTocHighlight() {
  const tocLinks = document.querySelectorAll('.cs-toc__link');
  if (!tocLinks.length) return;

  const ids = Array.from(tocLinks).map(l => l.getAttribute('href').replace('#', ''));
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.cs-toc__link[href="#${e.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => io.observe(s));
})();

/* ---- Stagger children reveal ---- */
document.querySelectorAll('[data-stagger]').forEach(container => {
  const children = container.children;
  Array.from(children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});
