<template>
  <div class="home-page">
    <!-- Sidebar Index Section -->
    <nav class="index-sidebar">
      <h2>Index</h2>
      <ul>
        <li><a href="#dragon-load">Dragon Loader</a></li>
        <li><a href="#loader">Loader</a></li>
        <li><a href="#breadcrumbs">BreadCrumbs</a></li>
        <li><a href="#accordion">Accordion</a></li>
        <li><a href="#treeview">TreeView</a></li>
        <li><a href="#timer">Timer</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#file-upload">File Uploader</a></li>
        <li><a href="#rating">Rating</a></li>
        <li><a href="#progress-bar">Progress Bar</a></li>
        <li><a href="#tooltip">Tooltip</a></li>
        <li><a href="#carousel">Carousel</a></li>
        <li><a href="#badges">Badges</a></li>
        <li><a href="#notifications">Notifications</a></li>
        <li><a href="#search-filter">Search and Filter</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#data-table">Data Table</a></li>
        <li><a href="#pagination">Pagination</a></li>
        <li><a href="#footer">Footer</a></li>
        <li><a href="#modal-dialog">Modal Dialog</a></li>
        <li><a href="#form-group">Form Group</a></li>
        <li><a href="#list">List</a></li>
        <li><a href="#map">Map</a></li>
        <li><a href="#stepper">Stepper</a></li>
        <li><a href="#text-editor">Text Editor</a></li>
        <li><a href="#video-player">Video Player</a></li>
        <li><a href="#drawer">Drawer</a></li>
        <li><a href="#countdown">Countdown</a></li>
        <li><a href="#tag-input">Tag Input</a></li>
        <li><a href="#color-picker">Color Picker</a></li>
        <li><a href="#date-picker">Date Picker</a></li>
      </ul>
    </nav>

    <!-- Main Content Area -->
    <div class="content">
      <!-- Main title of the page -->
      <h1>HOME</h1>

      <!-- Dragon Load Section -->
      <section id="dragon-load">
        <h2>Dragon Load</h2>
        <DragonLoadComponent />
      </section>

      <!-- Loader Component -->
      <section id="loader">
        <h2>Loader</h2>
        <LoaderComponent :visible="isLoading" size="3rem" color="#057b2f" />
        <LoaderComponent :visible="isLoading" size="6rem" color="#007bff" />
        <LoaderComponent :visible="isLoading" size="3rem" color="#d666de" />
      </section>

      <!-- Breadcrumbs Component -->
      <section id="breadcrumbs">
        <h2>BreadCrumbs</h2>
        <BreadcrumbsComponent :crumbs="breadcrumbs" />
      </section>

      <!-- Accordion Component -->
      <section id="accordion">
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
      <section id="treeview">
        <h2>TreeView</h2>
        <TreeViewComponent />
      </section>

      <!-- Timer Component -->
      <section id="timer">
        <h2>Timer</h2>
        <TimerComponent />
      </section>

      <!-- Menu Component -->
      <section id="menu">
        <h2>Menu</h2>
        <h1>Right-click anywhere on this page to see the context menu</h1>
        <MenuComponent />
      </section>

      <!-- File Uploader Component -->
      <section id="file-upload">
        <h2>File Uploader Example</h2>
        <FileUpdaterComponent />
      </section>

      <!-- Rating Component -->
      <section id="rating">
        <h2>Rate this product:</h2>
        <RatingComponent :initialRating="rating" @update:rating="handleRatingUpdate" />
        <p>Your rating: {{ rating }}</p>
      </section>

      <!-- ProgressBar Component -->
      <section id="progress-bar">
        <h2>Progress Bar</h2>
        <ProgressBarComponent :progress="30" color="#007bff" label="30% Completed" />
        <ProgressBarComponent :progress="50" color="#28a745" label="Halfway" height="1.5rem" />
        <ProgressBarComponent :progress="75" color="#dc3545" label="Almost There" />
        <ProgressBarComponent :progress="100" color="#ffc107" label="Completed" />
      </section>

      <!-- Tooltip Component -->
      <section id="tooltip">
        <h2>Tooltip Example</h2>
        <ToolTipComponent content="This is a tooltip!" position="top" offset="10">
          <button>Hover over me</button>
        </ToolTipComponent>
      </section>

      <!-- Carousel Component -->
      <section id="carousel">
        <h2>Carousel</h2>
        <CarouselComponent :images="carouselImages" :interval="5000" />
      </section>

      <!-- Badge Component -->
      <section id="badges">
        <h2>Badges</h2>
        <BadgeComponent text="Primary Badge" color="#007bff" />
        <BadgeComponent text="Success Badge" color="#28a745" />
        <BadgeComponent text="Error Badge" color="#dc3545" />
        <BadgeComponent text="Custom Badge" color="#17a2b8" textColor="#000" size="1.5rem" />
      </section>

      <!-- Notification Component -->
      <section id="notifications">
        <NotificationComponent v-if="notification.visible" :message="notification.message" :type="notification.type"
          :position="notification.position" :duration="notification.duration"
          :backgroundColor="notification.backgroundColor" :textColor="notification.textColor"
          :fontSize="notification.fontSize" :padding="notification.padding" @close="handleNotificationClose" />
      </section>

      <!-- SearchFilter Component -->
      <section id="search-filter">
        <h2>Search and Filter</h2>
        <SearchFilterComponent :filterOptions="filterOptions" @search="handleSearch" @filters="handleFilters"
          text="Here you can search and filter the items below:" />
      </section>

      <!-- Filtered Search Results -->
      <section id="results" v-if="filteredItems.length">
        <h2>Results</h2>
        <ul>
          <li v-for="(item, index) in paginatedItems" :key="index">{{ item.name }}</li>
        </ul>
      </section>

      <!-- Data Table Component -->
      <section id="data-table">
        <h2>Data Table</h2>
        <TableComponent :headers="tableHeaders" :rows="tableRows" />
      </section>

      <!-- File Upload Component -->
      <section id="file-upload">
        <h2>Upload a File</h2>
        <SelectFileComponent @file-selected="handleFileSelected" accept=".jpg,.png,.pdf" />
      </section>

      <!-- Pagination Component -->
      <section id="pagination">
        <h2>Pagination</h2>
        <PaginationComponent :currentPage="currentPage" :totalPages="totalPages"
          @update:currentPage="handlePageChange" />
      </section>

      <!-- Footer Section -->
      <section id="footer">
        <h2>Footer</h2>
        <FooterComponent :contactInfo="'info@example.com'" :socialLinks="[
          { icon: 'fa fa-facebook', url: 'https://facebook.com' },
          { icon: 'fa fa-twitter', url: 'https://twitter.com' }
        ]" :legalDisclaimer="'© 2024 Your Company. All rights reserved.'" />
      </section>

      <!-- Modal Dialog Section -->
      <section id="modal-dialog">
        <h2>ModalDialog</h2>
        <button @click="showModal = true">Open Modal</button>
        <ModalDialogComponent v-model:modelValue="showModal" title="Sample Modal" @confirm="handleConfirm">
          <p>This is the content of the modal.</p>
        </ModalDialogComponent>
      </section>


      <!-- Modal Dialog Section -->
      <section id="form-group">
        <h2>Form Group</h2>
        <FormGroupComponent @submit="handleFormSubmit" />
      </section>


      <!-- List Component -->
      <section id="list">
        <h2>List</h2>
        <ListComponent :items="itemsList" @item-selected="handleItemSelected" />
        <div v-if="selectedItem">
          <h2>Selected Item</h2>
          <p>ID: {{ selectedItem.id }}</p>
          <p>Name: {{ selectedItem.name }}</p>
        </div>
      </section>


      <!-- Map Component-->
      <section id="map">
        <h2>Map</h2>
        <MapComponent :center="mapCenter" :markers="mapMarkers" />
      </section>

      <!-- Side Panel Component-->
      <section id="side-pannel">
        <h2>Side Panel</h2>
        <p>Look Right =></p>
        <SidePanelComponent v-model:open="isPanelOpen">
          <h1>Side Panel Content</h1>
          <p>This is some content inside the side panel.</p>
        </SidePanelComponent>
      </section>

      <!-- Stepper Component-->
      <section id="stepper">
        <h2>Stepper</h2>

        <StepperComponent :steps="steps">
          <template v-slot:step-0>
            <p>Contenuto per il primo passaggio.</p>
          </template>
          <template v-slot:step-1>
            <p>Contenuto per il secondo passaggio.</p>
          </template>
          <template v-slot:step-2>
            <p>Contenuto per il terzo passaggio.</p>
          </template>
        </StepperComponent>
      </section>



      <!-- Text Editor Component-->
      <section id="text-editor">
        <h2>Text Editor</h2>
        <TextEditorComponent v-model="editorContent" />
      </section>

      <!-- Video Player Component-->
      <section id="video-player">
        <h2>Video Player</h2>
        <VideoPlayerComponent src="path/to/your/video.mp4" />
      </section>



      <!-- Drawer Component-->
      <section id="drawer">
        <h2>Drawer</h2>
        <DrawerComponent>
          <p>Contenuto del drawer</p>
        </DrawerComponent>
      </section>

      <!-- Countdown Component-->
      <section id="countdown">
        <h2>Countdown</h2>
        <CountdownTimeComponent :initialTime="5" />
      </section>


      <!-- Tag Input Component-->
      <section id="tag-input">
        <h2>Tag Input</h2>
        <TagInputComponent />
      </section>

      <!-- Color Picker Component-->
      <section id="color-picker">
        <h2>Color Picker</h2>
        <ColorPickerComponent v-model="selectedColor" />
      </section>

      <!-- Date Picker Component-->
      <section id="date-picker">
        <h2>Date Picker</h2>
        <DatePickerComponent v-model="selectedDate" />
      </section>
      
      <!-- Range Slider Component-->
      <section id="range-slider">
        <h2>Range Slider</h2>
        <RangeSliderComponent
      :min="0"
      :max="100"
      v-model:minValue="minValue"
      v-model:maxValue="maxValue"
    />
      </section>
    </div>
  </div>
