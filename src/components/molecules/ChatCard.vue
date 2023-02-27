<script setup>
const props = defineProps({
  log: {
    question: String,
    answer: String,
  },
});
</script>

<template>
  <va-card class="card">
    <va-card-title class="card__user">You:</va-card-title>
    <va-card-content class="card__content">
      {{ log.question }}
    </va-card-content>
  </va-card>
  <va-card class="card">
    <va-card-title class="card__user">SpeechGPT:</va-card-title>
    <va-card-content class="card__content">
      {{ log.answer }}
    </va-card-content>
  </va-card>
</template>

<style scoped lang="scss">
.card {
  overflow: hidden;
  min-width: 227px;
  max-width: 500px;
  color: var(--va-primary) !important;

  &__user {
    background-color: var(--va-quarternary);
  }

  &__content {
    background-color: var(--va-quarternary);
    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
