/*
 * Created by PBorisov on 10.05.18 16:00.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import classRole from '../../../../../../src/decorator/classRole/';
import AppPageView from '../../../../page/view.js';

class AppGoodsSGTINPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <h3>GOODS SGTIN COMPONENT</h3>
                    { this.switch || <div>...Loading...</div> }
                </div>
            );
        });
    }
}

export default AppGoodsSGTINPageView;
