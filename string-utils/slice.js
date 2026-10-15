import { len } from './len.js';

/**
 * Извлекает подстроку из str от start (включая) до end (не включая).
 * Поддерживает отрицательные индексы — отсчёт с конца строки (-1 = последний символ).
 * start и end НЕ меняются местами (в отличие от substring).
 * Если end не указан — извлекается до конца строки.
 *
 * @param {string} str — исходная строка
 * @param {number} start — начальный индекс (включая). Отрицательный — с конца
 * @param {number} [end] — конечный индекс (не включая). Отрицательный — с конца
 * @returns {string} — извлечённая подстрока
 * @throws {TypeError} — если str не строка или start/end не число
 *
 * @example
 *   slice('hello', 1, 4);   // 'ell'
 *   slice('hello', 2);      // 'llo' (end не указан)
 *   slice('hello', -3);     // 'llo' (-3 = 2)
 *   slice('hello', 0, -1);  // 'hell' (-1 = 4)
 *   slice('hello', -3, -1); // 'll'  (-3 = 2, -1 = 4)
 *   slice('hello', 4, 1);   // '' (start > end → пусто)
 *   slice('hello', -10, 3); // 'hel' (-10 обрезается до 0)
 */
export function slice(str, start, end) {
  if (typeof str !== 'string') {
    throw new TypeError('str должен быть строкой');
  }
  if (typeof start !== 'number') {
    throw new TypeError('start должен быть числом');
  }
  if (end !== undefined && typeof end !== 'number') {
    throw new TypeError('end должен быть числом');
  }

  let strLen = len(str);

  if (end === undefined) end = strLen;

  if (start !== start) start = 0;
  if (end !== end) end = 0;

  if (start < 0) start = strLen + start;
  if (end < 0) end = strLen + end;

  if (start < 0) start = 0;
  if (end < 0) end = 0;
  if (start > strLen) start = strLen;
  if (end > strLen) end = strLen;

  if (start >= end) return '';

  let result = '';
  for (let i = start; i < end; i++) result += str[i];
  return result;
}







