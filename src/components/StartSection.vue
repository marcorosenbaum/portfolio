<template>
  <section class="start-section h-screen object-cover relative">
    <app-header />

    <v-lazy-image
      :src="codeBgImage"
      alt="background of code"
      class="opacity-50 -z-10 absolute top-0 h-screen w-screen object-cover"
    />

    <div
      class="mx-14 flex flex-col justify-around h-screen landscape:justify-between"
    >
      <div class="landscape:w-[70%] xl:landscape:w-[80%]">
        <h1
          id="text-marco"
          class="text-white text-7xl xl:text-[5.5rem] pt-10 landscape:pt-[12%]"
        >
          I'm Marco,<br />a Web Developer.
        </h1>
        <h1
          id="text-vision"
          class="pt-5 text-7xl xl:text-[5.5rem] landscape:pt-12 xl:w-[80%]"
        >
          Turning Vision into Reality with Code.
        </h1>
      </div>

      <v-lazy-image
        id="photo-of-marco"
        class="h-1/2 object-contain landscape:absolute landscape:right-14 landscape:bottom-[12%] landscape:max-w-[45%] landscape:lg:max-w-[65%] landscape:h-[70%]"
        :src="photoOfMarco"
        alt="photo of marco"
      />

      <div>
        <div class="flex">
          <LinkedinLink size="4rem" />
          <GithubLink size="4rem" link="https://github.com/marcorosenbaum" />

          <div class="flex items-center gap-5 stroke-shadow w-1/3 p-2">
            <svg
              id="codewars-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="4rem"
              height="4rem"
              viewBox="0 0 16 16"
              style="fill: currentColor"
            >
              <path
                d="M 8 1.3730469 C 6.731 1.2840469 5.4057656 1.9859062 4.7597656 3.1289062 C 4.7419555 3.1584591 4.7297139 3.1906598 4.7128906 3.2207031 C 3.7676256 3.2901962 2.8132292 3.8233603 2.2617188 4.6855469 C 1.5497187 5.7415469 1.4931562 7.2381406 2.1601562 8.3691406 C 2.177263 8.4001098 2.2006778 8.4267032 2.21875 8.4570312 C 1.8059247 9.3105056 1.7911562 10.403495 2.2617188 11.3125 C 2.8197187 12.4565 4.0873906 13.254188 5.4003906 13.242188 C 5.4350687 13.242845 5.469297 13.236783 5.5039062 13.236328 C 6.0367313 14.020038 6.9762458 14.580398 7.9980469 14.626953 C 9.2670469 14.715953 10.594234 14.014094 11.240234 12.871094 C 11.258443 12.840907 11.269931 12.808046 11.287109 12.777344 C 12.232353 12.70783 13.186784 12.174667 13.738281 11.3125 C 14.449281 10.2575 14.506844 8.7599063 13.839844 7.6289062 C 13.822947 7.5983445 13.801041 7.5709548 13.783203 7.5410156 C 14.194904 6.6878776 14.208411 5.595668 13.738281 4.6875 C 13.180281 3.5435 11.912609 2.7458125 10.599609 2.7578125 C 10.564279 2.7571429 10.529399 2.7631876 10.494141 2.7636719 C 9.9613155 1.9799623 9.0218011 1.4196018 8 1.3730469 z M 8 2.6269531 C 8.4899208 2.5809678 8.9983457 2.6969739 9.4707031 2.9375 C 8.5949615 3.2285226 7.8367262 3.855196 7.4355469 4.6738281 C 6.9987876 5.4980117 6.9778546 6.4830312 7.2910156 7.2949219 A 1 1 0 0 0 7.1835938 7.4238281 C 6.6340385 7.122299 6.2072229 6.6889183 5.9707031 6.171875 C 5.6197031 5.430875 5.6588281 4.5540469 6.0488281 3.8730469 C 6.4298281 3.1750469 7.173 2.7119531 8 2.6269531 z M 4.3535156 4.1953125 C 4.16785 5.0991661 4.3291859 6.0698362 4.8378906 6.8261719 C 5.33279 7.6164145 6.1753201 8.125027 7.0351562 8.2597656 A 1 1 0 0 0 7.0917969 8.4199219 C 6.5566973 8.7444261 5.9662938 8.8973185 5.4003906 8.84375 C 4.5823906 8.77675 3.8461719 8.3049531 3.4511719 7.6269531 C 3.0371719 6.9479531 3.0066562 6.0715 3.3476562 5.3125 C 3.5523466 4.8647768 3.9087117 4.4844225 4.3535156 4.1953125 z M 10.597656 4.2460938 C 11.392656 4.2270937 12.167297 4.6375 12.654297 5.3125 C 12.939642 5.7142276 13.09157 6.2152803 13.119141 6.7460938 C 12.428961 6.1322112 11.507702 5.7853341 10.597656 5.8476562 C 9.6656471 5.8817719 8.8024028 6.3575111 8.2558594 7.0351562 A 1 1 0 0 0 8.0917969 7.0058594 C 8.0777502 6.3791696 8.2382753 5.7903526 8.5683594 5.3261719 C 9.0343594 4.6521719 9.8126563 4.2490937 10.597656 4.2460938 z M 10.599609 7.15625 C 11.417609 7.22325 12.153828 7.6950469 12.548828 8.3730469 C 12.962828 9.0520469 12.995297 9.9285 12.654297 10.6875 C 12.448934 11.134814 12.091649 11.515565 11.646484 11.804688 C 11.832231 10.901076 11.670694 9.9299853 11.162109 9.1738281 C 10.66721 8.3835855 9.8246799 7.874973 8.9648438 7.7402344 A 1 1 0 0 0 8.9082031 7.5800781 C 9.4433027 7.2555739 10.033706 7.1026815 10.599609 7.15625 z M 8.8164062 8.5761719 C 9.3660286 8.877701 9.7940426 9.3110817 10.03125 9.828125 C 10.38225 10.569125 10.340172 11.445953 9.9511719 12.126953 C 9.5701719 12.824953 8.828 13.289047 8 13.373047 C 7.5100792 13.419032 7.0018592 13.303026 6.5292969 13.0625 C 7.4050385 12.771477 8.1632738 12.144804 8.5644531 11.326172 C 9.0012124 10.501988 9.0221454 9.5169688 8.7089844 8.7050781 A 1 1 0 0 0 8.8164062 8.5761719 z M 7.7441406 8.9648438 A 1 1 0 0 0 7.9082031 8.9941406 C 7.9220214 9.6210886 7.761037 10.210335 7.4316406 10.673828 C 6.9646406 11.348828 6.1863437 11.750906 5.4023438 11.753906 C 4.6073438 11.772906 3.8327031 11.3625 3.3457031 10.6875 C 3.0603584 10.285772 2.9084302 9.7847197 2.8808594 9.2539062 C 3.5710601 9.8677032 4.4917537 10.213947 5.4023438 10.152344 C 6.3343529 10.118228 7.1975972 9.6424889 7.7441406 8.9648438 z"
              ></path>
            </svg>
            <label for="codewars-icon" class="text-2xl"
              ><a
                target="_blank"
                href="https://www.codewars.com/users/marcorosenbaum"
                >Codewars</a
              ></label
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import codeBackground from "@/assets/images/code-background.png";
import photoMarco from "@/assets/images/photo-marco.png";
import VLazyImage from "v-lazy-image";
import GithubLink from "@/components/GithubLink.vue";
import LinkedinLink from "@/components/LinkedinLink.vue";

export default {
  name: "StartSection",
  components: { AppHeader, VLazyImage, GithubLink, LinkedinLink },
  data() {
    return {
      codeBgImage: codeBackground,
      photoOfMarco: photoMarco,
    };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
}

#text-marco {
  animation: slideIn 3s;
  animation-timing-function: ease-in 2s;
}

#text-vision {
  animation: slideIn 4s;
  animation-timing-function: ease-in 4s;
}

#photo-of-marco {
  animation: fadeIn 2s ease-in;
}
</style>
