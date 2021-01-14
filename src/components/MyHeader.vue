<template>
  <div class="myheader">
    <to-top></to-top>
    <div class="myheader_top">
      <div class="myheader_top_1">
        <div>FREE SHIPPING FOR ALL ORDERS OF <span>$200</span></div>
        <div>
          <a href="#">MY ACCOUNT</a>
          <a href="#">CART</a>
          <a href="#">WISHLIST</a>
          <a href="#">CHECKOUT</a>
        </div>
      </div>
    </div>
    <div div class="myheader_center">
      <div><img src="../assets/shop/1.png"></div>
      <div>
        <img src="../assets/shop/top_2_1.png">
        <div><p>Need help?</p><p>15892348796</p></div>
      </div>
      <div>
        <input @keyup.13="search()" type="text" v-model="keyword" placeholder="Search product...">
        <button @click="search()"><img src="../assets/shop/search.png"></button>
      </div>
      <div>
        <div class="header_top_cart">
          <a href="#"></a>
          <span>2</span>
        </div>
        <div>
          <router-link to="/shopCar"></router-link>
          <span>2</span>
          <a href="#">$54.90</a>
        </div>
      </div>
    </div>
    <div class="myheader_footer">
      <div>
        <!-- //二级导航 -->
        <div class="myheader_footer_1">
          <img src="../assets/shop/list.png">
          <span @click="canShow">All Department</span>
          <div class="myheader_footer_1_list" :class="{isShow,over}">
            <ul>
              <li>
                <a href="#">Bed & Bath</a>
                <img src="../assets/shop/right.png">
                <div class="myheader_footer_1_list_show">
                  <ul>
                    <li><a href="#">HABITANT MORBI</a></li>
                    <li><a href="#">Habitant Morbi</a></li>
                    <li><a href="#">Office Chair</a></li>
                    <li><a href="#">Purus Lacus</a></li>
                    <li><a href="#">Sagittis Blandit</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">Purus Lacus</a></li>
                    <li><a href="#">Magna Pellentesq</a></li>
                    <li><a href="#">Molestie Tortor</a></li>
                    <li><a href="#">Vehicula Element</a></li>
                    <li><a href="#">Volutpat Diam</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">Bibendum Cursus</a></li>
                    <li><a href="#">Dignissim Turpis</a></li>
                    <li><a href="#">Dining room</a></li>
                    <li><a href="#">Egestas Ultricies</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Furniture</a>
                <img src="../assets/shop/right.png">
                <div class="myheader_footer_1_list_show">
                  <ul>
                    <li><a href="#">CAMERAS</a></li>
                    <li><a href="#">Cords And Cables</a></li>
                    <li><a href="#">Gps Accessories</a></li>
                    <li><a href="#">Microphones</a></li>
                    <li><a href="#">Wireless Transmitters</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">AUDIO</a></li>
                    <li><a href="#">Other Accessories</a></li>
                    <li><a href="#">Portable Audio</a></li>
                    <li><a href="#">Satellite Radio</a></li>
                    <li><a href="#">Visual Accessories</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">CELL PHONES</a></li>
                    <li><a href="#">Xail</a></li>
                    <li><a href="#">Chamcham Galaxy</a></li>
                    <li><a href="#">SIM Cards</a></li>
                    <li><a href="#">SIM Cards</a></li>
                    <li><a href="#">SIM Cards</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Home Decor</a>
                <img src="../assets/shop/right.png">
                <div class="myheader_footer_1_list_show">
                  <ul>
                    <li><a href="#">SAGITTIS BLANDIT</a></li>
                    <li><a href="#">Adipiscing Elit</a></li>
                    <li><a href="#">Consectetur Adip</a></li>
                    <li><a href="#">Erat Et Est</a></li>
                    <li><a href="#">Molestie Velit</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">ACCESSORIES</a></li>
                    <li><a href="#">Habitant Morbi</a></li>
                    <li><a href="#">Office Chair</a></li>
                    <li><a href="#">Office Chair</a></li>
                    <li><a href="#">Office Chair</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Kitchen & Dining</a>
                <img src="../assets/shop/right.png">
                <div class="myheader_footer_1_list_show">
                  <ul>
                    <li><a href="#">ACCESSORIES</a></li>
                    <li><a href="#">ACCESSORIES</a></li>
                    <li><a href="#">Office Chair</a></li>
                    <li><a href="#">Office Chair</a></li>
                    <li><a href="#">Office Chair</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">PURUS LACUS</a></li>
                    <li><a href="#">Magna Pellentesq</a></li>
                    <li><a href="#">Molestie Tortor</a></li>
                    <li><a href="#">Vehicula Element</a></li>
                    <li><a href="#">Volutpat Diam</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">OFFICE CHAIR</a></li>
                    <li><a href="#">Bibendum Cursus</a></li>
                    <li><a href="#">Dignissim Turpis</a></li>
                    <li><a href="#">Dining Room</a></li>
                    <li><a href="#">Egestas Ultricies</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Console Tables</a>
                <img src="../assets/shop/right.png">
                <div class="myheader_footer_1_list_show">
                  <ul>
                    <li><a href="#">Daylesford</a></li>
                    <li><a href="#">Delaware</a></li>
                    <li><a href="#">Delaware</a></li>
                    <li><a href="#">Delaware</a></li>
                    <li><a href="#">Mable</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Living Room Sets</a>
                <img src="../assets/shop/right.png">
                <div class="myheader_footer_1_list_show">
                  <ul>
                    <li><a href="#">Coffee & side tables</a></li>
                    <li><a href="#">Living room lighting</a></li>
                    <li><a href="#">Living room lighting</a></li>
                    <li><a href="#">Living room textiles & rugs</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#">TV Stands</a></li>
              <li><a href="#">Bedroom</a></li>
              <li><a href="#">Dining Tables</a></li>
              <li><a href="#">End Tables</a></li>
              <li><a href="#">More Categories</a></li>
            </ul>
          </div>
        </div>
        <!-- 二级导航结束 -->
        <div class="myheader_footer_2">
          <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/lists">SHOP LIST</router-link></li>
            <li><router-link to="/details?gid=1">SINGLE PRODUCT</router-link> </li>
            <li>
              <a v-if="this.$store.state.isLogined==1" href="javascript:;">LOGIN REGISTER</a>
              <router-link v-else to="/logreg">LOGIN REGISTER</router-link>
            </li>
          </ul>
        </div>
        <div class="myheader_footer_3">
          <div v-if="this.$store.state.isLogined==0">
            <router-link to="/logreg">LOGIN <span>OR</span> REGISTER</router-link>
          </div>
          <div v-else>
            hello,{{this.$store.state.userInfo.username}}
            <a href="javascript:;" @click="logout()">注销</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toTop from '../views/toTop.vue'
