/**
 * wxid-微信id
 * initial-姓名首字母
 * headerUrl-头像地址
 * nickname-昵称
 * sex-性别 男1女0
 * remark-备注
 * signature-个性签名
 * telphone-电话号码
 * album-相册
 * area-地区
 * from-来源
 * desc-描述
 */
const contacts = [{ //昵称备注都有的朋友
        "wxid": "100001",
        "initial": 'a',
        "headerUrl": "../assets/images/head1.png",
        "nickname": "Amm",
        "sex": 0,
        "remark": "Amm",
        "signature": "填坑小能手",
        "telphone": 18888888888,
        "area": ["中国", "北京", "烟台"],
        "from": "",
        "tag": "",
        "desc": {

        }
    },
    {
        "wxid": "wxid_baiqian",
        "initial": 'b',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg",
        "nickname": "bajs nkc",
        "sex": 0,
        "remark": "bavcbhjs",
        "signature": "asb cjknlm",
        "telphone": 546789,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",
            date: 3456456
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 243546
        }]
    }, {
        "wxid": "wxid_yehua",
        "initial": 'y',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",
        "nickname": "s ckm",
        "sex": 1,
        "remark": "awuiv",
        "signature": " udnikoxm",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["sac  ", "sji nkv"],
        "from": " sjnkm",
        "tag": "siok lmc;,",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_liubei",
        "initial": 'l',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/liubei.jpg",
        "nickname": "hasjd",
        "sex": 1,
        "remark": "bdlm ",
        "signature": "aius no",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }],
        "area": ["蜀国", "荆州"],
        "from": "通过扫一扫",
        "tag": "主公",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_guangyu",
        "initial": 'g',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg",
        "nickname": "hjav",
        "sex": 1,
        "remark": "jksl",
        "signature": "hjsnkvml;",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["蜀国", "荆州"],
        "from": "通过扫一扫",
        "tag": "蜀",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_zhugeliang",
        "initial": 'z',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg",
        "nickname": "scva",
        "sex": 1,
        "remark": "j nk",
        "signature": "sj nmkx,",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["sckm", "dv"],
        "from": "通过扫一扫",
        "tag": "卧龙",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_sunshangxiang",
        "initial": 's',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/uanyu01.jpg",
        "nickname": " isadj",
        "sex": 0,
        "remark": " jnkmz",
        "signature": " nkozlm",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/zhenji.jpg",
            date: 182625262
        }],
        "area": ["jks", "dv"],
        "from": " fejkvm",
        "tag": "jkslc",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_sunquan",
        "initial": 's',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg",
        "nickname": "k zlm;",
        "sex": 1,
        "remark": " sknzml",
        "signature": "uejvk ",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["d ", "v dz"],
        "from": "tcgbhy jns",
        "tag": "hjqdcn",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_huangyueying",
        "initial": 'h',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/huangyueying.jpg",
        "nickname": "sa j",
        "sex": 0,
        "remark": "auhvnjk ",
        "signature": "s a",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }],
        "area": ["va", "a "],
        "from": "ijnklvm sd",
        "tag": "d",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }, {
        "wxid": "wxid_zhenji",
        "initial": 'z',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg",
        "nickname": "rbn kdm",
        "sex": 0,
        "remark": "uejnks ",
        "signature": "uhwiaclm",
        "telphone": 18896586152,
        "area": ["bjsn ", " dm"],
        "from": "id ml",
        "tag": "avkm",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }
]

const contact = {
    contacts
}
contact.getUserInfo = function(wxid) {
    if (!wxid) {
        return;
    } else {
        for (var index in contacts) {
            if (contacts[index].wxid === wxid) {
                return contacts[index]
            }
        }
    }
}

export default contact
