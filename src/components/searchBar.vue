<template>
    <div id="searchBar" class="clear">
        <div id="menu" class="left">菜单</div>
        <div id="search" class="left">
            <div id="inputbox">
                <img src="../assets/icon/10073.png" class="jd">
                <input type="search" id="search-in" placeholder="扫地机器人智能">
            </div>
        </div>
        <div id="login" class="left">
            <span v-if="$store.state.isLogin" @click="$store.commit('changeLogin', false)">退出</span>
            <span v-else><router-link to="/login">登录</router-link></span>
        </div>
    </div>
</template>

<style lang="less">
    #searchBar {
        background-color: #E43130;
        height: 44px;
        text-align: center;
        width: 100%;
        position: fixed;
        
        .left {
        float: left;
        }

        #menu, #login {
            width: 50px;
            color: white;
            line-height: 44px;

            a{
                color: white;
            }
        }

        #search {
            height: 30px;
            width: calc(100vw - 100px);
            background-color: white;
            margin: 7px 0;
            border-radius: 15px;
        }

        #inputbox {
            line-height: 30px;
            position: relative;

            .jd {
                width: 20px;
                height: 15px;
                left: 15px;
                top: 7px;
                position: absolute;
            }
                
            #search-in {
                border: none;
                outline: none;
                width: 70%;
                display: inline;
                left: 30px;
                position: relative;
            }
        }
    }
</style>