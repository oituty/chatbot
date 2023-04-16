import { createApp } from "vue";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./styles/global.postcss";

createApp(App).use(router).mount("#app");
