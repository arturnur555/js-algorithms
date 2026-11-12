 import { describe, test, expect } from 'bun:test';
 import { slice } from './slice.js';
 import { len } from './len.js';

 describe('тесты slice', () => {
    test('должна скопировать весь массив', () => {
        const result = slice([1, 2, 3], 0, 3);
        expect(result).toEqual([1, 2, 3]);
 });
    test('должна скопировать часть с середины', () => {
        const result = slice([1, 2, 3, 4], 1, 3);
        expect(result).toEqual([2, 3]);
 });
    test('должна скопировать от start до конца без end', () => {
        const result = slice([1, 2, 3, 4], 2);
        expect(result).toEqual([3, 4]);
 });
    test('должна поддерживать отрицательный start', () => {
        const result = slice([1, 2, 3, 4], -2);
        expect(result).toEqual([3, 4]);
 });
    test('должна поддерживать отрицательный end', () => {
        const result = slice([1, 2, 3, 4], 0, -1);
        expect(result).toEqual([1, 2, 3]);
 });
    test('должна работать с обоими отрицательными', () => {
        const result = slice([1, 2, 3, 4], -3, -1);
        expect(result).toEqual([2, 3]);
 });
    test('должна вернуть пустой массив если start >= end', () => {
        const result = slice([1, 2, 3], 2, 2);
        expect(result).toEqual([]);
 });
    test('должна вернуть пустой массив для пустого исходного', () => {
        const result = slice([], 0, 1);
        expect(result).toEqual([]);
 });
    test('исходный массив не должен измениться после вызова', () => {
        const arr = [1, 2, 3, 4];
        slice(arr, 1, 3);
        expect(arr).toEqual([1, 2, 3, 4]);
 });
    test('должна вернуть новый массив, а не ссылку на исходный', () => {
        const arr = [1, 2, 3];
        const result = slice(arr, 0, 3);
        expect(result).not.toBe(arr);
 });
    test('должна нормализовать выходящий за границы start', () => {
        const result = slice([1, 2, 3], 5, 7);
        expect(result).toEqual([]);
 });
    test('должна нормализовать end больше длины', () => {
        const result = slice([1, 2, 3], 0, 10);
        expect(result).toEqual([1, 2, 3]);
 });
    test('должна нормализовать уходящий за границы отрицательный start', () => {
        const result = slice([1, 2, 3], -10, 2);
        expect(result).toEqual([1, 2]);
 });
    test('должна нормализовать уходящий за границы отрицательный end', () => {
        const result = slice([1, 2, 3], 0, -10);
        expect(result).toEqual([]);
 });
    test('должна работать с массивом строк', () => {
        const result = slice(['a', 'b', 'c', 'd'], 1, 3);
        expect(result).toEqual(['b', 'c']);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => slice('hello', 0, 1)).toThrow(TypeError);
        expect(() => slice(null, 0, 1)).toThrow(TypeError);
        expect(() => slice(undefined, 0, 1)).toThrow(TypeError);
 });
    test('должна выбросить TypeError если start не число', () => {
        expect(() => slice([1, 2, 3], 'a')).toThrow(TypeError);
        expect(() => slice([1, 2, 3], null)).toThrow(TypeError);
 });
    test('должна выбросить TypeError если end передан и не число', () => {
        expect(() => slice([1, 2, 3], 0, 'b')).toThrow(TypeError);
        expect(() => slice([1, 2, 3], 0, null)).toThrow(TypeError);
 });
});