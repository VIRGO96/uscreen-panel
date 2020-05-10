import Repository from './Repository';
const order_update_resource = 'order/update';
const order_list_resource = 'order/item/list?Page=1&Size=343';

export default {
  getorders() {
    return Repository.get(`${order_list_resource}`)
  },
  edit_order(payload) {
    return Repository.post(`${order_update_resource}`,payload);
  },
  gePaymenttorders(payload) {
    return Repository.get(`${order_list_resource}&PaymentDateFrom=${payload.from}&PaymentDateTo=${payload.to}`)
  },
  getCompletionorders(payload) {
    return Repository.get(`${order_list_resource}&OrderCreatedFrom=${payload.from}&OrderCreatedTo=${payload.to}`)
  },
  getPaymentOrders(payload) {
    return Repository.get(`${order_list_resource}&PaymentTypeId=${payload.PaymentTypeId}`)
  },
  getStatusOrders(payload) {
    return Repository.get(`${order_list_resource}&OrderStatusId=${payload.OrderStatusId}`)
  },
  getPackageOrders(payload) {
    return Repository.get(`${order_list_resource}&PackageServiceId=${payload.PackageServiceId}`)
  },
  getSearchOrders(payload) {
    return Repository.get(`${order_list_resource}&s=${payload.search}`)
  },
   
}
