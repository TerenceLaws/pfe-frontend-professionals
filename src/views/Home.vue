<template>
  <div class="home">
    <img alt="Mettre notre logo ici">
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
