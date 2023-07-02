<template>
    <div id="roll">
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/img/10003.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/10004.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/10005.jpg">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
    mounted() {
        new Swiper('.swiper', {
            loop: true, 
            pagination: {
                el: '.swiper-pagination'
            }
        })
    // methods: {
    //     onSwiper(swiper) {
    //         console.log(swiper);
    //     },
    //     onSlideChange() {
    //         console.log('slide change');
    //     }
    // }
    }
}
</script>

<style lang="less">
    // #roll {
    //     width: 100%;
    // }
</style>