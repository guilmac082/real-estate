<template>
  <div class>
    <div class="text-xs-left"></div>
    <q-select
      square
      class="no-border-radius"
      style="border-radius: 0px"
      color="gray"
      bg-color="white"
      :options="selectItems"
      v-model="localFieldValue"
      :label="localiseProvider.$ft(fieldDetails.labelTextTKey)"
      @update:model-value="fieldChangeHandler"
      option-label="name"
      option-value="value"
      outlined
    ></q-select>
  </div>
</template>
<script>
// import _ from "lodash"
export default {
  inject: ["localiseProvider"],
  props: {
    currentFieldValue: {
      type: String,
      default: "",
    },
    fieldDetails: {
      type: Object,
      default: () => {},
    },
    fieldOptions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      localFieldValue: "",
    }
  },
  watch: {
    currentFieldValue: {
      handler(newValue, oldVal) {
        if (newValue) {
          this.localFieldValue = newValue
        } else {
          // let defaultValue = this.fieldDetails.defaultValue
          // this.selectItems.find(item => item.value === defaultValue)
          this.localFieldValue = this.fieldDetails.defaultValue
        }
        // if (["city", "maxPrice"].includes(this.fieldDetails.fieldName)) {
        //   this.localFieldValue = newValue
        // } else {
        //   this.localFieldValue = this.fieldDetails.optionsKey + "." + newValue
        // }
      },
      // deep: true,
      immediate: true,
    },
  },
  computed: {
    selectItems() {
      let rawVals = []
      const optionsType = "simple_list"
      if (this.fieldDetails.optionsValues) {
        rawVals = this.fieldDetails.optionsValues
        // } else {
        //   optionsType = "object_list"
        //   rawVals = this.fieldOptions[this.fieldDetails.optionsKey] || []
      }
      const selectItems = [{ name: "", value: "" }]
      // let i18n = this.$i18n
      // let fieldName = this.fieldDetails.fieldName
      let isCurrency = false
      if (
        [
          "forRentPriceFrom",
          "forRentPriceTill",
          "forSalePriceFrom",
          "forSalePriceTill",
        ].includes(this.fieldDetails.fieldName)
      ) {
        isCurrency = true
      }
      rawVals.forEach(function (optionKey) {
        let name = optionKey
        let val = optionKey
        if (isCurrency) {
          // name = $n(optionKey, "currency", "EUR")
          // don't think I have $i18n setup for above
          name = "€" + optionKey
          // below removes comma
          val = optionKey.replace(/,/g, "")
        } else {
          if (optionsType === "object_list") {
            // name = _.startCase(optionKey.label)
            val = optionKey.global_key
          }
        }
        selectItems.push({
          name,
          value: val,
        })
      })
      return selectItems
      // if (isCurrency) {
      //   return selectItems
      // } else {
      //   return _.sortBy(selectItems, "name")
      // }
    },
  },
  methods: {
    fieldChangeHandler(selectItem) {
      const newValue = selectItem.value
      this.$emit("selectChanged", this.fieldDetails, newValue)
    },
  },
}
</script>