</template>




<script>
import AccordionComponent from '@/components/AccordionComponent.vue';
import BadgeComponent from '@/components/BadgeComponent.vue';
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import ColorPickerComponent from '@/components/ColorPickerComponent.vue';
import CountdownTimeComponent from '@/components/CountdownTimeComponent.vue';
import DatePickerComponent from '@/components/DatePickerComponent.vue';
import DragonLoadComponent from '@/components/DragonLoadComponent.vue';
import DrawerComponent from '@/components/DrawerComponent.vue';
import FileUpdaterComponent from '@/components/FileUpdaterComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FormGroupComponent from '@/components/FormGroupComponent.vue';
import ListComponent from '@/components/ListComponent.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import MapComponent from '@/components/MapComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ModalDialogComponent from '@/components/ModalDialogComponent.vue';
import NotificationComponent from '@/components/NotificationComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import ProgressBarComponent from '@/components/ProgressBarComponent.vue';
import RangeSliderComponent from '@/components/RangeSliderComponent.vue';
import RatingComponent from '@/components/RatingComponent.vue';
import SearchFilterComponent from '@/components/SearchFilterComponent.vue';
import SelectFileComponent from '@/components/SelectFileComponent.vue';
import SidePanelComponent from '@/components/SidePanelComponent.vue';
import StepperComponent from '@/components/StepperComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import TagInputComponent from '@/components/TagInputComponent.vue';
import TextEditorComponent from '@/components/TextEditorComponent.vue';
import TimerComponent from '@/components/TimerComponent.vue';
import ToolTipComponent from '@/components/ToolTipComponent.vue';
import TreeViewComponent from '@/components/tree/TreeViewComponent.vue';
import VideoPlayerComponent from '@/components/VideoPlayerComponent.vue';


