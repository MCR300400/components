<template>
    <div class="countdown-timer">
      <div v-if="remainingTime > 0">
        <span>{{ minutes }}</span>:<span>{{ seconds }}</span>
      </div>
      <div v-else>
        Time's up!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CountdownTimerComponent',
    props: {
      initialTime: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        remainingTime: this.initialTime * 60,
        intervalId: null
      }
    },
    computed: {
      minutes() {
        return Math.floor(this.remainingTime / 60).toString().padStart(2, '0');
      },
      seconds() {
        return (this.remainingTime % 60).toString().padStart(2, '0');
      }
    },
    methods: {
      updateTimer() {
        if (this.remainingTime > 0) {
          this.remainingTime -= 1;
        } else {
          clearInterval(this.intervalId);
        }
      }
    },
    mounted() {
      this.intervalId = setInterval(this.updateTimer, 1000);
    },
    beforeUnmount() {
      clearInterval(this.intervalId);
    }
  }
  </script>
  
  <style scoped>
  .countdown-timer {
    font-size: 2em;
    text-align: center;
  }
  </style>
  