export default {
  data(){
    return{
      keyword:"",
      isShow:true,
      over:false,
      hehe:this.hehe=this.$route.path
    }
  },
  methods:{
    //注销
    logout(){
      this.$store.commit('logout_mutations');
      // localStorage.clear();
      localStorage.removeItem("isLogined");
      localStorage.removeItem("userInfo");
      history.go(0);
    },
    //注销结束
    canShow(){
      if(this.isShow){
        this.isShow=false;
        this.over=true;
      }else{
        this.isShow=true;
        setTimeout(()=>{this.over=false}, 1000);
      }
    },
    search(){//搜索
      if(this.keyword){
        this.$router.push(`/search?keyword=${this.keyword}`);
        history.go(0);
      }
    }
  },
  mounted(){
    // this.hehe=this.$route.path;
    console.log(this.hehe);
    if(this.hehe=='/'){
      this.isShow=true;
      this.over=false;
    }else{
      this.isShow=false;
      this.over=true;
    }
    setInterval(()=>{
      this.hehe=this.$route.path;
    },1000)
  },
  watch: {
    hehe(){
      if(this.hehe=='/'){
        this.isShow=true;
        this.over=false;
      }else{
        this.isShow=false;
        this.over=true;
      }
    }
  },
  components:{toTop}
}
</script>

