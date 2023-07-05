<template>
    <div id="quickNav" class="clear">
        <div class="box left" v-for="(item, index) in list" :key="index">
            <img class="photo" :src="item.src">
            <div class="word">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        src: require("../assets/icon/10011.png"),
                        name: "京东超市"
                    },
                    {
                        src: require("../assets/icon/10012.png"),
                        name: "数码电器"
                    },
                    {
                        src: require("../assets/icon/10013.png"),
                        name: "京东新百货"
                    },
                    {
                        src: require("../assets/icon/10014.png"),
                        name: "京东生鲜"
                    },
                    {
                        src: require("../assets/icon/10015.png"),
                        name: "京东到家"
                    },
                    {
                        src: require("../assets/icon/10016.png"),
                        name: "充值中心"
                    },
                    {
                        src: require("../assets/icon/10017.png"),
                        name: "附近好店"
                    },
                    {
                        src: require("../assets/icon/10018.png"),
                        name: "PLUS会员"
                    },
                    {
                        src: require("../assets/icon/10019.png"),
                        name: "京东国际"
                    },
                    {
                        src: require("../assets/icon/10020.png"),
                        name: "京东拍卖"
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    #quickNav {
        text-align: center;
        .box {
            width: 20%;
            margin: 10px 0;

            .photo {
                width: 50%;
            }
            
            .word {
                font-size: 12px;
            }
        }
    }
</style>