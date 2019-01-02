<template>
  <div class="container">
    <div id="nav">
      <app-logo></app-logo>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <div class="collapse navbar-collapse row" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-item nav-link" to="/home">Home</router-link>
              <a href="#" @click.prevent="logout" class="nav-item nav-link">Logout</a>
            </div>
          </div>
        </div>
      </nav> 
    </div>
  </div>
</template>
<script>
  const fb = require('../config/firebaseConf.js');
  import Logo from '@/components/Logo.vue'
  export default {
    components:{
      'app-logo': Logo
    },
    data(){
      return{}
    },
    methods: {
      logout: function(){
        fb.auth.signOut().then(() => {
          this.$router.replace('login')
        });
      }
    }
  }
</script>
<style scoped>
  #nav{
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    line-height: 1;
    margin: 1em 0 2em;
  }
  .nav-item.nav-link.router-link-active{
    color: #fff;
    border-bottom: 3px solid #17a2b8;
  }
</style>