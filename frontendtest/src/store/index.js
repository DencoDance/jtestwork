import Vue from "vue";
import Vuex from "vuex";
import userModule from "@/store/modules/user.js";

let storeDescription = {
    modules: {
        user: userModule
    }
};

Vue.use(Vuex);

const store = new Vuex.Store(storeDescription);

export default store;