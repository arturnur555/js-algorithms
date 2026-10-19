import { describe, test, expect } from 'bun:test';
import { endsWith } from './ends-with.js';

describe('Тесты endsWith', () => {
    test('должна вернуть true для одного символа', () => {
        expect(endsWith('hello', 'o')).toEqual(true);
 });
    test('должна вернуть true для подстроки', () => {
        expect(endsWith('hello', 'llo')).toEqual(true);
 });
    test('должна вернуть false для несовпадающего вхождения', () => {
        expect(endsWith('hello', 'ell')).toEqual(false);
 });
    test('должна вернуть true для пустой поисковой строки', () => {
        expect(endsWith('hello', '')).toEqual(true);
 });
    test('должна вернуть false если поисковая строка длиннее', () => {
        expect(endsWith('hell', 'hello')).toEqual(false);
 });
    test('должна вернуть true для точного совпадения', () => {
        expect(endsWith('abc','abc')).toEqual(true);
 });
    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => endsWith(123, 'hello')).toThrow(TypeError);
 });

});