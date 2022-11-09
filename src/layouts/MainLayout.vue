<template>
  <q-layout view="lHh Lpr lff">
    <component :is="headerFrame.frameComponent"></component>
    <q-page-container>
      <router-view :themeForFrames="themeForFrames" />
    </q-page-container>
    <component :is="footerFrame.frameComponent"></component>
  </q-layout>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from "vue"

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      themeForFrames: process.env.THEME_NAME, // "mega",
      // themeForFrames: "florida",
    }
  },
  components: {},

  computed: {
    headerFrame() {
      const frameComponent = defineAsyncComponent(() =>
        import(
          /* @vite-ignore */ `/src/components/theme-frames/${this.themeForFrames}/PwbHeader.vue`
        )
      )
      return {
        details: {},
        frameComponent,
      }
    },
    footerFrame() {
      const frameComponent = defineAsyncComponent(() =>
        import(
          /* @vite-ignore */ `/src/components/theme-frames/${this.themeForFrames}/PwbFooter.vue`
        )
      )
      return {
        details: {},
        frameComponent,
      }
    },
  },
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>

<style>
body {
  background-color: #fafafa !important;
}
</style>
