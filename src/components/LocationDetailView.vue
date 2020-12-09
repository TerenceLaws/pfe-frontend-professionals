<template>
  <div class="border-left container-fluid  col-8 ">
    <div class="card border-0 mh-100 min-vh-100">

      <div id="canevas" v-html="QRCode"></div>
      <!--      <img src="../../src/assets/logo.png" class=" rounded mx-auto d-block" alt="...">-->
      <div class="card-body">
        <h5 class="card-title">{{ location.name }}</h5>
        <p class="card-text">{{ location.description }}</p>

        <CreateLocation v-bind:location="location"/>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

import CreateLocation from "@/components/CreateLocation";
export default {
  name: "LocationDetailView",
  components: {CreateLocation},
  props: {
    location: {
      type: Object,
      default: () => ({location})
    },
    QRCode: {
      type: Object,
      // default: () => ({this.QRCode})
    }
  }
}


</script>

<style scoped>

</style>