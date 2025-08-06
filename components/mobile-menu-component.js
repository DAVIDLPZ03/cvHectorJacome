class MobileMenuComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="px-4 pt-4 pb-2 space-y-2 bg-white shadow-md">
        <a href="index.html" class="block text-gray-700 hover:text-blue-800">Inicio</a>
        <a href="proyectos.html" class="block text-gray-700 hover:text-blue-800">Proyecto</a>
        <a href="sobre-mi.html" class="block text-gray-700 hover:text-blue-800">Sobre mí</a>
        <a href="contacto.html" class="block text-gray-700 hover:text-blue-800">Contacto</a>
      </div>
    `;
  }
}

customElements.define('mobile-menu', MobileMenuComponent);
