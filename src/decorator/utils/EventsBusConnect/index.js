/**
 * Created by PBorisov on 24.04.2018.
 */

function ObjectReducer (eventsBus) {
    const descriptionCommon = {
        configurable: false,
        enumerable  : false,
        writable    : false,
    };
    Object.defineProperty(this, '_emit', {
        ...descriptionCommon,
        value: ((ev, ...params) => eventsBus.emit(this, ev, ...params)),
    });
    Object.defineProperty(this, '_trigger', {
        ...descriptionCommon,
        value: ((emitter, ev, ...params) => {

        }),
    });
    this.destroy = eventsBus.memberDestroyDecorate(this, this.destroy);
    eventsBus.add(this);
    return this;
}

export default function EventsBusConnect (eventsBus) {
    return function (Class) {
        return (...args) => {
            const self = new Class(...args);
            Object.defineProperty(self, '_emit', {
                configurable: false,
                enumerable  : false,
                writable    : false,
                value       : (function (ev, ...params) {
                    eventsBus.emit(self, ev, ...params);
                }).bind(self),
            });
            const destroy = self.destroy;
            self.destroy = (function () {
                !!destroy && destroy.apply(self);
                eventsBus.remove(self);
            }).bind(self);
            eventsBus.add(self);
            return self;
        };
    };
}
