<template>
  <div class="home">
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
