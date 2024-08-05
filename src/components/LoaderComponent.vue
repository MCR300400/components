<template>
    <div class="spinner" :style="spinnerStyle"></div>
  </template>
  
  <script>
  export default {
    name: 'LoaderComponent',
    props: {
      size: {
        type: String,
        default: '2rem'
      },
      color: {
        type: String,
        default: '#007bff'
      }
    },
    computed: {
      spinnerStyle() {
        return {
          width: this.size,
          height: this.size,
          borderColor: `${this.color} transparent transparent transparent`,
          borderWidth: '0.25em',
          borderStyle: 'solid'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .spinner {
    border-radius: 50%;
    border: 0.25em solid;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  