import { isEqual } from './is-equal.js';
/**
 * Возвращает true если строки a и b НЕ равны.
 * Обратная функция к isEqual.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если строки НЕ равны, false если равны
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isNotEqual('hello', 'world'); // true
 *   isNotEqual('hi', 'hello');    // true
 *   isNotEqual('abc', 'abc');     // false
 */
export function isNotEqual(a, b) {
    return !isEqual(a, b);
}
