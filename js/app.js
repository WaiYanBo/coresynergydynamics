import { I18N } from './i18n.js';
import { TRAINING_CATALOGUE_2026, CORE_PILLARS, HERO_STANDARDS, COURSES, SERVICES, PDCA_ROADMAP, BULLETINS, TEAM_MEMBERS, FAQS } from './data.js';

const STORAGE_LANG_KEY = 'cs_lang';
const STORAGE_THEME_KEY = 'color-scheme';

let currentLang = getInitialLang();
let activeHeroStdId = HERO_STANDARDS[1].id;
let activeCategory = 'all';
let activeLevel = 'all';
let searchQuery = '';
let activePdcaIndex = 0;
let activeBulletinCategory = 'all';
let activeBulletinTopic = getInitialBulletinTopic();
let activeTeamMemberId = null;
let activeModalCourseId = null;

function getInitialBulletinTopic() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('topic') || '';
  } catch {
    return '';
  }
}

function getInitialLang() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang === 'en' || paramLang === 'ms') return paramLang;
    const saved = localStorage.getItem(STORAGE_LANG_KEY);
    if (saved === 'en' || saved === 'ms') return saved;
  } catch {

  }
  return 'en';
}

function t(path) {
  const keys = path.split('.');
  let node = I18N[currentLang];
  for (const k of keys) {
    if (node == null) return path;
    node = node[k];
  }
  return node ?? path;
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getEffectiveTheme() {
  const meta = document.querySelector('meta[name="color-scheme"]');
  const content = meta?.getAttribute('content') || 'light dark';
  if (content === 'dark' || content === 'light') return content;
  return getSystemTheme();
}

function applyThemeToDocument(storedValue) {
  const meta = document.querySelector('meta[name="color-scheme"]');
  const value = storedValue === 'light' || storedValue === 'dark' ? storedValue : 'light dark';
  if (meta) meta.setAttribute('content', value);

  if (value === 'light' || value === 'dark') {
    document.documentElement.dataset.theme = value;
  } else {
    delete document.documentElement.dataset.theme;
  }
  updateThemeButtonState();
}

function toggleTheme() {
  const currentlyRendered = getEffectiveTheme();
  const target = currentlyRendered === 'dark' ? 'light' : 'dark';

  try {
    localStorage.setItem(STORAGE_THEME_KEY, target);
    applyThemeToDocument(target);
  } catch {
    applyThemeToDocument(target);
  }
}

function updateThemeButtonState() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const rendered = getEffectiveTheme();
  btn.setAttribute('aria-pressed', rendered === 'dark' ? 'true' : 'false');
  btn.setAttribute('aria-label', `${t('utility.themeToggleLabel')} (${rendered === 'dark' ? t('utility.themeDark') : t('utility.themeLight')})`);
  const labelEl = btn.querySelector('.theme-btn-label');
  if (labelEl) {
    labelEl.textContent = rendered === 'dark' ? t('utility.themeDark') : t('utility.themeLight');
  }
}

function initSmartNavbar() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let ticking = false;

  const supportsScrollTimeline =
    typeof CSS !== 'undefined' &&
    CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)');

  const updateScrollState = () => {
    const currentY = window.scrollY;

    header.classList.toggle('is-scrolled', currentY > 12);

    if (!supportsScrollTimeline) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, currentY / maxScroll)) : 0;
      header.style.setProperty('--scroll-progress', ratio.toFixed(4));
    }

    ticking = false;
  };

  updateScrollState();

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    },
    { passive: true }
  );

  const menuBtn = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (menuBtn && nav) {
    const closeMobileMenu = (restoreFocus = false) => {
      if (!header.classList.contains('menu-open')) return;
      header.classList.remove('menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', t('nav.menuOpen'));
      if (restoreFocus) menuBtn.focus();
    };

    menuBtn.addEventListener('click', () => {
      const isOpen = header.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', isOpen ? t('nav.menuClose') : t('nav.menuOpen'));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMobileMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('menu-open')) {
        closeMobileMenu(true);
      }
    });

    document.addEventListener('click', (e) => {
      if (header.classList.contains('menu-open') && !header.contains(e.target)) {
        closeMobileMenu(false);
      }
    });

    window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => {
      if (e.matches) closeMobileMenu(false);
    });
  }
}


let revealObserver = null;

function initScrollReveals() {
  const items = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (!items.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  items.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add('is-visible');
    } else {
      revealObserver.observe(el);
    }
  });
}


function applyStaticTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (typeof val === 'string') {
      el.setAttribute('placeholder', val);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const val = t(key);
    if (typeof val === 'string') {
      el.setAttribute('aria-label', val);
    }
  });

  const header = document.getElementById('site-header');
  const menuBtn = document.getElementById('mobile-menu-toggle');
  if (menuBtn) {
    const isOpen = header?.classList.contains('menu-open');
    menuBtn.setAttribute('aria-label', isOpen ? t('nav.menuClose') : t('nav.menuOpen'));
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isCurrent = btn.dataset.lang === currentLang;
    btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
  });

  updateThemeButtonState();
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'ms') return;
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_LANG_KEY, lang);
  } catch {
    // Ignore storage errors
  }
  applyStaticTranslations();
  renderDynamicSections();
}

