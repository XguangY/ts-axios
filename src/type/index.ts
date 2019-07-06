// 规定method项目的可传入限制
export type Method = 'get' | 'GET'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'

// 定义本库配置项接口
export interface AxiosRequestConfig {
    url: string,
    method?: Method,
    data?: any,
    params?: any
}