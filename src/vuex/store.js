import Vue from 'vue'
import Vuex from 'vuex'
import contact from './contacts' //存放所有联系人的数据
import mutations from "./mutations"
import getters from "./getters"
Vue.use(Vuex)
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    newMsgCount: 3, //新消息数量
    allContacts: contact.contacts, //所有联系人
    currentPageName: "微信",
    headerStatus: true,
    tipsStatus: false,
    msgList: {
        baseMsg: [{
                "mid": 1,
                "type": "friend",
                "group_name": "订阅号消息",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": false,
                "msg": [{
                    "text": "asdfghjkl",
                    "date": 18888888888,
                    "name": "Ann",
                    "headerUrl": "../assets/images/head1.png"
                },
                 {
                    "text": 'hjkl',
                    "date": 18888888888,
                    "name": "Ann",
                    "headerUrl": "../assets/images/head1.png"
                },
                 {
                    "text": 'rtyui',
                    "date": 18888888888,
                    "name": "Ann",
                    "headerUrl": "../assets/images/head1.png"
                }],
                "user": [contact.getUserInfo('1000001')]
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "收购万达讨论群",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                        "text": "长按消息，唤醒消息操作菜单",
                        "date": 1488117964495,
                        "name": "夜华",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }, {
                        "text": '点击空白处，操作菜单消失',
                        "date": 1488117964495,
                        "name": "阿荡",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                    },
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "夜华",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }
                ],
                "user": [contact.getUserInfo('wxid_zhaohd'), contact.getUserInfo('wxid_yehua')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "isvj ankl",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                    "text": 'ajs ',
                    "date": 1488117964495,
                    "name": "uewjcsnk ",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"
                }],
                "user": [contact.getUserInfo('wxid_zhenji'), contact.getUserInfo('wxid_zhugeliang'), contact.getUserInfo('wxid_zhaohd')]
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": "acjsnkl",
                    "date": 1488117964495,
                    "name": "sjcn",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": 'vchbjkas',
                    "date": 1488117964495,
                    "name": "sjcn",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": 'ibcnASKL',
                    "date": 1488117964495,
                    "name": "sjcn",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }],
                "user": [contact.getUserInfo('wxid_sunquan')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": 'yuiof ',
                    "date": 1488117964495,
                    "name": "gvchabj",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                }],
                "user": [contact.getUserInfo('wxid_sunshangxiang')]
            },
            {
                "mid": 6,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": true,
                "msg": [{
                    "text": '三姓家奴！ ',
                    "date": 1488117964495,
                    "name": "关羽",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg"
                }],
                "user": [contact.getUserInfo('1000001')]
            }
        ]
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})
