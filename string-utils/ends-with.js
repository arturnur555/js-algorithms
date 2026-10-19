import { len } from './len.js';
/**
 * Возвращает true если строка str заканчивается на подстроку search.
 * Проверяет только суффикс.
 *
 * @param {string} str — исходная строка
 * @param {string} search — подстрока для проверки конца
 * @returns {boolean} — true если str заканчивается на search
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   endsWith('hello', 'o');     // true
 *   endsWith('hello', 'llo');   // true
 *   endsWith('hello', 'ell');   // false
 *   endsWith('hello', '');      // true
 *   endsWith('abc', 'abc');     // true
 */
export function endsWith(str, search) {
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

    const startIndex = strLen - searchLen;

    for (let i = 0; i < searchLen; i++) {
        if (str[startIndex + i] !== search[i]) {
            return false;
        }
    }
    return true;
}