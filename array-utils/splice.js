 import { len } from './len.js';
 /**
 * Удаляет элементы из массива (часть 1 — только удаление).
 * МУТИРУЕТ исходный массив!
 * @param {Array} arr — массив (будет изменён)
 * @param {number} start — начальный индекс (поддержка отрицательных)
 * @param {number} [deleteCount] — сколько удалить (по умолчанию — до конца)
 * @param {...*} items — элементы для вставки
 * @returns {Array} — массив удалённых элементов
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если start или deleteCount не число
 * @example
 *   const arr = [1, 2, 3];
 *   splice(arr, 1, 1, 'a', 'b'); // [2], arr → [1, 'a', 'b', 3]
 */
export function splice(arr, start, deleteCount, ...items) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }
    if (typeof start !== 'number') {
        throw new TypeError('start должен быть числом');
    }
    if (deleteCount !== undefined && typeof deleteCount !== 'number') {
        throw new TypeError('deleteCount должен быть числом');
    }

    const n = len(arr);
    const s = Math.max(0, Math.min(n, start < 0 ? n + start : start));
    const dc = deleteCount === undefined
    ? n - s
    : Math.max(0, Math.min(deleteCount, n - s));
    const ic = len(items);

    const removed = [];
    for (let i = 0; i < dc; i++) {
        removed[len(removed)] = arr[s + i];
    }
    if (ic > dc) {
        for (let i = n -1; i >= s + dc; i--) {
            arr[i + ic - dc] = arr[i];
        }
    } else if (ic < dc) {
        for (let i = s + dc; i < n; i++) {
            arr[i - (dc - ic)] = arr[i];
        }
    }
    for (let i = 0; i < ic; i++) {
            arr[s + i] = items[i];
    }
    
    if (ic <dc) {
        for (let i = n - (dc - ic); i < n; i++) {
            delete arr[i];
        }
    }
    return removed;
}