function renderHeroSelector() {
  const pillsContainer = document.getElementById('hero-std-pills');
  const previewTitle = document.getElementById('hero-preview-title');
  const previewDesc = document.getElementById('hero-preview-desc');
  const previewMeta = document.getElementById('hero-preview-meta');
  const previewLink = document.getElementById('hero-preview-link');
  if (!pillsContainer) return;

  pillsContainer.innerHTML = HERO_STANDARDS.map(
    (item) => `
      <button type="button"
              class="std-pill"
              data-std-id="${item.id}"
              aria-pressed="${item.id === activeHeroStdId ? 'true' : 'false'}">
        ${item.code}
      </button>
    `
  ).join('');

  const selected = HERO_STANDARDS.find((s) => s.id === activeHeroStdId) || HERO_STANDARDS[0];
  if (previewTitle) previewTitle.textContent = selected.title[currentLang];
  if (previewDesc) previewDesc.textContent = selected.summary[currentLang];
  if (previewMeta) previewMeta.textContent = selected.outcome[currentLang];
  if (previewLink) {
    previewLink.href = `training.html?category=${encodeURIComponent(selected.targetCategory)}`;
  }

  pillsContainer.querySelectorAll('.std-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeHeroStdId = btn.dataset.stdId;
      renderHeroSelector();
    });
  });
}

