<template>
  <div>
    <div className="logos ">
      <div className="logos-slide ">
        <img id="html5-icon" src="@/assets/svgs/html5.svg" alt="css icon" />
        <img
          id="javascript-icon"
          src="@/assets/svgs/javascript.svg"
          alt="css icon"
        />

        <img
          id="firebase-icon"
          src="@/assets/svgs/firebase.svg"
          alt="css icon"
        />
        <img id="nodejs-icon" src="@/assets/svgs/nodejs.svg" alt="css icon" />
        <img id="pinia-icon" src="@/assets/svgs/pinia.svg" alt="pinia icon" />
        <img
          id="tailwind-icon"
          src="@/assets/svgs/tailwind.svg"
          alt="tailwind icon"
        />

        <img
          id="vue-icon"
          src="@/assets/svgs/vue.svg"
          alt="vue"
          tooltip="Vue"
        />
        <img id="react-icon" src="@/assets/svgs/react.png" alt="react" />

        <img id="css-icon" src="@/assets/svgs/css3.svg" alt="css" />

        <img
          id="mongodb-icon"
          src="@/assets/svgs/mongodb.png"
          alt="mongodb
        icon"
        />

        <img id="nextjs-icon" src="@/assets/svgs/next-js.png" alt="next js" />
      </div>
      <div className="logos-slide">
        <img id="html5-icon" src="@/assets/svgs/html5.svg" alt="css icon" />
        <img
          onmouseover=""
          id="javascript-icon"
          src="@/assets/svgs/javascript.svg"
          alt="css icon"
        />

        <img
          id="firebase-icon"
          src="@/assets/svgs/firebase.svg"
          alt="css icon"
        />
        <img id="nodejs-icon" src="@/assets/svgs/nodejs.svg" alt="css icon" />
        <img id="pinia-icon" src="@/assets/svgs/pinia.svg" alt="pinia icon" />
        <img
          id="tailwind-icon"
          src="@/assets/svgs/tailwind.svg"
          alt="tailwind icon"
        />

        <img id="vue-icon" src="@/assets/svgs/vue.svg" alt="vue icon" />
        <img id="react-icon" src="@/assets/svgs/react.png" alt="react icon" />

        <img id="css-icon" src="@/assets/svgs/css3.svg" alt="css icon" />

        <img
          id="mongodb-icon"
          src="@/assets/svgs/mongodb.png"
          alt="mongodb
        icon"
        />
        <img id="nextjs-icon" src="@/assets/svgs/next-js.png" alt="next js" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",

  mounted() {
    const mongodbIcon = document.getElementById("mongodb-icon");
    const xPosition = mongodbIcon.getBoundingClientRect().x;
    console.log("Current x position:", xPosition);
  },
};
</script>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.logos {
  margin: 0 auto;
  height: auto;
  border-radius: 2rem;
  padding: 2rem 0;
  white-space: nowrap;
  overflow: hidden;
  background-color: #262f38;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  content: "";
  height: 100%;
  width: 20%;
  z-index: 2;
}

.logos:after {
  left: 0;
  background: linear-gradient(to right, #262f38, #262f3800);
}

.logos:before {
  right: 0;
  background: linear-gradient(to left, #262f38, #262f3800);
}

.logos-slide {
  display: inline-block;
  animation: slide 10s linear infinite;
}

.logos-slide img {
  margin: 0 1.5vw;
  width: 5vw;
  display: inline-block;
  min-width: 4rem;
}

@media screen and (min-width: 1044px) {
  .logos:hover .logos-slide {
    animation-play-state: paused;
  }
}
</style>
