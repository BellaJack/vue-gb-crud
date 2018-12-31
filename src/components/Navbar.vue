<template>
  <div class="container">
    <div id="nav">
      <header class="project-logo">
        <h1>GB Vue Crud Demo</h1>
      </header>
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
  #nav{
    display: flex;
    flex-flow: row nowrap;
    margin: 1em 0 2em;
  }
  .nav-item.nav-link.router-link-active{
    color: #fff;
  }
</style>