/**
 * Created by PBorisov on 19.04.2018.
 */

import { observable, computed, action } from 'mobx';
import Type from '../';
import propertyReadonly from '../../decorator/propertyReadonly/';
import classRole from '../../decorator/classRole/';

@classRole('TypeList')
export default class TypeList extends Type {
    decoratorType = null;
    @observable.shallow
    @propertyReadonly
    currentValue = [];
    constructor ({decoratorType, ...opts}) {
        super(opts);
        this.decoratorType = decoratorType;
    }
    @computed
    get isEmpty () {
        //return !this.value.filter( v => !v.isEmpty ).length;
        return !this.value.length;
    }
    get value () {
        return this.currentValue;
    }
    get forJSON () {
        return this.value.reduce((a, v) => a.concat(v.forJSON ), []);
    }
    get JSON () {
        return !this.isEmpty ? {[this.jsonName || this.name]: this.forJSON} : {};
    }
}
