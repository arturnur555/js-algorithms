import { isLess } from "./is-less";
import { isEqual } from "./is-equal";

export function isLessOrEqual (a, b) {
    return isLess(a, b) || isEqual(a, b);
}