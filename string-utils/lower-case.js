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
export function upperCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('str должен быть строкой');
    }

    let result = '';
    for (let i = 0; i < len(str); i++) {
        const code = str.charCodeAt(i);
        const isLower = (code >= 97 && code <= 122) || (code >= 1072 && code <= 1103);
        result += String.fromCodePoint(isLower ? code - 32 : code);
    }
    return result;
}
