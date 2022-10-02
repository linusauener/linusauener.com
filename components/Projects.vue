<template>
  <div>
    <div
      v-on:click="menu()"
      class="navigation menu cursor-pointer top-5 right-5 fixed z-50 text-green-400 xl:text-3xl text-xl xl:w-14 xl:h-14 w-10 h-10 bg-gray-900 flex justify-center items-center rounded-lg"
    >
      <fa-icon :icon="['fas', 'bars']" />
    </div>
    <div
      v-on:click="scrollRight()"
      v-if="!scrolledToRight && scrollRightIndex + 1 < scrollRightCount"
      class="xl:hidden -rotate-90 transform flex navigation cursor-pointer bottom-5 right-5 fixed z-50 text-green-400 xl:text-3xl text-xl xl:w-14 xl:h-14 w-10 h-10 bg-gray-900 justify-center items-center rounded-lg"
    >
      <fa-icon
        :class="{ 'animate-bounce': !this.scrolled }"
        :icon="['fas', 'chevron-down']"
      />
    </div>
    <div
      v-on:click="scrollLeft()"
      v-if="scrolledToRight || scrollRightIndex + 1 === scrollRightCount"
      class="xl:hidden flex navigation cursor-pointer bottom-5 right-5 fixed z-50 text-green-400 xl:text-3xl text-xl xl:w-14 xl:h-14 w-10 h-10 bg-gray-900 justify-center items-center rounded-lg"
    >
      <fa-icon :icon="['fas', 'chevron-left']" />
    </div>
    <div
      v-on:click="scrollDown()"
      v-if="!scrolledToBottom && scrollDownIndex + 1 < scrollDownCount"
      class="hidden xl:flex navigation cursor-pointer bottom-5 left-1/2 -ml-7 fixed z-50 text-green-400 xl:text-3xl text-xl xl:w-14 xl:h-14 w-10 h-10 bg-gray-900 justify-center items-center rounded-lg"
    >
      <fa-icon
        :class="{ 'animate-bounce': !this.scrolled }"
        :icon="['fas', 'chevron-down']"
      />
    </div>
    <div
      v-on:click="scrollUp()"
      v-if="scrolledToBottom || scrollDownIndex + 1 === scrollDownCount"
      class="hidden xl:flex navigation cursor-pointer bottom-5 left-1/2 -ml-7 fixed z-50 text-green-400 xl:text-3xl text-xl xl:w-14 xl:h-14 w-10 h-10 bg-gray-900 justify-center items-center rounded-lg"
    >
      <fa-icon :icon="['fas', 'chevron-up']" />
    </div>
    <div
      id="scroll-container"
      class="columns flex flex-col xl:flex-row xl:overflow-hidden w-screen h-screen xl:w-auto xl:h-auto overflow-x-scroll"
    >
      <div
        class="column flex flex-nowrap w-full h-1/2 xl:h-auto xl:w-auto xl:flex-wrap xl:flex-shrink xl:block xl:flex-1"
      >
        <div
          class="h-full flex-shrink-0 xl:h-screen flex flex-col w-screen xl:w-auto items-center justify-center bg-gray-900 relative"
        >
          <ProjectContent :project="start" :count="projects.length" />
        </div>
        <div
          class="xl:h-screen flex xl:flex-col h-full flex-shrink-0 xl:flex-shrink w-screen xl:w-auto xl:items-center xl:justify-center bg-gray-900 relative"
          v-for="(project, i) in projects"
          :key="`left-${project.slug}`"
        >
          <Video
            v-if="i % 2 === 0 && project.video"
            :url="project.video"
            :index="i + 1"
          />
          <Youtube
            v-if="i % 2 === 0 && project.youtube"
            :id="project.youtube"
            :index="i + 1"
          />
          <ImageBlock
            v-if="i % 2 === 0 && project.image"
            :url="project.image"
            :index="i + 1"
          />
          <ProjectContent
            v-if="i % 2 === 1"
            :project="project"
            :count="projects.length"
          />
        </div>
      </div>

      <div
        class="column flex flex-nowrap w-full h-1/2 xl:h-auto xl:w-1/2 xl:flex-wrap xl:block xl:flex-1 relative"
      >
        <div
          class="transform-reset xl:fixed flex flex-row xl:flex-col-reverse w-auto xl:flex-wrap flex-nowrap h-full xl:h-auto xl:w-1/2 xl:flex-shrink flex-shrink-0 xl:flex-shrink"
          :style="`transform: translateY(${offset}px)`"
        >
          <div
            class="xl:h-screen flex flex-col w-screen xl:w-auto items-center justify-center h-auto bg-gray-900 relative"
          >
            <Video v-if="start.video" :url="start.video" :index="0" />
            <Youtube v-if="start.youtube" :id="start.youtube" :index="0" />
            <ImageBlock v-if="start.image" :url="start.image" :noCover="true" />
          </div>
          <div
            class="xl:h-screen flex flex-col w-screen xl:w-auto items-center justify-center h-full bg-gray-900 relative"
            v-for="(project, i) in projects"
            :key="`right-${project.slug}`"
          >
            <Video
              v-if="i % 2 === 1 && project.video"
              :url="project.video"
              :index="i + 1"
            />
            <Youtube
              v-if="i % 2 === 1 && project.youtube"
              :id="project.youtube"
              :index="i + 1"
            />
            <ImageBlock
              v-if="i % 2 === 1 && project.image"
              :url="project.image"
              :index="i + 1"
            />
            <ProjectContent
              v-if="i % 2 === 0"
              :project="project"
              :count="projects.length"
            />
          </div>
        </div>
      </div>
    </div>
    <Menu :categories="categories" />
  </div>
