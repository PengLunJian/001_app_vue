import * as utils from '../utils';

/**
 *
 * @param state
 * @constructor
 */
export const SELECT_LOGIN_REQUEST = (state) => {
  state.LOGIN.isLoading = true;
  state.LOGIN.isSuccess = false;
  state.LOGIN.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_LOGIN_SUCCESS = (state, data) => {
  state.LOGIN.isLoading = false;
  state.LOGIN.isSuccess = true;
  state.LOGIN.isFailure = false;
  state.LOGIN.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_LOGIN_FAILURE = (state) => {
  state.LOGIN.isLoading = false;
  state.LOGIN.isSuccess = false;
  state.LOGIN.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_INDEX_REQUEST = (state) => {
  state.INDEX.isLoading = true;
  state.INDEX.isSuccess = false;
  state.INDEX.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_INDEX_SUCCESS = (state, data) => {
  const {sitename} = state.LOGIN.isData || {};
  const data1 = data[0].data || {};
  const total = {...data1, sitename};

  const series = [];
  const categories = [];
  (data[1].data || []).map((item) => {
    const {paydate, totalmoney} = item;
    const dateStr = paydate.substr(5, 5);
    categories.push(dateStr);
    series.push(totalmoney);
  });

  const chart = {
    categories,
    series: [
      {
        data: series
      }
    ]
  };

  const items = (data[2].data || []).map((item) => {
    const {paytime} = item;
    const time = utils.formatTime(paytime);
    return {
      ...item,
      time
    }
  });

  const newData = {total, chart, items};
  state.INDEX.isLoading = false;
  state.INDEX.isSuccess = true;
  state.INDEX.isFailure = false;
  state.INDEX.isData = newData;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_INDEX_FAILURE = (state) => {
  state.INDEX.isLoading = false;
  state.INDEX.isSuccess = false;
  state.INDEX.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const UPDATE_REFUND_REQUEST = (state) => {
  state.REFUND.isLoading = true;
  state.REFUND.isSuccess = false;
  state.REFUND.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const UPDATE_REFUND_SUCCESS = (state, data) => {
  state.REFUND.isLoading = false;
  state.REFUND.isSuccess = true;
  state.REFUND.isFailure = false;
  state.REFUND.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const UPDATE_REFUND_FAILURE = (state) => {
  state.REFUND.isLoading = false;
  state.REFUND.isSuccess = false;
  state.REFUND.isFailure = true;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const UPDATE_REFUND_REPLACE = (state, data) => {
  const {orderid} = data;
  const oldData = state.DETAIL.isData;
  const oldRows = state.ORDER.isData.rows;
  const newData = {
    ...oldData,
    paystate: '已退款',
    isDisable: true
  };
  const newRows = (oldRows || []).map((item) => {
    const tempObj = item.orderid === orderid ?
      {...item, paystate: '已退款'} : item;
    return tempObj;
  });
  state.DETAIL.isData = newData;
  state.ORDER.isData.rows = newRows;
};
/**
 *
 * @param state
 * @constructor
 */
export const INSERT_PAYMENT_REQUEST = (state) => {
  state.PAYMENT.isLoading = true;
  state.PAYMENT.isSuccess = false;
  state.PAYMENT.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const INSERT_PAYMENT_SUCCESS = (state, data) => {
  const {ordermoney} = data;
  const {sitename} = state.LOGIN.isData || {};
  const newData = {...data, sitename};

  const oldIndex = state.INDEX.isData || {};
  const oldTotal = isIndex || {};
  const {totalmoney} = total || {};
  const newTotalMoney = parseFloat(totalmoney) + parseFloat(ordermoney);
  state.INDEX.isData = {};


  state.PAYMENT.isLoading = false;
  state.PAYMENT.isSuccess = true;
  state.PAYMENT.isFailure = false;
  state.PAYMENT.isData = newData;
};
/**
 *
 * @param state
 * @constructor
 */
export const INSERT_PAYMENT_FAILURE = (state) => {
  state.PAYMENT.isLoading = false;
  state.PAYMENT.isSuccess = false;
  state.PAYMENT.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_ORDER_REQUEST = (state) => {
  state.ORDER.isLoading = true;
  state.ORDER.isSuccess = false;
  state.ORDER.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_ORDER_SUCCESS = (state, data) => {
  state.ORDER.isLoading = false;
  state.ORDER.isSuccess = true;
  state.ORDER.isFailure = false;
  const oldRows = state.ORDER.isData.rows;
  const newRows = data.rows || [];
  const rows = oldRows.concat(newRows);
  state.ORDER.isData = {...data, rows};
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_ORDER_FAILURE = (state) => {
  state.ORDER.isLoading = false;
  state.ORDER.isSuccess = false;
  state.ORDER.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_ORDER_REPLACE = (state) => {
  state.ORDER.isData = {
    pageindex: 1,
    rows: [],
    totalcount: 0
  };
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_SHOPS_REQUEST = (state) => {
  state.SHOPS.isLoading = true;
  state.SHOPS.isSuccess = false;
  state.SHOPS.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_SHOPS_SUCCESS = (state, data) => {
  state.SHOPS.isLoading = false;
  state.SHOPS.isSuccess = true;
  state.SHOPS.isFailure = false;
  state.SHOPS.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_SHOPS_FAILURE = (state) => {
  state.SHOPS.isLoading = false;
  state.SHOPS.isSuccess = false;
  state.SHOPS.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_CLERK_REQUEST = (state) => {
  state.CLERK.isLoading = true;
  state.CLERK.isSuccess = false;
  state.CLERK.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_CLERK_SUCCESS = (state, data) => {
  state.CLERK.isLoading = false;
  state.CLERK.isSuccess = true;
  state.CLERK.isFailure = false;
  state.CLERK.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_CLERK_FAILURE = (state) => {
  state.CLERK.isLoading = false;
  state.CLERK.isSuccess = false;
  state.CLERK.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_DETAIL_REQUEST = (state) => {
  state.DETAIL.isLoading = true;
  state.DETAIL.isSuccess = false;
  state.DETAIL.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_DETAIL_SUCCESS = (state, data) => {
  const {paytime, paystate} = data;
  const date = new Date();
  const dateStr = utils.dateFormat(date, 'yyyy/mm/dd');
  const targetTime = new Date(paytime.replace(/-/g, '/')).getTime();
  const beginTime = new Date(dateStr + ' 00:00:00').getTime();
  const endTime = date.getTime();
  const isDisable = !(
    (beginTime <= targetTime)
    && (targetTime <= endTime)
    && (paystate === '已支付')
  );
  const newData = {...data, isDisable};

  state.DETAIL.isLoading = false;
  state.DETAIL.isSuccess = true;
  state.DETAIL.isFailure = false;
  state.DETAIL.isData = newData;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_DETAIL_FAILURE = (state) => {
  state.DETAIL.isLoading = false;
  state.DETAIL.isSuccess = false;
  state.DETAIL.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const UPDATE_PASSWORD_REQUEST = (state) => {
  state.PASSWORD.isLoading = true;
  state.PASSWORD.isSuccess = false;
  state.PASSWORD.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const UPDATE_PASSWORD_SUCCESS = (state, data) => {
  state.PASSWORD.isLoading = false;
  state.PASSWORD.isSuccess = true;
  state.PASSWORD.isFailure = false;
  state.PASSWORD.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const UPDATE_PASSWORD_FAILURE = (state) => {
  state.PASSWORD.isLoading = false;
  state.PASSWORD.isSuccess = false;
  state.PASSWORD.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const INSERT_SUGGEST_REQUEST = (state) => {
  state.SUGGEST.isLoading = true;
  state.SUGGEST.isSuccess = false;
  state.SUGGEST.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const INSERT_SUGGEST_SUCCESS = (state, data) => {
  state.SUGGEST.isLoading = false;
  state.SUGGEST.isSuccess = true;
  state.SUGGEST.isFailure = false;
  state.SUGGEST.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const INSERT_SUGGEST_FAILURE = (state) => {
  state.SUGGEST.isLoading = false;
  state.SUGGEST.isSuccess = false;
  state.SUGGEST.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const INSERT_LOAN_REQUEST = (state) => {
  state.LOAN.isLoading = true;
  state.LOAN.isSuccess = false;
  state.LOAN.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const INSERT_LOAN_SUCCESS = (state, data) => {
  state.LOAN.isLoading = false;
  state.LOAN.isSuccess = true;
  state.LOAN.isFailure = false;
  state.LOAN.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const INSERT_LOAN_FAILURE = (state) => {
  state.LOAN.isLoading = false;
  state.LOAN.isSuccess = false;
  state.LOAN.isFailure = true;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_USER_REQUEST = (state) => {
  state.USER.isLoading = true;
  state.USER.isSuccess = false;
  state.USER.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_USER_SUCCESS = (state, data) => {
  state.USER.isLoading = false;
  state.USER.isSuccess = true;
  state.USER.isFailure = false;
  state.USER.isData = data;
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_USER_FAILURE = (state) => {
  state.USER.isLoading = false;
  state.USER.isSuccess = false;
  state.USER.isFailure = true;
};