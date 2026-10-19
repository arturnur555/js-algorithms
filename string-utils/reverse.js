import { len } from './len.js';
/**
 * Возвращает новую строку с символами в обратном порядке.
 * Обходит строку с конца к началу, накапливая результат.
 *
 * @param {string} str — исходная строка
 * @returns {string} — перевёрнутая строка
 * @throws {TypeError} — если str не строка
 *
 * @example
 *   reverse('hello');   // 'olleh'
 *   reverse('a');       // 'a'
 *   reverse('');        // ''
 *   reverse('racecar'); // 'racecar' (палиндром)
 *   reverse('привет');  // 'тевирп'
 */
export function reverse(str) {
    if (typeof str !== 'string') {
        throw new TypeError('str должен быть строкой');
    }

    let result = '';

    for (let i = len(str) - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
} 