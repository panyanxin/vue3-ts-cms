import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { CMSRequestInterceptors, CMSRequestConfig } from './type'

// import { ElLoading } from 'element-plus'
// import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

class CMSRequest {
  instance: AxiosInstance
  interceptors?: CMSRequestInterceptors
  constructor(config: CMSRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
  // get() {}
}

export default CMSRequest
