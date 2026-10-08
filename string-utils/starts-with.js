import { len } from './len.js';
/**
 * Возвращает true если строка str начинается с подстроки search.
 * Проверяет только префикс.
 *
 * @param {string} str — исходная строка
 * @param {string} search — подстрока для проверки начала
 * @returns {boolean} — true если str начинается с search
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   startsWith('hello', 'he');    // true
 *   startsWith('hello', 'hel');   // true
 *   startsWith('hello', 'el');    // false
 *   startsWith('hello', '');      // true
 *   startsWith('abc', 'abc');     // true
 */
export function startsWith(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') {
        throw new TypeError('Аргументы должны быть строками');
 }

 const searchLen = len(search);
 const strLen = len(str);

 if (searchLen === 0) {
    return true;
 }

 if (searchLen > strLen) {
    return false;
 }

 for (let i = 0; i < searchLen; i++) {
    if (str[i] !== search[i]) {
        return false;
    }
 }

 return true;
}