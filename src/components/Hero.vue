<template>
    <div id="home" class="mx-auto">
      <div class="hero bg-base-200 lg:min-h-full sm:min-h-screen p-8">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="relative">

            <img src="../assets/my.jpeg" style="width: 300px;"
              class="max-w-sm rounded-lg shadow-2xl origin-top-left rotate-6 absolute top-0 left-4 blur-sm object-cover" />
            <img src="../assets/my.jpeg" style="width: 300px;"
              class="max-w-sm rounded-lg shadow-2xl origin-bottom -rotate-6 relative object-cover" />
          </div>
          <div class="p-5 text-center lg:text-start md:text-center sm:text-center relative">
            <h1 class="text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-light">
              Hi ,I am
            </h1>
            <!-- Use TypedJs here -->
            <p class="text-3xl lg:text-4xl md:text-4xl sm:text-lg font-thin py-2 px-0" id="multipleStrings"></p>
            <p class="py-2 mb-1">
              A Backend Developer Specializing in Creative Web Solutions.
            </p>
            <div class="flex flex-col sm:flex-row gap-2 lg:justify-start md:justify-center sm:justify-center">
              <button class="btn btn-outline btn-info">Contact Me</button>
              <button class="btn btn-outline">View My Work</button>
            </div>
            <div class="laravel-logo-container absolute right-40 top-16">
              <!-- Laravel SVG logo -->
              <img src="../assets/laravel-2.svg" alt="Laravel Logo" class="laravel-logo" />
            </div>
            <div class="laravel-logo-container absolute right-28 top-10">
              <!-- Laravel SVG logo -->
              <img src="../assets/vue-svgrepo-com.svg" alt="Laravel Logo" class="laravel-logo" />
            </div>
            <div class="laravel-logo-container absolute right-56 top-10">
              <!-- Laravel SVG logo -->
              <img src="../assets/php-svgrepo-com.svg" alt="Laravel Logo" class="laravel-logo" />
            </div>
            <div class="laravel-logo-container absolute right-40 top-4">
              <!-- Laravel SVG logo -->
              <img src="../assets/mysql-logo-svgrepo-com.svg" alt="Laravel Logo" class="laravel-logo" />
            </div>
          </div>
        </div>
      </div>
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