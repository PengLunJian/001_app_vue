const apis = {
  baseUrl: 'http://api.zhifuxia.net.cn',
  method: 'post',
  timeout: 5000,
  dataType: 'json',
  header: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectLogin: {
    url: '/account/applogin',
    params: {
      username: '',
      password: '',
      deviceId: ''
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
  },
  payRefund: {
    url: '/pay/refund',
    params: {
      orderid: '',
      refundpass: '',
      refundreason: '',
      sign: ''
    }
  },
  payAcquire: {
    url: '',
    params: {
      scanpayno: '',
      paymoney: 0,
      sellerdiscountamount: 0,
      sellercouponamount: 0,
      ordertitle: '',
      ordernote: '',
      sign: ''
    }
  }
}

export default apis;