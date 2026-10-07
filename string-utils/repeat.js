export function repeat(str, count) {

    if(typeof str !== 'string') {
        throw new TypeError('str должен быть строкой');
    }

    if (count === undefined) {
        return '';
    }

    if (typeof count !== 'number') {
        throw new TypeError('count должен быть числом');
    }

    if (count < 0) {
        throw new RangeError('count должен быть не отрицательным');
    }

    const times = Math.floor(count);

    let result = '';
    for (let i = 0; i < times; i++) {
        result += str;
    }

    return result;
}