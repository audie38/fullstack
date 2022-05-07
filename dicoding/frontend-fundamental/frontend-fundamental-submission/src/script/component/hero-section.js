class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <div class="container d-flex justify-content-center flex-column">
        <img
        src="https://images.unsplash.com/photo-1602296751259-edfb8274b682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        class="d-block w-100 img-fluid"
        style="max-height: 500px; object-fit: cover"
        alt="Banner Hero Section"
        />

        <h1 class="text-center mt-4">Collection of Beautiful Food Photos</h1>
        <p class="text-center"></p>
    </div>`;
  }
}

customElements.define("hero-section", HeroSection);
