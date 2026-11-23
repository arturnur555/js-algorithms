 import { len } from './len.js';
 /**
 * Возвращает первый элемент, прошедший проверку.
 * ИММУТАБЕЛЬНАЯ — массив не меняется.
 * Ранний выход — останавливается при первом true.
 * @param {Array} arr — массив для поиска
 * @param {Function} callback — предикат (элемент, индекс, массив) → boolean
 * @returns {*} — первый подходящий элемент или undefined, если не найден
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если callback не функция
 * @example
 *   find([1, 2, 3, 4], x => x > 2);   // 3
 *   find([1, 2, 3], x => x > 10);     // undefined
 *   find([], () => true);             // undefined
 */
export function find(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback должен быть функцией');
    }

    const n = len(arr);

    for (let i = 0; i < n; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}