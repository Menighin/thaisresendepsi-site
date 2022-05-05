<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500" ref="nav" :class="{ fixed: fixNav }">
      <div class="container">
        <a href="#" class="navbar-brand">Thais<span class="text-primary">Resende</span></a>

        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="service.html">Consulta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog.html">Contato</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary ml-lg-2" href="contact.html">Blog</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'
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
  @import '@/assets/css/theme.css';
</style>
