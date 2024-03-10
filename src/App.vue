<template>
  <main>
    <app-header></app-header>
    <start-section />
    <about-section />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AboutSection from "@/components/AboutSection.vue";
import StartSection from "@/components/StartSection.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AboutSection,
    StartSection,
  },
};
</script>

<style scoped></style>
