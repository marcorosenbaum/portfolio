<template>
  <main>
    <start-section class="shadow-section" />
    <about-section />
    <work-section />
    <experience-section />
    <education-section />
    <contact-section class="shadow-section shadow-[rgba(26,28,36,1)]" />
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
