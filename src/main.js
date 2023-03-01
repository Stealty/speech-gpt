import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

import App from "./App.vue";
import router from "./router";

import "@styles/main.scss";

const app = createApp(App);

const darkTheme = {
  primary: "#486284",
  secondary: "#8ca2c0",
  tertiary: "#9cb0c9",
  quarternary: "#eff2f6",
};

app.use(
  createVuestic({
    config: {
      colors: {
        variables: darkTheme,
      },
    },
  })
);
app.use(createPinia());
app.use(router);

app.mount("#app");
