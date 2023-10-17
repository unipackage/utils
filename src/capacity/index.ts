import prettyBytes, { Options } from "pretty-bytes"

export interface Capacity {
    prettyBytes(options?: Options): string
    plus(other: Capacity): Capacity
}

export const DefaultCapacityOptions = { maximumFractionDigits: 2, binary: true }
export class Capacity implements Capacity {
    private param: string | number
    constructor(param: string | number) {
        this.param = param
    }

    prettyBytes(options?: Options): string {
        options = { ...DefaultCapacityOptions, ...options }
        return prettyBytes(Number(this.param), options)
    }

    plus(other: Capacity): Capacity {
        return new Capacity(Number(this.param) + Number(other.param))
    }
}
