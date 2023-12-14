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

import prettyBytes, { Options } from "pretty-bytes"

/**
 * Represents a capacity value, providing methods for formatting and arithmetic operations.
 */
export interface Capacity {
    /**
     * Formats the capacity value as a human-readable string.
     * @param options Formatting options (optional).
     * @returns The formatted capacity string.
     */
    prettyBytes(options?: Options): string

    /**
     * Adds another capacity value to the current one.
     * @param other The other capacity value to add.
     * @returns A new `Capacity` instance representing the sum.
     */
    plus(other: Capacity): Capacity
}

/** Default formatting options for `prettyBytes`. */
export const DefaultCapacityOptions = { maximumFractionDigits: 2, binary: true }

/**
 * Implementation of the `Capacity` interface.
 */
export class Capacity implements Capacity {
    private param: string | number

    /**
     * Constructs a `Capacity` instance with the provided value.
     * @param param The initial value for the capacity.
     */
    constructor(param: string | number) {
        this.param = param
    }

    /**
     * Formats the capacity value as a human-readable string.
     * @param options Formatting options (optional).
     * @returns The formatted capacity string.
     */
    prettyBytes(options?: Options): string {
        options = { ...DefaultCapacityOptions, ...options }
        return prettyBytes(Number(this.param), options)
    }

    /**
     * Adds another capacity value to the current one.
     * @param other The other capacity value to add.
     * @returns A new `Capacity` instance representing the sum.
     */
    plus(other: Capacity): Capacity {
        return new Capacity(Number(this.param) + Number(other.param))
    }
}
