 import { describe, test, expect } from 'bun:test';
 import { len } from './len.js';

 describe('Тесты len (массивы)', () => {
    test('должна вернуть 3 для [1, 2, 3]', () => {
        expect(len([1, 2, 3])).toEqual(3);
 });
    test('должна вернуть 0 для пустого массива', () => {
        expect(len([])).toEqual(0);
 });
    test('должна вернуть 1 для массива из одного элемента', () => {
        expect(len([42])).toEqual(1);
 });
    test('должна вернуть 4 для массива строк', () => {
        expect(len(['a', 'b', 'c', 'd'])).toEqual(4);
 });
    test('должна вернуть 5 для массива с разными типами', () => {
        expect(len([1, 'two', true, null, 0])).toEqual(5);
 });
    test('должна не мутировать на исходный массив', () => {
        const arr = [1, 2, 3];
        const beforeLen = len(arr);
        const beforeElements = [arr[0], arr[1], arr[2]];
        len(arr);
        expect(len(arr)).toEqual(beforeLen);
        expect([arr[0], arr[1], arr[2]]).toEqual(beforeElements);
 });
    test('должна выбросить TypeError для строки', () => {
        expect(() => len('hello')).toThrow(TypeError);
 });
    test('должна выбросить TypeError для числа', () => {
        expect(() => len(123)).toThrow(TypeError);
 });
    test('должна выбросить TypeError для объекта', () => {
        expect(() => len({ 0: 'a'})).toThrow(TypeError);
 });
    test('должна выбросить TypeError если аргумент не передан', () => {
        expect(() => len()).toThrow(TypeError);
 });
})