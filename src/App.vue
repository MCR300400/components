<template>
  <NavBarComponent
        :logoSrc="'logo.png'"
        :logoAlt="'My Logo'"
        :logoLink="'/'"
        :menuItems="menuItems"
        :navbarColor="'#800020'"
      />
  <router-view></router-view>

</template>

<script>

import NavBarComponent from './components/NavBarComponent.vue';


export default {
  name: 'App',
  components: {
      NavBarComponent
    },
  data() {
      return {
        menuItems: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Services', link: '/services' },
          { text: 'Contact', link: '/contact' }
        ]
      };
    }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
