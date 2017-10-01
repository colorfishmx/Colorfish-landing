<template lang="pug">
    div(class="products")
        div(v-for="plan in plans", class="product")
            p {{ plan.name }}
            p {{ plan.quick_elevator_pitch }}
            p {{ plan.price.regular}}
            p(v-for="feature in plan.features") {{ feature }}
</template>

<script>

export default {
  name: 'home',
  computed: {
    plans(){
      return this.$store.state.products
    }
  }
}
</script>
