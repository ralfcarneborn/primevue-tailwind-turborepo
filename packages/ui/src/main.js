// import { createApp } from 'vue'
import "./style.css";
import App from "./App.vue";

// createApp(App).mount('#app')

import { createApp } from "vue";
import PrimeVue from "primevue/config";

// Importing PrimeVue styles
import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
// import "primeicons/primeicons.css"; // icons

createApp(App).use(PrimeVue).mount("#app");
