<template>
  <router-view />
</template>

<script>
import { defineComponent, ref } from "vue"
import { useRouter, useRoute } from "vue-router"
import { colors, setCssVar } from "quasar"
import { themeVariables } from "src/compose/data/theme-variables"
// import { sitedetailsProvider } from "src/compose/sitedetails-provider.js"
import { localiseProvider } from "src/compose/localise-provider.js"
import { siteContent } from "src/compose/data/site-content"
import { siteTranslationsEn } from "src/compose/data/site-translations-en"
import { siteTranslationsEs } from "src/compose/data/site-translations-es"
import { useAgencyStore } from "stores/agency"
import { useWebSiteStore } from "stores/web-site"

export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute()
    const publicLocale = ref(route.params.publicLocale || "en")
    let siteTranslations = siteTranslationsEn
    if (publicLocale.value === "es") {
      siteTranslations = siteTranslationsEs
    }
    localiseProvider.setLocaleMessages(siteTranslations.result, siteTranslations.locale)
    const agencyStore = useAgencyStore()
    agencyStore.setAgency(siteContent.agency)
    const webSiteStore = useWebSiteStore()
    webSiteStore.setTopNav("en", siteContent.topNavDisplayLinks)
    // return { agencyStore }
  },
  mounted() {
    let themeName = process.env.THEME_NAME || "florida"
    this.setColorScheme(themeName)
    this.setupSiteData()
  },
  provide: {
    localiseProvider,
    // sitedetailsProvider,
  },
  methods: {
    setupSiteData() {
      // let publicLocale = "en"
      // sitedetailsProvider.setAgency(siteContent.agency, siteContent.supportedLocales)
      // sitedetailsProvider.setTopNavItems(publicLocale, siteContent.topNavDisplayLinks)
      // sitedetailsProvider.setFooterNavItems(publicLocale, siteContent.topNavDisplayLinks)
    },
    setColorScheme(themeName) {
      let currentThemeVariables = themeVariables[themeName] || []
      currentThemeVariables.forEach((tVar) => {
        setCssVar(tVar["varName"], tVar["varValue"])
      })
      // setCssVar("pwb-primary", "blue")
    },
  },
})
</script>
