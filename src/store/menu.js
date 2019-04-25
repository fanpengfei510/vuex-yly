import server from '../utils/api'
const state = {
  arrApp : [],
  objApp : {},
  strMenuId : ''
}

const actions = {
  getApp(context){
    server.getApp().then(data=>{
      if(data.status == 200){
        context.commit('arrApp',data.data)
      }
    })
  },
  getMenuId(context,id){
    context.commit('strMenuId',id)
  },
  getObjApp(context,item){
    context.commit('setObjApp',item)
  }
}

const getters = {

}

const mutations = {
  arrApp(state,data){
    state.arrApp = data;
    state.objApp = data[0]
  },
  strMenuId(state,id){
    state.strMenuId = id
  },
  setObjApp(state,item){
    state.objApp = item
  }
}

export default({
  namespaced : true,
  state,
  actions,
  getters,
  mutations
})