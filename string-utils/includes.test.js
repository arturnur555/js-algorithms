import { describe, test, expect } from 'bun:test';
import { includes } from './includes.js';

describe('Тесты includes', () => {
    test('должна вернуть true для подстроки в начале', () => {
        expect(includes('hello', 'he')).toEqual(true);
    });
    test('должна вернуть true для подстроки в середине', () => {
        expect(includes('hello', 'll')).toEqual(true);
 });
    test('должна вернуть true для подстроки в конце', () => {
        expect(includes('hello', 'lo')).toEqual(true);
 });
    test('должна вернуть false если подстрока не найдена', () => {
        expect(includes('hello', 'li')).toEqual(false);
 });
    test('должна вернуть true для пустой поисковой строки', () => {
        expect(includes('hello', '')).toEqual(true);
 });
    test('должна вернуть false если поисковая строка длиннее исходной', () => {
        expect(includes('hello', 'hello!')).toEqual(false);
 });
    test('должна вернуть true для одинаковых строк', () => {
        expect(includes('abc', 'abc')).toEqual(true);
 });
    test('должна вернуть true при нескольких совпадениях', () => {
        expect(includes('ababa', 'ba')).toEqual(true);
 });
    test('должна найти подстроку внутри предыдущего почти-совпадения', () => {
        expect(includes('abababc', 'ababc')).toEqual(true);
 });
    test('должна вернуть true для поиска одного символа в начале', () => {
        expect(includes('hello', 'h')).toEqual(true);
 });
    test('должна вернуть true для поиска символа в середине', () => {
        expect(includes('hello', 'l')).toEqual(true);
 });
    test('должна вернуть true для поиска символа в конце', () => {
        expect(includes('hello', 'o')).toEqual(true);
 });
    test('должна работать с кириллицей', () => {
        expect(includes('привет', 'иве')).toEqual(true);
 });
    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => includes(123, 'hello')).toThrow(TypeError);
 });
    test('должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => includes('hello', 123)).toThrow(TypeError);
 });
});


