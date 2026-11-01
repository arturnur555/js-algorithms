 import { len } from './len.js';
 /**
 * Переворачивает массив на месте.
 * МУТИРУЕТ исходный массив!
 *
 * @param {Array} arr — массив (будет изменён)
 * @returns {Array} — тот же самый массив arr (перевёрнутый)
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   const arr = [1, 2, 3];
 *   reverse(arr); // [3, 2, 1], arr → [3, 2, 1]
 */
export function reverse (arr){
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }

    let left = 0;
    let right = len(arr) - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}