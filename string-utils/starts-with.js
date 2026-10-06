import { len } from './len.js';

export function startsWith(str, search) {
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

 for (let i = 0; i < searchLen; i++) {
    if (str[i] !== search[i]) {
        return false;
    }
 }

 return true;
}