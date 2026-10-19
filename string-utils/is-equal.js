import {len} from './len.js';
/**
 * Возвращает равны ли строки a и b.
 * Сравнение посимвольное, с учётом регистра.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если строки равны, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isEqual('hello', 'hello'); // true
 *   isEqual('hi', 'hello');    // false
 *   isEqual('', '');           // true
 */
export function isEqual(a,b) {
if (typeof a!== 'string' || typeof b !== 'string') {
throw new TypeError('Аргументы должны быть строками');
 }
 if (len(a) !== len(b)) {
    return false
 }
  for (let i = 0; i < len(a); i++) {
    if (a.charCodeAt(i) !== b.charCodeAt(i)) {
        return false;
    }
 }

 return true;
}