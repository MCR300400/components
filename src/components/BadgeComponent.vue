<template>
    <span class="badge" :style="badgeStyle">{{ text }}</span>
  </template>
  
  <script>
  export default {
    name: 'BadgeComponent',
    props: {
      text: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#007bff'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      size: {
        type: String,
        default: '1rem'
      }
    },
    computed: {
      badgeStyle() {
        return {
          backgroundColor: this.color,
          color: this.textColor,
          fontSize: this.size,
          padding: '0.25em 0.5em',
          borderRadius: '0.25rem',
          display: 'inline-block'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .badge {
    font-weight: 700;
    text-align: center;
  }
  </style>
  