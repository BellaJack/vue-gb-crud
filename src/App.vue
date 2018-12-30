<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/home">Home</router-link>
            <router-link class="nav-item nav-link" to="/about">About</router-link>
            <router-link class="nav-item nav-link" to="/login">Login</router-link> 
            <router-link class="nav-item nav-link" to="/sign-up">Sign Up</router-link>
          </div>
        </div>
      </nav> 
    </div>
    <router-view/>
  </div>
</template>
<script>
  const fb = require('./config/firebaseConf.js');
  export default {
    data(){
      return{
        isLogged: false
      }
    }
  }
</script>

<style scoped>
  .nav-item.nav-link.router-link-active{
    color: #fff;
  }
</style>
