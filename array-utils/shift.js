 import { len } from './len.js';
 /**
 * Удаляет первый элемент массива и возвращает его.
 * МУТИРУЕТ исходный массив — сдвигает остальные влево!
 *
 * @param {Array} arr — массив (будет изменён)
 * @returns {*} — удалённый первый элемент или undefined, если массив пуст
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   const arr = [1, 2, 3];
 *   shift(arr);          // 1, arr → [2, 3]
 *   shift([]);           // undefined
 */
export function shift(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }

    const n = len(arr);
    if (n === 0) {
        return undefined;
    }

    const first = arr[0];
    for (let i = 0; i < n - 1; i++) {
        arr [i] = arr[i + 1];
    }
    delete arr[n - 1];
    return first;
}