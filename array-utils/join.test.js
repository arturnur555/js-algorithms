 import { describe, test, expect } from 'bun:test';
 import { join } from './join.js';

 describe('Тесты join', () => {
    test('должна склеить с разделителем по умолчанию (запятая)', () => {
        expect(join([1, 2, 3])).toBe('1,2,3');
 });
    test('должна склеить с явным разделителем', () => {
        expect(join([1, 2, 3], '-')).toBe('1-2-3');
 });
    test('должна склеить с пробелом', () => {
        expect(join(['a', 'b', 'c'], ' ')).toBe('a b c');
 });
    test('должна склеить с пустым разделителем', () => {
        expect(join(['a', 'b', 'c'], '')).toBe('abc');
 });
    test('должна вернуть пустую строку для пустого массива', () => {
        expect(join([])).toBe('');
 });
    test('должна вернуть пустую строку для пустого массива с явным разделителем', () => {
        expect(join([], '-')).toBe('');
 });
    test('должна работать с многосимвольным разделителем', () => {
        expect(join(['a', 'b'], '--')).toBe('a--b');
 });
    test('должна вернуть строку из одного элемента без разделителя', () => {
        expect(join([42], ',')).toBe('42');
 });
    test('должна работать с null и undefined как элементами', () => {
        expect(join([1, undefined, null, 3])).toBe('1,,,3');
 });
    test('должна работать с булевыми значениями', () => {
        expect(join([1, true, false])).toBe('1,true,false');
 });
    test('исходный массив не должен измениться', () => {
        const arr = [1, 2, 3];
        join(arr, '-');
        expect(arr).toEqual([1, 2, 3]);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => join('hello')).toThrow(TypeError);
        expect(() => join(null)).toThrow(TypeError);
        expect(() => join(undefined)).toThrow(TypeError);
 });
    test('должна выбросить TypeError если separator передан и не строка', () => {
        expect(() => join([1, 2], 5)).toThrow(TypeError);
        expect(() => join([1, 2], null)).toThrow(TypeError);
        expect(() => join([1, 2], {})).toThrow(TypeError);
 });
});