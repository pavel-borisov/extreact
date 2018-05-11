/*
 * Created by PBorisov on 10.05.18 19:34.
 */

import { observable, computed, action, observe } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import BaseView from '../../../../src/view/';
import classRole from '../../../../src/decorator/classRole/';

@classRole('View')
export default class TestHeader extends BaseView {
    static colorsSet = ['red', 'green', 'blue'];
    @observable
    color = 0;
    @computed
    get currentColor () {
        return this.constructor.colorsSet[this.color];
    }
    @action
    nextColor () {
        this.color = (this.color + 1) % this.constructor.colorsSet.length;
    }
    render () {
        const {level=1, className, style, children} = this.props, Tag = `h${level}`;
        return (
            <Tag className={className}
                 style={Object.assign({color: this.currentColor}, (style || {}))}>{children}</Tag>
        );
    }
}
