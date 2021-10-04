<template>
    <div class="h-full w-full overflow-auto p-10 xl:p-0">
        <div class="xl:absolute xl:bottom-0 xl:left-0 xl:pb-56 xl:pl-24 flex flex-col w-full">
            <h1 class="xl:text-8xl text-7xl font-title text-gray-200 uppercase">{{ project.title }}</h1>
            <div class="w-24 h-1 bg-green-400 my-4"></div>
            <div class="text-gray-200 text-xl xl:w-4/5 leading-relaxed mb-5 font-text">
                <nuxt-content :document="project" />  
            </div>
            <p class="text-green-400 text-md font-bold font-text w-4/5">{{ project.tagline }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style>
    h2 {
        font-size: 1.4rem;
        font-weight: bold;
        margin: 1.2rem 0;
    }
</style>