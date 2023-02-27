<script setup>
import { useColors } from "vuestic-ui";
import { ref } from "vue";

const lightTheme = {
  primary: "#eff2f6",
  secondary: "#9cb0c9",
  tertiary: "#8ca2c0",
  quarternary: "#486284",
};

const darkTheme = {
  primary: "#486284",
  secondary: "#8ca2c0",
  tertiary: "#9cb0c9",
  quarternary: "#eff2f6",
};

const { setColors } = useColors();

const value = ref(false);

function switchTheme(value) {
  if (value) {
    value.value == !value;
    setColors(lightTheme);
  }
  if (!value) {
    value.value == !value;
    setColors(darkTheme);
  }
}
</script>

<template>
  <button
    class="switcher__button"
    v-on:click="() => switchTheme(value)"
    style="background-color: transparent; border: none"
  >
    <va-switch
      v-model="value"
      color="#486284"
      off-color="#eff2f6"
      style="--va-switch-checker-background-color: #252723"
    >
      <template #innerLabel>
        <div class="va-text-center">
          <va-icon size="24px" :name="value ? 'light_mode' : 'dark_mode'" />
        </div>
      </template>
    </va-switch>
  </button>
</template>

<style scoped>
.cor {
  background-color: red;
}
.switcher__button {
  position: fixed;
  right: 1rem;
  top: 1rem;
}
</style>
