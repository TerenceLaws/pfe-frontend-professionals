<template>
  <div id="DoctorCanvas">

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DisplayDoctorQrCode",
  mounted() {
    axios
        .get('https://pfe-backend-dev.herokuapp.com/qrcodes', {headers: {"authorization": localStorage.getItem("token")}})
        .then(response => {
          response.data.forEach(function (element) {
            let qrCode = JSON.parse(JSON.stringify(element));
            if (qrCode.doctor_id === localStorage.getItem("user").id) {
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