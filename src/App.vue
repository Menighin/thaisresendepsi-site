<template>
  <main id="main">
    <header>
      <a href="#main" class="back-to-top" :class="{ active: fixNav }"></a>
      <nav
        class="navbar navbar-expand-lg navbar-dark sticky"
        data-offset="500"
        ref="nav"
        :class="{ fixed: fixNav }"
      >
        <div class="container">
          <inline-svg :src="LogoHorizontal" height="50" width="250" />
          <button class="navbar-toggler" @click="toggleNav = !toggleNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" :class="{ show: toggleNav }">
            <ul class="navbar-nav ml-auto">
              <li
                v-for="n in navLinks"
                :key="n.id"
                class="nav-item"
                :class="{ active: n.active }"
              >
                <a :href="`#${n.id}`" class="nav-link">{{ n.label }}</a>
              </li>
            </ul>
          </div>
          <Contacts />
        </div>
      </nav>
    </header>

    <div class="padding-fix" :class="{ active: fixNav }" />

    <RouterView />

    <footer
      class="page-footer bg-image"
      style="background-image: url(../assets/img/world_pattern.svg)"
    >
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-3 py-3">
            <h3>Thaís Resende</h3>
            <p>CRP 04/56951</p>
            <p>
              Atendimento psicológico presencial em Belo Horizonte e online para
              todo Brasil
            </p>
            <Contacts />
          </div>
          <div class="col-lg-3 py-3">
            <h5>Entre em contato</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5531995169604"
              class="footer-link"
              >(31) 9 9516 9604</a
            ><br />
            <a href="mailto:psicologathaisresende@gmail.com" class="footer-link"
              >psicologathaisresende@gmail.com</a
            >
          </div>
          <div class="col-lg-3 py-3">
            <h5>Ética</h5>
            <p>
              Entenda e procure um profissional que siga o
              <a
                href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf"
                target="_blank"
                >código de ética</a
              >
              do Conselho Regional de Psicologia
            </p>
          </div>
          <div class="col-lg-3 py-3 text-center">
            <inline-svg
              class="logo-footer"
              :src="LogoVertical"
              width="200"
              height="200"
            />
          </div>
        </div>

        <p class="text-center" id="copyright">
          Copyright &copy; {{ new Date().getFullYear() }}
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import {
  onMounted,
  ref,
  computed,
  reactive,
  onUnmounted,
  onBeforeMount,
} from "@vue/runtime-core";
import { debounce } from "./utils/helpers";
import Contacts from "./components/Contacts.vue";
import InlineSvg from "vue-inline-svg";
import LogoVertical from "./assets/img/logo_vertical.svg";
import LogoHorizontal from "./assets/img/logo_horizontal.svg";

const fixNav = ref(false);
const toggleNav = ref(false);
const navLinks = ref([
  {
    id: "home",
    label: "Home",
    active: true,
  },
  {
    id: "about",
    label: "Sobre",
    active: false,
  },
  {
    id: "how-can-i-help",
    label: "Como posso ajudar?",
    active: false,
  },
  {
    id: "services",
    label: "Serviços",
    active: false,
  },
]);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((e) => {
      if (e.isIntersecting)
        navLinks.value.filter((o) => o.id === e.target.id)[0].active = true;
      else navLinks.value.filter((o) => o.id === e.target.id)[0].active = false;
    });
  },
  { threshold: [0.5] }
);

setTimeout(() => {
  navLinks.value
    .map((o) => o.id)
    .forEach((id) => {
      observer.observe(document.getElementById(id));
    });
}, 200);

onMounted(() => {
  new WOW().init();
  window.addEventListener("scroll", debounce(handleScroll, 100));
});

onUnmounted(() => {
  window.removeEventListener("scroll", debounce(handleScroll, 100));
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 120) fixNav.value = true;
  else fixNav.value = false;
};
</script>

<style lang="scss">
/* @import '@/assets/base.css'; */
@import "@/assets/css/maicons.css";
@import "@/assets/css/bootstrap.css";
@import "@/assets/css/animate.css";
@import "@/assets/css/theme-dark.scss";
@import "@/assets/css/theme-base.scss";
</style>
