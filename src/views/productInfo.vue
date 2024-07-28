<template>
    <div id="productInfo">
        <div class="space"></div>
        <topBar>
            <div class="flex info">
                <span class="flex-item" :class="index == i ? 'bolder' : ''" v-for="(item, i) in list" :key="i"
                    @click="changeInfo(i)">{{ item.name }}</span>
                <!-- <span class="flex-item">商品</span> -->
                <!-- <span class="flex-item">评价</span> -->
                <!-- <span class="flex-item">详情</span> -->
                <!-- <span class="flex-item">推荐</span> -->
            </div>
        </topBar>
        <!-- <transition enter-active-class="animate__animated animate__bounceInLeft"
            leave-active-class="animate__animated animate__bounceOutLeft">
            <div v-show="show">
                css
            </div>
        </transition> -->
        <div ref="product" class="product">
            <img :src="obj.img">
            <div>{{ obj.name }}</div>
            <div><span>&yen</span>{{ obj.price }}</div>
        </div>
        <div ref="comment" class="comment">评价</div>
        <div ref="infomation" class="infomation">详情</div>
        <div ref="recommendation" class="recommendation">推荐</div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon to="/cart" icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
            <van-goods-action-button type="warning" text="加入购物车" @click="show = !show" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
        </van-goods-action>
        <!-- <van-sku v-model="show" :sku="sku" :goods="goods" :goods-id="goodsId" /> -->
        <transition name="sku1">
            <div class="mask" v-show="show" @click="show = !show">
                <transition name="sku2" >
                    <div class="bg" v-show="show" @click.stop>
                        <div class="chosenOption">已选：
                            <span class="detailChosenOption">{{ this.opt[0].type[this.opt[0].selected] }}</span>
                            <span class="detailChosenOption">{{ this.opt[1].type[this.opt[1].selected] }}</span>
                        </div>
                        <div v-for="(item1, x) in opt" :key="x" class="option">
                            <div class="optionName">{{ item1.name }}</div>
                            <ul class="optionList clear">
                                <li class="detailOption left" v-for="(item2, y) in item1.type" :key="y"
                                    @click="item1.selected = y">{{ item2 }}</li>
                            </ul>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
import topBar from "../components/topBar"
import axios from "axios"
import { Toast } from 'vant'

export default {
    components: {
        topBar
    },
    data() {
        return {
            obj: {},
            index: 0,
            topList: [],
            show: false,
            opt: [
                {
                    name: "型号：",
                    type: ['2H', 'H', 'HB', 'B', '2B'],
                    selected: 0
                },
                {
                    name: "颜色：",
                    type: ['Red', 'Green'],
                    selected: 0
                }
            ],
            goods: {
                picture: 'https://img01.yzcdn.cn/1.jpg'
            },
            goodsId: {

            },
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: '颜色', // skuKeyName：规格类目名称
                        k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                                id: '1', // skuValueId：规格值 id
                                name: '红色', // skuValueName：规格值名称
                                imgUrl: 'https://img01.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                            },
                            {
                                id: '1',
                                name: '蓝色',
                                imgUrl: 'https://img01.yzcdn.cn/2.jpg',
                                previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg',
                            }
                        ],
                        largeImageMode: true, //  是否展示大图模式
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                        id: 2259, // skuId
                        s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 100, // 价格（单位分）
                        stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: '1.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                        // 商品留言
                        datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                        multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                        name: '留言', // 留言名称
                        type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                        required: '1', // 是否必填 '1' 表示必填
                        placeholder: '', // 可选值，占位文本
                        extraDesc: ''  // 可选值，附加描述文案
                    }
                ],
                hide_stock: false // 是否隐藏剩余库存
            },
            list: [
                {
                    name: "商品"
                },
                {
                    name: "评价"
                },
                {
                    name: "详情"
                },
                {
                    name: "推荐"
                }
            ]
        }
    },
    methods: {
        changeInfo(e) {
            this.index = e
            document.documentElement.scrollTop = this.topList[e] - 50;
        },
        onClickIcon() {
            Toast('点击图标');
        },
        onClickButton() {
            Toast('点击按钮');
        }
    },
    mounted() {
        let pid = this.$route.params.id

        axios({
            method: "get",
            url: "https://api.alni.eu.org/productbyID.php?pid=" + pid
        }).then(res => {
            this.obj = res.data[0]
        })

        this.goodsId = this.$route.params.id

        this.topList.push(this.$refs["product"].offsetTop)
        this.topList.push(this.$refs["comment"].offsetTop)
        this.topList.push(this.$refs["infomation"].offsetTop)
        this.topList.push(this.$refs["recommendation"].offsetTop)

        document.addEventListener("scroll", () => {
            // 获取当前滚动条位置
            let scrollDistance = document.documentElement.scrollTop
            if (0 <= scrollDistance && scrollDistance < 800) {
                this.index = 0
            }
            if (800 <= scrollDistance && scrollDistance <= 2800) {
                this.index = 1
            }
            if (2800 <= scrollDistance && scrollDistance < 4000) {
                this.index = 2
            }
            if (4000 <= scrollDistance) {
                this.index = 3
            }
        })
    }
}
</script>

<style lang="less">
#productInfo {

    .chosenOption {
        text-align: center;
        margin: 20px 10px;

        .detailChosenOption {
            margin: 10px 10px;
        }
    }

    .option {
        .optionList {
            .detailOption {
                margin: 10px 10px;
            }
        }
    }

    .sku1-enter,
    .sku1-leave-to {
        opacity: 0;
    }

    .sku1-enter-active,
    .sku1-leave-active {
        transition: all 1s;
    }

    .sku1-enter-to,
    .sku1-leave {
        opacity: 1;
    }

    .sku2-enter,
    .sku2-leave-to {
        transform: translateY(100vh);
    }

    .sku2-enter-active,
    .sku2-leave-active {
        transition: all 1s;
    }

    .sku2-enter-to,
    .sku2-leave {
        transform: translateY(0);
    }

    .mask {
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;

        .bg {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: white;
            max-height: 555px;
            min-height: 400px;
            width: 100vw;
        }
    }

    .info {
        width: 70%;
        margin: 0 auto;

        .bolder::after {
            content: '';
            display: block;
            height: 3px;
            margin: 0 auto;
            position: relative;
            top: -10px;
            width: 2em;
            background-image: linear-gradient(90deg, #f5503a, #fad1cb);
        }
    }

    .product {
        height: 800px;
    }

    .comment {
        background-color: steelblue;
        height: 2000px;
        width: 100%;
    }

    .infomation {
        background-color: darkmagenta;
        height: 1200px;
        width: 100%;
    }

    .recommendation {
        background-color: gold;
        height: 1600px;
        width: 100%;
    }
}</style>