<template>
  <div id="nav">
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
</template>
<script>
  const fb = require('../config/firebaseConf.js');
  export default {
    components:{
      name: 'addNewUser'
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
  .nav-item.nav-link.router-link-active{
    color: #fff;
  }
</style>