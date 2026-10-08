import {describe, test, expect } from 'bun:test';
import { indexOf } from './index-of.js';

describe('Тесты indexOf', () => {
    test('должна вернуть 0 для подстроки в начале', () => {
        expect(indexOf('hello', 'he')).toEqual(0);
 });
 
    test('должна вернуть 2 для подстроки в середине', () => {
        expect(indexOf('hello', 'll')).toEqual(2);
 });
    test('должна вернуть 2 для подстроки в конце', () => {
        expect(indexOf('hello', 'lo')).toEqual(3);
 });
    test('должна вернуть -1 если подстрока не найдена', () => {
        expect(indexOf('hello', 'li')).toEqual(-1);
 });
    test('должна вернуть 0 для пустой поисковой строки', () => {
        expect(indexOf('hello', '')).toEqual(0);
 });
    test('должна вернуть -1 если поисковая строка длиннее исходной', () => {
        expect(indexOf('hello', 'hello!')).toEqual(-1);
 });
    test('должна вернуть 0 для одинаковых строк', () => {
        expect(indexOf('abc', 'abc')).toEqual(0);
 });
    test('долна вернуть индекс первого вхождения при нескольких совпадениях', () => {
        expect(indexOf('ababa', 'ba')).toEqual(1);
 });
    test('должна найти подстроку, которая начинается внутри предыдущего почти-совпадения',() => {
        expect(indexOf('abababc', 'ababc')).toEqual(2);
 });
    test('должна вернуть 0 для поиска одного символа', () => {
        expect(indexOf('hello', 'h')).toEqual(0);
 });
    test('должна вернуть 2 для поиска повторяющегося символа', () => {
        expect(indexOf('hello', 'l')).toEqual(2);
 });
    test('должна работать с кириллицей', () => {
        expect(indexOf('привет', 'иве')).toEqual(2);
 });
    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => indexOf(123, 'hello')).toThrow(TypeError);
 });
    test('должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => indexOf('hello', 123)).toThrow(TypeError);
 });

});