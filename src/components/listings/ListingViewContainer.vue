<template>
  <div class="row q-col-gutter-sm">
    <!-- <div v-if="pageFrameAComponent" :class="pageFrameAComponent.containerClasses">
      <component :is="pageFrameAComponent.name" :thm="thm"></component>
    </div> -->
    <!-- <div class="col-xs-12 col-sm-12">
      <GalleryOf3Images :currentListing="currentListing"></GalleryOf3Images>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-9">
      <div v-scroll="onScroll"
           class="">
        <ListingCarousel1 :showThumbnails="listingScrolled"
                          :currentListing="currentListing"></ListingCarousel1>
      </div>
    </div> -->
    <!-- <div class="col-xs-12 col-sm-12 col-md-3">
      <ListingEnquiry :currentListing="currentListing"></ListingEnquiry>
    </div> -->
    <div class="col-xs-12 col-sm-12">
      <div class="listing-text q-pa-sm">
        <div class="q-py-md row no-wrap items-center justify-arou">
          <div class="text-h4 q-pr-lg">
            <ConvertableCurrencyDisplay
              :priceInCents="priceInCents"
              :originalCurrency="currentListing.currency || 'EUR'"
            >
            </ConvertableCurrencyDisplay>
          </div>
          <div class="flex-1 inline-flex items-center q-pr-sm q-mt-md">
            <q-icon size="1rem">
              <svg
                class="h-6 w-6 text-gray-600 fill-current mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"
                ></path>
              </svg>
            </q-icon>
            <div style="display: inline; margin-left: 8px">
              <span class="text-gray-900 text-weight-bold">
                {{ currentListing.countBedrooms }}
              </span>
              Bedrooms
            </div>
          </div>
          <div class="flex-1 inline-flex items-center q-pl-sm q-mt-md">
            <q-icon size="1rem">
              <svg
                class="h-6 w-6 text-gray-600 fill-current mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                ></path>
              </svg>
            </q-icon>
            <div style="display: inline; margin-left: 8px">
              <span class="text-gray-900 text-weight-bold">
                {{ currentListing.countBathrooms }}
              </span>
              Bathrooms
            </div>
          </div>
        </div>
        <q-separator />

        <div class="col-xs-12">
          <h5
            class="font-medium text-center title-font text-gray-900 q-py-sm q-mt-xl q-mb-xs"
          >
            Description
            <br />
          </h5>
          <hr class="custom-hr-listing" />
        </div>

        <div class="text-gray text-body1 text-weight-light q-py-lg">
          <!-- {{ currentListing.description }} -->
          Impressive semi-detached villa with 4 bedrooms that we find in one of the most
          sought after areas in Torremolinos, El Pinar, surrounded by trees and nature,
          where we can walk to all the amenities of the area and the beach. The house is
          built on three floors, with a covered parking area for two cars. On the entrance
          floor, we have a spacious living room, a glazed terrace as an office, a
          bathroom, a fully equipped and furnished luxury kitchen, with access to the
          wonderful garden, with several rooms where you can enjoy the sun and free time,
          swimming pool, jacuzzi and sauna. We go up to the first floor where we have the
          bedrooms, bathrooms, terraces, one of the rooms with a private lounge and
          private terrace. In the basement there is a cellar, a dining room, billiards and
          office and storage areas. Ideal to live, enjoy nature and tranquility. Features:
          - Private pool and garden - Ready to move in - Walking distance to all amenities
          in the area and the beach
        </div>
        <ListingDetails></ListingDetails>
        <ListingFeatures></ListingFeatures>
        <div
          v-if="
            currentListing.extrasForDisplay && currentListing.extrasForDisplay.length > 0
          "
          class="text-gray text-body1 q-py-lg"
        >
          <div class="text-h6">Features</div>
          <div>
            <q-item
              v-for="feature in currentListing.extrasForDisplay"
              :key="feature"
              class="q-pl-none q-mb-sm border-gray-800 bg-gray-200 border-2"
            >
              <q-item-section side>
                <q-icon color="green" name="done" />
              </q-item-section>
              <q-item-section class="q-mr-sm">
                <q-item-label class="text-weight-medium text-h6"> </q-item-label>
                {{ feature }}
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-xs-12 col-sm-12">
      <SocialSharing :sharingTitle="currentListing.title"></SocialSharing>
    </div>
    <div class="col-xs-12 col-sm-12">
      <SelectedListings subHeaderTitle="Similar Properties"></SelectedListings>
    </div> -->
    <div class="col-xs-12 col-sm-12">
      <div class="iframe-map">
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBPeKxIfOXlq969Qd4n10kbnVYnTVZ6sLY&amp;q=Torremolinos,+España"
          allowfullscreen="allowfullscreen"
          style="border: 0px"
        ></iframe>
      </div>
      <!-- <MapViewContainer :singleLatLngDetails="currentListing">
      </MapViewContainer> -->
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue"
import { debounce } from "quasar"
import ListingDetails from "components/listings/ListingDetails.vue"
import ListingFeatures from "components/listings/ListingFeatures.vue"
// import ListingCarousel1 from "components/listings/ListingCarousel1.vue"
// import GalleryOf3Images from "components/listings/GalleryOf3Images.vue"
// import ListingEnquiry from "components/listings/ListingEnquiry.vue"
import ConvertableCurrencyDisplay from "components/widgets/ConvertableCurrencyDisplay.vue"
// import MapViewContainer from 'components/widgets/MapViewContainer.vue'
// import SocialSharing from "components/widgets/SocialSharing.vue"
// import SelectedListings from "components/listings/SelectedListings.vue"
// import usePageFrames from "src/compose/usePageFrames.js"
export default {
  components: {
    ListingDetails,
    ListingFeatures,
    // MapViewContainer,
    ConvertableCurrencyDisplay,
    // ListingCarousel1,
    // ListingEnquiry,
    // GalleryOf3Images,
    // SocialSharing,
    // SelectedListings,
  },
  // inject: ["sitedetailsProvider"],
  setup() {
    const listingScrolled = ref(false)
    function onScroll(position) {
      listingScrolled.value = true
      // when this method is invoked then it means user
      // has scrolled the page to `position`
      //
      // `position` is an Integer designating the current
      // scroll position in pixels.
    }

    // const thm = context.sitedetailsProvider.state.theme
    // const thmFrames = {}// thm.frames || {}
    // const { getPageFrameComponent } = usePageFrames()
    return {
      // getPageFrameComponent,
      listingScrolled,
      onScroll: debounce(onScroll, 200), // debounce for 200ms
    }
  },
  props: {
    currentListing: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data: () => ({
    // slideModel: 1,
  }),
  methods: {},
  watch: {},
  computed: {
    // pageFrameAComponent() {
    //   const pageName = "listingsPage"
    //   const frameName = "pageFrameA"
    //   return this.getPageFrameComponent(pageName, frameName)
    // },
    priceInCents() {
      return "65000000"
      // if (this.$route.name === 'rForRentListing') {
      //   return this.currentListing.priceRentalMonthlyCurrentCents
      // } else {
      //   return this.currentListing.priceSaleCurrentCents
      // }
    },
  },
  mounted: function () {},
}
</script>
<style></style>
