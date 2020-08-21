<template>
<div class="header">
    <div class="top-nav">
        <a href="#/" class="top_logo"></a>
        <div class="top_nav">
            <a href="#/">在线商城</a>
            <a href="#/">坚果Pro2s</a>
            <a href="#/">坚果R1</a>
            <a href="#/">坚果TNT工作站</a>
            <a href="#/">Smartisan OS</a>
            <a href="#/">欢喜云</a>
            <a href="#/">应用</a>
            <a href="#/">论坛</a>
            <a href="#/">荣誉与奖项</a>
        </div>
        <div class="top_right">
            <span href="#/" id="self">
                <div id="car_down_null">
                    <div></div>
                    <p>你好:<span id="user1"></span></p>
                    <p>欢迎光临</p>
                    <p id="exit">退出</p>

                </div>
            </span>
            <a href="#/" id="car"></a>
        </div>
        <div class="clear"></div>
    </div>
    <div class="center-nav" @mouseleave="seen=false">
        <div>
            <div id="nav">
                <a href="#/" @mouseenter="navShow(0)">首页</a>
                <a href="#/" @mouseenter="navShow(1)">手机</a>
                <a href="#/" @mouseenter="navShow(2)">官方配件</a>
                <a href="#/" @mouseenter="navShow(3)">服饰箱包</a>
                <a href="#/" @mouseenter="navShow(4)">畅呼吸</a>
                <a href="#/" @mouseenter="navShow(5)">服务</a>
                <div id="fall" v-show="seen">  <!--下拉列表-->
                    <div id="f1" v-show="nowIndex==0">          <!-- 第一个-->
                        <div>
                            <a href="#/" class="f1_act">手机</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(1)+')'}">手机</a>
                        </div>
                        <div>
                            <a href="#/" class="f1_act">官方配件</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(2)+')'}">数据线</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(3)+')'}">充电器</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(4)+')'}">线控耳机</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(5)+')'}">移动电源</a>
                        </div>
                        <div>
                            <a href="#/" class="f1_act">配件</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(6)+')'}">拍照配件</a>
                        </div>
                        <div >
                            <a href="#/" class="f1_act">畅呼吸系列</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(7)+')'}">空气净化器</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(8)+')'}">生活电器配件</a>
                        </div>
                        <div >
                            <a href="#/" class="f1_act">服饰箱包</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(9)+')'}">箱包</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(10)+')'}">男装</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(11)+')'}">鞋</a>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div id="f2" v-show="nowIndex==1">
                        <div><a href="#/" class="act2" :style="{backgroundImage: 'url('+require('../assets/img/f2_1.png')+')'}">
                            <p>坚果R1</p>
                            <p>￥2990.00<span>起</span></p>
                        </a></div>
                        <div><a href="#/" class="act2" :style="{backgroundImage: 'url('+require('../assets/img/f2_2.png')+')'}">
                            <p>坚果R1</p>
                            <p>￥2990.00<span>起</span></p>
                        </a></div>
                        <div><a href="#/" class="act2" :style="{backgroundImage: 'url('+require('../assets/img/f2_3.png')+')'}">
                            <p>坚果Rro2s</p>
                            <p>￥1798.00<span>起</span></p>
                        </a></div>
                        <div><a href="#/" class="act2" :style="{backgroundImage: 'url('+require('../assets/img/f2_4.png')+')'}">
                            <p>坚果3</p>
                            <p>￥1299.00<span>起</span></p>
                        </a></div>
                        <div class="clear"></div>
                    </div>
                    <div id="f3" v-show="nowIndex==2">
                        <div id="f1_1">
                            <a href="#/" class="f1_act">耳机</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(12)+')'}">线控耳机</a>
                        </div>
                        <div id="f1_2">
                            <a href="#/" class="f1_act">手机充电配件</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(13)+')'}">数据线</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(14)+')'}">充电器</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(15)+')'}">移动电源</a>
                        </div>
                        <div id="f1_3">
                            <a href="#/" class="f1_act">自拍杆</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(16)+')'}">自拍杆</a>
                        </div>
                        <div id="f1_4">
                            <a href="#/" class="f1_act">音箱</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(17)+')'}">音箱</a>
                        </div>
                        <div id="f1_5">
                            <a href="#/" class="f1_act">车载配件</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(18)+')'}">车载充电器</a>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div id="f4" v-show="nowIndex==3">
                        <div >
                            <a href="#/" class="f1_act">服饰</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(19)+')'}">T恤</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(20)+')'}">POLO杉</a>
                        </div>
                        <div >
                            <a href="#/" class="f1_act">鞋</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(21)+')'}">帆布鞋</a>
                        </div>
                        <div >
                            <a href="#/" class="f1_act">箱包</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(22)+')'}">拉杆箱</a>
                                <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(23)+')'}">包</a>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div id="f5" v-show="nowIndex==4">
                        <div >
                            <a href="#/" class="f1_act">生活电器</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(24)+')'}">空气净化器</a>
                            <a href="#/" class="f2_act" :style="{backgroundImage:'url('+imgUrl(25)+')'}">生活电器配件</a>
                        </div>
                    </div>
                    <div id="f6" v-show="nowIndex==5">
                        <h4>服务政策</h4>
                        <h4>在线客服</h4>
                        <h4>发起售后</h4>
                    </div>
                </div>
            </div>
            <div id="search">
                <input type="text" @click="search=true" @blur="search=false">
                <a href="#/" class="s1" v-show="!search">T恤</a>
                <div id="bar" v-show="search">
                    <p></p>
                    <a href="#/">T恤</a>
                    <a href="#/">移动电源</a>
                    <a href="#/">帆布鞋</a>
                    <a href="#/">保护套</a>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            // imgUrl: require('../assets/img/f1_1.jpg'),
            // imgUrl2: require('../assets/img/f2_1.png'),
            nowIndex: 0,
            seen: false,
            search: false,
        }
    },
    methods: {
        navShow(n){
            this.nowIndex=n;
            this.seen=true;
        }
    },
    computed: {
        imgUrl:()=>(n)=>{
            return require('../assets/img/f1_'+n+'.jpg')
        }
    }
}
</script>

