<template>
  <q-footer v-if="timeToShowFooter" elevated class="">
    <div class="pwb-footer-sec-1" style="">
      <q-toolbar>
        <div class="width-full text-center q-pa-md text-body1">
          <router-link
            class="q-px-md"
            style="text-decoration: none; color: inherit"
            v-for="topNavLink in footerNavLinks"
            :key="topNavLink.linkTitle"
            :to="topNavLink.route"
            :exact="true"
          >
            {{ topNavLink.linkTitle }}
          </router-link>
          <a
            href="/v-admin"
            class="q-px-lg"
            exact="true"
            style="text-decoration: none; color: inherit"
          >
            Admin
          </a>
        </div>
      </q-toolbar>
    </div>
    <div class="pwb-footer-sec-2" style="height: 30px">
      <div class="copyright-foot width-full q-pa-sm">
        <div :class="copywriteClass">
          Copyright © 2021 - 2022
          <a class="" href="/" style="text-decoration: none; color: inherit">
            {{ agencyStore.agency.displayName }}
          </a>
        </div>
      </div>
    </div>
  </q-footer>
</template>
<script>
import { defineComponent, ref } from "vue"
import { useAgencyStore } from "stores/agency"
export default defineComponent({
  name: "PwbFooter",
  // inject: ["sitedetailsProvider"],
  setup() {
    const agencyStore = useAgencyStore()
    return { agencyStore }
  },
  mounted() {
    setTimeout(() => {
      // footer sometimes loading before rest of page
      // This avoids that
      this.timeToShowFooter = true
      // TODO - investigate if this is affecting pagespeed
      // might want to wrap in a q-no-ssr tag
    }, 500)
  },
  data() {
    return {
      timeToShowFooter: true,
      thm: {
        colors: {},
      },
    }
  },
  props: {},
  computed: {
    // mainFooterStyle() {
    //   return (
    //     "position: relative;background-color:" +
    //     this.thm.colors.iconsColor +
    //     ";color:" +
    //     this.thm.colors.headerColorContrast
    //   )
    // },
    footerNavLinks() {
      return [] // this.sitedetailsProvider.state.footerNavLinkItems
    },
    copywriteClass() {
      if (this.$q.screen.lt.md) {
        return "text-center"
      } else {
        return "float-right"
      }
    },
  },
})
</script>
<style scoped>
/*
Should be possible to use css vars like so but does not seem to work:
--primary: red;
--blue: blue;

.body--dark {
  --primary: darkred;
  --blue: darkblue;
} */

.pwb-footer-sec-1,
.pwb-footer-sec-2 {
  color: var(--q-pwb-primary-contrast);
  background: var(--q-pwb-primary);
}
</style>
