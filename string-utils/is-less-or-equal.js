import { isLess } from "./is-less";
import { isEqual } from "./is-equal";
/**
 * Возвращает true если строка a лексикографически меньше или равна b.
 * Комбинация isLess(a, b) || isEqual(a, b).
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a <= b, false иначе
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isLessOrEqual('car', 'cat');      // true
 *   isLessOrEqual('hello', 'hello');  // true (равны)
 *   isLessOrEqual('cat', 'car');      // false
 *   isLessOrEqual('hello', 'hello!'); // true
 *   isLessOrEqual('hello!', 'hello'); // false
 */
export function isLessOrEqual (a, b) {
    return isLess(a, b) || isEqual(a, b);
}