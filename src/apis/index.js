const apis = {
  baseUrl: 'http://apiflbl.zhifuxia.net.cn',
  method: 'post',
  timeout: 5000,
  dataType: 'json',
  header: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectLogin: {
    url: '/api/login',
    params: {
      username: '',
      password: ''
    }
  },
  selectIndex: {
    url: '/api/index',
    params: {}
  },
  selectOrder: {
    url: '/api/order',
    params: {}
  },
  selectDetail: {
    url: '/api/detail',
    params: {}
  },
  updatePassword: {
    url: '/api/password',
    params: {}
  },
  insertSuggest: {
    url: '/api/suggest',
    params: {}
  },
  insertPayment: {
    url: '/api/payment',
    params: {}
  },
  selectUser: {
    url: '/api/user',
    params: {}
  },
  insertLoan: {
    url: '/api/loan',
    params: {}
  }
}

export default apis;