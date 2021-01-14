<template>
  <div class="my_details">
    <div class="motai" :class="{moShow}">
      {{moHtml}}
    </div>
    <div class="my_details_1">
      <router-link to="/">Home</router-link>
        <img src="../assets/shop/right.png">
      <span>Single Product</span>
    </div>
    <!-- my_details_2 -->
    <div class="my_details_2">
      <div class="my_details_2_div">
        <div>
          <img :src="big_picture">
          <div :class="{hide}" class="my_details_mubu" :style="mubuStayle">
           </div>
          <div class="my_details_mask" @mouseover="toggle()" @mouseout="toggle()"
          @mousemove="move($event)">
          </div>
        </div>
        <div>
          <img v-for="(item,index) of picture" :key="index" @click="tobig(item,index)" :src="item.chart">
        </div>
      </div>
      <div class="my_details_2_div2">
        <div class="my_details_2_div2_1">
          <h2>${{details.price}}</h2>
          <h1>{{details.g_name}}</h1>
          <div>
            <i v-for="i of 5" :key="i"><img src="../assets/shop/1_xin.png"></i>
          </div>
          <p>{{details.g_brief}}</p>
          <div class="my_details_size">
            <span>Size</span>
            <select id="mySize">
              <option value="1">S</option>
              <option value="1">M</option>
              <option value="1">L</option>
              <option value="1">XL</option>
            </select>
          </div>
          <h3><img src="../assets/shop/right_2.png">203 In Stock</h3>
          <div class="my_details_size_num">
            <span>Quantity</span>
            <div>
              <input type="text" v-model="number">
              <div class="my_details_top_bottom">
                <span @click="add()"><img src="../assets/shop/top_1.png"></span>
                <span @click="reduce()"><img src="../assets/shop/bottom_1.png"></span>
              </div>
            </div>
            <!-- 添加购物车按钮 -->
            <a href="javascript:;" @click="toCar()" class="my_details_shopcar">ADD TO CART</a>
          </div>
          <div class="my_details_right">
            <div><i><img src="../assets/shop/xin.png" ></i><a href="#">Add To Wishlist</a></div>
            <div><i><img src="../assets/shop/shop.png" ></i><a href="#">Add To Compare</a></div>
          </div>
          <div class="my_details_right_2">
            <div>
              <h3>Category:</h3>
            </div>
            <div>
              <a href="#">Bedroom Furniture,</a><a href="#">Console Tables,</a>
              <a href="#">End Tables,</a><a href="#">Living Room Sets,</a>
              <a href="#">Ottomans & Storage Ottomans,</a><a href="#">Sofas & Couches,</a>
            </div>
          </div>
          <div class="my_details_right_3">
            Shere This product:
            <ul>
              <li><a href="#"><img src="../assets/shop/Facebook.png"></a></li>
              <li><a href="#"><img src="../assets/shop/linkedin.png"></a></li>
              <li><a href="#"><img src="../assets/shop/Twitter.png"></a></li>
              <li><a href="#"><img src="../assets/shop/rss.png"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- my_details_3 -->
    <div class="my_details_3">
      <ul>
        <li @click="isShow=0" :class="isShow==0?'li_active':''">Description</li>
        <li @click="isShow=1" :class="isShow==1?'li_active':''">Specification</li>
        <li @click="isShow=2" :class="isShow==2?'li_active':''">Reviews (1)</li>
      </ul>
      <div v-if="isShow==0" class="my_details_content">
       {{details.content}}
      </div>
      <div v-else-if="isShow==1">
        456
      </div>
      <div v-else>
        789
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      moShow:false,    //控制弹出框的显示隐藏和位置
      moHtml:"",   //弹出框的内容
      mubuStayle:{
        left:"",
        top:"",
      },
      hide:false,      // 控制放大镜的显示
      number:1,
      isShow:0,
      details:[],    //获取商品数据
      picture:[],             //保存获取的图片
      big_picture:""                    //用来显示大图
    }
  },
  methods:{
    moTodo(){//弹出框
      this.moShow=true;
      setTimeout(()=>{
        this.moShow=false;
      },2000)
    },
    add(){
      this.number++;
    },
    reduce(){
      if(this.number>1){
        this.number--;
      }
    },
    tobig(item,index){//点击小图切换大图的
      this.big_picture=item.chart;
      this.mubuStayle.backgroundSize=`1140px`;      
    },
    //放大镜
    toggle(){
      this.hide=!this.hide;
    },
    move(e){
      // alert(1)
      var left=e.offsetX-100;
      var top=e.offsetY-100;
      if(left<0){left=0}else if(left>370){left=370};
      if(top<0){top=0}else if(top>370){top=370};
      this.mubuStayle={
        left:left+"px",
        top:top+"px",
        background:`url(${this.big_picture}) no-repeat`,
        backgroundSize:"1140px",
        backgroundPosition:``,
      }
      this.mubuStayle.backgroundSize=`1140px`;
      this.mubuStayle.backgroundPosition=`-${parseInt(this.mubuStayle.left)*2}px -${parseInt(this.mubuStayle.top)*2}px`      
    },
    toCar(){//添加到购物车
      if(this.$store.state.isLogined==1){
        let uid=this.$store.state.userInfo.uid;
        this.axios.post("/toAdd",`uid=${uid}&gid=${this.details.gid}&number=${this.number}`
        ).then(result=>{
          if(result.data.code==1){
            this.moHtml="添加成功";
            this.moTodo();
          }else{
            this.moHtml="添加失败";
            this.moTodo();
          }
          console.log(result.data);  
        })
      }else{
        this.moHtml="请先登录";
        this.moTodo();
      }
    }
  },
  mounted(){
    //获取传递过来的商品gid
    let gid=this.$route.query.gid;
    //获取商品数据
    this.axios.get(`/details?gid=${gid}`).then(result=>{
      this.details=result.data.result[0];
      // this.details.chart=require(`../assets/img/${this.details.chart}`);
      // this.big_picture=this.details.chart;
      this.details.price=this.details.price.toFixed(2);
      // this.picture=result.data.result[0];
      let data=result.data.result;
      // this.details.price=this.details.price.toFixed(2);
      data.forEach(item => {
        item.chart=require(`../assets/img/${item.chart}`);
        this.picture.push(item);
        this.big_picture=this.picture[0].chart;
      });
    })
    
  }
}
</script>

