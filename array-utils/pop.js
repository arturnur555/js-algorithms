 import { len } from './len.js';
 /**
 * Удаляет последний элемент массива и возвращает его.
 * МУТИРУЕТ исходный массив!
 *
 * @param {Array} arr — массив (будет изменён)
 * @returns {*} — удалённый элемент или undefined, если массив пуст
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   const arr = [1, 2, 3];
 *   pop(arr);    // 3, arr → [1, 2]
 *   pop([]);     // undefined
 */
export function pop(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    const n = len (arr);
    if (n === 0) {
        return undefined;
    }

    const last = arr[n - 1];
    delete arr[n - 1];
    return last;
}