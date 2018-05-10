/*
 * Created by PBorisov on 10.05.18 12:56.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import classRole from '../../../../../src/decorator/classRole/';
import AppPageView from '../../../page/view.js';

class AppMainPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <h2>MAIN COMPONENT</h2>
                </div>
            );
        });
    }
}

export default AppMainPageView;
