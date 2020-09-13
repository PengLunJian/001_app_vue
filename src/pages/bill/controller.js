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
    onHandleConfirm(e) {
        this.isScroll = true;
        this.showPicker = false;
        if (e) {
            const {value} = e || {};
            this.rangetime = [
                utils.dateFormat(value[0], 'yyyy-mm-dd hh:mm:ss'),
                utils.dateFormat(value[1], 'yyyy-mm-dd hh:mm:ss'),
            ];
        }
        this.exeAjaxSelectBill();
    },
    onHandleCancel() {
        this.isScroll = true;
        this.showPicker = false;
    },
    onHandleInitDate() {
        const date = new Date();
        const dateRange = utils.dateFormat(date, 'yyyy-mm-dd');
        this.rangetime = [
            dateRange + ' 00:00:00',
            dateRange + ' 23:59:59',
        ];
    },
    onHandleTabChange(index) {
        const days = [1, 7, 30];
        this.tab.activeIndex = index;
        const offsetTime = days[index] * 24 * 60 * 60 * 1000;

        const date = new Date();
        const endTime = date.getTime();
        const beginTime = endTime - offsetTime;

        const beginDate = utils.dateFormat(new Date(beginTime), 'yyyy-mm-dd hh:mm:ss');
        const endDate = utils.dateFormat(new Date(endTime), 'yyyy-mm-dd hh:mm:ss');
        this.rangetime = [
            beginDate,
            endDate,
        ];
        this.exeAjaxSelectBill();
    },
    onShowDatePicker(type) {
        this.type = type;
        this.isScroll = false;
        this.showPicker = true;
        this.value = this[type];
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
        const {rangetime} = this;
        const params = {
            begindate: rangetime[0],
            enddate: rangetime[1]
        }
        return params;
    }
};