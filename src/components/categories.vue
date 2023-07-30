<template>
    <div id="categories">
        <div class="blankSpace"></div>
        <el-container>
            <el-aside width="100px">
                <div class="cate">
                    <van-grid :column-num="1">
                        <van-grid-item v-for="(item, index) in list" :key="index" :text="item.text"
                            @click="sequence(index)"></van-grid-item>
                    </van-grid>
                </div>
            </el-aside>
            <el-main>
                <div class="grid">
                    <van-grid :column-num="3" v-if="seq == 0">
                        <van-grid-item v-for="(item, i) in itemList0" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 1">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 2">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 3">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 4">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 5">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 6">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 7">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 8">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 9">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 10">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 11">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 12">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                    <van-grid :column-num="3" v-if="seq == 13">
                        <van-grid-item v-for="(item, i) in itemList1" :key="i" :icon="item.photo" :text="item.text" />
                    </van-grid>
                </div>
            </el-main>
        </el-container>
        <div class="blankSpace"></div>
    </div>
</template>
        
<script>
export default {
    data() {
        return {
            seq: 0,
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
                }
            ],
            itemList0: [
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
            ],
            itemList1: [
                {
                    photo: require("../assets/category/21.png"),
                    text: "小米"
                },
                {
                    photo: require("../assets/category/22.png"),
                    text: "华为"
                },
                {
                    photo: require("../assets/category/23.png"),
                    text: "荣耀"
                },
                
                {
                    photo: require("../assets/category/24.png"),
                    text: "iPhone"
                },
                {
                    photo: require("../assets/category/25.png"),
                    text: "vivo"
                },
                {
                    photo: require("../assets/category/26.png"),
                    text: "OPPO"
                },
                {
                    photo: require("../assets/category/27.png"),
                    text: "魅族"
                },
                {
                    photo: require("../assets/category/28.png"),
                    text: "三星"
                },
                {
                    photo: require("../assets/category/29.png"),
                    text: "一加"
                },
                {
                    photo: require("../assets/category/30.png"),
                    text: "努比亚"
                }
            ],
            itemList2: [
                
            ],
            itemList3: [

            ],
            itemList4: [

            ],
            itemList5: [

            ],
            itemList6: [

            ],
            itemList7: [

            ],
            itemList8: [

            ],
            itemList9: [

            ],
            itemList10: [

            ],
            itemList11: [

            ],
            itemList12: [

            ],
            itemList13: [

            ],
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        sequence(e) {
            this.seq = e
        }
    },
    mounted() {
        document.addEventListener("scroll", () => {
            let scrollDistance = document.documentElement.scrollTop
            if(scrollDistance < 200 && scrollDistance >= 0) {
                document.documentElement.scrollTop = 200
            }
            if(scrollDistance > 460) {
                document.documentElement.scrollTop = 460
            } 
            console.log(scrollDistance)
        })
    }
}
</script>

<style lang="less">
#categories {
    .blankSpace {
        height: 200px;
    }
}
</style>