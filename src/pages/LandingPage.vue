<template>
  <div>
    <q-drawer
      side="right"
      v-model="menu"
      class="bg-white"
      overlay
      style="z-index: 8000; height: 100vh"
    >
      <q-scroll-area class="fit text-right">
        <q-list>
          <div class="row">
            <div class="col-12">
              <q-btn
                @click="menu = false"
                icon="close"
                round
                class="float-right text-black"
                flat
              />
            </div>
          </div>
          <q-item class="flex flex-center" clickable> HOME </q-item>
          <q-item class="flex flex-center" clickable> PWB DEVELOPMENTS </q-item>
          <q-item class="flex flex-center" clickable> PWB HOMES </q-item>
          <q-item class="flex flex-center" clickable> PWB RENTALS </q-item>
          <q-item class="flex flex-center" clickable> PWB CONCIERGE </q-item>
          <q-item class="flex flex-center" clickable> OUR TEAM </q-item>
          <q-item class="flex flex-center" clickable> SERVICES </q-item>
          <q-item class="flex flex-center" clickable> NEWS & EVENTS </q-item>
          <div class="flex flex-center q-pb-lg">
            <q-btn
              size="17px"
              class="text-capitalize"
              outline
              color="black"
              label="CONTACT"
            />
          </div>
          <q-separator />
          <div class="q-py-xs q-mt-lg flex flex-center">
            <q-icon size="sm" class="q-mr-sm" name="school" /> ACADEMY
          </div>
          <div class="q-py-xs flex flex-center">
            <q-icon size="sm" class="q-mr-sm" name="logout" /> AGENTS
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page>
      <q-scroll-observer @scroll="onScroll" />
      <component :is="subHeaderFrame.frameComponent"></component>
      <!-- <component :is="bodyFrame.frameComponent"></component> -->
      <div style="margin: 80px 0 30px 0">
        <div
          class="q-my-none text-center"
          style="margin-right: 9rem; font-size: 30px; font-weight: 300; line-height: 1"
        >
          REAL ESTATE AGENCY
        </div>
        <div
          class="q-my-none text-center text-grey-9"
          style="font-size: 30px; font-weight: 900; line-height: 1"
        >
          IN LOS ANGELES
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 q-my-xl">
          <div
            class="text-right bg-grey-9 text-white q-pr-xs"
            style="
              margin-right: 4.5rem;
              font-size: 30px;
              font-weight: 900;
              line-height: 1;
            "
          >
            WE
          </div>
          <div
            class="text-right"
            style="
              margin-right: 4.1rem;
              font-size: 30px;
              font-weight: 100;
              line-height: 1;
            "
          >
            ARE
          </div>
          <div
            class="text-right"
            style="
              margin-right: 1.1rem;
              font-size: 30px;
              font-weight: 900;
              line-height: 1;
            "
          >
            PWB
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-px-lg q-my-xl">
          <p class="text-justify text-grey-9" style="font-size: 17px">
            <span class="text-h6 text-weight-medium">PWB</span> is one of the leading real
            estate agencies on the California, focused on the promotion, marketing and
            sale of new projects. From the center of Los Angeles and nearby areas.
            Discover our wide selection of luxury Villas, Apartments and Penthouses in the
            most exclusive areas of the California.
          </p>
        </div>
      </div>
      <div class="q-mt-lg">
        <div
          class="text-center text-subtitle1"
          style="margin-right: 5rem; font-size: 30px; font-weight: 300"
        >
          FEATURED PROPERTIES
        </div>
        <div
          class="q-my-none text-center text-grey-9"
          style="font-size: 30px; font-weight: 900; line-height: 1"
        >
          FOR SALE IN LOS ANGELES
        </div>
        <div class="q-mt-xl">
          <q-carousel
            v-if="!$q.platform.is.mobile"
            v-model="featured_slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            height="390px"
            control-text-color="grey-7"
            class="q-mt-md bg-transparent"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div class="row fit q-gutter-xs q-col-gutter-md no-wrap">
                <div
                  style="height: 270px"
                  v-for="i in 4"
                  :key="i"
                  class="col-lg-3 col-md-3 col-sm-12 col-xs-12"
                >
                  <q-img class="rounded-borders full-height" src="../assets/featured.jpg">
                    <div class="full-width bg-transparent" style="padding: 10px">
                      <q-chip
                        color="black"
                        class="float-right text-white text-weight-medium"
                        size="14px"
                        dense
                        square
                        label="FEATURED"
                      />
                      <q-chip
                        style="background-color: #5d5858"
                        class="float-right text-white text-weight-medium"
                        size="14px"
                        dense
                        square
                        label="FOR SALE"
                      />
                    </div>
                    <div
                      style="padding: 12px"
                      class="bg-transparent absolute-bottom-left custom-caption"
                    >
                      <div style="font-size: 18px" class="text-white text-weight-bold">
                        2.500.000€
                      </div>
                    </div>
                  </q-img>
                  <div class="text-center q-mt-sm">Brand New Villa in Location</div>
                  <div class="text-center">
                    <span class="">
                      <q-icon class="text-weight-bolder" name="bed" /> 4
                    </span>
                    <span class="">
                      <q-icon class="q-pl-xs text-weight-bolder" name="arrow_upward" />
                      4
                    </span>
                    <span class="">
                      <q-icon class="q-pl-xs text-weight-bolder" name="area_chart" />
                      280.5 mts
                    </span>
                  </div>
                  <div class="text-center text-uppercase">Villa</div>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div class="row fit q-gutter-xs q-col-gutter-md no-wrap">
                <div
                  style="height: 270px"
                  v-for="i in 4"
                  :key="i"
                  class="col-lg-3 col-md-3 col-sm-12 col-xs-12"
                >
                  <q-img
                    class="rounded-borders full-height"
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                  >
                    <div class="full-width bg-transparent" style="padding: 10px">
                      <q-chip
                        color="black"
                        class="float-right text-white text-weight-medium"
                        size="14px"
                        dense
                        square
                        label="FEATURED"
                      />
                      <q-chip
                        style="background-color: #5d5858"
                        class="float-right text-white text-weight-medium"
                        size="14px"
                        dense
                        square
                        label="FOR SALE"
                      />
                    </div>
                    <div
                      style="padding: 12px"
                      class="bg-transparent absolute-bottom-left custom-caption"
                    >
                      <div style="font-size: 18px" class="text-white text-weight-bold">
                        2.500.000€
                      </div>
                    </div>
                  </q-img>
                  <div class="text-center q-mt-sm">Brand New Villa in Location</div>
                  <div class="text-center">
                    <span class="">
                      <q-icon class="text-weight-bolder" name="bed" /> 4
                    </span>
                    <span class="">
                      <q-icon class="q-pl-xs text-weight-bolder" name="arrow_upward" />
                      4
                    </span>
                    <span class="">
                      <q-icon class="q-pl-xs text-weight-bolder" name="area_chart" />
                      280.5 mts
                    </span>
                  </div>
                  <div class="text-center text-uppercase">Villa</div>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
          <q-carousel
            v-if="$q.platform.is.mobile"
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            height="420px"
            class="q-mt-sm bg-transparent"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div class="row fit q-gutter-xs q-col-gutter no-wrap">
                <div
                  style="height: 270px"
                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full-height"
                >
                  <q-img class="rounded-borders" src="../assets/featured.jpg">
                    <div class="full-width bg-transparent" style="padding: 10px">
                      <q-chip
                        color="black"
                        class="float-right text-white text-weight-medium"
                        size="14px"
                        dense
                        square
                        label="FEATURED"
                      />
                      <q-chip
                        style="background-color: #5d5858"
                        class="float-right text-white text-weight-medium"
                        size="14px"
                        dense
                        square
                        label="FOR SALE"
                      />
                    </div>
                    <div
                      style="padding: 12px"
                      class="bg-transparent absolute-bottom-left custom-caption"
                    >
                      <div style="font-size: 18px" class="text-white text-weight-bold">
                        2.500.000€
                      </div>
                    </div>
                  </q-img>
                  <div class="text-center q-mt-sm">Brand New Villa in Location</div>
                  <div class="text-center">
                    <span class="">
                      <q-icon class="text-weight-bolder" name="bed" /> 4
                    </span>
                    <span class="">
                      <q-icon class="q-pl-xs text-weight-bolder" name="arrow_upward" />
                      4
                    </span>
                    <span class="">
                      <q-icon class="q-pl-xs text-weight-bolder" name="area_chart" />
                      280.5 mts
                    </span>
                  </div>
                  <div class="text-center text-uppercase">Villa</div>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div class="row fit q-gutter-xs q-col-gutter no-wrap">
                <div
                  style="height: 270px"
                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12 full-height"
                >
                  <q-img class="rounded-borders" src="../assets/featured.jpg">
                    <div class="full-width bg-transparent" style="padding: 10px">
                      <q-chip
                        color="black"
                        class="float-right text-white text-weight-medium"
                        size="14px"
                        dense
                        square
                        label="FEATURED"
                      />
                      <q-chip
                        style="background-color: #5d5858"
                        class="float-right text-white text-weight-medium"
                        size="14px"
                        dense
                        square
                        label="FOR SALE"
                      />
                    </div>
                    <div
                      style="padding: 12px"
                      class="bg-transparent absolute-bottom-left custom-caption"
                    >
                      <div style="font-size: 18px" class="text-white text-weight-bold">
                        2.500.000€
                      </div>
                    </div>
                  </q-img>
                  <div class="text-center q-mt-sm">Brand New Villa in Location</div>
                  <div class="text-center">
                    <span class="">
                      <q-icon class="text-weight-bolder" name="bed" /> 4
                    </span>
                    <span class="">
                      <q-icon class="q-pl-xs text-weight-bolder" name="arrow_upward" />
                      4
                    </span>
                    <span class="">
                      <q-icon class="q-pl-xs text-weight-bolder" name="area_chart" />
                      280.5 mts
                    </span>
                  </div>
                  <div class="text-center text-uppercase">Villa</div>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="q-pa-md q-my-xl q-mx-md">
        <div class="q-col-gutter-md row items-start">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-img src="../assets/EN-ES-Home-East-Marbella.jpg" class="height_330">
              <div class="absolute-full text-subtitle2 flex flex-center">
                <div class="text-uppercase text-center text-h6">East Los Angeles</div>
              </div>
            </q-img>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-img src="../assets/EN-ES-Home-Puerto-Banus.jpg" class="height_330">
              <div class="absolute-full text-subtitle2 flex flex-center">
                <div>
                  <div class="text-uppercase text-center text-h6">Golden Mile</div>
                  <div class="text-uppercase text-center text-body2">
                    Monterey - Marina
                  </div>
                </div>
              </div>
            </q-img>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-img src="../assets/EN-ES-Home-Estepona-New-Golden.png" class="height_330">
              <div class="absolute-full text-subtitle2 flex flex-center">
                <div>
                  <div class="text-uppercase text-center text-h6">New Golden</div>
                  <div class="text-uppercase text-center text-h6">Mile</div>
                </div>
              </div>
            </q-img>
          </div>
        </div>
      </div>
      <div style="margin: 90px 0 90px 0">
        <div class="top_triangle"></div>
        <div style="background-color: #2a2a2a" class="row text-white">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex flex-center">
            <q-img src="../assets/edge.jpg" width="400px" />
          </div>
          <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-px-md">
            <div
              class="q-my-none"
              style="color: #00ccff; font-size: 30px; font-weight: 900; line-height: 1"
            >
              HOMES
            </div>
            <div
              class="q-my-none"
              style="font-size: 30px; font-weight: 900; line-height: 1"
            >
              IN CALIFORNIA
            </div>
            <p class="q-py-md">Complete the form to receive our magazine totally free.</p>
            <div class="row q-col-gutter-md">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  bg-color="white"
                  color="white"
                  dense
                  label="*Name"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  bg-color="white"
                  color="white"
                  dense
                  label="*Last Name"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  bg-color="white"
                  color="white"
                  dense
                  label="*Email"
                ></q-input>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  bg-color="white"
                  color="white"
                  dense
                  label="*Phone"
                ></q-input>
              </div>
            </div>
            <div class="q-py-sm">
              <q-checkbox
                dense
                keep-color
                class="q-mr-sm"
                v-model="accept"
                color="white"
              />
              I accept the Privacy policy
            </div>
            <div>
              <q-btn
                size="17px"
                class="text-capitalize"
                outline
                rounded
                color="white"
                label="Send"
              />
            </div>
          </div>
        </div>
        <div class="bottom_triangle"></div>
      </div>
      <!-- <div>
        <div class="text-center">
          <div
            class="text-subtitle1"
            style="
              margin-right: 14rem;
              font-size: 30px;
              font-weight: 300;
              line-height: 1;
            "
          >
            EXCLUSIVE
          </div>
          <div
            class="text-weight-bold text-grey-9 q-pb-xl"
            style="font-size: 30px; font-weight: 900; line-height: 1"
          >
            NEW DEVELOPMENTS
          </div>
        </div>
        <div class="q-mb-lg"></div>
      </div> -->
      <div style="margin: 80px 0 30px 0">
        <div
          class="q-my-none text-center"
          style="margin-right: 8rem; font-size: 30px; font-weight: 300; line-height: 1"
        >
          OUR
        </div>
        <div
          class="q-my-none text-center text-grey-9"
          style="font-size: 30px; font-weight: 900; line-height: 1"
        >
          SERVICES
        </div>
        <div
          class="q-my-none text-center"
          style="font-size: 30px; font-weight: 900; line-height: 1"
        >
          <span class="inline-block vertical-middle" style="font-size: 40px">•</span>
          <span class="inline-block vertical-middle q-ml-xs" style="font-size: 30px"
            >•</span
          >
          <span class="inline-block vertical-middle q-ml-xs" style="font-size: 20px"
            >•</span
          >
        </div>
      </div>
      <div class="row q-pb-xl">
        <div class="custom_margin" :class="$q.platform.is.mobile ? 'col-12' : 'col'">
          <q-card flat class="flex flex-center bg-transparent text-center">
            <q-card-section class="flex flex-center full-width">
              <div class="circle flex flex-center">
                <q-icon
                  size="60px"
                  name="business"
                  color="grey-9"
                  text-color="red"
                ></q-icon>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-grey-9 text-weight-bold">
                PWB<br />
                DEVELOPMENTS
              </div>
            </q-card-section>
            <q-card-section
              :class="$q.platform.is.mobile ? 'height_140' : 'height_180'"
              class="text-justify q-pt-xs"
            >
              As one of the leading Real Estate firm on California, we are specialized in
              the marketing, promotion and sales of new-build and off plan developments in
              Los Angeles, Benahavis and Estepona.
            </q-card-section>
            <q-card-section>
              <q-btn
                size="17px"
                class="custom_border text-capitalize"
                outline
                rounded
                color="black"
                label="More information"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="custom_margin" :class="$q.platform.is.mobile ? 'col-12' : 'col'">
          <q-card flat class="flex flex-center bg-transparent text-center">
            <q-card-section class="flex flex-center full-width">
              <div class="circle flex flex-center">
                <q-icon size="60px" name="home" color="grey-9" text-color="red"></q-icon>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-grey-9 text-weight-bold">
                PWB<br />
                HOMES
              </div>
            </q-card-section>
            <q-card-section
              :class="$q.platform.is.mobile ? 'height_140' : 'height_180'"
              class="text-justify q-pt-xs"
            >
              Highly qualified division, designed for our clients, it´s not easy to value
              a home, hit the buyer’s profile, choose the right real estate agency to
              sell. With more than 20 years of experience we specialize in residential
              real estate market on California.
            </q-card-section>
            <q-card-section>
              <q-btn
                size="17px"
                class="custom_border text-capitalize"
                outline
                rounded
                color="black"
                label="More information"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="custom_margin" :class="$q.platform.is.mobile ? 'col-12' : 'col'">
          <q-card flat class="flex flex-center bg-transparent text-center">
            <q-card-section class="flex flex-center full-width">
              <div class="circle flex flex-center">
                <q-icon size="60px" name="home" color="grey-9" text-color="red"></q-icon>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-grey-9 text-weight-bold">
                PWB<br />
                RENTALS
              </div>
            </q-card-section>
            <q-card-section
              :class="$q.platform.is.mobile ? 'height_140' : 'height_180'"
              class="text-justify q-pt-xs"
            >
              Homeowners always desire to have the best professionals to advise us
              appropriately, choose the best candidate to rent out our home, seek maximum
              profitability and avoid problems with our tenants. At PWB we want to help
              you achieve this.
            </q-card-section>
            <q-card-section>
              <q-btn
                size="17px"
                class="custom_border text-capitalize"
                outline
                rounded
                color="black"
                label="More information"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="custom_margin" :class="$q.platform.is.mobile ? 'col-12' : 'col'">
          <q-card flat class="flex flex-center bg-transparent text-center">
            <q-card-section class="flex flex-center full-width">
              <div class="circle flex flex-center">
                <q-icon
                  size="60px"
                  name="person"
                  color="grey-9"
                  text-color="red"
                ></q-icon>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-grey-9 text-weight-bold">
                PWB<br />
                CONCIERGE
              </div>
            </q-card-section>
            <q-card-section
              :class="$q.platform.is.mobile ? 'height_140' : 'height_180'"
              class="text-justify q-pt-xs"
            >
              We have always dreamed of some services associated with our home, find
              someone to take care of the maintenance and management of our day to day, we
              always try to find the comfort and safety of our families; discover our
              Concierge Service, exclusively for our clients.
            </q-card-section>
            <q-card-section>
              <q-btn
                size="17px"
                class="custom_border text-capitalize"
                outline
                rounded
                color="black"
                label="More information"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="custom_margin" :class="$q.platform.is.mobile ? 'col-12' : 'col'">
          <q-card flat class="flex flex-center bg-transparent text-center">
            <q-card-section class="flex flex-center full-width">
              <div class="circle flex flex-center">
                <q-icon
                  size="60px"
                  name="school"
                  color="grey-9"
                  text-color="red"
                ></q-icon>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-grey-9 text-weight-bold">
                PWB<br />
                ACADEMY
              </div>
            </q-card-section>
            <q-card-section
              :class="$q.platform.is.mobile ? 'height_140' : 'height_180'"
              class="text-justify q-pt-xs"
            >
              PWB wants to contribute to improve our real estate sector by gathering the
              best professionals from different fields such as Architecture, Construction,
              Interior Design, Promoters, Legal, Marketing or Sales, where we seek to
              achieve excellence in each and all of them.
            </q-card-section>
            <q-card-section>
              <q-btn
                size="17px"
                class="custom_border text-capitalize"
                outline
                rounded
                color="black"
                label="More information"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from "vue"
