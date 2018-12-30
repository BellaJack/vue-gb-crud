<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png"-->
    <div class="container">
      <div class="row">
        <app-adduser></app-adduser>
        <app-userdashboard></app-userdashboard>
      </div>  
    </div> 
    <div class="logout">
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase"
import AddUser from '@/components/AddUser.vue'
import UserDashBoard from '@/components/UserDashBoard.vue'

export default {
  name: 'home',
  components: {
    'app-adduser': AddUser,
    'app-userdashboard': UserDashBoard
  },
  methods:{
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      });
    }
  }
}
</script>
