<template>
    <div id="bottomBar">
        <div class="icon left" v-for="(item,index) in list" :key="index">
            <img id="guideIcon" :src="item.src">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    src: require("../assets/icon/10066.png")
                },
                {
                    src: require("../assets/icon/10067.png")
                },
                {
                    src: require("../assets/icon/10068.png")
                },
                {
                    src: require("../assets/icon/10069.png")
                }
            ]
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
        
        .icon {
            width: 25%;

            #guideIcon {
                width: 50%;
            }
        }
    }
</style>