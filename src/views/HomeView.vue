<template>
  <div class="home">
    <searchBar></searchBar>
    <!-- <swiper></swiper> -->
    <quickNav></quickNav>
    <homeProduct></homeProduct>
  </div>
</template>

<script>
// @ is an alias to /src
import searchBar from "../components/searchBar.vue";
// import swiper from "../components/homeSwiper.vue";
import quickNav from "../components/quickNav.vue";
import homeProduct from "../components/homeProduct.vue";

export default {
  components: {
    searchBar,
    // swiper
    quickNav,
    homeProduct
  }
}
</script>
