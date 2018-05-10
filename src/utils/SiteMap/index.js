/*
 * Created by PBorisov on 04.05.18 18:58.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../AsyncComponent/';

export default class SiteMap {
    router = null;
    menu   = null;
    constructor (tree) {
        this.menu   = this.makeMenu(tree).sort( (a, b) => ((a.index > b.index) ? 1 : (a.index < b.index) ? -1 : 0) );
        this.router = this.makeRouterSwitch(tree);
    }
    makeMenu (item, basePath='', menu=[]) {
        if (!!item) {
            const menuItem = !!item.menu ? {...item.menu, path: `${basePath}${item.path}`} : null;
            return []
                .concat(!!menuItem ? menuItem : [])
                .concat(
                    (!!item.children ? item.children : []).reduce((a, ch) => this.makeMenu(ch, `${basePath}${item.path}`, a), menu)
                );
        }
        return menu;
    }
    makeRouterSwitch (item=null, basePath='', key=0) {
        if (!!item) {
            const children = [].concat(!!item.children ? item.children : []);
            return !!children.length ? (
                <Switch key={key}>
                    {this.makeRouterRoute(item, basePath, `${key}-root`)}
                    {children.map((ch, i) => this.makeRouterSwitch(ch, `${basePath}${item.path}`, key + 1))}
                </Switch>
            ) : this.makeRouterRoute(item, basePath, key);
        }
    }
    makeRouterRoute (item, basePath, key) {
        const PageComponent = asyncComponent(item.loader);
        return (
            <Route key={key}
                   exact={item.exact}
                   path={`${basePath}${item.path}`}
                   render={props => <PageComponent {...props} {...item.props} mainMenu={this.menu} />} />
        );
    }
}
