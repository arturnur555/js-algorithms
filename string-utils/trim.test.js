 import { describe, test, expect } from 'bun:test';
 import { trim } from './trim.js';

 describe('Тесты trim', () => {
    test('должна удалить пробелы с обеих сторон', () => {
        expect(trim(' hello ')).toEqual('hello');
 });
    test('должна удалить пробелы только слева', () => {
        expect(trim(' hello')).toEqual('hello');
 });
    test('должна удалить пробелы только справа', () => {
        expect(trim('hello ')).toEqual('hello');
 });
    test('должна вернуть строку без изменнений, если пробелв нет', () => {
        expect(trim('hello')).toEqual('hello');
 });
    test("должна вернуть '' для строки из одних пробелов", () => {
        expect(trim('   ')).toEqual('');
 });
    test("должна вернуть '' для пустой строки", () => {
        expect(trim('')).toEqual('');
 });
    test('должна сохранить пробелы внутри строки', () => {
        expect(trim(' he llo ')).toEqual('he llo');
 });
    test("должна удалить только пробелы, не \\t и \\n", () => {
        expect(trim(' \t hello \n ')).toEqual('\t hello \n');
 });
    test('должна работать с кириллицей', () => {
        expect(trim(' привет' )).toEqual('привет');
 });
    test('должна выбросить Typeerror если аргумент не строка', () => {
        expect(() => trim(123)).toThrow(TypeError);
 });
    test('должна выбросить TypeError если аргумент null', () => {
        expect(() => trim(null)).toThrow(TypeError);
 });
})