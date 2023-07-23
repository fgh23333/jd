<template>
    <div id="categories">
        <el-container>
            <el-aside width="100px">
                <div class="cate">
                    <van-grid :column-num="1">
                        <van-grid-item v-for="(item, index) in list" :key="index" :text="item.text" />
                    </van-grid>
                </div>
            </el-aside>
            <el-main>
                <div class="grid">
                    <van-grid :column-num="3">
                        <van-grid-item v-for="(item, index) in itemList" :key="index" :icon="item.photo"
                            :text="item.text" />
                    </van-grid>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
        
<script>
export default {
    data() {
        return {
            list: [
                {
                    text: "热门推荐"
                },
                {
                    text: "手机数码"
                },
                {
                    text: "京东超市"
                },
                {
                    text: "家用电器"
                },
                {
                    text: "电脑办公"
                },
                {
                    text: "玩具乐器"
                },
                {
                    text: "家居厨具"
                },
                {
                    text: "家具家装"
                },
                {
                    text: "男装"
                },
                {
                    text: "男鞋"
                },
                {
                    text: "女装"
                },
                {
                    text: "女鞋"
                },
                {
                    text: "美妆护肤"
                },
                {
                    text: "医药保健"
                },
                {
                    text: "酒水饮料"
                },
                {
                    text: "运动户外"
                },
                {
                    text: "汽车生活"
                }
            ],
            itemList: [
                {
                    photo: require("../assets/category/1.png"),
                    text: "空调"
                },
                {
                    photo: require("../assets/category/2.png"),
                    text: "冰箱"
                },
                {
                    photo: require("../assets/category/3.png"),
                    text: "电脑"
                },
                {
                    photo: require("../assets/category/4.png"),
                    text: "手机"
                },
                {
                    photo: require("../assets/category/5.png"),
                    text: "全面屏手机"
                },
                {
                    photo: require("../assets/category/6.png"),
                    text: "保健品"
                },
                {
                    photo: require("../assets/category/7.png"),
                    text: "游戏手机"
                },
                {
                    photo: require("../assets/category/8.png"),
                    text: "口罩"
                },
                {
                    photo: require("../assets/category/9.png"),
                    text: "驱蚊用品"
                },
                {
                    photo: require("../assets/category/10.png"),
                    text: "电磁炉"
                },
                {
                    photo: require("../assets/category/11.png"),
                    text: "电热水壶"
                },
                {
                    photo: require("../assets/category/12.png"),
                    text: "数据线"
                },
                {
                    photo: require("../assets/category/13.png"),
                    text: "图书"
                },
                {
                    photo: require("../assets/category/14.png"),
                    text: "美妆护肤"
                },
                {
                    photo: require("../assets/category/15.png"),
                    text: "除菌液"
                },
                {
                    photo: require("../assets/category/16.png"),
                    text: "休闲零食"
                },
                {
                    photo: require("../assets/category/17.png"),
                    text: "充电宝"
                },
                {
                    photo: require("../assets/category/18.png"),
                    text: "体温计"
                },
                {
                    photo: require("../assets/category/19.png"),
                    text: "投影机"
                },
                {
                    photo: require("../assets/category/20.png"),
                    text: "游戏机"
                }
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less"></style>