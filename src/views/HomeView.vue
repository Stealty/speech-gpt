<!-- eslint-disable no-undef -->
<script setup>
import { useSpeechRecognition } from "@vueuse/core";
import { useSpeechSynthesis } from "@vueuse/core";
import { ref } from "vue";
import { useDateFormat } from "@vueuse/core";

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
          time: useDateFormat(new Date(), "HH:mm:ss"),
          question: result.value,
          answer: data.bot,
        });
        speak();
      })
      .catch((error) => console.error(error));
  } else {
    alert("Say something...");
  }

  stop();
};
</script>

<template>
  <main class="home__main">
    <h1 class="home__title">SpeechGPT</h1>
    <p class="home__description">
      What do you want? Let's talk about something!
    </p>
    <section aria-label="Chat log" class="home__log">
      <ul class="home__list">
        <li class="home__listItem" :key="log" v-for="log in chatLog">
          {{ log.time }}
          <va-card class="home__card">
            <va-card-title>You:</va-card-title>
            <va-card-content class="home__content">
              {{ log.question }}
            </va-card-content>
          </va-card>
          <va-card class="home__card">
            <va-card-title>SpeechGPT:</va-card-title>
            <va-card-content class="home__content">
              {{ log.answer }}
            </va-card-content>
          </va-card>
        </li>
      </ul>
    </section>
    <va-icon v-if="isListening" class="home__mic" name="mic" size="large" />
    <div class="home__buttons">
      <va-button @click="start" class="home__button" preset=""
        >Press to talk</va-button
      >
      <va-button @click="stop" class="home__button" preset=""
        >Press to stop talking</va-button
      >
    </div>
  </main>
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
.home {
  overflow: hidden;
  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 1rem;
    color: var(--quarternary-color);
  }
  &__title {
    font-size: 3rem;
  }
  &__description {
    text-align: center;
  }

  &__card {
    overflow: hidden;
    min-width: 227px;
    max-width: 500px;
  }

  &__content::first-letter {
    text-transform: uppercase;
  }
  &__wrapper {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__log {
    width: 100%;
    height: calc(86vh - 150px);
    overflow: hidden;
  }

  &__list {
    display: grid;
    gap: 5rem;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
  }

  &__mic {
    position: fixed;
    top: 3rem;
    left: 2rem;
    animation: pulse infinite 1s;

    @media screen and (max-width: 370px) {
      zoom: 0.9;
      top: 0.7rem;
      left: unset;
    }
  }

  &__listItem {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__buttons {
    display: flex;
    gap: 3rem;
  }

  &__list::-webkit-scrollbar {
    height: 1rem;
    width: 0.5rem;
  }
  &__list::-webkit-scrollbar-thumb {
    --tw-bg-opacity: 1;
    background-color: rgba(86, 88, 105);
  }
  &__list::-webkit-scrollbar-thumb {
    --tw-border-opacity: 1;
    background-color: rgba(217, 217, 227, 0.8);
    border-color: rgba(255, 255, 255);
    border-radius: 9999px;
    border-width: 1px;
  }
  &__list::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 9999px;
  }
}
</style>
