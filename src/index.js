/*
 * Created by PBorisov on 03.05.18 17:00.
 */

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import {switchRouting} from './utils/AsyncComponent/';
import classRole from './decorator/classRole/';
import promise from './decorator/promise/';

@observer
@classRole('Application')
class Application extends React.Component {
    @observable
    isReady = false;
    constructor (props) {
        super(props);
        this.isReady = false;
    }
    componentDidMount () {
        this.init().then(
            action(() => (this.isReady = true)),
            error => console.error(error)
        );
    }
    componentWillUnmount () {
        this.destroy().then(
            action(() => (this.isReady = false)),
            error => console.error(error)
        );
    }
    @promise
    init (resolve, reject) {
        resolve();
    }
    @promise
    destroy (resolve, reject) {
        resolve();
    }
    render () {
        const Switch = this.isReady ? switchRouting(this.props.routes) : null;
        return (
            <HashRouter>
                <div className={`extreact-app_container ${this.props.theme || ''}`}>
                    { !!Switch ? <Switch root /> : <div>...Loading...</div> }
                </div>
            </HashRouter>
        );
    }
}

export default Application;
