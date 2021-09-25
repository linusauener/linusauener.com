<template>
    <div>
        <div v-if="noCover" class="h-full bg-gray-900 relative overflow-hidden flex flex-col items-center justify-center px-20">
            <img class="m-10" :src="'/images/' + url" />
        </div>
        <img v-if="!noCover" class="h-full w-full object-cover absolute z-10" :src="'/images/' + url" />
        <div v-if="!noCover" class="top-0 w-full h-full object-cover absolute z-20  backdrop-filter backdrop-blur-lg backdrop-contrast-75"></div>
        <img v-if="!noCover" class="relative z-30 shadow-2xl rounded-lg"  :src="'/images/' + url" />
    </div>
</template>

<script>
export default {
    props: ['url', 'noCover']
}
</script>