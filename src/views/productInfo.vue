<template>
    <div id="productInfo">
        <div class="space"></div>
        <topBar>
            <div class="flex info">
                <span class="flex-item" :class="index == i ? 'bolder' : ''" v-for="(item, i) in list" :key="i" @click="changeInfo(i)">{{item.name}}</span>
                <!-- <span class="flex-item">商品</span> -->
                <!-- <span class="flex-item">评价</span> -->
                <!-- <span class="flex-item">详情</span> -->
                <!-- <span class="flex-item">推荐</span> -->
            </div>
        </topBar>
        <div ref="product" class="product">
            <img :src="obj.img">
            <div>{{obj.name}}</div>
            <div><span>&yen</span>{{obj.price}}</div>
        </div>
        <div ref="comment" class="comment">评价</div>
        <div ref="infomation" class="infomation">详情</div>
        <div ref="recommendation" class="recommendation">推荐</div>
    </div>
</template>

<script>
import topBar from "../components/topBar"
import axios from "axios"

export default {
    components: {
        topBar
    },
    data() {
        return {
            obj: {},
            index: 0,
            topList:[],
            list:[
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
        
    },
    mounted() {
        let pid = this.$route.params.id

        axios({
            method: "get",
            url: "http://leeyiqing.site/productbyID.php?pid=" + pid
        }).then(res => {
            console.log(res)
            this.obj = res.data[0]
        })
        
        this.topList.push(this.$refs["product"].offsetTop)
        this.topList.push(this.$refs["comment"].offsetTop)
        this.topList.push(this.$refs["infomation"].offsetTop)
        this.topList.push(this.$refs["recommendation"].offsetTop)
        console.log(this.topList)


        document.addEventListener("scroll", () => {
            // 获取当前滚动条位置
            let scrollDistance = document.documentElement.scrollTop
            if (0 <= scrollDistance && scrollDistance < 800) {
                this.index = 0
            }
            if (800 <= scrollDistance && scrollDistance < 2800) {
                this.index = 1
            }
            if (2800 <= scrollDistance && scrollDistance < 4800) {
                this.index = 2
            }
            if (4800 <= scrollDistance ) {
                this.index = 3
            }
        })
    }
}
</script>

<style lang="less">
    #productInfo {
        .space {
            height: 50px;
            width: 100%;
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
                background-image: linear-gradient(90deg,#f5503a,#fad1cb);
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
    }
    
</style>