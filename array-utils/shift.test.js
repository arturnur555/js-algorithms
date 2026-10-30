 import { describe, test, expect } from 'bun:test';
 import { shift } from './shift.js';
 import { len } from './len.js';

 describe('Тесты shift', () => {
    test('должна удалить первый элемент и вернуть его', () => {
        const arr = [1, 2, 3];
        const result = shift(arr);
        expect(result).toBe(1);
        expect(len(arr)).toBe(2);
        expect(arr[0]).toBe(2);
        expect(arr[1]).toBe(3);
 });
    test('должна вернуть  undefined для пустого массива', () => {
        const arr = [];
        const result = shift(arr);
        expect(result).toBeUndefined();
        expect(len(arr)).toBe(0);
 });
    test('должна удалить единственный элемент', () => {
        const arr = [42];
        const result = shift(arr);
        expect(result).toBe(42);
        expect(len(arr)).toBe(0);
 });
    test('должна сохранить порядок остальных элементов', () => {
        const arr = ['a', 'b', 'c'];
        const result = shift(arr);
        expect(result).toBe('a');
        expect(arr).toEqual(['b', 'c']);
 });
    test('должна корректно удалить falsy значение', () => {
        const arr =[0, 1];
        const result = shift(arr);
        expect(result).toBe(0);
        expect(arr[0]).toBe(1);
        expect(len(arr)).toBe(1);
 });
    test('два shift подряд уменьшают длину на 2', () => {
        const arr = [1, 2, 3, 4];
        shift(arr);
        shift(arr);
        expect(len(arr)).toBe(2);
        expect(arr[0]).toBe(3);
        expect(arr[1]).toBe(4);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => shift('hello')).toThrow(TypeError);
 });
});