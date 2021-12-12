<template>
  <div>
    <div v-if="!card"><CreateAccount :type="'card'"/></div>
    <div v-else>logado</div>
  </div>
</template>

<script>
import CreateAccount from '../components/CreateAccount.vue'
export default {
  name: 'Card',
  data () {
    return {
      card: undefined
    }
  },
  components: {
    CreateAccount
  }
}
</script>

<style scoped>

</style>
