import "./meal-item.js";

class MealList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.className = "row row-cols-1 row-cols-sm-2 row-cols-md-4";
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      mealItemElement.style.display = "flex";
      mealItemElement.setAttribute("class", "my-2");
      this.appendChild(mealItemElement);
    });
  }
}

customElements.define("meal-list", MealList);
