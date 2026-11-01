import { describe, test, expect } from 'bun:test';
import { reverse } from './reverse.js';
import { len } from './len.js';

describe('Тесты reverse', () => {
    test('должна перевернуть массив из нечетного числа элементов', () => {
        const arr =[1, 2, 3];
        const result = reverse(arr);
        expect(result).toEqual([3, 2, 1]);
        expect(arr).toEqual([3, 2, 1]);
 });
    test('должна перевернуть массив из четного числа элементов', () => {
        const arr = [1, 2, 3, 4];
        const result = reverse(arr);
        expect(result).toEqual([4, 3, 2, 1]);
        expect(arr).toEqual([4, 3, 2, 1]);
 });
    test('должна перевернуть массив из двух элементов', () => {
        const arr = [1, 2];
        const result = reverse(arr);
        expect(result).toEqual([2, 1]);
 });
    test('должна вернуть тот же массив (===)', () => {
        const arr =[1, 2, 3];
        const result = reverse(arr);
        expect(result).toBe(arr);
 });
    test('должна перевернуть массив из одного элемента', () => {
        const arr = [42];
        const result = reverse(arr);
        expect(result).toEqual([42]);
        expect(len(arr)).toBe(1);
 });
    test('должна вернуть пустой массив без изменений', () => {
        const arr = [];
        const result = reverse(arr);
        expect(result).toEqual([]);
        expect(len(arr)).toBe(0);
 });
    test('должна работать с массивом строк', () => {
        const arr = ['a', 'b', 'c'];
        const result = reverse(arr);
        expect(result).toEqual(['c', 'b', 'a']);
 });
    test('должна работать с массивом смешанных типов', () => {
        const arr = [1, 'two', null];
        const result = reverse(arr);
        expect(result).toEqual([null, 'two', 1]);
 });
    test('двойной reverse должен восстановить исходный порядок', () => {
        const arr = [1, 2, 3];
        reverse(reverse(arr));
        expect(arr).toEqual([1, 2, 3]);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => reverse('hello')).toThrow(TypeError);
        expect(() => reverse(null)).toThrow(TypeError);
        expect(() => reverse(undefined)).toThrow(TypeError);
 });
})