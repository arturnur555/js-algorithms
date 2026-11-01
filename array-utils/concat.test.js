 import {describe, test, expect } from 'bun:test';
 import { concat } from './concat.js';
 import { len } from './len.js';

 describe('Тесты concat', () => {
    test('должна объединить два непустых массива', () => {
        const result = concat([1, 2], [3, 4]);
        expect(result).toEqual([1, 2, 3, 4]);
 });
    test('должна вернуть копию первого если второй пуст', () => {
        const result = concat([1, 2], []);
        expect(result).toEqual([1, 2]);
 });
    test('должна вернуть копию второго если первый пуст', () => {
        const result = concat([], [3, 4]);
        expect(result).toEqual([3, 4]);
 });
    test('должна вернуть пустой массив для двух пустых', () => {
        const result = concat([], []);
        expect(result).toEqual([]);
 });
    test('должна вернуть новый массив, а не ссылку на исходный', () => {
        const arr1 = [1];
        const arr2 = [2];
        const result = concat(arr1, arr2);
        expect(result).not.toBe(arr1);
        expect(result).not.toBe(arr2);
 });
    test('исходный arr1 не должен измениться после вызова', () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        concat(arr1, arr2);
        expect(arr1).toEqual([1, 2]);
 });
    test('исходный arr2 не должен измениться после вызова', () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        concat(arr1, arr2);
        expect(arr2).toEqual([3, 4]);
 });
    test('должна работать с массивами строк', () => {
        const result = concat(['a'], ['b', 'c']);
        expect(result).toEqual(['a', 'b', 'c']);
 });
    test('должна работать с массивами смешанных типов', () => {
        const result = concat([1, 'two'], [null, false]);
        expect(result).toEqual([1, 'two', null, false]);
 });
    test('должна выбросить TypeError если arr1 не массив', () => {
        expect(() => concat('hello', [1])).toThrow(TypeError);
        expect(() => concat(null, [1])).toThrow(TypeError);
        expect(() => concat(undefined, [1])).toThrow(TypeError);
 });
    test('должна выбросить TypeError если arr2 не массив', () => {
        expect(() => concat([1], 'hello')).toThrow(TypeError);
        expect(() => concat([1], null)).toThrow(TypeError);
        expect(() => concat([1], undefined)).toThrow(TypeError);
 });
});