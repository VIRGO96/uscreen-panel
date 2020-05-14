import Repository from './Repository';
const order_update_resource = 'order/update';
const order_list_resource = 'order/item/list';
const order_resource = 'order/export';

export default {
  getorders(pagenum) {
    return Repository.get(`${order_list_resource}?Page=${pagenum}&Size=5`)
  },
  edit_order(payload) {
    return Repository.post(`${order_update_resource}`,payload);
  },
  gePaymenttorders(payload) {
    return Repository.get(`${order_list_resource}?Page=${payload.pagenum}&Size=5&PaymentDateFrom=${payload.from}&PaymentDateTo=${payload.to}`)
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
  // 
  searchAll(payload) {
    return Repository.get(`${order_list_resource}?Page=${payload.pagenum}&Size=5`+payload.url)
  },
  userExport() {
    return Repository.post(`${order_resource}`);
  },
  userExportFile(payload) {
    return Repository.get(`${order_resource}/history?ExportKey=`+payload);
  },

   
}
