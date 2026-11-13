 import { len } from './len.js';
 /**
 * Перебирает массив, вызывая callback для каждого элемента.
 * ИММУТАБЕЛЬНАЯ — массив не меняется.
 * @param {Array} arr — массив для перебора
 * @param {Function} callback — функция (элемент, индекс, массив)
 * @returns {undefined}
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если callback не функция
 * @example
 *   forEach([1, 2, 3], (item) => console.log(item)); // 1, 2, 3
 */
export function forEach(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback должен быть функцией');
    }
    const n = len(arr);
    for (let i = 0; i < n; i++) {
        callback(arr[i], i, arr);
    }
}