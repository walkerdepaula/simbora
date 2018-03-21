import Vue from 'vue'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const BASE_URL = process.env.BASE_URL

Vue.use(VueResource);

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.root = BASE_URL + 'api/'

Vue.http.options.progress = function (event) {
  if (event.lengthComputable) {
    NProgress.set(event.loaded / event.total)
  }
}

Vue.http.interceptors.push((request, next) => {
  NProgress.start()
  // TODO : Verificar header token
  // request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  next((response) => {
    NProgress.done()
    if (response.status >= 400) {
      // TODO : importar e configurar o toastr pro projeto
      Vue.toastr({
        message: response.statusText,
        type: 'danger'
      })
    }
    return response
  })
})

export const Auth = Vue.resource('/auth/local')
