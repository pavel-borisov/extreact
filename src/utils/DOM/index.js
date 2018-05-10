/*
 * Created by PBorisov on 27.04.18 20:05.
 */

export default {
    attacheEvent: function (domObj, type, callback) {
        if (domObj == null || (typeof domObj == 'undefined')) {
            return;
        } else if (domObj.addEventListener) {
            domObj.addEventListener(type, callback, false);
        } else if (domObj.attachEvent) {
            domObj.attachEvent(`on${type}`, callback);
        } else {
            domObj[`on${type}`] = callback;
        }
    }
};
