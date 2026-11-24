 import { len } from './len.js';
 /**
 * Проверяет, удовлетворяют ли все элементы условию.
 * Ранний выход — останавливается при первом false.
 * @param {Array} arr — массив для проверки
 * @param {Function} callback — предикат (элемент, индекс, массив) → boolean
 * @returns {boolean} — true, если все подходят; иначе false
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если callback не функция
 * @example
 *   every([2, 4, 6], x => x % 2 === 0); // true
 *   every([2, 3, 4], x => x % 2 === 0); // false
 *   every([], x => x);                  // true
 */
export function every(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback должен быть функцией');
    }
    
    const n = len(arr);

    for (let i = 0; i < n; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}