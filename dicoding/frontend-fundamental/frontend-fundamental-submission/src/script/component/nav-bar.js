class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <nav class="navbar navbar-light bg-light">
            <div class="container">
            <a class="navbar-brand">
              <span class="text-danger fw-bolder">Food Gallery</span>
            </a>
            </div>
        </nav>
        `;
  }
}

customElements.define("nav-bar", NavBar);
