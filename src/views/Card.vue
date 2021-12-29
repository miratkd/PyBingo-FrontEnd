<template>
  <Loading :isLoading="isLoading"/>
  <div class="page">
    <div class="row header">
      <div class="header__option name__option row">
        <div>{{card.name}}</div>
      </div>
      <div class="header__option row id__option">
        <div>Codigo:</div>
        <div>{{card.id}}</div>
      </div>
      <div class="header__option row admin-id__option">
        <div>Codigo da sala:</div>
        <div>{{card.admin}}</div>
      </div>
    </div>
    <div class="table">
      <div v-for="number in table" :key="number.number" class="number" :class="isMarked(number.isMarked)" v-on:click="number.isMarked = !number.isMarked">
        {{number.number}}
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
export default {
  components: { Loading },
  name: 'Card',
  data () {
    return {
      isLoading: false,
      card: undefined,
      table: undefined
    }
  },
  created () {
    this.checkCard()
    this.createTable()
  },
  methods: {
    checkCard () {
      this.card = JSON.parse(localStorage.getItem('card'))
      if (!this.card) {
        this.$router.push('/')
        return false
      } else return true
    },
    createTable () {
      this.table = [
        { number: this.card.p1, isMarked: false },
        { number: this.card.p2, isMarked: false },
        { number: this.card.p3, isMarked: false },
        { number: this.card.p4, isMarked: false },
        { number: this.card.p5, isMarked: false },
        { number: this.card.p6, isMarked: false },
        { number: this.card.p7, isMarked: false },
        { number: this.card.p8, isMarked: false },
        { number: this.card.p9, isMarked: false },
        { number: this.card.p10, isMarked: false },
        { number: this.card.p11, isMarked: false },
        { number: this.card.p12, isMarked: false },
        { number: this.card.p13, isMarked: false },
        { number: this.card.p14, isMarked: false },
        { number: this.card.p15, isMarked: false },
        { number: this.card.p16, isMarked: false },
        { number: this.card.p17, isMarked: false },
        { number: this.card.p18, isMarked: false },
        { number: this.card.p19, isMarked: false },
        { number: this.card.p20, isMarked: false },
        { number: this.card.p21, isMarked: false },
        { number: this.card.p22, isMarked: false },
        { number: this.card.p23, isMarked: false },
        { number: this.card.p24, isMarked: false },
        { number: this.card.p25, isMarked: false }
      ]
    },
    isMarked (isMarked) {
      if (isMarked) return 'markedNumber'
    }
  }
}
</script>

<style scoped>
.page{
  padding: 10vh 5vw 0 5vw;
  display: flex;
  flex-direction: column;
}
.header{
  justify-content: space-between;
}
.header__option{
  background: lightblue;
  border-radius: 5px;
  padding: 5px;
  justify-content: center
}
.name__option{
  width: 40%;
}
.id__option{
  width: 20%;
}
.admin-id__option{
  width: 25%;
}
.table{
  margin-top: 5vh;
  background: lightblue;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.number{
  text-align: center;
  border: 1px solid black;
  padding: 5px 0;
  cursor: pointer;
}
.markedNumber{
  color: red;
  border: 1px solid red;
  text-decoration: line-through;
}
</style>
