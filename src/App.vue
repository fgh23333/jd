<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .top {
    float: top;
  }

  .clear {
    overflow: hidden;
    zoom: 1;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .flex {
    display: flex;
  }

  .flex-item {
    flex: 1;
  }

  .bolder {
    font-weight: bolder;
  }
  
  .space {
        height: 50px;
        width: 100%;
    }
</style>
