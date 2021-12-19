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
      <div class="numbers-containear">
        <div class="row last__number">
          <div>Ultimo numero: {{lastNumber}}</div>
        </div>
        <div class="numbers">
          <div v-for="number in numbers" class="number" :key="number">{{number.number}}</div>
        </div>
      </div>
      <div class="buttons">
        <div v-on:click="addNumber" class="add__number">Adicionar numero</div>
        <div v-on:click="cleanNumbers" class="clean__number">Limpar numeros</div>
      </div>
    </div>
    <div class="low">
      <div class="cards__title">
        Jogadores:
      </div>
      <div class="cards row">
        <div v-for="card in cards" :key="card.id" class="card">
          {{card.user_name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Admin',
  data () {
    return {
      admin: undefined,
      numbers: [],
      lastNumber: '--',
      cards: []
    }
  },
  methods: {
    cleanNumbers () {
      const respost = confirm('Tem certeza que deseja apagar todos os numeros?', 'Sim')
      if (!respost) return
      this.$store.dispatch('cleanNumbers', this.$route.params.id).then(() => { this.numbers = [] })
    },
    addNumber () {
      this.$store.dispatch('addNumber', this.$route.params.id).then(response => {
        this.numbers.push(response)
        this.lastNumber = response.number
      })
    }
  },
  mounted () {
    this.$store.dispatch('getAdmin', this.$route.params.id).then(response => {
      this.admin = response
    })
    this.$store.dispatch('getAdminNumbers', this.$route.params.id).then(response => {
      this.numbers = response
    })
    this.$store.dispatch('getCards', this.$route.params.id).then(response => {
      this.cards = response
    })
  }
}
</script>

<style scoped>
.cards__title{

}
.card{
  margin: 0 10px;
}
.cards{
  background-color: lightblue;
  padding: 5px;
  border-radius: 5px;
  overflow-x: scroll;
}
.low{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 87vw;
  padding-left: 5.5vw;
}
.last__number{
  justify-content: center;
  background-color: lightblue;
  padding: 5px;
  border-radius: 5px;
  margin: 0 10vw 2vh 10vw;
  font-size: 30px;
}
.numbers-containear{
  flex: 1;
}
.clean__number{
  padding: 5px;
  background-color: lightcoral;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
}
.add__number{
  padding: 5px;
  background-color: lightgreen;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
}
.mid{
  padding: 5vh 6vw;
}
.buttons{
  width: 20vw;
  padding: 0 5vw;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  height: 50vh
}
.numbers{
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  overflow-y: scroll;
  background-color: lightblue;
  border-radius: 5px;padding-top: 10px;
  gap: 10px;
}
.number{
  text-align: center;
  font-size: 30px;
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
  padding-top: 5vh;
}
</style>
