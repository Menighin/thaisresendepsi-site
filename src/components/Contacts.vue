<template>
  <div class="contacts">
    <div class="contact"><a href="https://api.whatsapp.com/send?phone=5531995169604" target="blank"><span class="mai-logo-whatsapp"></span></a></div>
    <div class="contact"><a href="https://www.instagram.com/thaisresendepsi/" target="blank"><span class="mai-logo-instagram"></span></a></div>
    <div class="contact"><a href="https://www.linkedin.com/in/thais-resende-836683101/" target="blank"><span class="mai-logo-linkedin"></span></a></div>
  </div>
</template>

<script>
export default {
    name: 'Contancts'
}
</script>

<style lang="scss">
  .contacts {
    margin: 0 10px;
    .contact {
      display: inline-block;
      width: 32px;
      height: 32px;
      margin: 0 2px 0;
      border-radius: 100%;
      line-height: 32px;
      text-align: center;

      a {
        text-decoration: none;
        vertical-align: middle;
      }
    }
  }
</style>