import { indexOf } from './index-of.js';

export function includes(str, search) {
    return indexOf(str, search) !==-1;
}
