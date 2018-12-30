<template>
  <div class="edit">
    <div class="container">
      <div class="row">
        <app-edituser></app-edituser>
      </div>  
    </div> 
  </div>
</template>

<script>
  import EditUser from '@/components/EditUser.vue'
  export default {
    name: 'edit',
    components: {
      'app-edituser': EditUser
    }
  }
</script>
