<template>
  <div v-if="isLoading" class="containear">carregando...</div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['isLoading']
}
</script>

<style scoped>
.containear{
  position: absolute;
  height: 100%;
  width: 100%;
  backdrop-filter: contrast(0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-transform: uppercase;
  color: white;
}
</style>
