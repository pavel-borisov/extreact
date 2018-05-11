/*
 * Created by PBorisov on 08.05.18 15:41.
 */

export default function (role) {
    const strRole = String(role);
    return function (Class) {
        const ROLE = Symbol(`extreact.class_role.${strRole}`);
        Object.defineProperties(Class, {
            [ROLE]: {
                configurable: false,
                enumerable: false,
                writable: false,
                value: role,
            },
            [`is${strRole}`]: {
                configurable: false,
                enumerable: false,
                writable: false,
                value: true,
            },
        });
        return Class;
    };
};
