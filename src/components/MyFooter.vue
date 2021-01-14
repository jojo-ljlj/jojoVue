<template>
  <div class="myfooter">
    <div class="myfooter_1">
      <div class="myfooter_1_div">
        <div>
          <i></i>
          <span>Subscribe Newsletter And Get Discount</span>
        </div>
        <div>
          <input type="text" placeholder="Enter email address">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
    <div class="myfooter_2">
      <div>
        <div class="myfooter_2_div1">
          <ul>
            <li>Contact Us</li>
            <li> <img src="../assets/shop/foot_2.png">XXX</li>
            <li><img src="../assets/shop/foot_3.png">Email: XXX</li>
            <li><img src="../assets/shop/foot_4.png">Phone: XXX</li>
            <li><img src="../assets/shop/foot_5.png">Fax: XXX</li>
            <li>
              <img src="../assets/shop/foot_6.png">
              <div>
                <p>Mon-Sat 9:00pm – 5:00pm. </p>
                <p>Sun: Closed</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="myfooter_2_div2">
          <ul>
            <li>Information</li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Frequently Questions</a></li>
            <li><a href="#">Delivery Information</a></li>
          </ul>
          <ul>
            <li>Information</li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">My account</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="myfooter_2_div3">
          <h3>Latest Tweets</h3>
          <div>
            <div class="myfooter_2_div3_bo" :style="{top:waTop}">
              <div>
                <p>
                With this roundup of 42 of the best halftone resources for Adobe Photoshop and Adobe Illustrator, here's
                everything you need to achieve that classic vintage look for yourself.
                </p>
                <a href="#">enva.to/rd&nbsp;&nbsp;</a> 
                <a href="#">pic.twitter.com/Xy55wIEP5T</a>
              </div>
              <div>
                <p>
                  Packed with ideas, inspiration, and just a few pictures of cute cats, 
                  it can be hard to stand out in a sea ofgraphics on 
                  <a href="#">@Pinterest</a>
                </p>
              </div>
              <div>
                <p>
                Packed with ideas, inspiration, and just a few pictures of cute cats, 
                it can be hard to stand out in a sea of graphics on
                </p>
                <a href="#">enva.to/r6</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="myfooter_3">
      <div>
        <p>Copyright © 2020.Company name All rights<br> reserved.</p>
        <img src="../assets/shop/Facebook.png">
        <img src="../assets/shop/Twitter.png">
        <img src="../assets/shop/linkedin.png">
        <img src="../assets/shop/rss.png">
      </div>
      <div>
        <a href="#"><img src="../assets/shop/1.png"></a>
      </div>
      <div>
        <p>Allow payment base on</p>
        <a href="#"><img src="../assets/shop/footer_last.png"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      maTop:0,
      waTop:""
    }
  },
  mounted(){
    setInterval(()=>{
      this.waTop=this.maTop+"px";
      this.maTop-=140;
      if(this.maTop<-280){
        this.maTop=0;
      }
    },5000)
  }
}
</script>

<style>
.myfooter a{
  transition: all 0.6s;
}
.myfooter a:hover{
  color: #fed100;
}
.myfooter_1{
  width: 100%;
  padding: 30px 0;
  background-color: #fed100;
}
.myfooter_1_div{
  width: 1200px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.myfooter_1_div>div:nth-child(1){
  width: 570px;
  height: 100%;
  display: flex;
  align-items: center;
}
.myfooter_1_div>div:nth-child(1)>i{
  display: inline-block;
  width: 36px;
  height: 36px;
  background: url(../assets/shop/footer_1.png) no-repeat;
  background-size: 100% 100%;
}
.myfooter_1_div>div:nth-child(1)>span{
  font-size: 18px;
  font-weight: 600;
  padding-left: 10px;
}
.myfooter_1_div>div:nth-child(2){
  width: 570px;
  box-sizing: border-box;
  height: 100%;
  position: relative;
}
.myfooter_1_div>div:nth-child(2)>input{
  width: 100%;
  box-sizing: border-box;
  height: 35px;
  border: 0;
  padding: 0 127px 0 20px;
  outline: 0;
  color: #888888;
  border-radius: 50px;
}
.myfooter_1_div>div:nth-child(2)>button{
  position: absolute;
  background-color: #333333;
  color: #ffffff;
  font-size: 21px;
  top: 0;
  right: 0;
  width: 120px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 50px;
  font-size: 14px;
  border: 0;
  transition: all 0.6s;
}
.myfooter_1_div>div:nth-child(2)>button:hover{
  outline: 0;
  background-color: #fdb828;
  cursor: pointer;
}
.myfooter_2{
  width: 100%;
  height: 353px;
  box-sizing: border-box;
  padding: 55px 0 50px 0;
}
.myfooter_2>div{
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex; 
  justify-content: space-between;
}
.myfooter_2_div1>ul>li{
  padding-left: 30px;
  padding-bottom: 0;
  margin-bottom: 15px;
  font-size: 15px;
  color: #333333;
}
.myfooter_2_div1>ul>li:nth-child(1),.myfooter_2_div2>ul>li:nth-child(1),.myfooter_2_div3>h3{
  font-weight: 400;
  padding-bottom: 20px;
  font-size: 22px;
  margin-bottom: 0;
  color: #000;
  padding-left: 0;
}
.myfooter_2_div1>ul>li:last-child{
  display: flex;
  align-items: center;
}
.myfooter_2_div1>ul>li>img{
  width: 24px;
  height: 24px;
  vertical-align: bottom;
  margin-right: 15px;
}
.myfooter_2_div2{
  display: flex;
  justify-content: space-between;
}
.myfooter_2_div2>ul{
  padding: 0 25px;
}
.myfooter_2_div2>ul>li{
  margin-bottom: 15px;
  font-size: 15px;
  color: #000;
}
.myfooter_2_div2>ul>li>a{
  color: #333333;
}
.myfooter_2_div3{
  width: 500px;
  box-sizing: border-box;
  padding: 0 30px;
}
.myfooter_2_div3 a{
  color: #00b3e6;
}
.myfooter_2_div3>div{
  width: 100%;
  height: 140px;
  position: relative;
  overflow: hidden;
}
.myfooter_2_div3_bo{
  position: absolute;
  transition: all 1s;
}
.myfooter_2_div3_bo>div{
  height: 140px;
}
.myfooter_3{
  border-top: 1px solid #ebebeb;
  padding: 25px 0;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  color: #333333;
  font-size: 15px;
  line-height: 24px;
  justify-content: space-between;
}
.myfooter_3>div:nth-child(1)>img{
  width: 14px;
  height: 17px;
  margin-right: 20px;
}
</style>
