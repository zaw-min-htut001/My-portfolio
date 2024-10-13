<template>
  <Spinner v-if="isLoading" />

  <div v-else class="mx-auto" id="content">
    <Nav />
    <!-- HERO  -->
    <Hero />
    <!-- HERO  ENDED-->

    <!-- About sectio -->
    <About />
    <!-- About sectio -->
    <div class="mx-auto">
      <div class="hero bg-base-200 lg:min-h-full sm:min-h-screen py-2 mb-3">
        <div class="">
          <div class="divider p-5">
            <p class="text-2xl lg:text-3xl font-mono text-center">Showcase Projects</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-5">
            <div class="col-span-1">
              <div class="card glass w-80">
                <figure>
                  <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="car!" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1">
              <div class="card glass w-80">
                <figure>
                  <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="car!" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1">
              <div class="card glass w-80">
                <figure>
                  <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="car!" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1">
              <div class="card glass w-80">
                <figure>
                  <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="car!" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Spinner from "./components/Spinner.vue";

export default {
  components: {
    Nav,
    Hero,
    About,
    Spinner
  },
  data() {
    return {
      isLoading: true, // Initially, the loading spinner is shown
    };
  },
  mounted() {
    // Delay for 5 seconds (5000 milliseconds)
    setTimeout(() => {
      this.isLoading = false; // Hide the spinner after 5 seconds
    }, 1500);
  },
};
</script>
