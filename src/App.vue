<template>
  <div><!-- ROOT ELEMENT - do not place anything outside of this div -->
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
    <elephants></elephants>
  </div>
</template>

<script>

// importing components locally
import Elephants from './Elephants.vue'

export default {
  components: {
    'elephants': Elephants
  },
  data () {
    return {
      title: "Lily's app"
    }
  }
}
</script>

<style lang="scss">

h1 {
  color: pink;
}

</style>
