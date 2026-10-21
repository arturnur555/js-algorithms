 import { describe,test, expect } from 'bun:test';
 import { push } from './push.js';
 import { len} from './len.js';

 describe('Тесты push', () => {
    test('должна добавить элемент в конец и вернуть новую длину', () => {
        const arr = [1, 2];
        const result = push(arr, 3);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
 });
    test('должна работать с пустым массивом', () => {
        const arr = [];
        const result = push(arr, 'a');
        expect(result).toBe(1);
        expect(arr).toEqual(['a']);
 });
    test('должна добавить несколько элементов по очереди', () => {
        const arr = [1];
        push(arr, 2);
        push(arr, 3);
        expect(arr).toEqual([1, 2, 3]);
        expect(len(arr)).toBe(3);
 });
    test('должна добавить элемент в массив из одного элемента', () => {
        const arr = [10];
        const result = push(arr, 20);
        expect(result).toBe(2);
        expect(arr).toEqual([10, 20]);
 });
    test('должна добавить 0, false, null как полноценные элементы', () => {
        const arr = [];
        push(arr, 0);
        push(arr, false);
        push(arr, null);
        expect(len(arr)).toBe(3);
        expect(arr[0]).toBe(0);
        expect(arr[1]).toBe(false);
        expect(arr[2]).toBe(null);
 });
    test('должна добавить объект как элемент', () => {
        const arr = [];
        const obj = { a: 1 };
        const result = push(arr, obj);
        expect(result).toBe(1);
        expect(arr[0]).toEqual({ a: 1 });
 });
    test('исходный массив изменился - элемент в конце', () => {
        const arr = [1, 2];
        push(arr, 42);
        expect(arr[len(arr) -1]).toBe(42);
 });
    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => push('hello', 1)).toThrow(TypeError);
 });
});