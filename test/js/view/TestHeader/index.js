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
    render () {
        const {level=1} = this.props;
    }
}
