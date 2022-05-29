<template>
  <main>
    <header>
      <nav class="navbar navbar-expand-lg header-bg navbar-light sticky" data-offset="500" ref="nav" :class="{ fixed: fixNav }">
        <div class="container">
          <a href="#" class="navbar-brand">Thais<span class="text-primary">Resende</span></a>

          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/sobre">Sobre</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/como-posso-ajudar">Como posso te ajudar?</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/serviços">Serviços</router-link>
              </li>
              <li class="nav-item">
                <router-link class="btn btn-primary ml-lg-2" to="/sobre">Blog</router-link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>

    <RouterView />

    <footer class="page-footer bg-image" style="background-image: url(../assets/img/world_pattern.svg);">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-3 py-3">
            <h3>SEOGram</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, repellendus eius blanditiis in iusto eligendi iure.</p>

            <div class="social-media-button">
              <a href="#"><span class="mai-logo-facebook-f"></span></a>
              <a href="#"><span class="mai-logo-twitter"></span></a>
              <a href="#"><span class="mai-logo-google-plus-g"></span></a>
              <a href="#"><span class="mai-logo-instagram"></span></a>
              <a href="#"><span class="mai-logo-youtube"></span></a>
            </div>
          </div>
          <div class="col-lg-3 py-3">
            <h5>Company</h5>
            <ul class="footer-menu">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Help & Support</a></li>
            </ul>
          </div>
          <div class="col-lg-3 py-3">
            <h5>Contact Us</h5>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            <a href="#" class="footer-link">+00 1122 3344 5566</a>
            <a href="#" class="footer-link">seogram@temporary.com</a>
          </div>
          <div class="col-lg-3 py-3">
            <h5>Newsletter</h5>
            <p>Get updates, news or events on your mail.</p>
            <form action="#">
              <input type="text" class="form-control" placeholder="Enter your email..">
              <button type="submit" class="btn btn-success btn-block mt-2">Subscribe</button>
              
            </form>
          </div>
        </div>

        <p class="text-center" id="copyright">Copyright &copy; 2020. This template design and develop by <a href="https://macodeid.com/" target="_blank">MACode ID</a></p>
      </div>
    </footer>
  </main>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { onMounted, ref, computed, reactive, onUnmounted, onBeforeMount } from '@vue/runtime-core'
  import { debounce } from './utils/helpers';

  const nav = ref(null);
  const fixNav = ref(false);

  onBeforeMount(() => {

  })

  onMounted(() => {
    new WOW().init();    
    window.addEventListener('scroll', debounce(handleScroll, 100));
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', debounce(handleScroll, 100));
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 120)
      fixNav.value = true;
    else 
      fixNav.value = false;
  }
</script>

<style>
  /* @import '@/assets/base.css'; */
  @import '@/assets/css/maicons.css';
  @import '@/assets/css/bootstrap.css';
  @import '@/assets/css/animate.css';
  @import '@/assets/css/theme-light.css';
</style>