function renderHomePillars() {
  const container = document.getElementById('home-pillars-grid');
  if (!container) return;

  container.innerHTML = CORE_PILLARS.map((pillar) => {
    const visibleItems =
      pillar.id === 'training-services' ? pillar.items.slice(0, 3) : pillar.items;

    let extraBody = '';
    if (pillar.id === 'digitalization') {
      extraBody = `
        <ul class="check-list pillar-digital-highlights">
          <li>${t('home.digitalHighlight1')}</li>
          <li>${t('home.digitalHighlight2')}</li>
        </ul>
      `;
    }

    let footerHtml = '';
    if (pillar.id === 'training-services') {
      footerHtml = `
        <footer class="pillar-card-footer">
          <a href="training.html" class="btn btn-primary btn-sm" style="inline-size:100%;">
            ${t('home.showMoreTrainingBtn')} →
          </a>
        </footer>
      `;
    } else if (pillar.id === 'consultancy') {
      footerHtml = `
        <footer class="pillar-card-footer">
          <a href="bulletin.html?topic=iso-management-system#bulletin-updates" class="btn btn-secondary btn-sm" style="inline-size:100%;">
            ${t('home.consultancyFooterLink')} →
          </a>
        </footer>
      `;
    } else if (pillar.id === 'digitalization') {
      footerHtml = `
        <footer class="pillar-card-footer">
          <a href="bulletin.html?topic=business-process-digitalization#bulletin-updates" class="btn btn-secondary btn-sm" style="inline-size:100%;">
            ${t('home.digitalFooterLink')} →
          </a>
        </footer>
      `;
    }

    return `
      <article class="pillar-card pillar-card-${pillar.id} reveal-up">
        <header class="pillar-card-header">
          <div class="course-card-top">
            <span class="pillar-code">${pillar.code}</span>
            <span class="badge">${pillar.badge[currentLang]}</span>
          </div>
          <h3>${pillar.title[currentLang]}</h3>
        </header>
        <div class="pillar-card-content">
          <p>${pillar.summary[currentLang]}</p>
          <ol class="pillar-topics-list">
            ${visibleItems
              .map(
                (item) => `
              <li>
                <a href="${item.href}" class="pillar-topic-link">
                  <span class="pillar-topic-num">${item.num}.</span>
                  <span class="pillar-topic-title">${item.title[currentLang]}</span>
                  <span class="pillar-topic-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            `
              )
              .join('')}
          </ol>
          ${extraBody}
        </div>
        ${footerHtml}
      </article>
    `;
  }).join('');
}

function renderHomeMethodology() {
  const container = document.getElementById('home-pdca-grid');
  if (!container) return;

  container.innerHTML = PDCA_ROADMAP.map(
    (stage) => `
      <article class="pdca-card reveal-up">
        <span class="pdca-step">${stage.step} — ${stage.phase[currentLang]}</span>
        <h3>${stage.title[currentLang]}</h3>
        <p>${stage.summary[currentLang]}</p>
        <ul class="check-list">
          ${stage.deliverables[currentLang].map((d) => `<li>${d}</li>`).join('')}
        </ul>
      </article>
    `
  ).join('');
}

function renderHomeCalendar() {
  const tbody = document.getElementById('home-calendar-body');
  if (!tbody) return;

  const table = tbody.closest('.calendar-table');
  if (table) {
    table.style.setProperty('--label-2', `"${t('modal.nextLabel')}"`);
    table.style.setProperty('--label-3', `"${t('training.levelLabel')}"`);
    table.style.setProperty('--label-4', `"${t('modal.durationLabel')}"`);
    table.style.setProperty('--label-5', `"${t('home.colGrant')}"`);
    table.style.setProperty('--label-6', `"${t('home.colActions')}"`);
  }

  const upcoming = COURSES.slice(0, 6);
  tbody.innerHTML = upcoming
    .map((c) => {
      const [datePart, locPart] = c.nextDate[currentLang].split(' • ');
      const durMatch = c.duration[currentLang].match(/^([^(]+)(\(.+\))$/);
      const durMain = durMatch ? durMatch[1].trim() : c.duration[currentLang];
      const durSub = durMatch ? durMatch[2].trim() : '';

      return `
      <tr>
        <th scope="row" class="calendar-program-cell">
          <div class="calendar-program-content">
            <span class="pillar-code">${c.code} • ${c.standard}</span>
            <strong class="calendar-program-title">${c.title[currentLang]}</strong>
          </div>
        </th>
        <td class="calendar-intake-cell">
          <div class="calendar-intake-stack">
            <strong class="calendar-date-main">${datePart}</strong>
            ${locPart ? `<span class="calendar-date-loc">${locPart}</span>` : ''}
          </div>
        </td>
        <td class="calendar-tier-cell"><span class="badge">${c.levelLabel[currentLang]}</span></td>
        <td class="calendar-duration-cell">
          <div class="calendar-duration-stack">
            <strong class="calendar-dur-days">${durMain}</strong>
            ${durSub ? `<span class="calendar-dur-hours">${durSub}</span>` : ''}
          </div>
        </td>
        <td class="calendar-grant-cell"><span class="badge badge-hrd">${t('training.hrdBadge')}</span></td>
        <td class="calendar-actions-cell">
          <div class="calendar-actions">
            <button type="button" class="btn btn-secondary btn-sm" data-open-syllabus="${c.id}">
              ${t('training.syllabusBtn')}
            </button>
            <a href="contact.html?course=${encodeURIComponent(c.code)}" class="btn btn-primary btn-sm">
              ${t('training.bookBtn')}
            </a>
          </div>
        </td>
      </tr>
    `;
    })
    .join('');

  bindSyllabusTriggers(tbody);
}

function initReadinessEstimator() {
  const stdSelect = document.getElementById('est-standard');
  const teamSelect = document.getElementById('est-team');
  const matSelect = document.getElementById('est-maturity');
  const outTitle = document.getElementById('est-out-title');
  const outTimeline = document.getElementById('est-out-timeline');
  const outCourses = document.getElementById('est-out-courses');
  const outCta = document.getElementById('est-out-cta');
  if (!stdSelect || !teamSelect || !matSelect) return;

  const compute = () => {
    const std = stdSelect.value;
    const team = teamSelect.value;
    const mat = matSelect.value;

    const baseMonths = std === 'iso-9001' ? 3 : 4;
    const teamAdd = team === 'ent' ? 2 : team === 'mid' ? 1 : 0;
    const matAdj = mat === 'mature' ? -1 : mat === 'partial' ? 0 : 1;
    const total = Math.max(2, baseMonths + teamAdd + matAdj);

    const stdLabelMap = {
      'iso-9001': 'ISO 9001:2015 (QMS)',
      'iso-27001': 'ISO/IEC 27001:2022 (ISMS)',
      'iso-22301': 'ISO 22301:2019 (BCMS)',
      'iso-37001': 'ISO 37001:2016 (ABMS)'
    };

    const courseMap = {
      'iso-9001': {
        en: ['CS-9001-IMP: QMS Implementation & Risk Matrix (3 Days)', 'CS-9001-IA: Process-Based Internal Auditor (2 Days)'],
        ms: ['CS-9001-IMP: Pelaksanaan QMS & Matriks Risiko (3 Hari)', 'CS-9001-IA: Juruaudit Dalaman Berasaskan Proses (2 Hari)']
      },
      'iso-27001': {
        en: ['CS-27001-LI: ISMS Lead Implementer & 93 Controls (4 Days)', 'CS-27000-IA: ISO 27000/27001 Internal Auditor (2 Days)'],
        ms: ['CS-27001-LI: Pelaksana Utama ISMS & 93 Kawalan (4 Hari)', 'CS-27000-IA: Juruaudit Dalaman ISO 27000/27001 (2 Hari)']
      },
      'iso-22301': {
        en: ['CS-22301-LI: BCMS & Crisis Simulation Workshop (3 Days)', 'CS-22301-IA: BCMS Internal Auditor (2 Days)'],
        ms: ['CS-22301-LI: Bengkel BCMS & Simulasi Krisis (3 Hari)', 'CS-22301-IA: Juruaudit Dalaman BCMS (2 Hari)']
      },
      'iso-37001': {
        en: ['CS-37001-LI: ABMS & MACC Sec 17A Implementation (2 Days)', 'CS-EXEC-GOV: Board & C-Suite Governance Briefing (1 Day)'],
        ms: ['CS-37001-LI: Pelaksanaan ABMS & Seksyen 17A SPRM (2 Hari)', 'CS-EXEC-GOV: Taklimat Tadbir Urus Lembaga (1 Hari)']
      }
    };

    const trackName = stdLabelMap[std] || 'ISO Standard';
    if (outTitle) {
      outTitle.textContent =
        currentLang === 'ms'
          ? `Pelan Pelaksanaan & Latihan ${trackName}`
          : `${trackName} Training & Certification Track`;
    }
    if (outTimeline) {
      outTimeline.textContent =
        currentLang === 'ms'
          ? `Fasa 1–4 (${total}–${total + 1} Peringkat Pelaksanaan • Termasuk Latihan HRD Corp & Pra-Audit)`
          : `Phases 1–4 (${total}–${total + 1} Implementation Stages • Includes HRD Corp Training & Mock Audit)`;
    }
    if (outCourses) {
      const list = courseMap[std]?.[currentLang] || [];
      outCourses.innerHTML = list.map((c) => `<li>${c}</li>`).join('');
    }
    if (outCta) {
      outCta.href = `contact.html?course=${encodeURIComponent(trackName)}&scope=${encodeURIComponent(total + 'mo')}`;
    }
  };

  if (!stdSelect.dataset.bound) {
    stdSelect.dataset.bound = 'true';
    stdSelect.addEventListener('change', compute);
    teamSelect.addEventListener('change', compute);
    matSelect.addEventListener('change', compute);
  }
  compute();
}

function initTrainingCatalogFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('category');
  if (!cat) return;

  const legacyMap = {
    'iso-9001': 'iso-training',
    'iso-27001': 'iso-training',
    'iso-22301': 'iso-training',
    governance: 'iso-training',
    tech: 'cybersecurity-training',
    management: 'corporate-leadership'
  };

  activeCategory = legacyMap[cat] || cat;
}

function matchesDurationFilter(durationStr, filterVal) {
  if (filterVal === 'all') return true;
  const d = (durationStr || '').toLowerCase();
  if (filterVal === '1-day') return d === '1 day';
  if (filterVal === '2-days') return d === '2 days';
  if (filterVal === '3-plus-days') return d === '3 days' || d === '6 days';
  if (filterVal === 'custom') return d.includes('custom');
  return true;
}

function renderTrainingFilters() {
  const catWrap = document.getElementById('training-cat-pills');
  const levelSelect = document.getElementById('training-level-select');
  const searchInput = document.getElementById('training-search-input');
  const tracksWrap = document.getElementById('training-tracks-directory');

  if (tracksWrap) {
    const trainingPillar = CORE_PILLARS.find((p) => p.id === 'training-services');
    if (trainingPillar) {
      tracksWrap.innerHTML = trainingPillar.items
        .map(
          (item) => `
          <li>
            <a href="${item.href}" class="pillar-topic-link ${item.featured ? 'pillar-topic-featured' : ''}">
              <span class="pillar-topic-num">${item.num}.</span>
              <span class="pillar-topic-title">${item.title[currentLang]}</span>
              <span class="pillar-topic-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        `
        )
        .join('');
    }
  }

  if (!catWrap) return;

  const categories = [
    { id: 'all', label: t('training.catAll') },
    ...TRAINING_CATALOGUE_2026.map((cat) => ({
      id: cat.id,
      label: `${cat.num}. ${cat.shortTitle[currentLang]} (${cat.totalListings})`
    }))
  ];

  catWrap.innerHTML = categories
    .map(
      (c) => `
      <button type="button"
              class="filter-pill"
              data-cat="${c.id}"
              aria-pressed="${c.id === activeCategory ? 'true' : 'false'}">
        ${c.label}
      </button>
    `
    )
    .join('');

  catWrap.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderTrainingFilters();
      renderTrainingCatalog();
    });
  });

  if (levelSelect && !levelSelect.dataset.bound) {
    levelSelect.dataset.bound = 'true';
    levelSelect.addEventListener('change', (e) => {
      activeLevel = e.target.value;
      renderTrainingCatalog();
    });
  }

  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = 'true';
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderTrainingCatalog();
    });
  }
}

