<template lang="pug">
  div
    svg(style='display:block; fill:#E7EEF4;', xmlns='http://www.w3.org/2000/svg', width='100%', height='113.39', viewBox='0 0 1291 113.39', preserveAspectRatio='none')
      path.cls-2(d='M0,25.39s213.5,91.5,529.08,15.16C953.25-62,1291,62.39,1291,62.39v51H0Z')

    section#features_section
      .grid-x.text-center.gradient-bg
        .cell.small-12.text-center
          h2.clrfsh_blue ¿Cómo funciona?
          p.clrfsh_blue
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut.
      .grid-container(v-for="item in items")
        step(:title="item.title", :desc="item.desc", :img="item.img", :even="isEven=!isEven")
</template>

<script>
import Step from './Step'

export default {
  name: 'instructions',
  components: {
    Step
  },
  data () {
    return {
      isEven: false,
      items: [
        { title: `Diseño gráfico en tu proyecto`,
          desc: `Implementamos un diseño gráfico agradable en todos nuestros proyectos y para mas proyectos.`,
          img: `https://www.pleo.io/1ddf251deac30528f81a016ff77c28b6.png`},
        { title: `Google analytics`,
          desc: `Analiza todo tu tráfico y aprovecha los datos para la toma de decisiones en tu negocio.`,
          img: `https://www.pleo.io/1ddf251deac30528f81a016ff77c28b6.png`},
        { title: `Search Engine Optimization`,
          desc: `Posiciónate en los primeros lugares en google y otros buscadores con el plan profesional.`,
          img: `https://www.pleo.io/1ddf251deac30528f81a016ff77c28b6.png`},
        { title: `Google analytics`,
          desc: `Analiza todo tu tráfico y aprovecha los datos para la toma de decisiones en tu negocio.`,
          img: `https://www.pleo.io/1ddf251deac30528f81a016ff77c28b6.png`}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
#features_section{
  background: #fff;
  margin: auto;
  padding: 0;
}

.gradient-bg{
  background: linear-gradient(to bottom, #E7EEF4, #FFFFFF);
  padding-top: 50px;
  padding-bottom: 180px;
}

h2{
  color: #292C3F;
  font-size: 2.3em;
}

p{
  color: ;
  font-size: 1.0em;
  font-weight: 400;
}

.text-center{
  text-align: center;
}
</style>
