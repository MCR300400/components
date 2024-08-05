<template>
  <div class="tree-view">
    <TreeNodeComponent v-for="node in treeData" :key="node.id" :node="node" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TreeNodeComponent from './TreeNodeComponent.vue';

const treeData = ref([
  {
    id: 1,
    label: 'Root 1',
    children: [
      { id: 2, label: 'Child 1-1' },
      { id: 3, label: 'Child 1-2' },
    ],
  },
  {
    id: 4,
    label: 'Root 2',
    children: [
      { id: 5, label: 'Child 2-1' },
      { id: 6, label: 'Child 2-2', children: [{ id: 7, label: 'Child 2-2-1' }] },
    ],
  }
]);
</script>

<style scoped>
.tree-view {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 20px auto; /* Auto margin for horizontal centering */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: inline-block; /* Adjusts width to fit content */
  min-width: 200px; /* Optional: Ensure a minimum width */
  max-width: 100%; /* Optional: Prevent it from expanding too much */
}
</style>