<style>
.show{display: block !important}
.myheader .myheader_top{
  width: 100%;
  height: 45px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ebebeb;
}
.myheader .myheader_top_1{
  width: 1200px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.myheader .myheader_top_1>div:nth-child(1),.myheader .myheader_top_1>div:nth-child(2){
  height: 45px;
  font-size: 12px;
  line-height: 45px
}
.myheader .myheader_top_1>div:nth-child(1)>span{
  font-weight: bold;
}
.myheader .myheader_top_1>div:nth-child(2)>a{
  color:#333333;
  margin-left: 25px;
  transition: all 0.5s;
}
.myheader .myheader_top_1>div:nth-child(2)>a:hover{
  color:#fed100;
}
.myheader .myheader_center{
  width: 1200px;
  height: 51px;
  padding: 30px 0px;
  margin: 0 auto;
  display: flex;
}
.myheader .myheader_center>div:nth-child(1){
  width: 270px;
  height: 45px;
}
.myheader .myheader_center>div:nth-child(2){
  display: flex;
  color: #7b7b7b;
  width: 270px;
  font-size: 15px;
  line-height: 25px;
  padding: 0px 15px;  
}
.myheader .myheader_center>div:nth-child(2)>img{
  width: 38px;
  height: 50px;
}
.myheader .myheader_center>div:nth-child(3){
  width: 370px;
  position: relative;
}
.myheader .myheader_center>div:nth-child(3)>input{
  border: 2px solid #fdb828 !important;
  border-radius: 30px;
  font-size: 14px;
  height: 50px;
  width: 273px;
  padding: 0 60px 0 33px;
  outline: none;
  color: #888888;
}
.myheader .myheader_center>div:nth-child(3)>button{
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  top: 12px;
  right: 30px;
  cursor: pointer;
}
.myheader .myheader_center>div:nth-child(3)>button>img{
  width: 30px;
  height: 30px;
}
.myheader .myheader_center>div:nth-child(4){
  width: 210px;
  height: 100%;
  padding: 0px 15px; 
  display: flex;
}
.myheader .header_top_cart{
  position: relative;
  display: flex;
  align-items: center;
  width: 90px;
}
.myheader .header_top_cart>a,.myheader .header_top_cart+div>a:nth-child(1){
  display: block;
  height: 24px;
  width: 24px;
  background:url(../assets/shop/xin.png) no-repeat;
  background-size: 100% 100%;
  transition: all 0.6s;
  margin-left: 30px;
}
.myheader .header_top_cart>a:hover{
  background:url(../assets/shop/xin_1.png) no-repeat;
  background-size: 100% 100%;
}
.myheader .header_top_cart>span,.myheader .header_top_cart+div>span{
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #fed100;
  border-radius: 50%;
  bottom: 0px;
  right: 15px;
  text-align: center;
  font-size: 14px;
  line-height: 28px;
  color: #333333;
  cursor: pointer;
}
.myheader .header_top_cart+div{
  width: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.myheader .header_top_cart+div>a:nth-child(1){
  background:url(../assets/shop/dai.png) no-repeat;
  background-size: 100% 100%;
  margin-left: inherit; 
}
.myheader .header_top_cart+div:hover>a:nth-child(1){
  background:url(../assets/shop/dai_1.png) no-repeat;
  background-size: 100% 100%;
}
.myheader .header_top_cart+div>span{
  left: 35px
}
.myheader .header_top_cart+div>span+a{
  font-size: 15px;
  color: #333333;
  transition: all 0.6s;
}
.myheader .header_top_cart+div:hover>span+a{
  color: #fed100;
}
/* 头的下部 */
.myheader_footer{
  width: 100%;
  height: 60px;
  background-color: #fed100;
}
.myheader_footer>div{
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
}
.myheader_footer_1{
  width: 270px;
  background-color: #333333;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.myheader_footer_1>img{
  width: 24px;
  height: 20px;
  margin: 0 10px;
  margin-left: 15px;
}
.myheader_footer_1>span{
  font-weight: 600;
  color: #fff;
  font-size: 16px
}
/* 这里是All Department */
.myheader_footer_1_list{
  width: 266px;
  height: 0;
  position: absolute;
  border: 2px solid #fed100;
  top: 60px;
  border-top: 0;
  transition: all 0.6s;
  z-index: 10;
  background-color: #fff;
}
.myheader_footer_1_list>ul>li{
  position: relative;
  border-bottom: 1px solid #ebebeb;
  padding: 0 20px;
  overflow: hidden;
}
.myheader_footer_1_list>ul>li:hover{
  overflow: inherit;
}
.myheader_footer_1_list>ul>li a{
  transition: all 0.6s;
}
.myheader_footer_1_list>ul>li>a{
  display: block;
  width: 100%;
  color: #333333;
  font-size: 14px;
  padding: 8.4px 0;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 600;
}
.myheader_footer_1_list>ul>li>img{
  position: absolute;
  right: 10px;
  width: 15px;
  top: 50%;
  transform: translateY(-50%);
}
.myheader_footer_1_list>ul>li a:hover{
  color: #fed100;
}
.myheader_footer_1_list_show{
  position: absolute;
  top: 0px;
  left: 268px;
  background-color: #fff;
  padding: 30px;
  transition: all 0.6s;
  display: flex;
  opacity: 0;
  z-index: 100;
}
.myheader_footer_1_list>ul>li:hover .myheader_footer_1_list_show{
  opacity: 1;
}
.myheader_footer_1_list_show>ul{
    width: 193px;
}
.myheader_footer_1_list_show>ul>li>a{
  font-size: 14px;
  display: block;
  line-height: 30px;
  font-weight: 400;
  color: #666666;
}
.myheader_footer_1_list_show>ul>li:nth-child(1)>a{
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 15px;
    display: block;
    line-height: 20px;
    color: #333;
}
/* 添加动画 */
.myheader .isShow{
  height: 460px;
}
.myheader .over{
  overflow: hidden;
}
/* 添加动画结束 */
/* All Department 结束*/
/* 导航栏开始 */
.myheader_footer_2{
  width: 670px;
  height: 100%;
  padding: 0 15px;
  margin-left: 15px;
}
.myheader_footer_2>ul{
  display: flex;
}
.myheader_footer_2>ul>li{
  font-size: 15px;
  line-height: 60px;
  padding-right: 30px;
}
.myheader_footer_2>ul>li>a{
  color: #333;
  transition: all 0.6s;
}
.myheader_footer_2>ul>li>a:hover{
  color: #fff;
}
/* 导航栏结束 */
.myheader_footer_3{
  line-height: 60px;
}
.myheader_footer_3>div>a{
  color: #333;
  font-size: 15px;
  transition: all 0.6s;
}
.myheader_footer_3>div>a>span{
  color: #999999;
}
.myheader_footer_3>div>a:hover{
  color: #fff;
}
</style>

