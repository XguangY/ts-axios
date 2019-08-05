import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
    if (isPlainObject(data)) {
        return JSON.stringify(data)
    }
    return data
}

// 定义转化data 为JSON 字符串
export function transformResponse(data: any):any {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data)
        } catch (e) {
            // 
        }
    }
    return data
}