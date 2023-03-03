<script setup>
import { ref } from "vue";
import { useDateFormat } from "@vueuse/core";

const props = defineProps({
  time: Date,
});

const timeRef = ref(useDateFormat(props.time, "HH:mm:ss"));
</script>

<template>
  <span class="time"> {{ timeRef }}</span>
</template>

<style scoped>
.time {
  color: var(--va-quarternary);
}
</style>
