<!-- ModalDialogComponent.vue -->
<template>
    <div v-if="modelValue" class="modal-overlay" @click="close">
      <div class="modal-content" @click.stop>
        <header class="modal-header">
          <h3>{{ title }}</h3>
          <button class="close-btn" @click="close">X</button>
        </header>
        <div class="modal-body">
          <slot></slot>
        </div>
        <footer class="modal-footer">
          <button @click="confirm">OK</button>
          <button @click="close">Cancel</button>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModalDialogComponent',
    props: {
      modelValue: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        default: 'Modal Title'
      }
    },
    emits: ['update:modelValue', 'confirm'],
    methods: {
      close() {
        this.$emit('update:modelValue', false);
      },
      confirm() {
        this.$emit('confirm');
        this.close(); // Optional: Close the modal after confirmation
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    position: relative;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-left: 0.5rem;
  }
  button:hover {
    background-color: #0056b3;
  }
  button:disabled {
    cursor: not-allowed;
    background-color: #ddd;
  }
  </style>
  