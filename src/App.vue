<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue"
import { colors, setCssVar } from "quasar"
import { themeVariables } from "src/compose/data/theme-variables"

export default defineComponent({
  name: "App",
  mounted() {
    let themeName = process.env.THEME_NAME || "florida"
    this.setColorScheme(themeName)
  },
  methods: {
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
