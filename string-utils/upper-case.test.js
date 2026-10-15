 import { describe, test, expect } from 'bun:test';
 import { upperCase } from './upper-case.js';

 describe('Тесты upperCase', () => {
    test('должна перевести все строчные латинские', () => {
        expect(upperCase('hello')).toEqual('HELLO');
 });
    test('должна оставить заглавные без изменений', () => {
        expect(upperCase('HELLO')).toEqual('HELLO');
 });
    test('должна работать со смешанным регистром', () => {
        expect(upperCase('Hello World')).toEqual('HELLO WORLD');
 });
    test('должна не трогать пробелы', () => {
        expect(upperCase(' hello 123')).toEqual(' HELLO 123');
 });
    test('должна не менять цифры', () => {
        expect(upperCase('hello123')).toEqual('HELLO123');
 });
    test('должна не менять знаки', () => {
        expect(upperCase('hello@#')).toEqual('HELLO@#');
 });
    test("должна вернуть '' для пустой строки", () => {
        expect(upperCase('')).toEqual('');
 });
    test('должна вернуть строку без изменений, если нет строчных букв', () => {
        expect(upperCase('123@#')).toEqual('123@#');
 });
    test('должна перевести кириллицу', () => {
        expect(upperCase('привет')).toEqual('ПРИВЕТ');
 });
    test('должна работать со смесью латиницы и кириллицы', () => {
        expect(upperCase('hello привет')).toEqual('HELLO ПРИВЕТ');
 });
    test('должна не менять уже заглавные буквы (включая кириллицу)', () => {
        expect(upperCase('ПРИВЕТ')).toEqual('ПРИВЕТ');
 });
    test('должна выбросить Typeerror если аргумент не строка', () => {
        expect(() => upperCase(123)).toThrow(TypeError);
 });
});