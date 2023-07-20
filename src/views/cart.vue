<template>
  <div id="cart">
    <topBar>购物车</topBar>
    <div class="space"></div>
    <div class="login">
      <span class="loginText">登录后可同步购物车中商品</span>
      <van-button round type="info" color="linear-gradient(to right, #ff6034, #ee0a24)"
        class="loginButton">登录</van-button>
    </div>
    <productCard v-if="list.length > 0" :list="list" @allChecked="receiveMessage"></productCard>
    <div class="emptyIcon" v-else>
      <img class="emptyLogo" src="../assets/icon/10050.png">
      <div class="emptyText">登录后可同步购物车中商品</div>
    </div>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" checked-color="#ee0a24">全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template> -->
    </van-submit-bar>
    <bottomBar active="/cart"></bottomBar>
  </div>
</template>

<script>
import bottomBar from "../components/bottomBar.vue";
import topBar from "../components/topBar.vue";
import productCard from "../components/productCard.vue";

export default {
  data() {
    return {
      checked: false,
      list: [
        {
          id: 0,
          marketType: 0,
          describe: "享食者无骨鸡爪柠檬酸辣网红即食罐装脱骨泡椒去骨凤爪零食小吃休闲食品 柠檬酸辣味【发3件共900g】",
          saleType: 0,
          comment: 2048,
          price: "59.00",
          discount: "0",
          src: require("../assets/product/1.png"),
          checked: false,
          value: 1
        },
        {
          id: 1,
          marketType: 1,
          describe: "蒙牛 纯牛奶 PURE MILK 250ml*16 每100ml含3.2g蛋白质",
          saleType: 1,
          comment: 0,
          price: "34.90",
          discount: "2件9折",
          src: require("../assets/product/2.png"),
          checked: false,
          value: 1
        },
        {
          id: 2,
          marketType: 0,
          describe: "典枫全铜新中式吊灯客厅灯玉石餐厅灯卧室禅意中国风中山别墅灯具套餐 6头（铜+玉石）全光谱三色灯泡",
          saleType: 0,
          comment: 256,
          price: "1198.00",
          discount: "每满500-150",
          src: require("../assets/product/3.png"),
          checked: false,
          value: 1
        },
        {
          id: 3,
          marketType: 1,
          describe: "伊利 安慕希希腊风味酸奶 原味205g*16盒/箱 多35%蛋白质 礼盒装",
          saleType: 1,
          comment: 2048,
          price: "59.90",
          discount: "满119享9折",
          src: require("../assets/product/4.png"),
          checked: false,
          value: 1
        }
      ]
    }
  },
  // updated() {
  //   if (this.checked == true) {
      
  //   } else {
      
  //   }
  // },
  components: {
    bottomBar,
    topBar,
    productCard
  },
  methods: {
    onSubmit() {
      console.log()
    },
    receiveMessage(allChecked) {
      this.checked = allChecked;
      console.log(allChecked + "+++");
      console.log(this.checked + "===");
    }
  },
  computed: {
    totalPrice() {
      let temp = 0
      this.list.forEach((item) => {
        if (item.checked) {
          temp += item.price * 100 * item.value
        }
      })
      return temp
    }
  }
}
</script>

<style lang="less">
#cart {
  color: #333;
  background-color: #f8f8f8;

  .login {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    background-color: white;

    .loginText {
      line-height: 44px;
      font-size: 14px;
      margin: 15px auto;
    }

    .loginButton {
      height: 28px;
      top: -4px;
      left: 8px;
    }
  }

  .emptyIcon {
    text-align: center;
    margin: 80px 0;

    .emptyLogo {
      width: 90px;
    }

    .emptyText {
      margin-top: 10px;
    }
  }
}
</style>