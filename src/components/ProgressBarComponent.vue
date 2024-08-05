<template>
    <div class="progress-bar">
      <div
        class="progress-bar-fill"
        :style="{ width: `${progress}%`, backgroundColor: color, height: height }"
      >
        <span v-if="label" class="progress-bar-label">{{ label }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressBar',
    props: {
      progress: {
        type: Number,
        required: true,
        validator(value) {
          return value >= 0 && value <= 100;
        }
      },
      color: {
        type: String,
        default: '#007bff'
      },
      height: {
        type: String,
        default: '1rem'
      },
      label: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  
  <style scoped>
  .progress-bar {
    width: 100%;
    background-color: #e9ecef;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  
  .progress-bar-fill {
    height: 100%;
    line-height: 1;
    transition: width 0.4s ease;
    text-align: center;
    color: #fff;
    position: relative;
  }
  
  .progress-bar-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  