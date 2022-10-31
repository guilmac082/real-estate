<template>
  <div>
    <div>
      <div
        class="pic-wrapper flex flex-center"
        style="height: 100vh; margin-top: -90px"
      >
        <div
          :style="
            'z-index: 1;width: ' + ($q.platform.is.mobile ? '95%' : '70%')
          "
          style="margin-top: 10%"
        >
          <div class="typewriter text-h5 flex flex-center text-white live_text">
            <p class="text-center q-my-xs">Real estate agency in California</p>
          </div>
          <div
            style="background-color: #afaeaad1"
            class="q-mt-sm row rounded-borders q-pa-sm"
          >
            <div class="q-pa-sm col-md-3 col-lg-3 col-sm-12 col-xs-12">
              <q-input
                bg-color="white"
                dense
                label="All Cities"
                outlined
              ></q-input>
            </div>
            <div class="q-pa-sm col-md-7 col-lg-7 col-sm-12 col-xs-12">
              <q-input
                bg-color="white"
                dense
                label="Keyword"
                outlined
              ></q-input>
            </div>
            <div class="q-pa-sm col-md-2 col-lg-2 col-sm-12 col-xs-12">
              <q-btn
                color="grey-10"
                class="full-width text-capitalize"
                label="Search"
              />
            </div>
          </div>
        </div>
        <figure class="pic-1"></figure>
        <figure class="pic-2"></figure>
        <figure class="pic-3"></figure>
        <figure class="pic-4"></figure>
      </div>
    </div>
  </div>
</template>
<script>
import defBgImgUrl from "assets/1.jpg";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "PwbSubHeader",
  created() {
    this.defBgImgUrl = defBgImgUrl;
  },
  components: {},
  data() {
    return {
      // subHeaderHeight: "400px",
    };
  },
  props: {
    subHeaderBgImgUrl: {
      type: String,
    },
    subHeaderTitle: {
      type: String,
    },
  },
  computed: {
    bgUrl() {
      if (this.subHeaderBgImgUrl) {
        return `url(${this.subHeaderBgImgUrl})`;
      } else {
        return `url(${defBgImgUrl})`;
      }
    },
  },
});
</script>
<style>
.pic-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

figure {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /*animation*/

  animation: slideShow 24s linear infinite 0s;
  -o-animation: slideShow 24s linear infinite 0s;
  -moz-animation: slideShow 24s linear infinite 0s;
  -webkit-animation: slideShow 24s linear infinite 0s;
}

.pic-1 {
  opacity: 1;
  /* background: url(v-bind(bgUrl)) no-repeat center center; */
  background-image: v-bind(bgUrl);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.pic-2 {
  animation-delay: 6s;
  -o-animation-delay: 6s;
  -moz--animation-delay: 6s;
  -webkit-animation-delay: 6s;
  background: url(assets/2.jpg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.pic-3 {
  animation-delay: 12s;
  -o-animation-delay: 12s;
  -moz--animation-delay: 12s;
  -webkit-animation-delay: 12s;
  background: url(assets/3.jpg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.pic-4 {
  animation-delay: 18s;
  -o-animation-delay: 18s;
  -moz--animation-delay: 18s;
  -webkit-animation-delay: 18s;
  background: url(assets/4.jpg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
