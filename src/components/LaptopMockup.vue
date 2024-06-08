<template>
  <div class="text-center">
    <div class="laptop-flashcards relative inline-block lg:w-4/5">
      <img src="@/assets/images/laptop.png" alt="laptop image" />
      <!-- Values are calculated manually by the aspect ratio of the image -->
      <div class="absolute top-[7%] left-[12%] w-[76%] h-[83%] cursor-pointer">
        <iframe :src="iframe" class="w-full h-full" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaptopMockup",
  props: {
    iframe: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
