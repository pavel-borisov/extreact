/*
 * Created by PBorisov on 10.05.18 15:19.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import MenuItem from '../../../../../src/view/MenuItem/';
import Action from '../../../../../src/view/Action/';
import AppPageView from '../../../page/view.js';
import TestHeader from '../../../view/TestHeader/';

export default class AppGoodsPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <TestHeader level={2}>
                        GOODS COMPONENT
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
