<template>
    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div 
        v-if="visible" 
        :class="['notification', type, position]" 
        :style="notificationStyle"
        @click="handleClick"
      >
        <p>{{ message }}</p>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'NotificationComponent',
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'info', // 'success', 'error', 'info'
        validator(value) {
          return ['success', 'error', 'info'].includes(value);
        }
      },
      position: {
        type: String,
        default: 'top-right', // 'top-left', 'top-right', 'bottom-left', 'bottom-right'
        validator(value) {
          return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(value);
        }
      },
      duration: {
        type: Number,
        default: 3000 // Duration in milliseconds
      },
      backgroundColor: {
        type: String,
        default: '#17a2b8' // Default color for 'info'
      },
      textColor: {
        type: String,
        default: '#ffffff' // Default text color
      },
      fontSize: {
        type: String,
        default: '1rem' // Default font size
      },
      padding: {
        type: String,
        default: '1rem' // Default padding
      }
    },
    data() {
      return {
        visible: true
      };
    },
    computed: {
      notificationStyle() {
        return {
          '--notification-bg-color': this.backgroundColor,
          '--notification-text-color': this.textColor,
          '--notification-font-size': this.fontSize,
          '--notification-padding': this.padding
        };
      }
    },
    methods: {
      handleClick() {
        this.hideNotification();
      },
      hideNotification() {
        this.visible = false;
        setTimeout(() => {
          this.$emit('close'); // Emit an event when the notification is closed
        }, 300); // Match with fade-out duration
      },
      beforeEnter(el) {
        el.style.opacity = 0;
      },
      enter(el, done) {
        el.offsetHeight; // Trigger reflow
        el.style.transition = 'opacity 0.3s';
        el.style.opacity = 1;
        setTimeout(done, 300); // Duration should match transition time
      },
      leave(el, done) {
        el.style.transition = 'opacity 0.3s';
        el.style.opacity = 0;
        setTimeout(done, 300); // Duration should match transition time
      }
    },
    created() {
      setTimeout(() => {
        this.hideNotification();
      }, this.duration);
    }
  };
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    border-radius: 4px;
    color: var(--notification-text-color, #ffffff); /* Default text color */
    cursor: pointer;
    transition: opacity 0.3s;
    z-index: 1000;
    background-color: var(--notification-bg-color, #17a2b8); /* Default color for 'info' */
    font-size: var(--notification-font-size, 1rem); /* Default font size */
    padding: var(--notification-padding, 1rem); /* Default padding */
  }
  
  .notification.success {
    /* Custom styles for 'success' type */
  }
  
  .notification.error {
    /* Custom styles for 'error' type */
  }
  
  .notification.info {
    /* Custom styles for 'info' type */
  }
  
  .notification.top-left {
    top: 1rem;
    left: 1rem;
  }
  
  .notification.top-right {
    top: 1rem;
    right: 1rem;
  }
  
  .notification.bottom-left {
    bottom: 1rem;
    left: 1rem;
  }
  
  .notification.bottom-right {
    bottom: 1rem;
    right: 1rem;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  