function renderTrainingCatalog() {
  const grid = document.getElementById('training-courses-grid');
  const countEl = document.getElementById('training-results-count');
  const emptyEl = document.getElementById('training-empty-state');
  if (!grid) return;

  let totalMatched = 0;
  const renderedBlocks = [];

  for (const cat of TRAINING_CATALOGUE_2026) {
    if (activeCategory !== 'all' && cat.id !== activeCategory) continue;

    const matchedSubcategories = [];

    for (const sub of cat.subcategories) {
      const matchedCourses = sub.courses.filter((course) => {
        const matchDur = matchesDurationFilter(course.duration, activeLevel);
        const blob = `${cat.title.en} ${cat.title.ms} ${sub.title.en} ${sub.title.ms} ${course.title} ${course.duration} ${course.scope || ''}`.toLowerCase();
        const matchSearch = !searchQuery || blob.includes(searchQuery);
        return matchDur && matchSearch;
      });

      if (matchedCourses.length > 0) {
        totalMatched += matchedCourses.length;
        matchedSubcategories.push({ sub, matchedCourses });
      }
    }

    if (matchedSubcategories.length > 0) {
      const catCourseCount = matchedSubcategories.reduce((acc, s) => acc + s.matchedCourses.length, 0);
      renderedBlocks.push({ cat, matchedSubcategories, catCourseCount });
    }
  }

  if (countEl) {
    countEl.textContent = `${totalMatched} ${t('training.countLabel')}`;
  }

  if (!renderedBlocks.length) {
    grid.innerHTML = '';
    if (emptyEl) emptyEl.hidden = false;
    return;
  }

  if (emptyEl) emptyEl.hidden = true;

  grid.innerHTML = renderedBlocks
    .map(
      ({ cat, matchedSubcategories, catCourseCount }, idx) => `
      <section class="catalog-category-block ${idx > 0 ? 'catalog-category-deferred' : ''}" aria-labelledby="cat-heading-${cat.id}">
        <header class="catalog-category-header">
          <div>
            <span class="pillar-code">CATEGORY 0${cat.num} • PEOPLE.PROCESSES.PROGRESS.</span>
            <h2 id="cat-heading-${cat.id}" class="catalog-category-title">${cat.title[currentLang]}</h2>
          </div>
          <div class="catalog-category-badges">
            <span class="badge">${catCourseCount} ${t('training.listingsWord')}</span>
            <a href="bulletin.html?topic=${encodeURIComponent(cat.topicId)}#bulletin-updates" class="btn btn-secondary btn-sm">
              ${t('training.bulletinBtn')} →
            </a>
          </div>
        </header>

        <div class="catalog-subcategories-stack">
          ${matchedSubcategories
            .map(
              ({ sub, matchedCourses }) => `
            <div class="catalog-subcategory-group">
              <h3 class="catalog-subcategory-title">${sub.title[currentLang]}</h3>
              <ol class="catalog-courses-list">
                ${matchedCourses
                  .map(
                    (c) => `
                  <li class="catalog-course-item">
                    <div class="catalog-course-main">
                      <span class="catalog-course-no">${String(c.no).padStart(2, '0')}</span>
                      <div class="catalog-course-info">
                        <strong class="catalog-course-title">${c.title}</strong>
                        ${
                          c.scope
                            ? `<p class="catalog-course-scope"><strong>${t('training.scopeLabel')}</strong> ${c.scope}</p>`
                            : ''
                        }
                      </div>
                    </div>
                    <div class="catalog-course-meta">
                      <span class="badge">${c.duration}</span>
                      <a href="contact.html?course=${encodeURIComponent(c.title)}#corporate-enquiry-form" class="btn btn-primary btn-sm">
                        ${t('training.bookBtn')}
                      </a>
                    </div>
                  </li>
                `
                  )
                  .join('')}
              </ol>
            </div>
          `
            )
            .join('')}
        </div>
      </section>
    `
    )
    .join('');
}

