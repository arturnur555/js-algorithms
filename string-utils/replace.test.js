 import { describe, test, expect } from 'bun:test';
 import { replace } from './replace.js';

 describe('Тесты replace', () => {
    test("должна заменить 'world' на 'everyone", () => {
       expect(replace('hello world', 'world', 'everyone')).toEqual('hello everyone');
 });
    test('должна заменить в начале', () => {
        expect(replace('hello world', 'hello', 'hi')).toEqual('hi world');
 });
    test('должна заменить в конце', () => {
        expect(replace('hello world', 'world', 'earth')).toEqual('hello earth');
 });
    test('должна заменить в середине', () => {
        expect(replace('hello world', 'ello', 'i')).toEqual('hi world');
 });
    test('должна вернуть исходную строку, если search не найден', () => {
        expect(replace('hello', 'help', 'hhhh')).toEqual('hello');
 });
    test('должна работать с заменой на более длинную', () => {
        expect(replace('hi', 'i', 'ello')).toEqual('hello');
 });
    test('должна работать с заменой на более короткую', () => {
        expect(replace('hello', 'ello', 'i')).toEqual('hi');
 });
    test('должна работать с заменой на пустую строку', () => {
        expect(replace('hello', 'll', '')).toEqual('heo');
 });
    test('должна заменить только первое вхождение при множественных', () => {
        expect(replace('banana', 'na','ba')).toEqual('babana');
 });
    test('должна работать с кириллицей', () => {
        expect(replace('привет мир', 'мир', 'всем')).toEqual('привет всем');
 });
    test('должна выбросить TypeError если любой аргумент не строка', () => {
        expect(() => replace(123, 'a', 'b')).toThrow(TypeError);
        expect(() => replace('a', 123, 'b')).toThrow(TypeError);
        expect(() => replace('a', 'b', 123)).toThrow(TypeError);
 });
})