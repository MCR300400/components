<template>
  <div class="tree-node">
    <div class="node-header" @click="toggle">
      <span v-if="hasChildren" class="toggle-icon">
        {{ isOpen ? '−' : '+' }}
      </span>
      {{ node.label }}
    </div>
    <div v-if="isOpen && hasChildren" class="children">
      <TreeNodeComponent v-for="child in node.children" :key="child.id" :node="child" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  node: {
    type: Object,
    required: true,
  },
});

const isOpen = ref(false);

const hasChildren = computed(() => props.node.children && props.node.children.length > 0);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.tree-node {
  margin-left: 20px;
}

.node-header {
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
}

.node-header:hover {
  background-color: #d0d0d0;
}

.toggle-icon {
  margin-right: 8px;
  font-weight: bold;
  color: #555;
}

.children {
  margin-left: 20px;
  padding-left: 10px;
  border-left: 1px dashed #ccc;
}
</style>
