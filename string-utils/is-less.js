import { isMore } from "./is-more.js";
/**
 * Возвращает true если строка a лексикографически меньше строки b.
 * Сравнение посимвольное по кодам символов.
 * Эквивалентно isMore(b, a).
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a < b, false иначе
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isLess('car', 'cat');      // true
 *   isLess('cat', 'car');      // false
 *   isLess('hello', 'hello');  // false
 *   isLess('hello', 'hello!'); // true
 *   isLess('A', 'a');          // true
 */
    export function isLess(a, b) {
        return isMore(b,a)
 }