 import { len } from './len.js';
 /**
 * Добавляет элемент в начало массива со сдвигом остальных вправо.
 * МУТИРУЕТ исходный массив!
 *
 * @param {Array} arr — массив (будет изменён)
 * @param {*} item — элемент для добавления
 * @returns {number} — новая длина массива
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   const arr = [2, 3];
 *   unshift(arr, 1);   // 3, arr → [1, 2, 3]
 *   unshift([], 'a');  // 1, arr → ['a']
 */
export function unshift(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    const n = len(arr);
    for (let i = n; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = item;
    return n + 1;
}