 import { len } from './len.js';
 import { push } from './push.js';
 /**
 * Фильтрует массив по условию callback.
 * ИММУТАБЕЛЬНАЯ — исходный массив не меняется.
 * @param {Array} arr — массив для фильтрации
 * @param {Function} callback — предикат (элемент, индекс, массив) → boolean
 * @returns {Array} — новый массив из элементов, прошедших проверку
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если callback не функция
 * @example
 *   filter([1, 2, 3, 4], x => x % 2 === 0); // [2, 4]
 *   filter([1, 3, 5], x => x > 10);         // []
 */
export function filter(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback должен быть функцией');
    }

    const n = len(arr);
    const result = [];

    for (let i = 0; i < n; i++) {
        if (callback(arr[i], i, arr)) {
            push(result, arr[i]);
        }
    }
    return result;
}