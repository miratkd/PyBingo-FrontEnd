<template>
  <div>
    <div v-if="!admin"><CreateAccount :type="'admin'" :setAccount="setAccount"/></div>
    <div v-else>
      <div class="row header">
        <div>{{admin.name}}</div>
        <div>Codigo:</div>
        <div>{{admin.id}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateAccount from '../components/CreateAccount.vue'
export default {
  name: 'Admin',
  data () {
    return {
      admin: undefined
    }
  },
  components: {
    CreateAccount
  },
  methods: {
    setAccount (data) {
      this.admin = data
    }
  },
  mounted () {
    console.log(this.$store.state.admin)
  }
}
</script>

<style scoped>
.header{
  justify-content: space-evenly;
}
</style>
