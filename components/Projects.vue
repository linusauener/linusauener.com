<template>
  <div>
    <div class="columns flex overflow-hidden">

      <div class="column flex-1">
        <div class="h-screen flex flex-col items-center justify-center h-full bg-gray-900 relative">
          <ProjectContent :project="start" :index="0" :count="projects.length" /> 
        </div>
        <div class="h-screen flex flex-col items-center justify-center h-full bg-gray-900 relative" v-for="(project,i) in projects" :key="`left-${project.slug}`">
            <Video v-if="i%2 === 0 && project.video" :url="project.video" :index="i+1" />
            <ProjectContent v-if="i%2 === 1" :project="project" :index="i+1" :count="projects.length" />
        </div>
      </div>
      
      <div class="column flex-1 relative">
        <div class="fixed flex flex-col-reverse" :style="`transform: translateY(${offset}px)`">
          <div class="h-screen flex flex-col items-center justify-center h-full bg-gray-900 relative">
            <Video v-if="start.video" :url="start.video" :index="i+1" />
            <ImageBlock v-if="start.image" :url="start.image" :noCover="true" />
          </div>
          <div class="h-screen flex flex-col items-center justify-center h-full bg-gray-900 relative" v-for="(project,i) in projects" :key="`right-${project.slug}`">  
            <Video v-if="i%2 === 1 && project.video" :url="project.video" :index="i+1" />
            <ProjectContent v-if="i%2 === 0" :project="project" :index="i+1" :count="projects.length" />
          </div>
        </div>
      </div>
    </div>
    <Menu :categories="categories" />
  
  </div>

</template>

<script>
export default {
    props: ['start', 'projects', 'categories'],
    methods: {
      onScroll() {
        const newOffset = -1 * (this.initOffset - window.scrollY);
        this.offset = newOffset;
      }
    },
    mounted() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      this.initOffset = documentHeight - windowHeight;
      this.onScroll();
      window.addEventListener('scroll', () => {
        
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.onScroll();
            this.ticking = false;
          });

          this.ticking = true;
        }

      })
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll);
    },
    data() {
      return {
        ticking: false,
        offset: 0,
        initOffset: 0,
      }
    }
}
</script>

<style>

  body {
      overscroll-behavior-y: none;
  }

  .column > div {
    transition: transform 100ms ease;
  }
</style>