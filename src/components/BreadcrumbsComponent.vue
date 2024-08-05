<template>
    <nav class="breadcrumbs">
      <span v-for="(crumb, index) in crumbs" :key="index">
        <router-link :to="crumb.path">{{ crumb.label }}</router-link>
        <span v-if="index < crumbs.length - 1" class="separator"> &gt; </span>
      </span>
    </nav>
  </template>
  
  <script setup>
  const props = defineProps({
    crumbs: {
      type: Array,
      required: true,
      default: () => []
    }
  });
  const crumbs = props.crumbs;
  </script>
  
  
  <style scoped>
  .breadcrumbs {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #333;
  }
  
  .breadcrumbs a {
    color: #007bff;
    text-decoration: none;
  }
  
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  
  .separator {
    margin: 0 0.5rem;
  }
  </style>
  