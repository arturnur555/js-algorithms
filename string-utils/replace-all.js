  import { len } from './len.js';
 /**
 * Заменяет все вхождения подстроки search на replacement.
 * Заменённый текст НЕ участвует в дальнейшем поиске.
 * Если search пустая строка — replacement вставляется перед каждым символом и в конце.
 *
 * @param {string} str — исходная строка
 * @param {string} search — что ищем
 * @param {string} replacement — на что заменяем
 * @returns {string} — строка со всеми заменами
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   replaceAll('hello', 'll', 'LL');   // 'heLLo'
 *   replaceAll('banana', 'na', 'NA');  // 'baNANA'
 *   replaceAll('aaa', 'aa', 'ba');     // 'baa' (не 'bba')
 *   replaceAll('hello', 'eli', 'hhh'); // 'hello' (не найдено)
 *   replaceAll('abc', '', 'X');        // 'XaXbXcX'
 */
export function replaceAll(str, search, replacement) {
    if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string')
        throw new TypeError('все аргументы должны быть строками');

    let n = len(str), m = len(search), result = '', pos = 0;

    if (m === 0) {
        for (result = replacement; pos < n; pos++) result += str[pos] + replacement;
        return result;
    }

    while (pos <= n - m) {
        let found = -1;
        for (let i = pos; i <= n - m && found === -1; i++) {
        let j = 0;
        while (j < m && str[i + j] === search[j]) j++;
        if (j === m) found = i;
    }

    if (found === -1) break;
    for (let i = pos; i < found; i++) result += str[i];
    result += replacement;
    pos = found + m;
 }
    while (pos < n) result += str[pos++];
    return result;
}