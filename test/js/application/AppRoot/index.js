/*
 * Created by PBorisov on 10.05.18 12:47.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Page from '../../../../src/page/';
import EventsBus from '../../../../src/utils/EventsBus/';
import AppRootView from './view.js';

const routes = [
    {
        path: '/',
        exact: true,
        loader: () => System.import('./Main/'),
        menu: {title: 'Главная', index: 0},
    },
    {
        path: '/goods/',
        exact: false,
        loader: () => System.import('./Goods/'),
        menu: {title: 'Товары', index: 1},
    },
    {
        path: '/members/',
        exact: false,
        loader: () => System.import('./Members/'),
        menu: {title: 'Участники', index: 2},
    },
];

export default class AppRoot extends Page {
    eventsBus = null;
    constructor (args) {
        super(routes, args);
        this.eventsBus = new EventsBus();
    }
    render (props={}) {
        return super.render(AppRootView, props);
    }
}
