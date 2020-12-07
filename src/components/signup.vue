<template>
  <div class="container col-lg-3">
    <h1 style="padding-bottom: 45px;padding-top: 45px;text-decoration: underline ">Inscription</h1>
    <form>
      <fieldset>
        <div class="form-group">
          <label for="registerName">Entrez votre nom</label>
          <input type="text" class="form-control" id="registerName" placeholder="Prenom Nom">
        </div>
        <div class="form-group">
          <label for="registerType">Type</label>
          <select id="registerType" class="form-control">
            <option value="true">docteur</option>
            <option value="false">etablissement</option>
          </select>
        </div>
        <div class="form-group">
          <label for="registerAdresse">Entrez votre adresse</label>
          <input type="text" class="form-control" id="registerAdresse" placeholder="Rue de l'exemple n°6">
        </div>
        <div class="form-group">
          <label for="registerEmail">Entrez votre email</label>
          <input type="email" class="form-control" id="registerEmail" placeholder="exemple@hotmail.com">
        </div>
        <div class="form-group">
          <label for="registerPassword">Entrez votre mot de passe</label>
          <input type="password" class="form-control" id="registerPassword">
        </div>

      </fieldset>
    </form>
    <div class="form-group">
      <button class="btn btn-info" v-on:click="register()">S'inscrire</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

name: "signup",
  methods: {
    register: function(){
      const data = {
        is_doctor: document.getElementById("registerType").value,
        name: document.getElementById("registerName").value,
        address:document.getElementById("registerAdresse").value,
        mail:document.getElementById("registerEmail").value,
        password:document.getElementById("registerPassword").value,

      }
      axios.post("https://pfe-backend-dev.herokuapp.com/professionals/register",data)
      .then(r => {
        console.log(r)
        alert("ajout réussi.")
      }).catch(error => console.error(error))

    }

    }

}
</script>

<style scoped>

</style>