<template>
  <div class="page">
    <div class="row containear">
      <div class="label">Nome:</div>
      <input class="input" v-model="name" type="text">
    </div>
    <div class="row containear">
      <div class="label">Senha:</div>
      <input class="input" v-model="password" type="password">
    </div>
    <div v-if="this.$route.params.type === 'card'" class="row containear">
      <div class="label">Codigo do admin:</div>
      <input class="input" v-model="admin" type="number">
    </div>
    <div class="button" v-on:click="createAccount">
      Criar Partida!
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  data () {
    return {
      name: undefined,
      password: undefined,
      admin: undefined
    }
  },
  methods: {
    createAccount () {
      if (this.$route.params.type === 'card') this.createCard()
      else this.createAdmin()
    },
    async createAdmin () {
      const params = {
        name: this.name,
        password: this.password,
        type: 'admin'
      }
      await this.$store.dispatch('createAccount', params)
      this.$router.push('/admin')
    },
    async createCard () {
      const params = {
        name: this.name,
        password: this.password,
        type: 'card',
        admin: this.admin
      }
      await this.$store.dispatch('createAccount', params)
      this.$router.push('/card')
    }
  }
}
</script>

<style scoped>
.page{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  height: 90vh;
  justify-content: space-evenly;
  padding: 0 5vw;
}
.containear{
  background: lightblue;
  padding: 20px 0;
  border-radius: 5px;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 10vh;
}
.input{
  width: 50%;
  font-size: 25px;
}
.label{
  width: 35%;
}
.button{
  background: lightgreen;
  border-radius: 5px;
  width: 40%;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .label{
    font-size: 22px
  }
  .button{
    width: 70%;
  }
}
</style>
