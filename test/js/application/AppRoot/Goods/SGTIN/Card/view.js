/*
 * Created by PBorisov on 10.05.18 17:43.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import classRole from '../../../../../../../src/decorator/classRole/';
import AppPageView from '../../../../../page/view.js';

class AppGoodsSGTINCardPageView extends AppPageView {
    render () {
        return super.render(() => {
            return (
                <div>
                    <h4>{`GOODS SGTIN ${this.props.match.params.sgtin} card COMPONENT`}</h4>
                    {(this.props.history.length > 0) && <a href="#" onClick={this.onBackHandler.bind(this)}>Назад</a>}
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

export default AppGoodsSGTINCardPageView;
