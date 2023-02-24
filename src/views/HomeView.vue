<!-- eslint-disable no-undef -->
<script setup>
import { useSpeechRecognition } from "@vueuse/core";
import { useSpeechSynthesis } from "@vueuse/core";
import { askOpenAi } from "../api/openai";
import { ref } from "vue";

const { result, start, recognition, stop, isListening } = useSpeechRecognition({
  lang: "en-US",
  continuous: false,
});

const { utterance, speak } = useSpeechSynthesis();

const utterranceRef = ref(utterance.value.text);

recognition.onend = () => {
  const voices = window.speechSynthesis.getVoices();

  askOpenAi(result.value).then((result) => {
    utterance.value.text = result.replace("?\n\n", "").trim();
    utterance.value.lang = "en-US";
    utterance.value.voice = voices[1];
    utterranceRef.value = result.trim();
    speak();
    console.log(result);
  });
  stop();
};
</script>

<template>
  <main class="home__main">
    <h1 class="home__title">SpeechGPT</h1>
    <p class="home__description">
      What do you want? Let's talk about something!
    </p>
    <!-- @click="start" -->
    <va-button @click="start" class="home__button" preset=""
      >Press to talk</va-button
    >
    <va-button @click="stop" class="home__button" preset=""
      >Press to stop talking</va-button
    >
    <div v-if="isListening">Whe are listening you</div>
    <va-card class="home__card">
      <va-card-title>You:</va-card-title>
      <va-card-content class="home__content">
        {{ result }}
      </va-card-content>
    </va-card>
    <va-card class="home__card">
      <va-card-title>SpeechGPT:</va-card-title>
      <va-card-content class="home__content">
        {{ utterranceRef }}
      </va-card-content>
    </va-card>
  </main>
</template>

<style scoped lang="scss">
.home {
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
  &__button {
  }

  &__card {
    min-width: 360px;
    max-width: 500px;
  }

  &__content::first-letter {
    text-transform: uppercase;
  }
}
</style>
