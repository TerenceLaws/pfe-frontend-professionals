<template>
  <div class="home">
    <img alt="Mettre notre logo ici" src="../assets/coronavirus_logo-2-833x321.jpg" style="width: 20%; height: 20%">
    <HomePage msg="Bienvenue sur l'application BlockCovid"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>
