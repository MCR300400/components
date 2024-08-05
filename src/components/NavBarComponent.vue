<template>
    <!-- Navigation bar container with dynamic background color -->
    <nav :style="{ backgroundColor: navbarColor }" class="navbar">
      <div class="navbar-container">
        <!-- Logo that acts as a button to toggle the menu -->
        <a 
          :href="isMenuActive ? '#' : logoLink" 
          class="navbar-logo"
          @click.prevent="toggleMenu"
        >
          <!-- Logo image -->
          <img :src="resolvedLogoSrc" :alt="logoAlt" class="navbar-logo-image" />
        </a>
        <!-- Navigation menu items -->
        <ul :class="{ 'navbar-menu': true, 'active': isMenuActive }">
          <!-- Render each menu item -->
          <li v-for="(item, index) in filteredMenuItems" :key="index" class="navbar-item">
            <a :href="item.link" class="navbar-link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
  
  export default {
    name: 'NavBarComponent',
    props: {
      // Source of the logo image
      logoSrc: {
        type: String,
        required: true
      },
      // Alt text for the logo image
      logoAlt: {
        type: String,
        default: 'Logo'
      },
      // Link that the logo directs to
      logoLink: {
        type: String,
        default: '#'
      },
      // Array of menu items, each with a text and link
      menuItems: {
        type: Array,
        required: true,
        validator: (items) => {
          return items.every(item => typeof item.text === 'string' && typeof item.link === 'string');
        }
      },
      // Background color of the navigation bar
      navbarColor: {
        type: String,
        default: '#333'
      }
    },
    setup(props) {
      // Vue Router's current route
      const route = useRoute();
      // Ref to track if the menu is active (shown)
      const isMenuActive = ref(false);
      // Ref to track if the view is mobile (width <= 768px)
      const isMobileView = ref(window.innerWidth <= 768);
  
      // Computed property to resolve the logo source path
      const resolvedLogoSrc = computed(() => {
        try {
          return require(`@/assets/${props.logoSrc}`);
        } catch (e) {
          console.error("Error loading image:", e);
          return ''; // Return an empty string if there's an error
        }
      });
  
      // Computed property to filter out the current route from the menu items
      const filteredMenuItems = computed(() => {
        const currentPath = route.path;
        return props.menuItems.filter(item => item.link !== currentPath);
      });
  
      // Method to toggle the menu's active state
      const toggleMenu = () => {
        isMenuActive.value = !isMenuActive.value;
      };
  
      // Method to handle window resize and update the mobile view state
      const handleResize = () => {
        isMobileView.value = window.innerWidth <= 768;
      };
  
      // Watch for route changes to close the menu if it's open
      watch(() => route.path, () => {
        if (isMenuActive.value) {
          isMenuActive.value = false;
        }
      });
  
      // Add and remove resize event listeners
      onMounted(() => {
        window.addEventListener('resize', handleResize);
      });
  
      onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
      });
  
      // Return properties and methods to be used in the template
      return {
        resolvedLogoSrc,
        filteredMenuItems,
        isMenuActive,
        toggleMenu,
        isMobileView
      };
    }
  };
  </script>
  
  <style scoped>
  /* General styles for the navbar */
  .navbar {
    color: #fff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Container for navbar items */
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  /* Logo styling and behavior */
  .navbar-logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  /* Styling for the logo image */
  .navbar-logo-image {
    max-height: 50px;
  }
  
  /* Navbar menu styling */
  .navbar-menu {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    transition: opacity 0.3s ease, max-height 0.3s ease;
    opacity: 1;
    max-height: none; /* No max-height in desktop mode */
    overflow: visible;
  }
  
  /* Active menu state styling (for mobile view) */
  .navbar-menu.active {
    display: flex;
  }
  
  /* Individual menu items styling */
  .navbar-item {
    margin-left: 1rem;
  }
  
  /* Styling for menu links */
  .navbar-link {
    color: #fff;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-size: 16px;
  }
  
  /* Hover effect for menu links */
  .navbar-link:hover {
    background-color: #555;
    color: #fff;
  }
  
  /* Media Queries for smaller devices */
  @media (max-width: 768px) {
    .navbar-container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    /* Center and stretch the logo in mobile view */
    .navbar-logo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
    }
  
    /* Hide the menu by default on smaller screens */
    .navbar-menu {
      flex-direction: column;
      width: 100%;
      display: none;
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    }
  
    /* Show the menu when it's active */
    .navbar-menu.active {
      display: flex;
      opacity: 1;
      max-height: 500px; /* Set a max-height that accommodates the menu content */
    }
  
    /* Adjust menu item margins for mobile view */
    .navbar-item {
      margin: 0.5rem 0;
    }
  }
  
  /* Media Queries for very small devices */
  @media (max-width: 480px) {
    .navbar-logo-image {
      max-height: 40px;
    }
  
    .navbar-link {
      padding: 0.5rem 1rem;
      font-size: 14px;
    }
  }
  </style>
  