<template lang="pug">
  #presentacion
    div(v-for='plan in plans')
      Plan(:name='plan.name', :title='plan.title', :advantages='plan.advantages')
</template>

<script>
import Plan from './Plan'

export default {
  name: 'presentation',
  components: {
    Plan
  },
  data () {
    return {
      plans: [
        {
          name: `Plan Startup`,
          title: `Empower your team, while staying in control`,
          advantages: [
            `Follow all purchases, categorized with the right receipts`,
            `Set custom tags to match the accounting procedures`,
            `Integrate and sync Pleo with your accounting system`
          ]
        },
        {
          name: `Plan PyME`,
          title: `No more lost receipts and tedious paperwork`,
          advantages: [
            `Real-time notifications when a Pleo card is used`,
            `Easily capture and match receipts with the Pleo app`,
            `Automatic categorization of all purchases`
          ]
        },
        {
          name: `Plan Profesional`,
          title: `See where the company money is going in real time`,
          advantages: [
            `Follow all purchases, categorized with the right receipts`,
            `Set custom tags to match the accounting procedures`,
            `Integrate and sync Pleo with your accounting system`
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">

</style>
