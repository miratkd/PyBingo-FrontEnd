<template>
  <div class="banner">
    <div class="banner__text">
      Bem vindo ao Py-Bingo!
    </div>
    <div class="buttons">
      <div class="button" style="background: lightblue">
        Entre em uma partida.
      </div>
      <div class="button" style="background: lightgreen">
        Crie uma partida de bingo.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.button{
  padding: 30px 0;
  width: 25vw;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.buttons{
  display: flex;
  flex-direction: row;
  margin-top: 10vh;
  justify-content: space-between;
  width: 70vw;
  font-size: x-large;
}
.banner__text{
  background: lightblue;
  border-radius: 5px;
  text-align: center;
  padding: 30px 0;
  width: 70vw;
  font-size: xxx-large;
}
.banner{
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
  display: flex;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 650px) {
  .banner__text{
    font-size: x-large;
    width: 85vw;
  }
  .buttons{
    flex-direction: column;
    height: 30vh;
  }
  .button{
    width: 100%;
  }
}
</style>
