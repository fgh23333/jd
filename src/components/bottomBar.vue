<template>
    <div id="bottomBar">
        <div class="icon left" v-for="(item,index) in list" :key="index">
            <router-link :to="item.url"><img id="guideIcon" :src="active == item.url ? item.act : item.src"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    url: "/",
                    src: require("../assets/icon/10070.png"),
                    act: require("../assets/icon/10066.png")
                },
                {
                    url: "/category",
                    src: require("../assets/icon/10067.png"),
                    act: require("../assets/icon/10065.png")
                },
                {
                    url: "/cart",
                    src: require("../assets/icon/10068.png"),
                    act: require("../assets/icon/10071.png")
                },
                {
                    url: "/me",
                    src: require("../assets/icon/10069.png"),
                    act: require("../assets/icon/10072.png")
                }
            ]
        }
    },
    props: {
        active: {
            type: String,
            default: "/"
        }
    }
}
</script>

<style lang="less">
    #bottomBar {
        position: fixed;
        bottom: 0;
        left: 0;
        text-align: center;
        background-color: white;
        width: 100%;
        height: 50px;
        
        .icon {
            width: 25%;

            #guideIcon {
                width: 50%;
            }
        }
    }
</style>