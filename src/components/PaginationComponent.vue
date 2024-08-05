<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script setup>
    
  const props = defineProps({
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  });
  
  const emit = defineEmits(['update:currentPage']);
  
  const prevPage = () => {
    if (props.currentPage > 1) {
      emit('update:currentPage', props.currentPage - 1);
    }
  };
  
  const nextPage = () => {
    if (props.currentPage < props.totalPages) {
      emit('update:currentPage', props.currentPage + 1);
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button {
    padding: 5px 10px;
    font-size: 14px;
  }
  button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
  </style>
  