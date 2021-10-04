<template>
    <div class="w-full h-full bg-gray-900 relative overflow-hidden flex flex-col items-center justify-center px-10">
        <div :id="`play-${index}`" v-on:click="play()" class="play cursor-pointer absolute text-green-400 text-9xl z-50">
            <fa-icon :icon="['fas','play-circle']" />
        </div>
        <video :id="`bg-video-${index}`" class="video-bg h-full w-full object-cover absolute z-10" muted playsinline :src="'/videos/' + url"></video>
        <div class="top-0 w-full h-full object-cover absolute z-20  backdrop-filter backdrop-blur-lg backdrop-contrast-75"></div>
        <video :id="`fg-video-${index}`" @ended="stopped()" class="relative z-30 shadow-2xl rounded-lg" muted playsinline :src="'/videos/' + url"></video>
    </div>
</template>

<script>
export default {
    props: ['url', 'index'],
    methods: {
        play() {
            document.getElementById(`bg-video-${this.index}`).play();
            document.getElementById(`fg-video-${this.index}`).play();
            document.getElementById(`play-${this.index}`).classList.add('hidden');
        },
        stopped() {
            document.getElementById(`play-${this.index}`).classList.remove('hidden');
        }
    }
}
</script>