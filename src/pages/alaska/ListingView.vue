<template>
  <div :key="$route.name" class="listing-view-ctr">
    <div class="col-sm-12">
      <h3 class="text-gray text-center">
        Detached Villa for sale in Torremolinos
        <!-- {{ currentListing.title }} -->
      </h3>
    </div>
    <div class="row q-py-lg">
      <div class="col-12">
        <ViewContainer :currentListing="currentListing"></ViewContainer>
      </div>
    </div>
  </div>
</template>
<script>
import ViewContainer from "components/listings/ListingViewContainer.vue"
import { defineComponent, ref } from "vue"
// import { useQuery } from "@urql/vue"
// import { useRouter, useRoute } from "vue-router"
export default defineComponent({
  name: "ListingView",
  props: {
    thm: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  components: {
    ViewContainer,
  },
  computed: {
    // subHeaderBgImgUrl() {
    //   return "https://cdn.resales-online.com/public/qqjj8eevfi/properties/1db169c40fc411eda97d0217bc231ef4/w1200/1-7980e48d732b6fc85c14b43b94d2aa54.jpg"
    // },
    currentListing() {
      let currentListing = {}
      // if (this.gqlError) {
      //   this.$q.notify({
      //     color: "negative",
      //     position: "top",
      //     message: this.gqlError.message,
      //     icon: "report_problem",
      //   })
      // } else {
      //   currentListing = this.gqlData ? this.gqlData.findProperty : []
      // }
      return currentListing
    },
  },
  // setup() {
  //   const route = useRoute()
  //   const listingSlug = route.params.listingSlug
  //   const publicLocale = ref(route.params.publicLocale)
  //   const result = useQuery({
  //     variables: {
  //       publicLocale,
  //     },
  //     query: `
  //       query ($publicLocale: String! ) {
  //         findProperty(id: "${listingSlug}", locale: $publicLocale) {
  //           id,
  //           propPhotos {
  //             createdAt
  //             image
  //           },
  //           extrasForDisplay,
  //           plotArea,
  //           priceSaleCurrentCents,
  //           priceRentalMonthlyCurrentCents,
  //           countBathrooms,
  //           countBedrooms,
  //           streetAddress,
  //           latitude,
  //           longitude,
  //           title,
  //           description
  //         }
  //       }
  //     `,
  //   })
  //   return {
  //     gqlFetching: result.fetching,
  //     gqlData: result.data,
  //     gqlError: result.error,
  //   }
  // },
})
</script>
