/*
 * Created by PBorisov on 10.05.18 17:42.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Page from '../../../../../../../src/page/';
import AppGoodsSGTINCardPageView from './view.js';

export default class AppGoodsSGTINCardPage extends Page {
    constructor (args) {
        super(null, args);
    }
    render (props) {
        return super.render(AppGoodsSGTINCardPageView, props);
    }
}
