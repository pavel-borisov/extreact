/**
 * Created by PBorisov on 25.04.2018.
 */

export default function singleton (targetClass) {
    const INSTANCE = Symbol('class.singleton.instance');
    Object.defineProperty(targetClass, 'getInstance', {
        configurable: false,
        enumerable  : false,
        writable    : false,
        value       : ((...args) => {
            if (!targetClass[INSTANCE]) {
                targetClass[INSTANCE] = new targetClass(...args);
            }
            return targetClass[INSTANCE];
        })
    });
    return targetClass;
}
