 import { describe, test, expect } from 'bun:test';
 import { findIndex } from './find-index.js';

 describe('Тесты findIndex', () => {
    test('должна найти индекс первого подходящего элемента', () => {
        expect(findIndex([1, 2, 3, 4], x => x > 2)).toBe(2);
    });

    test('должна вернуть -1 если элемент не найден', () => {
        expect(findIndex([1, 2, 3], x => x > 10)).toBe(-1);
    });

    test('должна вернуть -1 для пустого массива', () => {
        expect(findIndex([], () => true)).toBe(-1);
    });

    test('должна остановиться на первом совпадении', () => {
        expect(findIndex([1, 2, 3, 4], x => x > 1)).toBe(1);
    });

    test('должна вернуть 0 если первый же элемент подходит', () => {
        expect(findIndex([5, 7, 3], x => x > 4)).toBe(0);
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => findIndex('hello', x => x)).toThrow(TypeError);
        expect(() => findIndex(null, x => x)).toThrow(TypeError);
        expect(() => findIndex(undefined, x => x)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если callback не функция', () => {
        expect(() => findIndex([1, 2], 'not function')).toThrow(TypeError);
        expect(() => findIndex([1, 2], null)).toThrow(TypeError);
        expect(() => findIndex([1, 2], 42)).toThrow(TypeError);
    });
 });


