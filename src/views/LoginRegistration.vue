<template>
  <div class="mylogreg">
    <div class="motai" :class="{moShow}">
      {{moHtml}}
    </div>
    <div class="mylogreg_1">
      <router-link to="/">Home</router-link>
      <img src="../assets/shop/right.png">
      <span>Login & Register</span>
    </div>
    <div class="mylogreg_2">
      <!-- 这里是登陆的界面 -->
      <div class="mylogreg_login">
        <h4>Login</h4>
        <p>UserName*</p>
        <input type="text" placeholder="Username" v-model="login_uname" class="log_login">
        <p>Password*</p>
        <input type="password" @keyup.13="login()" placeholder="Password" v-model="login_upwd" class="log_password">
        <div class="mylogreg_login_div">
          <div>
            <input type="checkbox" v-model="remember_me" id="remember_me">
            <label for="remember_me">Remember Me</label>
          </div>
          <div>
            <a href="#">Forgotten pasward?</a>
          </div>
        </div>
        <button class="to_login" @click="login()">LGOIN</button>
      </div>
      <!-- 登陆界面结束 -->
      <!-- 这里是注册的界面 -->
      <div class="mylogreg_reg">
        <h4>Register</h4>
            <p>UserName</p>
            <input v-model="reg_uanme" type="text" placeholder="请输入6-16位数字或字母">
            <p>Email Address</p>
            <input type="text" v-model="reg_email" placeholder="Email Address">
            <div class="mylogreg_reg_1">
              <div>
                <p>Password</p>
                <input v-model="reg_upwd" type="password" placeholder="6-16位数字或字母">
              </div>
              <div>
                <p>Confirm Password</p>
                <input v-model="con_pwd" @keyup.13="reg()" type="password" placeholder="再次输入密码">
              </div>
            </div>
            <button class="to_reg" @click="reg()">Register</button>
      </div>
      <!-- 注册界面结束 -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      remember_me:true,   //是否记住账号
      login_uname:localStorage.getItem('login_uname') || "",
      login_upwd:"",
      reg_uanme:"",
      reg_email:"",
      reg_upwd:"",
      con_pwd:"",
      moShow:false,    //控制弹出框的显示隐藏和位置
      moHtml:"呵呵"   //弹出框的内容
    }
  },
  methods: {
    //登录
    login(){
      if(this.login_uname&&this.login_upwd){
        // let obj={
        //   username:this.login_uname,
        //   password:this.login_upwd,
        // }
        // this.qs.stringify(obj)
        this.axios.post('/login',`username=${this.login_uname}&password=${this.login_upwd}`).then(result=>{
          console.log(result.data.result);
          if(result.data.code=="1"){
            this.$store.commit('login_mutations',result.data.result[0]);//把数据传入vuex的userInfo中
            localStorage.setItem('isLogined',1);//保存登录状态
            localStorage.setItem('userInfo',JSON.stringify(result.data.result[0]));//在localStorage中保存用户信息
            if(this.remember_me){
              localStorage.setItem('login_uname',this.login_uname);
            }
            this.$router.push('/');
          }else{
            this.moHtml="账号或密码输入错误";
            this.moTodo(); 
          }
        })
      }else{
        this.moHtml="用户名和密码不能为空";
        this.moTodo(); 
      }
    },

    //注册
    reg(){
      let uname_reg=/^[0-9a-zA-Z]{6,16}$/;
      let email_reg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let upwd_reg=/^[0-9a-zA-Z]{6,16}$/;
      if(uname_reg.test(this.reg_uanme)){
        if(email_reg.test(this.reg_email)){
          if(upwd_reg.test(this.reg_upwd)){
            if(this.con_pwd==this.reg_upwd){
              //开始写注册的
              let obj={
                username:this.reg_uanme,
                password:this.reg_upwd,
                email:this.reg_email
              }
              this.axios.post('/reg',this.qs.stringify(obj)).then(result=>{
                if(result.data=="1"){
                  this.moHtml="注册成功";
                  this.moTodo(); 
                  history.go(0);
                }else if(result.data=="0"){
                  this.moHtml="用户名已存在";
                  this.moTodo(); 
                }else{
                  this.moHtml="注册失败";
                  this.moTodo(); 
                }
              })
            }else{
              this.moHtml="两次密码输入不一致";
              this.moTodo(); 
            }
          }else{
            this.moHtml="password格式不正确";
            this.moTodo();
          }
        }else{
          this.moHtml="email格式不正确";
          this.moTodo();
        }
      }else{
        this.moHtml="username格式不正确";
        this.moTodo();
      }
    },
    moTodo(){
      this.moShow=true;
      setTimeout(()=>{
        this.moShow=false;
      },2000)
    }
  },
}
</script>

<style>
  
  .mylogreg a{
    transition: all 0.6s;
  }
  .mylogreg a:hover{
    color: #fed100 !important;
  }
  .mylogreg_1{
    padding-top: 35px;
    width: 1200px;
    margin: 0 auto;
    color: #333333;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }
  .mylogreg_1>a{
    color: #333333;
  }
  .mylogreg_1>img{
    width: 13px;
    margin: 0 10px;
  }
  .mylogreg_2{
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
  }
  .mylogreg_login,.mylogreg_reg{
    width: 570px;
    box-sizing: border-box;
    padding: 30px;
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
    height: 390px;
  }
  /* 两个表的h4样式 */
  .mylogreg_login>h4,.mylogreg_reg>h4{
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    padding-bottom: 20px;
    font-family: "Work Sans", sans-serif;
    color: #333333;
  }
  /* 两个表的p标签样式 */
  .mylogreg_login>p,.mylogreg_reg>p{
    font-size: 14px;
    margin-bottom: 12px;
    font-weight: 500;
  }
  /* 两个表的input样式 */
  .mylogreg_login .log_login,.log_password,.mylogreg_reg p+input{
    width: 100%;
    background-color: transparent;
    border: 1px solid #ebebeb;
    border-radius: 0;
    line-height: 23px;
    padding: 10px 20px;
    font-size: 14px;
    color: #333;
    margin-bottom: 15px;
    box-sizing: border-box;
    outline: 0;
  }
  .mylogreg_login_div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #remember_me{
    width: 20px;
    height: 20px;
    border: 1px solid #ebebeb;
    vertical-align: bottom;
    margin-right:10px ;
  }
  #remember_me+label{
    font-size: 14px;
    font-weight: 400;
    color: #888888;
    user-select: none;
  }
  .mylogreg_login_div>div:nth-child(2)>a{
    color: #333;
    font-size: 15px;
  }
  .mylogreg .to_login,.to_reg{
    width: 140px;
    height: 40px;
    margin-top: 30px;
    background-color: #333333;
    color: #ffffff;
    display: block;
    border-radius: 0;
    line-height: 40px;
    border: 0;
    cursor: pointer;
    transition: all 0.6s;
  }
  .mylogreg .to_login:hover,.to_reg:hover{
    background-color: #fed100;
  }
  /* 注册样式 */
  .mylogreg_reg{
    height: 440px;
  }
  .mylogreg_reg_1{
    display: flex;
    justify-content: space-between;
  }
  .mylogreg_reg_1>div{
    width: 48%;
  }
</style>

