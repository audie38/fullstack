class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchMeal").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <div class="container my-5">
      <div class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search Food Recipe"
          aria-label="Search"
          id="searchMeal"
        />
        <button id="searchButton" class="btn btn-outline-success" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>`;

    this.shadowDOM
      .querySelector("#searchButton")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
