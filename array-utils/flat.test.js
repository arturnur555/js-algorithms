 import { describe, test, expect } from 'bun:test';
 import { flat } from './flat.js';

 describe('Тесты flat', () => {
    test('должна разгладить один уровень (глубина по умолчанию', () => {
        expect(flat([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    });

    test('должна разгладить два уровня', () => {
        expect(flat([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
    });

    test('должна обрабатывать смешанную вложенность', () => {
        expect(flat([1, [2], [3, [4]]], 1)).toEqual([1, 2, 3, [4]]);
    });

    test('должна разгладить полностью с Infinity', () => {
        expect(flat([1, [2, [3, [4, 5], 6]]], Infinity)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('должна вернуть копию для уже плоского массива', () => {
        const arr = [1, 2, 3];
        const result = flat(arr);
        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(arr);
    });

    test('должна вернуть пустой массив для пустого', () => {
        expect(flat([])).toEqual([]);
    });

    test('должна не разглаживать при depth = 0', () => {
        expect(flat([1, [2, 3]], 0)).toEqual([1, [2, 3]]);
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => flat('hello')).toThrow(TypeError);
        expect(() => flat(null)).toThrow(TypeError);
        expect(() => flat(undefined)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если depth передан и не число', () => {
        expect(() => flat([1, [2]], '1')).toThrow(TypeError);
        expect(() => flat([1, [2]], null)).toThrow(TypeError);
        expect(() => flat([1, [2]], {})).toThrow(TypeError);
    });
 });