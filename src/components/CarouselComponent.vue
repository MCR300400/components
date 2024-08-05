<template>
  <div class="carousel">
    <button class="carousel-control prev" @click="prevSlide">‹</button>
    <div class="carousel-slides" :style="carouselStyle">
      <div
        class="carousel-slide"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image" alt="Slide Image" />
      </div>
    </div>
    <button class="carousel-control next" @click="nextSlide">›</button>
  </div>
</template>

<script setup>
import { computed, defineProps, onMounted, onUnmounted, ref, watch } from 'vue';

// Define props using defineProps
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 5000
  }
});

// Reactive state for current slide index
const currentIndex = ref(0);

// Computed style for carousel slides
const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
  transition: 'transform 0.5s ease'
}));

// Methods to change slides
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

// Interval setup for automatic slide change
let intervalId;

onMounted(() => {
  intervalId = setInterval(nextSlide, props.interval);
});

// Watch for changes in the images array to reset interval if necessary
watch(() => props.images.length, (newLength) => {
  if (newLength > 0) {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, props.interval);
  } else {
    clearInterval(intervalId);
  }
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto; /* Flexible height based on images */
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
}

.carousel-slide img {
  width: 100%;
  display: block;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 1;
}

.carousel-control.prev {
  left: 0;
}

.carousel-control.next {
  right: 0;
}
</style>
