<template>
  <div class="search">
    <div class="search_1">
      <router-link to="/">Home</router-link>
        <img src="../assets/shop/right.png">
      <span>Search</span>
    </div>
    <div class="search_2">
    </div>
    <div class="search_3">
      <div v-for="(item,index) of search" :key="index">
        <div class="search_3_div">
          <div>
            <router-link :to="`/details?gid=${item.gid}`"><img :src=item.image></router-link>
            <div class="search_3_div_div">
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
            <router-link to="/">{{item.g_name}}</router-link>
          </h6>
        </div>
      </div>
    </div>
    <div class="search_4" v-if="pagecount!=0">
      <ul >
        <li @click="hehe(item)" :class="page==item?'isActive':''" v-for="(item,index) of pagecount" :key="index" >
          {{item}}
        </li>
      </ul>
    </div>
    <div class="search_5" v-if="pagecount==0">
      <p>没有这个商品,请换个关键词搜索吧...</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      keyword:"",   //用来保存搜索的数据
      page:1,     //当前页数
      pagecount:0,
      search:[]     //保存获取的数据
    }
  },
  methods:{
    hehe(page){
      this.page=page;
      this.axios.get(`/search?page=${this.page}&keyword=${this.keyword}`).then(result=>{
        // console.log(result.data.result);
        this.search=result.data.result;
        this.pagecount=result.data.pagecount;
        // console.log(this.pagecount);
        this.search.forEach(item => {
          item.image=require(`../assets/img/${item.image}`);
        });
      })
    }
  },
  mounted(){
    let keyword=this.$route.query.keyword;
    this.keyword=keyword.trim();
    this.hehe(this.page);
  }
}
</script>


<style>
.search_1{
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
.search_1>a{
  color: #333333;
}
.search_1>img{
  width: 13px;
  margin: 0 10px;
}
.search_2{
  width: 1200px;
  /* height: 69px; */
  box-sizing: border-box;
  padding-bottom: 30px;
  margin: 0 auto;
}
.search .now_dian{
  font-weight: 600;
}
.search .now_dian:after{
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
.search_2>ul{
  display: flex;
}
.search_2>ul>li{
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
.search_2>ul>li+li{
  margin-left: 60px;
}
.search_3{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.search_3>div{
  width: 20%;
  height: 350px;
  box-sizing: border-box;
  padding: 10px 10px;
}
.search_3_div{
  width: 100%;
  height: 100%;
  border: 1px solid #ebebeb;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.6s;
  position: relative;
}
.search_3_div:hover{
  border: 1px solid #fed100;
}
.search_3_div>div:nth-child(1){
  width: 188px;
  height: 188px;
  position: relative;
}
.search_3_div>div:nth-child(1) img{
  width: 100%;
  height: 100%;
}
/* 影藏的ul */
.search_3_div_div{
  width: 100%;
  position: absolute;
  transition: all 0.6s;
  bottom: 0;
  opacity: 0;
}
.search_3_div:hover .search_3_div_div{
  opacity: 1;
}
.search_3_div_div>ul{
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
}
.search_3_div_div>ul>li{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fed100;
  margin: 0 3px;
}
.search_3_div_div>ul>li>a{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.search .search_3_div_div>ul>li>a>img{
  width: 20px;
  height: 20px;
}
.search_3_div>div:nth-child(2)>span:nth-child(1){
  color: #e01212;
  font-size: 22px;
  font-weight: 600;
}
.search_3_div>div:nth-child(2){
  width: 100px;
  height: 41px;
  box-sizing: border-box;
  padding-bottom: 15px;
  margin-top: 25px;
}
.search_3_div>div:nth-child(2)>span:nth-child(2){
  color: #c0c0c0;
    font-size: 16px;
    text-decoration: line-through;
    margin-left: 5px;
}
.search_3_div>h6>a{
  color: #333;
  font-size: 15px;
  transition: all 0.6s;
}
.search_3_div>h6>a:hover{
  color: #fed100;
}
.search_4{
  width: 1200px;
  margin: 0px auto;
  padding: 50px 0px;
  display: flex;
  justify-content: flex-end;
}
.search_4>ul{
  border-radius: 25px;
  width: initial;
  border: 1px solid #fed100;
  display: inline-block;
  padding: 10px 2px;
  margin-right: 10px;
}
.search_4>ul>li{
  float: left;
  color: #fed100;
  padding: 0 20px;
  border-right: 1px solid #fed100;
  cursor: pointer;
  color: #333;
  transition: all 0.4s;
}
.search .isActive{
  color: #fed100;
}
.search_4>ul>li:hover{
  color: #fed100;
}
.search_4>ul>li:last-child{
  border-right: none;
}
.search_5{
  width: 1200px;
  margin: 60px auto;
  text-align: center;
  font-size: 100px;
  color: pink;
}
</style>
