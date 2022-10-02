<template>
  <div
    class="w-full h-full bg-gray-900 relative overflow-hidden flex flex-col items-center justify-center px-10 md:px-10"
  >
    <img
      :id="`bg-video-${index}`"
      :src="`https://i.ytimg.com/vi/${id}/mqdefault.jpg`"
      class="video-bg h-full w-full object-cover absolute z-10"
    />
    <div
      class="top-0 w-full h-full object-cover absolute z-20  backdrop-filter backdrop-blur-lg backdrop-contrast-75"
    ></div>
    <lite-youtube
      :id="`fg-video-${index}`"
      class="relative z-30 shadow-2xl rounded-lg w-full max-h-full"
      params="controls=0&modestbranding=2&rel=0&enablejsapi=1"
      :videoid="id"
      :playlabel="label"
    />
  </div>
</template>
<script>
export default {
  props: ["id", "index", "label"],

  fetchOnServer: false
};
</script>

<style>
lite-youtube {
  /* max-width: 75%; */
}
</style>
