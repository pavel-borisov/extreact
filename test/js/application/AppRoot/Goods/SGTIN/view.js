/*
 * Created by PBorisov on 10.05.18 16:00.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Action from '../../../../../../src/view/Action/';
import AppPageView from '../../../../page/view.js';
import TestHeader from '../../../../view/TestHeader/';

export default class AppGoodsSGTINPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <TestHeader level={3}>
                        GOODS SGTIN COMPONENT
                        <Action eventsBus={this.props.c.root.eventsBus} type="body.click" action="nextColor"/>
                    </TestHeader>
                    { this.switch || <div>...Loading...</div> }
                </div>
            );
        });
    }
}
