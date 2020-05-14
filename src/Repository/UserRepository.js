import Repository from './Repository';

const user_login_resource = 'auth/login';
const users_list_resource = 'user/list';
const users_company_resource = 'user/company';
const user_resource = 'user/export';

export default {
  authenticatelogin(payload) {
    return Repository.post(`${user_login_resource}`, payload)
  },
  // getusers() {
  //   return Repository.get(`${users_list_resource}`)
  // },
  getAllusers(payload) {
    return Repository.get(`${users_list_resource}?Page=${payload.pagenum}&Size=${payload.size}`)
  },
  getusers(payload) {
    return Repository.get(`${users_list_resource}?Page=${payload.pagenum}&Size=5&UserRoleId=${payload.id}`)
  },
  getsingleuser(payload) {
    
    return Repository.get(`${users_list_resource}`+'?Page=1&Size=5&UserKey='+payload)
  },
  searchAll(payload) {
    return Repository.get(`${users_list_resource}?Page=${payload.pagenum}&Size=5`+payload.url)
  },
  getusercompanies() {
    return Repository.get(`${users_company_resource}`)
  },
  userExport() {
    return Repository.post(`${user_resource}`);
  },
  userExportFile(payload) {
    return Repository.get(`${user_resource}/history?ExportKey=`+payload);
  },
};
