<template>
  <h1>My work</h1>
  <div class="relative inline-block">
    <img src="@/assets/images/laptop.png" alt="laptop image" />
    <!-- Values are calculated manually by the aspect ratio of the image -->
    <div
      class="absolute top-[7%] left-[12%] image-container w-[76%] h-[83%] overflow-auto cursor-pointer"
    >
      <img src="@/assets/images/flashcards.png" alt="flashcard website image" />
    </div>
  </div>
  <p>
    A simple Flashcard website, where you can save flashcards. A chart displays
    the amount of created cards as a visual representation of all the knowledge
    you've accumulated.
  </p>
</template>

<script>
export default {
  name: "WorkSection",
};
</script>

<style scoped></style>
