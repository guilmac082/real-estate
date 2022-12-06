<template>
  <div
    v-if="subHeaderReady"
    :style="`background-image: ${bgUrl}`"
    class="pwb-subhead-card"
  >
    <div class="q-my-none q-py-xl" :style="bgStyle">
      <div class="row q-my-xl q-py-none">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
          <h3 style="margin-top: 10px" class="text-center text-white text-h3 q-my-md">
            PWB
            <!-- <q-img
              :src="subHeaderLogoUrl"
              style="max-width: 80px; height: 55px; margin-bottom: 10px"
            >
            </q-img> -->
            {{ subHeaderMainText }} <br />
          </h3>
          <div v-if="contentConfig.searchBar">
            <!-- <HeroSearchForm></HeroSearchForm> -->
          </div>
          <!-- <div class="text-center main_line animation_2" style="font-size:65px;">
              Luxury Listings
            </div> -->
        </div>
      </div>
    </div>
  </div>
  <div :style="`height:${subHeaderHeight}`" v-else></div>
</template>
<script>
// import subHeaderLogoUrl from "assets/images/llm/logo-180x180-bg-black.jpeg"
import defBgImgUrl from "assets/1.jpg"
// import defBgImgUrl from "assets/images/llm/terrace-with-sea-and-greenry-wide.jpeg"
// import HeroSearchForm from "components/llm/HeroSearchForm.vue"
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "PwbSubHeader",
  created() {
    // this.subHeaderLogoUrl = subHeaderLogoUrl
    this.defBgImgUrl = defBgImgUrl
  },
  components: {
    // HeroSearchForm,
  },
  data() {
    return {
      subHeaderHeight: "400px",
    }
  },
  props: {
    subHeaderBgImgUrl: {
      type: String,
    },
    subHeaderTitle: {
      type: String,
    },
    contentConfig: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    subHeaderReady() {
      if (["rForSaleListing", "rForRentListing"].includes(this.$route.name)) {
        return !!this.subHeaderTitle
      } else {
        return true
      }
    },
    bgStyle() {
      const bgShade = ".5"
      const bgStyle = `background-color: rgba(0, 0, 0,${bgShade});min-height:${this.subHeaderHeight};`
      return bgStyle
    },
    bgUrl() {
      if (this.subHeaderBgImgUrl) {
        return `url(${this.subHeaderBgImgUrl})`
      } else {
        return `url(${defBgImgUrl})`
      }
    },
    subHeaderMainText() {
      // if (this.subHeaderTitle) {
      //   return this.subHeaderTitle
      // }
      let subHeaderMainText =
        this.subHeaderTitle || "The Finest Listing Agents In California"
      switch (this.$route.name) {
        case "rLocaleAboutUsPage":
          subHeaderMainText = "About Us"
          break
        case 1:
          subHeaderMainText = "Sell"
          break
        // default:
        //   subHeaderMainText = 'Nothing'
        //   break
      }
      return subHeaderMainText
    },
  },
})
</script>
<style>
.pwb-subhead-card {
  /* background-image: v-bind(bgUrl); */
  background-size: cover;
  background-position: center;
  background-attachment: revert;
  background-repeat: no-repeat;
}
</style>
