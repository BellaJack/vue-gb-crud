<template>
  <div class="col-md-4">
    <section class="addUser">
      <header>
        <h3>Add new user</h3>
      </header>
      <div class="addUser__form">
        <form
          @submit.prevent="addNewUser"
          @reset.prevent="cleanForm">
          <div class="form-group">
            <label for="addUserFirstName">First Name</label>
            <input
              class="form-control"
              id="addUserFirstName"
              name="addUserFirstName"
              type="text"
              placeholder="Insert First Name"
              v-model="newUser.firstName" />
            <span class="form-text small">Ex: Draco</span>
          </div>
          <div class="form-group">
            <label for="addUserLastName">Last Name</label>
            <input
              class="form-control"
              id="addUserLastName"
              name="addUserLastName"
              type="text"
              placeholder="Insert Last Name"
              v-model="newUser.lastName"
              required />
            <span class="form-text small">Ex: Malfoy</span>
          </div>
          <div class="form-group">
            <label for="addUserEmail">Email</label>
            <input
              class="form-control"
              id="addUserEmail"
              name="addUserEmail"
              type="email"
              placeholder="Insert Email"
              v-model="newUser.email"
              required />
            <span class="form-text small">Ex: d.malfoy@slytherin.com</span>
          </div>
          <div class="form-group">
            <label id="addUserPhone">Phone</label>
            <input
              class="form-control"
              id="addUserPhone"
              name="addUserPhone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Insert Phone"
              v-model="newUser.phone"
              required />
            <span class="form-text small">Format: 123-456-7890</span>
          </div>
          <div class="form-group">
            <input
              type="submit"
              value="Add User"
              class="btn btn-success btn-sm" />
            <input
              type="reset"
              value="Reset"
              class="btn btn-secondary btn-sm" />
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  const fb = require('../config/firebaseConf.js');
  export default{
    data(){
      return{
        newUser:{
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        }
      }
    },
    methods:{
      addNewUser(){
        fb.usersCollection.add({
          firstName: this.newUser.firstName,
          lastName: this.newUser.lastName,
          Email: this.newUser.email,
          Phone: this.newUser.phone
        }).then(
          () => {
            this.cleanForm();
          }
        );
      },
      cleanForm(){
        this.newUser.firstName = '';
        this.newUser.lastName = '';
        this.newUser.email = '';
        this.newUser.phone = '';
      }
    }
  }
</script>
<style scoped>
  label::after{
    content: '*';
    margin-left: 4px; 
  }
</style>

