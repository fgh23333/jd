<template>
    <div id="topBar">
        <div class="flex list">
            <div class="back">返回</div>
            <div class="info flex-item">
                <slot></slot>
            </div>
            <div class="more">更多</div>
        </div>
    </div>
</template>

<style lang="less">
    #topBar {
        text-align: center;
        height: 50px;
        line-height: 50px;
        .list {
            .back, .more {
                width: 50px;
            }
        }
    }
</style>