// import PwbSubHeader from "src/components/theme-frames/florida/PwbSubHeader.vue";
export default defineComponent({
  name: "LandingPage",
  // components: { PwbSubHeader },
  data() {
    return {
      // themeForFrames: "mega",
      // themeForFrames: "florida",
    }
  },
  props: {
    themeForFrames: {
      type: String,
      default: "mega",
    },
  },
  mounted() {
    // Trying to use a query string to set the variable used for dynamically
    // loading a component does not work.
    // if (!process.env.SERVER) {
    //   const reqQuery = new URL(document.location).searchParams
    //   const queryThemeName = reqQuery.get("theme")
    //   if (queryThemeName && ["mega", "florida"].includes(queryThemeName)) {
    //     this.themeForFrames = queryThemeName
    //   }
    // }
  },
  computed: {
    subHeaderFrame() {
      const frameComponent = defineAsyncComponent(() =>
        import(
          /* @vite-ignore */ `../components/theme-frames/${this.themeForFrames}/PwbSubHeader.vue`
        )
      )
      return {
        details: {},
        frameComponent,
      }
    },
  },
  setup() {
    const scrollInfo = ref({})
    return {
      menu: ref(false),
      slide: ref(1),
      featured_slide: ref(1),
      slide_exclusive_dev: ref(1),
      type: ref(null),
      accept: ref(false),
      selected_lang: ref("EN"),
      scrollInfo,
      onScroll(info) {
        scrollInfo.value = info
      },
    }
  },
})
</script>
<style>
.q-page-sticky--expand {
  z-index: 7000 !important;
}

