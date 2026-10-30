 import { len } from './len.js';
 /**
 * Возвращает элемент массива по индексу.
 * Поддерживает отрицательные индексы (отсчёт с конца).
 * НЕ мутирует исходный массив.
 *
 * @param {Array} arr — массив
 * @param {number} index — индекс (положительный или отрицательный)
 * @returns {*} — элемент по индексу или undefined, если за границами
 * @throws {TypeError} — если arr не массив или index не число
 *
 * @example
 *   at([10, 20, 30], 1);   // 20
 *   at([10, 20, 30], -1);  // 30
 *   at([10, 20, 30], -3);  // 10
 *   at([10, 20, 30], 5);   // undefined
 *   at([], 0);             // undefined
 */
export function at(arr, index) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof index !== 'number') {
        throw new TypeError('index должен быть числом');
    }

    const n = len(arr);
    if (index < 0) {
        index = n + index;
    }
    if (index < 0 || index>= n) {
        return undefined;
    }
    return arr[index];
}