<style scoped>
* {margin:0;padding:0;}
body {overflow-x:hidden;background-color:rgb(237,237,237);}
li {list-style-type:none;}
a {color:black;text-decoration:none;}
.top-nav {width:100%;height:45px;background-color:rgb(40,41,44);position:relative;}
.top-nav a{
    display: inline-block;
    text-decoration: none;
    line-height: 45px;
}
.top-nav a:hover{
    color:#E5E5E5;
}
.top_logo{
    background: url('../assets/img/logo.png') center center no-repeat;
    height: 45px;
    background-size: 18px 18px;
    width: 30px;
    margin-left: 20px;
    float: left;
}
.top_nav{
    width: 1220px;
    height: 45px;
    margin: 0 auto;
    text-align: center;
}
.top_nav>a{
    color: hsla(0,0%,100%,.7);
    font-size: 12px;
    padding: 0 20px;
}
.top_nav>a:nth-child(1){
    color:#E5E5E5;
    font-weight: 600;
}
.top_right{
    height: 45px;
    float: right;
    position: absolute;
    right: 20px;
    top: 0;
}
.top_right>span:nth-child(1){
    padding: 0 5px;
    width: 25px;
    height: 45px;
    background: url("../assets/img/self.png") no-repeat center center;
    background-size: 20px 20px;
    position: absolute;
    top: 0px;
    left: -36px;
}
.top_right>a:nth-child(2){
    padding: 0 5px;
    width: 25px;
    height: 45px;
    background: url("../assets/img/car.png") no-repeat center center;
    background-size: 20px 20px;
}
.clear{
    clear: both;
}
#car_down_null{
    width: 120px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    right: -36px;
    top: 47px;
    display: none;
    border: 1px solid #E5E5E5;
    z-index: 99;
}
#car_down_null>div{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url("../assets/img1/self-down.png");
    background-size: 50px 50px;
    margin: 20px auto;
}

