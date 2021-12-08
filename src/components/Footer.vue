<template>
  <div class="footer__containear row">
    <div class="footer__logo">
      Py-Bingo
    </div>
    <div class="footer__info">
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer__info{
  border: 1px solid white;
  border-radius: 5px;
  width: 35%;
  margin-right: 3%;
  padding: 2px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
</style>
