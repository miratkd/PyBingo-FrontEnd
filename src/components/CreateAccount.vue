<template>
  <div class="page__containear">
    <div class="row input__containear">
      <div>Nome:</div>
      <input v-model="name" class="input" type="text">
    </div>
    <div class="row input__containear" style="margin-top: 5vh">
      <div>Senha:</div>
      <input v-model="password" class="input" type="password">
    </div>
    <div v-if="type === 'card'" style="margin-top: 5vh" class="row input__containear">
      <div>Codigo de admin:</div>
      <input v-model="admin" class="input" type="text">
    </div>
    <button class="button" v-on:click="createAccount()">
      Criar
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  name: 'CreateAccount',
  data () {
    return {
      name: undefined,
      admin: undefined,
      password: undefined
    }
  },
  props: ['type', 'setAccount'],
  methods: {
    createAccount () {
      if (!this.name) {
        toast.error('Por favor insira um nome')
        return
      }
      if (this.type === 'admin') {
        axios.post('http://127.0.0.1:8000/bingo_admin/', { name: this.name, password: this.password }).then(response => this.setAccount(response.data))
      } else {
        axios.post('http://127.0.0.1:8000/card/', { user_name: this.name, admin: this.admin }).then(response => console.log(response))
      }
    }
  }
}
</script>

<style scoped>
.button{
  margin-top: 15vh;
  width: 30vw;
  height: 8vh;
  background-color: lightgreen;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 30px;
  color: #2c3e50;
}
.input{
  font-size: 30px;
}
.page__containear{
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
.input__containear{
  width: 80vw;
  justify-content: space-between;
}
@media screen and (max-width: 700px) {
  .input__containear{
    flex-direction: column;
  }
  .input{
    margin-top: 3vh;
  }
  .button{
    width: 60vw;
  }
}
</style>
