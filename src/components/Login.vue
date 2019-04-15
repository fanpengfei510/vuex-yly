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
  </div>
</template>

<script>
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
    handleLogin(){
      this.$router.push('/home')
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
</style>
