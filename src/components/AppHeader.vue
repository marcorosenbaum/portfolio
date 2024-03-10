<template>
  <div class="flex justify-end gap-6 mt-4">
    <div
      @mouseover="show_about_text = true"
      @mouseleave="show_about_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <user-icon size="20" class="" />
      <span v-show="show_about_text" class="text-lightning absolute top-6"
        >About</span
      >
    </div>

    <div
      @mouseover="show_skills_text = true"
      @mouseleave="show_skills_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <lightbulb-icon size="20" />
      <span v-show="show_skills_text" class="absolute top-6">Skills</span>
    </div>

    <div
      @mouseover="show_work_text = true"
      @mouseleave="show_work_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <notebook-pen-icon size="20" />
      <span v-show="show_work_text" class="absolute top-6">Work</span>
    </div>

    <div
      @mouseover="show_experience_text = true"
      @mouseleave="show_experience_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <briefcase-icon size="20" />
      <span v-show="show_experience_text" class="absolute top-6"
        >Experience</span
      >
    </div>

    <div
      @mouseover="show_education_text = true"
      @mouseleave="show_education_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <graduation-cap-icon size="20" />
      <span v-show="show_education_text" class="absolute top-6">Education</span>
    </div>

    <div
      @mouseover="show_contact_text = true"
      @mouseleave="show_contact_text = false"
      class="flex justify-center rounded-3xl hover:text-lightning stroke-shadow"
    >
      <mail-icon size="20" />
      <span v-show="show_contact_text" class="absolute top-6">Contact</span>
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
