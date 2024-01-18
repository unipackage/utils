/*******************************************************************************
 *   (c) 2024 dataswap
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

export const enumToString = <T extends Record<string, string | number>>(
    enumObj: T,
    value: T[keyof T]
): string | undefined => {
    const keys = Object.keys(enumObj) as (keyof T)[]
    const matchedKey = keys.find((key) => enumObj[key] === value)
    return matchedKey ? String(matchedKey) : undefined
}

// // Example usage:
// enum CarReplicaState {
//     None = 0,
//     Matched = 1,
//     Stored = 2,
//     StorageFailed = 3,
//     Slashed = 4,
//     Expired = 5,
// }
// const stateString = enumToString(CarReplicaState, CarReplicaState.Matched)
// console.log(stateString) // Output: "Matched"
