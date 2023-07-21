<template>
    <div id="loginPage">
        <topBar>
            登录注册
        </topBar>
        <div class="space"></div>
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import topBar from "../components/topBar.vue"

export default {
    components: {
        topBar
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        onSubmit(values) {
            this.$store.commit("changeLogin", true)
            console.log('submit', values);
        },
    },
}
</script>