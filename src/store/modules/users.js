const state = {
    loggedUser: null,
    allusers:[],
    notifications:{},

};

const getters = {
    loggedUser:state => state.loggedUser,
    notifications:state => state.notifications,
    allusers:state => state.allusers,
    users: (state) => {
        return state.allusers.filter(item=>item.UserRoleCode=='INDIVIDUAL')
    },
    employer: (state) => {
        return state.allusers.filter(item=>item.UserRoleCode=='EMPLOYER')
    }
    
};

const actions = {
};
const mutations = {
    setLoggedUser: (state, payload) => {
        console.log("auth user set")
        if(localStorage.getItem('uscreen-token')==null){
            localStorage.setItem("uscreen-token",JSON.stringify(payload.Token))

        }
        localStorage.setItem("loggedUser",JSON.stringify(payload))

        state.loggedUser=payload

    },
    setAllUsers(state,payload){
        state.allusers=payload
        
    },
    setNotifications:(state,payload) =>{
        state.notifications=payload
    },
    logout(state,payload){
        state.loggedUser=null;
        localStorage.removeItem('uscreen-token')
        localStorage.removeItem('loggedUser')
        localStorage.removeItem('inside')

    }
    
};

export default {
    state,
    getters,
    actions,
    mutations
}
