<template>
  <div>
    <router-view></router-view>

    <FooterGuide v-if="$route.meta.showFootGuide "/>
  </div>
</template>

<script>
import FooterGuide from "./componets/footerGuide/FooterGuide.vue";
export default {
  name: "App",
  components:{
      FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>


