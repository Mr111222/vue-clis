import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'



Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      hasRoute: false,
      count: 10,
      ajaxData: [],
      token: ''
    },
    getters: {
      count: state => state.count,
      ajaxData: state => state.ajaxData,
      token: state => state.token
    },
    mutations: {
      hasRoute(state, val) {
          state.hasRoute = val;
      },
      setSyncTime(state, val){
          this.dispatch('getSyncTime');   // mutations 调用 actions
          this.commit('hasRoute',''); // mutations 调用 mutations 
      },
      ADD (state) {
        state.count ++
      },
      SUB (state) {
        if(state.count > 0) {
          state.count --
        }else{
          alert(`count值不能为0`)
        }
      },
      AJAX (state, obj) {
        state.ajaxData = obj
      },
      GETTOKEN (state, obj) {
        state.token = obj
      }
    },
    actions: {
      // actions 调用 mutations
      // context.commit('hasRoute',res)
      getSyncTime(context){
          context.commit('hasRoute','')
      },
      getAdd (context) {
        context.commit('ADD')
      },
      getSub (context) {
        context.commit('SUB')
      },
      getToken (context) {
        context.commit('GETTOKEN')
      }
    },
    plugins: [createPersistedState()]
})