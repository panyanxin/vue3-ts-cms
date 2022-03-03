import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { globalRegister } from './global'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
// 注册element-plus/其他
app.use(globalRegister)
app.use(store).use(router).mount('#app')
