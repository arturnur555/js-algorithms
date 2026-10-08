/**
 * Возвращает длину строки.
 * Посимвольный подсчёт через цикл (без .length).
 *
 * @param {string} str — строка для измерения
 * @returns {number} — длина строки
 * @throws {TypeError} — если str не строка
 *
 * @example
 *   len('hello');  // 5
 *   len('');       // 0
 *   len('привет'); // 6
 */

export function len (str) {
    if (typeof str !== 'string') {
        throw new TypeError ('str должен быть строкой');
    }

    let count = 0
    while (str[count] !== undefined) {
        count ++;
    }
    return count;
}
