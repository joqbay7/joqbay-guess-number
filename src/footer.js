// Footer semântico e acessível
export function renderFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} Seu Nome. Projeto para Alura + Oracle Next Education.</p>
    </footer>
  `);
}
