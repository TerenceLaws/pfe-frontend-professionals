import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =  new Vuex.Store({
    state:{
        isConnected: localStorage.getItem("isConnected")|| false,

        isDoctor : localStorage.getItem("isDoctor") || false,
    },

    getters:{

    },

    mutations:{
        isConnectedFalse(){
            this.state.isConnected=false;
        },
        isConnectedTrue(){
            this.state.isConnected=true;
        },isDoctorFalse(){
            this.state.isDoctor=false;
        },
        isDoctorTrue(){
            this.state.isDoctor=true;
        }
    },

    actions:{},
})

global.store=store;
export default store