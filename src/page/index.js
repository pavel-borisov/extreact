/*
 * Created by PBorisov on 04.05.18 10:02.
 */

import { observable, computed, action, observe } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import classRole from '../decorator/classRole/';
import promise from '../decorator/promise/';

@classRole('Controller')
class Page {
    @observable
    isReady = false;
    routes  = [];
    parent  = null;
    constructor (routes, args={}) {
        const {parent=null, ...inArgs} = args;
        this.isReady = false;
        this.routes  = routes;
        this.parent  = parent;
        this.init(inArgs).then(
            action((...outArgs) => {
                this.isReady = true;
                return outArgs;
            }),
            error => console.error(error),
        );
    }
    get root () {
        return !!this.parent ? this.parent.root : this;
    }
    @promise
    init (resolve, reject) {
        resolve();
    }
    @promise
    destroy (resolve, reject) {
        resolve();
    }
    render (View, props={}) {
        return (
            <View c={this} {...props} />
        );
    }
}

export default Page;
