import { len } from "./len";

export function indexOf(str, search) {
    if(typeof str !== 'string' || typeof search !== 'string') {
        throw new TypeError('Аргуметы должны быть строками');
    }

    const strLen = len(str);
    const searchLen = len (search);

    if (searchLen === 0) {
        return 0;
    }

    if (searchLen > strLen) {
        return -1;
    }

    for (let i = 0; i <= strLen - searchLen; i++) {
        let match = true;

        for (let j =0; j < searchLen; j++) {
            if (str[i +j] !== search[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
}
