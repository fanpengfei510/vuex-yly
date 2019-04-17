import server from '../utils/api'
const state = {
  arrApp : [
    {
      title: "项目中心",
      _id: 1,
      children: [
        {
          label: "我的项目",
          href: "/project/my",
          id: "2"
        },
        {
          label: "我的任务",
          href: "/project/task",
          id: "3"
        },
        {
          label: "我的审批",
          href: "/project/approve",
          id: "4"
        },
        {
          label: "项目动态",
          href: "/project/news",
          id: "5"
        },
        {
          label: "项目文件",
          href: "/project/file",
          id: "6"
        }
      ]
    },
    { title: "行政案例", _id: 2 }
  ],
  objApp : {},
  strMenuId : ''
}

const actions = {
  getApp(context){
    server.getApp().then(data=>{
      if(data.status == 200){
        context.commit('arrApp',data)
      }
    })
  },
  getMenuId(context,id){
    context.commit('strMenuId',id)
  }
}

const getters = {

}

const mutations = {
  arrApp(state,data){
    state.arrApp = data;
  },
  strMenuId(state,id){
    state.strMenuId = id
  }
}

export default({
  namespaced : true,
  state,
  actions,
  getters,
  mutations
})