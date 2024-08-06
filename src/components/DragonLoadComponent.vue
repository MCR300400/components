<template>
  <div class="loading-container">
    <div class="dragon">
      <!-- Dragon Image -->
      <img src="@/assets/dragon.png" alt="Dragon" />
    </div>
    <div class="loading-bar">
      <div class="fire" :style="{ width: `${progress}%` }"></div>
      <div class="flame-overlay">
        <img :style="{ left: `calc(${progress}% - 7.5px)` }" src="@/assets/flame.png" alt="Flame" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'DragonLoadComponent',
  data() {
    return {
      progress: 0 // This value can be updated to reflect loading progress
    }
  },
  created() {
    // Simulate loading progress for demonstration
    this.simulateLoading();
  },
  methods: {
    simulateLoading() {
      let interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 2; // Increase progress
        } else {
          clearInterval(interval);
        }
      }, 100); // Update every 100ms
    }
  }
}
</script>


<style scoped>
/* Container for the loading animation */
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  padding: 20px;
}

/* Dragon image styling */
.dragon {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  margin-top: -40px; /* Move the dragon image 5px higher */
}

.dragon img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures the image fits within its container */
}

/* Loading bar styling */
.loading-bar {
  position: relative;
  width: 400px;
  height: 15px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Fire element */
.fire {
  height: 100%;
  background-color: #FF5722;
  transition: width 0.5s ease;
  border-radius: 10px 0 0 10px;
}

/* Flame overlay styling */
.flame-overlay {
  position: absolute;
  top: 0;
  left: -20px;
  height: 100%;
  width: 100%; /* Occupies the entire loading bar */
  z-index: 2;
  overflow: hidden;
  pointer-events: none; /* Ensure the overlay doesn't interfere with interactions */
}

.flame-overlay img {
  position: absolute;
  top: 50%;
  height: 100%;
  object-fit: cover; /* Adatta l'immagine all'interno del contenitore */
  transform: translateY(-50%);
  transition: left 0.1s ease; /* Smooth movement of the flame */
}
</style>
