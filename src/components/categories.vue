<template>
    <div id="categories">
        <el-row class="tac">
            <el-col :span="12">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <span slot="title">热门推荐</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span slot="title">手机数码</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <span slot="title">京东超市</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span slot="title">家用电器</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <span slot="title">电脑办公</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <span slot="title">玩具乐器</span>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <span slot="title">家居厨具</span>
                    </el-menu-item>
                    <el-menu-item index="8">
                        <span slot="title">家具家装</span>
                    </el-menu-item>
                    <el-menu-item index="9">
                        <span slot="title">男装</span>
                    </el-menu-item>
                    <el-menu-item index="10">
                        <span slot="title">男鞋</span>
                    </el-menu-item>
                    <el-menu-item index="11">
                        <span slot="title">女装</span>
                    </el-menu-item>
                    <el-menu-item index="12">
                        <span slot="title">女鞋</span>
                    </el-menu-item>
                    <el-menu-item index="13">
                        <span slot="title">美妆护肤</span>
                    </el-menu-item>
                    <el-menu-item index="14">
                        <span slot="title">医药保健</span>
                    </el-menu-item>
                    <el-menu-item index="15">
                        <span slot="title">酒水饮料</span>
                    </el-menu-item>
                    <el-menu-item index="16">
                        <span slot="title">运动户外</span>
                    </el-menu-item>
                    <el-menu-item index="17">
                        <span slot="title">汽车生活</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {

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