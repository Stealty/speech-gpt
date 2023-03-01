<script setup>
import Mic from "@icons/Mic.vue";
import Button from "@atoms/Button.vue";
import Header from "@organisms/Header.vue";
import ChatLog from "@organisms/ChatLog.vue";
import { useChatStore } from "@stores/chatStore";
import useRecognition from "@use/useRecognition";

const { start, stop, isListening } = useRecognition();

const { chatLog } = useChatStore();
</script>

<template>
  <Header
    title="SpeechGPT"
    description=" What do you want? Let's talk about something!"
  />
  <main class="home__main">
    <ChatLog :chat-log="chatLog" />
    <Mic :is-listening="isListening" />
    <button :on-click="useRecognition">asdasd</button>
    <div class="home__buttons">
      <Button name="Press to talk" :click="start" />
      <Button name="Press to stop talking" :click="stop" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.home {
  overflow: hidden;
  &__main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  &__buttons {
    display: flex;
    gap: 3rem;
  }
}
</style>
