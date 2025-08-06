class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-blue-900 text-white py-8 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-lg font-semibold">Portfolio JACOME</p>
            <p class="text-sm text-gray-300">© ${new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          
          <div class="flex space-x-6 items-center">
            <a href="contacto.html" class="text-sm underline hover:text-gray-300 transition">Contacto</a>

            <a href="#" aria-label="Facebook" class="hover:text-gray-300 transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114.5 6h2.5v3h-2c-.5 0-1 .5-1 1V12H17l-.5 3h-2v7A10 10 0 0022 12z"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/hdavid_jcm/" aria-label="Instagram" class="hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.25 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
            </a>


            <a href="https://www.linkedin.com/in/h%C3%A9ctor-david-j%C3%A1come-l%C3%B3pez-0b4014306" aria-label="LinkedIn" class="hover:text-gray-300 transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8 10H5v9h3v-9zm-1.5-4A1.5 1.5 0 105 7.5 1.5 1.5 0 006.5 6zM19 19v-5.5a3 3 0 00-6 0V19h3v-5.5a1 1 0 012 0V19h1z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
