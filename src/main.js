import { createApp } from 'vue'; // Import the `createApp` function from Vue
import App from './App.vue'; // Import the root component of the application
import router from './router'; // Import the router instance

// Create a new Vue application instance
createApp(App)
  .use(router) // Register the router instance with the Vue app
  .mount('#app'); // Mount the Vue app to the DOM element with the ID 'app'
