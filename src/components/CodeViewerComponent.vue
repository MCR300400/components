<template>
    <div class="code-viewer">
      <!-- Controls for selecting the view -->
      <div class="controls">
        <button @click="currentView = 'code'">View Code</button>
        <button @click="currentView = 'implementation'">View Implementation</button>
        <button @click="currentView = 'both'">View Both</button>
      </div>
  
      <!-- Conditional rendering based on the selected view -->
      <div class="content">
        <div v-if="currentView === 'code' || currentView === 'both'" class="code-section">
          <h2>Code</h2>
          <pre><code>{{ codeSnippet }}</code></pre>
        </div>
        
        <div v-if="currentView === 'implementation' || currentView === 'both'" class="implementation-section">
          <h2>Implementation</h2>
          <pre><code>{{ implementationSnippet }}</code></pre>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CodeViewer',
    props: {
      codeSnippet: {
        type: String,
        required: true
      },
      implementationSnippet: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        currentView: 'code' // Default view
      };
    }
  };
  </script>
  
  <style scoped>
  .code-viewer {
    font-family: Arial, sans-serif;
    margin: 2rem;
  }
  
  .controls {
    margin-bottom: 1rem;
  }
  
  .controls button {
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f4f4f4;
    cursor: pointer;
  }
  
  .controls button:hover {
    background-color: #e0e0e0;
  }
  
  .content {
    margin-top: 1rem;
  }
  
  .code-section, .implementation-section {
    margin-bottom: 2rem;
  }
  
  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    white-space: pre-wrap;
  }
  
  code {
    display: block;
    font-size: 0.875rem;
    color: #333;
  }
  </style>
  