<template>
    <div class="timer">
      <div class="time">{{ formattedTime }}</div>
      <button @click="startTimer">Start</button>
      <button @click="pauseTimer">Pause</button>
      <button @click="resetTimer">Reset</button>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  
  const time = ref(0);
  const intervalId = ref(null);
  
  const formattedTime = computed(() => {
    const minutes = Math.floor(time.value / 60);
    const seconds = time.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });
  
  const startTimer = () => {
    if (!intervalId.value) {
      intervalId.value = setInterval(() => {
        time.value++;
      }, 1000);
    }
  };
  
  const pauseTimer = () => {
    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };
  
  const resetTimer = () => {
    time.value = 0;
    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };
  </script>
  
  <style scoped>
  .timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
  }
  
  .time {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
  }
  </style>
  