<template>
  <div class="login">
    <el-form :model='login'>
      <el-form-item label="用户名">
        <el-input  v-model="login.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input  v-model="login.password" type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleLogin" type="primary" style="width:100%;margin-top:20px;">登录</el-button>
        <!-- <el-button>注册</el-button> -->
      </el-form-item>
    </el-form>
    <router-link to="/loginup"><a href="#" class="loginup">还没有账号，马上注册</a></router-link>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'Login',
  data () {
    return {
      login : {
        username : '',
        password : ''
      }
    }
  },
  methods : {
    // 登陆
    handleLogin(){
      this.$store.dispatch('login/loginIn',this.login).then(data=>{
        if(data.data.status == 200){
          let { token,userId } = data.data;
          window.localStorage.setItem('token',token)
          window.localStorage.setItem('userId',userId)
          this.$router.push('/home')
        }else{
          this.$message({
            message : '账号或者密码错误，请重试!',
            type : 'error'
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .login{
    width: 350px;
    background: #ffffff;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #eee;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-60%);
  }
  .login .loginup{
    display: block;
    text-align: center;
  }
</style>
