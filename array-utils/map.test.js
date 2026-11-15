 import {describe, test, expect } from 'bun:test';
 import { map } from './map.js';
 import { len } from './len.js';

 describe('Тесты map', () => {
    test('должна удвоить числа', () => {
        expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
    });
    
    test('должна вернуть новый массив, исходный не изменился', () => {
        const arr = [1, 2, 3];
        const result = map(arr, x => x * 2);
        expect(result).toEqual([2, 4, 6]);
        expect(arr).toEqual([1, 2, 3]);
        expect(result).not.toBe(arr);
    });

    test('должна вернуть пустой массив для пустого исходного', () => {
        expect(map([], x => x)).toEqual([]);
    });

    test('должна передать правильные аргументы в callback', () => {
        const calls = [];
        map([10, 20], (el, i, arr) => {
            calls.push({ el, i, arr});
            return el;
        });
        expect(calls).toEqual([
            { el: 10, i: 0, arr: [10, 20] },
            { el: 20, i: 1, arr: [10, 20] },
        ]);
    })

    test('должна работать с преобразованием типов', () => {
        expect(map([1, 2], x => String(x))).toEqual(['1', '2']);
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => map('hello', x => x)).toThrow(TypeError);
        expect(() => map(null, x => x)).toThrow(TypeError);
        expect(() => map(undefined, x => x)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если callback не функция', () => {
        expect(() => map([1, 2], 'not function')).toThrow(TypeError);
        expect(() => map([1, 2], null)).toThrow(TypeError);
        expect(() => map([1, 2], 42)).toThrow(TypeError);
    });
});