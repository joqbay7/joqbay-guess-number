// Header com navegação responsiva e acessível
export function renderHeader() {
  document.body.insertAdjacentHTML('afterbegin', `
    <header>
      <nav class="navbar" aria-label="Barra de navegação principal">
        <div class="navbar-logo">
          <a href="/" aria-label="Página inicial">
            <img src="/public/joqbay-logo.png" alt="Logo do site" height="40" />
          </a>
        </div>
        <button class="navbar-toggle" aria-label="Abrir menu" aria-controls="navbar-links" aria-expanded="false">
          <span class="navbar-toggle-icon"></span>
        </button>
        <ul class="navbar-links" id="navbar-links">
          <li><a href="https://github.com/seu-usuario" target="_blank" rel="noopener" class="cta-link" aria-label="Ir para o GitHub">GitHub</a></li>
          <li><a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener" class="cta-link" aria-label="Ir para o LinkedIn">LinkedIn</a></li>
        </ul>
      </nav>
    </header>
  `);

  // Acessibilidade e toggle do menu mobile
  const toggleBtn = document.querySelector('.navbar-toggle');
  const navLinks = document.getElementById('navbar-links');
  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('open');
  });
}
