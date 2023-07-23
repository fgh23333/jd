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
    <div class="space"></div>
    <categories></categories>
    <div class="space"></div>
    <bottomBar active="/category"></bottomBar>
  </div>
</template>

<script>
import bottomBar from "../components/bottomBar.vue";
import categories from "../components/categories.vue";
import grid from "../components/grid.vue";

export default {
  components: {
    bottomBar,
    categories,
    grid
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

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0;
  }

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