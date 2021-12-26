<template>
  <Loading :isLoading="isLoading"/>
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
        <div v-if="cards.length < 1">Carregando...</div>
        <div v-else v-for="card in cards" :key="card.id" class="card" :class="isBingo(card)">
          {{card.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  components: { Loading },
  name: 'Admin',
  data () {
    return {
      admin: undefined,
      numbers: [],
      lastNumber: '--',
      cards: [],
      isLoading: false,
      isActive: true
    }
  },
  methods: {
    cleanNumbers () {
      this.isLoading = true
      const respost = confirm('Tem certeza que deseja apagar todos os numeros?', 'Sim')
      if (!respost) return
      this.$store.dispatch('cleanNumbers', this.$route.params.id).then(() => {
        this.numbers = []
        this.lastNumber = '--'
        this.isLoading = false
      })
    },
    addNumber () {
      this.$store.dispatch('addNumber', this.$route.params.id).then(response => {
        this.numbers.push(response)
        this.lastNumber = response.number
      })
    },
    async updateCards () {
      setTimeout(async () => {
        if (!this.isActive) return false
        this.cards = await this.$store.dispatch('getCards', this.$route.params.id)
        this.updateCards()
      }, 5000)
    },
    isBingo (card) {
      if (card.is_bingo) return 'bingo__card'
    },
    async getNotifications () {
      setTimeout(async () => {
        if (!this.isActive) return false
        const notification = await this.$store.dispatch('getNotifications', this.$route.params.id)
        if (notification) {
          notification.forEach(element => {
            toast.success(element.card.user_name + ' gritou bingo!')
          })
        }
        this.getNotifications()
      }, 5000)
    },
    async checkAdmin () {
      const admin = JSON.parse(window.localStorage.getItem('admin'))
      if (!admin) return false
      if (String(admin.id) !== String(this.$route.params.id)) {
        return false
      }
      return true
    }
  },
  async mounted () {
    this.isLoading = true
    if (!await this.checkAdmin()) {
      this.$router.push('/')
      return false
    }
    this.admin = await this.$store.dispatch('getAdmin', this.$route.params.id)
    this.numbers = await this.$store.dispatch('getAdminNumbers', this.$route.params.id)
    await this.updateCards()
    await this.getNotifications()
    this.isLoading = false
  },
  beforeUnmount () {
    this.isActive = false
  }
}
</script>

<style scoped>
.bingo__card{
  background: gold !important;
}
.cards__title{
  margin-bottom: 5px;
}
.card{
  margin: 0 10px;
  background: lightgreen;
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer;
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
@media screen and (max-width: 500px) {
  .row {
    flex-direction: column;
  }
  .header{
    height: 15vh;
    font-size: 30px;
    padding-top: 2vh;
  }
  .name{
    width: 80vw;
  }
  .id{
    width: 80vw;
  }
  .last__number{
    flex-direction: row;
    margin: 0 0 2vh 0;
    width: 80vw;
  }
  .buttons{
    width: 80vw;
    flex-direction:  row;
    height: auto;
    margin-top: 3vh;
  }
  .cards{
    flex-direction: row;
    margin-bottom: 2vh;
  }
}
</style>
