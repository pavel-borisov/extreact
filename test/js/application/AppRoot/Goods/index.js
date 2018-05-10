/*
 * Created by PBorisov on 10.05.18 15:18.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Page from '../../../../../src/page/';
import classRole from '../../../../../src/decorator/classRole/';
import AppGoodsPageView from './view.js';

const routes = [
    {
        path: '/goods/',
        exact: true,
        redirect: '/goods/sgtin/',
    },
    {
        path: '/goods/sgtin/',
        exact: false,
        loader: () => System.import('./SGTIN/'),
        menu: {title: 'Реестр SGTIN', index: 1},
    },
    {
        path: '/goods/gtin/',
        exact: false,
        loader: () => System.import('./GTIN/'),
        menu: {title: 'Реестр описаний', index: 2},
    },
];

@classRole('Controller')
class AppGoodsPage extends Page {
    constructor (args) {
        super(routes, args);
    }
    render (props) {
        return super.render(AppGoodsPageView, props);
    }
}

export default AppGoodsPage;