function bindSyllabusTriggers(scope) {
  scope.querySelectorAll('[data-open-syllabus]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openSyllabusModal(btn.dataset.openSyllabus);
    });
  });
}

function openSyllabusModal(courseId) {
  const dialog = document.getElementById('syllabus-dialog');
  const course = COURSES.find((c) => c.id === courseId);
  if (!dialog || !course) return;

  activeModalCourseId = courseId;

  document.getElementById('modal-code').textContent = `${course.code} • ${course.standard}`;
  document.getElementById('modal-title').textContent = course.title[currentLang];
  document.getElementById('modal-duration').textContent = course.duration[currentLang];
  document.getElementById('modal-mode').textContent = course.mode[currentLang];
  document.getElementById('modal-next').textContent = course.nextDate[currentLang];
  document.getElementById('modal-audience').textContent = course.audience[currentLang];
  document.getElementById('modal-outcomes').innerHTML = course.outcomes[currentLang]
    .map((item) => `<li>${item}</li>`)
    .join('');
  document.getElementById('modal-syllabus').innerHTML = course.syllabus[currentLang]
    .map((item) => `<li>${item}</li>`)
    .join('');
  document.getElementById('modal-book-link').href = `contact.html?course=${encodeURIComponent(
    course.code + ' — ' + course.title[currentLang]
  )}`;

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
}

function initModalCloseHandlers() {
  const dialog = document.getElementById('syllabus-dialog');
  if (!dialog) return;

  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    import('https://esm.run/invokers-polyfill').catch(() => {
      document.querySelectorAll('[commandfor="syllabus-dialog"][command="close"]').forEach((btn) => {
        btn.addEventListener('click', () => dialog.close());
      });
    });
  }

  if (!('closedBy' in HTMLDialogElement.prototype)) {
    let pointerDownOutside = false;
    const isOutside = (e) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    dialog.addEventListener('pointerdown', (e) => {
      pointerDownOutside = isOutside(e);
    });
    dialog.addEventListener('pointerup', (e) => {
      if (pointerDownOutside && isOutside(e)) dialog.close();
      pointerDownOutside = false;
    });
  }

  const resetBtn = document.getElementById('training-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCategory = 'all';
      activeLevel = 'all';
      searchQuery = '';
      const levelSelect = document.getElementById('training-level-select');
      const searchInput = document.getElementById('training-search-input');
      if (levelSelect) levelSelect.value = 'all';
      if (searchInput) searchInput.value = '';
      renderTrainingFilters();
      renderTrainingCatalog();
    });
  }
}

