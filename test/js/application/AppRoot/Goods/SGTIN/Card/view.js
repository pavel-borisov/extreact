/*
 * Created by PBorisov on 10.05.18 17:43.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import {b64DecodeUnicode} from '../../../../../../../src/utils/Base64/';
import Action from '../../../../../../../src/view/Action/';
import AppPageView from '../../../../../page/view.js';
import TestHeader from '../../../../../view/TestHeader/';

export default class AppGoodsSGTINCardPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <TestHeader level={4}>
                        {`GOODS SGTIN ${this.props.match.params.sgtin} card COMPONENT`}
                        <Action eventsBus={this.props.c.root.eventsBus} type="body.click" action="nextColor"/>
                    </TestHeader>
                    {(this.props.history.length > 0) && <a href="#" onClick={this.onBackHandler.bind(this)}>Назад</a>}
                    <pre>
                        {
                            JSON.stringify(b64DecodeUnicode(this.props.location.search))
                        }
                    </pre>
                </div>
            );
        });
    }
    onBackHandler (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.props.history.goBack();
    }
}
