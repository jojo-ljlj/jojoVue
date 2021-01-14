<template>
  <div class="my_shopCar">
    <div class="motai" :class="{moShow}">
      {{moHtml}}
    </div>
    <div class="my_shopCar_1">
      <router-link to="/">Home</router-link>
        <img src="../assets/shop/right.png">
      <span>Car</span>
    </div>
    <!-- my_shopCar_1 -->
    <table class="my_shopCar_2" rules=none>
      <thead>
        <tr>
          <th>Remove</th>
          <th>Images</th>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) of shopCar" :key="index">
          <td><i @click="del(item)"></i></td>
          <td><img :src="item.image"></td>
          <td><a href="javascript:;">{{item.g_name}}</a></td>
          <td><span>${{item.price}}</span></td>
          <td>
            <div class="my_shopCar_number">
              <h5>Quantity</h5>
              <div>
                <input type="text" :value="item.number">
                <div class="my_shopCar_num">
                  <span @click="add(item.cid,index)"><img src="../assets/shop/top_1.png"></span>
                  <span @click="reduce(item.cid,index,item.number)"><img src="../assets/shop/bottom_1.png"></span>
                </div>
              </div>
            </div>
          </td>
          <td><span>${{(item.price*item.number).toFixed(2)}}</span></td>
        </tr>
      </tbody>
    </table>
    <!-- my_shopCar_3 -->
    <div class="my_shopCar_3">
      <div class="my_shopCar_3_1">
        <div>
          <input type="text" placeholder="Coupon code">
          <a href="#">Apply coupon</a>
        </div>
        <div>
          <a href="javascript:;">Update cart</a>
        </div>
      </div>
      <div class="my_shopCar_3_2">
        <div class="my_shopCar_3_2_div">
          <h2>Cart totals</h2>
          <ul>
            <li>Subtotal <span>${{total.toFixed(2)}}</span></li>
            <li>Total <span>${{total.toFixed(2)}}</span></li>
          </ul>
          <a href="javascript:;">Proceed to checkout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moShow:false,    //控制弹出框的显示隐藏和位置
      moHtml:"",   //弹出框的内容
      shopCar:[],   //用来接收查询回来的数据
      total:0
    }
  },
  methods: {
    moTodo(){//这是弹出框
      this.moShow=true;
      setTimeout(()=>{
        this.moShow=false;
      },2000)
    },
    //增加商品数量
    add(cid,index){
      this.axios.post('/addnum',`cid=${cid}`).then(result=>{
        if(result.data.code==1){
          this.show();
          // this.shopCar[index].number++;
          // this.hoho();
        }
      })
    },
    //减少商品数量
    reduce(cid,index,number){
      console.log(number)
      if(number>1){
        this.axios.post('/reduce',`cid=${cid}`).then(result=>{
          if(result.data.code==1){
            this.show();
            // this.shopCar[index].number--;
          }
        })
      }
    },
    del(item){//删除购物车
      this.axios.post('/del',`cid=${item.cid}`).then(result=>{
        if(result.data.code==1){
          this.moHtml="删除成功";
          this.moTodo();
          this.show();
        }else{
          this.moHtml="删除失败";
          this.moTodo();
        }
      })
    },
    //封装了加载到页面的函数
    show(){
      let uid=this.$store.state.userInfo.uid;
      this.axios.get(`/shopCar?uid=${uid}`).then(result=>{
        this.total=0;
        this.shopCar=result.data.result;
        this.shopCar.forEach(item => {
          item.image=require(`../assets/img/${item.image}`);
          item.price=item.price.toFixed(2);
          this.total+=item.price*item.number;
        });
      })
    },
    //封装了加载到页面的函数
    hoho(){
      this.shopCar.forEach(item=>{
        this.total=0;
        this.total+=item.price*item.number;
      })
    }
  },
  mounted() {
    this.show();
  },
  watch: {
    
  },
}
</script>

