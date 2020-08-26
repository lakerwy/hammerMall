<template>
<div class="home">
    <!-- 轮播图 -->
    <div id="banner" @mouseover="offTimer" @mouseout="onTimer">
        <a href="#" class="ban_act"><img :src="bannerUrl[nowIndex]" ></a>
        <div id="ban_btn">
            <span class="ban_btn_act" v-for="(item,index) in bannerUrl" :key="item" :style="{backgroundColor: nowIndex==index?'white':'gray'}" @click="btnClick(index)"></span>
        </div>
    </div>
    <!-- 热门商品  href="#/"-->
    <div id="hotGoogs_top">
        <h3>热门商品</h3>
        <div id="hg-btn">
            <button id="hg-prev" @click="hotPrev"></button>
            <button id="hg-next" @click="hotNext"></button>
        </div>
        <div class="clear"></div>
    </div>
    <div id="hotGoogs_main">
        <div v-for="item in hotGood" :key="item.id" v-show="item.id>=hotIndex">
        <a href="#/">
            <div class="hotGoogs" :style="{backgroundImage: 'url('+bgImgs(item.bgUrl[item.nowNav])+')'}" @mouseover="item.btnSeen=true" @mouseout="item.btnSeen=false">
                <h4 class="hg_titlt">{{item.title}}</h4>
                <div class="hotGoods-cycle">
                    <span class="hotGoods-cycle-span" :style="{backgroundImage: 'url('+bgSpan(nav)+')'}" v-for="(nav,index) in item.bgUrl" :key="index" @mouseover="item.nowNav=index"></span>
                </div>
                <p class="hotGoods-price" v-show="!item.btnSeen">{{item.price}}<span></span></p>
                <p class="hotGoods-pay">
                    <button v-show="item.btnSeen">{{item.btn1}}</button>
                    <button v-show="item.btnSeen">{{item.btn2}}</button>
                </p>
            </div>
        </a>
        </div>
    </div>

    <!-- 服饰专场  加detial.html-->
    <div id="cloth_top">
        <h3>服饰专场</h3>
    </div>
    <div id="cloth_main">
        <a href="#/">
        </a>
        <a href="#/">
            <h4 class="hg_titlt">Smartisan T恤 丑小鸭</h4>
            <div class="hotGoods-cycle">
                <span class="hotGoods-cycle-span" id="13"></span>
                <span class="hotGoods-cycle-span" id="14"></span>
                <span class="hotGoods-cycle-span" id="15"></span>
                <span class="hotGoods-cycle-span" id="16"></span>
                <span class="hotGoods-cycle-span" id="17"></span>
                <span class="hotGoods-cycle-span" id="18"></span>
            </div>
            <p class="hotGoods-price">￥&nbsp;149.00<span></span></p>
            <p class="hotGoods-pay">
                <button>查看详情</button>
            </p>
        </a>
        <a href="#/">
            <h4 class="hg_titlt">Smartisan T恤 红白机</h4>
            <div class="hotGoods-cycle">
                <span class="hotGoods-cycle-span" id="19"></span>
                <span class="hotGoods-cycle-span" id="20"></span>
            </div>
            <p class="hotGoods-price">￥&nbsp;99.00<span></span></p>
            <p class="hotGoods-pay">
                <button>查看详情</button>
            </p>
        </a>
        <a href="#/">
            <h4 class="hg_titlt">Smartisan T恤 迪特拉姆斯</h4>
            <div class="hotGoods-cycle">
                <span class="hotGoods-cycle-span" id="21"></span>
                <span class="hotGoods-cycle-span" id="22"></span>
                <span class="hotGoods-cycle-span" id="23"></span>

            </div>
            <p class="hotGoods-price">￥&nbsp;99.00<span></span></p>
            <p class="hotGoods-pay">
                <button>查看详情</button>
            </p>
        </a>
        <a href="#/">
            <h4 class="hg_titlt">Smartisan T恤 经典款</h4>
            <div class="hotGoods-cycle">
                <span class="hotGoods-cycle-span" id="24"></span>
                <span class="hotGoods-cycle-span" id="25"></span>
                <span class="hotGoods-cycle-span" id="26"></span>
                <span class="hotGoods-cycle-span" id="27"></span>
                <span class="hotGoods-cycle-span" id="28"></span>
                <span class="hotGoods-cycle-span" id="29"></span>
                <span class="hotGoods-cycle-span" id="30"></span>
            </div>
            <p class="hotGoods-price">￥&nbsp;149.00<span></span></p>
            <p class="hotGoods-pay">
                <button>查看详情</button>
            </p>
        </a>
        <a href="#/">
            <h4 class="hg_titlt">Smartisan Polo衫 经典款</h4>
            <div class="hotGoods-cycle">
                <span class="hotGoods-cycle-span" id="31"></span>
                <span class="hotGoods-cycle-span" id="32"></span>

            </div>
            <p class="hotGoods-price">￥&nbsp;149.00<span></span></p>
            <p class="hotGoods-pay">
                <button>查看详情</button>
            </p>
        </a>
        <a href="#/">
            <h4 class="hg_titlt">Smartisan 帆布鞋</h4>
            <div class="hotGoods-cycle">
                <span class="hotGoods-cycle-span" id="33"></span>
                <span class="hotGoods-cycle-span" id="34"></span>
                <span class="hotGoods-cycle-span" id="35"></span>
                <span class="hotGoods-cycle-span" id="36"></span>
            </div>
            <p class="hotGoods-price">￥&nbsp;149.00<span></span></p>
            <p class="hotGoods-pay">
                <button>查看详情</button>
            </p>
        </a>
        <div class="clear"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            timer:null,
            nowIndex: 0,
            bannerUrl:[require('../assets/img/ban-1.jpg'),require('../assets/img/ban-2.jpg'),require('../assets/img/ban-3.jpg')],

            // 热门商品的数据
            hotIndex: 0,
            hotGood: [
                {id: 0, bgUrl: [1,2,3],title: 'Smartisan T恤 薛定谔',price: '￥ 149.00',btn1: '查看详情',btn2: '加入购物车',btnSeen: false,nowNav: 0,},
                {id: 1, bgUrl: [4,5],title: '坚果砖式蓝牙小音箱',price: '￥ 99.00',btn1: '查看详情',btn2: '加入购物车',btnSeen: false,nowNav: 0,},
                {id: 2, bgUrl: [6],title: '坚果三脚架自拍杆',price: '￥ 89.00',btn1: '查看详情',btn2: '加入购物车',btnSeen: false,nowNav: 0,},
                {id: 3, bgUrl: [7],title: '各色DNA检测套装',price: '￥ 169.00',btn1: '查看详情',btn2: '加入购物车',btnSeen: false,nowNav: 0,},
                {id: 4, bgUrl: [100],title: '畅呼吸除甲醛超级活性炭滤芯',price: '￥ 499.00',btn1: '查看详情',btn2: '加入购物车',btnSeen: false,nowNav: 0,},
                {id: 5, bgUrl: [8],title: '畅呼吸除甲醛超级活性炭滤芯',price: '￥ 169.00',btn1: '查看详情',btn2: '加入购物车',btnSeen: false,nowNav: 0,},
                {id: 6, bgUrl: [9,10,11],title: '地平线 8 号旅行箱',price: '￥ 169.00',btn1: '查看详情',btn2: '加入购物车',btnSeen: false,nowNav: 0,},
                {id: 7, bgUrl: [12],title: '坚果 QuickCharge 4+ 快速充电器',price: '￥ 169.00',btn1: '查看详情',btn2: '加入购物车',btnSeen: false,nowNav: 0,},
            ],
        }
    },
    methods:{
        fnNext(){
            this.nowIndex++;
            if(this.nowIndex==this.bannerUrl.length){
                this.nowIndex=0;
            }
        },
        offTimer(){
            clearInterval(this.timer)
        },
        onTimer(){
            this.timer=setInterval(this.fnNext,2000)
        },
        //导航栏点击
        btnClick(index){
            this.nowIndex=index;
        },

        // 热门商品的数据
        hotPrev(){
            this.hotIndex--;
            if(this.hotIndex==-1){
                this.hotIndex=0
            }
        },
        hotNext(){
            this.hotIndex++;
            if(this.hotIndex>4){
                this.hotIndex=4
            }
        }
    },
    computed:{
        bgImgs: ()=>(n)=>{
            return require('../assets/img/hgbg_'+n+'.jpg');
        },
        bgSpan: ()=>(n)=>{
            return require('../assets/img/hgc'+n+'.jpg');
        },
        
    },
    mounted(){
        this.timer=setInterval(this.fnNext,2000)
    }
}
</script>

