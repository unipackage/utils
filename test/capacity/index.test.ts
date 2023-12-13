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
import { Capacity } from "../../src/capacity"

//@ts-ignore
describe("Capacity Test", () => {
    it("prettyBytes test(number)", async () => {
        const res = new Capacity(1024 * 1024)
        assert.deepStrictEqual(res.prettyBytes(), "1 MiB")
    })

    it("prettyBytes test(string)", async () => {
        const res = new Capacity("1024")
        assert.deepStrictEqual(res.prettyBytes(), "1 kiB")
    })

    it("plus test(string)", async () => {
        const capacity1 = new Capacity("1024")
        const capacity2 = new Capacity("1024")

        assert.deepStrictEqual(capacity1.plus(capacity2).prettyBytes(), "2 kiB")
    })
})
