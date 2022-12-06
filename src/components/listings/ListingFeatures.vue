<template>
  <div class="">
    <div class="row q-col-gutter-sm">
      <div class="col-xs-12">
        <h5
          class="font-medium text-center title-font text-gray-900 q-py-sm q-mt-xl q-mb-xs"
        >
          Characteristics
          <br />
        </h5>
        <hr class="custom-hr-characteristics" />
      </div>
      <div
        v-for="(cat, index) in listingCats"
        :key="index"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      >
        <div class="q-mt-lg">
          <div class="text-body1">
            {{ cat ? cat.Type : "whatever" }}
          </div>
          <div>
            <template v-if="Array.isArray(cat.Value)">
              <q-item
                v-for="(label, index) in cat.Value"
                :key="index"
                class="q-pl-none q-mb-sm border-gray-800 bg-gray-200 border-2"
              >
                <q-item-section side>
                  <q-icon color="green" name="done" />
                </q-item-section>
                <q-item-section class="q-mr-sm">
                  <q-item-label class="text-weight-medium text-body2">
                    {{ label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
              <!-- <div v-for="(label, index) in cat.Value" :key="index" class="category-col pa-0">
                <span>{{ label }}</span>
              </div> -->
            </template>
            <div v-else class="category-col pa-0">
              <q-item class="q-pl-none q-mb-sm border-gray-800 bg-gray-200 border-2">
                <q-item-section side>
                  <q-icon color="green" name="done" />
                </q-item-section>
                <q-item-section class="q-mr-sm">
                  <q-item-label class="text-weight-medium text-body2">
                    <span>{{ cat.Value }}</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="
      extrasForDisplay &&
      extrasForDisplay.length > 0
    " class="text-gray text-body1 q-py-lg">
      <div>
        <q-item v-for="feature in extrasForDisplay" :key="feature"
          class="q-pl-none q-mb-sm border-gray-800 bg-gray-200 border-2">
          <q-item-section side>
            <q-icon color="green" name="done" />
          </q-item-section>
          <q-item-section class="q-mr-sm">
            <q-item-label class="text-weight-medium text-h6">
            {{ feature }}
          </q-item-section>
        </q-item>
      </div>
    </div> -->
  </div>
</template>
<script>
// import { ref, toRef, watch } from 'vue'
// import loSortBy from 'lodash/sortBy'
export default {
  // setup(props) {
  //   return {
  //   }
  // },
  computed: {
    listingCats() {
      const listingCats = this.PropertyFeatures ? this.PropertyFeatures.Category : []
      // // fecking resales sometimes return an array and sometimes not
      // if (Array.isArray(listingCats)) {
      //   // _.groupBy(rawVals, "group_key")
      //   const orderedListingCats = loSortBy(listingCats, [
      //     function (cat) {
      //       return Array.isArray(cat.Value) ? cat.Value.length : 0
      //     },
      //   ])
      //   // Fecking dumbarse resales - sometimes the value within
      //   // a single cat will be an array and sometimes a single string!!
      //   // Hence the awkward sorting function above
      //   return orderedListingCats
      // } else {
      //   return [listingCats]
      // }
      return listingCats
    },
    // extrasForDisplay() {
    //   const extrasForDisplay = []
    //   const propertyFeatureKeys = Object.keys(this.PropertyFeatures)
    //   propertyFeatureKeys.forEach(function (picObject, index) {
    //     const imageUrl = picObject.PictureURL
    //     extrasForDisplay.push({
    //       thumb: imageUrl,
    //       src: imageUrl,
    //       alt_text: '',
    //     })
    //   })
    //   return extrasForDisplay
    // },
  },
  data() {
    return {
      PropertyFeatures: {
        Category: [
          {
            Type: "Setting",
            Value: ["Close To Shops", "Close To Sea", "Close To Schools"],
          },
          {
            Type: "Orientation",
            Value: ["South East"],
          },
          {
            Type: "Pool",
            Value: ["Private"],
          },
          {
            Type: "Climate Control",
            Value: ["Hot A/C", "Fireplace"],
          },
          {
            Type: "Views",
            Value: ["Panoramic", "Garden"],
          },
          {
            Type: "Features",
            Value: ["Private Terrace", "Sauna", "Jacuzzi"],
          },
          {
            Type: "Furniture",
            Value: ["Not Furnished"],
          },
          {
            Type: "Kitchen",
            Value: ["Fully Fitted"],
          },
          {
            Type: "Garden",
            Value: ["Private"],
          },
          {
            Type: "Parking",
            Value: ["Covered"],
          },
        ],
      },
    }
  },
  props: {},
}
</script>
