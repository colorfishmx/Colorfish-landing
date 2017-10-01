<template lang="pug">
  .col-sm-4.pricing-container
    br
    br
    ul#startup-bg.pricing-table.text-center
      div
        .headline
          h5 {{ name }}
        .price
          span.amount.strikethrough
            | {{ price }}
            small MXN
      li.info {{ desc }}
      li.features.first Dominio GRATIS por 1 año
      li.features 2 correos electrónicos
      li.features Enlace a redes sociales
      li.features Host GRATIS por un año
      li.features Visible en todos los dispositivos
      li.features Hasta 6 secciones
      li.features.last
        button#startup-btn.contratar-btn(type='button', name='startup', data-toggle='modal') contratar
</template>

<script>

export default {
  name: 'PlanStartup',
  data () {
    return {
      name: 'Startup',
      price: '$3,900',
      desc: `Comienza a darle presencia online a tu negocio con una landing page`
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

#startup-bg{
  background: url(../../../img/basic-bg.png);
}

.pricing-table {
  background: #000;
  margin-bottom: 50px;
  margin-top: 0px;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.pricing-table.active {
  box-shadow: 0px 0px 12px rgba(41,46,50,0.6);
  position: absolute;
  margin: auto;
  z-index: 200;
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

.strikethrough {
  position: relative;
}
.strikethrough:before {
  position: absolute;
  content: "";
  left: 0;
  top: 50%;
  right: 0;
  border-top: 2px solid;
  border-color: inherit;

  -webkit-transform:rotate(-5deg);
  -moz-transform:rotate(-5deg);
  -ms-transform:rotate(-5deg);
  -o-transform:rotate(-5deg);
  transform:rotate(-5deg);
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

#startup-btn{
  color: #9a86fd;
}

#startup-btn::after{
  background: linear-gradient(120deg ,#55c2fa, #db4dff);
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
