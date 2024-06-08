<template>
  <div class="iphone-concert relative w-fit mx-auto">
    <img
      src="@/assets/images/iphone.png"
      class="max-h-[85vh]"
      alt="ipad image"
    />
    <iframe
      :src="iframe"
      class="absolute top-[9%] left-[6.5%] w-[87.5%] h-[82%] cursor-pointer bg-white"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "IphoneMockup",
  props: {
    iframe: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
