<!-- eslint-disable no-undef -->
<script setup>
import askOpenAi from "../api/index";

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// recognition.continuous = true;
recognition.lang = "pt-BR";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
  console.log(event.results[0][0].transcript);
};

recognition.onspeechend = () => {
  recognition.stop();
  console.log("Stopped");
};

function recog() {
  recognition.start();
  console.log(recognition);
}
</script>

<template>
  <div></div>
  <div></div>
  <div></div>
  <main>
    <button @click="recog">Recognyze</button>
    <button @click="askOpenAi">Ask openai</button>
  </main>
</template>
