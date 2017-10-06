<template lang="pug">
  #wrapper
    headerSection
    presentation
    instructions
    prices
    footerSection
</template>

<script>
import HeaderSection from './HeaderSection'
import Presentation from './presentation/Presentation'
import Instructions from './instructions/Instructions'
import Prices from './prices/Prices'
import FooterSection from './FooterSection'


export default {
  name: 'home',
  components: {
    HeaderSection,
    Presentation,
    Instructions,
    Prices,
    FooterSection
  }
}
</script>
