 import { len } from './len.js';
 /**
 * Удаляет элементы из массива (часть 1 — только удаление).
 * МУТИРУЕТ исходный массив!
 *
 * @param {Array} arr — массив (будет изменён)
 * @param {number} start — начальный индекс (поддержка отрицательных)
 * @param {number} [deleteCount] — сколько удалить (по умолчанию — до конца)
 * @returns {Array} — массив удалённых элементов
 * @throws {TypeError} — если arr не массив
 * @throws {TypeError} — если start или deleteCount не число
 *
 * @example
 *   const arr = [1, 2, 3, 4];
 *   splice(arr, 1, 2); // [2, 3], arr → [1, 4]
 */
export function splice(arr, start, deleteCount) {
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

    const removed = [];
    for (let i = 0; i < dc; i++) {
        removed[len(removed)] = arr[s + i];
    }
    for (let i = s; i < n - dc; i++) {
        arr[i] = arr[i + dc];
    }
    for (let i = n - dc; i < n; i++) {
        delete arr[i];
    }
    return removed;
}