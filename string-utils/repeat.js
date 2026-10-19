/**
 * Возвращает строку str, повторённую count раз.
 * Дробная часть count обрезается (Math.floor).
 * Если count пропущен — возвращает пустую строку.
 *
 * @param {string} str — строка для повторения
 * @param {number} [count] — количество повторений
 * @returns {string} — повторённая строка
 * @throws {TypeError} — если str не строка или count не число
 * @throws {RangeError} — если count отрицательный
 *
 * @example
 *   repeat('ab', 3);   // 'ababab'
 *   repeat('a', 1);    // 'a'
 *   repeat('a', 0);    // ''
 *   repeat('a', 2.7);  // 'aa' (обрезано)
 *   repeat('a');       // '' (count = undefined)
 *   repeat('да', 3);   // 'дадада'
 */
export function repeat(str, count) {

    if(typeof str !== 'string') {
        throw new TypeError('str должен быть строкой');
    }

    if (count === undefined) {
        return '';
    }

    if (typeof count !== 'number') {
        throw new TypeError('count должен быть числом');
    }

    if (count < 0) {
        throw new RangeError('count должен быть не отрицательным');
    }

    const times = Math.floor(count);

    let result = '';
    for (let i = 0; i < times; i++) {
        result += str;
    }

    return result;
}