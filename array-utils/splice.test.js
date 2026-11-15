 import { describe, test, expect } from 'bun:test';
 import { splice } from './splice.js';
 import{ len } from './len.js';

describe('Тесты splice (удаление)', () => {
    test('должна удалить элемент из середины', () => {
        const arr = [1, 2, 3, 4];
        const removed = splice(arr, 1, 2);
        expect(removed).toEqual([2, 3]);
        expect(arr).toEqual([1, 4]);
 });
    test('должна удалить с начала', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, 0, 1);
        expect(removed).toEqual([1]);
        expect(arr).toEqual([2, 3]);
 });
    test('должна удалить с конца', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, 2, 1);
        expect(removed).toEqual([3]);
        expect(arr).toEqual([1, 2]);
 });
    test('должна удалить всё от start до конца если deleteCount не передан', () => {
        const arr = [1, 2, 3, 4];
        const removed = splice(arr, 2);
        expect(removed).toEqual([3, 4]);
        expect(arr).toEqual([1, 2]);
 });
    test('должна вернуть пустой массив если deleteCount = 0', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, 1, 0);
        expect(removed).toEqual([]);
        expect(arr).toEqual([1, 2, 3]);
 });
    test('должна поддерживать отрицательный start', () => {
        const arr = [1, 2, 3, 4];
        const removed = splice(arr, -2, 1);
        expect(removed).toEqual([3]);
        expect(arr).toEqual([1, 2, 4]);
 });
    test('должна обрезать deleteCount если он больше оставшихся элементов', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, 1, 5);
        expect(removed).toEqual([2, 3]);
        expect(arr).toEqual([1]);
 });
    test('должна вернуть пустой массив если start >= len', () => {
        const arr =[1, 2, 3];
        const removed = splice(arr, 5, 1);
        expect(removed).toEqual([]);
        expect(arr).toEqual([1, 2, 3]);
 });
    test('должна нормализовать уходящий за границы отрицательный start', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, -10, 1);
        expect(removed).toEqual([1]);
        expect(arr).toEqual([2, 3]);
 });
    test('должна ничего не удалять при отрицательном deleteCount', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, 1, -1);
        expect(removed).toEqual([]);
        expect(arr).toEqual([1, 2, 3]);
 });
    test('должна выбросить Typeerror если arr не массив', () => {
        expect(() => splice('hello, 0, 1')).toThrow(TypeError);
        expect(() => splice(null, 0, 1)).toThrow(TypeError);
        expect(() => splice(undefined, 0, 1)).toThrow(TypeError);
 });
    test('должна вставить элементы на место удаленных', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, 1, 1, 'a', 'b');
        expect(removed).toEqual([2]);
        expect(arr).toEqual([1, 'a', 'b', 3]);
 });
    test('должна вставить элементы без удаления', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, 1, 0, 'x');
        expect(removed).toEqual([]);
        expect(arr).toEqual([1, 'x', 2, 3]);
 });
    test('должна вставить в начало', () => {
        const arr = [2, 3];
        const removed = splice(arr, 0, 0, 0, 1);
        expect(removed).toEqual([]);
        expect(arr).toEqual([0, 1, 2, 3]);
 });
    test('должна вставить в конец', () => {
        const arr = [1, 2];
        const removed = splice(arr, 2, 0, 3, 4);
        expect(removed).toEqual([]);
        expect(arr).toEqual([1, 2, 3, 4]);
 });
    test('должна вставить по отрицательному start', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, -1, 0, 'x');
        expect(removed).toEqual([]);
        expect(arr).toEqual([1, 2, 'x', 3]);
 });
    test('должна заменить элементы', () => {
        const arr = [1, 2, 3];
        const removed = splice(arr, 0, 2, 'a');
        expect(removed).toEqual([1, 2]);
        expect(arr).toEqual(['a', 3]);
 });
});