<template>
  <div id="app">
    <img alt="Logo a trouver et inserer">
    <Title msg="Bienvenue dans l'app blockCovid"/>
    <SigninForm/>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import SigninForm from './components/signinForm.vue'

export default {
  name: 'App',
  components: {
    Title,
    SigninForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
