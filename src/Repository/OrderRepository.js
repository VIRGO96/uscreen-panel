import Repository from './Repository';
const order_resource = 'posts/create_sadqa_order';
const order_update_resource = 'order/update';
const order_list_resource = 'order/list';

export default {
  getorders() {
    return Repository.get(`${order_list_resource}`+'?Page=1&Size=5')
  },
  edit_order(payload) {
    return Repository.post(`${order_update_resource}`,payload);
  },
  // get_admin_orders(payload) {
  //   return Repository.get(`${admin_order_resource}`);
  // }
};
