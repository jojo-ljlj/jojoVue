<template>
  <div class="myindex">
    <!-- myindex_1 -->
    <div class="myindex_1">
      <div>
        <div class="myindex_1_lunbo">
          <div :class="{myindex_show}">
            <img src="../assets/shop/3-1.jpg">
          </div>
          <div :class="{myindex_show2}">
            <img src="../assets/shop/3-2.jpg">
          </div>
        </div>
        <div class="myindex_1_div2">
          <img src="../assets/shop/3-1 _1.jpg" alt="">
          <div>
            <p>Home Decor</p>
            <h4>The Best Clock</h4>
            <h3>Creative Furniture</h3>
            <a href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
    <!-- myindex_2 -->
    <div class="myindex_2">
      <div>
        <img src="../assets/shop/3-2 _1.jpg">
        <div>
          <p>Top Seller</p>
          <h4>Simple Chair</h4>
          <h3>10% Of Selected Case</h3>
          <a href="#">Show Now</a>
        </div>
      </div>
      <div>
         <img src="../assets/shop/3-3.jpg">
        <div>
          <p>Need New Decor?</p>
          <h4>COMFORT</h4>
          <h3>HOMEWARES</h3>
          <a href="#">
            <img src="../assets/shop/to_right.png">
          </a>
          <div>
            <p>Sale</p>
            <p>-70%</p>
          </div>
        </div>
      </div>
    </div>
    <!-- myindex_3 -->
    <div class="myindex_3">
      <!-- myindex_3中的小div -->
      <div class="myindex_3_div">
        <div>
          <img src="../assets/shop/5-1.png">
        </div>
        <div>
          <p>Free Shipping</p>
          <p>On all orders over $75.00</p>
        </div>
      </div>
      <div class="myindex_3_div">
        <div>
          <img src="../assets/shop/5-2.png">
        </div>
        <div>
          <p>Easy 30 Days Returns</p>
          <p>30 days money back</p>
        </div>
      </div>
      <div class="myindex_3_div">
        <div>
          <img src="../assets/shop/5-3.png">
        </div>
        <div>
          <p>100% Secure</p>
          <p>PayPal / MasterCard / Visa</p>
        </div>
      </div>
      <div class="myindex_3_div">
        <div>
          <img src="../assets/shop/5-4.png">
        </div>
        <div>
          <p>24/7 Support</p>
          <p>We will be at your service</p>
        </div>
      </div>
    </div>
    <!-- myindex_4 -->
    <div class="myindex_4">
      <div class="myindex_4_1">
        <h3>Deal of the days</h3>
        <p><span>$70.00</span><span>$80.00</span></p>
        <a href="#">Aliquet auctor semali</a>
        <i>
          <img src="../assets/shop/1_xin.png" >
          <img src="../assets/shop/1_xin.png" >
          <img src="../assets/shop/1_xin.png" >
          <img src="../assets/shop/ban_xing.png" >
          <img src="../assets/shop/0_xin.png" >
        </i>
        <div class="myindex_4_1_div">
          <span>Available: <b>369</b></span>
          <span>Unit Sold: <b>56</b></span>
        </div>
        <div class="myindex_4_1_div2">
          <div>
            <div></div>
          </div>
        </div>
        <h4>Deal ends in:</h4>
        <div class="myindex_4_1_div3">
          <div>
            <span>{{haveday.day}}</span>
            <span>DAYS</span>
          </div>
          <div>
            <span>{{haveday.h}}</span>
            <span>HRS</span>
          </div>
          <div>
            <span>{{haveday.m}}</span>
            <span>MINS</span>
          </div>
          <div>
            <span>{{haveday.s}}</span>
            <span>SECS</span>
          </div>
        </div>
      </div>
      <div class="myindex_4_2">
        <router-link :to="`/details?gid=${sale_2.gid}`">
          <img :src="sale_2.image" >
        </router-link>
        <div class="myindex_4_2_div">
          <ul>
            <li><a href="#"><img src="../assets/shop/shop.png"></a></li>
            <li><a href="#"><img src="../assets/shop/xinxin.png"></a></li>
            <li><a href="#"><img src="../assets/shop/foot_6.png"></a></li>
            <li><router-link :to="`/details?gid=${sale_2.gid}`"><img src="../assets/shop/search.png"></router-link></li>
          </ul>
        </div>
      </div>
      <div class="myindex_4_3">
        <div v-for="(item,index) of sale" :key="index" @click="look_1(item,index)" :class="index==isActive?'isActive':''">
          <img :src="item.image">
        </div>
      </div>
    </div>
    <!-- myindex_5 -->
    <div class="myindex_5">
      <!-- 第一个div是类别的名称 -->
      <div>
        <ul>
          <li v-for="(item,index) of family" :key="index" :class="index==isHe?'isHe':''" @click="fenlei(item,index)">
            <span>{{item.family}}</span>
          </li>
        </ul>
      </div>
      <!-- 第二个div是类别的数据 -->
      <div>
        <div class="myindex_5_div" v-for="(item,index) of category" :key="index">
          <div class="myindex_5_div_1">
            <router-link :to="`/details?gid=${item.gid}`"><img :src="item.image"></router-link>
            <div class="myindex_5_div_2">
              <ul>
                <li><a href="#"><img src="../assets/shop/shop.png"></a></li>
                <li><a href="#"><img src="../assets/shop/xinxin.png"></a></li>
                <li><a href="#"><img src="../assets/shop/foot_6.png"></a></li>
                <li><a href="#"><img src="../assets/shop/search.png"></a></li>
              </ul>
            </div>
          </div>
          <div class="myindex_5_div_3">
            <span>{{item.price.toFixed(2)}}$</span>
            <span>{{item.un_price.toFixed(2)}}</span>
          </div>
          <h6><router-link :to="`/details?gid=${item.gid}`">{{item.g_name}}</router-link></h6>
        </div>
      </div>
    </div>
    <!-- myindex_6 -->
    <div class="myindex_6">
      <a href="#"><img src="../assets/shop/3-n.jpg"></a>
    </div>
    <!-- myindex_7 赞助模块-->
    <div class="myindex_7">
      <div class="myindex_7_1">
        <ul :style="{left:zanLeft}">
          <li v-for="(item,index) of zanIamge" :key="index">
            <img :src="require(`../assets/shop/${item}`)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      myindex_show:true,
      myindex_show2:false,
      haveday:{  //计算到2021年春节还有多久
        day:"",
        h:"",
        m:"",
        s:""
      },
      isActive: 0,  //特价商品控制是否选中状态
      isHe:0,       //分类选中状态
      sale:[],          //特价商品
      sale_2:[],        //用来保存点击小图后获得的大图所需要的数据
      family:[],      //用来保存类别名称
      isFamily:1,        //用来保存加载页面和切换类别时的分类数据
      category:[],      //用来保存分类商品数据
      pagesize:10,          //用来控制显示商品数量显示
      zanzhu:0,           //赞助模块
      zanLeft:'0px',
      zanIamge:["zanzhu1.jpg","zanzhu2.jpg","zanzhu3.jpg","zanzhu4.jpg","zanzhu5.jpg",
      "zanzhu6.jpg","zanzhu7.jpg","zanzhu2.jpg","zanzhu1.jpg","zanzhu6.jpg","zanzhu2.jpg",
      "zanzhu5.jpg","zanzhu3.jpg"]
    }
  },
  methods:{
    look_1(item,index){
      this.sale_2=item;
      this.isActive=index;
      console.log(this.isActive);
    },
    //现在开始点击分类
    fenlei(item,index){
      this.isHe=index;
      this.axios.get(`/category?g_cate=${item.aid}`).then(result=>{
        this.category=[];
        let data=result.data.result;
        data.forEach(item => {
          item.image=require(`../assets/img/${item.image}`);
          this.category.push(item);
        });
      });
    }
    // 点击分类结束
  }
  ,
  mounted(){
    //上面两张轮播图
    setInterval(()=>{
      if(this.myindex_show==true){
        this.myindex_show=false;
        this.myindex_show2=true;
      }else{
        this.myindex_show2=false;
        this.myindex_show=true;
      }
    },6000);
    //这里计算倒计时
    setInterval(()=>{
			var newyear = new Date('2 12 2021');
			var date1 = new Date();
			var ms = newyear - date1;
			var day = Math.floor(ms / 1000 / 3600 / 24);
			var h = Math.floor(ms % (3600 * 24 * 1000) / 1000 / 3600);
			var m = Math.floor(ms % (3600 * 24 * 1000) / 1000 % 3600 / 60);
			var s = Math.floor(ms % (3600 * 24 * 1000) / 1000 % 3600 % 60);
      this.haveday.day=day;
      this.haveday.h=h;
      this.haveday.m=m;
      this.haveday.s=s;
    },1100);
    //倒计时间结束
    //赞助商
    setInterval(()=>{
      this.zanLeft=`${this.zanzhu}px`;
      this.zanzhu-=195;
      if(this.zanzhu<-1395){
        this.zanzhu=0;
      }
    },4000)
    //赞助商结束
    //现在是特价打折
    this.axios.get('/sale').then(result=>{
      let data=result.data.result;
      this.sale_2=result.data.result[0];
      data.forEach(item => {
        item.image=require(`../assets/img/${item.image}`);
        this.sale.push(item);
      });
    })
    // 特价打折结束
    //现在开始分类名称
    this.axios.get('/family').then(result=>{
      // console.log(result.data);
      this.family=result.data.result;
    });
    //现在开始分类数据的查询即加载页面时分类数据的显示
    this.axios.get(`/category?g_cate=${this.isFamily}`).then(result=>{
      this.category=[];
      let data=result.data.result;
      data.forEach(item => {
        item.image=require(`../assets/img/${item.image}`);
        this.category.push(item);
      });
    });
    //分类数据的查询结束
    
  }
}
</script>


