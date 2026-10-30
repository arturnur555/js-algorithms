 import { describe, test, expect } from 'bun:test';
 import { unshift } from './unshift.js';
 import { len } from './len.js';

 describe('Тесты unshift', () => {
    test('должна добавить элемент в начало и вернуть новую длину', () => {
        const arr = [2, 3];
        const result = unshift(arr, 1);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
 });
    test('должна работать с пустым массивом', () => {
        const arr = [];
        const result = unshift(arr, 'a');
        expect(result).toBe(1);
        expect(arr).toEqual(['a']);
 });
    test('должна добавить в массив из одного элемента', () => {
        const arr = [20];
        const result = unshift(arr, 10);
        expect(result).toBe(2);
        expect(arr).toEqual([10, 20]);
 });
    test('должна сохранить порядок остальных элементов', () => {
        const arr = ['b', 'c', 'd'];
        unshift(arr, 'a');
        expect(arr).toEqual(['a', 'b', 'c', 'd']);
 });
    test('два unshift подряд: первый элемент становится вторым', () => {
        const arr = [3];
        unshift(arr, 2);
        unshift(arr, 1);
        expect(arr).toEqual([1, 2, 3]);
        expect(len(arr)).toBe(3);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => unshift('hello', 1)).toThrow(TypeError);
 });
});