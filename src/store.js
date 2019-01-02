import Vue from 'vue';
import Vuex from 'vuex';
const fb = require('./config/firebaseConf.js');

Vue.use(Vuex);

fb.usersCollection.orderBy('lastName').onSnapshot(querySnapshot => {
  let usersArray = []
  querySnapshot.forEach(doc => {
    let user = doc.data()
    user.id = doc.id
    usersArray.push(user)
  })
  store.commit('setUsers', usersArray)
});


export const store = new Vuex.Store({
  state: {
    users: []
  },
  actions: {
    clearData({ commit }) {
      commit('setUsers', null)
    },
  },
  mutations: {
    setUsers(state, val) {
      if (val) {
        state.users = val
      } else {
        state.users = []
      }
    }
  }
});