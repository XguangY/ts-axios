// 引入配置项限制接口
import { AxiosRequestConfig } from './type'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'

function axios(config: AxiosRequestConfig):void {
    processConfig(config)
    xhr(config)
}

function processConfig(config: AxiosRequestConfig):void {
    config.url = transformURL(config)
    config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig):string {
    const {url, params } = config
    return buildURL(url, params)
}

//  定义处理请求体body函数
function transformRequestData (config: AxiosRequestConfig):any {
    return transformRequest(config.data)
}
export default axios
