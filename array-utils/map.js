 import { len } from './len.js';
 import { forEach } from './for-each.js';
 /**
 * Преобразует каждый элемент массива.
 * ИММУТАБЕЛЬНАЯ — исходный массив не меняется.
 * @param {Array} arr — массив для трансформации
 * @param {Function} callback — функция (элемент, индекс, массив)
 * @returns {Array} — новый массив из результатов callback
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если callback не функция
 * @example
 *   map([1, 2, 3], x => x * 2); // [2, 4, 6]
 */
export function map(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом'); 
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback должен быть функцией');
    }
    
    const result = [];

    forEach(arr, (item, i, arr) => {
        result[len(result)] = callback(item, i, arr);
    });

    return result;
}