export default {
  name: 'HomePage',
  components: {
    RangeSliderComponent,
    DatePickerComponent,
    ColorPickerComponent,
    TagInputComponent,
    CountdownTimeComponent,
    DrawerComponent,
    VideoPlayerComponent,
    TextEditorComponent,
    StepperComponent,
    SidePanelComponent,
    MapComponent,
    ListComponent,
    FormGroupComponent,
    ModalDialogComponent,
    DragonLoadComponent,
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
      minValue: 20,
      maxValue: 80,
      editorContent: '',
      selectedColor: '#000000',
      selectedDate: '',
      steps: [
        { title: 'Passaggio 1' },
        { title: 'Passaggio 2' },
        { title: 'Passaggio 3' }
      ],
      isLoading: false,
      rating: 0,
      isPanelOpen: false,
      showModal: false,
      mapCenter: { lat: 41.9028, lng: 12.4964 },
      mapMarkers: [
        { position: { lat: 41.9022, lng: 12.4764 }, title: 'Marker 1' },
        { position: { lat: 41.9025, lng: 12.4864 }, title: 'Marker 2' },
        { position: { lat: 41.9020, lng: 12.4964 }, title: 'Marker 3' }
      ],
      carouselImages: [
        'https://via.placeholder.com/800x400?text=Slide+1',
        'https://via.placeholder.com/800x400?text=Slide+2',
        'https://via.placeholder.com/800x400?text=Slide+3'
      ],
      itemsList: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' }
      ],
      selectedItem: null,
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
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' }
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
  handleConfirm() {
    // Handle the confirmation action here
    console.log('Confirmed!');
  },
  methods: {
    handleItemSelected(item) {
      this.selectedItem = item;
    },
    handleFormSubmit(formData) {
      // Handle the form data, e.g., send it to an API
      console.log('Form submitted with data:', formData);
      // Example: this.$http.post('/api/submit', formData);
    },
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
  },
  toggleSidePanel() {
    this.isPanelOpen = !this.isPanelOpen;
    console.log(this.isPanelOpen)
    console.log("ciao")
  }
};

</script>

<style scoped>
/* General container for the page */
.home-page {
  display: flex;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  /* Adjust this value to match your navbar height */
}

/* Sidebar styling */
.index-sidebar {
  position: fixed;
  top: 60px;
  /* Adjust this value to match your navbar height */
  left: 0;
  width: 250px;
  height: calc(100% - 60px);
  /* Adjust this value to match your navbar height */
  background-color: #f4f4f4;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

/* Content styling */
.content {
  margin-left: 270px;
  /* Width of the sidebar + some margin */
  padding: 1rem;
  flex: 1;
}

/* Headings styling */
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

/* Sections styling */
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

/* Notification trigger button styling */
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

/* Badge section styling */
.badge-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Responsive styling */
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

  .index-sidebar {
    width: 100%;
    height: auto;
    top: 0;
    bottom: 0;
  }

  .content {
    margin-left: 0;
    padding: 1rem;
  }
}
</style>
