<template>
  <div class="row" style="margin-top: 15px">
    <div class="contact-us-left-ctr col-md-8 col-lg-8 col-xs-12 col-sm-12">
      <div class="row">
        <div style="display: flex">
          <q-card
            class="q-pa-sm flex flex-center text-center box-shadow"
            style="
              margin-bottom: 50px;
              min-width: 500px;
              background-color: var(--q-pwb-primary);
            "
          >
            <q-card-section> </q-card-section>
          </q-card>
          <q-card
            class="q-pa-sm text-center box-shadow"
            style="min-width: 500px; margin: 60px 40px 0px -250px"
          >
            <q-card-section class="w-full">
              <div class="q-gutter-lg">
                <q-input bg-color="white" outlined label="Your Name *">
                  <template v-slot:append>
                    <!-- <q-icon name="event" :style="'color:' + thm.colors.iconsColor" /> -->
                  </template>
                </q-input>
                <q-input bg-color="white" outlined label="Your Email *">
                  <template v-slot:append>
                    <q-icon name="email" style="color: var(--q-pwb-icons)" />
                  </template>
                </q-input>
                <q-input bg-color="white" outlined label="Your Phone *">
                  <template v-slot:append>
                    <q-icon name="phone" style="color: var(--q-pwb-icons)" />
                  </template>
                </q-input>
              </div>
              <div class="q-mt-md col-sm-12">
                <q-btn
                  size="md"
                  style="
                    background: var(--q-pwb-buttons);
                    color: var(--q-pwb-buttons-contrast);
                  "
                  label="Send Message"
                  class="q-mb-none q-pb-none"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="contact-us-right-ctr col-md-4 col-lg-4 col-xs-12 col-sm-12">
      <div>
        <h4 class="text-center text-h4 q-my-md" style="color: var(--q-pwb-buttons)">
          Luxury Listings Marbella
          <br />
        </h4>
        <hr class="custom-hr-contact" />
        <div class="text-center text-black text-h6 q-my-sm">
          <div>Calle Jesus Puente local 28A</div>
          <div>29660 Puerto Banus, Marbella</div>
        </div>
        <div class="text-left text-black text-h6 q-mx-sm q-px-sm">
          <div>
            <q-icon
              size="1.3em"
              class="q-pb-sm q-px-md"
              style="color: var(--q-pwb-icons)"
              name="phone"
            />
            <a style="color: black; text-decoration: none" href="tel:+34 623 395 164"
              >TEL: +34 623 395 164</a
            >
          </div>
          <div>
            <a
              style="color: black; text-decoration: none"
              href="mailto:info@luxurylistingsmarbella.com"
            >
              <span>
                <q-icon
                  size="1.3em"
                  class="q-pb-sm q-px-md"
                  style="color: var(--q-pwb-icons)"
                  name="email"
                />
              </span>
              <span> info@luxurylistingsmarbella.com </span>
            </a>
          </div>
          <div class="">
            <a
              style="color: black; text-decoration: none"
              href="https://www.facebook.com/luxurylistingsmarbella/"
            >
              <span class="">
                <q-icon
                  :name="mdiFacebook"
                  class="q-pb-sm q-px-md"
                  style="font-size: 2rem; color: var(--q-pwb-icons)"
                />
              </span>
              <span class="">@luxurylistingsmarbella</span>
            </a>
          </div>
          <div class="">
            <a
              style="color: black; text-decoration: none"
              href="https://www.instagram.com/luxurylistingsmarbella/"
            >
              <q-icon
                :name="mdiInstagram"
                class="q-pb-sm q-px-md"
                style="font-size: 2rem; color: var(--q-pwb-icons)"
              />
              <span class="">@luxurylistingsmarbella</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12">
      <div class="iframe-map q-mt-lg" style="margin-bottom: -36px">
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204675.46484581457!2d-4.4212655!3d36.721261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8357c87e469a4c8c!2sLuxury%20Listings%20Marbella!5e0!3m2!1ses!2ses!4v1649839618610!5m2!1ses!2ses"
          allowfullscreen="allowfullscreen"
          style="border: 0px"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue"
import {
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram,
  mdiFacebook,
  mdiWhatsapp,
} from "@quasar/extras/mdi-v5"
export default defineComponent({
  name: "ContactSimpleSideBySide",
  created() {
    this.mdiTwitter = mdiTwitter
    this.mdiLinkedin = mdiLinkedin
    this.mdiInstagram = mdiInstagram
    this.mdiFacebook = mdiFacebook
    this.mdiWhatsapp = mdiWhatsapp
  },
  // inject: ['themeConfig'],
  mounted() {},
  props: {
    // thm: {
    //   type: Object,
    //   default() {
    //     return {
    //       colors: {},
    //     }
    //   },
    // },
  },
  data() {
    return {}
  },
  methods: {},
})
</script>
<style>
.custom-hr-contact {
  background-color: var(--q-pwb-borders);
  border: 2px solid var(--q-pwb-borders);
  /* border: 2px solid v-bind("thm.colors.bordersColor");
  background-color: v-bind("thm.colors.bordersColor"); */
  width: 25%;
}
</style>
