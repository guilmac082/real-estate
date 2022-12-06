<template>
  <q-footer elevated class="">
    <div class="row bg-black text-white q-pt-lg">
      <div class="col-md-1 col-lg-1 col-sm-12 col-xs-12"></div>
      <div class="q-px-xl col-md-5 col-lg-5 col-sm-12 col-xs-12">
        <p class="q-mb-lg">
          <!-- <q-img style="width: 150px" src="../assets/LOGO.svg" /> -->
        </p>
        <p class="q-mb-xs">No 1 Infinity Way</p>
        <p class="q-mb-xs">Cupertino</p>
        <p class="q-mb-xs">California</p>
        <p class="q-my-md text-h6 font-weight-bolder">Tel: +1 22 33 44 55</p>
        <p class="q-mb-xs">COPYRIGHT 2022 – All rights reserved</p>
        <div class="q-gutter-sm q-mt-md q-mb-sm">
          <q-btn outline round dense icon="facebook" />
          <q-btn outline round dense icon="facebook" />
          <q-btn outline round dense icon="facebook" />
          <q-btn outline round dense icon="facebook" />
        </div>
        <p class="q-mb-md">Cookies Policy | Privacy Policy | Legal</p>
      </div>
      <div class="q-px-xl q-pt-lg col-md-4 col-lg-4 col-sm-12 col-xs-12">
        <div class="text-h6 q-mb-md">Newsletter</div>
        <div>
          <q-input
            outlined
            bg-color="white"
            color="white"
            dense
            label="All Cities"
          ></q-input>
        </div>
        <div>
          <q-input
            outlined
            bg-color="white"
            color="white"
            dense
            label="All Cities"
          ></q-input>
        </div>
        <div class="row">
          <div class="col-4">Interested in: *</div>
          <div class="col-2">
            <q-radio
              dense
              keep-color
              v-model="interestedInType"
              color="white"
              size="xs"
              val="Properties"
              label="Properties"
            />
            <q-radio
              dense
              keep-color
              v-model="interestedInType"
              color="white"
              size="xs"
              val="Collaborations"
              label="Collaborations"
            />
          </div>
        </div>
        <div class="q-py-xs">
          <q-checkbox dense keep-color class="q-mr-sm" v-model="acceptPP" color="white" />
          I accept the Privacy policy
        </div>
        <div>
          <q-btn
            class="text-capitalize"
            outline
            rounded
            color="white"
            label="Subscribe"
          />
        </div>
      </div>
    </div>
  </q-footer>
</template>
<script>
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "PwbFooter",
  // inject: ["sitedetailsProvider"],
  mounted() {
    // setTimeout(() => {
    //   // footer sometimes loading before rest of page
    //   // This avoids that
    //   this.timeToShowFooter = true
    //   // TODO - investigate if this is affecting pagespeed
    //   // might want to wrap in a q-no-ssr tag
    // }, 500)
  },
  data() {
    return {
      interestedInType: "Properties",
      acceptPP: true,
      // timeToShowFooter: true,
      thm: {
        colors: {},
      },
    }
  },
  props: {
    // thm: {
    //   type: Object,
    //   default() {
    //     return {}
    //   },
    // },
  },
  computed: {},
})
</script>
<style scoped></style>
