/**
 * Created by Administrator on 2020/8/26.
 */
import Vue from 'vue'
import qs from 'qs'
export default function ({$axios, store, redirect}) {
    /* 设置头部信息 */
    let token = store.state.user.token
    console.log(store.state);
    $axios.setHeader('token', token)
    /*请求拦截*/
    $axios.onRequest(config => {

    })
    $axios.onResponse(response => {

    })
    $axios.onError(error => {
        /*错误拦截*/
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/error')
        }
    })
    //psot 请求
    function post(url, data = {}) {
        return new Promise((resolve, reject) => {
            $axios.post(url, data)
                .then(response => {
                    if (response.data.code == 200) {
                        resolve(response.data.data);
                    } else {
                    }
                }, err => {
                    console.log(err)
                    reject(err)
                })
        })
    };
    function get(url, data = {}) {
        let str = qs.stringify(data, {arrayFormat:'repeat'})
        return new Promise((resolve, reject) => {
            $axios.get(url+'?'+str)
                .then(response => {
                    if (response.data.code == 200) {
                        resolve(response.data.data);
                    } else {

                    }
                }, err => {
                    console.log(err)
                    reject(err)
                })
        })
    };
    Vue.prototype.$get = get;
    Vue.prototype.$post = post;
}
