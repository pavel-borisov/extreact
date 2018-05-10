/*
 * Created by PBorisov on 10.05.18 17:34.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import classRole from '../../../../../../../src/decorator/classRole/';
import AppPageView from '../../../../../page/view.js';

class AppGoodsSGTINListPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <h4>GOODS SGTIN List COMPONENT</h4>
                    <ul>
                        {
                            [...Array(10)].map((und, index) => (
                                <li key={index+1}>
                                    <Link to={`/goods/sgtin/${index+1}`}>{`SGTIN ${index+1}`}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            );
        });
    }
}

export default AppGoodsSGTINListPageView;
