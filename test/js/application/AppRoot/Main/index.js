/*
 * Created by PBorisov on 10.05.18 12:56.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Page from '../../../../../src/page/';
import AppMainPageView from './view.js';

export default class AppMainPage extends Page {
    constructor (args) {
        super(null, args);
    }
    render (props) {
        return super.render(AppMainPageView, props);
    }
}
