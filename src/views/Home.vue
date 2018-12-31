<template>
  <div class="home">
    <app-navbar></app-navbar>
    <div class="container">
      <h2>Dashboard</h2>
      <div class="row">
        <app-adduser></app-adduser>
        <app-userdashboard></app-userdashboard>
      </div>  
    </div> 
  </div>
</template>

<script>
  import AddUser from '@/components/AddUser.vue'
  import UserDashBoard from '@/components/UserDashBoard.vue'
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'home',
    components: {
      'app-adduser': AddUser,
      'app-userdashboard': UserDashBoard,
      'app-navbar': Navbar
    }
  }
</script>

