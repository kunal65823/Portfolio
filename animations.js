(function () {
  const body = document.body;
  if (!body) return;

  const isHomePage = location.pathname === '/' || /index\.html$/i.test(location.pathname);

  const revealTargets = [
    '.firstSection',
    '.secondsection',
    '.about-firstSection',
    '.section',
    '.projects-section',
    '.contact-section',
    '.section-tittle',
    '.contact-heading',
    'footer',
    '.leftsection',
    '.rightsection',
    '.about-leftsection',
    '.about-rightsection'
  ];

  document.querySelectorAll(revealTargets.join(', ')).forEach((element) => {
    element.classList.add('reveal-layer');
  });

  document.querySelectorAll('.vertical, .section-webdeveloper, .project-card, .contact-info, .contact-form').forEach((element) => {
    element.classList.add('reveal-layer');
  });

  document.querySelectorAll('.footer-third li a').forEach((iconLink) => {
    iconLink.classList.add('social-link');
  });

  const animateIn = () => {
    body.classList.add('is-loaded');

    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.add('nav-entrance');
    }

    document.querySelectorAll('.leftsection .button').forEach((buttonGroup) => {
      buttonGroup.classList.add('button-reveal');
    });

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px'
    });

    document.querySelectorAll('.reveal-layer').forEach((element) => {
      observer.observe(element);
    });
  };

  if (!isHomePage) {
    window.setTimeout(animateIn, 0);
    return;
  }

  const loader = document.createElement('div');
  loader.id = 'premium-loader';
  loader.innerHTML = `
    <div class="loader-shell">
      <div class="loader-glow"></div>
      <div class="loader-ring loader-ring-one"></div>
      <div class="loader-ring loader-ring-two"></div>
      <div class="loader-ring loader-ring-three"></div>
      <div class="loader-core"></div>
      <div class="loader-meta">
        <p class="loader-label">Portfolio Experience</p>
        <h1 class="loader-title">Kunal Shitole</h1>
        <p class="loader-subtitle">Full Stack Developer</p>
      </div>
    </div>`;

  body.prepend(loader);
  body.classList.add('is-loading');

  window.setTimeout(() => {
    loader.classList.add('is-hidden');
    body.classList.remove('is-loading');
    animateIn();
  }, 2500);
})();
