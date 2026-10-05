import { isMore } from "./is-more";
import { isEqual } from "./is-equal";

export function isMoreOrEqual(a, b) {
    return isMore(a, b) || isEqual(a, b);
}