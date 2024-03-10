<template>
  <main><app-header></app-header> <about-section /></main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AboutSection from "./components/AboutSection.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AboutSection,
  },
};
</script>

<style scoped></style>
