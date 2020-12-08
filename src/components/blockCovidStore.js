import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =  new Vuex.Store({
    state:{
        isConnected: false,

        string:"test"
    },

    getters:{

    },

    mutations:{
        isConnectedFalse(){
            this.state.isConnected=false;
        },
        isConnectedTrue(){
            this.state.isConnected=true;
        }
    },

    actions:{},
})

global.store=store;
export default store