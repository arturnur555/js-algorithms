 import { describe, test, expect } from 'bun:test';
 import { forEach } from './for-each.js';

 describe('Тесты forEach', () => {
    test('должна вызвать callback для каждого элемента', () => {
        const calls = [];
        forEach([1, 2, 3], (item, i, arr) => {
            calls.push({item, i, arr});
        });
        expect(calls).toEqual([
            { item: 1, i: 0, arr: [1, 2, 3] },
            { item: 2, i: 1, arr: [1, 2, 3] },
            { item: 3, i: 2, arr: [1, 2, 3] },
        ]);
    });

    test('должна не вызывать callback для пустого массива', () => {
        let called = false;
        forEach([], () => {
            called = true;
            throw new Error('callback не должен вызываться');
        });
        expect(called).toBe(false);
    });

    test('должна вернуть undefined', () => {
        const result = forEach([1], () => {});
        expect(result).toBeUndefined();
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => forEach('hello', () => {})).toThrow(TypeError);
        expect(() => forEach(null, () => {})).toThrow(TypeError);
        expect(() => forEach(undefined, () => {})).toThrow(TypeError);
        
    });

    test('должна выбросить TypeError если callback не функция', () => {
        expect(() => forEach([1, 2], 'not a function')).toThrow(TypeError);
        expect(() => forEach([1, 2], null)).toThrow(TypeError);
        expect(() => forEach([1, 2], 42)).toThrow(TypeError);
    });

});