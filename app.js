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


// 2.3 Stable: mantém o layout original e atualiza o conteúdo publicado.
const stableRelease = {
  tag: 'v2.3.0',
  base: 'https://github.com/luidcorporation-ofc/nexar-hub-optimizer/releases/download/v2.3.0/',
};

const replaceText = (value) => value
  .replaceAll('2.3 Beta GameFlow', '2.3 Stable GameFlow')
  .replaceAll('CPU Guard 2.0', 'CPU Guard 2.2')
  .replaceAll('Pré-lançamento', 'Lançamento estável')
  .replaceAll('ATUAL · BETA', 'ATUAL · STABLE')
  .replaceAll('09 SET 2026', '14 SET 2026')
  .replaceAll('Windows Tune', 'Debloat Windows')
  .replaceAll('Brave, Edge ou Chrome', 'Brave, Edge, Chrome, Opera ou Firefox');

const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = [];
while (walker.nextNode()) textNodes.push(walker.currentNode);
textNodes.forEach((node) => {
  const next = replaceText(node.nodeValue);
  node.nodeValue = next.trim() === 'BETA' ? 'STABLE' : next;
});

document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href || !href.includes('v2.3.0-beta.1')) return;
  link.setAttribute('href', href
    .replaceAll('v2.3.0-beta.1', 'v2.3.0')
    .replaceAll('v2.3_BETA_GAMEFLOW', 'v2.3_STABLE_GAMEFLOW'));
});

const description = 'NEXAR HUB OPTIMIZER 2.3 Stable GameFlow: CPU Guard 2.2, Debloat Windows reversível, atualização interna verificada e Discord Lite para Opera e Firefox.';
document.querySelector('meta[name="description"]')?.setAttribute('content', description);
document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
document.title = 'NEXAR HUB OPTIMIZER 2.3 Stable — Controle real. Sem promessas falsas.';
