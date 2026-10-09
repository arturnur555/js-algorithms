import { len } from './len.js';

/**
 * Удаляет пробелы с начала и конца строки.
 * Пробелы внутри строки сохраняются. Только символ ' ' (не \t, \n).
 *
 * @param {string} str — исходная строка
 * @returns {string} — строка без пробелов по краям
 * @throws {TypeError} — если str не строка
 *
 * @example
 *   trim(' hello ');   // 'hello'
 *   trim('  hello');   // 'hello'
 *   trim('hello  ');   // 'hello'
 *   trim(' he llo ');  // 'he llo'
 *   trim('   ');       // ''
 *   trim('');          // ''
 */
export function trim(str) {
    if (typeof str !== 'string') {
        throw new TypeError('str должен быть строкой');
    }

    let strLen = len(str);
    let start = 0;
    let end = strLen;

    while (start < end && str [start] === ' ') start++;
    while (end > start && str [end - 1] === ' ') end--;

    let result = '';
    for (let i = start; i < end; i++) result += str[i];
    return result;
}