<template>
    <div id="topBar">
        <div class="flex list">
            <div class="back" @click="goBack">
                <van-icon name="arrow-left" />
            </div>
            <div class="info flex-item">
                <slot></slot>
            </div>
            <div class="more"><van-icon name="ellipsis" /></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less">
#topBar {
    width: 100%;
    background: white;
    text-align: center;
    height: 50px;
    line-height: 50px;
    position: fixed;
    top: 0;
    left: 0;

    .list {

        .back,
        .more {
            width: 50px;
        }
    }
}
</style>