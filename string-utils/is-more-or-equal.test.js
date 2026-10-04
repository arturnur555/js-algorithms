import { describe, test, expect } from 'bun:test';
import { isMoreOrEqual } from './is-more-or-equal';

describe('Тесты isMoreOrEqual', () => {
    test('должна вернуть true если a больше', () => {
        expect(isMoreOrEqual('cat', 'car')).toEqual(true);
 });
    test('должна вернуть true если строки равны', () => {
        expect(isMoreOrEqual('hello', 'hello')).toEqual(true);
 });
    test('должна вернуть false если a меньше', () => {
        expect(isMoreOrEqual('car', 'cat')).toEqual(false);
 });
    test('должна вернуть true если а длиннее и символы совпадают', () => {
        expect(isMoreOrEqual('hello!', 'hello')).toEqual(true);
 });
    test('должна вернуть false если a короче и символы совпадают', () => {
        expect(isMoreOrEqual('hello', 'hello!')).toEqual(false);
 });
    test('должна вернуть true для пустых строк', () => {
        expect(isMoreOrEqual('', '')).toEqual(true);
 });
    test('должна выбросить TypeError если аргумент не строка', () => {
        expect(() => isMoreOrEqual(123, 'hello')).toThrow(TypeError);
 });



});