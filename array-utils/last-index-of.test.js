 import { describe, test, expect } from 'bun:test';
 import { lastIndexOf } from './last-index-of.js';
 import { len } from './len.js';

 describe('Тесты lastIndexOf', () => {
    test('должна вернуть индекс последнего вхождения при дубликатах', () => {
        expect(lastIndexOf([1, 2, 1, 3], 1)).toBe(2);
 });
    test('должна вернуть -1 если элемента нет', () => {
        expect(lastIndexOf([1, 2, 3], 9)).toBe(-1);
 });
    test('должна вернуть 0 для единственного вхождения в начале', () => {
        expect(lastIndexOf([5, 6, 7], 5)).toBe(0);
 });
    test('должна вернуть последний индекс для элемента в конце', () => {
        expect(lastIndexOf([5, 6, 7], 7)).toBe (2);   
 });
    test('должна вернуть -1 для пустого массива', () => {
        expect(lastIndexOf([], 1)).toBe(-1);
 });
    test('должна найти символ', () => {
        expect(lastIndexOf(['a', 'b', 'a'], 'a')).toBe(2);
 });
    test('должна найти строку', () => {
        expect(lastIndexOf(['ab', 'cd', 'ab'], 'ab')).toBe(2);
 });
    test('должа не мутировать исходный массив', () => {
        const arr = [10, 20, 30];
        lastIndexOf(arr, 20);
        expect(len(arr)).toBe(3);
        expect(arr[0]).toBe(10);
        expect(arr[1]).toBe(20);
        expect(arr[2]).toBe(30);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => lastIndexOf('hello', 1)).toThrow(TypeError);
 });
});