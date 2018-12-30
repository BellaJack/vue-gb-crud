<template>
  <div class="signUp">
    <h1>Sign Up</h1>
    <p>Let's create an account</p>
    <div class="signUp_form">
      <label for="signUpEmail">Email:</label>
      <input
        id="signUpEmail" 
        type="text" 
        placeholder="Insert your email" 
        v-model="email" />
      <label for="signUpPassword">Password:</label>
      <input 
        id="signUpPassword" 
        type="password" 
        placeholder="Insert your password" 
        v-model="password" />
      <button @click="signUp">Sign Up</button>
      <p><router-link to="/login">Back to Login!</router-link>!</p>
    </div>
  </div>
</template>
<script>
  const fb = require('../config/firebaseConf.js');
  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function(){
        fb.auth.createUserWithEmailAndPassword(this.email, this.password).then(
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
<style>

</style>
