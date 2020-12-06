<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">BlockCovid</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item ">
          <router-link id="homeButton" class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item ">
          <router-link id="aboutButton" class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link " to="/displayQrCodes">My QR Codes </router-link>
        </li>
      </ul>
      <ul class="nav justify-content-end">
        <li class="nav-item ">
          <router-link id="loginButton" class="btn btn-outline-success my-2 my-sm-0 mx-1" to="/login" >Sign In</router-link>
        </li>
        <li class="nav-item ">
          <router-link id="registerButton" class="btn btn-outline-primary my-2 my-sm-0 mx-1" to="/register" >Sign Up</router-link>
        </li>
        <li class="nav-item ">
          <router-link  id="disconnectButton" class="btn btn-outline-danger my-2 my-sm-0 mx-1" to="/register" >Log Out</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

</style>