<style>

.myindex_1{
  width: 1200px;
  height: 460px;
  margin: 0 auto;
}
.myindex_1>div{
  width: 900px;
  height: 100%;
  padding: 30px 15px 0px 0px;
  box-sizing: border-box;
  float: right;
  display: flex;
  justify-content: space-between;
}
.myindex_1_lunbo{
  width: 570px;
  height: 100%;
  position: relative;
}
.myindex_1_lunbo img{
  width: 100%;
  height: 100%;
}
.myindex_1_lunbo>div{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.6s;
  opacity: 0;
}
.myindex_1_lunbo .myindex_show,.myindex_1_lunbo .myindex_show2{
  opacity: 1;
}
.myindex_1_div2{
  width: 270px;
  height: 100%;
  overflow: hidden;
  position: relative;
}.myindex_1_div2>img{
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}
.myindex_1_div2:hover >img{
  transform: scale(1.1);
}
.myindex_1_div2>div{
  position: absolute;
  width: 202px;
  height: 154px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.myindex_1_div2>div>p{
  color: #fed100;
  font-size: 15px;
  line-height: 24px;
  padding-bottom: 20px;
}
.myindex_1_div2>div>h4{
  font-size: 20px;
  color: #fff;
  font-weight: 600;
}
.myindex_1_div2>div>h3{
  padding-bottom: 25px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 0;
}
.myindex_1_div2>div>a{
  display: inline-block;
  width: 135px;
  height: 40px;
  background: #333333;
  border-radius: 20px;
  line-height: 40px;
  color: #fff;
  font-weight: 600;
  transition: all 0.6s;
}
.myindex_1_div2>div>a:hover{
  background-color: #fed100;
}
/* myindex_2 */
.myindex_2{
  width: 1200px;
  height: 280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
}
.myindex_2>div{
  width: 48.5%;
  position: relative;
  overflow: hidden;
}
.myindex_2>div>img{
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}
.myindex_2>div:hover>img{
  transform: scale(1.1);
}
.myindex_2>div>div{
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
}
.myindex_2>div:nth-child(1)>div>p{
  padding-bottom: 5px;
  font-size: 15px;
  line-height: 24px;
  box-sizing: border-box;
  color: #ffffff;
}
.myindex_2>div:nth-child(1)>div>h4{
  font-size: 31px;
  color: #ffffff;
  font-weight: 400;
}
.myindex_2>div:nth-child(1)>div>h3{
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  box-sizing: border-box;
  padding-bottom: 25px;
}
.myindex_2>div:nth-child(1)>div>a{
  display: block;
  width: 135px;
  height: 40px;
  color: #fff;
  line-height:40px;
  background-color: #e01212;
  text-align: center;
  border-radius: 20px;
  transition: all 0.6s;
}
.myindex_2>div:nth-child(1)>div>a:hover{
  background: #333333;
}
/* 第二个 */
.myindex_2>div:nth-child(2)>div>p{
  color: #e01212;
  font-weight: 700;
  padding-bottom: 5px;
}
.myindex_2>div:nth-child(2)>div>h4{
  font-size: 37px;
  color: #7b7b7b;
  font-weight: 700;
}
.myindex_2>div:nth-child(2)>div>h3{
  font-size: 26px;
  color: #333333;
  font-weight: 700;
}
.myindex_2>div:nth-child(2)>div>a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: #333333;
  transition: all 0.6s;
  
}
.myindex_2>div:nth-child(2)>div>a:hover{
  background: #fed100;
}
.myindex_2>div:nth-child(2)>div>a>img{
  width: 80%;
}
.myindex_2>div:nth-child(2)>div>div{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #e01212;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
  padding-top: 10px;
  box-sizing: border-box;
  font-weight: 700;
  color: #fff;
}
/* myindex_3 */
.myindex_3{
  width: 1200px;
  height: 117px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 30px 0 25px 0;
  border: 1px solid #ebebeb;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.myindex_3>div{
  width: 24%;
  height: 100%;
}
.myindex_3_div{
  display: flex;
}
.myindex_3_div>div:nth-child(1){
  width: 60px;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
}
.myindex_3_div>div:nth-child(1)>img{
  width: 100%
}
.myindex_3_div>div:nth-child(2){
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 5px 10px;
  box-sizing: border-box;
}
.myindex_3_div>div:nth-child(2)>p{
  color: #333333;
  font-weight: 400;
  font-size: 15px;
  font-family: "Work Sans", sans-serif;
}
/* myindex_4 */
.myindex_4{
  height: 541px;
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex; 
  justify-content: space-between;
}
.myindex_4_1{
  width: 470px;
  height: 454px;
  box-sizing: border-box;
  padding: 55px 30px 60px 30px;
  background-color: #f4f4f4;
  text-align: center;
}
.myindex_4_1>h3{
  padding-bottom: 45px;
  font-family: "Work Sans", sans-serif;
  color: #333333;
  font-weight: 400;
  font-size: 24px;
  position: relative;
}
.myindex_4_1>h3::after{
    background-color: #fed100;
    content: "";
    position: absolute;
    bottom: 30px;
    height: 6px;
    width: 60px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
}
.myindex_4_1>p>span:nth-child(1){
  color: #e01212;
  font-size: 22px;
  font-weight: 600;
}
.myindex_4_1>p>span:nth-child(2){
  color: #c0c0c0;
  font-size: 16px;
  text-decoration:line-through;
  margin-left: 10px;
}
.myindex_4_1>a{
  display: block;
  margin-top: 10px;
  color: #333333;
  font-size: 16px;
  transition: all 0.6s;
}
.myindex_4_1>a:hover{
  color: #fed100;
}
.myindex_4_1>i{
  margin-top: 10px;
  display: block;
}
.myindex_4_1>i>img{
  width: 20px;
  height: 20px;
}
.myindex_4_1_div{
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.myindex_4_1_div>span{
  color: #333333;
  font-size: 15px;
  line-height: 24px;
}
.myindex_4_1_div2{
  width: 100%;
  background-color: #ebebeb;
  height: 14px;
  border-radius: 7px;
  margin-top: 8px;
}
.myindex_4_1_div2>div{
  width: 85%;
  height: 14px;
  background-color: #fed100;
  border-radius: 7px;
}
.myindex_4_1>h4{
  font-size: 16px;
  padding:25px 0;
  font-weight: 400;
  color: #333333;
}
.myindex_4_1_div3{
  width: 100%;
  height: 58px;
  border: 2px solid #fed100;
  border-radius: 50px;
  padding: 5px 40px 0 40px;
  display: flex;
  box-sizing: border-box;
  background-color: #ffffff;
}
.myindex_4_1_div3>div{
  width: 25%;
  text-align: center;
}
.myindex_4_1_div3>div>span:nth-child(1){
  font-size: 18px;
  font-weight: 600;
  color: #333;
  display: block;
}
.myindex_4_1_div3>div>span:nth-child(2){
  font-size: 14px;
  font-weight: 400;
  color: #333;
}
.myindex_4_2{
  width: 470px;
  height: 470px;
  margin-left: 30px;
  position: relative;
}
.myindex_4_2 img{
  width: 100%;
  height: 100%;
}
.myindex_4_2_div{
  position: absolute;
  height: 42px;
  width: 100%;
  bottom: 10px;
}
.myindex_4_2:hover ul{
  opacity: 1;
}
.myindex_4_2_div>ul{
  opacity: 0;
  display: flex;
  justify-content: center;
  transition: all 0.6s;
}
.myindex_4_2_div>ul>li{
  height: 40px;
  width: 40px;
  margin: 0 3px;
}
.myindex_4_2_div>ul>li>a{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fed100;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.myindex_4_2_div>ul>li>a>img{
  width: 20px;
  height: 20px;
}
.myindex_4_3{
  width: 180px;
  height: 540px;
  margin-left: 50px;
  box-sizing: border-box;
  padding-left: 50px;
}
.myindex_4_3>div{
  width: 124px;
  height: 124px;
  border: 2px solid #ebebeb;
  /* border-color: #fed100; */
  cursor: pointer;
  transition: all 0.4s;
}
.myindex_4_3>div.isActive{
  border-color: #fed100;
}
.myindex_4_3>div:hover{
  border-color: #fed100;
}
.myindex_4_3>div+div{
  margin-top: 8px;
}
.myindex_4_3>div>img{
  width: 124px;
  height: 124px;
}
.myindex_5>div:nth-child(1){
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.myindex_5>div:nth-child(1)>ul{
  list-style: none;
  display: flex;
  justify-content: center;
}
.myindex_5>div:nth-child(1)>ul>li{
  cursor: pointer;
  width: 180px;
  height: 45px;
  text-align: center;
  color: #333333;
  font-weight: 400;
  font-size: 26px;
  position: relative;
  /* line-height: 39px; */
}
.isHe>span{
  font-weight: 600;
}
.isHe:after{
  content: "";
  background-color: #fed100;
  width: 48px;
  bottom: 0;
  height: 6px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.myindex_5>div:nth-child(2){
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.myindex_5_div{
  height: 350px;
  width: 220px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  padding: 30px 10px;
  transition: all 0.6s;
  margin-bottom: 20px;
}
.myindex_5_div_1{
  width: 188px;
  height: 188px;
  position: relative;
}
.myindex_5_div_1>a>img{
  width: 100%;
  height: 100%;
}
.myindex_5_div_2{
  width: 100%;
  position: absolute;
  transition: all 0.6s;
  bottom: 0;
  opacity: 0;
}
.myindex_5_div:hover{
  border-color: #fed100;
}
.myindex_5_div:hover .myindex_5_div_2{
  opacity: 1;
}
.myindex_5_div_2>ul{
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
}
.myindex_5_div_2>ul>li{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fed100;
  margin: 0 3px;
}
.myindex_5_div_2>ul>li>a{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.myindex_5_div_2>ul>li img{
  width: 20px;
  height: 20px;
}
.myindex_5_div_3{
  width: 100px;
  height: 41px;
  box-sizing: border-box;
  padding-bottom: 15px;
  margin-top: 25px;
}
.myindex_5_div_3>span:nth-child(1){
  color: #e01212;
  font-size: 22px;
  font-weight: 600;
}
.myindex_5_div_3>span:nth-child(2){
  color: #c0c0c0;
  font-size: 16px;
  text-decoration:line-through;
  margin-left: 5px;
}
.myindex_5_div>h6{
  padding-bottom: 5px;
}
.myindex_5_div>h6>a{
  color: #333;
  font-size: 15px;
  transition: all 0.6s;
}
.myindex_5_div>h6>a:hover{
  color: #fed100;
}
.myindex_6{
  width: 100%;
  height: 465px;
  overflow: hidden;
  margin-top: 40px;
}
.myindex_6 img{
  width: 100%;
  min-width: 1200px;
  height: 100%;
  transition: all 0.3s;
}
.myindex_6 img:hover{
  transform: scale(1.05);
}
.myindex_7{
  width: 1200px;
  height: 141px;
  margin: 0 auto;
  padding: 55px 0 60px 0;
}
.myindex_7_1{
  border: 1px solid #ebebeb;
  width: 1170px;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.myindex_7_1>ul{
  height: 100%;
  display: flex;
  position: absolute;
  transition: all 1s;
}
.myindex_7_1>ul>li{
  width: 195px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.myindex_7_1>ul>li>img{
  width: 124px;
  transition: all 0.3s;
  height: 79px;
}
.myindex_7_1>ul>li>img:hover{
  transform: scale(1.1);
}
</style>
