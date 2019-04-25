import server from '../utils/api'
const state = {

}

const actions = {
  loginIn(context,data){
    return server.userLogin(data).then( data => data )
  },
  loginUp(context,data){
    return server.userLoginUp(data).then( data => data )
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