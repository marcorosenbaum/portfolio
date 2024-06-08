<template>
  <section class="px-16" id="contact-section">
    <h1 class="pt-16">Contact me</h1>

    <div class="flex gap-40 py-16">
      <LinkedinLink size="4rem" />
      <div class="flex items-center gap-5 stroke-shadow">
        <mail-icon size="5rem" stroke-width="1" id="mail-icon" />
        <label for="email-icon"
          ><a class="" href="mailto:contact.marco.website@gmail.com"
            >E-mail</a
          ></label
        >
      </div>
    </div>
  </section>
</template>

<script>
import { MailIcon } from "lucide-vue-next";
import LinkedinLink from "@/components/LinkedinLink.vue";

export default {
  name: "ContactSection",
  components: {
    MailIcon,
    LinkedinLink,
  },
};
</script>

<style scoped>
#contact-section {
  background-image: url("@/assets/images/contact-background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
