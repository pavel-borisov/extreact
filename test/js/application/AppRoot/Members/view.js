/*
 * Created by PBorisov on 10.05.18 15:22.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import classRole from '../../../../../src/decorator/classRole/';
import AppPageView from '../../../page/view.js';

export default class AppMembersPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <h2>MEMBERS COMPONENT</h2>
                </div>
            );
        });
    }
}
