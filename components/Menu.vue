<template>
  <div id="menu" class="animate-fadein fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col xl:justify-center pt-10 xl:pt-0 items-center bg-gray-900 hidden">
    <h1 class="xl:text-8xl text-5xl font-title text-gray-200 uppercase mb-5 xl:mt-16">Explore</h1>
    <div class="w-24 h-1 bg-green-400 xl:mb-16"></div>
    <div class="w-4/5 h-full items-center justify-center flex flex-col mb-24">
      <div class="w-full flex xl:flex-row flex-col justify-center xl:mb-16" v-for="row in categories" :key="row.row">
        <div class="xl:w-1/3 w-full xl:mb-6 mb-4 xl:px-10 px-2 text-center" v-for="category in row.columns" :key="category.slug">
          <a class="text-green-400 text-xl uppercase" :href="`/${category.slug === 'start' ? '' : category.slug}`">{{category.menu ? category.menu.split('|')[0] : category.title}}</a>
          <p class="text-gray-200 mt-2 font-text hidden xl:block">{{category.menu ? category.menu.split('|')[1] : category.description}}</p>
        </div>
      </div>
    </div>
    <div :id="`close-menu`" v-on:click="close()" class="cursor-pointer absolute text-green-400 xl:text-3xl text-xl z-50 bottom-10">
        <fa-icon :icon="['fas','times']" />
    </div>
  </div>
</template>

<script>
export default {
    props: ['categories'],
    methods: {
      close() {
        document.getElementById('menu').classList.remove('animate-fadein');
        document.getElementById('menu').classList.add('animate-fadeout');
        setTimeout(() => {
          document.getElementById(`menu`).classList.add('hidden');
          document.getElementById(`menu`).classList.remove('animate-fadeout');
          document.getElementById(`menu`).classList.add('animate-fadein');
        }, 100);
      }
    }
}
</script>