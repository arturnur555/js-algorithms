 import { describe, test, expect } from 'bun:test';
 import { includes } from './includes.js';
 import { len } from './len.js';

 describe('Тесты includes', () => {
    test('должна вернуть true если элемент есть', () => {
        expect(includes([1, 2, 3], 2)).toBe(true);
 });
    test('должна вернуть false если элемента нет', () => {
        expect(includes([1, 2, 3], 9)).toBe(false);
 });
    test('должна вернуть false для пустого массива', () => {
        expect(includes([], 1)).toBe(false);
 });
    test('должна вернуть true для первого элемента', () => {
        expect(includes([1, 2, 3], 1)).toBe(true);
 });
    test('должна вернуть true для последнего элемента', () => {
        expect(includes([1, 2, 3], 3)).toBe(true);
 });
    test('должна найи строку', () => {
        expect(includes(['a', 'b'], 'b')).toBe(true);
 });
    test('должна различать 0 и false', () => {
        expect(includes([0], false)).toBe(false);
        expect(includes([0], 0)).toBe(true);
 });
    test('должна не мутировать исходный массив', () => {
        const arr = [10, 20, 30];
        includes(arr, 20);
        expect(len(arr)).toBe(3);
        expect(arr[0]).toBe(10);
        expect(arr[1]).toBe(20);
        expect(arr[2]).toBe(30);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => includes('hello', 1)).toThrow(TypeError);
 });
})