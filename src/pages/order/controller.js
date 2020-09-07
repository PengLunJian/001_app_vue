import {mapActions, mapMutations, mapState} from 'vuex';
import * as actionTypes from '../../store/actionTypes';
import * as $ajax from '../../ajax';

export const states = {
  ...mapState({
    isLoading: state => state.ORDER.isLoading,
    isSuccess: state => state.ORDER.isSuccess,
    isFailure: state => state.ORDER.isFailure,
    isOrder: state => state.ORDER.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxSelectShops',
    'ajaxSelectOrder',
    'ajaxSelectClerk'
  ]),
  ...mapMutations([
    actionTypes.SELECT_ORDER_REPLACE
  ]),
  onHandleReset() {
    const {activeIndex} = this.tab;
    if (activeIndex === 0) {

    } else if (activeIndex === 1) {
      this.btnMethod.value = 0;
      this.btnMethod.activeIndex = -1;
      this.btnStatus.value = 0;
      this.btnStatus.activeIndex = -1;
      this.btnPerson.value = 0;
      this.btnPerson.activeIndex = -1;
    }
  },
  onHandleConfirm() {
    this.pageindex = 0;
    this.onHandleClose();
    this.SELECT_ORDER_REPLACE();
    this.exeAjaxSelectOrder();
  },
  onHandleChange(index) {
    const {activeIndex} = this.tab;
    if (activeIndex === index) {
      this.tab.activeIndex = -1;
      this.isScroll = true;
    } else {
      this.tab.activeIndex = index;
      this.isScroll = false;
    }
  },
  onHandleShop(index) {
    this.btnShop.activeIndex = index;
  },
  onHandleSort(index) {
    const {items, activeIndex} = this.btnSort;
    if (activeIndex === index) {
      this.btnSort.activeIndex = -1;
      this.btnSort.value = items[0].value;
    } else {
      this.btnSort.activeIndex = index;
      this.btnSort.value = items[index].value;
    }
    this.onHandleConfirm();
  },
  onHandleMethod(index) {
    const {items, activeIndex} = this.btnMethod;
    if (activeIndex === index) {
      this.btnMethod.activeIndex = -1;
      this.btnMethod.value = 0;
    } else {
      this.btnMethod.activeIndex = index;
      this.btnMethod.value = items[index].value;
    }
  },
  onHandleStatus(index) {
    const {items, activeIndex} = this.btnStatus;
    if (activeIndex === index) {
      this.btnStatus.activeIndex = -1;
      this.btnStatus.value = 0;
    } else {
      this.btnStatus.activeIndex = index;
      this.btnStatus.value = items[index].value;
    }
  },
  onHandlePerson(index) {
    this.btnPerson.activeIndex = index;
  },
  onHandleClose() {
    this.tab.activeIndex = -1;
    this.isScroll = true;
  },
  onHandleScrollToLower() {
    $ajax.abort();
    const {rows, totalcount, pageindex} = this.isOrder;
    if (rows.length < totalcount) {
      this.pageindex = pageindex + 1;
      this.exeAjaxSelectOrder();
    }
  },
  exeAjaxSelectShops() {
    this.ajaxSelectShops()
      .then((res) => {
        res = res || {};
        const {success} = res;
        if (!success) {
          this.showToast('加载失败，请重试');
        }
        console.log(res);
      })
      .catch((err) => {
        this.showToast('网络异常，请重试');
        console.log(err);
      });
  },
  exeAjaxSelectOrder() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxSelectOrder(params)
      .then((res) => {
        res = res || {};
        this.hideLoading();
        const {success} = res;
        if (!success) {
          if (this.isOrder.rows.length) {
            this.showToast('加载失败，请重试');
          }
        }
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        if (this.isOrder.rows.length) {
          this.showToast('网络异常，请重试');
        }
        console.log(err);
      });
  },
  exeAjaxSelectClerk() {
    const params = {shopid: 0};
    this.ajaxSelectClerk(params)
      .then((res) => {
        res = res || {};
        const {success} = res;
        if (!success) {
          this.showToast('加载失败，请重试');
        }
        console.log(res);
      })
      .catch((err) => {
        this.showToast('网络异常，请重试');
        console.log(err);
      });
  },
  onRefresh() {
    this.exeAjaxSelectOrder();
  },
  getParams() {
    const {
      pageindex,
      pagesize,
      btnMethod,
      btnStatus,
      btnSort
    } = this;
    const params = {
      pageindex,
      pagesize,
      shopid: 0,
      siteuserid: 0,
      paystate: btnStatus.value,
      paytype: btnMethod.value,
      begindate: '',
      enddate: '',
      sorttype: btnSort.value.sorttype,
      sort: btnSort.value.sort
    };
    return params;
  }
};