<style scoped>
a {text-decoration: none;}
#banner{
    width: 1220px;
    height: 500px;
    overflow: hidden;
    margin: 25px auto;
    position: relative;
    z-index: 1;
}
#banner>a>img{
    display: block;
    margin-top: -27px;
}
#ban_btn{
    width: 100px;
    height: 20px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    z-index: 2;
}
#ban_btn>span{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 6px;
    border-radius: 50%;
    background-color: gray;
    cursor: pointer;
}
#hotGoogs_top{
    height: 70px;
    width: 1220px;
    margin: 0 auto;
    line-height: 70px;
    border: 1px solid rgba(210,210,210,1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgb(250,250,250);
    position: relative;
}
#hotGoogs_top>h3{
    padding-left: 30px;
    color: rgb(102,102,102);
}
#hg-btn{
    position: absolute;
    right: 10px;
    top: 10px;
}
#hg-btn>button{
    outline: none;
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: rgb(250,250,250);
    border: none;
    background-image: url("../assets/img/gb-btn.png");
    background-size: 48px 48px;
    cursor: pointer;
}
#hg-btn>button:nth-child(1){
    transform: rotate(180deg);
}

/* 热门商品 */
#hotGoogs_main{
    width: 1220px;
    height: 440px;
    margin: 0 auto;
    background-color: white;
    overflow: hidden;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
