import { len } from './len.js';

export function endsWith(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') {
        throw new TypeError('Аргументы должны быть строками');
    }

    const searchLen = len(search);
    const strLen = len(str);

    if (searchLen === 0) {
        return true;
    }

    if (searchLen > strLen) {
        return false;
    }

    const startIndex = strLen - searchLen;

    for (let i = 0; i < searchLen; i++) {
        if (str[startIndex + i] !== search[i]) {
            return false;
        }
    }
    return true;
}