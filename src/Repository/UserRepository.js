import Repository from './Repository';

const user_login_resource = 'auth/login';
const users_list_resource = 'user/list';
const update_user_resource = 'users/update_user';

const user_forgetpassword_resource = 'users/forgetpassword';
const user_qurabani_resource = 'posts/user_posts_comments_likes';
const user_notification_resource = 'posts/user_notifications';
const single_user_resource = 'users/getuser';
const send_message_notification = 'posts/send_message_notification';

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
  // register(payload) {
  //   return Repository.post(`${user_register_resource}`, payload)
  // },
  // updateProfile(payload) {
  //   return Repository.post(`${update_user_resource}`, payload)
  // },
  // get_user_resources(payload) {
  //   return Repository.post(`${user_qurabani_resource}`, payload)
  // },
  // get_user_notifications(payload) {
  //   return Repository.post(`${user_notification_resource}`, payload)
  // },
  // forgetpassword(payload) {
  //   return Repository.post(`${user_forgetpassword_resource}`, payload)
  // },
  // sendmsgnotification(payload) {
  //   return Repository.post(`${send_message_notification}`, payload)
  // }
};
