<template lang="pug">
  div
    svg(style='display:block; fill:#292c3f;', xmlns='http://www.w3.org/2000/svg', width='100%', height='92', viewBox='0 0 1918 92', preserveAspectRatio='none')
     path(d='M1918,84S1509.84,0,959,0,0,84,0,84v8H1918Z')

    section#planes
      .grid-x.margin-40
        .small-12.cell.text-center
          h2.white Planes
          p.white
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut.
      .grid-x.margin-50.grid-container
        Plan(:plan='plans[0]', :key='plans[0].id')
        Plan(:plan='plans[2]', :key='plans[2].id')
        Plan(:plan='plans[1]', :key='plans[1].id')
</template>

<script>
import Plan from './Plan'

export default {
  name: 'prices',
  components: {
    Plan
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
.grid-container{
  max-width: 73.125rem;
}

#planes {
  background: #292C3F;
}

h2{
  margin-top: 70px;
}

.text-center{
  text-align: center;
}

</style>
