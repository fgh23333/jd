<template>
    <div id="categories">
        <van-grid :column-num="1">
            <van-grid-item v-for="(item, index) in list" :key="index" :text="item.text" />
        </van-grid>
    </div>
</template>
        
<script>
export default {
    data() {
        return {
            list:[
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