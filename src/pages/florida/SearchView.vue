<template>
  <div class="search-view-ctr">
    <div class="q-py-lg q-ma-md">
      <h3 class="text-center">
        <!-- {{ localiseProvider.$ft(searchHeaderText) }} -->
      </h3>
      <div v-for="pageContent in pageContents" :key="pageContent.id">
        <div v-html="pageContent"></div>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-md-4 col-lg-3">
          <h6 class="q-my-sm q-mx-sm">
            <!-- {{ localiseProvider.$ft("searchForProperties") }} -->
          </h6>
          <VerticalSearchForm
            @triggerSearchUpdate="triggerSearchUpdate"
          ></VerticalSearchForm>
        </div>
        <div class="col-xs-12 col-md-8 col-lg-9">
          <div class="row q-col-gutter-md">
            <div
              class="col-xs-12 col-md-6 col-lg-6"
              v-for="property in properties"
              :key="property.id"
            >
              <ListingsSummaryCard
                :saleOrRental="saleOrRental"
                :currentListing="property"
              ></ListingsSummaryCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-my-md"></div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue"
// import { useQuery } from "@urql/vue"
import { useRouter, useRoute } from "vue-router"
import { propertyListingsEn } from "src/compose/data/property-listings-en"
import VerticalSearchForm from "components/widgets/VerticalSearchForm.vue"
import ListingsSummaryCard from "components/listings/ListingsSummaryCard.vue"
export default defineComponent({
  name: "SearchView",
  props: {
    thm: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  components: {
    VerticalSearchForm,
    ListingsSummaryCard,
  },
  methods: {
    triggerSearchUpdate(fieldDetails) {
      this[fieldDetails.fieldName] = fieldDetails.newValue
    },
  },
  computed: {
    properties() {
      // const route = useRoute()
      // // let pageSlug = "rent"
      // let saleOrRental = "rental"
      // if (route.name === "rForSaleSearch") {
      //   // pageSlug = "buy"
      //   saleOrRental = "sale"
      // }
      // debugger
      const properties = propertyListingsEn || [] // this.data ? this.data.searchProperties : []
      return properties
    },
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
    const route = useRoute()
    // let pageSlug = "rent"
    let saleOrRental = "rental"
    if (route.name === "rForSaleSearch") {
      // pageSlug = "buy"
      saleOrRental = "sale"
    }
    // const pageSlug = "search-view"
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
      saleOrRental,
      // getPageFrameComponent,
      // publicLocale,
      // gqlFetching: result.fetching,
      // gqlData: result.data,
      // gqlError: result.error,
    }
  },
})
</script>
<style></style>
