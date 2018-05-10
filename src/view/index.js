/*
 * Created by PBorisov on 03.05.18 10:19.
 */

import { observable, computed, action, observe } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import Action from './Action/';

@observer
export default class View extends React.Component {
    actions = [];
    constructor (props) {
        super(props);
        this.actions = [];
        this.eventsEmit = this.eventsEmit.bind(this);
    }
    componentDidMount () {
        this.init();
    }
    componentWillUnmount () {
        this.destroy();
    }
    init () {
        this.actions  = [].concat(!!this.props.children ? this.props.children : []).reduce((a, ch) => {
            if (!!ch.$$typeof && !!ch.type && (ch.$$typeof === Symbol.for('react.element')) && (ch.type === Action)) {
                const {eventsBus, type, action} = ch.props;
                const exec = (typeof action === 'function') ? ((...args) => action(this, ...args))
                    : (typeof this[action] === 'function') ? this[action].bind(this) : null;
                !!exec && a.push(eventsBus.on(type, exec));
            }
            return a;
        }, []);
    }
    destroy () {
        this.actions.forEach(action => action.remove());
    }
    eventsEmit (ev) {
        console.log('===', ev);
        ev.stopPropagation();
        const event = {...ev};
        const {eventsBus} = this.props;
        !!eventsBus && !!this.id && eventsBus.emit(`${this.id}.${event.type}`, {...event, targetReactComponent: this});
    }
    render () {
        return null;
    }
}
