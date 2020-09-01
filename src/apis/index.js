const apis = {
  baseUrl: 'http://api.zhifuxia.net.cn',
  method: 'post',
  timeout: 20000,
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
    url: '/order/orderlist',
    params: {
      shopid: 0,
      siteuserid: 0,
      paystate: 0,
      paytype: 0,
      begindate: '',
      enddate: '',
      sorttype: 0,
      sort: 0
    }
  },
  selectDetail: {
    url: '/order/orderdetail',
    params: {
      orderid: ''
    }
  },
  updatePassword: {
    url: '/api/password',
    params: {}
  },
  insertSuggest: {
    url: '/api/suggest',
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
  updateRefund: {
    url: '/pay/refund',
    params: {
      orderid: '',
      refundpass: '',
      refundreason: '',
      sign: ''
    }
  },
  insertPayment: {
    url: '/pay/acquire',
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