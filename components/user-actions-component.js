class UserActionsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="#" class="text-blue-900 hover:underline">Iniciar sesión</a>
      <a href="#" class="bg-blue-900 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 transition">
        Crear cuenta
      </a>
    `;
  }
}

customElements.define('user-actions', UserActionsComponent);
