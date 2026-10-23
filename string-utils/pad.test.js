 import { describe, test, expect } from 'bun:test';
 import { pad } from './pad.js';

 describe('Тесты pad', () => {
    test('должна дополнить слева', () => {
        expect(pad('hi', 5, '-', 'left')).toEqual('---hi');
 });
    test('должна дополнить справа', () => {
        expect(pad('hi', 5, '-', 'right')).toEqual('hi---');
 });
    test('должна дополнить с обеих сторон (четное)', () => {
        expect(pad('hi', 6, '-', 'both')).toEqual('--hi--');
 });
    test('должна дополнить с обеих сторон (нечетное, лишний справа)', () => {
        expect(pad('hi', 5, '-', 'both')).toEqual('-hi--');
 });
    test('должна вернуть строку без изменений, если длина уже достаточная', () => {
        expect(pad('hello', 5, '-', 'left')).toEqual('hello');
 });
    test('должна вернуть строку без изменений, если она длиннее целевой', () => {
        expect(pad('hello', 3, '-', 'left')).toEqual('hello');
 });
    test('должна работать с пробелами', () => {
        expect(pad('a', 3, '  ', 'right')).toEqual('a  ');
 });
    test('должна работать с пустой исходной строкой', () => {
        expect(pad('', 4, 'x', 'both')).toEqual('xxxx');
 });
    test("должна вернуть '' для pad('', 0, '-',  'left')", () => {
        expect(pad('', 0, '-', 'left')).toEqual('');
 });
    test('должна дополнить многосимвольной строкой слева', () => {
        expect(pad('hi', 7, 'ab', 'left')).toEqual('ababahi');
 });
    test('должна дополнить многосимвольной строкой справа', () => {
        expect(pad('hi', 7, 'ab', 'right')).toEqual('hiababa');
 });
    test('должна выбросить ошибку при неверном side', () => {
        expect(() => pad('a', 3, '-', 'top')).toThrow(Error);
 })
    test('должна выбросить TypeError если str не строка', () => {
        expect(() => pad(123, 3, '-', 'left')).toThrow(TypeError);
 });
});