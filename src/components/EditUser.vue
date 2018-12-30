<template>
  <div>
    <div class="editUser">
      <div class="editUser__form">
        <form
          class="row"
          @submit.prevent="updateUser"
          @reset.prevent="cleanForm">
          <div class="form-group col-sm-6">
            <label for="editUserFirstName">First Name:</label>
            <input
              class="form-control"
              id="editUserFirstName"
              name="editUserFirstName"
              type="text"
              value="editUser.firstName"
              v-model="editUser.firstName" />
          </div>
          <div class="form-group col-sm-6">
            <label for="editUserLastName">Last Name:</label>
            <input
              class="form-control"
              id="editUserLastName"
              name="editUserLastName"
              type="text"
              value="editUser.lastName"
              v-model="editUser.lastName"/>
          </div>
          <div class="form-group col-sm-6">
            <label for="editUserEmail">Email:</label>
            <input
              class="form-control"
              id="editUserEmail"
              name="editUserEmail"
              type="email"
              value="editUser.email"
              v-model="editUser.email"/>
          </div>
          <div class="form-group col-sm-6">
            <label id="editUserPhone">Phone:</label>
            <input
              class="form-control"
              id="editUserPhone"
              name="editUserPhone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value="editUser.phone"
              v-model="editUser.phone"/>
          </div>
          <div class="form-group col-sm-6">
            <input
              type="submit"
              value="Confirm"
              class="btn btn-primary" /> 
            <input
              type="reset"
              value="Clean"
              class="btn btn-light" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  const fb = require('../config/firebaseConf.js');
  export default{
    components:{
      name: 'editUser'
    },
    data(){
      return{
        editUser:{
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        }
      }
    },
    created(){
      fb.usersCollection.doc(this.$route.params.id).get().then(res => {
        this.editUser.firstName = res.data().firstName;
        this.editUser.lastName = res.data().lastName;
        this.editUser.email = res.data().Email;
        this.editUser.phone = res.data().Phone;
      }).catch(err => {
        console.log(err)
      })
    },
    methods:{
      updateUser(){
        fb.usersCollection.doc(this.$route.params.id).set({
          firstName: this.editUser.firstName,
          lastName: this.editUser.lastName,
          Email: this.editUser.email,
          Phone: this.editUser.phone
        }).then(
          (user) => {
            console.log('User edited');
            this.$router.go(-1);
          },
          (err) => {
            console.log("Ops... " + err.message);
          }
        );
      },
      cleanForm(){
        this.editUser.firstName = '';
        this.editUser.lastName = '';
        this.editUser.email = '';
        this.editUser.phone = '';
      }
    }
  }
</script>