<style>
.my_shopCar a:hover{
  transition: all 0.6s;
  color: #fed100;
}
.my_shopCar a{
  color: #333;
}
.my_shopCar_1{
  padding-top: 35px;
  width: 1200px;
  margin: 0 auto;
  color: #333333;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
}
.my_shopCar_1>a{
  color: #333333;
}
.my_shopCar_1>img{
  width: 13px;
  margin: 0 10px;
}
/* my_shopCar_1 */
.my_shopCar_2{
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid #ebebeb;
}
.my_shopCar_2 th{
  border:1px solid #ebebeb;
}
.my_shopCar_2 th+th{
  border-left:none;
  padding: 20px 10px;
}
.my_shopCar_2 td{
  border:1px solid #ebebeb;
  border-top:none;
  padding: 18px 10px;
  text-align: center;
}
.my_shopCar_2 td+td{
  border-left:none;  
}
.my_shopCar_2>tbody>tr>td:nth-child(3)>a{
  font-size: 16px;
  font-weight: 600;
}
.my_shopCar_2>tbody>tr>td:nth-child(4),.my_shopCar_2>tbody>tr>td:nth-child(6){
  font-size: 16px;
  font-weight: 700;
}
.my_shopCar_2>tbody>tr>td:nth-child(1)>i{
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url("../assets/shop/tong.png") no-repeat;
  background-size: 32px;
  transition: all 0.4s;
  cursor: pointer;
}
.my_shopCar_2>tbody>tr>td:nth-child(1)>i:hover{
  background: url("../assets/shop/tong_2.png") no-repeat;
}
.my_shopCar_2>tbody>tr>td:nth-child(2)>img{
  width: 120px;
  height: 120px;
}
.my_shopCar_number>h5{
  color: #333;
  padding-bottom: 10px;
}
.my_shopCar_number>div{
  width: 76px;
  height: 46px;
  display: flex;
  margin: 0 auto;
}
.my_shopCar_number>div>input{
  width: 44px;
  height: 44px;
  border: 1px solid #ebebeb;
  outline: none;
  box-sizing: border-box;
  color: #888888;
  text-align: center;
  background: #ffffff;
}
.my_shopCar_num{
  width: 28px;
  height: 44px;
}
.my_shopCar_num>span{
  display: block;
  width: 28px;
  height: 20px;
  border: 1px solid #ebebeb; 
  text-align: center;
  user-select: none;
}
.my_shopCar_num>span>img{
  width: 10px;
}
.my_shopCar_3{
  width: 1200px;
  margin: 0 auto;
  /* height: 242px; */
}
.my_shopCar_3_1{
  width: 1200px;
  height: 42px;
  margin: 42px auto;
  display: flex;
  justify-content: space-between;
}
.my_shopCar_3_1>div:nth-child(1)>input{
  background-color: transparent;
  border: 1px solid #ebebeb;
  font-size: 13px;
  border-radius: 0;
  height: 42px;
  width: 120px;
  padding: 0 10px;
  outline: none;
  margin-right: 5px;
}
.my_shopCar_3_1>div:nth-child(1)>a{
  background-color: #333333;
  border: 0 none;
  border-radius: 2px;
  color: #ffffff;
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  height: 42px;
  line-height: 42px;
  padding: 0 25px;
  width: inherit;
  transition: all 0.4s;
}
.my_shopCar_3_1>div:nth-child(1)>a:hover,.my_shopCar_3_1>div:nth-child(2)>a:hover{
  background-color: #fed100;
}
.my_shopCar_3_1>div:nth-child(2)>a{
  background-color: #333333;
    border: 0 none;
    border-radius: 2px;
    color: #ffffff;
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    height: 42px;
    line-height: 42px;
    padding: 0 25px;
    width: inherit;
    transition: all 0.4s;
}
.my_shopCar_3_2{
  width: 1200px;
  margin :0 auto;
  height: 211px;
  padding-bottom: 60px;
}
.my_shopCar_3_2_div{
  width: 470px;
  height: inherit;
  float: right;
}
.my_shopCar_3_2_div>h2{
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: capitalize; /*转换文本 开头字母大写*/
  color: #333333;
}
.my_shopCar_3_2_div>ul>li{
  list-style: none;
  font-size: 15px;
  padding: 10px 30px;
  border: 1px solid #ebebeb;
  font-weight: 700;
}
.my_shopCar_3_2_div>ul>li+li{
  border-top: none;
}
.my_shopCar_3_2_div>ul>li>span{
  float: right;
}
.my_shopCar_3_2_div>a{
  background-color: #333333;
  border: 1px solid #ebebeb;
  color: #ffffff;
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  text-transform: capitalize;
  transition: all 0.4s;
}
.my_shopCar_3_2_div>a:hover{
  background-color: #fed100;
  color: #fff;
}
</style>
