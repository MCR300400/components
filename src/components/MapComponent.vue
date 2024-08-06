<template>
    <div class="map-component" ref="mapContainer"></div>
  </template>
  
  <script>
  import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
  
  export default {
    name: 'MapComponent',
    props: {
      center: {
        type: Object,
        required: true
      },
      markers: {
        type: Array,
        required: false,
        default: () => []
      }
    },
    mounted() {
      this.initializeMap();
    },
    methods: {
      initializeMap() {
        const map = L.map(this.$refs.mapContainer).setView([this.center.lat, this.center.lng], 8);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
  
        this.markers.forEach(marker => {
          L.marker([marker.position.lat, marker.position.lng])
            .addTo(map)
            .bindPopup(marker.title);
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .map-component {
    width: 100%;
    height: 400px;
  }
  </style>
  