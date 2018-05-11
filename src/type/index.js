/**
 * Created by PBorisov on 19.04.2018.
 */

import classRole from '../decorator/classRole/';

@classRole('Type')
export default class Type {
    name     = null;
    jsonName = null;
    title    = null;
    constructor ( {name, ...opts} ) {
        this.name     = name          || null;
        this.jsonName = opts.jsonName || null;
        this.title    = opts.title    || null;
    }
}
