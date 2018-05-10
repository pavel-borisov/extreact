/*
 * Created by PBorisov on 10.05.18 11:36.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import classRole from '../decorator/classRole/';
import {switchRouting} from '../utils/AsyncComponent/';

@observer
@classRole('View')
class PageView extends React.Component {
    constructor (props) {
        super(props);
    }
    get switch () {
        const {isReady, routes} = this.props.c, Switch = (isReady && !!routes) ? switchRouting(routes) : null;
        return !!Switch ? <Switch parent={this.props.c} /> : null;
    }
    render (fn) {
        return this.props.c.isReady ? fn.apply(this) : null;
    }
}

export default PageView;
