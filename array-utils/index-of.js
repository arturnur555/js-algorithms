 import { len } from './len.js';
 /**
 * Возвращает индекс первого вхождения элемента в массиве.
 * НЕ мутирует исходный массив.
 *
 * @param {Array} arr — массив для поиска
 * @param {*} item — искомый элемент
 * @returns {number} — индекс первого вхождения или -1, если не найден
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   indexOf([10, 20, 30], 20);   // 1
 *   indexOf([10, 20, 30], 10);   // 0
 *   indexOf([10, 20, 30], 99);   // -1
 *   indexOf([1, 2, 1, 3], 1);    // 0 (первое вхождение)
 *   indexOf([], 1);              // -1
 */
export function indexOf(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    
    const n = len(arr);
    for (let i = 0; i < n; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}