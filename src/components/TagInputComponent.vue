<template>
    <div class="tag-input">
      <div class="tags">
        <span v-for="(tag, index) in tags" :key="index" class="tag">
          {{ tag }}
          <button @click="removeTag(index)">×</button>
        </span>
      </div>
      <input 
        v-model="inputValue" 
        @keydown.enter="addTag" 
        placeholder="Add a tag" 
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'TagInputComponent',
    data() {
      return {
        inputValue: '',
        tags: []
      }
    },
    methods: {
      addTag() {
        if (this.inputValue.trim() && !this.tags.includes(this.inputValue.trim())) {
          this.tags.push(this.inputValue.trim());
          this.inputValue = '';
        }
      },
      removeTag(index) {
        this.tags.splice(index, 1);
      }
    }
  }
  </script>
  
  <style scoped>
  .tag-input {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
  }
  .tag {
    background: #ddd;
    border-radius: 3px;
    padding: 5px 10px;
    margin: 2px;
    display: flex;
    align-items: center;
  }
  .tag button {
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: 5px;
  }
  input {
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 3px;
    flex: 1;
  }
  </style>
  