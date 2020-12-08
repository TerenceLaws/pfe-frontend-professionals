<template>
  <div class="border-left container-fluid  col-8 ">
    <div class="card border-0 mh-100 min-vh-100">

      <div id="canevas" v-html="QRCode"></div>
      <!--      <img src="../../src/assets/logo.png" class=" rounded mx-auto d-block" alt="...">-->
      <div class="card-body">
        <h5 class="card-title">{{ location.name }}</h5>
        <p class="card-text">{{ location.description }}</p>
        <a class="btn btn-warning mx-3">Edit location</a>
        <a class="btn btn-warning">create new location</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import QRCodeStyling from 'qr-code-styling';

export default {
  name: "LocationDetailView",
  props: {
    location: {
      type: Object,
      default: () => ({location})
    }
  },
  data() {
    return {
      QRCode: undefined,
    }

  },
  mounted() {
    axios
        .get('https://pfe-backend-dev.herokuapp.com/qrcodes/:'+location.facility_id)
        .then(response => {
          response.data.forEach(function (element) {
            if (element.location_id === location._id) {
              console.log("aaa" + element)
              this.QRCode = new QRCodeStyling({
                width: 200,
                height: 200,
                data: response.data._id
              })
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
  }
}


</script>

<style scoped>

</style>