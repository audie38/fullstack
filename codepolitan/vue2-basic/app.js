Vue.component("price", {
  data: function () {
    return {};
  },
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "$",
    },
    precision: {
      type: Number,
      default: 2,
    },
  },
  template: `
  <span>{{this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</span>
  `,
});

Vue.component("product-list", {
  props: ["products", "maximum"],
  methods: {},
  template: `  
  <div class="row">
    <div
      v-if="item.price <= Number(maximum)"
      class="col-md-3 col-sm-6 my-2"
      v-for="(item, index) in products"
      :key="index"
    >
      <div class="card mx-2">
        <img
          :src="item.image"
          class="card-img-top img-fluid"
          :alt="item.name"
          loading="lazy"
        />
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <p class="card-text">{{item.description}}</p>
          <p class="card-text">
            <price :value="Number(item.price)" />
          </p>
          <button
            @click="$emit('add', item)"
            class="btn btn-primary w-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  `,
});

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
