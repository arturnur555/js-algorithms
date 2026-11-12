 import { len } from './len.js';
 /**
 * Копирует часть массива в новый.
 * ИММУТАБЕЛЬНАЯ — исходный массив не меняется!
 * @param {Array} arr — исходный массив
 * @param {number} start — начальный индекс (включая)
 * @param {number} [end=len(arr)] — конечный индекс (не включая)
 * @returns {Array} — новый массив из скопированных элементов
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если start или end не число
 * @example
 *   slice([1, 2, 3, 4], 1, 3); // [2, 3]
 *   slice([1, 2, 3, 4], -2);   // [3, 4]
 */
export function slice(arr, start, end) {
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

    const result = [];
for (let i = s; i < e; i++) {
    result[len(result)] = arr[i];
}
