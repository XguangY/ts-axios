import { isPlainObject } from './utils'

// 处理边界问题，规范传入值大小写
function normalizeHeaderName (headers: any, normalizedName: string) {
    if (!headers) {
        return
    }
    Object.keys(headers).forEach((name) => {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = headers[name]
            delete headers[name]
        }
    })
}

// 处理请求头 request headers
export function processHeaders (headers: any, data: any): any {
    normalizeHeaderName(headers, 'Content-Type')
    if (isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }
    return headers
}

// 

export function parseHeaders(headers: string):any {
    let parsed = Object.create(null)
    if (!headers) {
        return parsed
    }
    
    headers.split('\r\n').forEach(line => {
        let [ key, val] = line.split(':')
        key = key.trim().toLowerCase()
        if (!key) {
            return
        }
        if (val) {
            val = val.trim()
        }
        parsed[key] = val
    })

    return parsed
}