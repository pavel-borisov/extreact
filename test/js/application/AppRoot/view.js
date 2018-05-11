/*
 * Created by PBorisov on 10.05.18 12:51.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Action from '../../../../src/view/Action/';
import MenuItem from '../../../../src/view/MenuItem/';
import AppPageView from '../../page/view.js';
import TestHeader from '../../view/TestHeader/';

export default class AppRootView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div onClick={ev => this.props.c.eventsBus.emit('body.click', ev)}>
                    <TestHeader level={1}>
                        BASE COMPONENT
                        <Action eventsBus={this.props.c.root.eventsBus} type="body.click" action="nextColor"/>
                    </TestHeader>
                    <ul>
                        {
                            (this.props.c.routes || []).reduce((menuItems, item, index) => {
                                return !!item?.menu ? menuItems.concat(
                                    <li key={item.key || index}>
                                        <MenuItem to={item.path}>{ item.menu.title }</MenuItem>
                                    </li>
                                ) : menuItems;
                            }, [])
                        }
                    </ul>
                    { this.switch || <div>...Loading...</div> }
                </div>
            );
        });
    }
}
