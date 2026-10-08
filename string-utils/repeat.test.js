import { describe, test, expect } from 'bun:test';
import { repeat } from './repeat.js';

describe('Тесты repeat', () => {
    test('должна повторить 3 раза', () => {
        expect(repeat('ab', 3)).toEqual('ababab');
 });
    test('должна вернуть исходную строку для count = 1', ()=> {
        expect(repeat('hello', 1)).toEqual('hello');
 });
    test('должна вернуть пустую строку для count = 0', () => {
        expect(repeat('ab', 0)).toEqual('');
 });
    test('должна вернуть пустую строку для пустой исходной строки', () => {
        expect(repeat('', 5)).toEqual('');
 });
    test('должна повторить один символ', () => {
        expect(repeat('x', 4)).toEqual('xxxx');
 });
    test('должна обрезать дробную часть', () => {
        expect(repeat('a',2.7)).toEqual('aa');
 });
    test('должна вернуть пустую строку для count < 1', () => {
        expect(repeat('a', 0.5)).toEqual('');
 });
    test('должна вернуть пустую строку если count пропущен', () => {
        expect(repeat('a')).toEqual('');
 });
    test('должна работать с кириллицей', () => {
        expect(repeat('да', 3)).toEqual('дадада');
 });
    test('должна выбросить RangeError для отрицательного count', () => {
        expect(() => repeat('a', -1)).toThrow(RangeError);
 });
    test('должна выбросить TypeError если count не число', () => {
        expect(() => repeat('a', '3')).toThrow(TypeError);
 });
    test('должна выбросить TypeError если str не строка', () => {
        expect(() => repeat(123, 3)).toThrow(TypeError);
 });

});