<template>
    <div id="productCard">
        <div class="itemCard clear" v-for="item in list" :key="item.id">
            <van-checkbox class="itemCheck left" v-model="item.checked" checked-color="#ee0a24" />
            <van-card class="itemInfo left" :price="item.price" :title="item.describe" :thumb="item.src">
                <template #num>
                    <van-stepper v-model="item.value" theme="round" button-size="22" integer />
                </template>
            </van-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allChecked: false
        }
    },
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    updated() {
        // console.log(this.list.every(item => item.checked));
        this.allChecked = this.list.every(item => item.checked)
        // this.list.forEach(item => {
        //     item.checked = value;
        // });
        if (this.allChecked == true) {
            this.$emit("allChecked", true)
        } else {
            this.$emit("allChecked", false)
        }
        console.log(this.allChecked + "???")
    }
}
</script>

<style lang="less">
#productCard {

    .itemCard {
        margin-top: 20px;

        .itemCheck {
            padding: 42px 10px;
        }

        .itemInfo {
            margin: 0 auto;
            width: 90%;
            padding: 4px;
        }
    }
}
</style>