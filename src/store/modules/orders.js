const state = {
    allorders:[],
    orderpage:0,
};

const getters = {
    allorders:state => state.allorders,
    orderpage:state => state.orderpage,
    
};

const actions = {
};
const mutations = {
  
    setAllOrders(state,payload){
        state.allorders=payload.PageData
        state.orderpage=payload.HitsTotal

    },
    setOrderCount(state,payload){
        state.orderpage=payload.HitsTotal

    },
    
};

export default {
    state,
    getters,
    actions,
    mutations
}
