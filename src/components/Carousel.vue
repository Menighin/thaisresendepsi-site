<template>
  <div class="carousel">
    <div class="carousel-inner" :style="carouselStyle">
      <slot></slot>
    </div>
    <button class="carousel-button left" @click="handlePrevSlide">&#10094;</button>
    <button class="carousel-button right" @click="handleNextSlide">&#10095;</button>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'Carousel',
  setup() {
    const currentIndex = ref(0);
    const totalSlides = ref(0);
    const interval = 3000; // time between slides in ms
    const slideInterval = ref(null);

    const carouselStyle = computed(() => ({
      width: `${totalSlides.value * 100}%`,
      transform: `translateX(-${(currentIndex.value / totalSlides.value) * 100}%)`,
      transition: 'transform 0.5s ease'
    }));

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
    };

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + totalSlides.value) % totalSlides.value;
    };

    const startSlideInterval = () => {
      clearInterval(slideInterval.value); // Clear any existing interval
      slideInterval.value = setInterval(nextSlide, interval);
    };

    const handleNextSlide = () => {
      nextSlide();
      startSlideInterval();
    };

    const handlePrevSlide = () => {
      prevSlide();
      startSlideInterval();
    };

    onMounted(() => {
      // Count the number of images passed in the slot
      totalSlides.value = document.querySelectorAll('.carousel img').length;
      startSlideInterval();
    });

    return { carouselStyle, handleNextSlide, handlePrevSlide };
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50px;
}

.carousel-inner {
  display: flex;
  width: 100%;
}

.carousel img {
  width: 100%;
  flex-shrink: 0;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  color: black;
  border: none;
  font-size: 1rem;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
}

.carousel-button.left {
  left: 10px;
}

.carousel-button.right {
  right: 10px;
}
</style>
