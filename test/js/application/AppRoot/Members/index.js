/*
 * Created by PBorisov on 10.05.18 15:21.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Page from '../../../../../src/page/';
import AppMembersPageView from './view.js';

export default class AppMembersPage extends Page {
    constructor (args) {
        super(null, args);
    }
    render (props) {
        return super.render(AppMembersPageView, props);
    }
}
