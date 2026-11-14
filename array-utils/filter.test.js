 import { describe, test, expect } from 'bun:test';
 import { filter } from './filter.js';
 import { len } from './len.js';

 describe('Тесты filter', () => {
    test('должна отфильтровать четные', () => {
        expect(filter([1, 2, 3, 4], x => x % 2 === 0)).toEqual([2, 4]);
    });

    test('должна вернуть пустой массив если ни один не прошел', () => {
        expect(filter([1, 3, 5], x => x > 10)).toEqual([]);
    });

    test('должна вернуть все элементы если все прошли', () => {
        expect(filter([2, 4, 6], x => x > 0)).toEqual([2, 4, 6]);
    });

    test('должна вернуть новый массив, исходный не изменился',() => {
        const arr = [1, 2, 3, 4];
        const result = filter(arr, x => x % 2 === 0);
        expect(result).toEqual([2, 4]);
        expect(arr).toEqual([1, 2, 3, 4]);
        expect(result).not.toBe(arr);
    });

    test('должна вернуть пустой массив для пустого исходного', () => {
        expect(filter([], x => x)).toEqual([]);
    });

    test('должна передать правильные аргументы в callback', () => {
        const calls = [];
        filter([10, 20], (el, i, arr) => {
            calls.push({ el, i, arr });
            return true;
        });
        expect(calls).toEqual([
            { el: 10, i: 0, arr: [10, 20] },
            { el: 20, i: 1, arr: [10, 20] },
        ]);
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => filter('hello', x => x)).toThrow(TypeError);
        expect(() => filter(null, x => x)).toThrow(TypeError);
        expect(() => filter(undefined, x => x)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если callback не функция', () => {
        expect(() => filter([1, 2], 'not function')).toThrow(TypeError);
        expect(() => filter([1, 2], null)).toThrow(TypeError);
        expect(() => filter([1, 2], 42)).toThrow(TypeError);
    });
});