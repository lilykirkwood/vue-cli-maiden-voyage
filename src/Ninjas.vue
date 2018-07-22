<template>
  <div>
    <h1>List of ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Yoshi', 'Mario', 'Peaches']
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  color: lightblue;
}

</style>
