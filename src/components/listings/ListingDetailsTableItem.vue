<template>
  <div class="listing-details-ti-ctr text-body1">
    <span>{{ fieldDetails.label }}</span>
    :
    <span class="text-weight-medium">
      <span v-if="fieldDetails.fieldType === 'price'">
        <span v-if="isPromotion">{{ $ft("client_shared.fieldLabels.from") }}</span>
        €650,000
        <!-- <DisplayResalesPrice :listing="currentProperty" :noCents="true"></DisplayResalesPrice> -->
      </span>
      <span v-else-if="fieldDetails.fieldType === 'fee'">
        €450
        <!-- <DisplayFee :symbolLast="false" :noCents="true" sourceCurrency="EUR" displayCurrency="EUR"
        :value="currentProperty[fieldDetails.fieldKey]"></DisplayFee> -->
      </span>
      <span v-else-if="fieldDetails.fieldType === 'energyRating'">
        <!-- <DisplayEnergyRating :value="currentProperty[fieldDetails.fieldKey]"></DisplayEnergyRating> -->
      </span>
      <span v-else>{{ displayVal }}</span>
    </span>
  </div>
</template>
<script>
// import _ from 'lodash'
// import DisplayResalesPrice from '@jsroot/shared/components/DisplayResalesPrice'
// import DisplayPriceLegacy from '@jsroot/shared/components/DisplayPriceLegacy'
// import DisplayFee from '@jsroot/shared/components/DisplayFee'
// import DisplayEnergyRating from '@jsroot/shared/components/DisplayEnergyRating'
export default {
  components: {
    // DisplayEnergyRating,
    // DisplayResalesPrice,
    // DisplayFee
  },
  // props: ['currentProperty', 'fieldDetails', 'isPromotion'],
  props: {
    isPromotion: {
      type: Boolean,
      default: false,
    },
    fieldDetails: {
      type: Object,
      default: () => { },
    },
    currentProperty: {
      type: Object,
      default: () => { },
    },
  },
  data: () => ({}),
  mounted: function () { },
  computed: {
    displayVal() {
      let displayVal = this.currentProperty[this.fieldDetails.fieldKey]
      if (displayVal) {
        if (
          ['Built', 'GardenPlot', 'Terrace'].includes(
            this.fieldDetails.fieldKey
          )
        ) {
          displayVal = displayVal + 'm²'
        }
        return displayVal
      } else {
        return 'N/A'
        // if (this.$store.state.coreStore.currentLocale === 'en') {
        //   return 'Unknown'
        // } else {
        //   return 'N/A'
        // }
      }
    }
  }
}
</script>
<style scoped>

</style>
