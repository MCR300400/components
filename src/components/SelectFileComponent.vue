<template>
    <!-- Prevent default dragover behavior -->
    <!-- Prevent default drop behavior -->
    <div
      class="select-file-component"
      @dragover.prevent="handleDragOver"
      @drop.prevent="handleDrop"
    >
      <label for="file-upload" class="file-upload-label">
        <!-- Display selected file name or prompt to select a file -->
        <span v-if="selectedFile">{{ selectedFile.name }}</span>
        <span v-else>Select a file</span>
        <!-- Handle file selection -->
        <!-- Restrict accepted file types -->
        <input type="file" id="file-upload" @change="handleFileChange" class="file-upload-input" :accept="accept" />
      </label>
  
      <!-- Descriptive text about file requirements -->
      <p class="file-description-text">
        Please upload a file of type: {{ formattedAccept }} <!-- Display formatted accepted types -->
      </p>
  
      <!-- Button to clear the selected file, shown only if a file is selected -->
      <!-- Confirm before clearing -->
      <button v-if="selectedFile" class="clear-file-button" @click="confirmClearFile">
        Clear File
      </button>
  
      <!-- Overlay shown during drag and drop -->
      <div v-if="dragging" class="drag-overlay">
        <span>Drop file here</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SelectFileComponent',
    props: {
      accept: {
        type: String,
        default: '*/*' // Accept all file types by default
      }
    },
    data() {
      return {
        selectedFile: null, // Currently selected file
        dragging: false // Flag for drag and drop status
      };
    },
    computed: {
      formattedAccept() {
        // Convert the 'accept' prop to a more user-friendly format
        return this.accept
          .split(',')
          .map(type => type.replace(/^\./, '').toUpperCase()) // Format file types
          .join(', ');
      }
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
          this.selectedFile = file; // Update selected file
          this.$emit('file-selected', file); // Emit file-selected event
        } else {
          this.selectedFile = null; // Clear file if none selected
        }
      },
      handleDragOver() {
        this.dragging = true; // Set dragging state
      },
      handleDrop(event) {
        this.dragging = false; // Reset dragging state
        const file = event.dataTransfer.files[0]; // Get the dropped file
        if (file) {
          this.selectedFile = file; // Update selected file
          this.$emit('file-selected', file); // Emit file-selected event
        }
      },
      confirmClearFile() {
        if (confirm('Are you sure you want to clear the selected file?')) {
          this.clearFile(); // Clear file if confirmed
        }
      },
      clearFile() {
        this.selectedFile = null; // Reset selected file
        this.$emit('file-cleared'); // Emit file-cleared event
      }
    },
    watch: {
      dragging(value) {
        if (!value) {
          setTimeout(() => this.dragging = false, 100); // Ensure overlay hides after drop
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Container for the file selection component */
  .select-file-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
  }
  
  /* Label for file upload */
  .file-upload-label {
    display: inline-block;
    padding: 1rem;
    background-color: #3498db;
    color: white;
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    max-width: 400px; /* Set a max-width for better control on larger screens */
  }
  
  /* Hide the actual file input */
  .file-upload-input {
    display: none;
  }
  
  /* Style for file upload label text */
  .file-upload-label span {
    display: block;
  }
  
  /* Text describing file requirements */
  .file-description-text {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #666;
    text-align: center;
    max-width: 400px; /* Align with the label */
  }
  
  /* Button to clear the selected file */
  .clear-file-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
  
  /* Hover state for clear file button */
  .clear-file-button:hover {
    background-color: #c0392b;
  }
  
  /* Overlay displayed during drag and drop */
  .drag-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #fff;
    border-radius: 4px;
    z-index: 10;
    pointer-events: none;
    transition: opacity 0.3s;
  }
  
  /* Responsive adjustments */
  @media (max-width: 600px) {
    .file-upload-label,
    .file-description-text {
      font-size: 0.9rem;
      padding: 0.75rem;
    }
  
    .clear-file-button {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
    }
  }
  </style>
  