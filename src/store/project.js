import server from '../utils/api';

const state = {
  arrTabs : [],
  arrProjectList : [],
  arrUserList : [],
  objTabs : ''
}

const actions = {
  getTabs(context,menuId){
    server.getTabs(menuId).then(data=>{
      context.commit('arrTabs',data.data)
      server.getProjectList(data.data[0]._id).then(data=>{
        context.commit('arrProjectList',data)
      })
    })
  },
  addProject(context,body){
    return server.addProject(body).then( data=> data )
  },
  getUserList(context,body){
    server.getUserList(body).then(data=>{
      context.commit('arrUserList',data.data)
    })
  },
  getTasbId(context,id){
    context.commit('setTabsId',id)
    server.getProjectList(id).then(data=>{
      context.commit('arrProjectList',data)
    })
  }
}

const getters = {

}

const mutations = {
  arrTabs(state,data){
    state.objTabs = data[0]._id
    state.arrTabs = data
  },
  arrProjectList(state,data){
    state.arrProjectList = data.data
  },
  arrUserList(state,data){
    state.arrUserList = data
  },
  setTabsId(state,id){
    state.objTabs = id
  }
}

export default {
  namespaced : true,
  state,
  actions,
  getters,
  mutations
}