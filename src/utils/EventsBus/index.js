/**
 * Created by PBorisov on 23.04.2018.
 */

import EventEmitter2 from 'eventemitter2';

class EventHandler {
    e2      = null;
    type    = null;
    handler = null;
    constructor (e2, type, handler) {
        this.e2      = e2;
        this.type    = type;
        this.handler = handler;
        this.e2.on(this.type, this.handler);
    }
    remove () {
        this.e2.off(this.type, this.handler);
    }
}

export default class EventsBus {
    e2 = null;
    constructor (opts={}) {
        this.e2 = new EventEmitter2(Object.assign({wildcard: true, delimiter: '.', newListener: true, maxListeners: 100, verboseMemoryLeak: true}, opts));
    }
    on (type, handler) {
        return new EventHandler(this.e2, type, handler);
    }
    emit (...args) {
        this.e2.emit(...args);
    }
    emitAsync (...args) {
        this.e2.emitAsync(...args);
    }
}
