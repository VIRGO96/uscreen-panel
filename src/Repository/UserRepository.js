import Repository from './Repository';

const user_login_resource = 'auth/login';
const users_list_resource = 'user/list';

export default {
  authenticatelogin(payload) {
    return Repository.post(`${user_login_resource}`, payload)
  },
  getusers() {
    return Repository.get(`${users_list_resource}`)
  },
  
  getsingleuser(payload) {
    
    return Repository.get(`${users_list_resource}`+'?Page=1&Size=5&UserKey='+payload)
  },
};
