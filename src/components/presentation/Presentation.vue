<template lang="pug">
  #presentation
    div(v-for='plan in plans')
      Plan(:plan='plan')
</template>

<script>
import Plan from './Plan'

export default {
  name: 'presentation',
  components: {
    Plan
  },
  data () {
    return {

    }
  },
  computed: {
    plans(){
      return this.$store.state.products
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  #presentation{
    background-color: #292C3F;
    padding-top: 100px;
    padding-bottom: 100px;
  }

</style>
