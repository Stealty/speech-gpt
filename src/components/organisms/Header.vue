<script setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <header class="header">
    <h1 class="header__title">{{ title }}</h1>
    <p class="header__description">
      {{ description }}
    </p>
  </header>
</template>

<style scoped lang="scss">
.header {
  color: var(--va-quarternary);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;

  &__title {
    font-size: 3rem;
  }
  &__description {
    text-align: center;
  }
}
</style>
