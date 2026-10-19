import { len } from "./len";
/**
 * Возвращает индекс первого вхождения подстроки search в строке str.
 * Наивный алгоритм поиска (скользящее окно).
 * Если search не найден — возвращает -1.
 *
 * @param {string} str — строка, в которой ищем
 * @param {string} search — подстрока для поиска
 * @returns {number} — индекс первого вхождения или -1
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   indexOf('hello', 'll');    // 2
 *   indexOf('hello', 'he');    // 0
 *   indexOf('hello', 'lo');    // 3
 *   indexOf('hello', 'xyz');   // -1
 *   indexOf('hello', '');      // 0
 */
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
