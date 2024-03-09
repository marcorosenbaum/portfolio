<template>
  <div class="flex justify-end gap-6 mt-4">
    <div
      @mouseover="show_about_text = true"
      @mouseleave="show_about_text = false"
      class="flex justify-center hover:text-green-300 hover:shadow-around hover:bg-emerald-950 hover:shadow-emerald-950 rounded-3xl"
    >
      <user-icon size="30" />
      <span v-show="show_about_text" class="absolute top-12">About me</span>
    </div>

    <div
      @mouseover="show_skills_text = true"
      @mouseleave="show_skills_text = false"
      class="flex justify-center hover:text-green-300 hover:shadow-around hover:bg-emerald-950 hover:shadow-emerald-950 rounded-3xl"
    >
      <lightbulb-icon size="30" />
      <span v-show="show_skills_text" class="absolute top-12">Skills</span>
    </div>

    <div
      @mouseover="show_work_text = true"
      @mouseleave="show_work_text = false"
      class="flex justify-center hover:text-green-300 hover:shadow-around hover:bg-emerald-950 hover:shadow-emerald-950 rounded-3xl"
    >
      <notebook-pen-icon size="30" />
      <span v-show="show_work_text" class="absolute top-12">My work</span>
    </div>

    <div
      @mouseover="show_experience_text = true"
      @mouseleave="show_experience_text = false"
      class="flex justify-center hover:text-green-300 hover:shadow-around hover:bg-emerald-950 hover:shadow-emerald-950 rounded-3xl"
    >
      <briefcase-icon size="30" />
      <span v-show="show_experience_text" class="absolute top-12"
        >Experience</span
      >
    </div>

    <div
      @mouseover="show_education_text = true"
      @mouseleave="show_education_text = false"
      class="flex justify-center hover:text-green-300 hover:shadow-around hover:bg-emerald-950 hover:shadow-emerald-950 rounded-3xl"
    >
      <graduation-cap-icon size="30" />
      <span v-show="show_education_text" class="absolute top-12"
        >Education</span
      >
    </div>

    <div
      @mouseover="show_contact_text = true"
      @mouseleave="show_contact_text = false"
      class="flex justify-center hover:text-green-300 hover:shadow-around hover:bg-emerald-950 hover:shadow-emerald-950 rounded-3xl"
    >
      <mail-icon size="30" />
      <span v-show="show_contact_text" class="absolute top-12">Contact</span>
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
