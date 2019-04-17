<template>
  <div class="loginUp">
    <el-form :model='login'>
      <el-form-item label="用户名">
        <el-input  v-model="login.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input  v-model="login.password" type="password"/>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input  v-model="login.email"/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input  v-model="login.phone"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleLoginUp" type="primary" style="width:100%;margin-top:20px;">注册</el-button>
      </el-form-item>
    </el-form>
    <router-link to="/"><a href="#" class="loginlink">有账号，马上登录</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login : {
        username : '',
        password : '',
        email : '',
        phone : ''
      }
    }
  },
  methods : {
    handleLoginUp(){
      this.$store.dispatch('login/loginUp',this.login).then(data=>{
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .loginUp{
    width: 500px;
    background: #ffffff;
    height: 500px;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #eee;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-60%);
  }
  .loginlink{
    display: block;
    text-align: center;
  }
</style>
