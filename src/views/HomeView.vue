<template>
  <div class="home-page">
    <!-- Main title of the page -->
    <h1>HOME</h1>

    <!-- Loader Component -->
    <section>
      <h2>Loader</h2>
      <LoaderComponent :visible="isLoading" size="3rem" color="#057b2f" />
      <LoaderComponent :visible="isLoading" size="6rem" color="#007bff" />
      <LoaderComponent :visible="isLoading" size="3rem" color="#d666de" />
    </section>

    <section>
      <h2>BreadCrumbs</h2>
      <BreadcrumbsComponent :crumbs="breadcrumbs" />
    </section>


    <!-- Accondion Component -->
    <section>
      <h2>Accordion</h2>
      <AccordionComponent :items="accordionItems">
        <template v-slot:item-0>
          <p>Custom content for the first item.</p>
        </template>
        <template v-slot:item-1>
          <p>Custom content for the second item.</p>
        </template>
        <template v-slot:item-2>
          <p>Custom content for the third item.</p>
        </template>
      </AccordionComponent>
    </section>

    <!-- TreeView Component -->
    <section>
      <h2>TreeView</h2>
      <TreeViewComponent />
    </section>

    <!-- Timer Component -->
    <section>
      <h2>Timer</h2>
      <TimerComponent />
    </section>

    <!-- Menu Component -->
    <section>
      <h2>Menu</h2>
      <h1>Right-click anywhere on this page to see the context menu</h1>
      <MenuComponent />
    </section>

    <!-- FileUpdater Component -->
    <section>
      <div>
        <h2>File Uploader Example</h2>
        <FileUpdaterComponent />
      </div>
    </section>

    <!-- Tooltip Component -->
    <section>
      <div>
        <h1>Rate this product:</h1>
        <RatingComponent :initialRating="rating" @update:rating="handleRatingUpdate" />
        <p>Your rating: {{ rating }}</p>
      </div>
    </section>

    <!-- ProgressBarComponent Component -->
    <section>
      <h2>Progress Bar</h2>
      <ProgressBarComponent :progress="30" color="#007bff" label="30% Completed" />
      <ProgressBarComponent :progress="50" color="#28a745" label="Halfway" height="1.5rem" />
      <ProgressBarComponent :progress="75" color="#dc3545" label="Almost There" />
      <ProgressBarComponent :progress="100" color="#ffc107" label="Completed" />
    </section>

    <!-- Tooltip Component -->
    <section>
      <h2>Tooltip Example</h2>
      <ToolTipComponent content="This is a tooltip!" position="top" offset="10">
        <button>Hover over me</button>
      </ToolTipComponent>
    </section>

    <!-- Carousel Component -->
    <section>
      <h2>Carousel</h2>
      <CarouselComponent :images="carouselImages" :interval="5000" />
    </section>

    <!-- Badge Component Example -->
    <section class="badge-section">
      <h2>Badges</h2>
      <BadgeComponent text="Primary Badge" color="#007bff" />
      <BadgeComponent text="Success Badge" color="#28a745" />
      <BadgeComponent text="Error Badge" color="#dc3545" />
      <BadgeComponent text="Custom Badge" color="#17a2b8" textColor="#000" size="1.5rem" />
    </section>

    <!-- Notification Component -->
    <NotificationComponent v-if="notification.visible" :message="notification.message" :type="notification.type"
      :position="notification.position" :duration="notification.duration"
      :backgroundColor="notification.backgroundColor" :textColor="notification.textColor"
      :fontSize="notification.fontSize" :padding="notification.padding" @close="handleNotificationClose" />

    <!-- Section for Triggering Notifications -->
    <section class="notification-trigger-section">
      <h2>Trigger Notification</h2>
      <button @click="triggerNotification">Show Notification</button>
      <button @click="triggerSuccessNotification">Show Success Notification</button>
      <button @click="triggerErrorNotification">Show Error Notification</button>
      <button @click="triggerCustomNotification">Show Custom Notification</button>
    </section>

    <!-- Section for SearchFilterComponent -->
    <section class="search-filter-section">
      <h2>Search and Filter</h2>
      <SearchFilterComponent :filterOptions="filterOptions" @search="handleSearch" @filters="handleFilters"
        text="Here you can search and filter the items below:" />
    </section>

    <!-- Section to display filtered search results -->
    <section class="results-section" v-if="filteredItems.length">
      <h2>Results</h2>
      <ul>
        <li v-for="(item, index) in paginatedItems" :key="index">{{ item.name }}</li>
      </ul>
    </section>

    <!-- Section for TableComponent -->
    <section class="data-table-section">
      <h2>Data Table</h2>
      <TableComponent :headers="tableHeaders" :rows="tableRows" />
    </section>

    <!-- Section for SelectFileComponent -->
    <section class="file-upload-section">
      <h2>Upload a File</h2>
      <SelectFileComponent @file-selected="handleFileSelected" accept=".jpg,.png,.pdf" />
    </section>

    <!-- Pagination Section -->
    <section class="pagination-section">
      <h2>Pagination</h2>
      <PaginationComponent :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="handlePageChange" />
    </section>

    <!-- Footer Section -->
    <section>
      <h2>Footer</h2>
      <FooterComponent :contactInfo="'info@example.com'" :socialLinks="[
        { icon: 'fa fa-facebook', url: 'https://facebook.com' },
        { icon: 'fa fa-twitter', url: 'https://twitter.com' }
      ]" :legalDisclaimer="'© 2024 Your Company. All rights reserved.'" />
    </section>
  </div>
