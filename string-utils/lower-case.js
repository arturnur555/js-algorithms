import { len } from './len.js';
/**
 * Переводит заглавные буквы (латиница A-Z и кириллица А-Я) в строчные.
 * Остальные символы не меняются. Работает через коды символов.
 *
 * @param {string} str — исходная строка
 * @returns {string} — строка в нижнем регистре
 * @throws {TypeError} — если str не строка
 *
 * @example
 *   lowerCase('HELLO');         // 'hello'
 *   lowerCase('Hello World');   // 'hello world'
 *   lowerCase('ПРИВЕТ');        // 'привет'
 *   lowerCase('HELLO ПРИВЕТ');  // 'hello привет'
 *   lowerCase('HELLO123!');     // 'hello123!'
 */
export function lowerCase(str) {
    if (typeof str !== 'string') throw new TypeError('str должен быть строкой');

    let result = '';
    for (let i = 0; i < len(str); i++) {
        let code =str.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 1040 && code <= 1071)) code += 32;
        result += String.fromCodePoint(code);
    }
    return result;
}