import server from '../utils/api';

const state = {
  arrTabs : [],
  arrProjectList : []
}

const actions = {
  getTabs(context,menuId){
    server.getTabs(menuId).then(data=>{
      context.commit('arrTabs',data)
      server.getProjectList('123').then(data=>{
        context.commit('arrProjectList',data)
      })
    })
  },
  addProject(context,body){
    console.log(body)
    server.addProject(body).then( data=> data )
  }
}

const getters = {

}

const mutations = {
  arrTabs(state,data){
    state.arrTabs = data
  },
  arrProjectList(state,data){
    state.arrProjectList = data
  }
}

export default {
  namespaced : true,
  state,
  actions,
  getters,
  mutations
}