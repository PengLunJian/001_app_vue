const success = parseInt(Math.random(1) * 100) % 2 === 0;
export const LOGIN = {
  success,
  data: {
    username: 'PENG',
    password: '900724'
  }
}

export const INDEX = {
  success,
  data: {
    total: {
      price: 10000.05,
      order: 100,
      count: 30
    },
    items: [
      {
        type: '支付宝',
        text: '支付宝收款45.56元',
        time: '2020/08/04 17:12:00'
      },
      {
        type: '微信',
        text: '微信发生一笔退款23.56元',
        time: '2020/08/04 17:12:00'
      },
      {
        type: '支付宝',
        text: '支付宝收款45.56元',
        time: '2020/08/04 17:12:00'
      },
      {
        type: '微信',
        text: '微信发生一笔退款23.56元',
        time: '2020/08/04 17:12:00'
      },
      {
        type: '支付宝',
        text: '支付宝收款45.56元',
        time: '2020/08/04 17:12:00'
      }
    ]
  }
};