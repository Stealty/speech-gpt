<script setup>
const props = defineProps({
  isListening: Boolean,
});
</script>

<template>
  <va-icon v-if="isListening" class="mic" name="mic" size="large" />
</template>

<style scoped lang="scss">
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
.mic {
  color: var(--va-quarternary);
  position: fixed;
  top: 4rem;
  left: 2rem;
  animation: pulse infinite 1s;

  @media screen and (max-width: 370px) {
    zoom: 0.9;
    top: 1.2rem;
    left: unset;
  }
}
</style>
