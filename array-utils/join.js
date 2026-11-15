 import { len } from './len.js';
 /**
 * Склеивает элементы массива в строку.
 * ИММУТАБЕЛЬНАЯ — массив не меняется!
 * @param {Array} arr — массив элементов
 * @param {string} [separator=','] — разделитель между элементами
 * @returns {string} — строка из элементов, разделённых separator
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если separator передан и не строка
 * @example
 *   join([1, 2, 3]);        // '1,2,3'
 *   join([1, 2, 3], '-');   // '1-2-3'
 *   join([1, undefined, null, 3]); // '1,,,3'
 */
export function join(arr, separator = ',') {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if(typeof separator !== 'string') {
        throw new TypeError('separator должен быть строкой');
    }

    const n = len(arr);
    let result = '';

    for (let i = 0; i < n; i++) {
        if (i > 0) {
            result += separator;
        }
        const item = arr[i];
        if (item !== null && item !== undefined) {
            result += String(item);
        }
    }
    return result;
}