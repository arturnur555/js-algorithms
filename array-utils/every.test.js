 import { describe, test, expect } from 'bun:test';
 import { every } from './every.js';

 describe('Тесты every', () => {
    test('должна вернуть true если все подходят', () => {
        expect(every([2, 4, 6], x => x % 2 === 0)).toBe(true);
    });

    test('должна вернуть false если хотя бы один не подходит', () => {
        expect(every([2, 3, 4], x => x % 2 === 0)).toBe(false);
    });

    test('должна вернуть true для пустого массива', () => {
        expect(every([], x => x)).toBe(true);
    });

    test('должна остановиться при первом false (ранний выход)', () => {
        let callCount = 0;
        const result = every([2, 3, 4, 6], x => {
            callCount++;
            return x % 2 === 0;
        });
        expect(result).toBe(false);
        expect(callCount).toBe(2);
    });

    test('должна выбросить TypeError если arr не массив', () => {
        expect(() => every('hello', x => x)).toThrow(TypeError);
        expect(() => every(null, x => x)).toThrow(TypeError);
        expect(() => every(undefined, x => x)).toThrow(TypeError);
    });

    test('должна выбросить TypeError если callback не функция', ()=> {
        expect(() => every([1, 2], 'not function')).toThrow(TypeError);
        expect(() => every([1, 2], null)).toThrow(TypeError);
        expect(() => every([1, 2], 42)).toThrow(TypeError);
     });
 });