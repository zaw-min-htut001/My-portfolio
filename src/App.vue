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
            <p class="text-2xl lg:text-3xl font-mono text-center">
              Showcase Projects
            </p>
          </div>

          <div
            class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-5"
          >
            <div
              class="col-span-1"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div class="card glass w-80">
                <figure>
                  <img
                    id="image"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/online-learning-system.git"
                      >https://github.com/zaw-min-htut001/online-learning-system.git</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-span-1"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div class="card glass w-80">
                <figure>
                  <img
                    id="image1"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/online-learning-system.git"
                      >https://github.com/zaw-min-htut001/online-learning-system.git</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-span-1"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div class="card glass w-80">
                <figure>
                  <img
                    id="image2"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/online-learning-system.git"
                      >https://github.com/zaw-min-htut001/online-learning-system.git</a
                    >
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-span-1"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div class="card glass w-80">
                <figure>
                  <img
                    id="image3"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                    <span class="badge badge-sm badge-outline">default</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/online-learning-system.git"
                      >https://github.com/zaw-min-htut001/online-learning-system.git</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer bg-neutral text-neutral-content items-center p-4">
      <aside class="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current"
        >
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          ></path>
        </svg>
        <p>
          Copyright © {{ date }} - Make with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 inline-flex text-red-600 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </p>
      </aside>
      <div class="text-center">
        <p>Email : htutzawmin66@gmail.com</p>
        <p>Ph : 09 763 122 056</p>
      </div>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            ></path>
          </svg>
        </a>
      </nav>
    </footer>
  </div>
</template>


<script>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Spinner from "./components/Spinner.vue";
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";
import { nextTick } from "vue";

export default {
  components: {
    Nav,
    Hero,
    About,
    Spinner,
  },
  data() {
    return {
      date: new Date().getFullYear(),
      isLoading: true, // Initially, the loading spinner is shown
      viewerInstance: null,
    };
  },
  methods: {
    isMobileDevice() {
      return window.innerWidth <= 768; // Adjust this value based on your preference
    },
    initializeViewer() {
      // Get the gallery element where Viewer.js will be applied
      const gallery = document.getElementById("image");
      const gallery1 = document.getElementById("image1");
      const gallery2 = document.getElementById("image2");
      const gallery3 = document.getElementById("image3");

      if (gallery) {
        // Create a new Viewer.js instance
        this.viewerInstance = new Viewer(gallery, {
          inline: false, // Display the viewer as a modal (not inline)
          toolbar: false, // Show the toolbar (zoom, rotate, etc.)
          viewed: () => {
            if (!this.isMobileDevice()) {
              this.viewerInstance.zoomTo(1); // Set default zoom level only on non-mobile devices
            }
          },
        });
      }
      if (gallery1) {
        // Create a new Viewer.js instance
        this.viewerInstance = new Viewer(gallery1, {
          inline: false, // Display the viewer as a modal (not inline)
          toolbar: true, // Show the toolbar (zoom, rotate, etc.)
          viewed: () => {
            if (!this.isMobileDevice()) {
              this.viewerInstance.zoomTo(1); // Set default zoom level only on non-mobile devices
            }
          },
        });
      }
      if (gallery2) {
        // Create a new Viewer.js instance
        this.viewerInstance = new Viewer(gallery2, {
          inline: false, // Display the viewer as a modal (not inline)
          toolbar: true, // Show the toolbar (zoom, rotate, etc.)
          viewed: () => {
            if (!this.isMobileDevice()) {
              this.viewerInstance.zoomTo(1); // Set default zoom level only on non-mobile devices
            }
          },
        });
      }
      if (gallery3) {
        // Create a new Viewer.js instance
        this.viewerInstance = new Viewer(gallery3, {
          inline: false, // Display the viewer as a modal (not inline)
          toolbar: true, // Show the toolbar (zoom, rotate, etc.)
          viewed: () => {
            if (!this.isMobileDevice()) {
              this.viewerInstance.zoomTo(1); // Set default zoom level only on non-mobile devices
            }
          },
        });
      }
    },
  },
  beforeDestroy() {
    // Destroy the Viewer.js instance when the component is destroyed to prevent memory leaks
    if (this.viewerInstance) {
      this.viewerInstance.destroy();
    }
  },
  mounted() {
    // Delay for 5 seconds (5000 milliseconds)
    setTimeout(() => {
      this.isLoading = false; // Hide the spinner after 5 seconds
      nextTick(() => {
        this.initializeViewer(); // Initialize Viewer.js after the DOM is updated
      });
    }, 1500);
  },
};
</script>
