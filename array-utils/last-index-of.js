 import { len } from './len.js';
 /**
 * Возвращает индекс последнего вхождения элемента в массиве.
 * НЕ мутирует исходный массив.
 *
 * @param {Array} arr — массив для поиска
 * @param {*} item — искомый элемент
 * @returns {number} — индекс последнего вхождения или -1, если не найден
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   lastIndexOf([1, 2, 1, 3], 1);   // 2
 *   lastIndexOf([1, 2, 3], 9);      // -1
 *   lastIndexOf([5, 6, 7], 7);      // 2
 *   lastIndexOf([], 1);             // -1
 */
export function lastIndexOf(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }

    const n = len(arr);
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}