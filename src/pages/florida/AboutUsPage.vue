<template>
  <div class="about-us-ctr">
    <div class="q-my-md"></div>
    <WhatWeDo></WhatWeDo>
    <div style="margin-bottom: 90px" class="hero-footer-ctr">
      <HeroFooter></HeroFooter>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue"
// import { useQuery } from "@urql/vue"
// import { useRouter, useRoute } from "vue-router"
// import BestInClass from "components/content-sections/BestInClass.vue"
import WhatWeDo from "components/content-sections/WhatWeDo.vue"
// import SixOfferings from "components/content-sections/SixOfferings.vue"
import HeroFooter from "components/theme-frames/florida/HeroFooter.vue"
export default defineComponent({
  name: "AboutUsPage",
  props: {
    thm: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  components: {
    // OurServices,
    // ThreeServicesBold,
    // BestInClass,
    WhatWeDo,
    HeroFooter,
    // SixOfferings,
  },
  computed: {
    pageContents() {
      const pageContents = []
      // if (this.gqlError) {
      //   this.$q.notify({
      //     color: "negative",
      //     position: "top",
      //     message: this.gqlError.message,
      //     icon: "report_problem",
      //   })
      // } else {
      //   if (this.gqlData && this.gqlData.findPage.pageContents) {
      //     const contentKey = `raw_${this.publicLocale}`
      //     // pageContents[0].content.raw_en
      //     this.gqlData.findPage.pageContents.forEach((pageContent) => {
      //       if (pageContent.content) {
      //         pageContents.push(pageContent.content[contentKey])
      //       }
      //     })
      //   }
      // }
      return pageContents
    },
  },
  data() {
    return {
      // theme_color: 'rgb(0, 163, 82)',
    }
  },
  setup() {
    // const route = useRoute()
    // const pageSlug = "about-us"
    // const publicLocale = ref(route.params.publicLocale || "en")
    // const result = useQuery({
    //   pause: computed(() => !publicLocale.value),
    //   variables: {
    //     publicLocale,
    //   },
    //   query: `
    //     query ($publicLocale: String! ) {
    //       findPage(slug: "${pageSlug}", locale: $publicLocale) {
    //         rawHtml,
    //         pageTitle,
    //         pageContents {
    //           content
    //         },
    //         pageParts {
    //           blockContents
    //           pageSlug
    //         }
    //       }
    //     }
    //   `,
    // })
    return {
      // getPageFrameComponent,
      // publicLocale,
      // gqlFetching: result.fetching,
      // gqlData: result.data,
      // gqlError: result.error,
    }
  },
})
</script>
<style>
/* .bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgba(16, 185, 129, var(--tw-bg-opacity));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgba(16, 185, 129, var(--tw-text-opacity));
} */
</style>
