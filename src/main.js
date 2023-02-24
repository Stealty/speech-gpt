import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

import App from "./App.vue";
import router from "./router";

import "./styles/main.scss";

const app = createApp(App);

app.use(createVuestic());
app.use(createPinia());
app.use(router);

app.mount("#app");
