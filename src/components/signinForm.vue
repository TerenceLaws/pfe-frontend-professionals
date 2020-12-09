<template>
  <div id="signinForm" class="container">
    <h3 style="padding-top: 30px;padding-bottom: 15px;text-decoration: underline ">Se connecter</h3>
    <form>
      <div class="form-group">
        <label for="login">login</label>
        <input type="text" id="login">
      </div>
      <div class="form-group">
        <label for="password">mot de passe</label>
        <input type="password" id="password">
      </div>
    </form>
    <div class="form-group">
      <button class="btn btn-secondary" v-on:click="login()">se connecter</button>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from './blockCovidStore'
import router from '../router'
export default {
  store:store,
name: "signinForm",
  methods:{
    login: function (){
      const data= {
          mail: document.getElementById("login").value,
          password:document.getElementById("password").value
      }
      axios.post("https://pfe-backend-dev.herokuapp.com/professionals/login ",data)
           .then(r => {
             if(r.status===200) {
               console.log(r.data[0])
               this.$store.commit('isConnectedTrue')
               const user = {
                 id:r.data[0][0]._id,
                 mail:r.data[0][0].mail,
                 address:r.data[0][0].address,
                 name:r.data[0][0].name,
                 is_doctor:r.data[0][0].is_doctor,
               }

               localStorage.setItem("user",JSON.stringify(user))
               localStorage.setItem("isConnected",true)
               localStorage.setItem("token",r.data[1])
               router.push("/")

             }
           })
           .catch(r =>{
             console.error(r)
           })
    }
  }
}
</script>

<style scoped>
input{
  width: 280px;
}
</style>