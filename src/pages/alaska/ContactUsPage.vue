<template>
  <div class="contact-us-ctr">
    <div class="max-ctr-breakout">
      <PwbSubHeader
        subHeaderTitle="Contact Us"
        subHeaderBgImgUrl="https://luxurylistingsmarbella.com/wp-content/uploads/2020/06/R3660428-3.jpg"
      >
      </PwbSubHeader>
    </div>
    <!-- <TextHeroSimple v-if="thm.other.showSubHeader === 'yes'"
                    textMain="Contact Us"
                    textSec="We'll be happy to answer any questions you may have."
                    bgImgUrl="https://quasar-company-profile-template.netlify.app/statics/images/contact_us.jpg">
    </TextHeroSimple> -->
    <ContactSimpleSideBySide style="" class="q-pb-md q-mb-md"></ContactSimpleSideBySide>
    <!-- <div v-if="heroFooterComponent" :class="heroFooterComponent.containerClasses">
      <component
        :is="heroFooterComponent.name"
        :thm="thm"
        :contentConfig="heroFooterComponent.contentConfig"
        subHeaderTitle="The Finest Listing Agents On The Costa Del Sol"
      ></component>
    </div> -->
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue"
// import { useQuery } from "@urql/vue"
// import { useRouter, useRoute } from "vue-router"
// import TextHeroSimple from "components/llm/TextHeroSimple.vue"
import ContactSimpleSideBySide from "components/forms/ContactSimpleSideBySide.vue"
import PwbSubHeader from "components/theme-frames/alaska/PwbSubHeader.vue"
// import HeroFooterAlpha from "components/llm/sections/HeroFooterAlpha.vue"
export default defineComponent({
  name: "ContactUsPage",
  components: {
    // TextHeroSimple,
    ContactSimpleSideBySide,
    PwbSubHeader,
    // HeroFooterAlpha,
  },
  props: {
    // thm: {
    //   type: Object,
    //   default() {
    //     return {
    //       colors: {
    //         iconsColor: "#3A6B35",
    //       },
    //     }
    //   },
    // },
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
  mounted: function () {},

  data() {
    return {
      // theme_color: 'rgb(0, 163, 82)',
    }
  },
  setup() {
    // // const router = useRouter()
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
      // publicLocale,
      // gqlFetching: result.fetching,
      // gqlData: result.data,
      // gqlError: result.error,
    }
  },
})
</script>
<style>
/* .contact-us-hero {
  height: 43.8rem;
} */
</style>
