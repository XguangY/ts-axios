// 引入配置项限制接口
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
    processConfig(config)
    return xhr(config).then(res => {
        return transformResponseData(res)
    })
}

//  最终参数处理
function processConfig(config: AxiosRequestConfig): void {
    config.url = transformURL(config)
    config.headers = transformHeaders(config)
    config.data = transformRequestData(config)
}

// 处理请求URL
function transformURL(config: AxiosRequestConfig): string {
    const { url, params } = config
    return buildURL(url, params)
}

//  定义处理请求体body函数
function transformRequestData(config: AxiosRequestConfig): any {
    return transformRequest(config.data)
}

// 处理请求头部信息
function transformHeaders(config: AxiosRequestConfig): any {
    const { headers = {}, data } = config
    return processHeaders(headers, data)
}

// 处理相应data
function transformResponseData(res: AxiosResponse): AxiosResponse {
    res.data = transformResponse(res.data)
    return res
}

export default axios
