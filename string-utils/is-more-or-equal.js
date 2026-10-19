import { isMore } from "./is-more";
import { isEqual } from "./is-equal";
/**
 * Возвращает true если строка a лексикографически больше или равна b.
 * Комбинация isMore(a, b) || isEqual(a, b).
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a >= b, false иначе
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isMoreOrEqual('cat', 'car');      // true
 *   isMoreOrEqual('hello', 'hello');  // true (равны)
 *   isMoreOrEqual('car', 'cat');      // false
 *   isMoreOrEqual('hello!', 'hello'); // true
 *   isMoreOrEqual('hello', 'hello!'); // false
 */
export function isMoreOrEqual(a, b) {
    return isMore(a, b) || isEqual(a, b);
}