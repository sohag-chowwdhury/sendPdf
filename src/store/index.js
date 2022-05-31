import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        checkValue: 0
    },
    mutations: {

    },
    actions: {
        backFunc() {
            if (this.state.checkValue > 0) {
                this.state.checkValue = this.state.checkValue - 1
            }
        },
        backFunc2() {
            if (this.state.checkValue > 0) {
                this.state.checkValue = 1
            }
        },
        checkFunc() {

            this.state.checkValue = 0
        },
        checkFunc1() {
          
            this.state.checkValue = 1
        },

        checkFunc2() {

            this.state.checkValue = 2
        },
        checkFunc3() {

            this.state.checkValue = 3
        },
        checkFunc4() {
            this.state.checkValue = 4
        }
    },
    getters: {
        checkValue(state) {
            return state.checkValue
        },

    }
})