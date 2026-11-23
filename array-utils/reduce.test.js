 import { describe, test, expect } from 'bun:test';
 import { reduce } from './reduce.js';
 import { len } from './len.js';
 import { push } from './push.js';

 describe('Тесты reduce', () => {
    test('должна посчитать сумму без initialValue', () => {
        expect(reduce([1, 2, 3], (acc, x) => acc + x)).toBe(6);
    });

    test('должна посчитать сумму с initialValue', () => {
        expect(reduce([1, 2, 3], (acc, x) => acc + x, 4)).toBe(10);
    });

    test('должна вернуть initialValue для пустого массива', () => {
        expect(reduce([], (acc, x) => acc + x, 42)).toBe(42);
    });

    test('должна выбросить TypeError для пустого массива без initialValue', () => {
        expect(() => reduce([], (acc, x) => acc + x)).toThrow(TypeError);
    });

    test('должна сконкатенировать строки', () => {
        expect(reduce(['a', 'b', 'c'], (acc, s) => acc + s, '')).toBe('abc');
    });

    test('должна работать с массивом из одного элемента без initialValue', () => {
        expect(reduce([42], (acc, x) => acc + x)).toBe(42);
    });

    test('должна передавать правильные аргументы в callback', () => {
        const calls = [];
        reduce([10, 20], (acc, el, i, arr) => {
            push(calls, { acc, el, i, arr });
            return acc + el;
        
        }, 0);
        expect(calls).toEqual([
        { acc: 0, el: 10, i: 0, arr: [10, 20] },
        { acc: 10, el: 20, i: 1, arr: [10, 20] },
        ]);
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => reduce('hello', (acc, x) => acc + x)).toThrow(TypeError);
        expect(() => reduce(null, (acc, x) => acc + x)).toThrow(TypeError);
        expect(() => reduce(undefined, (acc, x) => acc + x)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если callback не функция', () => {
        expect(() => reduce([1, 2], 'not function')).toThrow(TypeError);
        expect(() => reduce([1, 2], null)).toThrow(TypeError);
        expect(() => reduce([1, 2], 42)).toThrow(TypeError);
    });
});