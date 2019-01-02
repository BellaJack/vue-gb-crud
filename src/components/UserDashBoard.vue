<template>
  <div class="col-md-8">
    <section class="usersList">
      <header>
        <h3>Users</h3>
      </header>
      <div v-if="users.length">
        <div class="card text-dark" v-for="user in users" :key="user.id">
          <div class="card-body row align-items-center">
            <div class="col-sm-8">
              <p class="card-title"><strong>{{user.firstName}} {{user.lastName}}</strong></p>
              <p class="card-text small">
                Email: {{user.Email}}<br/>
                Phone: {{user.Phone}}
              </p>
            </div>
            <div class="col-sm-4 text-right">
              <router-link :to="{ name: 'edit', params: {id: user.id} }" class="btn btn-warning btn-sm">
                Edit
              </router-link>  <button @click="removeUser(user.id)" type="button" class="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="no-results">There are currently no users</p>
      </div>
    </section>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  const fb = require('../config/firebaseConf.js');
  export default{
    data(){
      return{
        user:{
          firstName: ''
        } 
      }
    },
    computed: {
      ...mapState(['users'])
    },
    methods:{
      removeUser(id){
        fb.usersCollection.doc(id).delete();
      }
    }
  }
</script>
<style>
  .form-control,
  .card{
    border: 1px solid #111417;
  }
  .card{
    margin-bottom: 1em;
  }
</style>

