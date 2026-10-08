import { indexOf } from './index-of.js';
/**
 * Возвращает true если строка str содержит подстроку search.
 * Построена на базе indexOf.
 *
 * @param {string} str — строка, в которой ищем
 * @param {string} search — подстрока для поиска
 * @returns {boolean} — true если найдено, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   includes('hello', 'll');   // true
 *   includes('hello', 'he');   // true
 *   includes('hello', 'xyz');  // false
 *   includes('hello', '');     // true
 */
export function includes(str, search) {
    return indexOf(str, search) !==-1;
}
