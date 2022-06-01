import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CMSRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface CMSRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: CMSRequestInterceptors<T>
  showLoading?: boolean
}
