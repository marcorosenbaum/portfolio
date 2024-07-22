<template>
  <section id="work-section" class="mx-16 mt-32">
    <h1>My work</h1>
    <!-- OG-Preview -->
    <div id="og-preview" class="mt-32">
      <!-- <div class="text-center">
        <div class="laptop-flashcards relative inline-block lg:w-4/5">
          <img
            src="@/assets/images/laptop.png"
            class="w-full"
            alt="laptop image"
          />
          Values are calculated manually by the aspect ratio of the image -->
      <!-- <div
            class="overflow-auto absolute top-[7%] left-[12%] w-[76%] h-[83%]"
          >
            <img
              src="../assets/images/og-preview-example.png"
              class="w-full"
              frameborder="0"
            />
          </div>
        </div>
      </div> -->
      <LaptopMockup iframe="https://og-preview.netlify.app/" />
      <div class="text-flashcards">
        <h2 class="mt-16">npm-package og-preview</h2>
        <div class="mt-8 lg:w-[100%]">
          <p>
            Og-preview is a npm-package that generates a preview of Open Graph
            meta data.
          </p>
          <br />
          <p>
            You simply need to run your project on the local dev server and
            execute a single command in your CLI. The package will open a new
            browser window with the og-preview of your project. This way you can
            see how all the links of your website will look like when shared on
            social media platforms before deploying your project. See example
            og-preview in the mockup above.
          </p>
          <br />
          <p>The npm package is built using TypeScript, Node.js and Express.</p>
        </div>
        <div class="flex gap-20 mt-16">
          <div class="flex gap-2 items-center stroke-shadow w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              fill="currentColor"
              class="bi bi-globe2"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
              />
            </svg>
            <a
              class="pl-4"
              target="_blank"
              href="https://www.npmjs.com/package/og-preview"
              >npm</a
            >
          </div>

          <WebsiteLink size="3rem" link="https://og-preview.netlify.app" />

          <GithubLink
            size="3rem"
            link="https://github.com/marcorosenbaum/og-preview"
          />
        </div>
      </div>
    </div>

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
    <!-- <div
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
    </div> -->
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
