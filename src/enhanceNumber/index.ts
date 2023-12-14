/*******************************************************************************
 *   (c) 2023 unipackage
 *
 *  Licensed under either the MIT License (the "MIT License") or the Apache License, Version 2.0
 *  (the "Apache License"). You may not use this file except in compliance with one of these
 *  licenses. You may obtain a copy of the MIT License at
 *
 *      https://opensource.org/licenses/MIT
 *
 *  Or the Apache License, Version 2.0 at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the MIT License or the Apache License for the specific language governing permissions and
 *  limitations under the respective licenses.
 ********************************************************************************/

import { FormatNumber, FormatPercent } from "num-format"

/**
 * Represents an enhanced number with additional formatting and arithmetic operations.
 */
export interface EnhanceNumber extends Number {
    /**
     * Formats the number with the specified precision and locale.
     * @param precision The number of digits after the decimal point (optional).
     * @param locale The locale string for formatting (optional).
     * @returns The formatted number string.
     */
    formatNumber(precision?: number, locale?: string): string

    /**
     * Formats the number as a percentage with the specified precision and locale.
     * @param precision The number of digits after the decimal point (optional).
     * @param locale The locale string for formatting (optional).
     * @returns The formatted percentage string.
     */
    formatPercent(precision?: number, locale?: string): string
}

/**
 * Implementation of the `EnhanceNumber` interface.
 */
export class EnhanceNumber extends Number implements EnhanceNumber {
    /**
     * Formats the number with the specified precision and locale.
     * @param precision The number of digits after the decimal point (optional).
     * @param locale The locale string for formatting (optional).
     * @returns The formatted number string.
     */
    formatNumber(precision?: number, locale?: string): string {
        return FormatNumber(this.valueOf(), precision, locale)
    }

    /**
     * Formats the number as a percentage with the specified precision and locale.
     * @param precision The number of digits after the decimal point (optional).
     * @param locale The locale string for formatting (optional).
     * @returns The formatted percentage string.
     */
    formatPercent(precision?: number, locale?: string): string {
        return FormatPercent(this.valueOf(), precision, locale)
    }

    /**
     * Adds another `EnhanceNumber` to the current one.
     * @param other The other `EnhanceNumber` to add.
     * @returns A new `EnhanceNumber` instance representing the sum.
     */
    plus(other: EnhanceNumber): EnhanceNumber {
        return new EnhanceNumber(this.valueOf() + other.valueOf())
    }
}
