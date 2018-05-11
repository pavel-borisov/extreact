/*
 * Created by PBorisov on 10.05.18 16:02.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import AppPageView from '../../../../page/view.js';

export default class AppGoodsGTINPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <h3>GOODS GTIN COMPONENT</h3>
                </div>
            );
        });
    }
}
