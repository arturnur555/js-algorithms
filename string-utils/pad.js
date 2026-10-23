 import { len } from './len.js';
 /**
 * Дополняет строку символами char до длины length.
 * Если длина уже достаточная — возвращает строку без изменений.
 * char может быть длиннее одного символа — повторяется циклично и обрезается.
 *
 * @param {string} str — исходная строка
 * @param {number} length — целевая длина
 * @param {string} char — строка для дополнения
 * @param {string} side — 'left', 'right' или 'both'
 * @returns {string} — дополненная строка
 * @throws {TypeError} — если str/char/side не строка или length не число
 * @throws {Error} — если side не 'left'/'right'/'both'
 *
 * @example
 *   pad('hi', 5, '-', 'left');   // '---hi'
 *   pad('hi', 5, '-', 'right');  // 'hi---'
 *   pad('hi', 6, '-', 'both');   // '--hi--'
 *   pad('hi', 5, '-', 'both');   // '-hi--'
 *   pad('hi', 7, 'ab', 'left');  // 'ababahi'
 */
export function pad(str, length, char, side) {
    if (typeof str !== 'string') {
        throw new TypeError('str должен быть строкой');
    }
    if (typeof length !== 'number') {
        throw new TypeError('length должен быть числом');
    }
    if (typeof char !== 'string') {
        throw new TypeError('char должен быть строкой');
    }
    if (typeof side !== 'string') {
        throw new TypeError('side должен быть строкой');
    }
    if (side !== 'left' && side !== 'right' && side !== 'both') {
        throw new Error("side должен быть 'left', 'right' или 'both'");
    }

   const padding = length - len(str);
if (padding <= 0) {
    return str;
}

const m = len(char);
const fill = (n) => {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += char[i % m];
    }
    return s;
};

if (side === 'left') {
    return fill(padding) + str;
}
if (side === 'right') {
    return str + fill(padding);
}

const left = Math.floor(padding / 2);
return fill(left) + str + fill(padding - left);
