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
      <button class="btn btn-secondary" v-on:click="test()">se connecter</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: "signinForm",
  methods:{
    test: function (){
      const data= {
          mail:"aaaa",
          password:"bbbb"
      }
      axios.post("https://pfe-backend-dev.herokuapp.com/doctors",data).then(r => console.log(r)).catch(r => console.error(r))
    }
  }

}

</script>

<style scoped>
input{
  width: 280px;
}
</style>