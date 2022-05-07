class DataSource {
  static searchMealCategory(keyword) {
    if (keyword == "" || keyword == undefined) {
      keyword = "seafood";
    }
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
  static searchMeal(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`
          )
            .then((response) => {
              return response.json();
            })
            .then((responseJson) => {
              if (responseJson.meals) {
                return Promise.resolve(responseJson.meals);
              } else {
                return Promise.reject(`${keyword} is not found`);
              }
            });
        }
      });
  }
  static searchMealDetail(mealId) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