</template>

<script>
export default {
  props: ["start", "projects", "categories"],
  methods: {
    onScroll() {
      const newOffset = -1 * (this.initOffset - window.scrollY);
      this.offset = newOffset;
      this.scrolled =
        window.scrollY +
          document.getElementById("scroll-container").scrollLeft >
        0;

      let bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.offsetHeight;

      let rightOfWindow =
        document.getElementById("scroll-container").scrollLeft / 2 ===
        document.getElementById("scroll-container").offsetWidth;

      if (bottomOfWindow) {
        this.scrolledToBottom = true;
      } else {
        this.scrolledToBottom = false;
      }

      if (rightOfWindow) {
        this.scrolledToRight = true;
      } else {
        this.scrolledToRight = false;
      }
    },
    menu() {
      document.getElementById(`menu`).classList.remove("hidden");
    },
    scrollDown() {
      this.scrollDownIndex =
        Math.floor(window.pageYOffset / window.innerHeight) + 1;
      window.scrollTo({
        top: this.scrollDownIndex * window.innerHeight,
        behavior: "smooth"
      });
    },
    scrollUp() {
      this.scrollDownIndex = 0;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    scrollRight() {
      this.scrollRightIndex =
        Math.floor(
          document.getElementById("scroll-container").scrollLeft /
            window.innerWidth
        ) + 1;
      document.getElementById("scroll-container").scrollTo({
        left: this.scrollRightIndex * window.innerWidth,
        behavior: "smooth"
      });
    },
    scrollLeft() {
      this.scrollRightIndex = 0;
      document.getElementById("scroll-container").scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    this.initOffset = documentHeight - windowHeight;
    this.scrollRightCount = Math.ceil(
      document.getElementById("scroll-container").scrollWidth /
        window.innerWidth
    );
    this.scrollRightIndex = Math.floor(
      document.getElementById("scroll-container").scrollLeft / window.innerWidth
    );
    this.scrollDownCount = Math.ceil(documentHeight / window.innerHeight);
    this.scrollDownIndex = Math.floor(window.pageYOffset / window.innerHeight);
    this.onScroll();
    window.addEventListener("scroll", () => {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.onScroll();
          this.ticking = false;
        });

        this.ticking = true;
      }
    });

    document
      .getElementById("scroll-container")
      .addEventListener("scroll", () => {
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.onScroll();
            this.ticking = false;
          });

          this.ticking = true;
        }
      });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onScroll);
  },
  data() {
    return {
      ticking: false,
      offset: 0,
      initOffset: 0,
      scrollRightCount: 0,
      scrollRightIndex: 0,
      scrollDownCount: 0,
      scrollDownIndex: 0,
      scrolled: false,
      scrolledToBottom: false,
      scrolledToRight: false
    };
  }
};
</script>

<style>
body {
  overscroll-behavior-y: none;
}

@supports (-webkit-touch-callout: none) {
  #scroll-container.h-screen {
    max-height: -webkit-fill-available;
  }
}

.column > div {
  transition: transform 100ms ease;
}

@media (max-width: 1280px) {
  .transform-reset {
    transform: translateY(0) !important;
  }
}
</style>
