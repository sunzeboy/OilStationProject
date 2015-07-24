angular.module('starter.services', [])

.factory('Configure', function() {
    return {
        name: function() {
            return '智慧加油站';
        }
    };
})

.factory('Discounts', function() {
    var discounts = [{
        id: 0,
        title: '鲜货|抢变形金刚加油卡,你需要这份名单!',
        discription: '2015/6/1 ~ 2015/6/2 全国地区',
        start: '2015/6/1',
        end: '2015/6/2',
        area: '全国地区',
        thumbnail: 'http://www.95504.net/HandlerImage.ashx?url=AAAAfb51c209-29b4-4b47-8b78-1b73787c0d58.jpg',
        url: 'http://www.95504.net/template/52862436.html'
    }, {
        id: 1,
        title: '红包再升级，20元起送！女士福利，男士同享！',
        discription: '2015/3/8 ~ 2015/3/10 全国地区',
        start: '2015/3/8',
        end: '2015/3/10',
        area: '全国地区',
        thumbnail: 'http://www.95504.net/HandlerImage.ashx?url=AAAAfb7ffd93-2d3a-4f93-9d34-c022a183dc0a.jpg',
        url: 'http://mp.weixin.qq.com/s?__biz=MzA3OTM4NzMzMA==&mid=204133332&idx=1&sn=3a500a39e985eaaae8841cb32080cd60'
    }, {
        id: 2,
        title: '新春纳福 金羊献瑞',
        discription: '2015/1/1 ~ 2015/2/28 全国地区',
        start: '2015/1/1',
        end: '2015/2/28',
        area: '全国地区',
        thumbnail: 'http://www.95504.net/HandlerImage.ashx?url=AAAA784867c8-ffe0-4400-9188-52e4d65d3bb4.jpg',
        url: 'http://mp.weixin.qq.com/s?__biz=MzA3OTM4NzMzMA==&mid=202268253&idx=1&sn=ba787594a58f863b0d4ef0dd59d62f3a'
    }];
    return {
        all: function() {
            return discounts;
        },
        recent: function(count) {
            var recent = [];
            for (var i = 0; i < count && i < discounts.length; i++) {
                recent.push(discounts[i]);
            }
            return recent;
        }
    };
})

.factory('Functions', function() {
    var fucntions = [{
        id: 0,
        title: '加油站',
        icon: 'img/function-oilstation.png',
        url: 'activity://cn.sh.changxing.ct.mobile.activity.LbsActivity'
    }, {
        id: 1,
        title: '昆仑加油卡',
        icon: 'img/function-oilcard.png',
        url: 'http://www.95504.net'
    }, {
        id: 2,
        title: '在线商城',
        icon: 'img/function-eshopping.png',
        url: ''
    }, {
        id: 3,
        title: '违章查询',
        icon: 'img/function-violation.png',
        url: 'http://m.hbgajg.com'
    }, {
        id: 4,
        title: '代驾',
        icon: 'img/function-driver.png',
        url: 'http://h5.edaijia.cn/newapp/index.html?os=android'
    }, {
        id: 5,
        title: '物流',
        icon: 'img/function-transport.png',
        url: 'http://www.95155.com'
    }, {
        id: 6,
        title: '手机充值',
        icon: 'img/function-charge.png',
        url: 'https://www.baifubao.com/wap/0/charge/0?channel_no=CHF0000000&device_token=BaiduWallet_H5_common_charge&bd_from_id=wise&bd_ref_id=light_null&bd_channel_id=light_null&bd_sub_page=wz_huafeichongzhi&bd_source_light=2491425'
    }, {
        id: 7,
        title: '生活缴费',
        icon: 'img/function-payment.png',
        url: 'http://m.blemall.com/mobile/pay_index'
    }];
    return {
        all: function() {
            return fucntions;
        }
    };
})


;
