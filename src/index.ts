// 引入配置项限制接口
import { AxiosRequestConfig } from './type'
import xhr from './xhr'
function axios(config: AxiosRequestConfig):void {
    xhr(config)
}

export default axios
