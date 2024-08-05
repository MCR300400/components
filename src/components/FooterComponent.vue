<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Contact Us</h4>
          <p>{{ contactInfo }}</p>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank">
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Legal</h4>
          <p>{{ legalDisclaimer }}</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    props: {
      contactInfo: {
        type: String,
        default: 'info@example.com'
      },
      socialLinks: {
        type: Array,
        default: () => [
          { icon: 'fa fa-facebook', url: 'https://facebook.com' },
          { icon: 'fa fa-twitter', url: 'https://twitter.com' }
        ]
      },
      legalDisclaimer: {
        type: String,
        default: '© 2024 Your Company. All rights reserved.'
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f1f1f1;
    padding: 1rem;
    text-align: center;
  }
  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .footer-section {
    margin: 1rem;
  }
  .social-links a {
    margin: 0 0.5rem;
    color: #333;
  }
  </style>
  