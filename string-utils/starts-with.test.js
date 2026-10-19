import { describe, test, expect } from 'bun:test';
import { startsWith } from './starts-with.js';

describe('Тесты startsWith', () => {
    test('должна вернуть true для одного символа', () => {
        expect(startsWith('hello', 'h')).toEqual(true);
 });
    test('должна вернуть true для подстроки', () => {
        expect(startsWith('hello', 'hel')).toEqual(true);
 });
    test('должна вернуть false для несовпадающего вхождения', () => {
        expect(startsWith('hello', 'el')).toEqual(false);
 });
    test('должна вернуть true для пустой поисковой строки', () => {
        expect(startsWith('hello', '')).toEqual(true);
 });
    test('должна вернуть false если поисковая строка длинее', () => {
        expect(startsWith('hell', 'hello')).toEqual(false);
 });
    test('должна вернуть true для точного совпадения', () => {
        expect(startsWith('abc', 'abc')).toEqual(true);
 });
    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => startsWith(123, 'hello')).toThrow(TypeError);
 });
    

})