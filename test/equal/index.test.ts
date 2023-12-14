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

import { expect } from "chai"
import { describe, it } from "mocha"
import { equal } from "../../src/equal"

// Sample entity class for testing
class SampleEntity {
    constructor(public id: number, public name: string) {}
}

describe("equal function", () => {
    it("should return true for equal objects", () => {
        const obj1 = { id: 1, name: "John" }
        const obj2 = { id: 1, name: "John" }

        // Using the equal function to compare objects
        const result = equal(obj1, obj2)

        expect(result).to.be.true
    })

    it("should return false for non-equal objects", () => {
        const obj1 = { id: 1, name: "John" }
        const obj2 = { id: 2, name: "Jane" }

        // Using the equal function to compare objects
        const result = equal(obj1, obj2)

        expect(result).to.be.false
    })

    it("should compare specified fields only", () => {
        const entity1 = new SampleEntity(1, "John")
        const entity2 = new SampleEntity(1, "Jane")

        // Using the equal function to compare objects with specified fields
        const result = equal(entity1, entity2, ["id"])

        expect(result).to.be.true // Only ID is compared, so it should be considered equal
    })
})