function renderServicesSection() {
  const grid = document.getElementById('services-cards-grid');
  if (grid) {
    grid.innerHTML = SERVICES.map(
      (srv) => `
      <article class="service-card reveal-up">
        <span class="badge">${srv.tag[currentLang]}</span>
        <h3>${srv.title[currentLang]}</h3>
        <div class="tag-row">
          ${srv.standards.map((s) => `<span class="pillar-code" style="padding:0.2rem 0.55rem;background:var(--bg-elevated);border-radius:6px;">${s}</span>`).join('')}
        </div>
        <p>${srv.summary[currentLang]}</p>
        <ul class="check-list">
          ${srv.deliverables[currentLang].map((d) => `<li>${d}</li>`).join('')}
        </ul>
      </article>
    `
    ).join('');
  }

  const tabsWrap = document.getElementById('pdca-tabs-list');
  const panelWrap = document.getElementById('pdca-tab-panel');
  if (tabsWrap && panelWrap) {
    tabsWrap.innerHTML = PDCA_ROADMAP.map(
      (st, idx) => `
      <button type="button"
              id="pdca-tab-${idx}"
              role="tab"
              aria-selected="${idx === activePdcaIndex ? 'true' : 'false'}"
              aria-controls="pdca-tab-panel"
              tabindex="${idx === activePdcaIndex ? '0' : '-1'}"
              class="filter-pill"
              data-pdca-idx="${idx}">
        ${st.step}: ${st.phase[currentLang]}
      </button>
    `
    ).join('');

    const active = PDCA_ROADMAP[activePdcaIndex] || PDCA_ROADMAP[0];
    panelWrap.setAttribute('aria-labelledby', `pdca-tab-${activePdcaIndex}`);
    panelWrap.innerHTML = `
      <div class="pdca-card" style="border-color:var(--border-strong);">
        <span class="pdca-step">${active.step} • ${active.phase[currentLang]}</span>
        <h3>${active.title[currentLang]}</h3>
        <p>${active.summary[currentLang]}</p>
        <ul class="check-list">
          ${active.deliverables[currentLang].map((d) => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `;

    const tabBtns = Array.from(tabsWrap.querySelectorAll('[data-pdca-idx]'));
    tabBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        activePdcaIndex = Number(btn.dataset.pdcaIdx);
        renderServicesSection();
      });

      btn.addEventListener('keydown', (e) => {
        const total = PDCA_ROADMAP.length;
        let nextIdx = null;
        if (e.key === 'ArrowRight') nextIdx = (idx + 1) % total;
        else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + total) % total;
        else if (e.key === 'Home') nextIdx = 0;
        else if (e.key === 'End') nextIdx = total - 1;
        if (nextIdx !== null) {
          e.preventDefault();
          activePdcaIndex = nextIdx;
          renderServicesSection();
          document.getElementById(`pdca-tab-${nextIdx}`)?.focus();
        }
      });
    });
  }
}

function renderAboutTeam() {
  const grid = document.getElementById('about-team-grid');
  if (!grid || !TEAM_MEMBERS.length) return;

  const selected = TEAM_MEMBERS.find((m) => m.id === activeTeamMemberId) || null;
  grid.classList.toggle('has-expanded-member', Boolean(selected));

  // When a profile is clicked, place the expanded profile first so it spreads the whole top row
  // while the other 3 profiles move smoothly onto the row below.
  const orderedMembers = selected
    ? [selected, ...TEAM_MEMBERS.filter((m) => m.id !== selected.id)]
    : TEAM_MEMBERS;

  grid.innerHTML = orderedMembers
    .map((member) => {
      const isExpanded = selected?.id === member.id;
      return `
        <article class="team-member-card ${isExpanded ? 'is-expanded' : ''}"
                 style="view-transition-name: team-card-${member.id};">
          <div class="team-card-visual">
            <div class="team-card-meta" style="view-transition-name: team-meta-${member.id};">
              <strong class="team-member-name">${member.name}</strong>
              <span class="team-member-role">${member.role[currentLang]}</span>
            </div>
            <div class="team-portrait-stage" style="view-transition-name: team-photo-${member.id};">
              <img src="${member.image}"
                   alt="${member.name} — ${member.role[currentLang]}"
                   class="team-portrait-img"
                   loading="lazy"
                   width="360"
                   height="450">
            </div>
          </div>

          ${
            isExpanded
              ? `
            <div class="team-card-details">
              <div class="team-details-header">
                <span class="team-spotlight-cred">${member.credential[currentLang]}</span>
                <button type="button"
                        class="team-collapse-btn"
                        data-team-close="${member.id}"
                        aria-label="Collapse ${member.name} profile">
                  ✕
                </button>
              </div>
              <h3 class="team-spotlight-name">${member.name}</h3>
              <p class="team-spotlight-role-sub">${member.role[currentLang]}</p>
              <p class="team-spotlight-bio">${member.bio[currentLang]}</p>
              <div class="team-spotlight-tags">
                ${member.specialties[currentLang].map((sp) => `<span class="team-spec-chip">${sp}</span>`).join('')}
              </div>
              <div class="team-spotlight-actions">
                <a href="${member.catalogLink}" class="btn btn-secondary btn-sm">
                  ${t('about.teamCoursesCta')}
                </a>
                <a href="contact.html?course=${encodeURIComponent('Consultation with ' + member.name)}#corporate-enquiry-form" class="btn btn-primary btn-sm">
                  ${t('about.teamConsultCta')} →
                </a>
              </div>
            </div>
          `
              : ''
          }

          <button type="button"
                  class="team-card-trigger"
                  data-team-id="${member.id}"
                  aria-expanded="${isExpanded ? 'true' : 'false'}"
                  aria-label="${member.name} — ${member.role[currentLang]}">
          </button>
        </article>
      `;
    })
    .join('');

  const toggleMember = (targetId) => {
    const nextId = activeTeamMemberId === targetId ? null : targetId;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateDOM = () => {
      activeTeamMemberId = nextId;
      renderAboutTeam();
      if (nextId) {
        const expandedCard = grid.querySelector('.team-member-card.is-expanded');
        if (expandedCard) {
          const rect = expandedCard.getBoundingClientRect();
          if (rect.top < 110 || rect.top > window.innerHeight * 0.65) {
            expandedCard.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
          }
        }
      }
    };

    if (typeof document.startViewTransition === 'function' && !reduceMotion) {
      document.startViewTransition(() => {
        updateDOM();
      });
    } else {
      updateDOM();
    }
  };

  grid.querySelectorAll('[data-team-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleMember(btn.dataset.teamId);
    });
  });

  grid.querySelectorAll('[data-team-close]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMember(btn.dataset.teamClose);
    });
  });
}

