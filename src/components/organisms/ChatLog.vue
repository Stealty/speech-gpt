<script setup>
import Time from "../atoms/Time.vue";
import Card from "../molecules/ChatCard.vue";
const props = defineProps({
  chatLog: Array,
});
</script>

<template>
  <section aria-label="Chat log" class="log">
    <ul class="log__list">
      <li class="log__listItem" :key="log" v-for="log in chatLog">
        <Time :time="log.time" />
        <Card :log="log" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.log {
  width: 100%;
  height: calc(80vh - 150px);
  overflow: hidden;
  padding: 1rem 0;

  &__list {
    display: grid;
    gap: 5rem;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: center;

    &::-webkit-scrollbar {
      height: 1rem;
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      --tw-bg-opacity: 1;
      background-color: rgba(86, 88, 105);
    }
    &::-webkit-scrollbar-thumb {
      --tw-border-opacity: 1;
      background-color: var(--va-quarternary);
      border-color: rgba(255, 255, 255);
      border-radius: 9999px;
      border-width: 1px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 9999px;
    }
  }

  &__listItem {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
