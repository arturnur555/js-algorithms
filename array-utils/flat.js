 import { len } from './len.js';
 import { push } from './push.js';
 /**
 * Разглаживает вложенные массивы до указанной глубины.
 * ИММУТАБЕЛЬНАЯ — исходный массив не меняется.
 * @param {Array} arr — массив для разглаживания
 * @param {number} [depth=1] — глубина (Infinity — полностью)
 * @returns {Array} — новый плоский массив
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если depth передан и не число
 * @example
 *   flat([1, [2, 3], 4]);                     // [1, 2, 3, 4]
 *   flat([1, [2, [3, [4]]]], 2);              // [1, 2, 3, [4]]
 *   flat([1, [2, [3, [4, 5], 6]]], Infinity); // [1, 2, 3, 4, 5, 6]
 */
export function flat(arr, depth = 1) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof depth !== 'number') {
        throw new TypeError('depth должен быть числом');
    }

    const n = len(arr);
    const result = [];

    for (let i = 0; i < n; i++) {
        const item = arr[i];

        if (Array.isArray(item) && depth > 0) {
            const inner = flat(item, depth - 1);
            const innerLen = len(inner);
            for (let j = 0; j < innerLen; j++) {
                push(result, inner[j]);
            }
        } else {
            push(result, item);
        }
    }
    return result;
}