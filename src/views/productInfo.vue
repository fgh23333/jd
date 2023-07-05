<template>
    <div id="productInfo">
        <topBar>
            <div class="flex info">
                <span class="flex-item" :class="index == i ? 'bolder' : ''" v-for="(item, i) in list" :key="i" @click="changeInfo(i)">{{item.name}}</span>
                <!-- <span class="flex-item">商品</span> -->
                <!-- <span class="flex-item">评价</span> -->
                <!-- <span class="flex-item">详情</span> -->
                <!-- <span class="flex-item">推荐</span> -->
            </div>
        </topBar>
        <img :src="img">
    </div>
</template>

<script>
import topBar from "../components/topBar";

export default {
    components: {
        topBar
    },
    data() {
        return {
            img: 0,
            index: 0,
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
        },
        
    },
    mounted() {
        this.img = this.$route.query.img
    }
}
</script>

<style lang="less">
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

</style>