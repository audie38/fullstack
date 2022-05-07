class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <div class="card">
          <img src="${this._meal.strMealThumb}" loading="lazy" class="img-thumbnail" data-id="${this._meal.idMeal}"  alt="${this._meal.strMeal}" />
          <div class="card-body">
              <h5 class="card-title">${this._meal.strMeal}</h5>
          </div>
      </div>
      `;
  }
}

customElements.define("meal-item", MealItem);
