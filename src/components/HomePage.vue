<template>
 
  <div class="card  h-100">
    <div class="card-header">
      <img src="../assets/logoCovid.jpg" class="card-img-top " alt="...">
    </div>
    <h1 class="card-title d-flex justify-content-center">{{ msg }}</h1>
    <div class="card-body h-100">
      <p v-if="$store.state.isConnected" class="card-text">Bonjour {{user.name}}</p>
    </div>
  </div>
</template>

<script>
import store from './blockCovidStore'

export default {
  store: store,
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: left;
}
</style>