function renderAboutSectors() {
  const sectorsGrid = document.getElementById('about-sectors-grid');
  if (!sectorsGrid) return;
  const sectors = t('about.sectors');
  if (Array.isArray(sectors)) {
    sectorsGrid.innerHTML = sectors.map((sec) => `<div class="sector-tile reveal-up">${sec}</div>`).join('');
  }
}

function renderFaqs() {
  const faqWrap = document.getElementById('contact-faq-list');
  if (!faqWrap) return;
  faqWrap.innerHTML = FAQS.map(
    (item, idx) => `
    <details class="faq-item" name="faq" ${idx === 0 ? 'open' : ''}>
      <summary>${item.q[currentLang]}</summary>
      <div class="faq-body">
        <p>${item.a[currentLang]}</p>
      </div>
    </details>
  `
  ).join('');
}

function initContactForm() {
  const form = document.getElementById('corporate-enquiry-form');
  if (!form) return;

  // Populate standard options dynamically + read ?course= prefill
  const stdSelect = document.getElementById('enquiry-standard');
  const params = new URLSearchParams(window.location.search);
  const prefillCourse = params.get('course');

  if (stdSelect && prefillCourse) {
    let matched = false;
    for (const opt of stdSelect.options) {
      if (opt.value === prefillCourse || prefillCourse.includes(opt.value)) {
        opt.selected = true;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const customOpt = document.createElement('option');
      customOpt.value = prefillCourse;
      customOpt.textContent = prefillCourse;
      customOpt.selected = true;
      stdSelect.appendChild(customOpt);
    }
  }


  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', 'polite');
  announcer.classList.add('visually-hidden');
  document.body.append(announcer);

  let announceTimer;
  let announcedField;
  const flagged = new WeakSet();
  const announced = new WeakSet();
  const dirtyState = new WeakMap();

  const linkError = (el, shown) => {
    const errorId = el.dataset.error;
    if (!errorId) return;
    const ids = (el.getAttribute('aria-describedby') || '')
      .split(/\s+/)
      .filter((id) => id && id !== errorId);
    if (shown) ids.push(errorId);
    if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
    else el.removeAttribute('aria-describedby');
  };

  const announceError = (el) => {
    const error = document.getElementById(el.dataset.error);
    if (!error) return;
    const label = el.labels?.[0] ? `${el.labels[0].textContent.trim()}: ` : '';
    clearTimeout(announceTimer);
    announcer.textContent = '';
    announcedField = el;
    announceTimer = setTimeout(() => {
      announcer.textContent = label + error.textContent.trim();
    }, 450);
  };

  const syncAria = (el, announce = false) => {
    if (!el.matches?.('input, select, textarea')) return;
    const supportsUserInvalid = typeof CSS !== 'undefined' && CSS.supports('selector(:user-invalid)');
    const invalid = supportsUserInvalid
      ? el.matches(':user-invalid')
      : el.classList.contains('user-invalid-fallback');

    if (invalid) {
      if (announce && !announced.has(el)) {
        announceError(el);
        announced.add(el);
      }
      el.setAttribute('aria-invalid', 'true');
      linkError(el, true);
      flagged.add(el);
    } else if (flagged.has(el) || el.getAttribute('aria-invalid') !== 'true') {
      el.setAttribute('aria-invalid', 'false');
      linkError(el, false);
      flagged.delete(el);
      announced.delete(el);
      if (announcedField === el) {
        clearTimeout(announceTimer);
        announcer.textContent = '';
      }
    }
  };

  form.querySelectorAll('input, select, textarea').forEach((el) => {
    el.setAttribute('aria-invalid', 'false');
  });

  if (typeof CSS === 'undefined' || !CSS.supports('selector(:user-invalid)')) {
    form.addEventListener(
      'blur',
      (e) => {
        const input = e.target;
        if (!input.checkValidity) return;
        const st = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
        st.hasBlurred = true;
        dirtyState.set(input, st);
        if (st.hasInteracted) {
          input.classList.toggle('user-invalid-fallback', !input.validity.valid);
        }
      },
      true
    );
    form.addEventListener('input', (e) => {
      const input = e.target;
      if (!input.checkValidity) return;
      const st = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      st.hasInteracted = true;
      dirtyState.set(input, st);
      if (st.hasBlurred) {
        input.classList.toggle('user-invalid-fallback', !input.validity.valid);
      }
    });
  }

  form.addEventListener('blur', (e) => syncAria(e.target, true), true);
  form.addEventListener('input', (e) => {
    if (e.target.hasAttribute('aria-invalid')) syncAria(e.target);
  });
  form.addEventListener('change', (e) => syncAria(e.target, true), true);
  form.addEventListener(
    'invalid',
    (e) => {
      announced.add(e.target);
      if (typeof CSS === 'undefined' || !CSS.supports('selector(:user-invalid)')) {
        e.target.classList.add('user-invalid-fallback');
      }
      syncAria(e.target);
    },
    true
  );

  const successBox = document.getElementById('form-success-panel');
  const successText = document.getElementById('form-success-text');
  const resetSuccessBtn = document.getElementById('form-new-enquiry-btn');
  const submitBtn = document.getElementById('enquiry-submit-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();
      form.reportValidity();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t('contact.submitting');
    }

    const formData = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
    } catch {

    }

    const refId = `CS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    if (successText) {
      successText.textContent = t('contact.successMsg').replace('{ref}', refId);
    }
    form.hidden = true;
    if (successBox) successBox.hidden = false;
    announcer.textContent = t('contact.successTitle');

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = t('contact.submitBtn');
    }
  });

  if (resetSuccessBtn && successBox) {
    resetSuccessBtn.addEventListener('click', () => {
      form.reset();
      form.querySelectorAll('input, select, textarea').forEach((el) => {
        el.classList.remove('user-invalid-fallback');
        syncAria(el);
      });
      successBox.hidden = true;
      form.hidden = false;
    });
  }
}

function findTopicDetails(topicId) {
  if (!topicId) return null;
  for (const pillar of CORE_PILLARS) {
    const found = pillar.items.find((it) => it.topicId === topicId);
    if (found) {
      return { pillar, item: found };
    }
  }
  return null;
}

function renderBulletins() {
  const grid = document.getElementById('bulletin-cards-grid');
  const pillsWrap = document.getElementById('bulletin-filter-pills');
  const countEl = document.getElementById('bulletin-results-count');
  if (!grid) return;

  if (pillsWrap) {
    const categories = [
      { id: 'all', label: t('bulletin.filterAll') },
      { id: 'consultancy', label: t('bulletin.filterConsultancy') },
      { id: 'digitalization', label: t('bulletin.filterDigitalization') },
      { id: 'training', label: t('bulletin.filterTraining') },
      { id: 'csr', label: t('bulletin.filterCsr') }
    ];

    pillsWrap.innerHTML = categories
      .map(
        (cat) => `
        <button type="button"
                class="filter-pill"
                data-bulletin-cat="${cat.id}"
                aria-pressed="${!activeBulletinTopic && cat.id === activeBulletinCategory ? 'true' : 'false'}">
          ${cat.label}
        </button>
      `
      )
      .join('');

    pillsWrap.querySelectorAll('[data-bulletin-cat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeBulletinTopic = '';
        activeBulletinCategory = btn.dataset.bulletinCat;
        renderBulletins();
      });
    });
  }

  const topicDetails = findTopicDetails(activeBulletinTopic);

  const filtered = BULLETINS.filter((item) => {
    if (topicDetails) {
      return Array.isArray(item.topics) && item.topics.includes(activeBulletinTopic);
    }
    return activeBulletinCategory === 'all' || item.category === activeBulletinCategory;
  });

  const displayList = filtered.length ? filtered : BULLETINS;

  if (countEl) {
    if (topicDetails) {
      countEl.innerHTML = `
        <strong>${t('bulletin.topicActivePrefix')} ${topicDetails.item.title[currentLang]}</strong>
        <button type="button" id="clear-topic-filter-btn" class="btn btn-secondary btn-sm" style="margin-inline-start:0.65rem;">
          ${t('bulletin.topicClearBtn')}
        </button>
      `;
      document.getElementById('clear-topic-filter-btn')?.addEventListener('click', () => {
        activeBulletinTopic = '';
        renderBulletins();
      });
    } else {
      countEl.textContent = `${displayList.length} ${t('bulletin.countLabel')}`;
    }
  }

  grid.innerHTML = displayList
    .map(
      (item) => `
      <article class="service-card reveal-up">
        <div class="course-card-top">
          <span class="badge">${item.categoryLabel[currentLang]}</span>
          <span class="pillar-code">${item.date[currentLang]}</span>
        </div>
        <h3>${item.title[currentLang]}</h3>
        <span class="badge badge-hrd">${topicDetails ? topicDetails.item.title[currentLang] : item.highlightBadge[currentLang]}</span>
        <p>${item.summary[currentLang]}</p>
        <div style="padding-block-start:0.5rem;border-block-start:1px solid var(--border-subtle);">
          <a href="${item.ctaHref}" class="btn btn-secondary btn-sm">${item.ctaText[currentLang]} →</a>
        </div>
      </article>
    `
    )
    .join('');
}

function renderDynamicSections() {
  renderHeroSelector();
  renderHomePillars();
  renderHomeMethodology();
  renderHomeCalendar();
  initReadinessEstimator();
  renderBulletins();
  renderTrainingFilters();
  renderTrainingCatalog();
  renderServicesSection();
  renderAboutTeam();
  renderAboutSectors();
  renderFaqs();

  if (activeModalCourseId && document.getElementById('syllabus-dialog')?.open) {
    openSyllabusModal(activeModalCourseId);
  }
  initScrollReveals();
}

function init() {
  initTrainingCatalogFromUrl();
  applyStaticTranslations();
  renderDynamicSections();
  initSmartNavbar();
  initModalCloseHandlers();
  initContactForm();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_THEME_KEY) {
      applyThemeToDocument(e.newValue);
    }
    if (e.key === STORAGE_LANG_KEY && (e.newValue === 'en' || e.newValue === 'ms')) {
      currentLang = e.newValue;
      applyStaticTranslations();
      renderDynamicSections();
    }
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    updateThemeButtonState();
  });
}

document.addEventListener('DOMContentLoaded', init);
