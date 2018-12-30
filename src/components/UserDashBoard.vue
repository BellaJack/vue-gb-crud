<template>
  <div class="col-md-8">
    <div class="addUser">
      <header>
        <h3>Users</h3>
      </header>
      <div v-if="users.length" class="row">
        <div class="card col-sm-6" v-for="user in users" :key="user.id">
          <div class="card-body">
            <h5 class="card-title">{{user.firstName}} {{user.lastName}} </h5>
            <p class="card-text">
              Email: {{user.Email}}<br/>
              Phone: {{user.Phone}}
            </p>
            <router-link :to="{ name: 'edit', params: {id: user.id} }" class="btn btn-primary btn-sm">
              Edit
            </router-link>
            <button @click="removeUser(user.id)" type="button" class="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="no-results">There are currently no users</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  const fb = require('../config/firebaseConf.js');
  export default{
    components:{
      name: 'usersDashBoard'
    },
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
        fb.usersCollection.doc(id).delete().then(function() {
          console.log("Document successfully deleted!");
        }).catch(function(error) {
          console.error("Error removing document: ", error);
        });
      }
    }
  }
</script>
