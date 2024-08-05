<template>
    <div class="rating">
      <span
        v-for="star in stars"
        :key="star"
        :class="['star', { 'star-filled': star <= (hoverRating || currentRating) }]"
        @click="setRating(star)"
        @mouseover="hoverRating = star"
        @mouseleave="hoverRating = 0"
      >
        ★
      </span>
    </div>
  </template>
  
  <script setup>
  import { defineEmits, defineProps, ref } from 'vue';
  
  // Props
  const props = defineProps({
    maxRating: {
      type: Number,
      default: 5,
    },
    initialRating: {
      type: Number,
      default: 0,
    }
  });
  
  // Emit function
  const emit = defineEmits(['update:rating']);
  
  // Reactive state
  const currentRating = ref(props.initialRating);
  const hoverRating = ref(0); // Dichiarazione corretta come ref
  
  // Stars array
  const stars = Array.from({ length: props.maxRating }, (_, i) => i + 1);
  
  // Methods
  const setRating = (rating) => {
    currentRating.value = rating;
    emit('update:rating', currentRating.value); // Emit event to parent component
  };
  </script>
  
  <style scoped>
  .rating {
    display: flex;
    gap: 0.5rem;
    font-size: 2rem;
    cursor: pointer;
  }
  
  .star {
    color: #ccc;
    transition: color 0.3s ease;
  }
  
  .star-filled {
    color: gold;
  }
  </style>
  