 import { len } from './len.js';
 /**
 * Заполняет массив (или его часть) указанным значением.
 * МУТИРУЕТ исходный массив!
 *
 * @param {Array} arr — массив (будет изменён)
 * @param {*} value — значение для заполнения
 * @param {number} [start=0] — начальный индекс (включая)
 * @param {number} [end=len(arr)] — конечный индекс (не включая)
 * @returns {Array} — тот же самый массив arr (изменённый)
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если start или end не число
 *
 * @example
 *   const arr = [1, 2, 3];
 *   fill(arr, 0); // [0, 0, 0], arr → [0, 0, 0]
 *   fill(arr, '*', 1, 3); // [0, '*', '*']
 */
export function fill(arr, value, start = 0, end) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof start !== 'number') {
        throw new TypeError('start должен быть числом');
    }
    if (end !== undefined && typeof end !== 'number') {
        throw new TypeError('end должен быть числом');
    }
    const n = len(arr);
    const s = Math.max(0, Math.min(n, start < 0 ? n + start : start));
    const e = Math.max(0, Math.min(n, end === undefined ? n : end < 0 ? n + end : end));

    for (let i = s; i < e; i++) {
        arr[i] = value;
    }
    return arr;
}