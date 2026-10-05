import { describe, test, expect } from 'bun:test';
import { isNotEqual } from './is-not-equal.js';

describe('Тесты isNotEqual', () => {
    test('должна вернуть true для разных строк', () => {
        expect(isNotEqual('hello', 'world')).toEqual(true);
 });
    test('должна вернуть false для одинаковых строк', () => {
        expect(isNotEqual('abc', 'abc')).toEqual(false)
 });
    test('должна вернуть true для строк разной длины', () => {
        expect(isNotEqual('hi', 'hello')).toEqual(true);
 });
    test('должна вернуть false для пустых строк', () => {
        expect(isNotEqual('', '')).toEqual(false);
 });
    test('должна вернуть TypeError если первый аргумент не строка', () => {
        expect(() => isNotEqual(123, 'hello')).toThrow(TypeError);
 });
    test('должна вернуть TypeError если второй аргумент не строка', () => {
        expect(() => isNotEqual('hello', 123)).toThrow(TypeError);
 });
});