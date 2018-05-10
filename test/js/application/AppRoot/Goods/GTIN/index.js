/*
 * Created by PBorisov on 10.05.18 16:02.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Page from '../../../../../../src/page/';
import classRole from '../../../../../../src/decorator/classRole/';
import AppGoodsGTINPageView from './view.js';

@classRole('Controller')
class AppGoodsGTINPage extends Page {
    constructor (args) {
        super(null, args);
    }
    render (props) {
        return super.render(AppGoodsGTINPageView, props);
    }
}

export default AppGoodsGTINPage;
