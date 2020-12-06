<template>
  <div>
    <div class="row container-fluid mw-100">
      <div class=" pl-0 pr-0 container col-4">
        <div class="list-group vh-100">
          <QrCodeListItem v-bind:locations="locations"/>
        </div>
      </div>
      <QrCodeDetailView/>
    </div>
  </div>
</template>

<script>
import QrCodeListItem from "@/components/QrCodeListItem";
import QrCodeDetailView from "@/components/QrCodeDetailView";
import axios from "axios";

export default {
  name: "DisplayQrCodes",
  components: {QrCodeDetailView, QrCodeListItem},
  data() {
    return {
      locations: null,
      errored: false
    }

  },
  mounted() {
    axios
        .get('https://pfe-backend-dev.herokuapp.com/professionals/locations')
        .then(response => (this.locations = response.data))
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false);
  }

}
</script>

<style scoped>

</style>