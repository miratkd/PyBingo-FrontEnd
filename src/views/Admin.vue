<template>
  <div>
    <div v-if="!admin"><CreateAccount :type="'admin'"/></div>
    <div v-else>logado</div>
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
  }
}
</script>

<style scoped>

</style>
