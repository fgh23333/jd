<template>
  <div class="home">
    <searchBar></searchBar>
    <div style="height: 44px;"></div>
    <!-- <swiper></swiper> -->
    <quickNav></quickNav>
    <homeProduct></homeProduct>
    <div style="height: 50px;"></div>
    <bottomBar active="/"></bottomBar>
  </div>
</template>

<script>
import searchBar from "../components/searchBar.vue";
// import swiper from "../components/homeSwiper.vue";
import quickNav from "../components/quickNav.vue";
import homeProduct from "../components/homeProduct.vue";
import bottomBar from "../components/bottomBar.vue";

export default {
  components: {
    searchBar,
    // swiper
    quickNav,
    homeProduct,
    bottomBar
  }
}
</script>
