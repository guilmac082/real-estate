<template>
  <div class="pwb-foot-card" style="margin-bottom: -90px">
    <div style="background-color: #000000ad !important">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
          <h5 class="text-center text-white text-h4 q-my-md">
            Luxury Listings Marbella
            <br />
          </h5>
          <div class="text-center text-white text-h6 q-my-sm">
            <div>Calle Jesus Puente local 28A</div>
            <div>29660 Puerto Banus, Marbella</div>
            <div>
              <a style="color: white" href="tel:+34 623 395 164">TEL: +34 623 395 164</a>
            </div>
            <div>
              <a style="color: white" href="mailto:info@luxurylistingsmarbella.com"
                >info@luxurylistingsmarbella.com</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center flex flex q-pb-lg">
        <div
          class="col-md-6 col-lg-6 col-xs-12 col-sm-12 q-gutter-none q-px-sm q-py-none q-ma-none"
        >
          <div class="row text-center flex flex-center q-pb-lg">
            <div class="col-md-6 col-sm-12"></div>
            <div
              class="col-md-6 col-lg-6 col-xs-12 col-sm-12 q-gutter-none q-px-sm q-py-none q-ma-none"
            >
              <q-input class="q-py-md" bg-color="white" outlined label="Your Name *">
              </q-input>
              <q-input class="q-py-md" bg-color="white" outlined label="Your Email *">
                <template v-slot:append>
                  <q-icon
                    name="email"
                    style="font-size: 2rem; color: var(--q-pwb-icons)"
                  />
                </template>
              </q-input>
              <q-input class="q-py-md" bg-color="white" outlined label="Your Phone *">
                <template v-slot:append>
                  <q-icon
                    name="phone"
                    style="font-size: 2rem; color: var(--q-pwb-icons)"
                  />
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-6 col-xs-12 col-sm-12 q-gutter-none q-px-sm q-py-md q-ma-none"
        >
          <div class="row text-center flex flex-center q-pb-lg">
            <div class="col-md-6 col-sm-12 col-xs-12 q-px-sm">
              <q-input
                class=""
                type="textarea"
                bg-color="white"
                outlined
                label="Your Message *"
              >
              </q-input>
            </div>
            <div class="col-md-6 col-sm-12"></div>
          </div>
        </div>
      </div>
      <div class="row flex flex-center text-center q-pb-xl q-mt-md">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
          <q-btn
            size="lg"
            style="background: var(--q-pwb-buttons); color: var(--q-pwb-buttons-contrast)"
            label="Send Message"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import defBgImgUrl from "src/assets/images/examples/square-mod-home-with-pool.webp"
// import defBgImgUrl from "assets/images/llm/terrace-with-sea-and-greenry-wide.jpeg"
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "HeroFooterAlpha",
  created() {
    this.defBgImgUrl = defBgImgUrl
  },
  components: {},
  data() {
    return {
      heroFooterHeight: "400px",
      // bg_url:
      //   "url(https://quasar-company-profile-template.netlify.app/statics/images/contact_us.jpg)",
    }
  },
  props: {
    heroFooterBgImgUrl: {
      type: String,
    },
    thm: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    // bgStyle() {
    //   const bgShade = ".5"
    //   const bgStyle = `background-color: rgba(0, 0, 0,${bgShade});min-height:${this.heroFooterHeight};`
    //   return bgStyle
    // },
    bgUrl() {
      if (this.heroFooterBgImgUrl) {
        return `url(${this.heroFooterBgImgUrl})`
      } else {
        return `url(${defBgImgUrl})`
      }
    },
  },
})
</script>
<style>
.pwb-foot-card {
  background-image: v-bind(bgUrl);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
