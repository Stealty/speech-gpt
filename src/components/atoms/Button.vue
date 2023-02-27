<script setup>
const props = defineProps({
  click: Function,
  name: String | HTMLElement,
});
</script>

<template>
  <va-button class="button" @click="click">{{ name }}</va-button>
</template>

<style scoped lang="scss">
.button {
  color: var(--va-primary) !important;

  &::before {
    background-color: var(--va-quarternary);
  }
}
</style>
