import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const routes = [
    {
        path: '/',
        name: "微信",
        component: resolve => require(["../components/wechat/wechat.vue"], resolve)
    },
    {
        path: '/wechat/dialogue',
        name: "",
        components: {
            "default": resolve => require(["../components/wechat/wechat.vue"], resolve),
            "subPage": resolve => require(["../components/wechat/dialogue.vue"], resolve)
        }
    },
    {
        path: '/wehchat/add-friend',
        name: "",
        components: {
            "default": resolve => require(["../components/wechat/wechat.vue"], resolve),
            "subPage": resolve => require(["../components/contact/add-friend.vue"], resolve)
        }
    },
    {
        path: '/contact',
        name: "通讯录",
        component: resolve => require(["../components/contact/contact.vue"], resolve)
    },
    {
        path: '/contact/add-friend',
        name: "",
        components: {
            "default": resolve => require(["../components/contact/contact.vue"], resolve),
            "subPage": resolve => require(["../components/contact/add-friend.vue"], resolve)
        }
    },
    {
        path: '/contact/details',
        name: "",
        components: {
            "default": resolve => require(["../components/contact/contact.vue"], resolve),
            "subPage": resolve => require(["../components/contact/details.vue"], resolve)
        }
    },
    {
        path: '/contact/new-friends/mobile-contacts',
        name: "通讯录朋友",
        components: {
            "subPage": resolve => require(["../components/contact/mobile-contacts.vue"], resolve)
        }
    },
    {
        path: '/contact/official-accounts',
        name: "",
        components: {
            "default": resolve => require(["../components/contact/contact.vue"], resolve),
            "subPage": resolve => require(["../components/contact/official-accounts.vue"], resolve)
        }
    },
    {
        path: '/contact/group-list',
        name: "",
        components: {
            "default": resolve => require(["../components/contact/contact.vue"], resolve),
            "subPage": resolve => require(["../components/contact/group-list.vue"], resolve)
        }
    },

    {
        path: '/explore',
        name: "发现",
        component: resolve => require(["../components/explore/explore.vue"], resolve)
    },
    {
        path: '/self',
        name: "我",
        component: resolve => require(["../components/self/self.vue"], resolve)
    },
    {
        path: '/self/settings',
        components: { "default": resolve => require(["../components/self/self.vue"], resolve), "subPage": resolve => require(["../components/self/settings.vue"], resolve) }
    },
    {
        path: '/self/profile',
        components: { "default": resolve => require(["../components/self/self.vue"], resolve), "subPage": resolve => require(["../components/common/profile.vue"], resolve) }
    }, {
        path: '/self/profile/my-qrcode',
        components: { "subPage": resolve => require(["../components/self/my-qrcode.vue"], resolve) }
    }, {
        path: '/self/settings',
        components: { "subPage": resolve => require(["../components/settings/settings.vue"], resolve) }
    },
    {
        path: '/self/settings/common',
        components: {
            "subPage": resolve => require(["../components/settings/common/common.vue"], resolve)
        }
    },
    {
        path: '/self/settings/common/language',
        components: {
            "subPage": resolve => require(["../components/settings/common/language.vue"], resolve)
        }
    }

]
export default new Router({
    routes,

})
