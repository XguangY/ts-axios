import { isDate, isPlainObject } from './utils'

// 定义转码方法
function encode(val: string): string {
    return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
}

// 拼接URL
export function buildURL(url: string, params?:any):string {
    if (!params) {
        return url
    }
    const parts: string[] = []
    Object.keys(params).forEach(key => {
        const val = params[key]
        if (val === null || typeof val === 'undefined') {
            return
        }
        // 申明并同意将有效项处理为数组
        let values = []
        if (Array.isArray(val)) {
            values = val
            key += '[]'
        } else {
            values = [val]
        }
        // 便利数组
        values.forEach(val => {
            if (isDate(val)) {
                val = val.toISOString()
            } else if (isPlainObject(val)) {
                val = JSON.stringify(val)
            }
            parts.push(`${encode(key)}=${encode(val)}`)
        })
    })
    let serializedParams = parts.join('&')
    if (serializedParams) {
        // 判断是否存在hash
        const markIndex = url.indexOf('#')
        if (markIndex !== -1) {
            url = url.slice(0,markIndex)
        }
        // 判断是否存在默认参数
        url += (url.indexOf('?') === -1? '?': '&') + serializedParams
    }
    return url
}