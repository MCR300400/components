<template>
    <div class="text-editor-component">
      <textarea v-model="content"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextEditorComponent',
    data() {
      return {
        content: ''
      }
    },
    watch: {
      content(newValue) {
        this.$emit('input', newValue);
      }
    }
  }
  </script>
  
  <style scoped>
  .text-editor-component textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
  }
  </style>
  