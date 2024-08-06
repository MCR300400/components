<template>
    <div class="stepper-component">
      <div class="step" v-for="(step, index) in steps" :key="index">
        <div class="step-header" :class="{ active: index === currentStep }">
          {{ step.title }}
        </div>
        <div class="step-content" v-if="index === currentStep">
          <slot :name="`step-${index}`"></slot>
          <button @click="nextStep" :disabled="isLastStep">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StepperComponent',
    props: {
      steps: {
        type: Array,
        required: true,
        validator(value) {
          // Assicurati che l'array passi l'validator
          return value.every(step => step.title);
        }
      }
    },
    data() {
      return {
        currentStep: 0
      }
    },
    computed: {
      isLastStep() {
        return this.currentStep === this.steps.length - 1;
      }
    },
    methods: {
      nextStep() {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep += 1;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .stepper-component {
    display: flex;
    flex-direction: column;
  }
  
  .step {
    margin-bottom: 10px;
  }
  
  .step-header {
    font-weight: bold;
    cursor: pointer;
  }
  
  .step-header.active {
    color: blue;
  }
  
  .step-content {
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
  </style>
  