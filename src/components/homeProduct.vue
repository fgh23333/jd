<template>
    <div id="products">
        <div class="product left" v-for="(item,index) in list" :key="index">
            <img id="productPic" :src="item.src">
            <div id="info">
                <div id="describe">
                    <img id="type" v-if="item.marketType == 1" src="../assets/product/mt.png">{{item.describe}}
                </div>
                <div class="price left">&yen
                    <span id="priceInt">{{parseInt(item.price)}}</span>
                    <span class="priceFloat">.{{parseInt(item.price * 100) - parseInt(item.price) * 100}}</span>
                    <span class="priceFloat" v-if="parseInt(item.price * 100) - parseInt(item.price) * 100 == 0">0</span>
                    <span id="discount" v-if="item.discount != '0'">{{item.discount}}</span>
                </div>
                <img class="saleType" v-if="item.saleType == 1" src="../assets/product/self.png">
                <img class="saleType" v-if="item.saleType == 2" src="../assets/product/log.png">
                <div class="comment" v-if="item.comment  == 0"></div>
                <div class="comment" v-if="item.comment <= 100 && item.comment > 0">{{item.comment}}条评论</div>
                <div class="comment" v-if="item.comment <= 200 && item.comment > 100">100+条评论</div>
                <div class="comment" v-if="item.comment <= 500 && item.comment > 200">200+条评论</div>
                <div class="comment" v-if="item.comment <= 1000 && item.comment > 500">500+条评论</div>
                <div class="comment" v-if="item.comment <= 2000 && item.comment > 1000">1000+条评论</div>
                <div class="comment" v-if="item.comment <= 5000 && item.comment > 2000">2000+条评论</div>
                <div class="comment" v-if="item.comment <= 10000 && item.comment > 5000">5000+条评论</div>
                <div class="comment" v-if="item.comment <= 20000 && item.comment > 10000">1万+条评论</div>
                <div class="comment" v-if="item.comment <= 50000 && item.comment > 20000">2万+条评论</div>
                <div class="comment" v-if="item.comment <= 100000 && item.comment > 50000">5万+条评论</div>
                <div class="comment" v-if="item.comment <= 200000 && item.comment > 100000">10万+条评论</div>
                <div class="comment" v-if="item.comment <= 500000 && item.comment > 200000">20万+条评论</div>
                <div class="comment" v-if="item.comment > 500000">50万+条评论</div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            list: [
                {
                    marketType: 0,
                    describe: "享食者无骨鸡爪柠檬酸辣网红即食罐装脱骨泡椒去骨凤爪零食小吃休闲食品 柠檬酸辣味【发3件共900g】",
                    saleType: 0,
                    comment: 2048,
                    price: 59,
                    discount: "0",
                    src: require("../assets/product/1.png")
                },
                {
                    marketType: 1,
                    describe: "蒙牛 纯牛奶 PURE MILK 250ml*16 每100ml含3.2g蛋白质",
                    saleType: 1,
                    comment: 0,
                    price: 34.9,
                    discount: "2件9折",
                    src: require("../assets/product/2.png")
                },
                {
                    marketType: 0,
                    describe: "典枫全铜新中式吊灯客厅灯玉石餐厅灯卧室禅意中国风中山别墅灯具套餐 6头（铜+玉石）全光谱三色灯泡",
                    saleType: 0,
                    comment: 256,
                    price: 1198,
                    discount: "每满500-150",
                    src: require("../assets/product/3.png")
                },
                {
                    marketType: 1,
                    describe: "伊利 安慕希希腊风味酸奶 原味205g*16盒/箱 多35%蛋白质 礼盒装",
                    saleType: 1,
                    comment: 2048,
                    price: 59.9,
                    discount: "满119享9折",
                    src: require("../assets/product/4.png")
                },
                {
                    marketType: 0,
                    describe: "老板（Robam）抽油烟机 欧式双腔21m³/min大吸力油烟机4.5kW小尺寸灶具燃气灶烟灶套装60A1+32B7D(天然气)",
                    saleType: 1,
                    comment: 1024,
                    price: 3599,
                    discount: "0",
                    src: require("../assets/product/5.png")
                },
                {
                    marketType: 0,
                    describe: "IVGO 蓝牙耳机真无线双耳运动跑步游戏适用于苹果华为vivo荣耀oppo一加手机通用",
                    saleType: 2,
                    comment: 0,
                    price: 38.6,
                    discount: "0",
                    src: require("../assets/product/6.png")
                },
                {
                    marketType: 1,
                    describe: "欧莱雅透明质酸水润洗发水护发素洗护套装无硅油(洗500ml*2+护500ml*1)",
                    saleType: 1,
                    comment: 524288,
                    price: 109,
                    discount: "0",
                    src: require("../assets/product/7.png")
                },
                {
                    marketType: 1,
                    describe: "李宁（LI-NING）篮球7号CBA比赛成人儿童青少年中考室内外训练标准七号蓝球 PU443",
                    saleType: 1,
                    comment: 2048,
                    price: 80.9,
                    discount: "0",
                    src: require("../assets/product/8.png")
                },
                {
                    marketType: 0,
                    describe: "ANDSEEYOU品牌 高级感小众设计真皮女包2023腋下包单肩包女托特包生日礼物 黑色",
                    saleType: 2,
                    comment: 18,
                    price: 559,
                    discount: "0",
                    src: require("../assets/product/9.png")
                },
                {
                    marketType: 0,
                    describe: "华为HUAWEI 原装6A数据线 USB Type-A转USB Type-C/1m线长/支持66W（11V6A）充电 白色CC790",
                    saleType: 1,
                    comment: 0,
                    price: 49,
                    discount: "每满49-4",
                    src: require("../assets/product/10.png"),
                }
            ]
        }
    }
}
</script>

<style lang="less">
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
</style>