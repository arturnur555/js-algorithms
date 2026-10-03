import {len} from './len.js';

export function isEqual(a,b) {
if (typeof a!== 'string' || typeof b !== 'string') {
throw new TypeError('Аргументы должны быть строками');
 }
 if (len(a) !== len(b)) {
    return false
 }
  for (let i = 0; i < len(a); i++) {
    if (a.charCodeAt(i) !== b.charCodeAt(i)) {
        return false;
    }
 }

 return true;
}