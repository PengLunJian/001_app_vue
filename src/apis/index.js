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
  }
}

export default apis;