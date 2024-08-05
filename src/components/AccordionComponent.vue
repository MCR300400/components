<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <div class="accordion-header" @click="toggle(index)">
          <span>{{ item.title }}</span>
          <span class="accordion-toggle">{{ openIndex === index ? '-' : '+' }}</span>
        </div>
        <div v-if="openIndex === index" class="accordion-body">
          <slot :name="`item-${index}`">
            {{ item.content }}
          </slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define the props
  const props = defineProps({
    items: {
      type: Array,
      required: true
    }
  });
  
  // Use the items prop in the component
  const openIndex = ref(null);
  
  const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
  };
  
  // Explicitly declare that we use `items` to avoid ESLint warnings
  const items = props.items;
  </script>
  
  <style scoped>
  .accordion {
    border-radius: 5px;
    overflow: hidden;
  }
  
  .accordion-item {
    border-bottom: 1px solid #ddd;
  }
  
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    background-color: #f1f1f1;
    font-weight: bold;
  }
  
  .accordion-toggle {
    font-size: 1.2rem;
  }
  
  .accordion-body {
    padding: 10px;
    background-color: #fafafa;
  }
  </style>
  