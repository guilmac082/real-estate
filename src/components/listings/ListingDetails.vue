<template>
  <div class="listing-details-ctr">
    <div class="row q-col-gutter-sm">
      <div class="col-xs-12">
        <h5
          class="font-medium text-center title-font text-gray-900 q-py-sm q-mt-xl q-mb-xs"
        >
          Details
          <br />
        </h5>
        <hr class="custom-hr-l-details" />
      </div>
      <div
        v-for="fieldDetails in detailsFields"
        :key="fieldDetails"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      >
        <ListingDetailsTableItem
          :isPromotion="false"
          :fieldDetails="fieldDetails"
          :currentProperty="currentProperty"
        >
        </ListingDetailsTableItem>
      </div>
    </div>
  </div>
</template>
<script>
// import { ref, toRef, watch } from 'vue'
import ListingDetailsTableItem from "components/listings/ListingDetailsTableItem.vue"
export default {
  components: {
    ListingDetailsTableItem,
  },
  data() {
    return {
      currentProperty: {
        Reference: "R4110709",
        AgencyRef: "TH8102-SSC",
        Status: {
          system: "Available",
          en: "Available",
        },
        Country: "Spain",
        Province: "Málaga",
        Area: "Costa del Sol",
        Location: "Torremolinos",
        SubLocation: "",
        PropertyType: {
          NameType: "Detached Villa",
          Type: "House",
          TypeId: "2-1",
          Subtype1: "Detached Villa",
          SubtypeId1: "2-2",
        },
        Bedrooms: "4",
        Bathrooms: "3",
        Currency: "EUR",
        Price: 650000,
        OriginalPrice: 650000,
        Community_Fees_Year: "0",
        Basura_Tax_Year: "0",
        IBI_Fees_Year: "1,142",
        Dimensions: "Metres",
        Built: 247,
        Terrace: 30,
        GardenPlot: 405,
        EnergyRating: {
          CO2Rated: "",
          CO2Value: "",
          EnergyRated: "",
          EnergyValue: "",
          Image: "",
        },
        OwnProperty: "0",
        Pool: 1,
        Parking: 0,
        Garden: 1,
        CompletionDate: "2022-08-01",
        BuiltYear: "",
      },
      detailsFields: [
        {
          labelTKey: "client_shared.fieldLabels.ref",
          fieldKey: "Reference",
          label: "Reference",
        },
        {
          labelTKey: "client_shared.fieldLabels.propertyType",
          fieldKey: "Type",
          label: "Type",
        },
        {
          labelTKey: "client_shared.fieldLabels.bedrooms",
          fieldKey: "Bedrooms",
          label: "Bedrooms",
        },
        {
          labelTKey: "client_shared.fieldLabels.bathrooms",
          fieldKey: "Bathrooms",
          label: "Bathrooms",
        },
        {
          labelTKey: "client_shared.fieldLabels.builtArea",
          fieldKey: "Built",
          label: "Built",
        },
        {
          labelTKey: "client_shared.fieldLabels.terraceArea",
          fieldKey: "Terrace",
          label: "Terrace",
        },
        {
          labelTKey: "client_shared.fieldLabels.gardenArea",
          fieldKey: "GardenPlot",
          label: "GardenPlot",
        },
        {
          labelTKey: "client_shared.fieldLabels.price",
          fieldType: "price",
          fieldKey: "Price",
          label: "Price",
        },
        {
          labelTKey: "client_shared.fieldLabels.communityFees",
          fieldType: "fee",
          fieldKey: "Community_Fees_Year",
          label: "Community Fees Per Year",
        },
        {
          labelTKey: "client_shared.fieldLabels.garbageTax",
          fieldType: "fee",
          fieldKey: "Basura_Tax_Year",
          label: "Garbage Tax Per Year",
        },
        {
          labelTKey: "client_shared.fieldLabels.ibiTax",
          fieldType: "fee",
          fieldKey: "IBI_Fees_Year",
          label: "IBI Fees Per Year",
        },
        {
          labelTKey: "client_shared.fieldLabels.zone",
          fieldKey: "Area",
          label: "Area",
        },
        // {
        //   labelTKey: 'client_shared.fieldLabels.city',
        //   fieldKey: 'Location',
        //   label: 'Location',
        // },
        // {
        //   labelTKey: 'client_shared.fieldLabels.energyRating',
        //   fieldType: 'energyRating',
        //   fieldKey: 'EnergyRating',
        //   label: 'EnergyRating',
        // },
      ],
    }
  },
  // props: {
  // },
}
</script>
