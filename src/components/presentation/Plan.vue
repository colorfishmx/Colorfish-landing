<template lang="pug">
  #profesional-section.main-feature.main-feature-3
    .container.reorder
      .row
        .col-lg-6.col-lg-offset-0.col-md-6.col-md-offset-0.col-sm-10.col-sm-offset-1.col-xs-10.col-xs-offset-1.featureimage3.item1
          img.Twox(src='img/feat-1.png', width='100%', height='auto')
        .col-lg-5.col-lg-offset-1.col-md-5.col-md-offset-1.col-xs-10.col-xs-offset-1.item2
          h3 {{ name }}
          h2 {{ title }}
          ul.top-three-features(v-for="advantage in advantages")
            li
              p.one-of-the-features {{ advantage }}
          .pad-sm
            a.col-xs-12.col-sm-6.btn-aside(href='#') ver ejemplos
            a.col-xs-12.col-sm-6.btn-primary.sunny.scroll(href='#planes') Ver precio
</template>

<script>
export default {
  name: 'plan',
  props: ['name', 'title', 'advantages'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">

</style>
