<template lang="pug">
  #profesional-section.main-feature.main-feature-3
    .grid-container.reorder
      .grid-x.grid-margin-x
        //- .col-lg-6.col-lg-offset-0.col-md-6.col-md-offset-0.col-sm-10.col-sm-offset-1.col-xs-10.col-xs-offset-1.featureimage3.item1
        .cell.small-8.medium-6
          img(:src="get_image", width='70%', height='auto')
        //- .col-lg-5.col-lg-offset-1.col-md-5.col-md-offset-1.col-xs-10.col-xs-offset-1.item2
        .cell.small-12.medium-6
          h3(:class='get_color') plan {{ plan.name }}
          h2 {{ plan.quick_desc }}
          ul.top-three-features(v-for="advantage in plan.advantages")
            li
              p
                svg(width='15px', height='11px', class='checkmark', viewBox='0 0 15 11', version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink')
                  defs
                  g#Page-1(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
                    g#Homepage-v1-Copy(transform='translate(-793.000000, -2514.000000)', :class='get_color')
                      g#noun_535239_cc(transform='translate(213.000000, 2196.000000)')
                        g#Group
                          g#Group-51
                            g#Group-57
                              g#Group-56(transform='translate(580.000000, 0.000000)')
                                path#Shape(d='M0.409363118,322.461644 L0.409363118,322.461644 C0.971720532,321.899287 1.86487643,321.899287 2.42723384,322.445105 L5.4375,325.455371 L12.4835076,318.409363 C13.0293251,317.863546 13.9390209,317.863546 14.4848384,318.409363 L14.4848384,318.409363 C15.0306559,318.955181 15.0306559,319.864876 14.4848384,320.410694 L6.41335551,328.465637 C5.86753802,329.011454 4.95784221,329.011454 4.41202471,328.465637 L0.409363118,324.462975 C-0.136454373,323.900618 -0.136454373,323.007462 0.409363118,322.461644 L0.409363118,322.461644 Z')
                span {{ advantage }}
          .pad-sm.grid-x
            a.cell.small-12.medium-6.btn-aside(href='#', :class='get_color') ver ejemplos
            a.cell.small-12.medium-6.btn-primary.sunny.scroll(href='#planes', :class='get_gradient') Ver precio
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
    get_color(){
      if (this.plan.id == 3){
        return 'profesionalColor';
      }
      else if(this.plan.id == 2){
        return 'pymeColor';
      }
      else{
        return 'startupColor';
      }
    },
    get_gradient(){
      if (this.plan.id == 3){
        return 'profesionalGradient';
      }
      else if(this.plan.id == 2){
        return 'pymeGradient';
      }
      else{
        return 'startupGradient';
      }
    },
    get_image(){
      if (this.plan.id == 3){
        return require('../../assets/profesional-illustration.png');
      }
      else if(this.plan.id == 2){
        return require('../../assets/pyme-illustration.png');
      }
      else{
        return require('../../assets/startup-illustration.png');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../scss/_variables.scss';

  .startupColor{
    color: $startup-color;
    fill: $startup-color;
  }
  .startupGradient{
    background: $startup-gradient;
  }

  .pymeColor{
    color: $pyme-color;
    fill: $pyme-color;
  }
  .pymeGradient{
    background: $pyme-gradient;
  }

  .profesionalColor{
    color:  $profesional-color;
    fill: $profesional-color;
  }
  .profesionalGradient{
    background: $profesional-gradient;
  }

  #profesional-section{
    margin-top: 100px;
    margin-bottom: 100px;
  }

  h3 {
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 700;
    text-align: left;
    line-height: 30px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h2{
    font-size: 35px;
    font-weight: 400;
    line-height: 40px;
    color: #fff;
    letter-spacing: -0.5px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  ul{
    list-style: none;
    margin-top: 20px;
    padding-left: 0;
  }

  p{
    color: #888888;
    letter-spacing: 0px;
    font-size: 17px;
    line-height: 22px;
    font-weight: 400;
  }

  .checkmark{
    margin-right: 20px;
  }

  .pad-sm{
    margin: 80px 0px;
  }

  .btn-aside{
    white-space: nowrap;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'nunito';
    text-align: center;
    letter-spacing: 1px;
    display: block;
  }

  .btn-primary{
    color: #fff;
    white-space: nowrap;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    font-family: 'nunito';
    letter-spacing: 1px;
    display: block;
    transition: all ease 0.3s;
  }

</style>
