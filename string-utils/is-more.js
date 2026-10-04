import { len } from './len.js';

export function isMore(a, b) {
    if (typeof a !== 'string' || typeof b !=='string') {
        throw new TypeError('Аргументы должны быть строками');
    }

    const lenA = len(a);
    const lenB = len(b);
    const minLen = lenA < lenB ? lenA : lenB;

    for (let i = 0; i < minLen; i++) {
        const codeA = a.charCodeAt(i);
        const codeB = b.charCodeAt(i);
        if (codeA !== codeB) {
            return codeA > codeB;
        } 
}

    return lenA > lenB;
}