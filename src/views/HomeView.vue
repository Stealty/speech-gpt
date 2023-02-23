<!-- eslint-disable no-undef -->
<script setup>
import { useSpeechRecognition } from "@vueuse/core";
import { useSpeechSynthesis } from "@vueuse/core";
import { askOpenAi } from "../api/openai";
import { ref } from "vue";

const { result, start, recognition, stop, isListening } = useSpeechRecognition({
  lang: navigator.language,
  continuous: false,
});

const { utterance, speak } = useSpeechSynthesis();

const utterranceRef = ref(utterance.value.text);

recognition.onend = () => {
  askOpenAi(result.value).then((result) => {
    utterance.value.text = result.replace("?\n\n", "").trim();
    utterance.value.lang = navigator.language;
    utterranceRef.value = result.replace("?\n\n", "").trim();
    speak();
    console.log(utterance);
  });
  stop();
};
</script>

<template>
  <main>
    <button @click="start">Press to talk</button>
    <div>{{ result }}</div>
    <div>{{ utterranceRef }}</div>
    <div v-if="isListening">Whe are listening you</div>
  </main>
</template>
