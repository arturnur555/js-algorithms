 import { len } from './len.js';
 /**
 * Проверяет, удовлетворяет ли хотя бы один элемент условию.
 * Ранний выход — останавливается при первом true.
 * @param {Array} arr — массив для проверки
 * @param {Function} callback — предикат (элемент, индекс, массив) → boolean
 * @returns {boolean} — true, если хотя бы один подходит; иначе false
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если callback не функция
 * @example
 *   some([1, 2, 3], x => x > 2);  // true
 *   some([1, 2, 3], x => x > 10); // false
 *   some([], x => x);             // false
 */
export function some(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback должен быть функцией');
    }
    const n = len(arr);

    for (let i = 0; i < n; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}