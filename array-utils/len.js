 /**
 * Возвращает количество элементов в массиве.
 * Считает циклом до первого undefined (не использует .length).
 * НЕ мутирует исходный массив.
 *
 * @param {Array} arr — массив элементов
 * @returns {number} — количество элементов
 * @throws {TypeError} — если arr не массив
 *
 * @example
 *   len([1, 2, 3]);        // 3
 *   len([]);               // 0
 *   len(['a', 'b']);       // 2
 *   len([1, 'two', true]); // 3
 */
export function len(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    let count = 0;
    for (let i = 0; arr [i] !== undefined; i++) {
        count++;
    }
    return count;
}