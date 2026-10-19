import { len } from './len.js';
/**
 * Возвращает true если строка a лексикографически больше строки b.
 * Сравнение посимвольное по кодам символов.
 * Если строки — префикс одна другой, длинная считается больше.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a > b, false иначе
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isMore('cat', 'car');      // true  ('t' > 'r')
 *   isMore('car', 'cat');      // false
 *   isMore('hello', 'hello');  // false (равны)
 *   isMore('hello!', 'hello'); // true  (длиннее)
 *   isMore('b', 'aaaaa');      // true  ('b' > 'a')
 */
export function isMore(a, b) {
    if (typeof a !== 'string' || typeof b !=='string') {
        throw new TypeError('Аргументы должны быть строками');
    }

    const lenA = len(a);
    const lenB = len(b);
    const minLen = lenA < lenB ? lenA : lenB;

    for (let i = 0; i < minLen; i++) {
        const codeA = a.charCodeAt(i);
        const codeB = b.charCodeAt(i);
        if (codeA !== codeB) {
            return codeA > codeB;
        } 
}

    return lenA > lenB;
}