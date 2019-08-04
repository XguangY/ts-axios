const toString = Object.prototype.toString

// 统一使用类型卫词，val is Data ..... 规定传入向是一个什么类型
// 判断是不是Date
export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}
// 判断是不是Object 注意排除null的可能性，null typeof 也是true
// export function isObject(val:any): val is Object {
//     return val !== null && typeof val === 'object'
// }

// 判断传入类型是否为普通对象
export function isPlainObject (val: any): val is Object {
    return toString.call(val)  === '[object Object]'
}