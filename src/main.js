import '@/common/global';
import Vue from 'vue';
import App from './App';
import router from '@/router';
import VueResource from 'vue-resource';
import store from '@/vuex/store';
import locales from '@/locales';
import VueTimeago from 'vue-timeago';
import Loading from './components/partial/Loading.vue';
import Element from 'element-ui';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.use(VueTimeago, {
    name: 'timeago',
    locale: 'zh',
    locales: {
        'zh': require('vue-timeago/locales/zh-CN.json'),
        'en': require('vue-timeago/locales/en-US.json')
    }
});
Vue.use(Element);
Vue.use(VueResource);
Vue.component('Loading', Loading);

Vue.config.productionTip = true;

new Vue({
    el: '#app',
    i18n: locales,
    router,
    store,
    template: '<App/>',
    components: {App}
});

Date.prototype.Format = function (fmt) {
    const o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S': this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
};
