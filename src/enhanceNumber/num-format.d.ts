declare module 'num-format' {
    function FormatNumber(number: number, precision?: number, locale?: string): string
    function FormatPercent(number: number, precision?: number, locale?: string): string
}