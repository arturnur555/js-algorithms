 import { len } from './len.js';
 /**
 * Добавляет элемент в конец массива.
 * МУТИРУЕТ исходный массив!
 *
 * @param {Array} arr — массив (будет изменён)
 * @param {*} item — элемент для добавления
 * @returns {number} — новая длина массива
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   const arr = [1, 2];
 *   push(arr, 3);    // 3, arr → [1, 2, 3]
 *   push([], 'a');   // 1, arr → ['a']
 */
export function push(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    
    arr[len(arr)] = item;
    return len(arr);
}