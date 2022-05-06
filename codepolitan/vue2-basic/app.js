const app = new Vue({
  el: "#app",
  data: {
    name: "VueCommerce",
    maximum: 50,
    products: [],
    cart: [],
    style: {
      sliderStatus: false,
    },
  },
  methods: {
    addItem: function (product) {
      let productIndex;
      let productExist = false;

      this.cart.filter((item, index) => {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          productExist = true;
        }
      });

      if (productExist) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem: function (key) {
      if (this.cart[key].qty > 1) {
        this.cart[key].qty--;
      } else {
        this.cart.splice(key, 1);
      }
    },
  },
  computed: {
    sliderState: function () {
      return this.style.sliderStatus ? "d-flex" : "d-none";
    },
    cartTotal: function () {
      let sum = 0;
      for (key in this.cart) {
        sum += this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
  },
  mounted: function () {
    axios.get("https://hplussport.com/api/products/order/price").then((res) => {
      this.products = res.data;
    });
  },
  filters: {
    currencyFormat: function (value) {
      return "$" + Number.parseFloat(value).toFixed(2);
    },
  },
});
