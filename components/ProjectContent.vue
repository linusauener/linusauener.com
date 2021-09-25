<template>
    <div class="h-full w-full">
        <div class="absolute bottom-0 left-0 pb-56 pl-24 flex flex-col w-full">
            <h1 class="text-8xl font-title text-gray-200 uppercase">{{ project.title }}</h1>
            <div class="w-24 h-1 bg-green-400 my-4"></div>
            <div class="text-gray-200 text-xl w-4/5 leading-relaxed mb-5 font-text">
                <nuxt-content :document="project" />  
            </div>
            <p class="text-green-400 text-md font-bold font-text">{{ project.tagline }}</p>
        </div>
        <div v-on:click="menu()" class="navigation menu cursor-pointer absolute right-10 top-10 text-green-400 text-4xl" >
            <fa-icon :icon="['fas','bars']" />
        </div>
        <div v-if="count > 1 && count > index" v-on:click="scrollDown()" :class="{'left-10':index%2===1}" class="navigation down cursor-pointer absolute right-10 bottom-10 text-green-400 text-5xl">
            <fa-icon :icon="['fas','chevron-down']" />
        </div>
        <div v-if="count > 1 && count <= index" v-on:click="scrollUp()" class="navigation down cursor-pointer absolute right-10 bottom-10 text-green-400 text-5xl">
            <fa-icon :icon="['fas','chevron-up']" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['project', 'index', 'count'],
    methods: {
      menu() {
        document.getElementById(`menu`).classList.remove('hidden');
      },
      scrollDown() {
        window.scrollTo({
            top: (this.index+1)*window.innerHeight,
            behavior: 'smooth'
        });
      },
      scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }
    }
}
</script>

<style>
    h2 {
        font-size: 1.4rem;
        font-weight: bold;
        margin: 1.2rem 0;
    }
</style>