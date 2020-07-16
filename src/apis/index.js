const apis = {
  baseUrl: 'http://192.168.1.51:8080/apis/',
  method: 'post',
  timeout: 5000,
  dataType: 'json',
  header: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectLogin: {
    url: 'login',
    params: {
      username: '',
      password: ''
    }
  }
}

export default apis;