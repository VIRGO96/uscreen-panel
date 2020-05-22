import Repository from './Repository';
const order_update_resource = 'order/update';
const order_list_resource = 'order/item/list';
const order_resource = 'order/export';

export default {
  getorders(pagenum) {
    return Repository.get(`${order_list_resource}?Page=${pagenum}&Size=10`)
  },
  edit_order(payload) {
    return Repository.post(`${order_update_resource}`,payload);
  },
  // 
  searchAll(payload) {
    return Repository.get(`${order_list_resource}?Page=${payload.pagenum}&Size=10`+payload.url)
  },
  userExport() {
    return Repository.post(`${order_resource}`);
  },
  userExportFile(payload) {
    return Repository.get(`${order_resource}/history?ExportKey=`+payload);
  },

   
}
