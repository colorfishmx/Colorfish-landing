<template lang="pug">
  .wrapper
      .row.vcenter(v-if="even")
        .col-md-5.offset-1.img
          .img(:style="{ backgroundImage: `url('${img}')` }")
        .col-md-4.push-2
          h2 {{ title }}
          p {{ desc }}
          a.btn.btn-feat.btn-lg.scroll(href='#planes')
            span Planes

      .row.vcenter(v-else)
        .col-md-4.offset-2
          h2 {{ title }}
          p {{ desc }}
          a.btn.btn-feat.btn-lg.scroll(href='#planes')
            span Planes
        .col-md-5.push-1.img
          .img(:style="{ backgroundImage: `url('${img}')` }")

      hr.one(v-if="even")
      hr.two(v-else)
</template>

<script>
export default {
  name: 'step',
  props: ['title', 'desc', 'img', 'even'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.wrapper{
  margin: 0;
}

.vcenter{
  display: flex;
  align-items: center;
}

.img{
  height: 400px;
  width: 400px;
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
}

hr.one{
  display:block;
  border:0px;
  height:140px;
  background-image:url('../../assets/separator2.png');
  background-repeat: no-repeat;
  background-position: center;
  margin:0px;
}

hr.two{
  display:block;
  border:0px;
  height:140px;
  background-image:url('../../assets/separator.png');
  background-repeat: no-repeat;
  background-position: center;
  margin:0px;
}
</style>
