/*
 * Created by PBorisov on 10.05.18 15:19.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import classRole from '../../../../../src/decorator/classRole/';
import MenuItem from '../../../../../src/view/MenuItem/';
import AppPageView from '../../../page/view.js';

class AppGoodsPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <h2>GOODS COMPONENT</h2>
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

export default AppGoodsPageView;
