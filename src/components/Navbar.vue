<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">BlockCovid</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

        <li class="nav-item ">
          <router-link id="aboutButton" class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link " to="/displayLocations" v-if="$store.state.isConnected">My QR Codes </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link " to="/displayDoctorQrCode" v-if="$store.state.isConnected">My QR Code </router-link>
        </li>
      </ul>
      <ul class="nav justify-content-end">
        <li class="nav-item ">
          <router-link id="loginButton" class="btn btn-outline-success my-2 my-sm-0 mx-1" to="/login" v-if="!$store.state.isConnected">Sign In</router-link>
        </li>
        <li class="nav-item ">
          <router-link id="registerButton" class="btn btn-outline-primary my-2 my-sm-0 mx-1" to="/register" v-if="!$store.state.isConnected">Sign Up</router-link>
        </li>
        <li class="nav-item ">
          <button  id="disconnectButton" class="btn btn-outline-danger my-2 my-sm-0 mx-1"  v-on:click="logout()" v-if="$store.state.isConnected" >log Out</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import store from './blockCovidStore'
import router from '../router'
export default {
  router:router,
  store:store,
  name: "Navbar",
  methods:{
    logout:function (){
      store.commit('isConnectedFalse')
      localStorage.clear()
      router.push('/')
    }
  }
}

</script>

<style scoped>

</style>