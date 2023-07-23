<template>
  <div id="category">
    <div class="clear searchBar">
      <div class="back left" @click="goBack">
        <van-icon name="arrow-left" />
      </div>
      <div class="search left">
        <div id="inputbox">
          <van-icon name="search" />
          <input type="search" id="search-in" placeholder="扫地机器人智能">
        </div>
      </div>
    </div>
    <categories></categories>
    <bottomBar active="/category"></bottomBar>
  </div>
</template>

<script>
import bottomBar from "../components/bottomBar.vue";
import categories from "../components/categories.vue";

export default {
  components: {
    bottomBar,
    categories
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
#category {
  .searchBar {
    height: 44px;
    text-align: center;
    width: 100%;
    position: fixed;
    
    .back {
      width: 50px;
      line-height: 44px;
    }

    .left {
      float: left;
    }

    .search {
      height: 30px;
      width: calc(100vw - 100px);
      background-color: white;
      margin: 7px 0;
      border-radius: 15px;
      background-color: #f7f7f7;
    }

    #inputbox {
      line-height: 30px;
      position: relative;
      

      #search-in {
        border: none;
        outline: none;
        width: 75%;
        display: inline;
        left: 10px;
        position: relative;
        background-color: #f7f7f7;
      }
    }
  }
}
</style>