<template>
  <div class="img-wrapper flex flex-wrap gap-8">
    <div class="flex flex-col justify-center">
      <img id="html5-icon" src="@/assets/svgs/html5.svg" alt="html icon" />
      <p class="mx-auto">HTML</p>
    </div>
    <div class="flex flex-col justify-between">
      <img
        id="javascript-icon"
        src="@/assets/svgs/javascript.svg"
        alt="javascript icon"
      />
      <p class="mx-auto">JavaScript</p>
    </div>
    <div class="flex flex-col justify-between">
      <img
        id="firebase-icon"
        src="@/assets/svgs/firebase.svg"
        alt="firebase icon"
      />
      <p class="mx-auto">Firebase</p>
    </div>
    <div class="flex flex-col justify-between">
      <img id="nodejs-icon" src="@/assets/svgs/nodejs.svg" alt="node icon" />
      <p class="mx-auto">Node.js</p>
    </div>
    <div class="flex flex-col justify-between">
      <img id="pinia-icon" src="@/assets/svgs/pinia.svg" alt="pinia icon" />
      <p class="mx-auto">Pinia</p>
    </div>
    <div class="flex flex-col justify-between">
      <img
        id="tailwind-icon"
        src="@/assets/svgs/tailwind.svg"
        alt="tailwind icon"
      />
      <p class="mx-auto">Tailwind CSS</p>
    </div>

    <div class="flex flex-col justify-between">
      <img id="vue-icon" src="@/assets/svgs/vue.svg" alt="vue" />
      <p class="mx-auto">Vue</p>
    </div>
    <div class="flex flex-col justify-between">
      <img id="react-icon" src="@/assets/svgs/react.png" alt="react" />
      <p class="mx-auto">React</p>
    </div>

    <div class="flex flex-col justify-between">
      <img id="css-icon" src="@/assets/svgs/css3.svg" alt="css" />
      <p class="mx-auto">CSS</p>
    </div>

    <div class="flex flex-col justify-between">
      <img
        id="mongodb-icon"
        src="@/assets/svgs/mongodb.png"
        alt="mongodb icon"
      />
      <p class="mx-auto">MongoDB</p>
    </div>

    <div class="flex flex-col justify-between">
      <img id="nextjs-icon" src="@/assets/svgs/next-js.png" alt="next js" />
      <p class="mx-auto">Next.js</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    this.$el.querySelectorAll(".img-wrapper > div").forEach((div) => {
      observer.observe(div);
    });
  },
};
</script>

<style scoped>
.img-wrapper div {
  width: 8rem;
  height: 10rem;
  margin: 1rem;
  padding: 1rem;
  font-size: 1rem;
  background-color: #d3d3d399;
  border-radius: 1rem;
  color: black;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}
</style>
