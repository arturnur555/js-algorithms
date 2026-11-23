 import { len } from './len.js';
 /**
 * Сворачивает массив в одно значение.
 * ИММУТАБЕЛЬНАЯ — массив не меняется.
 * @param {Array} arr — массив для свёртки
 * @param {Function} callback — (аккумулятор, элемент, индекс, массив) → новое значение
 * @param {*} [initialValue] — начальное значение аккумулятора
 * @returns {*} — итоговое значение аккумулятора
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если callback не функция
 * @throws {TypeError} — если массив пуст и initialValue не передан
 * @example
 *   reduce([1, 2, 3], (acc, x) => acc + x);        // 6
 *   reduce([1, 2, 3], (acc, x) => acc + x, 4);     // 10
 *   reduce([], (acc, x) => acc + x, 42);           // 42
 */
export function reduce(arr, callback, ...rest) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback должен быть функцией');
    }

    const n = len(arr);
    const hasInitial = len(rest) > 0;

    if (n === 0 && !hasInitial) {
        throw new TypeError('reduce пустого массива без initialValue');
    }

    let accumulator;
    let startIndex;

    if (hasInitial) {
        accumulator = rest[0];
        startIndex = 0;
    } else {
        accumulator = arr[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < n; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}