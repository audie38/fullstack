<template>
  <header
    class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
  >
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <a class="font-bold text-lg text-primary block py-6" href="#home"
            >Audie Milson</a
          >
        </div>
        <div class="flex items-center px-4">
          <button
            @click="(e) => toggler(e)"
            id="hamburger"
            name="hamburger"
            type="button"
            class="block absolute right-4 lg:hidden"
          >
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-top-left"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
            ></span>
          </button>

          <nav
            id="nav-menu"
            class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
          >
            <ul class="block lg:flex">
              <li class="group">
                <a
                  href="#home"
                  class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >Beranda</a
                >
              </li>
              <li class="group">
                <a
                  href="#about"
                  class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >Tentang Saya</a
                >
              </li>
              <li class="group">
                <a
                  href="#portofolio"
                  class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >Portofolio</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggler(e) {
      e.target.classList.toggle("hamburger-active");
      document.querySelector("#nav-menu").classList.toggle("hidden");
    },
  },
};
</script>

<style></style>
