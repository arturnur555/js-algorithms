import { describe, test, expect } from 'bun:test';
import { substring } from './substring.js';

describe('Тесты substring', () => {
    test("должна вернуть 'hello' для ('hello', 0, 5)", () => {
        expect(substring('hello', 0, 5)).toEqual('hello');
 });
    test("должна вернуть 'ell' для ('hello', 1, 4)", () => {
        expect(substring('hello', 1, 4)).toEqual('ell');
 });
    test("должна вернуть 'h' для одного символа в начале", () => {
        expect(substring('hello', 0, 1)).toEqual('h');
 });
    test("должна вернуть 'e' для одного символа при обмене границ", () => {
        expect(substring('hello', 2, 1)).toEqual('e');
 });
    test("должна вернуть 'o' для одного символа в конце", () => {
        expect(substring('hello', 4, 5)).toEqual('o');
 });
    test('должна обрезать end до длины строки', () => {
        expect(substring('hello', 0, 10)).toEqual('hello');
 });
    test('должна вернуть до конца строки при не указанном 3-м аргументе', () => {
        expect(substring('hello', 2)).toEqual('llo');
 });
    test('должна поменять start и end местами, если start > end', () => {
        expect(substring('hello', 4, 1)).toEqual('ell');
 });
    test('должна привести отрицательный start к 0', () => {
        expect(substring('hello', -2, 3)).toEqual('hel');
 });
    test('должна привести отрицательный end к 0', () => {
        expect(substring('hello', 3, -1)).toEqual('hel');
 });
    test('должна привести NaN к 0', () => {
        expect(substring('hello', NaN, 3)).toEqual('hel');
 });
    test('должна вернуть "" если start >= длины строки', () => {
        expect(substring('hello', 5, 7)).toEqual('');
 });
    test('должна вернуть "" для пустой исходной строки', () => {
        expect(substring('', 0, 1)).toEqual('');
 });
    test('должна работать с кириллицей', () => {
        expect(substring('привет', 1, 4)).toEqual('рив');
 });
    test('должна выбросить TypeError если str не строка', () => {
        expect(() => substring(123, 0, 5)).toThrow(TypeError);
 });
    test('должна выбросить TypeError если start не указан или не число', () => {
        expect(() => substring('hello')).toThrow(TypeError);
        expect(() => substring('hello', '0', 5)).toThrow(TypeError);
 });
    test('должна выбросить TypeError если end не число', () => {
        expect(() => substring('hello, 0, 5')).toThrow(TypeError);
 });
});








