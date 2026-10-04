import { describe, test, expect } from 'bun:test';
import { isLess } from './is-less';

describe('Тесты isLess', () => {
    test('должна вернуть true  если a явно меньше', () => {
        expect (isLess('car', 'cat')).toEqual(true);
 });
    test('должна вернуть false если a больше', () => {
        expect(isLess('cat', 'car')).toEqual(false);
 });
    test('должна вернуть false для равных строк', () => {
        expect(isLess('hello', 'hello')).toEqual(false);
 });
    test('должна вернуть true если a короче', () => {
        expect(isLess('hello', 'hello!')).toEqual(true);
 });
    test('должна вернуть true для заглавной vs строчной', () => {
        expect(isLess('A', 'a')).toEqual(true);
 });
    test('должна вернуть true для пустой vs непустой', () => {
        expect(isLess('', 'a')).toEqual(true);
 });
    test('должна выбросить TypeError если не строка', () => {
        expect(() => isLess(123, 'hello')).toThrow(TypeError);
 });
})