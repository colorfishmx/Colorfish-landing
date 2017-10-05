<template lang="pug">
  .small-12.medium-4.cell.pricing-container
    br(v-if='!isActive')
    br(v-if='!isActive')
    ul.pricing-table.text-center(:class="{active:isActive}" ,:style="{ backgroundImage: `url('${get_image}')` }")
      div(v-if='plan.price.discount')
        .headline
          h5 {{ plan.name }}
          span.strikethrough Antes ${{ plan.price.regular }}MXN
        .price
          span
            | Ahora ${{ plan.price.discount }}
            small MXN
      div(v-else)
        .headline
          h5 {{ plan.name }}
        .price
          span
            | ${{ plan.price.regular }}
            small MXN
      li.info {{ plan.quick_elevator_pitch }}
      li(v-for="feature in plan.features") {{ feature }}
      li
        button.contratar-btn(:class="get_btn_color", type='button', name='startup') contratar
</template>

<script>
export default {
  name: 'plan',
  props: ['plan'],
  data () {
    return {
    }
  },
  computed: {
    isActive(){
      if (this.plan.id == 3){
        return true;
      }
      else if(this.plan.id == 2){
        return false;
      }
      else{
        return false;
      }
    },
    get_image(){
      if (this.plan.id == 3){
        return require('../../assets/pro-bg.png');
      }
      else if(this.plan.id == 2){
        return require('../../assets/pyme-bg.png');
      }
      else{
        return require('../../assets/startup-bg.png');
      }
    },
    get_btn_color(){
      if (this.plan.id == 3){
        return 'profesionalBtn';
      }
      else if(this.plan.id == 2){
        return 'pymeBtn';
      }
      else{
        return 'startupBtn';
      }
    }
  }
}
</script>

<!-- General styles -->
<style scoped lang="scss">
@import '../../scss/_variables.scss';

.startupBtn{
  color: $startup-color;
}
.startupBtn::after{
  background: $startup-gradient;
}

.pymeBtn{
  color: $pyme-color;
}
.pymeBtn::after{
  background: $pyme-gradient;
}

.profesionalBtn{
  color: #FFFFFF;
  background: $profesional-gradient !important;

  position: relative;
  background-clip: padding-box;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 16px 55px;
  border-radius: 40px;
  text-transform: uppercase;
  outline: none;
  border: none;
}

.profesionalBtn::after{
  position: relative;
  top: 0px; bottom: 0px;
  left: 0px; right: 0px;
  content: inherit;
  z-index: 0;
  border-radius: 40px;
}




i{
  float: right;
}

.pricing-container {
  padding-left: 0px;
  padding-right: 0px;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
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

.headline{
  padding: 10px;
}

h5{
  color: #FFFFFF;
  font-family: 'nunito';
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.1;
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
  border-top: 1px solid;
  border-color: inherit;
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

li {
  color: #231f20;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f2f2f2;
  background: #ffffff;
  position: relative;
  z-index: 0;
}

li:last-child {
  padding-top: 17px;
  padding-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
}

.contratar-btn{
  position: relative;
  background: #FFFFFF;
  background-clip: padding-box;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 16px 55px;
  border-radius: 40px;
  text-transform: uppercase;
  outline: none;
  border: 1px solid transparent;
}

@media (max-width: 768px){
  .contratar-btn{
    position:relative;
  }
}

.contratar-btn::after{
  position: absolute;
  top: -2px; bottom: -2px;
  left: -2px; right: -2px;
  content: '';
  z-index: -1;
  border-radius: 40px;
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
















.active {
  box-shadow: 0px 0px 100px rgba(41,46,50,0.5);
  position: relative;
  margin: auto;
  z-index: 200;
}

@media (max-width: 768px){
  .active{
    position:relative;
  }
}
</style>
