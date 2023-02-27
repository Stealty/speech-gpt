<!-- eslint-disable no-undef -->
<script setup>
import { useSpeechRecognition } from "@vueuse/core";
import { useSpeechSynthesis } from "@vueuse/core";
import { ref } from "vue";
import Mic from "../components/icons/Mic.vue";
import Header from "../components/organisms/Header.vue";
import Button from "../components/atoms/Button.vue";
import ChatLog from "../components/organisms/ChatLog.vue";
import ThemeSwitcher from "../components/molecules/ThemeSwitcher.vue";

const { result, start, recognition, stop, isListening } = useSpeechRecognition({
  lang: "en-US",
  continuous: false,
});

const { utterance, speak } = useSpeechSynthesis();

const chatLog = ref([]);

recognition.onend = () => {
  const voices = window.speechSynthesis.getVoices();
  if (result.value.length > 0) {
    fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: result.value,
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      }),
    })
      .then((response) => response)
      .then((data) => data.json())
      .then(async (data) => {
        utterance.value.text = data.bot;
        utterance.value.lang = "en-US";
        utterance.value.voice = voices[1];
        chatLog.value.unshift({
          time: new Date(),
          question: result.value,
          answer: data.bot,
        });
        speak();
        result.value = "";
      })
      .catch((error) => console.error(error));
  } else {
    alert("Say something...");
  }

  stop();
};
</script>

<template>
  <Header
    title="SpeechGPT"
    description=" What do you want? Let's talk about something!"
  />
  <ThemeSwitcher />
  <main class="home__main">
    <ChatLog :chat-log="chatLog" />
    <Mic :is-listening="isListening" />
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
    align-items: center;
    gap: 1rem;
  }

  &__buttons {
    display: flex;
    gap: 3rem;
  }
}
</style>
