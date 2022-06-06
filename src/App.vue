<template>
  <main>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light sticky" data-offset="500" ref="nav" :class="{ fixed: fixNav }">
        <div class="container">
          <inline-svg :src="LogoHorizontal" height="50" width="250"/>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#home" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">Sobre</a>
              </li>
              <li class="nav-item">
                <a href="#how-can-i-help" class="nav-link">Como posso te ajudar?</a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link">Serviços</a>
              </li>
              <!-- <li class="nav-item">
                <button class="btn btn-primary ml-lg-2" to="/sobre">Blog</button>
              </li> -->
            </ul>

            <Contacts />
          </div>

        </div>
      </nav>
    </header>

    <RouterView />

    <footer class="page-footer bg-image" style="background-image: url(../assets/img/world_pattern.svg);">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-3 py-3">
            <h3>Thaís Resende</h3>
            <p>Atendimento psicológico presencial em Belo Horizonte e online para todo Brasil</p>
            <Contacts />
          </div>
          <div class="col-lg-3 py-3">
            <h5>Entre em contato</h5>
            <a href="#" class="footer-link">(31) 9 9516 9604</a>
            <a href="#" class="footer-link">thaisresendepsi@gmail.com</a>
          </div>
          <div class="col-lg-3 py-3">
            <h5>Ética</h5>
            <p>Entenda e procure um profissional que siga o <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" target="_blank">código de ética</a> do Conselho Regional de Psicologia</p>
          </div>
          <div class="col-lg-3 py-3 text-center">
            <inline-svg :src="LogoVertical" width="200" height="200"/>
          </div>
        </div>

        <p class="text-center" id="copyright">Copyright &copy; 2022</p>
      </div>
    </footer>
  </main>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { onMounted, ref, computed, reactive, onUnmounted, onBeforeMount } from '@vue/runtime-core'
  import { debounce } from './utils/helpers';
  import Contacts from './components/Contacts.vue';
  import InlineSvg from 'vue-inline-svg';
  import LogoVertical from './assets/img/logo_vertical.svg';
  import LogoHorizontal from './assets/img/logo_horizontal.svg';

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
    console.log('oi');
    const scrollY = window.scrollY;
    if (scrollY > 120)
      fixNav.value = true;
    else 
      fixNav.value = false;
  }
</script>

<style lang="scss">
  /* @import '@/assets/base.css'; */
  @import '@/assets/css/maicons.css';
  @import '@/assets/css/bootstrap.css';
  @import '@/assets/css/animate.css';
  @import '@/assets/css/theme-light.scss';
  @import '@/assets/css/theme-base.scss';


</style>
