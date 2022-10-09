<template>
  <div class="h-full w-full flex items-center justify-center">
    <div
      v-if="noCover"
      class="bg-gray-900 w-4/5 h-4/5 bg-contain bg-center bg-no-repeat"
      :style="`background-image:url(/images/${url})`"
    ></div>
    <img
      v-if="!noCover"
      class="h-full w-full object-cover absolute z-10"
      :src="'/images/' + url"
    />
    <div
      v-if="!noCover"
      class="top-0 w-full h-full object-cover absolute z-20  backdrop-filter backdrop-blur-lg backdrop-contrast-75"
    ></div>
    <img
      v-if="!noCover"
      class="relative z-30 shadow-2xl rounded-lg w-5/6"
      :src="'/images/' + url"
    />
  </div>
</template>

<script>
export default {
  props: ["url", "noCover", "index"]
};
</script>
