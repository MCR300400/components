<template>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="form.name" type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="form.email" type="email" id="email" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'FormComponent',
    data() {
      return {
        form: {
          name: '',
          email: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        this.$emit('submit', this.form);
      }
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  