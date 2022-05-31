import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { globalRegister } from './global'

// import './service/axios_demo'
import cmsRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
// 注册element-plus/其他
app.use(globalRegister)
app.use(store).use(router).mount('#app')

cmsRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})
console.log(process.env.VUE_APP_BASE_URL)
