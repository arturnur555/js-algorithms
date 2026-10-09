import { describe, test, expect } from 'bun:test';
import { slice } from './slice.js';

describe('Тесты slice', () => {
  test("должна вернуть 'hello' для ('hello', 0, 5)", () => {
    expect(slice('hello', 0, 5)).toEqual('hello');
  });

  test("должна вернуть 'ell' для ('hello', 1, 4)", () => {
    expect(slice('hello', 1, 4)).toEqual('ell');
  });

  test("должна вернуть 'll' для ('hello', 2, 4)", () => {
    expect(slice('hello', 2, 4)).toEqual('ll');
  });

  test("должна вернуть 'llo' для ('hello', 2) — без end", () => {
    expect(slice('hello', 2)).toEqual('llo');
  });

  test("должна вернуть 'h' для ('hello', 0, 1)", () => {
    expect(slice('hello', 0, 1)).toEqual('h');
  });

  test("должна вернуть 'l' для ('hello', 2, 3)", () => {
    expect(slice('hello', 2, 3)).toEqual('l');
  });

  test("должна вернуть 'o' для ('hello', 4)", () => {
    expect(slice('hello', 4)).toEqual('o');
  });

  test("должна вернуть 'llo' для отрицательного start", () => {
    expect(slice('hello', -3)).toEqual('llo');
  });

  test("должна вернуть 'hell' для отрицательного end", () => {
    expect(slice('hello', 0, -1)).toEqual('hell');
  });

  test("должна вернуть 'll' для обоих отрицательных", () => {
    expect(slice('hello', -3, -1)).toEqual('ll');
  });

  test("должна вернуть '' если start >= end после нормализации", () => {
    expect(slice('hello', 4, 1)).toEqual('');
  });

  test("должна вернуть '' если start за границей", () => {
    expect(slice('hello', 10, 15)).toEqual('');
  });

  test("должна нормализовать выходящий за границы отрицательный start", () => {
    expect(slice('hello', -10, 3)).toEqual('hel');
  });

  test("должна вернуть '' для пустой строки", () => {
    expect(slice('', 0, 1)).toEqual('');
  });

  test("должна работать с кириллицей", () => {
    expect(slice('привет', 1, 4)).toEqual('рив');
  });

  test("должна выбросить TypeError если str не строка", () => {
    expect(() => slice(123, 0, 5)).toThrow(TypeError);
  });

  test("должна выбросить TypeError если 2-й аргумент не число", () => {
    expect(() => slice('hello', '0')).toThrow(TypeError);
  });

  test("должна выбросить TypeError если 3-й аргумент указан и не число", () => {
    expect(() => slice('hello', 0, '5')).toThrow(TypeError);
  });
});