</template>


<script>
import AccordionComponent from '@/components/AccordionComponent.vue';
import BadgeComponent from '@/components/BadgeComponent.vue';
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import FileUpdaterComponent from '@/components/FileUpdaterComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import NotificationComponent from '@/components/NotificationComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import RatingComponent from '@/components/RatingComponent.vue';
import SearchFilterComponent from '@/components/SearchFilterComponent.vue';
import SelectFileComponent from '@/components/SelectFileComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import TimerComponent from '@/components/TimerComponent.vue';
import ToolTipComponent from '@/components/ToolTipComponent.vue';
import TreeViewComponent from '@/components/tree/TreeViewComponent.vue';
export default {
  name: 'HomePage',
  components: {
    BreadcrumbsComponent,
    TreeViewComponent,
    TimerComponent,
    FileUpdaterComponent,
    MenuComponent,
    CarouselComponent,
    SearchFilterComponent,
    TableComponent,
    SelectFileComponent,
    NotificationComponent,
    FooterComponent,
    BadgeComponent,
    LoaderComponent,
    ProgressBarComponent,
    RatingComponent,
    ToolTipComponent,
    PaginationComponent,
    AccordionComponent
  },
  data() {
    return {
      isLoading: false,
      rating: 0,
      carouselImages: [
        'https://via.placeholder.com/800x400?text=Slide+1',
        'https://via.placeholder.com/800x400?text=Slide+2',
        'https://via.placeholder.com/800x400?text=Slide+3'
      ],
      filterOptions: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ],
      accordionItems: [
        { title: 'Item 1', content: 'This is the content of the first item.' },
        { title: 'Item 2', content: 'This is the content of the second item.' },
        { title: 'Item 3', content: 'This is the content of the third item.' }
      ],
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'Electronics', path: '/products/electronics' }
      ],
      items: [
        { id: '1', name: 'Item 1', category: 'option1' },
        { id: '2', name: 'Item 2', category: 'option2' },
        { id: '3', name: 'Item 3', category: 'option3' },
        { id: '4', name: 'Item 4', category: 'option1' },
        { id: '5', name: 'Item 5', category: 'option2' }
      ],
      searchQuery: '',
      selectedFilters: [],
      uploadedFile: null,
      currentPage: 1,
      itemsPerPage: 3, // Number of items per page
      notification: {
        visible: false,
        message: '',
        type: 'info',
        position: 'top-right',
        duration: 3000,
        backgroundColor: '#17a2b8',
        textColor: '#ffffff',
        fontSize: '1rem',
        padding: '1rem'
      }
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (this.selectedFilters.length === 0 || this.selectedFilters.includes(item.category))
      );
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    },
    tableHeaders() {
      return ['Name', 'Category'];
    },
    tableRows() {
      return this.items.map(item => ({
        Name: item.name,
        Category: item.category
      }));
    }
  },
  methods: {
    handleRatingUpdate(newRating) {
      this.rating = newRating;
    },
    handleSearch(query) {
      this.searchQuery = query;
      this.currentPage = 1; // Reset to the first page when searching
    },
    handleFilters(filters) {
      this.selectedFilters = filters;
      this.currentPage = 1; // Reset to the first page when filtering
    },
    handleFileSelected(file) {
      this.uploadedFile = file;
      console.log('File selected:', file);
      this.notification = {
        visible: true,
        message: `File selected: ${file.name}`,
        type: 'success',
        position: 'top-right',
        duration: 3000
      };
    },
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
    triggerNotification() {
      this.notification = {
        visible: true,
        message: 'This is a triggered notification!',
        type: 'info',
        position: 'top-right',
        duration: 3000
      };
    },
    triggerSuccessNotification() {
      this.notification = {
        visible: true,
        message: 'This is a success notification!',
        type: 'success',
        position: 'top-right',
        duration: 3000,
        backgroundColor: '#28a745'
      };
    },
    triggerErrorNotification() {
      this.notification = {
        visible: true,
        message: 'This is an error notification!',
        type: 'error',
        position: 'top-right',
        duration: 3000,
        backgroundColor: '#dc3545'
      };
    },
    triggerCustomNotification() {
      this.notification = {
        visible: true,
        message: 'This is a custom notification!',
        type: 'info',
        position: 'bottom-left',
        duration: 5000,
        backgroundColor: '#007bff',
        textColor: '#ffffff',
        fontSize: '1.2rem',
        padding: '1.5rem'
      };
    },
    handleNotificationClose() {
      this.notification.visible = false;
    },
    loadData() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  },
  created() {
    this.loadData();
  }
};

</script>

<style scoped>
.home-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.search-filter-section,
.results-section,
.data-table-section,
.file-upload-section,
.notification-trigger-section,
.badge-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

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

.notification-trigger-section button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;
}

.notification-trigger-section button:hover {
  background-color: #2980b9;
}

.badge-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

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
  .file-upload-section,
  .notification-trigger-section,
  .badge-section {
    margin-bottom: 2rem;
    padding: 1rem;
  }
}
</style>
