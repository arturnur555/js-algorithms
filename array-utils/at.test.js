 import { describe, test, expect } from 'bun:test';
 import { at } from './at.js';
 import { len } from './len.js';

 describe('Тесты at', () => {
    test('должна вернуть элемент по положительному индексу', () => {
        expect(at([10, 20, 30], 1)).toEqual(20);
 });
    test('должна вернуть первый элемент', () => {
        expect(at([10, 20, 30], 0)).toEqual(10);
 });
    test('должна вернуть последний элемент по отрицательному индексу', () => {
        expect(at([10, 20, 30], -1)).toEqual(30);
 });
    test('должна вернуть предпоследний элемент', () => {
        expect(at([10, 20, 30], -2)).toEqual(20);
 });
    test('должна вернут первый через -len', () => {
        expect(at([10, 20, 30], -3)).toEqual(10);
 });
    test('должна вернуть undefined при выходе за правую границу', () => {
        expect(at([10, 20, 30], 5)).toEqual(undefined);
 });
    test('должна вернуть undefined при выходе за левую границу', () => {
        expect(at([10, 20, 30], -5)).toEqual(undefined);
 });
    test('должна вернуть undefined длч пустого массива', () => {
        expect(at([], 0)).toEqual(undefined);
 });
    test('должна вернуть undefined для пустого массива и отрицательного', () => {
        expect(at([], -1)).toEqual(undefined);
 });
    test('должна работать с массивом строк', () => {
        expect(at(['a', 'b', 'c'], 2)).toEqual('c');
 });
    test('должна не мутировать исходный массив', () => {
        const arr = [10, 20, 30];
        at(arr, 1);
        expect(len(arr)).toEqual(3);
        expect(arr[0]).toEqual(10);
        expect(arr[1]).toEqual(20);
        expect(arr[2]).toEqual(30);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => at('hello', 0)).toThrow(TypeError);
 });   
    test('должна выбросить TypeError если index не число', () => {
        expect(() => at([1], 'a')).toThrow(TypeError);
 });
});