.telephone {
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.2;
}

.height_330 {
  height: 330px;
}

.height_180 {
  height: 180px;
}

.height_140 {
  height: 140px;
}

.custom_margin {
  margin: 50px 0 50px 0;
}

.custom_border {
  border: 1px solid black;
}

.circle {
  background-color: #fff;
  border: 2px solid #505050;
  height: 120px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 120px;
}

.top_triangle {
  width: 100%;
  border-bottom: 40px solid #2a2a2a;
  border-left: 97vw solid transparent;
  margin-bottom: -1px;
}

.bottom_triangle {
  width: 100%;
  border-top: 40px solid #2a2a2a;
  border-left: 97vw solid transparent;
  margin-top: -1px;
}

* {
  margin: 0;
  padding: 0;
}

.delayed_toolbar {
  background-color: rgba(1, 1, 1, 0.75);
  height: 90px;
}

@keyframes slideShow {
  0% {
    opacity: 0;
    transform: scale(1);
    -ms-transform: scale(1);
  }

  5% {
    opacity: 1;
  }

  25% {
    opacity: 1;
  }

  30% {
    opacity: 0;
    transform: scale(1.1);
    -ms-transform: scale(1.1);
  }

  100% {
    opacity: 0;
    transform: scale(1);
    -ms-transformm: scale(1);
  }
}

