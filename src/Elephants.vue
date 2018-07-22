<template>
  <ol>
    <li v-for="elephant in elephants">{{ elephant }}</li>
  </ol>
</template>

<script>
export default {
  data () {
    return {
      elephants: ['Ellie', 'Nelly', 'Dumbo']
    }
  }
}
</script>

<style lang="scss">

</style>
