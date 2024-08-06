<template>
    <div class="range-slider">
      <div class="slider-container">
        <input
          type="range"
          :min="min"
          :max="max"
          :value="minValue"
          @input="updateValue"
          class="range-input"
        />
        <div class="range-progress" :style="progressStyle"></div>
        <div class="thumb" :style="thumbStyle"></div>
      </div>
      <div class="range-labels">
        <span>{{ minValue }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RangeSliderComponent',
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      minValue: {
        type: Number,
        default: 0
      }
    },
    computed: {
      progressStyle() {
        const percentage = ((this.minValue - this.min) / (this.max - this.min)) * 100;
        return {
          width: `${percentage}%`,
          backgroundColor: '#007bff'
        };
      },
      thumbStyle() {
        const thumbPercentage = ((this.minValue - this.min) / (this.max - this.min)) * 100;
        return {
          left: `calc(${thumbPercentage}% - 10px)`, // Adjusting to center the thumb
          backgroundColor: '#007bff'
        };
      }
    },
    methods: {
      updateValue(event) {
        let newValue = parseFloat(event.target.value);
        if (newValue < this.min) {
          newValue = this.min;
        } else if (newValue > this.max) {
          newValue = this.max;
        }
        this.$emit('update:minValue', newValue);
      }
    }
  }
  </script>
  
  <style scoped>
  .range-slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    position: relative;
  }
  
  .slider-container {
    position: relative;
    width: 100%;
  }
  
  .range-input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    position: absolute;
    transform: translateY(-11px);
    z-index: 2;
  }
  
  .range-input::-webkit-slider-thumb {
    transform: translateX(-140px);
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #007bff;
    cursor: pointer;
    border-radius: 50%;
    position: relative; /* Needed for positioning */
  }
  
  .range-progress {
    position: absolute;
    top: 50%;
    height: 8px;
    background-color: #007bff;
    border-radius: 4px;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 1;
  }
  

  
  .range-labels {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  </style>
  