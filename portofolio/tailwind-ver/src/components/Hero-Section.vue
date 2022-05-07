<template>
  <div class="container">
    <div class="flex flex-wrap">
      <div class="w-full self-center px-4 lg:w-1/2">
        <h1 class="text-base font-semibold text-primary md:text-xl">
          Halo Semua 👋, saya
          <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl"
            >Audie Milson</span
          >
        </h1>
        <h2 class="font-medium text-secondary text-lg mb-5 lg:text-2xl">
          FullStack App Developer
        </h2>
        <p class="font-medium text-secondary mb-10 leading-relax">
          Web App Developer | Data Analyst
        </p>

        <router-link
          to="/"
          class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
        >
          Hubungi Saya
        </router-link>
      </div>
      <div class="w-full self-end px-4 lg:w-1/2">
        <div class="relative mt-10 lg:mt-9 lg:right-0">
          <img
            class="max-w-full mx-autobl"
            src="../assets/removed-bg-pp.png"
            alt="Audie Milson"
          />
          <span
            class="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125 md:left-1/3 lg:left-1/3"
          >
            <svg
              width="600"
              height="600"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#14B8A6"
                d="M46.6,-11.3C54.8,10.3,52.2,39.2,34.6,53.3C17,67.5,-15.6,66.9,-34.3,52.1C-53.1,37.3,-58,8.4,-50,-12.8C-42,-34,-21,-47.6,-0.9,-47.3C19.2,-47,38.3,-32.9,46.6,-11.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
