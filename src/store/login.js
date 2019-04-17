import server from '../utils/api'
const state = {

}

const actions = {
  loginIn(context,data){
    server.userLogin(data).then( data => data )
  },
  loginUp(context,data){
    server.userLoginUp(data).then( data => data )
  }
}

const getters = {

}

const mutations = {

}

export default {
  namespaced:true,
  state,
  actions,
  getters,
  mutations
}