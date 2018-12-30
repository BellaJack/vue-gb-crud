<template>
  <div class="edit">
    <app-navbar></app-navbar>
    <div class="container">
      <div class="row">
        <app-edituser></app-edituser>
      </div>  
    </div> 
  </div>
</template>

<script>
  import EditUser from '@/components/EditUser.vue'
  import Navbar from '@/components/Navbar.vue'
  export default {
    name: 'edit',
    components: {
      'app-edituser': EditUser,
      'app-navbar': Navbar
    }
  }
</script>
