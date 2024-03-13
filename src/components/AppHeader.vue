<template>
  <div class="flex justify-end gap-10 mt-4 absolute top-0 right-16 z-10">
    <div
      @mouseover="show_about_text = true"
      @mouseleave="show_about_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <a href="#about-section">
        <user-icon id="user-icon" size="36" />

        <label
          for="user-icon"
          v-show="show_about_text"
          class="text-lightning absolute top-10"
          >About</label
        >
      </a>
    </div>

    <!-- <div
      @mouseover="show_skills_text = true"
      @mouseleave="show_skills_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <lightbulb-icon id="lightbulb-icon" size="36" />
      <label
        for="lightbulb-icon"
        v-show="show_skills_text"
        class="absolute top-10"
        >Skills</label
      >
    </div> -->

    <div
      @mouseover="show_work_text = true"
      @mouseleave="show_work_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <a href="#work-section">
        <notebook-pen-icon id="notebook-pen-icon" size="36" />
        <label
          for="notebook-pen-icon"
          v-show="show_work_text"
          class="absolute top-10"
          >Work</label
        ></a
      >
    </div>

    <div
      @mouseover="show_experience_text = true"
      @mouseleave="show_experience_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <a href="#experience-section">
        <briefcase-icon id="briefcase-icon" size="36" />
        <label
          for="briefcase-icon"
          v-show="show_experience_text"
          class="absolute top-10"
          >Experience</label
        ></a
      >
    </div>

    <div
      @mouseover="show_education_text = true"
      @mouseleave="show_education_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <a href="#education-section">
        <graduation-cap-icon id="graduation-cap-icon" size="36" />
        <label
          for="graduation-cap-icon"
          v-show="show_education_text"
          class="absolute top-10"
          >Education</label
        ></a
      >
    </div>

    <div
      @mouseover="show_contact_text = true"
      @mouseleave="show_contact_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <a href="#contact-section">
        <mail-icon id="mail-icon" size="36" />
        <label
          for="mail-icon"
          v-show="show_contact_text"
          class="absolute top-10"
          >Contact</label
        ></a
      >
    </div>
  </div>
</template>

<script>
import { UserIcon } from "lucide-vue-next";
import { LightbulbIcon } from "lucide-vue-next";
import { NotebookPenIcon } from "lucide-vue-next";
import { BriefcaseIcon } from "lucide-vue-next";
import { GraduationCapIcon } from "lucide-vue-next";
import { MailIcon } from "lucide-vue-next";

export default {
  name: "AppHeader",
  components: {
    UserIcon,
    LightbulbIcon,
    NotebookPenIcon,
    BriefcaseIcon,
    GraduationCapIcon,
    MailIcon,
  },
  data() {
    return {
      show_about_text: false,
      show_skills_text: false,
      show_work_text: false,
      show_experience_text: false,
      show_education_text: false,
      show_contact_text: false,
    };
  },
};
</script>

<style></style>
