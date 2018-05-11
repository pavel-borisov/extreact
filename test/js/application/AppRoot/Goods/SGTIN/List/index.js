/*
 * Created by PBorisov on 10.05.18 17:34.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Page from '../../../../../../../src/page/';
import AppGoodsSGTINListPageView from './view.js';

export default class AppGoodsSGTINListPage extends Page {
    constructor (args) {
        super(null, args);
    }
    render (props) {
        return super.render(AppGoodsSGTINListPageView, props);
    }
}
