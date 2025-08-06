import './user-actions-component.js';
import './mobile-menu-component.js';

class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="text-2xl font-semibold text-blue-900 tracking-wide">Héctor D. Jácome López</div>
            <nav class="hidden md:flex space-x-8">
              <a href="index.html">Inicio</a>
              <a href="proyectos.html">Proyectos</a>
              <a href="sobre-mi.html">Sobre mí</a>
              <a href="contacto.html">Contacto</a>
            </nav>
            
            <div class="md:hidden">
              <button id="menu-toggle" class="text-gray-800">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden">
          <mobile-menu></mobile-menu>
        </div>
      </header>
    `;

    setTimeout(() => {
      const toggle = this.querySelector('#menu-toggle');
      const menu = this.querySelector('#mobile-menu');
      toggle?.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }, 0);
  }
}

customElements.define('header-component', HeaderComponent);
