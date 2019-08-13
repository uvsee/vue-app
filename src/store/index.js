import Vue from 'vue'
import Vuex from 'vuex'
import student from './student'
import learn from './learn'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    student,
    learn
  }

})
