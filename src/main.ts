import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// import './service/axios_demo'
// import cmsRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)
// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// cmsRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     headers: {},
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log('单独请求的config')
//         return config
//       },
//       responseInterceptor: (res) => {
//         console.log('单独响应的response')
//         return res
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
// console.log(process.env.VUE_APP_BASE_URL)
