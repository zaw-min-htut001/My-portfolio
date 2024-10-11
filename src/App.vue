<template>
  <div class="mx-auto">
    <!-- nav Bar -->
    <div class="navbar bg-base-100 shadow-md">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">Zaw Min Htut</a>
      </div>
      <div class="navbar-end">
        <label for="theme-toggle" class="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input @click="toggleTheme" type="checkbox" value="synthwave" id="theme-toggle"
            class="toggle theme-controller" />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
    <!-- nav Bar End-->

    <!-- HERO  -->
    <div class="mx-auto">
      <div class="hero bg-base-200 lg:min-h-full sm:min-h-screen p-8">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="relative">

            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              class="max-w-sm rounded-lg shadow-2xl origin-top-left rotate-6 absolute top-0 left-4 blur-sm" />
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              class="max-w-sm rounded-lg shadow-2xl origin-bottom -rotate-6 relative" />
          </div>
          <div class="p-5 text-center lg:text-start md:text-center sm:text-center relative">
            <h1 class="text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-light">
              Hi ,I am
            </h1>
            <!-- Use TypedJs here -->
            <p class="text-3xl lg:text-4xl md:text-4xl sm:text-lg font-thin py-2" id="multipleStrings"></p>
            <p class="py-2 mb-1">
              A Backend Developer Specializing in Creative Web Solutions.
            </p>
            <div class="flex flex-col sm:flex-row gap-2 lg:justify-start md:justify-center sm:justify-center">
              <button class="btn btn-outline btn-info">Contact Me</button>
              <button class="btn btn-outline">View My Work</button>
            </div>
            <div class="laravel-logo-container absolute right-40 top-16">
              <!-- Laravel SVG logo -->
              <img src="./assets/laravel-2.svg" alt="Laravel Logo" class="laravel-logo" />
            </div>
            <div class="laravel-logo-container absolute right-28 top-10">
              <!-- Laravel SVG logo -->
              <img src="./assets/vue-svgrepo-com.svg" alt="Laravel Logo" class="laravel-logo" />
            </div>
            <div class="laravel-logo-container absolute right-56 top-10">
              <!-- Laravel SVG logo -->
              <img src="./assets/php-svgrepo-com.svg" alt="Laravel Logo" class="laravel-logo" />
            </div>
            <div class="laravel-logo-container absolute right-40 top-4">
              <!-- Laravel SVG logo -->
              <img src="./assets/mysql-logo-svgrepo-com.svg" alt="Laravel Logo" class="laravel-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- HERO  ENDED-->
  </div>
</template>

<style scoped>
/* Laravel logo animation */
.laravel-logo {
  opacity: 0.2;
  width: 50px;
}
</style>

<script>
import TypeIt from "typeit";

export default {
  data() {
    return {
      theme: "light", // default theme to use when the site is first loaded
    };
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme; // this is where the magic happens
    }, // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "coffee" : "light"; // switch themes based on current value of `this.theme`
    },
  },
  mounted() {
    new TypeIt("#multipleStrings", {
      strings: ["Zaw Min Htut", "Backend Developer", "Web Solutions Expert"],
      speed: 80,
      deleteSpeed: 30,
      breakLines: false,
      waitUntilVisible: true,
      loop: true,
      nextStringDelay: 2000,
      lifeLike: true,
      startDelay: null,
    }).go();
  },
};
</script>