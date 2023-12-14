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

import { isEqual } from "lodash"

/**
 * Compares two objects for equality based on specified or all properties.
 * @param one - The first object.
 * @param another - The second object.
 * @param fields - Optional parameter specifying properties to compare. If not provided, compares all properties.
 * @returns True if the objects are equal, false otherwise.
 */
export function equal<T extends Object>(
    one: T,
    another: T,
    fields?: Array<keyof T>
): boolean {
    // If no specific properties are specified, use all properties of the object
    const properties = fields ?? (Object.keys(one) as Array<keyof T>)

    // Iterate through each specified property and compare their values
    for (const property of properties) {
        if (!isEqual(one[property], another[property])) {
            // If any property is not equal, return false
            return false
        }
    }

    // All properties are equal, return true
    return true
}
