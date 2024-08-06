<template>
    <div class="list-component">
      <ul>
        <li v-for="item in items" :key="item.id" @click="selectItem(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListComponent',
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      selectItem(item) {
        this.$emit('item-selected', item);
      }
    }
  }
  </script>
  
  <style scoped>
  .list-component ul {
    list-style-type: none;
    padding: 0;
  }
  .list-component li {
    padding: 10px;
    cursor: pointer;
  }
  .list-component li:hover {
    background-color: #f0f0f0;
  }
  </style>
  