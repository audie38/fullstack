import DataSource from "../data/data-source.js";
import "../component/search-bar.js";
import "../component/meal-list.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meal-list");

  window.addEventListener("load", async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallBackResult(message);
    }
  });

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallBackResult(message);
    }
  };

  const renderResult = (results) => {
    mealListElement.meals = results;
  };

  const fallBackResult = (message) => {
    mealListElement.renderError(message);
  };

  searchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;
