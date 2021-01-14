<template>
  <div class="lists">
    <div class="lists_1">
      <router-link to="/">Home</router-link>
        <img src="../assets/shop/right.png">
      <span>Single Product</span>
    </div>
    <div class="lists_2">
      <ul>
        <li :class="now_dian==0?'now_dian':''" @click="all_show(allpage,pagesize)">All commodities</li>
        <li :class="now_dian==item.aid?'now_dian':''" @click="fenlei(item.aid,allpage,pagesize)" v-for="(item,index) of family" :key="index">{{item.family}}</li>
      </ul>
    </div>
    <div class="lists_3">
      <div v-for="(item,index) of lists" :key="index">
        <div class="lists_3_div">
          <div>
            <router-link :to="`/details?gid=${item.gid}`"><img :src=item.image></router-link>
            <div class="lists_3_div_div">
              <ul>
                <li><a href="#"><img src="../assets/shop/shop.png"></a></li>
                <li><a href="#"><img src="../assets/shop/xinxin.png"></a></li>
                <li><a href="#"><img src="../assets/shop/foot_6.png"></a></li>
                <li><a href="#"><img src="../assets/shop/search.png"></a></li>
              </ul>
            </div>
          </div>
          <div>
            <span>${{item.price.toFixed(2)}}</span>
            <span>${{item.un_price.toFixed(2)}}</span>
          </div>
          <h6>
            <router-link :to="`/details?gid=${item.gid}`">Auctor gravida enimuctor</router-link>
          </h6>
        </div>
      </div>
    </div>
    <div class="lists_4">
      <ul v-if="now_dian==0">
        <li :class="item==page?'isActive':''" @click="all_show(item,pagesize)" v-for="(item,index) of pagecount" :key="index">
          {{item}}
        </li>
      </ul>
      <ul v-else>
        <li :class="item==page?'isActive':''" @click="fenlei(now_fa,item,pagesize)" v-for="(item,index) of pagecount" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      now_fa:1,         //记录现在的分类
      now_dian:0,       //记录现在点在哪里
      allpage:1,
      lists:[],
      page:1,    //当前页
      pagesize:10,     //每页显示数量
      family:[],                //保存商品分类名称
      pagecount:0,                      // 总页数
    }
  },
  methods:{
    all_show(page,pagesize){//封装了查询全部商品的函数
      this.page=page;
      // console.log(this.page);
      this.now_dian=0;
      this.axios.get(`/lists?page=${page}&pagesize=${pagesize}`).then(result=>{
        // console.log(result.data);
        this.lists=result.data.result;
        this.pagecount=result.data.pagecount;
        this.lists.forEach(item => {
          item.image=require(`../assets/img/${item.image}`);
        });
      })
    },
    fenlei(aid,page,pagesize){ //封装了分类商品数据的查询数据
      this.page=page;    
      this.now_fa=aid;
      this.now_dian=aid;
      this.axios.get(`/lists_2?aid=${aid}&page=${page}&pagesize=${pagesize}`).then(result=>{
        this.lists=result.data.result;
        this.pagecount=result.data.pagecount;
        this.lists.forEach(item => {
          item.image=require(`../assets/img/${item.image}`);
        });
      })
    }
  },
  mounted(){
    this.all_show(this.page,this.pagesize);
    this.axios.get('/family').then(result=>{
      this.family=result.data.result;
      console.log(this.family);
    })
  }
}
</script>

<style>
.lists_1{
  padding-top: 35px;
  width: 1200px;
  margin: 0 auto;
  color: #333333;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
}
.lists_1>a{
  color: #333333;
}
.lists_1>img{
  width: 13px;
  margin: 0 10px;
}
.lists_2{
  width: 1200px;
  /* height: 69px; */
  box-sizing: border-box;
  padding-bottom: 30px;
  margin: 0 auto;
}
.lists .now_dian{
  font-weight: 600;
}
.lists .now_dian:after{
  content: "";
  background-color: #fed100;
  width: 48px;
  bottom: 0;
  height: 6px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
}
.lists_2>ul{
  display: flex;
}
.lists_2>ul>li{
  color: #333;
  cursor: pointer;
  /* width: 180px; */
  height: 45px;
  text-align: center;
  color: #333333;
  font-weight: 400;
  font-size: 26px;
  position: relative;
}
.lists_2>ul>li+li{
  margin-left: 60px;
}
.lists_3{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.lists_3>div{
  width: 20%;
  height: 350px;
  box-sizing: border-box;
  padding: 10px 10px;
}
.lists_3_div{
  width: 100%;
  height: 100%;
  border: 1px solid #ebebeb;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.6s;
  position: relative;
}
.lists_3_div:hover{
  border: 1px solid #fed100;
}
.lists_3_div>div:nth-child(1){
  width: 188px;
  height: 188px;
  position: relative;
}
.lists_3_div>div:nth-child(1) img{
  width: 100%;
  height: 100%;
}
/* 影藏的ul */
.lists_3_div_div{
  width: 100%;
  position: absolute;
  transition: all 0.6s;
  bottom: 0;
  opacity: 0;
}
.lists_3_div:hover .lists_3_div_div{
  opacity: 1;
}
.lists_3_div_div>ul{
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
}
.lists_3_div_div>ul>li{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fed100;
  margin: 0 3px;
}
.lists_3_div_div>ul>li>a{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.lists .lists_3_div_div>ul>li>a>img{
  width: 20px;
  height: 20px;
}
.lists_3_div>div:nth-child(2)>span:nth-child(1){
  color: #e01212;
  font-size: 22px;
  font-weight: 600;
}
.lists_3_div>div:nth-child(2){
  width: 100px;
  height: 41px;
  box-sizing: border-box;
  padding-bottom: 15px;
  margin-top: 25px;
}
.lists_3_div>div:nth-child(2)>span:nth-child(2){
  color: #c0c0c0;
    font-size: 16px;
    text-decoration: line-through;
    margin-left: 5px;
}
.lists_3_div>h6>a{
  color: #333;
  font-size: 15px;
  transition: all 0.6s;
}
.lists_3_div>h6>a:hover{
  color: #fed100;
}
.lists_4{
  width: 1200px;
  margin: 0px auto;
  padding: 50px 0px;
  display: flex;
  justify-content: flex-end;
}
.lists_4>ul{
  border-radius: 25px;
  width: initial;
  border: 1px solid #fed100;
  display: inline-block;
  padding: 10px 2px;
  margin-right: 10px;
}
.lists_4>ul>li{
  float: left;
  color: #fed100;
  padding: 0 20px;
  border-right: 1px solid #fed100;
  cursor: pointer;
  color: #333;
  transition: all 0.4s;
}
.lists .isActive{
  color: #fed100;
}
.lists_4>ul>li:hover{
  color: #fed100;
}
.lists_4>ul>li:last-child{
  border-right: none;
}
</style>
