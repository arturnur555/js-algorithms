import { describe, test, expect } from 'bun:test';
import { isMore } from './is-more.js';

describe('Тесты isMore', () => {
    test('должна вернуть true если a явно больше', () => {
        expect(isMore('cat', 'car')).toEqual(true);
 });
    test('должна вернуть false если a явно меньше', () => {
        expect(isMore('car', 'cat')).toEqual(false);
 });
    test('должна вернуть false для равных строк', () => {
        expect(isMore('hello', 'hello')).toEqual(false);
 });
    test('должна вернутьtrue если a длиннее, но символы совпадают', () => {
        expect(isMore('hello!', 'hello')).toEqual(true);
 });
    test('должна вернуть false если a короче, но символы совпадают', () => {
        expect(isMore('hello', 'hello!')).toEqual(false);
 });
    test('должна вернуть true если первый символ a больше - длина не важна', () => {
        expect(isMore('b', 'aaaaa')).toEqual(true);
 });
    test('должна вернуть false для заглавной vs строчной', () => {
        expect(isMore('Admin', 'admini')).toEqual(false);
 });
 test('должна вернуть false если a начинается с пробела, а b с буквы', () => {
        expect(isMore(' a', 'aa')).toEqual(false);
 });
    test('должна вернуть true если a заканчивается пробелом', () => {
        expect(isMore('aa ', 'aa')).toEqual(true);
 });
    test('должна вернуть false для пустых строк', () => {
        expect(isMore('', '')).toEqual(false)
 });
    test('должна вернуть false если a пустая, b нет', () => {
        expect(isMore('', 'a')).toEqual(false);
 });
    test('должна выбросить TypeError если аргумент не строка', () => {
        expect(() => isMore(123, 'hello')).toThrow(TypeError);
 });



});