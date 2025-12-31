import { test, expect } from '@playwright/test';

test('print array values', async () => {
    let arrer: number[] = [1, 2, 3, 4, 2, 3, 4, 1, 3];

    console.log(arrer);

    let feq: Map<number, number> = new Map();
    for (let num of arrer) {
        //freq.set(num, (freq.get(num) || 0) + 1);
        feq.set(num, (feq.get(num) || 0) + 1);
    }

    let name = 'yeivvhs8iu';

    let ch = name[name.length - 3];

    let isNumber = ch >= '0' && ch <= '9';

    console.log(isNumber); // true

});

