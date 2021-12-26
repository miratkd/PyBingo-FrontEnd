<template>
  <div class="footer__containear row">
    <router-link to="/" class="footer__logo">
      Py-Bingo
    </router-link>
    <div class="footer__info">
      <div style="color: white">Made by: Lucas Mira</div>
      <a href="https://www.linkedin.com/in/lucas-mira-17514b203/" target="_blank">Linkedin</a>
      <a href="https://github.com/miratkd" target="_blank">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
a{
  color: white;
  text-decoration: none;
}
.footer__info{
  border-radius: 5px;
  width: 35%;
  margin-right: 3%;
  padding: 2px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  gap: 5px
}
.footer__logo{
  font-size: xxx-large;
  color: white;
}
.footer__containear{
  justify-content: space-between;
  height: 10vh;
  background: gray;
}
@media screen and (max-width: 500px) {
  .footer__logo{
    font-size: xx-large;
  }
  .footer__info{
    width: 50vw;
    margin-right: 0;
  }
}
</style>
