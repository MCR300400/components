<template>
    <div class="date-picker">
      <input type="date" v-model="selectedDate" @change="updateDate" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'DatePickerComponent',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        selectedDate: this.value
      };
    },
    methods: {
      updateDate() {
        this.$emit('input', this.selectedDate);
      }
    },
    watch: {
      value(newVal) {
        this.selectedDate = newVal;
      }
    }
  }
  </script>
  
  <style scoped>
  .date-picker input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  