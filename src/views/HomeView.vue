<template>
  <div class="home-page">
    <!-- Main title of the page -->
    <h1>HOME</h1>

    <!-- Section for SearchFilterComponent -->
    <section class="search-filter-section">
      <h2>Search and Filter</h2>
      <SearchFilterComponent 
        :filterOptions="filterOptions" 
        @search="handleSearch" 
        @filters="handleFilters"
        text="Here you can search and filter the items below:" 
      />
    </section>

    <!-- Section to display filtered search results -->
    <section class="results-section" v-if="filteredItems.length">
      <h2>Results</h2>
      <ul>
        <li v-for="(item, index) in filteredItems" :key="index">{{ item.name }}</li>
      </ul>
    </section>

    <!-- Section for TableComponent -->
    <section class="data-table-section">
      <h2>Data Table</h2>
      <TableComponent 
        :headers="tableHeaders" 
        :rows="tableRows" 
      />
    </section>

    <!-- Section for SelectFileComponent -->
    <section class="file-upload-section">
      <h2>Upload a File</h2>
      <SelectFileComponent 
        @file-selected="handleFileSelected" 
        accept=".jpg,.png,.pdf"
      />
    </section>
  </div>
</template>

<script>
import SearchFilterComponent from '@/components/SearchFilterComponent.vue'; // Import SearchFilterComponent
import SelectFileComponent from '@/components/SelectFileComponent.vue'; // Import SelectFileComponent
import TableComponent from '@/components/TableComponent.vue'; // Import TableComponent

export default {
  name: 'HomePage', // Name of the component
  components: {
    SearchFilterComponent, // Register SearchFilterComponent
    TableComponent, // Register TableComponent
    SelectFileComponent // Register SelectFileComponent
  },
  data() {
    return {
      // Options for the filters in the SearchFilterComponent
      filterOptions: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ],
      // List of items to be displayed and filtered
      items: [
        { name: 'Item 1', category: 'option1' },
        { name: 'Item 2', category: 'option2' },
        { name: 'Item 3', category: 'option3' },
        { name: 'Item 4', category: 'option1' },
        { name: 'Item 5', category: 'option2' }
      ],
      searchQuery: '', // Search query entered by the user
      selectedFilters: [], // Selected filters from the SearchFilterComponent
      uploadedFile: null // File uploaded by the user
    };
  },
  computed: {
    // Computed property to filter items based on search query and selected filters
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (this.selectedFilters.length === 0 || this.selectedFilters.includes(item.category))
      );
    },
    // Computed property to define table headers
    tableHeaders() {
      return ['Name', 'Category'];
    },
    // Computed property to format table rows
    tableRows() {
      return this.items.map(item => ({
        Name: item.name,
        Category: item.category
      }));
    }
  },
  methods: {
    // Method to update searchQuery when a search event is triggered
    handleSearch(query) {
      this.searchQuery = query;
    },
    // Method to update selectedFilters when a filters event is triggered
    handleFilters(filters) {
      this.selectedFilters = filters;
    },
    // Method to handle the file selected event
    handleFileSelected(file) {
      this.uploadedFile = file;
      console.log('File selected:', file);
    }
  }
};
</script>

<style scoped>
/* General page styling */
.home-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Main title of the page */
h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

/* Styling for section headers */
h2 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

/* Section styling with improved spacing and shadow */
.search-filter-section,
.results-section,
.data-table-section,
.file-upload-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

/* List styling */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0.5rem 0;
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .search-filter-section,
  .results-section,
  .data-table-section,
  .file-upload-section {
    margin-bottom: 2rem;
    padding: 1rem;
  }
}
</style>


<style scoped>
/* General page styling */
.home-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Main title of the page */
h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

/* Styling for section headers */
h2 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

/* Section styling with improved spacing and shadow */
.search-filter-section,
.results-section,
.data-table-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

/* List styling */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0.5rem 0;
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .search-filter-section,
  .results-section,
  .data-table-section {
    margin-bottom: 2rem;
    padding: 1rem;
  }
}
</style>
