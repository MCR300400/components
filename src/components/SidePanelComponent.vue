<template>
  <div :class="['side-panel', { open: isOpen }]">
    <button @click="togglePanel" class="toggle-button">Toggle Panel</button>
    <div class="panel-content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidePanelComponent',
  props: {
    // Prop per controllare la visibilità del pannello
    initialOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: this.initialOpen
    }
  },
  methods: {
    togglePanel() {
      this.isOpen = !this.isOpen;
      this.$emit('update:open', this.isOpen);
    }
  }
}
</script>

<style scoped>
.side-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  transform: translateX(100%);
  z-index: 1000;
}
.side-panel.open {
  transform: translateX(0);
}
.panel-content {
  padding: 20px;
}
.toggle-button {
  position: absolute;
  top: 110px;
  left: -50px; /* Adjust if necessary */
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.toggle-button:hover {
  background-color: #0056b3;
}
</style>
