import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import Smooth from "./presets/smooth";

const app = createApp(App);
app.use(PrimeVue, { unstyled: true, pt: Smooth });
app.mount("#app");
