import{ describe, test, expect } from 'bun:test';
import { replaceAll } from './replace-all.js';

describe('Тесты replaceAll', () => {
    test('должна заменить одно вхождение', () => {
        expect(replaceAll('hello', 'll', 'LL')).toEqual('heLLo');
 });
    test('должна заменить несколько вхождений', () => {
        expect(replaceAll('banana', 'na', 'NA')).toEqual('baNANA');
 });
    test('должна не учитывать подставленную строку', () => {
        expect(replaceAll('aaa', 'aa', 'ba')).toEqual('baa');
 });
    test('должна вернуть исходную строку, если search не найден', () => {
        expect(replaceAll('hello', 'eli', 'hhh')).toEqual('hello');
 });
    test('должна работать с заменой символа на строку', () => {
        expect(replaceAll('a', 'a', 'hello')).toEqual('hello')
 });
    test('должна работать с заменой на более длинную', () => {
        expect(replaceAll('hi', 'i', 'ello')).toEqual('hello');
 });
    test('должна работать с заменой на пустую строку', () => {
        expect(replaceAll('hello', 'l', '')).toEqual('heo');
 });
    test("должна вернуть '' для пустой исходной строки", () => {
        expect(replaceAll('', 'abc', 'X')).toEqual('');
 });
    test('должна вставить replacement вокруг каждого символа при пустом search', () => {
        expect(replaceAll('abc', '', 'X')).toEqual('XaXbXcX');
 });
    test('должна выбросить TypeError если любой аргумент не строка', () => {
        expect(() => replaceAll(123, 'a', 'b')).toThrow(TypeError);
        expect(() => replaceAll('a', 123, 'b')).toThrow(TypeError);
        expect(() => replaceAll('a', 'b', 123)).toThrow(TypeError);
 })
})