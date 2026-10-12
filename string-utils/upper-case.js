 import { len } from './len.js';
 /**
 * Переводит строчные буквы (латиница a-z и кириллица а-я) в заглавные.
 * Остальные символы не меняются. Работает через коды символов.
 *
 * @param {string} str — исходная строка
 * @returns {string} — строка в верхнем регистре
 * @throws {TypeError} — если str не строка
 *
 * @example
 *   upperCase('hello');         // 'HELLO'
 *   upperCase('Hello World');   // 'HELLO WORLD'
 *   upperCase('привет');        // 'ПРИВЕТ'
 *   upperCase('hello привет');  // 'HELLO ПРИВЕТ'
 *   upperCase('hello123!');     // 'HELLO123!'
 */
export function upperCase(str) {
    if (typeof str !== 'string') throw new TypeError('str должен быть строкой');

    let result = '';
    for (let i = 0; i < len(str); i++) {
        let code = str.charCodeAt(i);
        if ((code >=97 && code <= 122) || (code >= 1072 && code <= 1103)) code -= 32;
        result += String.fromCodePoint(code);
    }
    return result;
}







