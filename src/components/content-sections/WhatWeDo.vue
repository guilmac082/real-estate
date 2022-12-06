<template>
  <div class="what-we-do-ctr">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <h2
          class="text-h4 font-medium text-center title-font text-grey-10 q-py-sm q-mt-xl q-mb-xs"
        >
          What We Do
          <br />
          <span class="text-center text-grey-9 text-h6">
            We can help with all stages of your home ownership journey.
          </span>
        </h2>
        <hr class="custom-hr-feature" />
      </div>
    </div>

    <div class="row text-center q-col-gutter-md flex flex-center">
      <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
        <q-card
          @mouseover="hoverOver(3)"
          @mouseout="hoverOutTimeout(3)"
          style="border: none"
          class="my-card text-center box-shadow"
          flat
          bordered
        >
          <q-img :src="defBgImgUrl" loading="eager" />

          <q-card-section class="what-we-do-texts">
            <!-- <div class="text-overline text-orange-9">
              Luxury Listings
              <span :style="'color:' + theme_color">Marbella</span>
            </div> -->
            <div
              :class="about_heading_3"
              :style="'color: ' + about_heading_color_3"
              class="text-h6 q-mt-sm q-mb-xs"
            >
              Your Viewing Trip
            </div>
            <div class="text-body2 text-grey-9">
              Once you have made the decision to visit the Costa del Sol and inspect the
              properties you have seen online with your own eyes there are a few things
              that need to be arranged.
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
        <q-card
          @mouseover="hoverOver(3)"
          @mouseout="hoverOutTimeout(3)"
          style="border: none"
          class="my-card text-center box-shadow"
          flat
          bordered
        >
          <q-img :src="defBgImgUrl" loading="lazy" />

          <q-card-section class="what-we-do-texts">
            <!-- <div class="text-overline text-orange-9">
              Luxury Listings
              <span :style="'color:' + theme_color">Marbella</span>
            </div> -->
            <div
              :class="about_heading_3"
              :style="'color: ' + about_heading_color_3"
              class="text-h6 q-mt-sm q-mb-xs"
            >
              Architectural Services
            </div>
            <div class="text-body2 text-grey-9">
              If you own a property on the Costa del Sol and are looking for a company to
              manage your complete requirements, then look no further and make use of our
              excellent after sale services.
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
        <q-card
          @mouseover="hoverOver(3)"
          @mouseout="hoverOutTimeout(3)"
          style="border: none"
          class="my-card text-center box-shadow"
          flat
          bordered
        >
          <q-img :src="defBgImgUrl" />
          <q-card-section class="what-we-do-texts">
            <!-- <div class="text-overline text-orange-9">
              Luxury Listings
              <span :style="'color:' + theme_color">Marbella</span>
            </div> -->
            <div
              :class="about_heading_3"
              :style="'color: ' + about_heading_color_3"
              class="text-h6 q-mt-sm q-mb-xs"
            >
              After Sales Services
            </div>
            <div class="">
              If you own a property on the Costa del Sol and are looking for a company to
              manage your complete requirements, then look no further and make use of our
              excellent after sale services.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue"
import defBgImgUrl from "src/assets/images/examples/square-mod-home-with-pool.webp"
export default defineComponent({
  name: "WhatWeDo",
  // inject: [''],
  created() {
    this.defBgImgUrl = defBgImgUrl // `url(${defBgImgUrl})`
  },
  data() {
    return {
      about_heading_1: [],
      about_heading_2: [],
      about_heading_3: [],
      about_heading_color_1: "#424242",
      about_heading_color_2: "#424242",
      about_heading_color_3: "#424242",
      bg_url:
        "url(https://quasar-company-profile-template.netlify.app/statics/images/contact_us.jpg)",
      theme_color: "#9c2929", // 'rgb(0, 163, 82)',
    }
  },
  methods: {
    // scrollToElement(id) {
    //   const el = document.getElementById(id)
    //   const target = getScrollTarget(el)
    //   const offset = el.offsetTop + 3
    //   const duration = 900
    //   setScrollPosition(target, offset, duration)
    // },
    changeBgColor() {
      this.theme_color = this.bg_color
      this.background_style = "background-color:" + this.bg_color.split(")")[0] + ",0.7)"
    },
    hoverOver: function (index) {
      // this['about_heading_color_' + index] = this.theme_color
      // this['about_heading_' + index] = ['animated', 'bounceIn']
    },
    hoverOutTimeout: function (index) {
      // this['about_heading_color_' + index] = '#424242'
      // setTimeout(() => {
      //   this['about_heading_' + index] = []
      // }, 1000)
    },
  },
  props: {
    thm: {
      type: Object,
      default() {
        return {
          colors: {},
        }
      },
    },
  },
})
</script>
<style>
.what-we-do-texts {
  min-height: 150px;
}
.custom-hr-feature {
  border: 2px solid v-bind("thm.colors.bdBtmCol");
  background-color: v-bind("thm.colors.bdBtmCol");
  width: 13%;
}
</style>
