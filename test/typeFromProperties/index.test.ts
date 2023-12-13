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

//@ts-ignore
import assert from "assert"
import { it } from "mocha"
import { TypeFromProperties } from "../../src/typeFromProperties"

interface Base {
    boolElement: boolean
    stringElement: string
    getString(): string
}

//@ts-ignore
describe("TypeFromProperties Test", () => {
    it("usage", () => {
        const expected: TypeFromProperties<Base> = {
            boolElement: true,
            stringElement: "test",
        }
        //@ts-nocheck
        //@ts-ignore
        assert.deepStrictEqual(expected.getString, undefined)
    })
})
