/*
 * Created by PBorisov on 07.05.18 15:24.
 */

export default function promise () {
    let response = null;
    if ( arguments.length < 3 ) {
        const [ arg=null ] = arguments;
        if ( !!arg && (typeof arg === 'function') ) {
            response = function () {
                const args = [...arguments];
                return new Promise( (resolve, reject) => arg.apply(this, [resolve, reject, ...args]) );
            };
        } else {
            response = new Promise( (resolve, reject) => ((arguments.length === 1) ? resolve( arg ) : resolve()) );
        }
    } else if ( arguments.length === 3 ) {
        const [ target, key, descriptor ] = arguments;
        response = !!descriptor.value ? {
            configurable : false,
            enumerable   : true,
            writable     : false,
            value        : function () {
                const args = [...arguments];
                return new Promise( (resolve, reject) => descriptor.value.apply(this, [resolve, reject, ...args]) );
            },
        } : !!descriptor.get ? {
            configurable : false,
            enumerable   : true,
            get          : function () {
                return new Promise( (resolve, reject) => descriptor.get.apply(this, [resolve, reject]) );
            },
        } : descriptor;
    }
    return response;
}