#hotGoogs_main>div {float: left;}
#hotGoogs_main>div>a>div{
    float: left;
    width: 305px;
    height: 440px;
    box-sizing: border-box;
    border: 1px solid rgba(210,210,210,0.7);
    border-top: none;
    background-repeat: no-repeat;
    background-position: center 20%;
    background-size: 270px 270px;
    color: black;
}
#hotGoogs_main .hg_titlt{
    text-align: center;
    margin-top: 310px;
    font-size: 14px;
    font-weight: 600;
}
#hotGoogs_main .hg_titlt+p{
    overflow: hidden;
    padding-top: 15px;
    font-size: 12px;
    line-height: 1.2;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999;
    text-align: center;
}
#hotGoogs_main .hotGoogs{
    border-right: none;
}
#hotGoogs_main .hotGoogs:hover{
    box-shadow:0 0 30px 5px #EDEDED inset;
}
.hotGoods-cycle{
    text-align: center;
    margin-top: 10px;
}
.hotGoods-cycle{
    text-align: center;
    margin-top: 10px;
}
.hotGoods-cycle-span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid rgba(185,185,185,0.7);
    border-radius: 50%;
    margin: 0 3px;
}
.hotGoods-cycle-span:hover{
    border: 2px solid rgba(185,185,185,0.8);
}
.hotGoods-price{
    font-size: 18px;
    font-family: Arial;
    color: #d44d44;
    font-weight: 700;
    margin-top: 15px;
    text-align: center;
}
.hotGoods-pay{
    text-align: center;
    /* display: none; */
}
.hotGoods-pay>button{
    margin-top:15px;
    height: 25px;
    width: 90px;
    text-align: center;
    border-radius: 3px;
}
.hotGoods-pay>button:nth-child(1){
    border: 1px solid rgba(185,185,185,0.8);
    background-color: rgb(253,253,253);
}
.hotGoods-pay>button:nth-child(2){
    border: 1px solid rgba(185,185,185,0.8);
    background-color: rgb(90,133,221);
    color: white;
}

