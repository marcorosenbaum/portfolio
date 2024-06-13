<template>
  <section id="about-section">
    <div class="flex flex-col mx-16">
      <div class="pt-32">
        <h1 class="">About me</h1>
        <p class="mt-8" id="text-about">
          I am driven by the belief that continuous learning is the key to
          mastery.<br /><br />Every day, I dedicate myself to improve my skills
          and pushing the boundaries of what I can achieve as a developer.
          <br /><br />
          Having led teams I understand the importance of communication and the
          value of a well functioning team. I am a team player and I am always
          looking for ways to improve the team's performance.
        </p>
      </div>
    </div>

    <div class="py-32 px-16">
      <h1 class="pb-8">Skills</h1>
      <SkillsSection id="skills-section" />
    </div>
  </section>
</template>

<script>
import SkillsSection from "./SkillsSection.vue";

export default {
  name: "AboutSection",
  components: { SkillsSection },
};
</script>

<style scoped>
#about-section {
  background-image: url("@/assets/images/background-pattern.png");
  background-size: cover;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

#text-about {
  animation: fadeIn linear;
  animation-timeline: view(70% 0%);
}
</style>
