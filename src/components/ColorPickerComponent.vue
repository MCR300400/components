<template>
    <div class="color-picker">
      <input 
        type="color" 
        :value="color" 
        @input="onColorChange" 
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'ColorPickerComponent',
    props: {
      value: {
        type: String,
        default: '#000000'
      }
    },
    data() {
      return {
        color: this.value
      }
    },
    watch: {
      value(newVal) {
        this.color = newVal;
      }
    },
    methods: {
      onColorChange(event) {
        const newColor = event.target.value;
        this.color = newColor;
        this.$emit('input', newColor);
      }
    }
  }
  </script>
  
  <style scoped>
  .color-picker input {
    border: none;
    padding: 5px;
    width: 100%;
    height: 40px;
    cursor: pointer;
  }
  </style>
  