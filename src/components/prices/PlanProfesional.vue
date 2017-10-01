<template lang="pug">
  .col-sm-4.pricing-container
    ul#profesional-bg.pricing-table
      div
        .headline
          h5.white {{ name }}
        .price
          .amount
            | {{ price }}
            small MXN
      li.info
        | {{ desc }}
      li.features.first
        | Dominio
        span.pro-word GRATIS
        |  por
        span.pro-word 2
        |  años
      li.features
        span.pro-word 5
        |  correos electrónicos
      li.features Enlace a redes sociales
      li.features.pro-feature Google Analytics
      li.features
        | Host
        span.pro-word GRATIS
        |  por
        span.pro-word 2
        |  años
      li.features.pro-feature Visible en todos los dispositivos
      li.features
        | Hasta
        span.pro-word 6
        |  secciones
      li.features
        | Mantenimiento por
        span.pro-word 2
        |  años
      li.features.last
        button#profesional-btn.contratar-btn(type='button', name='profesional') contratar
</template>

<script>
export default {
  name: 'PlanProfesional',
  data () {
    return {
      name: 'Profesional',
      price: '$9,900',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.pricing-container {
  padding-left: 0px;
  padding-right: 0px;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

#profesional-bg{
  /*background: url(../../assets/pro-bg.png);*/
}

.pricing-table {
  box-shadow: 0px 0px 12px rgba(41,46,50,0.6);
  position: relative;
  margin: auto;
  z-index: 200;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

@media (max-width: 768px){
  .pricing-table.active{
    position:relative;
  }
}

.pricing-table:hover {
  margin-top: -10px;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.pricing-table li {
  padding-left: 20px;
  padding-right: 20px;
}

.headline {
  color: #FFFFFF;
  padding: 10px;
  font-family: 'nunito';
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
}

.price {
    color: #FFFFFF;
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 20px;
    padding-top: 20px;
}


.pricing-table:hover li.price  {
  background: #303236;
  -webkit-transition: all 0.85s ease-in-out;
  -moz-transition: all 0.85s ease-in-out;
  -o-transition: all 0.85s ease-in-out;
  transition: all 0.85s ease-in-out;
}

.price small {
  font-weight: 300;
  color: rgba(255,255,255,0.7);
}

.info {
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 13px;
  color: #929496;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  margin: 0px 8px;
}

.features {
  color: #231f20;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f2f2f2;
  background: #ffffff;
  position: relative;
  z-index: 0;
}

.features.first {
  border-top: 1px solid #f2f2f2;
}

.features.last {
  padding-top: 17px;
  padding-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
}

#profesional-btn{
  background: linear-gradient(120deg, #FFC166, #FA867B);
  color: #FFFFFF;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 1px;
  padding: 16px 55px;
  border-radius: 40px;
  text-transform: uppercase;

  border: none;
}

.contratar-btn{
  position: relative;
  background: #FFFFFF;
  background-clip: padding-box;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 1px;
  padding: 16px 55px;
  border-radius: 40px;
  text-transform: uppercase;
  outline: none;
  border: 1px solid transparent;
}

.contratar-btn::after{
  /*background: linear-gradient(red, blue);*/
  position: absolute;
  top: -1px; bottom: -1px;
  left: -1px; right: -1px;
  content: '';
  z-index: -1;
  border-radius: 40px;
}
</style>
