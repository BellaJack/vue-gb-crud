<template>
  <div class="login">
    <div class="container">
      <app-logo></app-logo>
      <h2>Login</h2>
      <div class="login_form row">
        <div class="form-group col-12">
          <label for="loginEmail">Email:</label>
          <input
            id="loginEmail"
            class="form-control"
            type="text"
            placeholder="Insert your email" 
            v-model="email" />
        </div>
        <div class="form-group col-12">
          <label for="loginPassword">Password:</label>
          <input
            id="loginPassword"
            class="form-control"
            type="password"
            placeholder="Insert your password"
            v-model="password" />
        </div>
        <div class="form-group col-12 text-center">
          <button @click="login" @keyup.enter="login" class="btn btn-primary btn-block">Login</button>
          <span class="small">You don't have an account? You can <router-link to="/sign-up">create one</router-link>!</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const fb = require('../config/firebaseConf.js');
  import Logo from '@/components/Logo.vue'
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function(){
        fb.auth.signInWithEmailAndPassword(this.email, this.password).then(
          () => {
            this.$router.replace('home');
          },
          (err) => {
            alert("Ops... " + err.message);
          }
        );
      }
    },
    components: {
      'app-logo': Logo
    }
  }
</script>
<style scoped>
  button{
    margin-top: 1em;
  }
  .small{
    margin-top: .5em;
  }
  .login{
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    max-width: 375px;
  }
  h2{
    margin-top: 1em;
  }
</style>

