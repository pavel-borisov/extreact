/*
 * Created by PBorisov on 08.05.18 15:41.
 */

export default function (role) {
    const strRole = String(role);
    const isName  = strRole.charAt(0).toUpperCase() + strRole.slice(1).toLowerCase()
    return function (Class) {
        const ROLE = Symbol();
        Object.defineProperties(Class, {
            [ROLE]: {
                configurable: false,
                enumerable: false,
                writable: false,
                value: role,
            },
            [`is${isName}`]: {
                configurable: false,
                enumerable: false,
                writable: false,
                value: true,
            },
        });
        return Class;
    };
};
