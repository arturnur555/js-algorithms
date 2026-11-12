 import { describe, test, expect } from 'bun:test';
 import { fill } from './fill.js';
 import { len} from './len.js';

 describe('Тесты fill', () => {
    test('должна заполнить весь массив', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, 0);
        expect(result).toEqual([0, 0, 0]);
        expect(arr).toEqual([0, 0, 0]);
 });
    test('должна заполнить от начального индекса и до конца', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, 0, 1);
        expect(result).toEqual([1, 0, 0]);
        expect(arr).toEqual([1, 0, 0]);
 });
    test('должна заполнить часть от start до end', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', 1, 3);
        expect(result).toEqual([1,'*', '*', 4]);
        expect(arr).toEqual([1, '*', '*', 4]);
 });
    test('должна обработать end больше длины', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', 1, 7);
        expect(result).toEqual([1, '*','*', '*']);
        expect(arr).toEqual([1, '*', '*', '*']);
 });
    test('должна вернуть тот же массив (===', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, 0);
        expect(result).toBe(arr);
 });
    test('должна работать с пустым массивом', () => {
        const arr = [];
        const result = fill(arr, 5);
        expect(result).toEqual([]);
        expect(len(arr)).toBe(0);
 });
    test('должна ничего не менять если start >= end', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, 0, 2, 1);
        expect(result).toEqual([1, 2, 3]);
        expect(arr).toEqual([1, 2, 3]);
 });
    test('должна поддерживать отрицательный start', () => {
        const arr =[1, 2, 3, 4];
        const result = fill(arr, '*', -2);
        expect(result).toEqual([1, 2, '*', '*']);
        expect(arr).toEqual([1, 2, '*', '*']);
 });
    test('должна поддерживать отрицательный end', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', 0, -1);
        expect(result).toEqual(['*', '*', '*', 4]);
        expect(arr).toEqual(['*', '*', '*', 4]);
 });
    test('должна обрабатывать отрицательный start больше len', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', -5);
        expect(result).toEqual(['*', '*', '*', '*']);
        expect(arr).toEqual(['*', '*', '*', '*']);
 });
    test('должна работать с start и end по умолчанию', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, 'a');
        expect(result).toEqual(['a', 'a', 'a']);
        expect(arr).toEqual(['a','a', 'a']);
 });
    test('должна нормализовать start > len', () => {
        const arr = [1, 2];
        const result = fill(arr, 5, 5);
        expect(result).toEqual([1, 2]);
        expect(arr).toEqual([1, 2]);
 });
    test('должна нормализовать отрицательный start, уходящий за границу', () => {
        const arr =[1, 2, 3];
        const result = fill(arr, '*', -10, 2);
        expect(result).toEqual(['*', '*', 3]);
        expect(arr).toEqual(['*', '*', 3]);
 });
    test('должна нормализовать отрицательный end, уходящий за границу', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', 0, -5);
        expect(result).toEqual([1, 2, 3, 4]);
        expect(arr).toEqual([1, 2, 3, 4]);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => fill('hello, 0')).toThrow(TypeError);
        expect(() => fill(null, 0)).toThrow(TypeError);
        expect(() => fill(undefined, 0)).toThrow(TypeError);
 });
    test('должна выбросить TypeError если start, end не числа', () => {
        expect(() => fill([1, 2, 3], 0, 'a')).toThrow(TypeError);
        expect(() => fill([1, 2, 3], 0, 0, 'b')).toThrow(TypeError);
        expect(() => fill([1, 2, 3], 0, null)).toThrow(TypeError);
 });
});