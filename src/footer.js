// Footer semântico e acessível
export function renderFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} Julio Joqbay. Projeto para Oracle Next Education + Alura.</p>
    </footer>
  `);
}
