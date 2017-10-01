<template lang="pug">
  div
    svg(style='display:block; fill:#292c3f;', xmlns='http://www.w3.org/2000/svg', width='100%', height='92', viewBox='0 0 1918 92', preserveAspectRatio='none')
     path(d='M1918,84S1509.84,0,959,0,0,84,0,84v8H1918Z')

    section#planes
      .grid-container
        .grid-x.margin-40
          .small-4.cell
            h2.white Planes
            p.white
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut.
        .grid-x.margin-50
          plan(v-for="item in items",
              :key="item.id",
              :name="item.name",
              :info="item.info",
              :price="item.price",
              :features="item.features")
          PlanProfesional
</template>

<script>
import PlanProfesional from './PlanProfesional'

import Plan from './Plan'

export default {
  name: 'prices',
  components: {
    Plan,
    PlanProfesional
  },
  data () {
    return {
      items: [
        { name: `Startup`,
          info: `Comienza a darle presencia online a tu negocio con una landing page`,
          price: {regular: '6,999', discount: '3,900'},
          features: [
            `Dominio GRATIS por 1 año`,
            `2 correos electrónicos`,
            `Enlace a redes sociales`,
            `Host GRATIS por un año`,
            `Visible en todos los dispositivos`,
            `Hasta 5 secciones`
          ]
        },
        { name: `PyME`,
          info: `Obten un incremento en tu crecimiento como negocio con el plan PyMe`,
          price: {regular: '12,999', discount: ''},
          features: [
            `Dominio GRATIS por 2 años`,
            `5 correos electrónicos`,
            `Enlace a redes sociales`,
            `Host GRATIS por 2 años`,
            `Visible en todos los dispositivos`,
            `Hasta 9 secciones`
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
#planes {
  background: #292C3F;
}

h2{
  margin-top: 70px;
}

</style>
