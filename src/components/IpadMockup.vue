<template>
  <div class="ipad-vtg relative w-fit mx-auto lg:ml-0">
    <img src="@/assets/images/ipad.png" class="max-h-[85vh]" alt="ipad image" />
    <iframe
      :src="iframe"
      class="absolute top-[3%] left-[4%] w-[92%] h-[94%] bg-white cursor-pointer"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "IpadMockup",
  props: {
    iframe: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
