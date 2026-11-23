 import { describe, test, expect } from 'bun:test';
 import { find } from './find.js';

 describe ('Тесты find', () => {
    test('должна найти первый подходящий элемент', () => {
        expect(find([1, 2, 3, 4], x => x > 2)).toBe(3);
    });

    test('должна вернуть undefined если элемент не найден', () => {
        expect(find([1, 2, 3], x => x > 10)).toBeUndefined();
    });

    test('должна вернуть undefined для пустого массива', () => {
        expect(find([], () => true)).toBeUndefined();
    });

    test('должна остановиться на первом совпадении', () => {
        expect(find([1, 2, 3, 4], x => x > 1)).toBe(2);
    });

    test('должна передавать правильные аргументы в callback', () => {
        const calls = [];
        find([10, 20], (el, i, arr) => {
            calls.push({ el, i, arr });
            return false;
        });
        expect(calls).toEqual([
            { el: 10, i: 0, arr: [10, 20] },
            { el: 20, i: 1, arr: [10, 20] }
        ]);
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => find('hello', x => x)).toThrow(TypeError);
        expect(() => find(null, x => x)).toThrow(TypeError);
        expect(() => find(undefined, x => x)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если callback не функция', () => {
        expect(() => find([1, 2], 'not function')).toThrow(TypeError);
        expect(() => find([1, 2], null)).toThrow(TypeError);
        expect(() => find([1, 2], 42)).toThrow(TypeError);
    });
});