<template>
  <div>
    <div id="DoctorCanvas">
    </div>
    <button id="downloadbutton" class="btn btn-info">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
        <path fill-rule="evenodd"
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
      </svg>
      telecharger
    </button>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "DisplayDoctorQrCode",
  mounted() {
    axios
        .get(process.env.VUE_APP_REQ_URL + "/qrcodes", {headers: {"authorization": localStorage.getItem("token")}})
        .then(response => {
          response.data.forEach(function (element) {
            let qrCode = JSON.parse(JSON.stringify(element));
            if (qrCode.doctor_id === JSON.parse(localStorage.getItem("user")).id) {
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

              document.getElementById("DoctorCanvas").innerHTML = "";
              displayQrCode.append(document.getElementById("DoctorCanvas"));
              document.getElementById("downloadbutton").onclick = function () {
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
</script>

<style scoped>

</style>