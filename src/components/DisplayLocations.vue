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
      <LocationDetailView v-bind:location="location"/>
      <p>{{location.facility_id}}</p>
    </div>
  </div>
</template>

<script>
import LocationListItem from "@/components/LocationListItem";
import LocationDetailView from "@/components/LocationDetailView";
import axios from "axios";


export default {
  name: "DisplayLocations",
  components: {LocationDetailView, LocationListItem/*, LocationDetailView*/},
  data() {
    return {
      locations: undefined,
      errored: false,
      location: undefined,
    }

  },
  mounted() {
    axios
        .get('https://pfe-backend-dev.herokuapp.com/professionals/locations')
        .then(response => {
          this.locations = response.data;
          // console.log("Data"+ this.locations)
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
    }
  }
}
</script>

<style scoped>

</style>