<style>
.my_details a:hover{
  color: #fed100;
  transition: all 0.6s;
}
.my_details_1{
  padding-top: 35px;
  width: 1200px;
  margin: 0 auto;
  color: #333333;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
}
.my_details_1>a{
  color: #333333;
}
.my_details_1>img{
  width: 13px;
  margin: 0 10px;
}
.my_details_2{
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.my_details_2_div{
  width: 570px;
  height: 705px;
}
.my_details_2_div>div:nth-child(1){
  width: 570px;
  height: 570px;
  position: relative;
}
/* 这里写放大镜的css */
.my_details_mubu{
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px double pink;
  border-radius: 50%;
  background-color: #eee;
  top: 0;
  left: 0;
  display: none;
}
.my_details .hide{
  display: block;
}
.my_details_mask{
  position: absolute;
  left: 0;
  top: 0;
  width: 570px;
  height: 570px;
  opacity: 0;
}
/* 这里写放大镜的css */
.my_details_2_div>div:nth-child(1)>img{
  width: 568px;
  height: 568px;
  border: 1px solid #ebebeb;
}
.my_details_2_div>div:nth-child(2){
  width: 500px;
  margin:0 auto;
  height: 110px;
  margin-top: 25px;
}
.my_details_2_div>div:nth-child(2)>img{
  width: 103px;
  height: 103px;
  border: 1px solid #ebebeb;
}
.my_details_2_div>div:nth-child(2)>img+img{
  margin-left: 20px;
}
.my_details_2_div2{
  width: 620px;
  box-sizing: border-box;
  padding: 0 15px;
}
.my_details_2_div2_1>h2{
  font-size: 26px;
  color: inherit;
  font-weight: 600;
  padding-bottom: 15px;
  color: #333;
}
.my_details_2_div2_1>h1{
  color: #333;
  font-size: 24px;
  font-weight: 400;
  padding-bottom:20px;   
}
.my_details_2_div2_1>h1+div{
  width: 100%;
  padding-bottom:20px; 
}
.my_details_2_div2_1>h1+div img{
  width: 20px;height: 20px;
}
.my_details_2_div2_1>p{
  font-family: "Work Sans", sans-serif;
  color: #333333;
  font-size: 15px;
  line-height: 24px;
}
.my_details_size{
  padding-top: 35px;
  height: 67px;
}
.my_details_size>span{
  color: #333333;
  font-size: 15px;
  line-height: 67px;
  padding-right: 15px;
}
.my_details_size>select{
  width: 76px;
  height: 40px;
  outline: none;
  border-radius:5px;
  border: 1px solid #ebebeb; 
}
.my_details_size>select>option{
  width: 76px;
  height: 40px;
}
.my_details_2_div2_1>h3{
  color: #333333;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  padding-top: 25px;
}
.my_details_2_div2_1>h3>img{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.my_details_size_num{
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  padding-top: 25px;
}
.my_details_size_num>span{
  font-family: "Work Sans", sans-serif;
  color: #333333;
  font-size: 15px;
  line-height: 24px;
}
.my_details_size_num>div{
  width: 76px;
  height: 46px;
  padding-left:15px; 
  display: flex;
  margin-right: 15px;
}
.my_details_size_num>div>input{
  width: 44px;
  height: 44px;
  border: 1px solid #ebebeb; 
  outline: none;
  box-sizing: border-box;
  color: #888888;
  text-align: center;
  background: #ffffff;
}
.my_details_top_bottom{
  width: 28px;
  height: 44px;
}
.my_details_top_bottom>span{
  display: block;
  width: 28px;
  height: 20px;
  border: 1px solid #ebebeb; 
  text-align: center;
}
.my_details_top_bottom>span>img{
  width: 10px;
}
.my_details_shopcar{
  border: 2px solid #fed100;
  border-radius: 25px;
  font-weight: 400;
  width: 170px;
  height: 45px;
  line-height: 43px;
  text-align: center;
  display: block;
  font-size: 16px;
  color: #333;
  transition: all 0.3s;
}
.my_details .my_details_shopcar:hover{
  background-color: #fed100;
  color: #fff;
}
.my_details_right{
  width: 100%;
  height: 35px;
  padding: 30px 0;
  display: flex;
  border-bottom: 1px solid #ebebeb; 
}
.my_details_right>div{
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.my_details_right i{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #fed100;
  border-radius: 50%;
  /* line-height: 35px; */
  margin-right: 5px;
  text-align: center;
}
.my_details_right i>img{
  width: 15px;
  height: 15px;
}
.my_details_right a{
  color: #333;
}
.my_details_right_2{
  width: 100%;
  height: 73px;
  display: flex;
  padding: 25px 0 0 0;
  border-bottom: 1px solid #ebebeb;
}
.my_details_right_2 h3{
  font-size: 16px;
  color: #333333;
  font-weight: 400;
  margin-right: 5px;
}
.my_details_right_2 a{
  font-size: 16px;
  color: #666;
}
.my_details_right_3{
  width: 100%;
  height: 40px;
  padding-top: 30px;
  display: flex;
  align-items: center;
}
.my_details_right_3>ul{
  display: flex;
}
.my_details_right_3>ul>li{
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  margin-left: 15px;
  transition: all 0.6s;
}
.my_details_right_3>ul>li:hover{
  background-color: #fed100;
}
.my_details_right_3>ul>li img{
  width: 15px;
  height: 15px;
}
.my_details_3{
  width: 1200px;
  height: 300px;
  margin: 0 auto;
  padding-top: 65px;
  box-sizing: border-box;
}
.my_details_3>ul{
  display: flex;
  border-bottom: 1px solid #ebebeb;
}
.my_details_3>ul>li{
  width: 182px;
  height: 34px;
  text-align: center;
  cursor: pointer;
}
.my_details_3>ul>li:hover{
  border-bottom: 1px solid #333;
}
.my_details_3>ul>.li_active{
  border-bottom: 1px solid #333;
}
.my_details_content{
  padding: 25px 0;
}
</style>
