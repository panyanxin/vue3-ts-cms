import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

// import { ElLoading } from 'element-plus'
// import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

class HYRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
  // get() {}
}

export default HYRequest
