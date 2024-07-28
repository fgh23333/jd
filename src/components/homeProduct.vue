<template>
    <div id="products" class="clear" ref="scrollTrigger">
        <div class="product left" v-for="(item, index) in list" :key="index">
            <router-link :to="'/product/' + item.id + '?img=' + item.src">
                <img id="productPic" :src="item.img">
                <div id="info">
                    <div id="describe">
                        <img id="type" v-if="item.marketType == 1" src="../assets/product/mt.png">{{ item.name }}
                    </div>
                    <div class="price left">
                        &yen<span id="priceInt">{{ parseInt(item.price) }}</span>
                        <span class="priceFloat">.{{ parseInt(item.price * 100) - parseInt(item.price) * 100 }}</span>
                        <span class="priceFloat"
                            v-if="parseInt(item.price * 100) - parseInt(item.price) * 100 == 0">0</span>
                        <!-- <span id="discount" v-if="item.discount != '0'">{{item.discount}}</span> -->
                    </div>
                    <img class="saleType" v-if="item.saleType == 1" src="../assets/product/self.png">
                    <img class="saleType" v-if="item.saleType == 2" src="../assets/product/log.png">
                    <div class="comment" v-if="item.count == 0"></div>
                    <div class="comment" v-if="item.count <= 100 && item.count > 0">{{ item.comment }}条评论</div>
                    <div class="comment" v-if="item.count <= 200 && item.count > 100">100+条评论</div>
                    <div class="comment" v-if="item.count <= 500 && item.count > 200">200+条评论</div>
                    <div class="comment" v-if="item.count <= 1000 && item.count > 500">500+条评论</div>
                    <div class="comment" v-if="item.count <= 2000 && item.count > 1000">1000+条评论</div>
                    <div class="comment" v-if="item.count <= 5000 && item.count > 2000">2000+条评论</div>
                    <div class="comment" v-if="item.count <= 10000 && item.count > 5000">5000+条评论</div>
                    <div class="comment" v-if="item.count <= 20000 && item.count > 10000">1万+条评论</div>
                    <div class="comment" v-if="item.count <= 50000 && item.count > 20000">2万+条评论</div>
                    <div class="comment" v-if="item.count <= 100000 && item.count > 50000">5万+条评论</div>
                    <div class="comment" v-if="item.count <= 200000 && item.count > 100000">10万+条评论</div>
                    <div class="comment" v-if="item.count <= 500000 && item.count > 200000">20万+条评论</div>
                    <div class="comment" v-if="item.count > 500000">50万+条评论</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            currentPage: 1,
            isLoading: false,
            list: [
                // {
                //     id: 0,
                //     marketType: 0,
                //     describe: "享食者无骨鸡爪柠檬酸辣网红即食罐装脱骨泡椒去骨凤爪零食小吃休闲食品 柠檬酸辣味【发3件共900g】",
                //     saleType: 0,
                //     comment: 2048,
                //     price: 59,
                //     discount: "0",
                //     src: require("../assets/product/1.png")
                // },
                // {
                //     id: 1,
                //     marketType: 1,
                //     describe: "蒙牛 纯牛奶 PURE MILK 250ml*16 每100ml含3.2g蛋白质",
                //     saleType: 1,
                //     comment: 0,
                //     price: 34.9,
                //     discount: "2件9折",
                //     src: require("../assets/product/2.png")
                // },
                // {
                //     id: 2,
                //     marketType: 0,
                //     describe: "典枫全铜新中式吊灯客厅灯玉石餐厅灯卧室禅意中国风中山别墅灯具套餐 6头（铜+玉石）全光谱三色灯泡",
                //     saleType: 0,
                //     comment: 256,
                //     price: 1198,
                //     discount: "每满500-150",
                //     src: require("../assets/product/3.png")
                // },
                // {
                //     id: 3,
                //     marketType: 1,
                //     describe: "伊利 安慕希希腊风味酸奶 原味205g*16盒/箱 多35%蛋白质 礼盒装",
                //     saleType: 1,
                //     comment: 2048,
                //     price: 59.9,
                //     discount: "满119享9折",
                //     src: require("../assets/product/4.png")
                // },
                // {
                //     id: 4,
                //     marketType: 0,
                //     describe: "老板（Robam）抽油烟机 欧式双腔21m³/min大吸力油烟机4.5kW小尺寸灶具燃气灶烟灶套装60A1+32B7D(天然气)",
                //     saleType: 1,
                //     comment: 1024,
                //     price: 3599,
                //     discount: "0",
                //     src: require("../assets/product/5.png")
                // },
                // {
                //     id: 5,
                //     marketType: 0,
                //     describe: "IVGO 蓝牙耳机真无线双耳运动跑步游戏适用于苹果华为vivo荣耀oppo一加手机通用",
                //     saleType: 2,
                //     comment: 0,
                //     price: 38.6,
                //     discount: "0",
                //     src: require("../assets/product/6.png")
                // },
                // {
                //     id: 6,
                //     marketType: 1,
                //     describe: "欧莱雅透明质酸水润洗发水护发素洗护套装无硅油(洗500ml*2+护500ml*1)",
                //     saleType: 1,
                //     comment: 524288,
                //     price: 109,
                //     discount: "0",
                //     src: require("../assets/product/7.png")
                // },
                // {
                //     id: 7,
                //     marketType: 1,
                //     describe: "李宁（LI-NING）篮球7号CBA比赛成人儿童青少年中考室内外训练标准七号蓝球 PU443",
                //     saleType: 1,
                //     comment: 2048,
                //     price: 80.9,
                //     discount: "0",
                //     src: require("../assets/product/8.png")
                // },
                // {
                //     id: 8,
                //     marketType: 0,
                //     describe: "ANDSEEYOU品牌 高级感小众设计真皮女包2023腋下包单肩包女托特包生日礼物 黑色",
                //     saleType: 2,
                //     comment: 18,
                //     price: 559,
                //     discount: "0",
                //     src: require("../assets/product/9.png")
                // },
                // {
                //     id: 9,
                //     marketType: 0,
                //     describe: "华为HUAWEI 原装6A数据线 USB Type-A转USB Type-C/1m线长/支持66W（11V6A）充电 白色CC790",
                //     saleType: 1,
                //     comment: 0,
                //     price: 49,
                //     discount: "每满49-4",
                //     src: require("../assets/product/10.png"),
                // }
            ],
            MAX_PAGE: 5
        }
    },
    methods: {
        handleScroll() {
            if (this.isLoading || this.currentPage === this.MAX_PAGE) {
                return;
            }
            const scrollTrigger = this.$refs.scrollTrigger;
            const triggerOffset = scrollTrigger.offsetTop + scrollTrigger.offsetHeight;
            const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (windowScrollTop + window.innerHeight >= triggerOffset) {
                this.loadNextPage();
            }
        },
        loadNextPage() {
            if (this.isLoading || this.currentPage === this.MAX_PAGE) {
                return;
            }
            this.isLoading = true;
            axios({
                method: "get",
                url: `http://leeyiqing.site/productPage.php?page=${this.currentPage}&size=20`
            }).then(res => {
                const newData = res.data.data;
                this.list = this.list.concat(newData);
                this.currentPage++;
                this.isLoading = false;
            }
            )
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.loadNextPage();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style lang="less">
#products {
    width: 100%;

    .product {
        width: 50%;
        text-align: center;
        margin-bottom: 20px;

        #productPic {
            width: 90%;
            border-radius: 10px;
        }

        #info {
            width: 80%;
            padding: 0 18px 18px;

            #describe {
                width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                word-break: break-all;
                -webkit-box-orient: vertical;
                font-size: 16px;
                line-height: 26px;
                height: 52px;
                text-align: left;


                #type {
                    height: 16px;
                    top: 3px;
                    margin-right: 5px;
                    position: relative;
                }
            }

            .price {
                color: #ff4142;
                width: 100%;
                text-align: left;
                margin-top: 4px;
                margin-bottom: 10px;

                #priceInt {
                    font-size: 24px;
                }

                .priceFloat {
                    font-size: 16px;
                }

                #discount {
                    font-size: 12px;
                    border: 1px solid #ff4142;
                    margin-left: 10px;
                    padding: 2px;
                    border-radius: 2px;
                }
            }

            .saleType {
                display: block;
                float: left;
                height: 16px;
                margin-right: 10px;
            }

            .comment {
                color: #999999;
                font-size: 12px;
                float: left;
            }
        }
    }
}
</style>