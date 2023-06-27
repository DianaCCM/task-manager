//import store from "./store/store.js";
//App.use(store);
import { createApp } from "vue";
import App from "./App.vue";
import { IonicVue } from "@ionic/vue";

import "./assets/main.css";

const app = createApp(App);

app.use(IonicVue);
app.mount("#app");
