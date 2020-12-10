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
    </div>
  </div>
</template>

<script>
import LocationListItem from "@/components/LocationListItem";
import LocationDetailView from "@/components/LocationDetailView";
import axios from "axios";
export default {
  name: "DisplayLocations",
  components: {LocationDetailView, LocationListItem},
  data() {
    return {
      locations: undefined,
      errored: false,
      location: undefined,
    }

  },
  mounted() {
    axios
        .get(process.env.VUE_APP_REQ_URL+'/professionals/locations_by_facility', {headers: {"authorization": localStorage.getItem("token")}})
        .then(response => {
          this.locations = response.data;
          console.log(this.locations)
          this.location = this.locations[0];
          this.updateDetailsView(this.location);
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
          .get(process.env.VUE_APP_REQ_URL + "/qrcodes/?id=" + location.id, {headers: {"authorization": localStorage.getItem("token")}})
          .then(response => {
            response.data.forEach(function (element) {
              let qrCode = JSON.parse(JSON.stringify(element));
              if (qrCode.location_id === location.id) {
                // eslint-disable-next-line no-undef
                const displayQrCode = new QRCodeStyling({
                  width: 300,
                  height: 300,
                  data: qrCode.id,
                  image: "",
                  dotsOptions: {
                    color: "#14222C",
                    type: "rounded"
                  },
                  backgroundOptions: {
                    color: "#ffffff",
                  },
                  imageOptions: {
                    crossOrigin: "anonymous"
                  }
                });
                document.getElementById("canvas").innerHTML = "";
                displayQrCode.append(document.getElementById("canvas"));
                document.getElementById(location.id).onclick = function (){
                  displayQrCode.download();
                }

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