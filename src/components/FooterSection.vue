<template lang="pug">
  div
    svg(style='display:block; fill:#292c3f;', xmlns='http://www.w3.org/2000/svg', width='100%', height='113.39', viewBox='0 0 1291 113.39', preserveAspectRatio='none')
      path.cls-1(d='M0,25.39s213.5,91.5,529.08,15.16C953.25-62,1291,62.39,1291,62.39v51H0Z')

    footer
      .grid-x.grid-container
        .cell.medium-6
          img(src='img/footer_logo.png', alt='colorfish')
          p
            small © 2017 Colorfish, SAS. Todos los derechos reservados.
        .cell.medium-2
          h5 Servicios
          ul
            li
              a(href='#') Diseño Web
            li
              a(href='#') Marketing Digital
            li
              a(href='#') Diseño de identidad
        .cell.medium-2
          h5 Servicios
          ul
            li
              a(href='#') Diseño Web
            li
              a(href='#') Marketing Digital
            li
              a(href='#') Diseño de identidad
        .cell.medium-2
          h5 Contacto
          ul
            li
              a(href='#') info@colorfish.mx
            li
              a(href='#') +8117157719
            li
              ul.social
                li
                  a(target='_blank')
                    i.fa.fa-facebook-square
                li
                  a(target='_blank')
                    i.fa.fa-twitter-square
                li
                  a(target='_blank')
                    i.fa.fa-instagram
                li
                  a(target='_blank')
                    i.fa.fa-dribbble
      .grid-x.grid-container
        .cell.medium-12
          ul.last
            li
              a(href='#') Términos de Servicio
            li
              a(href='#') Politica de privacidad
            li
              a(href='#') Aviso de privacidad
</template>

<script>
export default {
  name: 'footerSection',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
footer{
  padding: 80px 0px;
  background: #292c3f;
  color: #fff;
}

a{
  color: #fff;
  font-size: 0.83em;
  font-weight: 700;
}

small{
  color: #fff;
  font-size: 0.83em;
  font-weight: 700;
}

ul{
  padding: 0;
}

li{
  list-style: none;
  margin-top: 1em;
}

.last li{
  display: inline-block;
  margin-right: 3em;
}
</style>
