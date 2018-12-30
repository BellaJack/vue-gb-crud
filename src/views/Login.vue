<template>
  <div class="gb-wrap">
    <div class="login">
      <h1>Login</h1>
      <div class="login_form">
        <label for="loginEmail">Email:</label>
        <input
          id="loginEmail"
          type="text"
          placeholder="Insert your email" 
          v-model="email" />
        <label for="loginPassword">Password:</label>
        <input
          id="loginPassword"
          type="password"
          placeholder="Insert your password"
          v-model="password" />
        <button @click="login">Login</button>
        <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link>!</p>
      </div>
    </div>
  </div>
</template>
<script>
  //import firebase from "firebase";
  const fb = require('../config/firebaseConf.js');
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
          (user) => {
            this.$router.replace('home');
          },
          (err) => {
            alert("Ops... " + err.message);
          }
        );
      }
    }
  }
</script>
<style scoped>
  label,
  input{
    display: block;
  }
</style>