@-o-keyframes slideShow {
  0% {
    opacity: 0;
    -o-transform: scale(1);
  }

  5% {
    opacity: 1;
  }

  25% {
    opacity: 1;
  }

  30% {
    opacity: 0;
    -o-transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -o-transformm: scale(1);
  }
}

@-moz-keyframes slideShow {
  0% {
    opacity: 0;
    -moz-transform: scale(1);
  }

  5% {
    opacity: 1;
  }

  25% {
    opacity: 1;
  }

  30% {
    opacity: 0;
    -moz-transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -moz-transformm: scale(1);
  }
}

@-webkit-keyframes slideShow {
  0% {
    opacity: 0;
    -webkit-transform: scale(1);
  }

  5% {
    opacity: 1;
  }

  25% {
    opacity: 1;
  }

  30% {
    opacity: 0;
    -webkit-transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -webkit-transformm: scale(1);
  }
}

.live_text p {
  animation: typing-erase 5s steps(80, end) infinite, blink-caret 0.5s step-end infinite;
}

.typewriter p {
  width: 0;
  max-width: max-content;
  overflow: hidden;
  border-right: 0.05em solid #464545;
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
}

@keyframes typing-erase {
  0% {
    width: 0;
  }

  50%,
  70% {
    width: 100%;
  }

  90%,
  100% {
    width: 0;
  }
}

/* The live_text cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: white;
  }
}
</style>
