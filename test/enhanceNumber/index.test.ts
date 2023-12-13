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

import assert from "assert"
import { it } from "mocha"
import { EnhanceNumber } from "../../src/enhanceNumber"

//@ts-ignore
describe("EnhanceNumber Test", () => {
    it("formatPercent test", () => {
        const res = new EnhanceNumber(0.35565656).formatPercent(2)
        assert.deepStrictEqual(res, "35.57%")
    })

    it("formatNumber test", () => {
        const res = new EnhanceNumber(0.35565656).formatNumber(2)
        assert.deepStrictEqual(res, "0.36")
    })

    it("formatNumber test", () => {
        const en1 = new EnhanceNumber(1.25)
        const en2 = new EnhanceNumber(2.3)
        assert.deepStrictEqual(en1.plus(en2).formatNumber(1), "3.6")
    })
})
