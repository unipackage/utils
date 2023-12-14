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

/**
 * Represents the result of an operation that can be either successful or have an error.
 * @template T The type of data associated with the result.
 */
export interface Result<T> {
    /**
     * Indicates whether the operation was successful (`true`) or had an error (`false`).
     */
    ok: boolean

    /**
     * The data associated with the result. It is present when the operation is successful.
     */
    data?: T

    /**
     * The error information. It is present when the operation has an error.
     */
    error?: any
}
