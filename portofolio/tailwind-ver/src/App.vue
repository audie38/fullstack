<template>
  <div>
    <Header />
    <section id="home" class="pt-36">
      <Hero />
    </section>
    <section id="about" class="pt-36 pb-32">
      <About />
    </section>
  </div>
</template>

<script>
import Header from "./components/Header-Section.vue";
import Hero from "./components/Hero-Section.vue";
import About from "./components/About-Section.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    About,
  },
  methods: {},
  mounted() {
    window.onscroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };
  },
};
</script>

<style></style>
