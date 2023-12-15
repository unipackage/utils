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
import { parseArrayToStruct } from "../../src/parseArrayToStruct"

// Sample struct for testing
class SampleStruct {
    element1: string = ''
    element2: string = ''
    element3: number = 0
    element4: boolean = false
    element5: number = 0
    element6: bigint = BigInt(0)
}

describe("parseArrayToStruct function test", () => {
    it("parseArrayToStruct correct", () => {
        const arrayValues = ["hello", "hi", 999, true, 100, BigInt(88)]

        // Using the parseArrayToStruct function to parse array to struct
        const result = parseArrayToStruct(new SampleStruct(), arrayValues)
        console.log("sdf", result.element1)
        expect(result.element1).to.equal(arrayValues[0])
        expect(result.element2).to.equal(arrayValues[1])
        expect(result.element3).to.equal(arrayValues[2])
        expect(result.element4).to.equal(arrayValues[3])
        expect(result.element5).to.equal(arrayValues[4])
        expect(result.element6).to.equal(arrayValues[5])
    })

    it("parseArrayToStruct uncorrect", () => {
        const arrayValues = ["hello", 99, 999, true, 100, BigInt(88)]

        // Using the parseArrayToStruct function to parse array to struct
        const result = parseArrayToStruct(new SampleStruct(), arrayValues)

        expect(result.element1).to.equal(arrayValues[0])
        expect(result.element2).to.equal(arrayValues[1])
        expect(result.element3).to.equal(arrayValues[2])
        expect(result.element4).to.equal(arrayValues[3])
        expect(result.element5).to.equal(arrayValues[4])
        expect(result.element6).to.equal(arrayValues[5])

        console.log(result.element2)
    })
})
