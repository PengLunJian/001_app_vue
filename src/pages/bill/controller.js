import {mapActions, mapState} from 'vuex';
import * as utils from '../../utils';

export const states = {
    ...mapState({
        isLoading: state => state.BILL.isLoading,
        isSuccess: state => state.BILL.isSuccess,
        isFailure: state => state.BILL.isFailure,
        isData: state => state.BILL.isData,
        isTotal: state => state.BILL.isData.total
    }),
};

export const actions = {
    ...mapActions([
        'ajaxSelectBill'
    ]),
    onHandleInitDate() {
        const date = new Date();
        const dateStr = utils.dateFormat(date, 'yyyy-mm-dd');
        this.begindate = dateStr + ' 00:00:00';
        this.enddate = dateStr + ' 23:59:59';
    },
    onHandleTabChange(index) {
        this.tab.activeIndex = index;
        const value = this.tab.items[index].value;
        const offsetTime = value * 24 * 60 * 60 * 1000;

        const endTime = new Date().getTime();
        const beginTime = endTime - offsetTime;

        this.begindate = utils.dateFormat(new Date(beginTime), 'yyyy-mm-dd hh:mm:ss');
        this.enddate = utils.dateFormat(new Date(endTime), 'yyyy-mm-dd hh:mm:ss');
        this.exeAjaxSelectBill();
    },
    onHandleChangeDate() {

    },
    exeAjaxSelectBill() {
        this.showLoading();
        const params = this.getParams();
        this.ajaxSelectBill(params)
            .then((res) => {
                res = res || {};
                this.hideLoading();
                const success = res[0].success && res[1].success;
                if (success) {

                } else {
                    this.showToast('加载失败，请重试');
                }
                console.log(res);
            })
            .catch((err) => {
                this.hideLoading();
                this.showToast('网络异常，请重试');
                console.log(err);
            });
    },
    onRefresh() {
        this.exeAjaxSelectBill();
    },
    getParams() {
        const {begindate, enddate} = this;
        const params = {
            begindate,
            enddate
        }
        return params;
    }
};