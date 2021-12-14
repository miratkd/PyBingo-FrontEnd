<template>
  <div v-if="admin">
    <div class="row header">
      <div class="name">
        {{admin.name}}
      </div>
      <div class="id">
        codigo:{{admin.id}}
      </div>
    </div>
    <div class="row mid">
      <div class="numbers">
        <div v-for="number in numbers" :key="number">{{number.number}}</div>
      </div>
      <div class="buttons">
        <div v-on:click="addNumber" class="add__number">add button</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Admin',
  data () {
    return {
      admin: undefined,
      numbers: []
    }
  },
  methods: {
    addNumber () {
      const path = 'http://127.0.0.1:8000/admin_number/?admin_id=' + this.$route.params.id
      axios.post(path).then(response => { this.numbers.push(response.data) })
    }
  },
  mounted () {
    let path = 'http://127.0.0.1:8000/bingo_admin/' + this.$route.params.id
    axios.get(path).then(response => { this.admin = response.data })
    path = 'http://127.0.0.1:8000/admin_number/' + this.$route.params.id
    axios.get(path).then(response => { this.numbers = response.data })
  }
}
</script>

<style scoped>
.add__number{
  padding: 5px;
  background-color: lightcoral;
  cursor: pointer;
}
.mid{
  padding: 5vh 6vw;
}
.buttons{
  width: 30vw;
}
.numbers{
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 1px solid red;
  flex: 1;
  overflow: scroll;
}
.name{
  background-color: lightblue;
  border-radius: 5px;
  width: 20vw;
  text-align: center;
}
.id{
  background-color: lightblue;
  border-radius: 5px;
  width: 40vw;
  text-align: center;
}
.header{
  justify-content: space-evenly;
  margin-top: 5vh;
}
</style>
