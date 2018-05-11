/*
 * Created by PBorisov on 10.05.18 17:34.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Action from '../../../../../../../src/view/Action/';
import LinkWithOpts from '../../../../../../../src/view/LinkWithOpts/';
import AppPageView from '../../../../../page/view.js';
import TestHeader from '../../../../../view/TestHeader/';

export default class AppGoodsSGTINListPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <TestHeader level={4}>
                        GOODS SGTIN List COMPONENT
                        <Action eventsBus={this.props.c.root.eventsBus} type="body.click" action="nextColor"/>
                    </TestHeader>
                    <ul>
                        {
                            [...Array(10)].map((und, index) => (
                                <li key={index+1}>
                                    <LinkWithOpts to={`/goods/sgtin/${index+1}/`}
                                                  opts={ {a:1, b:{b1:1, b2:2}} }>{`SGTIN ${index+1}`}</LinkWithOpts>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            );
        });
    }
}
