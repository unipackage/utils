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

import { assert } from "chai"
import "mocha"
import { withMethods } from "../../src/withMethods" // Replace 'yourFile' with the actual filename

//@ts-ignore
@withMethods(
    ["method1", "method2"],
    "baseMethod",
    (param: any) => param && param.isOptions
)
class TestClass {
    baseMethod(data: any, options: any): Promise<any> {
        // Mock implementation of baseMethod
        return Promise.resolve({ data, options })
    }
}

describe("withMethods Decorator", () => {
    it("not with options", async () => {
        const instance = new TestClass()

        // @ts-ignore
        const result = await instance.method1("param1")
        assert.deepStrictEqual(result, {
            data: { method: "method1", params: ["param1"] },
            options: undefined,
        })
    })

    it("with options", async () => {
        const instance = new TestClass()

        // @ts-ignore
        const result = await instance.method2("param2", { isOptions: true })
        assert.deepStrictEqual(result, {
            data: { method: "method2", params: ["param2"] },
            options: { isOptions: true },
        })
    })
})
