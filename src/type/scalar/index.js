/**
 * Created by PBorisov on 19.04.2018.
 */

import { observable, computed, action } from 'mobx';
import Type from '../';
import classRole from '../../decorator/classRole/';

const FORMATS = Symbol.for('type.scalar.formats');

@classRole('TypeScalar')
export default class TypeScalar extends Type {
    defaultView = null;
    @observable
    currentValue = null;
    static [FORMATS] = {};
    static addFormats (formats={}) {
        Object.assign(this[FORMATS], formats);
    }
    static arg2fn (arg) {
        return (!!arg && (typeof arg === 'function')) ? arg : ( () => this.format( arg || {} ) );
    }
    static cmp (v1, v2) {
        return (v1 < v2) ? -1 : (v1 > v2) ? 1 : 0;
    }
    constructor ({...opts}) {
        super(opts);
        this.currentValue = null;
    }
    init (arg) {
        this.defaultView = (!!arg && (typeof arg === 'function')) ? arg : ( () => this.format( arg || {} ) );
        return this;
    }
    @computed
    get isEmpty () {
        return (this.currentValue == null);
    }
    get value () {
        return this.currentValue;
    }
    get forJSON () {
        return this.value;
    }
    get JSON () {
        return !this.isEmpty ? {[this.jsonName || this.name]: this.forJSON} : {};
    }
    set value (newValue) {
        this.setValue(newValue);
    }
    set JSON (json) {
        const name = this.jsonName || this.name;
        ( json.hasOwnProperty( name ) ) && ( this.value = json[ name ] );
    }
    view (arg) {
        const fn = !arg ? this.defaultView
            : (!!arg && (typeof arg === 'function')) ? arg
                : ( () => this.format( arg || {} ) );
        return computed( () => fn.apply(this) ).get();
    }
    toString () {
        return this.defaultView.apply(this);
    }
    format (ModelTypeScalarSettings, { settingsKey, ...opts }) {
        const settings = ( !!settingsKey && ModelTypeScalarSettings.has(settingsKey) ) ? ModelTypeScalarSettings.get(settingsKey) : {};
        return (!!settings && (typeof settings === 'function')) ? settings.apply(this, [opts])
            : ( !this.isEmpty ? this.toLocaleString( Object.assign( {}, (settings || {}), opts ) ) : '' );
    }
    toLocaleString () {
        return this.value.toString();
    }
    compare (cwith) {
        return this.constructor.cmp( this.value, (!!cwith?.constructor?.isTypeScalar ? cwith.value : cwith) );
    }
    @action
    setValue (newValue) {
        this.currentValue = newValue;
    }
}
