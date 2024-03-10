<template>
  <h1>Skills</h1>
  <div class="flex gap-4">
    <div class="flex flex-col gap-2">
      <div class="flex items-center bg-gray-900 rounded-fully py-2 px-6">
        <img
          id="css-icon"
          src="@/assets/svgs/css3.svg"
          alt="css icon"
          width="80"
        />
        <label for="css-icon">CSS</label>
      </div>

      <div class="flex items-center bg-gray-900 rounded-fully py-2 px-6">
        <img
          id="firebase-icon"
          src="@/assets/svgs/firebase.svg"
          alt="css icon"
          width="80"
        />
        <label for="css-icon">Firebase</label>
      </div>

      <div class="flex items-center bg-gray-900 rounded-fully py-2 px-6">
        <img
          id="html5-icon"
          src="@/assets/svgs/html5.svg"
          alt="css icon"
          width="80"
        />
        <label for="css-icon">HTML</label>
      </div>

      <div class="flex items-center bg-gray-900 rounded-fully py-2 px-6">
        <img
          id="javascript-icon"
          src="@/assets/svgs/javascript.svg"
          alt="css icon"
          width="80"
        />
        <label for="css-icon">Javascript</label>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex items-center bg-gray-900 rounded-fully py-2 px-6">
        <img
          id="node-icon"
          src="@/assets/svgs/nodejs.svg"
          alt="node icon"
          width="80"
        />
        <label for="node-icon">Node</label>
      </div>

      <div class="flex items-center bg-gray-900 rounded-fully py-2 px-6">
        <img
          id="pinia-icon"
          src="@/assets/svgs/pinia.svg"
          alt="pinia icon"
          height="80px"
        />
        <label for="pinia-icon">Pinia</label>
      </div>

      <div class="flex items-center bg-gray-900 rounded-fully py-2 px-6">
        <img
          id="tailwind-icon"
          src="@/assets/svgs/tailwind.svg"
          alt="css icon"
          width="80"
        />
        <label for="tailwind-icon">Tailwind</label>
      </div>

      <div class="flex items-center bg-gray-900 rounded-fully py-2 px-6">
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
</template>

<script>
export default {
  name: "SkillsSection",
};
</script>

<style lang="scss" scoped></style>
