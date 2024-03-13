<template>
  <section id="about-section">
    <div class="grid grid-cols-2 gap-[8rem] mx-16 h-[100vh]">
      <div class="pt-32">
        <h1 class="">About me</h1>
        <p class="mt-8">
          I am driven by the belief that continuous learning is the key to
          mastery.<br />Every day, I dedicate myself to improve my skills and
          pushing the boundaries of what I can achieve as a developer.
        </p>
      </div>
      <div class="pt-32">
        <h1>Skills</h1>
        <div class="flex gap-8 mt-8">
          <div class="flex flex-col gap-8">
            <div class="flex items-center bg-dark-gray rounded-fully py-2 px-6">
              <img
                id="css-icon"
                src="@/assets/svgs/css3.svg"
                alt="css icon"
                width="80"
              />
              <label for="css-icon">CSS</label>
            </div>

            <div class="flex items-center bg-dark-gray rounded-fully py-2 px-6">
              <img
                id="firebase-icon"
                src="@/assets/svgs/firebase.svg"
                alt="css icon"
                width="80"
              />
              <label for="css-icon">Firebase</label>
            </div>

            <div class="flex items-center bg-dark-gray rounded-fully py-2 px-6">
              <img
                id="html5-icon"
                src="@/assets/svgs/html5.svg"
                alt="css icon"
                width="80"
              />
              <label for="css-icon">HTML</label>
            </div>

            <div class="flex items-center bg-dark-gray rounded-fully py-2 px-6">
              <img
                id="javascript-icon"
                src="@/assets/svgs/javascript.svg"
                alt="css icon"
                width="80"
              />
              <label for="css-icon">Javascript</label>
            </div>
          </div>

          <div class="flex flex-col gap-8">
            <div class="flex items-center bg-dark-gray rounded-fully py-2 px-6">
              <img
                id="node-icon"
                src="@/assets/svgs/nodejs.svg"
                alt="node icon"
                width="80"
              />
              <label for="node-icon">Node</label>
            </div>

            <div class="flex items-center bg-dark-gray rounded-fully py-2 px-6">
              <img
                id="pinia-icon"
                src="@/assets/svgs/pinia.svg"
                alt="pinia icon"
                height="80px"
              />
              <label for="pinia-icon">Pinia</label>
            </div>

            <div class="flex items-center bg-dark-gray rounded-fully py-2 px-6">
              <img
                id="tailwind-icon"
                src="@/assets/svgs/tailwind.svg"
                alt="css icon"
                width="80"
              />
              <label for="tailwind-icon">Tailwind</label>
            </div>

            <div class="flex items-center bg-dark-gray rounded-fully py-2 px-6">
              <img
                id="vue-icon"
                src="@/assets/svgs/vue.svg"
                alt="vue icon"
                width="80"
              />
              <label for="vue-icon">Vue</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
#about-section {
  background-image: url("@/assets/images/background-pattern.png");
  background-size: cover;
}
</style>