/* 服饰专场 */
#cloth_top,#bags_top,#phone_top,#BBS_top{
    height: 70px;
    width: 1220px;
    margin: 30px auto 0 auto;
    line-height: 70px;
    border: 1px solid rgba(210,210,210,1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgb(250,250,250);
}
#hotGoogs_top>h3,#cloth_top>h3,#bags_top>h3,#breath_top>h3,#phone_top>h3,#BBS_top>h3{
    padding-left: 30px;
    color: rgb(102,102,102);
}
#cloth_main,#bags_main,#access_main,#phone_main{
    width: 1220px;
    height: 880px;
    margin: 0 auto;
    background-color: white;
    overflow: hidden;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
#breath_main{
    width: 1220px;
    height: 440px;
    margin: 0 auto;
    background-color: white;
    overflow: hidden;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
#cloth_main>a,#bags_main>a,#access_main>a,#breath_main>a,#phone_main>a{
    /* display: inline-block; */
    margin: 0;
    width: 305px;
    height: 440px;
    box-sizing: border-box;
    border: 1px solid rgba(210,210,210,0.7);
    border-top: none;
    background-repeat: no-repeat;
    background-position: center 20%;
    float: left; 
    /* 设置flot：left后元素的display都会变成block */
}
#cloth_main>a:hover,#bags_main>a:hover,#access_main>a:hover,#breath_main>a:hover,#phone_main>a:hover{
    box-shadow:0 0 30px 5px #EDEDED inset;
}
#cloth_main>a:nth-child(1),#access_main>a:nth-child(1),#breath_main>a:nth-child(1),#phone_main>a:nth-child(1){
    background-size: 610px 440px;
    width: 610px;
}
#bags_main>a:nth-child(1){
    background-size: 610px 440px;
    width: 610px;
}
#breath_main>a:nth-child(1){
    background-size: 610px 440px;
    width: 610px;
}
#cloth_main>a:nth-child(1),#cloth_main>a:nth-child(2),#cloth_main>a:nth-child(4),#cloth_main>a:nth-child(5),#cloth_main>a:nth-child(6){
    border-right: none;
}
#phone_main>a:nth-child(1),#phone_main>a:nth-child(2),#phone_main>a:nth-child(4),#phone_main>a:nth-child(5),#phone_main>a:nth-child(6){
    border-right: none;
}
#bags_main>a:nth-child(1),#bags_main>a:nth-child(2),#bags_main>a:nth-child(4),#bags_main>a:nth-child(5),#bags_main>a:nth-child(6){
    border-right: none;
}
#cloth_main .hg_titlt,#phone_main .hg_titlt{
    text-align: center;
    margin-top: 305px;
    font-size: 14px;
    font-weight: 600;
}
#bags_main .hg_titlt,#access_main .hg_titlt,#breath_main .hg_titlt{
    text-align: center;
    margin-top: 305px;
    font-size: 14px;
    font-weight: 600;
}
#cloth_main .hg_titlt+p,#access_main .hg_titlt+p,#phone_main .hg_titlt+p{
    overflow: hidden;
    padding-top: 15px;
    font-size: 12px;
    line-height: 1.2;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999;
    text-align: center;
}
#bags_main .hg_titlt+p,#breath_main .hg_titlt+p{
    overflow: hidden;
    padding-top: 15px;
    font-size: 12px;
    line-height: 1.2;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999;
    text-align: center;
}
#access_top,#breath_top{
    height: 70px;
    width: 1220px;
    margin: 30px auto 0 auto;
    line-height: 70px;
    border: 1px solid rgba(210,210,210,1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgb(250,250,250);
    position: relative;
}
#access_main>a:nth-child(1),#access_main>a:nth-child(2),#access_main>a:nth-child(4),#access_main>a:nth-child(5),#access_main>a:nth-child(6){
    border-right: none;
}
</style>