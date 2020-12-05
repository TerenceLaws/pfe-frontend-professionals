<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-secondary">
      <form class="form-inline">
        <button id="homeButton" class="btn btn-dark" type="button"><router-link to="/">Home</router-link></button>
        <button id="aboutButton" class="btn btn-dark" type="button"><router-link to="/about">A propos</router-link></button>
        <button id="loginButton" class="btn btn-dark" type="button"><router-link to="/login" >connexion</router-link></button>
        <button id="registerButton" class="btn btn-dark" type="button"><router-link to="/register" >inscription</router-link></button>
        <button id="disconnectButton" class="btn btn-danger" type="button">deconnexion</button>
      </form>
    </nav>
    <router-view/>
  </div>
</template>
<script>

</script>
<style scoped>
button{
  margin: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
