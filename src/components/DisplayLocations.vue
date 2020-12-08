<template>
  <div>
    <div class="row container-fluid mw-100">
      <div class=" pl-0 pr-0 container col-4">
        <div class="list-group vh-100">
          <LocationListItem
              v-bind:locations="locations"
              v-bind:updateDetailsView="updateDetailsView"/>
        </div>
      </div>
      <LocationDetailView v-bind:location="location"
                          v-bind:QRCode="QRCode"/>
    </div>
  </div>
</template>

<script>
import LocationListItem from "@/components/LocationListItem";
import LocationDetailView from "@/components/LocationDetailView";
import axios from "axios";
import QRCodeStyling from "qr-code-styling";


export default {
  name: "DisplayLocations",
  components: {LocationDetailView, LocationListItem},
  data() {
    return {
      locations: undefined,
      errored: false,
      location: undefined,
      QRCode: undefined,
    }

  },
  mounted() {
    axios
        .get('https://pfe-backend-dev.herokuapp.com/professionals/locations')
        .then(response => {
          this.locations = response.data;
          this.location = this.locations[0];
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
  },
  methods: {
    updateDetailsView: function (location) {
      this.location = location
      axios
          .get('https://pfe-backend-dev.herokuapp.com/qrcodes/'+location.facility_id)
          .then(response => {
            response.data.forEach(function (element) {
              if (element.location_id === location._id) {
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
}
</script>

<style scoped>

</style>