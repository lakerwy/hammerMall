<template>
<div class="home">
    <!-- 轮播图 -->
    <div id="banner" @mouseover="offTimer" @mouseout="onTimer">
        <a href="#" class="ban_act"><img :src="bannerUrl[nowIndex]" ></a>
        <div id="ban_btn">
            <span class="ban_btn_act" v-for="(item,index) in bannerUrl" :key="item" :style="{backgroundColor: nowIndex==index?'white':'gray'}" @click="btnClick(index)"></span>
        </div>
    </div>
    <!-- 热门商品  href="detail.html"-->
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
        <a href="detail.html">
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
</style>