<template>
  <main>
    <start-section />
    <about-section />
    <work-section />
    <experience-section />
    <education-section />
    <contact-section />
  </main>
</template>

<script>
import AboutSection from "@/components/AboutSection.vue";
import StartSection from "@/components/StartSection.vue";
import WorkSection from "@/components/WorkSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "app",
  components: {
    AboutSection,
    StartSection,
    WorkSection,
    ExperienceSection,
    EducationSection,
    ContactSection,
  },
};
</script>

<style scoped></style>
