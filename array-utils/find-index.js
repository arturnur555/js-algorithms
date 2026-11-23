 import { len } from './len.js';
 /**
 * Возвращает индекс первого элемента, прошедшего проверку.
 * ИММУТАБЕЛЬНАЯ — массив не меняется.
 * Ранний выход — останавливается при первом true.
 * @param {Array} arr — массив для поиска
 * @param {Function} callback — предикат (элемент, индекс, массив) → boolean
 * @returns {number} — индекс первого подходящего или -1, если не найден
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если callback не функция
 * @example
 *   findIndex([1, 2, 3, 4], x => x > 2);  // 2
 *   findIndex([1, 2, 3], x => x > 10);    // -1
 *   findIndex([], () => true);            // -1
 */
export function findIndex(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback должен быть функцией');
    }

    const n = len(arr);

    for (let i = 0; i < n; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}