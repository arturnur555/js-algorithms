 import { describe, test, expect } from 'bun:test';
 import { some } from './some.js';

 describe('Тесты some', () => {
    test('должна вернуть true если хотя бы один подходит', () => {
        expect(some([1, 2, 3], x => x > 2)).toBe(true);
    });

    test('должна вернуть false если ни один не подходит', () => {
        expect(some([1, 2, 3], x => x > 10)).toBe(false);
    });

    test('должна вернуть false для пустого массива', () => {
        expect(some([], x => x)).toBe(false);
    });

    test('должна остановиться при первом true (ранний выход', () => {
        let callCount = 0;
        const result = some([5, 10, 15], x => {
            callCount++;
            return x % 5 === 0;
        });
        expect(result).toBe(true);
        expect(callCount).toBe(1);
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => some('hello', x => x)).toThrow(TypeError);
        expect(() => some(null, x => x)).toThrow(TypeError);
        expect(() => some(undefined, x => x)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если callback не функция', () => {
        expect(() => some([1, 2], 'not function')).toThrow(TypeError);
        expect(() => some([1, 2], null)).toThrow(TypeError);
        expect(() => some([1, 2], 42)).toThrow(TypeError);
    });
 });