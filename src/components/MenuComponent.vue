<template>
    <div class="context-menu" v-if="visible" :style="{ top: `${position.y}px`, left: `${position.x}px` }">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" @click="selectItem(item)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  
  const visible = ref(false);
  const position = ref({ x: 0, y: 0 });
  const menuItems = ref([
    { label: 'Option 1', action: () => console.log('Option 1 selected') },
    { label: 'Option 2', action: () => console.log('Option 2 selected') },
    { label: 'Option 3', action: () => console.log('Option 3 selected') },
  ]);
  
  const showMenu = (event) => {
    event.preventDefault(); // Prevent default context menu
    position.value = { x: event.clientX, y: event.clientY };
    visible.value = true;
  };
  
  const hideMenu = () => {
    visible.value = false;
  };
  
  const selectItem = (item) => {
    item.action();
    hideMenu();
  };
  
  onMounted(() => {
    document.addEventListener('contextmenu', showMenu);
    document.addEventListener('click', hideMenu);
  });
  
  onUnmounted(() => {
    document.removeEventListener('contextmenu', showMenu);
    document.removeEventListener('click', hideMenu);
  });
  </script>
  
  <style scoped>
  .context-menu {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    z-index: 1000;
  }
  
  .context-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .context-menu li {
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .context-menu li:hover {
    background-color: #f0f0f0;
  }
  </style>
  