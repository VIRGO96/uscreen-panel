const state = {
    allorders:[],

};

const getters = {
    allorders:state => state.allorders,
    
};

const actions = {
};
const mutations = {
  
    setAllOrders(state,payload){
        state.allorders=payload
    }
    
};

export default {
    state,
    getters,
    actions,
    mutations
}
