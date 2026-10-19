import { describe, test, expect } from 'bun:test';
import { reverse } from './reverse.js';

describe('Тесты reverse', () => {
    test('должна перевернуть строку', () => {
        expect(reverse('hello')).toEqual('olleh');
 });
    test('должна вернуть пустую строку для пустой строки', () => {
        expect(reverse('')).toEqual('');
 });
    test('должна вернуть тот же символ для строки из одного символа', () => {
        expect(reverse('a')).toEqual('a');
 });
    test('должна вернуть ту же строку для палиндрома', () => {
        expect(reverse('racecar')).toEqual('racecar');
 });
    test('должна вернуть строку с пробелами', () => {
        expect(reverse('a b c')).toEqual('c b a');
 });
    test('должна работать с кириллицей', () => {
        expect(reverse('привет')).toEqual('тевирп');
 });
    test('должна выбросить Typeerror если аргумент не строка', () => {
        expect(() => reverse(123)).toThrow(TypeError);
 });
    test('должна выбросить TypeError если аргумент null', () => {
        expect(() => reverse(null)).toThrow(TypeError);
 });

});