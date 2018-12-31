<template>
  <div class="signUp">
    <div class="container">
      <app-logo></app-logo>
      <h2>Sign Up</h2>
      <p>Let's create an account</p>
      <div class="signUp_form row">
        <div class="form-group col-12">
          <label for="signUpEmail">Email:</label>
          <input
            id="signUpEmail" 
            class="form-control"
            type="text" 
            placeholder="Insert your email" 
            v-model="email" />
        </div>
        <div class="form-group col-12">
          <label for="signUpPassword">Password:</label>
          <input 
            id="signUpPassword" 
            class="form-control"
            type="password" 
            placeholder="Insert your password" 
            v-model="password" />
        </div>
        <div class="form-group col-12">
          <button @click="signUp" class="btn btn-primary btn-block">Sign Up</button>
          <p class="small text-center">Back to <router-link to="/login">Login!</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const fb = require('../config/firebaseConf.js');
  import Logo from '@/components/Logo.vue'
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
    },
    components: {
      'app-logo': Logo
    }
  }
</script>
<style scoped>
  .signUp{
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    max-width: 375px;
  }
  button{
    margin-top: 1em;
  }
  .small{
    margin-top: .5em;
  }
  h2{
    margin-top: 1em;
  }
</style>
