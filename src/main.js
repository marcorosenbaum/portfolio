import "./assets/main.css";
import VLazyImagePlugin from "v-lazy-image";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(VLazyImagePlugin);

app.mount("#app");