#car_down_null>p:nth-child(2){
    font-size: 12px;
    text-align: center;
    color: rgb(191,191,191);
    margin-top: -14px;
    padding-top: 10px;
}
#user1{
    margin-top: -30px;
}
#car_down_null>p:nth-child(3){
    font-size: 20px;
    text-align: center;
    color: black;
    padding-top: 10px;
}
#exit{
    font-size: 14px;
    padding-top: 16px;
    text-align: center;
    color: rgb(191,191,191);
    cursor: pointer;
}
.center-nav{
    width: 100%;
    height: 75px;
    background-color: white;
    /*position: relative;*/
}
.center-nav>div{
    width: 1220px;
    height: 75px;
    margin: 0 auto;
}
#nav{
    float: left;
    line-height: 75px;
}
#nav>a{
    display: inline-block;
    color: black;
    font-size: 14px;
    padding-right: 23px;
    font-weight: 300;
}
#nav>a:nth-child(1){
    color: black;
    font-weight: 600;
}
#nav>a:hover{
    color: rgb(80,121,217);
}
#fall{
    width: 100%;
    height: 300px;
    background-color: white;
    border: 1px solid rgba(	112,128,144,0.7);
    /* display: none; */
    position: absolute;
    z-index: 2;
    top: 120px;
    left: 0;
}
#f1{
    width: 1220px;
    margin: 0 auto;
    padding-left: 150px;
    /* display: none; */
}
#f1>div{
    width: 240px;
    /*margin-top: 20px;*/
    float: left;
}
#f1 a{
    display: block;
}
#f3{
    width: 1220px;
    margin: 0 auto;
    /* display: none; */
    padding-left: 100px;
}
#f3>a{
    display: block;
}
#f3>div{
    width: 240px;
    margin-top: 20px;
    float: left;
}
#f4{
    width: 1220px;
    margin: 0 auto;
    /* display: none; */
    padding-left: 150px;
}
#f4>a{
    display: block;
}
#f4>div{
    width: 240px;
    margin-top: 20px;
    margin-left: 120px;
    float: left;
}
#f5{
    width: 220px;
    margin: 0 auto;
    /* display: none; */
}
#f5>a{
    display: block;
}
#f5>div{
    width: 220px;
    margin-top: 20px;
    /*margin-left: 120px;*/
    float: left;
}
/* #f6{
    display: none;
} */
#f6>h4:nth-child(1){
     margin-top: 30px;
 }
#f6>h4{
    margin-top: 20px;
    text-align: center;
    line-height: 30px;
}
.f1_act{
    font-size: 12px;
    color: pink;
    font-weight: 600;
}
.f2_act{
    font-size: 16px;
    /*height: 60px;*/
    line-height: 50px;
    color: black;
    font-weight: 600;
    padding-left: 50px;
    background-position: 0 center;
    background-repeat: no-repeat;
    margin-left: 10px;
    display: block;
}
#f2{
    width: 1000px;
    margin: 30px auto;
    padding-left: 280px;
    text-align: center;
    /* display: none; */
}
.act2{
    float: left;
    text-align: center;
    display: block;
    width: 180px;
    /*height: 200px;*/
    background-repeat: no-repeat;
    background-position: center 0;
}
.act2>p:nth-child(1){
    margin-top: 160px;
    font-weight: 500;
    line-height: 20px;
}
.act2>p:nth-child(2){
    margin-top: 10px;
    line-height: 20px;
    font-weight: 500;
    color: red;
}
.act2>p:nth-child(2)>span{
    font-size: 14px;
    font-weight: 500;
    color: gray;
}
#search{
    float: right;
    padding-top: 20px;
    position: relative;
}
#search>input{
    width: 300px;
    height: 35px;
    outline: none;
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 20px;
    padding-left: 45px;
    background-image: url("../assets/img/search.png");
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 14px 10px;
}
.s1{
    display: inline-block;
    width: 40px;
    height: 20px;
    border: 1px solid skyblue;
    border-radius: 30px;
    font-size: 12px;
    line-height: 20px;
    color: #3965cc;
    background-color:#e5efff;
    position: absolute;
    right: 10px;
    top: 27px;
    text-align: center;
}
#bar{
    position: absolute;
    right: -4px;
    top: 76px;
    width: 350px;
    height: 150px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    /* display: none; */
    z-index: 3;
}
#bar>p{
    width: 25px;
    height: 20px;
    /* background-image: url("../assets/img/bar_top.png"); */
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: 0px -5px;
    position: absolute;
    left: 54px;
    top: -12px;
}
#bar>a{
    display: block;
    padding: 7px 40px;
    color: rgb(120,120,120);
}
#bar>a:hover{
    color: #3965cc;
    font-weight: 600;
}
.fixed-nav{
    width: 100%;
    height: 75px;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
}

</style>