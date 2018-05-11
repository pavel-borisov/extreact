/*
 * Created by PBorisov on 11.05.18 18:50.
 */

import TypeScalar from '../';
import classRole from '../../../decorator/classRole/';

@classRole('TypeString')
export default class TypeString extends TypeScalar {
    constructor (name) {
        super(name);
        this.currentValue = '';
    }
    get isEmpty () {
        return !this.currentValue.length;
    }
    get value () {
        return super.value;
    }
    set value (newValue) {
        super.value = (newValue != null) ? String(newValue) : '';
    }
    format (opts) {
        return super.format(ModelTypeScalarStringSettings, opts);
    }
    pxWidth (font) {
        const c = document.createElement('canvas').getContext('2d');
        c.font = font;
        return c.measureText(super.value).width;
    }
}

TypeString.addFormats({
    upper: function () {
        return String(this.value).toLocaleUpperCase();
    },
    lower: function () {
        return String(this.value).toLocaleLowerCase();
    },
});
