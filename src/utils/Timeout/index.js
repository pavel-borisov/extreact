/**
 * Created by PBorisov on 24.04.2018.
 */

import promise from '../../decorator/promise/';

const timeout = promise(function (resolve, reject, fn, d) {
    window.setTimeout(function () {
        try {
            resolve(fn());
        } catch (error) {
            reject(error);
        }
    }, d);
});

export default timeout;
/*
// Example
timeout(function () {
    console.log('timeout 1', (new Date()).valueOf() % 100000);
}, 1000).then(function () {
    return timeout(function () {
        console.log('timeout 2', (new Date()).valueOf() % 100000);
    }, 2000);
}).then(function () {
    return timeout(function () {
        console.log('timeout 3', (new Date()).valueOf() % 100000);
    }, 3000);
});
*/
