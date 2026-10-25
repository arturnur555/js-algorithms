  import { indexOf } from './index-of.js';
 /**
 * Проверяет, есть ли элемент в массиве.
 * НЕ мутирует исходный массив.
 * Построена на базе indexOf.
 *
 * @param {Array} arr — массив для поиска
 * @param {*} item — искомый элемент
 * @returns {boolean} — true если найден, false если нет
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   includes([1, 2, 3], 2);   // true
 *   includes([1, 2, 3], 9);   // false
 *   includes([], 1);          // false
 *   includes([0], false);     // false (0 !== false)
 *   includes([0], 0);         // true
 */
export function includes(arr, item) {
    return indexOf(arr, item) !== -1;
}