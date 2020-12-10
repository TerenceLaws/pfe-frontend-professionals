<template>
  <div id="signinForm" class="container">
    <h3 style="padding-top: 30px;padding-bottom: 15px;text-decoration: underline ">Se connecter</h3>
    <form class="d-flex justify-content-center">
      <fieldset>
        <div class="form-group ">
          <label for="login" class="d-flex justify-content-start">login</label>
          <input type="text" class="form-control" id="login">
        </div>
        <div class="form-group">
          <label for="password" class="d-flex justify-content-start">mot de passe</label>
          <input type="password" class="form-control" id="password">
        </div>
      </fieldset>
    </form>
    <div class="form-group">
      <button class="btn btn-secondary" v-on:click="login()">se connecter</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from './blockCovidStore'
import router from '../router'

export default {
  store: store,
  name: "signinForm",
  methods: {
    login: function () {
      const data = {
        mail: document.getElementById("login").value,
        password: document.getElementById("password").value
      }
      axios.post(process.env.VUE_APP_REQ_URL + "/professionals/login", data)
          .then(r => {
            if (r.status === 200) {
              console.log(r.data[0])
              this.$store.commit('isConnectedTrue')


              const user = {
                id: r.data[0][0].id,
                mail: r.data[0][0].mail,
                address: r.data[0][0].address,
                name: r.data[0][0].name,
                is_doctor: r.data[0][0].is_doctor,
              }
              localStorage.setItem("user", JSON.stringify(user))
              localStorage.setItem("isConnected", true)
              localStorage.setItem("isDoctor", r.data[0][0].is_doctor)
              if (r.data[0][0].is_doctor) {
                this.$store.commit("isDoctorTrue")
                axios.get(process.env.VUE_APP_REQ_URL + "/qrcodes")
                    .then(result => {
                      let havingqrcode = false;
                      result.data.forEach(function (element) {
                        let qrCode = JSON.parse(JSON.stringify(element))
                        if (qrCode.doctor_id === JSON.parse(localStorage.getItem("user")).id) havingqrcode = true;
                      })
                      if (!havingqrcode) {
                        console.log("je n'ai pas encore de qr code j'en recois un ")
                        //need axios request
                        const dataQrCode = {
                          doctor_id: r.data[0][0].id,
                          location_id: null
                        }
                        axios.post(process.env.VUE_APP_REQ_URL + "/qrcodes/insert", dataQrCode)
                            .then(r => {
                              console.log(r)

                            })
                            .catch(r => {
                              console.error(r)
                            })
                      }
                    }).catch(r => {
                  console.log(r)
                })

              } else {
                this.$store.commit("isDoctorFalse")
              }
              localStorage.setItem("token", r.data[1])
              router.push("/")

            }
          })
          .catch(r => {
            console.error(r)
          })
    }
  }
}
</script>

<style scoped>
input {
  width: 280px;
}
</style>