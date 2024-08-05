<template>
    <div class="search-filter-container">
      <!-- Optional text that appears if the 'text' prop is provided -->
      <div v-if="text" class="optional-text">
        {{ text }}
      </div>
    
      <!-- Search input section -->
      <div class="search-input">
        <!-- Text input field for searching -->
        <input
          type="text"
          :placeholder="placeholder"
          v-model="searchQuery"
          @input="emitSearch"
          class="search-field"
        />
        <!-- Button to clear the search query -->
        <button @click="clearSearch" class="clear-button">Clear</button>
      </div>
    
      <!-- Section for displaying filter options -->
      <div class="filters">
        <label v-for="(option, index) in filterOptions" :key="index" class="filter-item">
          <!-- Checkbox for each filter option -->
          <input
            type="checkbox"
            :value="option.value"
            v-model="selectedFilters"
            @change="emitFilters"
            class="filter-checkbox"
          />
          {{ option.label }}
        </label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchFilterComponent',
    props: {
      // Placeholder text for the search input
      placeholder: {
        type: String,
        default: 'Search...'
      },
      // Array of filter options, each with a label and value
      filterOptions: {
        type: Array,
        required: true,
        validator: (options) => {
          return options.every(
            option => typeof option.label === 'string' && typeof option.value === 'string'
          );
        }
      },
      // Initial filters selected when the component is created
      initialFilters: {
        type: Array,
        default: () => []
      },
      // Optional text to display above the search field
      text: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        // Current search query
        searchQuery: '',
        // Selected filters, initialized with the value of 'initialFilters' prop
        selectedFilters: [...this.initialFilters]
      };
    },
    methods: {
      // Emit search event with the current search query
      emitSearch() {
        this.$emit('search', this.searchQuery);
      },
      // Emit filters event with the current selected filters
      emitFilters() {
        this.$emit('filters', this.selectedFilters);
      },
      // Clear the search input and emit a search event with an empty query
      clearSearch() {
        this.searchQuery = '';
        this.emitSearch();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Container for the entire search and filter component */
  .search-filter-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%; /* Take full width of the parent container */
  }
  
  /* Style for the optional text element */
  .optional-text {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #333; /* Darker color for better readability */
  }
  
  /* Container for the search input field and the clear button */
  .search-input {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap; /* Allows elements to wrap to the next line if necessary */
  }
  
  /* Style for the search input field */
  .search-field {
    flex: 1; /* Allows the input field to grow and occupy available space */
    padding: 0.75rem 1rem;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
    margin-right: 0.5rem; /* Space between the input field and the clear button */
  }
  
  /* Style for the search input field when it is focused */
  .search-field:focus {
    border-color: #007bff; /* Change border color on focus */
  }
  
  /* Style for the clear button */
  .clear-button {
    padding: 0.75rem 1rem;
    border: none;
    background-color: #dc3545;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 0.875rem; /* Slightly smaller font size for better fit */
    flex-shrink: 0; /* Prevents the button from shrinking */
  }
  
  /* Style for the clear button on hover */
  .clear-button:hover {
    background-color: #c82333;
  }
  
  /* Container for the filter options */
  .filters {
    display: flex;
    flex-direction: column;
  }
  
  /* Style for each filter option item */
  .filter-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.875rem; /* Slightly smaller font size for filter options */
  }
  
  /* Style for filter checkboxes */
  .filter-checkbox {
    margin-right: 0.5rem;
  }
  
  /* Responsive design for screens smaller than 768px */
  @media (max-width: 768px) {
    .search-input {
      flex-direction: column; /* Stack the input field and button vertically */
      align-items: stretch; /* Stretch elements to fit the container width */
    }
    
    .search-field {
      margin-bottom: 0.5rem; /* Add space below the search field */
      width: 80%; /* Adjust width to be 80% of the container */
    }
    
    .clear-button {
      width: 100%; /* Make the button full-width */
      margin-left: 0; /* Remove left margin */
      margin-top: 0.5rem; /* Add space above the button */
    }
  }
  
  /* Responsive design for screens smaller than 480px */
  @media (max-width: 480px) {
    .search-filter-container {
      padding: 0.5rem; /* Reduce padding for smaller screens */
    }
  
    .search-input {
      flex-direction: column; /* Maintain vertical stacking on very small screens */
    }
  
    .search-field {
      margin-bottom: 0.5rem; /* Space below the search field */
    }
    
    .clear-button {
      padding: 0.5rem;
      font-size: 0.75rem; /* Smaller font size for very small screens */
    }
  }
  </style>
  