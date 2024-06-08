<template>
  <section id="work-section" class="mx-16 mt-32">
    <h1>My work</h1>

    <!-- FLASHCARDS -->
    <div id="flashcards" class="mt-32">
      <LaptopMockup iframe="https://marco-flashcards.netlify.app/" />
      <div class="text-flashcards">
        <h2 class="mt-16">Flashcards</h2>
        <div class="mt-8 lg:w-[100%]">
          <p>
            After searching for a flashcard app or website that could visualize
            my learning progress and motivate me every time I opened the
            application, I realized such a tool was missing from the market. So
            I decided to build my own flashcard web application.
          </p>
          <br />
          <p>
            This web application is built using Vue.js, Firebase, Tailwind and
            some other packages like Pinia, Vue-Router, TipTap and Chart.js.
          </p>
        </div>
        <div class="flex gap-20 mt-16">
          <WebsiteLink
            size="2.25rem"
            link="https://marco-flashcards.netlify.app"
          />
          <GithubLink
            size="3rem"
            link="https://github.com/marcorosenbaum/flashcards"
          />
        </div>
      </div>
    </div>

    <!-- SWEDISH MEMORY GAME -->
    <div id="memory-game" class="flex flex-col lg:flex-row gap-20 mt-64 mb-16">
      <IpadMockup iframe="https://swedish-memory-game.vercel.app/" />
      <div class="text-memory-game lg:w-2/5">
        <h2>Swedish Memory Game</h2>
        <p class="mt-8">
          Flip the cards and match the swedish and english cards that are a
          pair. Train your memory while learning new words and phrases in
          swedish.
        </p>
        <br />
        <p>
          This project is built using React and Next.js. The card data gets
          fetched from a MongoDB database.
        </p>
        <div class="flex gap-20 mt-16">
          <WebsiteLink
            size="2.25rem"
            link="https://swedish-memory-game.vercel.app/"
          />
          <GithubLink
            size="3rem"
            link="https://github.com/marcorosenbaum/memory-game"
          />
        </div>
      </div>
    </div>

    <!-- MUSIC EXAMPLE -->
    <div id="music" class="mt-64">
      <LaptopMockup iframe="https://marco-music.netlify.app/" />
      <div class="text-music">
        <h2 class="mt-16">Music</h2>
        <div class="mt-8 lg:w-[100%]">
          <p>
            This project is built using Vue.js, Firebase, Tailwind and some
            other packages like Pinia, Vue-Router , Vue-i18n, Vee-Validate,
            Howler. It's an example for a music website where you can upload and
            listen to songs.
          </p>
          <br />
          I built this project as part of the online course "Complete Vue
          Developer Bootcamp (Pinia, Vitest) " by Zero to Mastery.
        </div>
        <div class="flex gap-20 mt-16">
          <WebsiteLink size="2.25rem" link="https://marco-music.netlify.app/" />
          <GithubLink
            size="3rem"
            link="https://github.com/marcorosenbaum/music-example"
          />
        </div>
      </div>
    </div>

    <!-- VTG MUSLI -->
    <div id="vtg-musli" class="flex flex-col lg:flex-row gap-20 mt-64 mb-16">
      <IpadMockup iframe="https://www.vtg-musli.de/" />
      <div class="text-vtg lg:w-2/5">
        <h2>VTG-Musli</h2>
        <p class="mt-8">
          The website of a local car dealer, with focus on responsivity.
        </p>
        <div class="flex gap-20 mt-16">
          <WebsiteLink size="2.25rem" link="https://www.vtg-musli.de/" />
          <GithubLink link="https://github.com/marcorosenbaum/vtg-musli" />
        </div>
      </div>
    </div>

    <!-- CONCERT COMPASS -->
    <div
      id="concert-compass"
      class="flex lg:flex-row lg:justify-between flex-col gap-20 mt-64 mb-16"
    >
      <div class="text-concert lg:w-3/5">
        <h2>Concert Compass</h2>
        <p class="mt-8">
          The final project I worked on at Coding-Bootcamps-Europe. Concert
          compass is an app to track concerts. Search your favorite artists and
          save their concerts. The concert data gets fetched from the
          Ticketmaster api and stored in local storage.
        </p>

        <div class="flex gap-20 mt-16">
          <WebsiteLink
            size="2.25rem"
            link="https://cbe-concert-compass.netlify.app"
          />
          <GithubLink
            link="https://github.com/coding-bootcamps-eu/final-project-2023-08-concert-compass"
          />
        </div>
      </div>

      <IphoneMockup iframe="https://cbe-concert-compass.netlify.app" />
    </div>
  </section>
</template>

<script>
import GithubLink from "@/components/GithubLink.vue";
import WebsiteLink from "@/components/WebsiteLink.vue";
import LaptopMockup from "@/components/LaptopMockup.vue";
import IpadMockup from "@/components/IpadMockup.vue";
import IphoneMockup from "@/components/IphoneMockup.vue";

export default {
  name: "WorkSection",
  components: {
    GithubLink,
    WebsiteLink,
    LaptopMockup,
    IpadMockup,
    IphoneMockup,
  },
};
</script>

<style scoped>
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

.text-memory-game,
.text-flashcards,
.text-music,
.text-vtg,
.text-concert {
  animation: fadeIn linear;
  animation-timeline: view(90% 0%);
}

.iphone-concert {
  animation: slideInFromRight linear, fadeIn linear;
  animation-timeline: view(100% 0%);
}

.ipad-memory-game,
.ipad-vtg {
  animation: slideInFromLeft linear, fadeIn linear;
  animation-timeline: view(100% 0%);
}
</style>
