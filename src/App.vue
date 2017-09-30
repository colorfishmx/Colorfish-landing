<template lang="pug">
  #app
    img(src="./assets/logo.png")
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  @import './scss/foundation.min.scss'

</style>
