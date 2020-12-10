<template>
  <div>
    <div class="d-inline">
      <div class="modal fade" id="modalCreateLocation" tabindex="-1" aria-labelledby="modalCreateLocationLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="createLocation">Create Location</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="createLocationName" class="d-flex justify-content-start">Location name</label>
                  <input type="text" class="form-control" id="createLocationName" placeholder="Enter name">
                </div>
                <div class="form-group">
                  <label for="createSelectAVGTime" class="d-flex justify-content-start">Maximum time</label>
                  <select class="form-control" id="createSelectAVGTime">
                    <option value="30m">30min</option>
                    <option selected value="1h" default>1h</option>
                    <option value="2h">2h</option>
                    <option value="5h">5h</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="createLocationDescription" class="d-flex justify-content-start">Description of
                    location</label>
                  <textarea class="form-control" id="createLocationDescription" rows="3"
                            placeholder="Enter description"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-warning" v-on:click="createLocation" data-dismiss="modal">Create
                Location
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-warning " data-toggle="modal" data-target="#modalCreateLocation">create new location
      </button>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "CreateLocation",
  props: {
    location: {
      type: Object,
      default: () => ({location})
    }
  },
  methods: {
    createLocation: function () {
      const dataLocation = {
        facility_id: JSON.parse(localStorage.getItem("user")).id,
        name: document.getElementById("createLocationName").value,
        description: document.getElementById("createLocationDescription").value,
        max_time: document.getElementById("createSelectAVGTime").value
      }
      console.log(dataLocation)
      axios.post(process.env.VUE_APP_REQ_URL+"/professionals/locations", dataLocation)
          .then(r => {
            console.log(r)
            const dataQrCode = {
              doctor_id: null,
              location_id: r.data.id
            }
            axios.post(process.env.VUE_APP_REQ_URL+"/qrcodes/insert", dataQrCode)
                .then(r => {
                  console.log(r)

                })
                .catch(r => {
                  console.error(r)
                })
          })
          .catch(r => {
            console.error(r)
          })

    }
  }
}
</script>

<style scoped>

</style>