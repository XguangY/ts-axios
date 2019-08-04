// 引入配置项限制接口
import { AxiosRequestConfig } from './type'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig):void {
    processConfig(config)
    xhr(config)
}

//  最终参数处理
function processConfig(config: AxiosRequestConfig):void {
    config.url = transformURL(config)
    config.headers = transformHeaders(config)
    config.data = transformRequestData(config)
}

// 处理请求URL
function transformURL(config: AxiosRequestConfig):string {
    const {url, params } = config
    return buildURL(url, params)
}

//  定义处理请求体body函数
function transformRequestData (config: AxiosRequestConfig):any {
    return transformRequest(config.data)
}

// 处理请求头部信息
function transformHeaders (config: AxiosRequestConfig):any {
    const { headers = {}, data} = config
    return processHeaders(headers, data)
}

export default axios
