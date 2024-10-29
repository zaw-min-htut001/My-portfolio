<template>
  <Spinner v-if="isLoading" />

  <div v-else class="mx-auto" id="content">
    <Nav />
    <!-- HERO  -->
    <Hero class=""/>
    <!-- HERO  ENDED-->

    <!-- About sectio -->
    <About />
    <!-- About sectio -->
    <div id="works" class="mx-auto">
      <div class="hero bg-base-200 lg:min-h-full sm:min-h-screen py-2 pb-3">
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
                  <img class="cursor-pointer"
                    id="image11"
                    src="./assets/Screenshot from 2024-10-29 18-38-23.png"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">E-Wallet Application</h2>
                  <p class="text-xs text-justify">
                    Creating an e-wallet application with Laravel, jQuery, and AJAX involves building a streamlined platform for secure and fast money transfers. User can manage authentication account balances,transfer and transaction histories.</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">Laravel</span>
                    <span class="badge badge-sm badge-outline">Jquery</span>
                    <span class="badge badge-sm badge-outline">Ajax</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/wallet-app.git"
                      >https://github.com/zaw-min-htut001/wallet-app.git</a
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
                  <img class="cursor-pointer"
                    id="image"
                    src="./assets/pos1.png"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Mini Mart Pos system</h2>
                  <p class="text-xs text-justify">This is designed specifically to meet the needs of small retail businesses by providing laravel Api & vue.</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">Laravel</span>
                    <span class="badge badge-sm badge-outline">Vue</span>
                    <span class="badge badge-sm badge-outline">Api</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/mini-mart-pos.git"
                      >https://github.com/zaw-min-htut001/mini-mart-pos.git</a
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
                  <img class="cursor-pointer"
                    id="image1"
                    src="./assets/new.png"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Blog App</h2>
                  <p class="text-xs text-justify">This App is designed to provide an intuitive and flexible environment for both writers and readers. It serves as a centralized space where users can create, organize, and share articles</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">laravel</span>
                    <span class="badge badge-sm badge-outline">Api</span>
                    <span class="badge badge-sm badge-outline">vue</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-nowrap text-xs"
                      href="https://github.com/zaw-min-htut001/Blog_app.git"
                      >https://github.com/zaw-min-htut001/Blog_app.git</a
                    >
                    <br>
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/Blog_app_vue.git"
                      >https://github.com/zaw-min-htut001/Blog_app_vue.git</a
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
                  <img class="cursor-pointer"
                    id="image2"
                    src="./assets/hr.png"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Employee Management App</h2>
                  <p class="text-xs text-justify">The app serves as a comprehensive solution for HR departments, managers, and business owners, providing a centralized platform for handling key employee-related tasks such as tracking work hours, managing payroll</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">laravel</span>
                    <span class="badge badge-sm badge-outline">jquery</span>
                    <span class="badge badge-sm badge-outline">ajax</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/ninja_hr.git"
                      >https://github.com/zaw-min-htut001/ninja_hr.git</a
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
                  <img class="cursor-pointer"
                    id="image3"
                    src="./assets/chat.png"
                    alt="car!"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">RealTime Chat App</h2>
                  <p class="text-xs text-justify">The Chat App is designed to cater to a variety of users—from casual conversations among friends to formal communications within organizations.</p>
                  <div class="flex flex-wrap justify-center gap-1">
                    <span class="badge badge-sm badge-outline">laravel</span>
                    <span class="badge badge-sm badge-outline">livewire</span>
                    <span class="badge badge-sm badge-outline">Pusher</span>
                  </div>
                  <p class="text-xs">
                    Check out the project on GitHub:
                    <a
                      class="text-blue-600 text-wrap text-xs"
                      href="https://github.com/zaw-min-htut001/realtime-chat.git"
                      >https://github.com/zaw-min-htut001/realtime-chat.git</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer id="contact" class="footer bg-neutral text-neutral-content items-center p-4">
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
            class="size-6 inline-flex text-red-600"
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
        <p class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
            />
          </svg>
          htutzawmin66@gmail.com
        </p>
        <p class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 fill-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            />
          </svg>
          09 763 122 056
        </p>
      </div>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/zaw-min-htut001">
          <img class="w-7 h-7 text-white bg-slate-50 rounded-full" src="./assets/github-brands-solid.svg" alt="">
        </a>
        <a href="https://t.me/zawminh047">
          <img class="w-7 h-7 text-white bg-slate-50 rounded-full" src="./assets/telegram-brands-solid.svg" alt="">
        </a>
        <a href="https://www.linkedin.com/in/zaw-min-htut-51a20b296">
          <img class="w-7 h-7 text-white bg-slate-50 rounded-full" src="./assets/linkedin-brands-solid.svg" alt="">
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
      const gallery11 = document.getElementById("image11");
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
      if (gallery11) {
        // Create a new Viewer.js instance
        this.viewerInstance = new Viewer(gallery11, {
          inline: false, // Display the viewer as a modal (not inline)
          toolbar: true, // Show the toolbar (zoom, rotate, etc.)
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
