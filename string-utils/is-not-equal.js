import { isEqual } from './is-equal.js';

export function isNotEqual(a, b) {
    return !isEqual(a, b);
}
