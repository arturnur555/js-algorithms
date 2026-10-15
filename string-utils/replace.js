import { len } from './len.js';
import { indexOf } from './index-of.js';

/**
 * Заменяет первое вхождение подстроки search на replacement.
 * Если search не найден — возвращает исходную строку.
 *
 * @param {string} str — исходная строка
 * @param {string} search — что ищем
 * @param {string} replacement — на что заменяем
 * @returns {string} — строка с заменённым первым вхождением
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   replace('hello world', 'world', 'everyone'); // 'hello everyone'
 *   replace('aaa', 'a', 'b');                    // 'baa' (только первое)
 *   replace('hello', 'x', 'y');                  // 'hello' (не найдено)
 *   replace('hello', 'll', '');                  // 'heo'
 *   replace('hello', 'hello', 'hi');             // 'hi'
 */
export function replace(str, search, replacement) {
    if (typeof str !== 'string') throw new TypeError('str должен быть строкой');
    if (typeof search !== 'string') throw new TypeError('search должен быть строкой');
    if (typeof replacement !== 'string') throw new TypeError('replacement должен быть строкой');

    let pos = indexOf(str, search);
    if (pos === -1) return str;

    let searchLen = len(search);
    let strLen = len(str);
    let result = '';

    for (let i = 0; i < pos; i++) result += str[i];
    result += replacement;
    for (let i = pos + searchLen; i < strLen; i++) result += str[i];

    return result;

}
