/*
 * Created by PBorisov on 11.05.18 17:12.
 */

export default function propertyReadonly (target, key, descriptor) {
    return Object.assign(descriptor, { writable: false });
}
