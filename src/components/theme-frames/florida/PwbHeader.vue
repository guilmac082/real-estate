<template>
  <q-header class="main-pwb-header" elevated>
    <div class="row q-toolbar" style="min-height: 10px; border-bottom: 1px solid white">
      <div class="col-xs-12">
        <div class="aa-header-area max-ctr">
          <div class="row text-weight-medium">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="aa-header-left">
                <div class="aa-telephone-no float-left q-pl-sm">
                  <q-icon class="q-pb-xs q-pr-xs" name="phone" />
                  <div class="q-pt-xs" style="display: inline-flex">
                    {{ agencyStore.agency.phoneNumberPrimary }}
                  </div>
                </div>
                <div class="aa-email mobile-hide float-left">
                  <q-icon class="q-pb-xs q-pr-xs q-pl-md" name="email" />
                  <div class="q-pt-xs" style="display: inline-flex">
                    {{ agencyStore.agency.emailPrimary }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="aa-header-right">
                <div class="contenedor_idiomas" style="">
                  <ul class="idiomas">
                    <router-link
                      v-for="langNav in langNavs"
                      :key="langNav.shortLocale"
                      active-class="selected"
                      :to="langNav.route"
                      custom
                      v-slot="{ href, navigate, isActive, isExactActive }"
                    >
                      <li
                        :class="[
                          isActive && 'selected',
                          isExactActive && 'router-link-exact-active',
                        ]"
                      >
                        <a
                          :class="langNav.shortLocale"
                          :href="href"
                          @click="navigate"
                        ></a>
                      </li>
                    </router-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-toolbar class="max-ctr q-pl-sm q-pr-none">
      <q-toolbar-title class="q-pl-sm">
        <a href="/" style="color: inherit">
          <div class="q-px-sm" style="width: fit-content; border: 1px solid">
            {{ agencyStore.agency.displayName }}
          </div>
        </a>
        <!-- <strong></strong> -->
      </q-toolbar-title>
      <!-- <q-space /> -->
      <div class="q-gutter-sm row items-center no-wrap"></div>
      <div class="mobile-only">
        <q-btn square dense class="q-ma-sm pwb-header-tabs-mobile" icon="menu">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                v-for="topNavLink in topNavLinks"
                :key="topNavLink.id"
                :to="topNavLink.route"
                :label="topNavLink.linkTitle"
                :exact="true"
              >
                <q-item-section>{{ topNavLink.linkTitle }}</q-item-section>
              </q-item>
              <!-- <q-item clickable v-close-popup>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-separator /> -->
            </q-list>
          </q-menu>
        </q-btn>
      </div>
      <q-tabs class="mobile-hide pwb-header-tabs" shrink>
        <q-route-tab
          v-for="topNavLink in topNavLinks"
          :key="topNavLink.id"
          :to="topNavLink.route"
          :label="topNavLink.linkTitle"
          :exact="true"
        />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>
<script>
import { defineComponent, ref } from "vue"
// import { siteContent } from "src/compose/data/site-content"
import { useAgencyStore } from "stores/agency"
import { useWebSiteStore } from "stores/web-site"
export default defineComponent({
  name: "PwbHeader",
  // inject: ["sitedetailsProvider"],
  setup() {
    const agencyStore = useAgencyStore()
    const webSiteStore = useWebSiteStore()
    return { agencyStore, webSiteStore }
  },
  data() {
    return {}
  },
  props: {
    thm: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    langNavs() {
      // const supportedLocales = this.sitedetailsProvider.state.supportedLocales || []
      const supportedLocales = ["en", "es"]
      const langNavs = []
      supportedLocales.forEach((supportedLocale) => {
        const shortLocale = supportedLocale.split("-")[0]
        langNavs.push({
          shortLocale,
          route: {
            params: {
              publicLocale: shortLocale,
            },
          },
        })
      })
      return langNavs
    },
    topNavLinks() {
      return this.webSiteStore.topNavLinkItems // this.sitedetailsProvider.state.topNavLinkItems
    },
  },
})
</script>
<style scoped>
.main-pwb-header {
  background-color: var(--q-pwb-primary);
  color: var(--q-pwb-primary-contrast);
}

.q-item.q-router-link--active,
.q-item--active {
  color: black;
}

.pwb-header-tabs {
  margin-bottom: -1px;
}
</style>
