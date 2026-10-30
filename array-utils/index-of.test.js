 import { describe, test, expect } from 'bun:test';
 import { indexOf } from './index-of.js';
 import { len } from './len.js';

 describe('Тесты indexOf', () => {
    test('должна найти элемент в середине', () => {
        expect(indexOf([10, 20, 30], 20)).toBe(1);
 });
    test('должна найти первый элемент', () => {
        expect(indexOf([10, 20, 30], 10)).toBe(0);
 });
    test('должна найти последний элемент', () => {
        expect(indexOf([10, 20, 30], 30)).toBe(2);
 });
    test('должна вернуть -1 если элемента нет', () => {
        expect(indexOf([10, 20, 30], 99)).toBe(-1);
 });
    test('должна вернуть индекс первоговхождения при дубликатах', () => {
        expect(indexOf([1, 2, 1, 3], 1)).toBe(0);
 });
    test('должна вернуть -1 для пустого массива', () => {
        expect(indexOf([], 1)).toBe(-1);
 });
    test('должна найти строку по значению', () => {
        expect(indexOf(['a', 'b', 'c'], 'b')).toBe(1);
 });
    test('должна корректно работать с массивом строк', () => {
        expect(indexOf(['abc', 'def', 'xyz'], 'def')).toBe(1);
 });
    test('должна найти 0 (не спутать с fale', () => {
        expect(indexOf([0, false], 0)).toBe(0);
        expect(indexOf([0, false], false)).toBe(1);
 });
    test('должна найти false', () => {
        expect(indexOf([true, false], false)).toBe(1);
 });
    test('должна не мутировать исходный массив', () => {
        const arr = [10, 20, 30];
        indexOf(arr, 20);
        expect(len(arr)).toBe(3);
        expect(arr[0]).toBe(10);
        expect(arr[1]).toBe(20);
        expect(arr[2]).toBe(30);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => indexOf('hello', 1)).toThrow(TypeError);
 });
});