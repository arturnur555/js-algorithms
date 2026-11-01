 import { len } from './len.js';
 /**
 * Объединяет два массива в новый.
 * ИММУТАБЕЛЬНАЯ — исходные массивы не меняются!
 * @param {Array} arr1 — первый массив
 * @param {Array} arr2 — второй массив
 * @returns {Array} — новый массив из элементов arr1 и arr2
 * @throws {TypeError} — если arr1 или arr2 не массив
 * @example
 *   concat([1, 2], [3, 4]); // [1, 2, 3, 4]
 *   concat([1], []);        // [1]
 */
export function concat(arr1, arr2) {
    if (!Array.isArray(arr1)) {
        throw new TypeError('arr1 должен быть массивом');
    }
    if (!Array.isArray(arr2)) {
        throw new TypeError('arr2 должен быть массивом');
    }
    const result = [];

    for (let i = 0; i < len(arr1); i++) {
        result[result.length] = arr1[i];
    }
    for (let i = 0; i < len(arr2); i++) {
        result[result.length] = arr2[i];
    }
    return result;
}
