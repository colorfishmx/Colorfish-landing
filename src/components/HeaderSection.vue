<template lang="pug">
  #header hello
</template>

<script>
export default {
  name: 'headerSection',
  data () {
    return {
      msg: 'Welcome to Your Aquesome Vue.js App'
    }
  }
}
</script>

<style scoped lang="postcss">
#header{
  height:100vh;
  min-height:100vh;
  background-color: blue
}
</style>
