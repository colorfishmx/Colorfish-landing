<template lang="pug">
  #wrapper
    headerSection
    presentation
    instructions
    prices
    div(class="products")
        div(v-for="plan in plans", class="product")
            p {{ plan.name }}
            p {{ plan.quick_elevator_pitch }}
            p {{ plan.price.regular}}
            p(v-for="feature in plan.features") {{ feature }}
</template>

<script>
import HeaderSection from './HeaderSection'
import Presentation from './presentation/Presentation'
import Instructions from './instructions/Instructions'
import Prices from './prices/Prices'

export default {
  name: 'home',
  components: {
    HeaderSection,
    Presentation,
    Instructions,
    Prices
  },
  computed: {
    plans(){
      return this.$store.state.products
    }
  }
}
</script>
