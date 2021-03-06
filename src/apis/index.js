const apis = {
  baseUrl: 'https://api.zhifuxia.net.cn',
  method: 'post',
  timeout: 20000,
  dataType: 'json',
  header: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  updateVersion: {
    url: '/account/appupdate',
    params: {
      appid: '',
      version: ''
    }
  },
  selectToken: {
    url: '/account/apprefreshtoken',
    params: {
      token: ''
    }
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
    url: '/account/appchangepassword',
    params: {
      oldpassword: '',
      newpassword: ''
    }
  },
  selectUser: {
    url: '/account/appmyinfo',
    params: {}
  },
  insertSuggest: {
    url: '/pay/addfeedback',
    params: {
      title: '',
      content: '',
      name: '',
      phone: ''
    }
  },
  insertLoan: {
    url: '/pay/addloanapply',
    params: {
      name: '',
      idcard: '',
      mobile: '',
      businesshours: '',
      monthturnover: '',
      businessaddress: ''
    }
  },
  updateRefund: {
    url: '/pay/apprefund',
    params: {
      orderid: '',
      refundpass: '',
      refundreason: '',
      sign: ''
    }
  },
  insertPayment: {
    url: '/pay/appacquire',
    params: {
      scanpayno: '',
      paymoney: 0,
      sellerdiscountamount: 0,
      sellercouponamount: 0,
      ordertitle: '',
      ordernote: '',
      sign: ''
    }
  },
  selectShops: {
    url: '/pay/currentsiteshop',
    params: {}
  },
  selectClerk: {
    url: '/pay/currentsiteuser',
    params: {
      shopid: 0
    }
  },
  selectChart: {
    url: '/report/indexfivepayamount',
    params: {}
  },
  selectRecom: {
    url: '/report/indexfiveorder',
    params: {}
  },
  selectTotal: {
    url: '/report/incomecntcustomer',
    params: {
      begindate: '',
      enddate: ''
    }
  },
  selectRecon: {
    url: '/report/orderreport',
    params: {
      begindate: '',
      enddate: ''
    }
  },
  selectBill: {
    url: '/report/orderreport',
    params: {
      begindate: '',
      enddate: ''
    }
  }
}

export default apis;