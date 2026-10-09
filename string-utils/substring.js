import { len } from './len.js';
/**
 * Извлекает подстроку из str от start (включая) до end (не включая).
 * Индексы нормализуются по правилам String.prototype.substring:
 * отрицательные и NaN → 0, больше длины → длина строки.
 * Если start > end после нормализации — они меняются местами.
 *
 * @param {string} str — исходная строка
 * @param {number} start — начальный индекс (включая)
 * @param {number} [end] — конечный индекс (не включая)
 * @returns {string} — извлечённая подстрока
 * @throws {TypeError} — если str не строка или start/end не число
 *
 * @example
 *   substring('hello', 0, 5);  // 'hello'
 *   substring('hello', 1, 4);  // 'ell'
 *   substring('hello', 4, 1);  // 'ell' (обмен)
 *   substring('hello', 0, 10); // 'hello' (обрезано)
 *   substring('hello', 2);     // 'llo' (end не указан)
 *   substring('hello', -2, 3); // 'hel' (-2 → 0)
 *   substring('hello', NaN, 3);// 'hel' (NaN → 0)
 *   substring('hello', 5, 7);  // '' (start >= длина)
 */
export function substring(str, start, end) {
    if (typeof str !== 'string') {
        throw new TypeError('str должен быть строкой');
    }
    if (typeof start !== 'number' || (end !== undefined && typeof end !== 'number')) {
        throw new TypeError('start и end должны быть числами');
    }
    let strLen = len(str);
    if (end === undefined) end = strLen;
    
    if (start !==  start) start = 0;
    if (end !== end) end = 0;

    if (start < 0) start = 0;
    if (end < 0) end = 0;

    if (start > strLen) start = strLen;
    if (end > strLen) end = strLen;

    if (start > end) [start, end] = [end, start];

    let result = '';
    for (let i = start; i < end; i++) result += str[i];
    return result;

}