(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    }));
  }
  const settings = window.NEW_ERA_CONFIG || {};
  const socials = document.getElementById('social-links');
  const notice = document.getElementById('contact-notice');
  if (!socials) return;
  let count = 0;
  const add = (label, url) => {
    const link = document.createElement('a');
    link.textContent = label + ' ↗';
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    socials.append(link);
    count++;
  };
  if (/^\d{8,15}$/.test(String(settings.whatsapp))) add('WhatsApp', 'https://wa.me/' + settings.whatsapp);
  if (/^https:\/\/www\.instagram\.com\/[a-zA-Z0-9_.]+\/?$/.test(String(settings.instagram))) add('Instagram', settings.instagram);
  if (/^https:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9._/?=&%-]+$/i.test(String(settings.facebook))) add('Facebook', settings.facebook);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(settings.email))) add('Correo electrónico', 'mailto:' + settings.email);
  if (notice) notice.hidden = count > 0;
})();
