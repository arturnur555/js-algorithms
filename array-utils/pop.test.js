 import { describe, test, expect } from 'bun:test';
 import { pop } from './pop.js';
 import { len } from './len.js';

 describe('Тесты pop', () => {
    test('должна удалить последний элемент и вернуть его', () => {
        const arr = [1, 2, 3];
        const result = pop(arr);
        expect(result).toBe(3);
        expect(len(arr)).toBe(2);
        expect(arr[0]).toBe(1);
        expect(arr[1]).toBe(2);
 });
    test('должна вернуть undefined для пустого массива', () => {
        const arr = [];
        const result = pop(arr);
        expect(result).toBeUndefined();
        expect(len(arr)).toBe(0);
 });
    test('должна удалить единственный элемент', () => {
        const arr = [42];
        const result = pop(arr);
        expect(result).toBe(42);
        expect(len(arr)).toBe(0);
 });
    test('должна работать с массивом строк', () => {
        const arr = ['a', 'b'];
        const result = pop(arr);
        expect(result).toBe('b');
        expect(arr).toEqual(['a']);
 });
    test('должна корректно удалить 0 (не спутать с undefined)', () => {
        const arr = [0];
        const result = pop(arr);
        expect(result).toBe(0);
        expect(len(arr)).toBe(0);
 });
    test('должна корректно удалить false (не спутать с undefined)', () => {
        const arr = [false];
        const result = pop(arr);
        expect(result).toBe(false);
        expect(len(arr)).toBe(0);
 });
    test('после двух pop подряд длина уменьшается на 2', () => {
        const arr = [1, 2, 3, 4];
        pop(arr);
        pop(arr);
        expect(len(arr)).toBe(2);
        expect(arr[0]).toBe(1);
        expect(arr[1]).toBe(2);
 });
    test('должна выбросить Typeerror  если arr не массив', () => {
        expect(() => pop('hello')).toThrow(TypeError);
 });
});