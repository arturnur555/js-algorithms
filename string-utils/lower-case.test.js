 import { describe, test, expect } from 'bun:test';
 import { lowerCase } from './lower-case.js';

 describe('Тесты lowerCase', () => {
    test('должна перевести все заглавные латинские', () => {
        expect(lowerCase('HELLO')).toEqual('hello');
 });
    test('должна оставить строчные без изменений', () => {
        expect(lowerCase('hello')).toEqual('hello');
 });
    test('должна работать со смешанным регистром', () => {
        expect(lowerCase('Hello World')).toEqual('hello world');
 });
    test('должна не трогать пробелы', () => {
        expect(lowerCase(' HELLO 123')).toEqual(' hello 123');
 });
    test('должна не менять цифры', () => {
        expect(lowerCase('HELLO123')).toEqual('hello123');
 });
    test('должна не менять знаки', () => {
        expect(lowerCase('HELLO!@#')).toEqual('hello!@#');
 });
    test("должна вернуть '' для пустой строки", () => {
        expect(lowerCase('')).toEqual('');
 });
    test('должна вернуть строку без изменений, если нет заглавных букв', () => {
        expect(lowerCase('123!@#')).toEqual('123!@#');
 });
    test('должна перевести кириллицу', () => {
        expect(lowerCase('ПРИВЕТ')).toEqual('привет');
 });
    test('должна работать со смесью латиницы и кириллицы', () => {
        expect(lowerCase('HELLO ПРИВЕТ')).toEqual('hello привет');
 });
    test('должна не менять уже строчные буквы(включая кириллицу)', () => {
        expect(lowerCase('привет')).toEqual('привет');
 });
    test('должна выбросить Typeerror если аргумент не строка', () => {
        expect(() => lowerCase(123)).toThrow(TypeError);
 });
})