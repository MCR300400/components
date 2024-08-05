<template>
    <div class="file-uploader">
      <input
        type="file"
        ref="fileInput"
        @change="handleFiles"
        style="display: none;"
        multiple
      />
      <div
        class="drop-zone"
        @dragover.prevent
        @drop.prevent="handleDrop"
        @click="triggerFileInput"
      >
        <p>Drag & drop files here, or click to select files</p>
      </div>
      <div class="file-previews">
        <div v-for="(file, index) in files" :key="index" class="file-preview">
          <img v-if="file.type.startsWith('image/')" :src="file.preview" alt="File Preview" />
          <p>{{ file.name }}</p>
          <button @click="removeFile(index)">Remove</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const files = ref([]);
  const fileInput = ref(null);
  
  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);
    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        file.preview = e.target.result;
        files.value.push(file);
      };
      reader.readAsDataURL(file);
    });
  };
  
  const handleDrop = (event) => {
    const droppedFiles = Array.from(event.dataTransfer.files);
    droppedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        file.preview = e.target.result;
        files.value.push(file);
      };
      reader.readAsDataURL(file);
    });
  };
  
  const triggerFileInput = () => {
    fileInput.value.click();
  };
  
  const removeFile = (index) => {
    files.value.splice(index, 1);
  };
  </script>
  
  <style scoped>
  .file-uploader {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
  }
  
  .drop-zone {
    cursor: pointer;
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  .file-previews {
    margin-top: 20px;
  }
  
  .file-preview {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .file-preview img {
    max-width: 100px;
    margin-right: 10px;
  }
  
  .file-preview button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    background-color: #dc3545;
    color: white;
    cursor: pointer;
  }
  
  .file-preview button:hover {
    background-color: #c82333;
  }
  </style>
  