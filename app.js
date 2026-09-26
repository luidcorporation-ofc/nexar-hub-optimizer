const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  nav.classList.toggle('open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    nav?.classList.remove('open');
  }
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

document.querySelector('#year').textContent = String(new Date().getFullYear());


// Metadados da versão pública atual.
const description = 'NEXAR HUB OPTIMIZER 2.3.1 Beta 2 Pulse Debloat: CPU Guard 2.2, Debloat Center reversível, RAM Guard automático e GameFlow para Windows 10 e 11.';
document.querySelector('meta[name="description"]')?.setAttribute('content', description);
document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
document.title = 'NEXAR HUB OPTIMIZER 2.3.1 Beta 2 — Controle reversível.';


// historyCacheFallback: mantém o histórico correto enquanto caches de página antigos expiram.
const versionList = document.querySelector('.version-list');
const has23Stable = Array.from(versionList?.querySelectorAll('.version-row') ?? []).some((row) =>
  row.querySelector('.version-number')?.textContent?.trim() === '2.3' &&
  row.querySelector('.version-channel')?.textContent?.trim() === 'STABLE'
);
if (versionList && !has23Stable) {
  const stableHistory = `
    <article class="version-row reveal visible">
      <div class="version-release"><strong class="version-number">2.3</strong><span class="version-channel">STABLE</span></div>
      <div class="version-details"><div class="version-heading"><h3>GameFlow e CPU Guard 2.2</h3><span class="version-status">ESTÁVEL ANTERIOR</span></div><p>Versão estável com GameFlow, Debloat Windows reversível, atualização interna verificada e Discord Lite para Opera e Firefox.</p><div class="version-tags"><span>GameFlow</span><span>CPU Guard 2.2</span><span>Debloat Windows</span><span>Discord Lite</span><span>x64 + x86</span></div></div>
      <div class="version-actions"><span class="version-date">14 SET 2026</span><a class="button button-secondary version-button" href="https://github.com/luidcorporation-ofc/nexar-hub-optimizer/releases/tag/v2.3.0" target="_blank" rel="noreferrer" aria-label="Abrir downloads da versão 2.3 Stable">Ver downloads →</a></div>
    </article>
    <article class="version-row reveal visible">
      <div class="version-release"><strong class="version-number">2.3</strong><span class="version-channel">BETA</span></div>
      <div class="version-details"><div class="version-heading"><h3>GameFlow, Steam Shield e CPU Guard 2.2</h3><span class="version-status status-replaced">BETA ANTERIOR</span></div><p>Primeiro pré-lançamento do GameFlow, com proteção externa para sessões de jogos e lives, Steam Shield e Stream Shield.</p><div class="version-tags"><span>GameFlow</span><span>Steam Shield</span><span>CPU Guard 2.2</span><span>Stream Shield</span><span>x64 + x86</span></div></div>
      <div class="version-actions"><span class="version-date">09 SET 2026</span><a class="button button-ghost version-button" href="https://github.com/luidcorporation-ofc/nexar-hub-optimizer/releases/tag/v2.3.0-beta.1" target="_blank" rel="noreferrer" aria-label="Abrir downloads da versão 2.3 Beta GameFlow">Ver downloads →</a></div>
    </article>`;
  const firstPrevious = versionList.querySelector('.version-row:not(.version-current)');
  firstPrevious?.insertAdjacentHTML('beforebegin', stableHistory);
}
