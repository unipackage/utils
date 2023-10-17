import { isEqual } from 'lodash'
export interface IEqual<T> {
    equal(other: T, fields?: Array<keyof T & keyof this>): boolean
}


export function equal<T extends Object>(one: T, another: T, fields?: Array<keyof T>): boolean {
    const properties = fields ?? (Object.keys(one) as Array<keyof T>)
    for (const property of properties) {
        if (!isEqual(one[property], another[property])) {
            return false
        }
    }
    return true
}