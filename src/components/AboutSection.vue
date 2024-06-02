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

      <div class="flex flex-wrap gap-4 justify-around skills">
        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="node-icon"
            src="@/assets/svgs/nodejs.svg"
            alt="node icon"
            width="80"
          />
          <label for="node-icon">Node</label>
        </div>

        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="pinia-icon"
            src="@/assets/svgs/pinia.svg"
            alt="pinia icon"
            height="80px"
          />
          <label for="pinia-icon">Pinia</label>
        </div>

        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="tailwind-icon"
            src="@/assets/svgs/tailwind.svg"
            alt="css icon"
            width="80"
          />
          <label for="tailwind-icon">Tailwind</label>
        </div>

        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="vue-icon"
            src="@/assets/svgs/vue.svg"
            alt="vue icon"
            width="80"
          />
          <label for="vue-icon">Vue</label>
        </div>

        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="react-icon"
            src="@/assets/svgs/react.png"
            alt="react icon"
            class="h-[80px] w-[80px]"
          />
          <label for="react-icon">React</label>
        </div>
        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="css-icon"
            src="@/assets/svgs/css3.svg"
            alt="css icon"
            width="80"
          />
          <label for="css-icon">CSS</label>
        </div>

        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="firebase-icon"
            src="@/assets/svgs/firebase.svg"
            alt="css icon"
            width="80"
          />
          <label for="css-icon">Firebase</label>
        </div>

        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="html5-icon"
            src="@/assets/svgs/html5.svg"
            alt="css icon"
            width="80"
          />
          <label for="css-icon">HTML</label>
        </div>

        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="javascript-icon"
            src="@/assets/svgs/javascript.svg"
            alt="css icon"
            width="80"
          />
          <label for="css-icon">Javascript</label>
        </div>

        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            class="bg-white rounded-fully border-2 border-black shadow-inner shadow-black"
            id="next-icon"
            src="@/assets/svgs/next-js.png"
            alt="next icon"
            width="80"
          />
          <label for="next-icon"> Next</label>
        </div>
        <div class="flex justify-center items-center rounded-fully py-2 px-6">
          <img
            id="mongodb-icon"
            src="@/assets/svgs/mongodb.png"
            alt="mongodb icon"
            width="80"
          />
          <label for="next-icon"> MongoDB</label>
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

.skills {
  animation: slideInFromLeft linear;
  animation-timeline: view(90% 0%);
}

#text-about {
  animation: slideInFromRight linear;
  animation-timeline: view(90% 0%);
}
</style>
