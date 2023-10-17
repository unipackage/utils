import { FormatNumber, FormatPercent } from "num-format"

export interface EnhanceNumber extends Number {
    formatNumber(precision?: number, locale?: string): string
    formatPercent(precision?: number, locale?: string): string
}

export class EnhanceNumber extends Number implements EnhanceNumber {
    formatNumber(precision?: number, locale?: string): string {
        return FormatNumber(this.valueOf(), precision, locale)
    }
    formatPercent(precision?: number, locale?: string): string {
        return FormatPercent(this.valueOf(), precision, locale)
    }
    plus(other: EnhanceNumber): EnhanceNumber {
        return new EnhanceNumber(this.valueOf() + other.valueOf())
    }
}
