/*
 * Created by PBorisov on 10.05.18 16:00.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Page from '../../../../../../src/page/';
import {syncLoader} from '../../../../../../src/utils/AsyncComponent/';
import AppGoodsSGTINPageView from './view.js';

import List from './List/';
import Card from './Card/';

const routes = [
    {
        path: '/goods/sgtin/',
        exact: true,
        redirect: '/goods/sgtin/list/',
    },
    {
        path: '/goods/sgtin/list/',
        exact: false,
        //loader: () => System.import('./List/'),
        loader: () => syncLoader(List),
    },
    {
        path: '/goods/sgtin/:sgtin/',
        exact: false,
        //loader: () => System.import('./Card/'),
        loader: () => syncLoader(Card),
    },
];

export default class AppGoodsSGTINPage extends Page {
    constructor (args) {
        super(routes, args);
    }
    render (props) {
        return super.render(AppGoodsSGTINPageView, props);
    }
}
