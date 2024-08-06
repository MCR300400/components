<template>
    <div>
      <button @click="toggleDrawer">Open Drawer</button>
      <div :class="['drawer', { open: isOpen }]">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DrawerComponent',
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDrawer() {
        this.isOpen = !this.isOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  .drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1000;
  }
  
  .drawer.open {
    transform: translateX(0);
  }
  </style>
  