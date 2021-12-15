import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import FastClick from 'fastclick'
import filters from './filters'

Vue.use(VueAxios, axios, vuex)
    // 注册全局过滤器
filters(Vue)

Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    })
    // 运行 vue init webpack命令新建项目时 可以选择关闭 ESLint
    // 若新建项目时开启了 ESLint .eslintignore 文件，告诉 ESLint 去忽略特定的文件和目录。
    // .eslintignore 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测
