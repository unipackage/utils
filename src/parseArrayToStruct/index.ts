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

// Define an index signature to represent a structure of unknown type
type unknownStruct = {
    [key: string]: any
}

/**
 * Parses an array into a structure of unknown type.
 * @param structObj - The object structure to populate with array values.
 * @param arrayValues - The array of values to assign to the object structure.
 * @returns The populated object structure.
 */
export function parseArrayToStruct<T extends unknownStruct>(
    structObj: T,
    arrayValues: unknown[]
): T {
    // Get all keys of the object
    const keys = Object.keys(structObj) as (keyof T)[]

    keys.forEach((key, index) => {
        if (index >= arrayValues.length) {
            return structObj
        }

        const arrayElement = arrayValues[index]
        const structElementType = typeof structObj[key]
        const arrayElementType = typeof arrayElement

        if (structElementType.includes(arrayElementType)) {
            // @ts-ignore
            structObj[key] = arrayElement
        } else {
            throw new Error(
                `parseArrayToStruct error: can't assgin ${
                    arrayElementType + ":[" + arrayElement + "]"
                } to ${structElementType} `
            )
        }
    })

    return structObj
}
