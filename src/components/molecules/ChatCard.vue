<script setup>
const props = defineProps({
  username: String,
  content: String,
});
</script>

<template>
  <va-card class="card">
    <VaSkeletonGroup v-if="!content" animation="wave" :delay="0">
      <VaSkeleton />
    </VaSkeletonGroup>

    <va-card-title v-if="content" class="card__user"
      >{{ username }}:</va-card-title
    >
    <va-card-content v-if="content" class="card__content">
      {{ content }}
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
