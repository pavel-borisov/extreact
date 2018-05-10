/*
 * Created by PBorisov on 04.05.18 18:29.
 */

import { observable, computed, action, observe } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppRootView from "../../../test/js/application/AppRoot/view";
import promise from '../../decorator/promise/';

const syncLoader = promise(function (resolve, reject, Component) {
    resolve({default: Component});
});

export {syncLoader};

export function switchRouting (routes=[]) {
    return class SwitchRouting extends React.Component {
        render () {
            return (
                <Switch>
                    {
                        routes.map((route, index) => {
                            const key = route?.key || (index + 1);
                            if (!!route?.loader) {
                                const Component = asyncComponent(route.loader);
                                return (
                                    <Route key={key}
                                           exact={route.exact}
                                           path={route.path}
                                           render={props => <Component {...props} {...this.props} />} />
                                );
                            } else if (!!route?.redirect) {
                                return (
                                    <Redirect key={key}
                                              exact={route.exact}
                                              from={route.path}
                                              to={route.redirect} />
                                );
                            }
                            return null;
                        })
                    }
                </Switch>
            );
        }
    };
}

export function asyncComponent (loader) {
    const STORE = Symbol('componentLoader.store');
    return observer(
        class AsyncComponent extends React.Component {
            static [STORE] = null;
            @observable
            Component = null;
            componentWillMount () {
                if (!this.constructor[STORE]) {
                    loader().then(
                        action(module => {
                            this.constructor[STORE] = module.default;
                            this.Component = this.constructor[STORE];
                        }),
                        error => console.error('!!!', error)
                    );
                } else {
                    this.Component = this.constructor[STORE];
                }
            }
            render () {
                return !!this.Component
                    ? this[this.Component.isController ? 'renderControlledComponent' : 'renderSimpleComoinent']()
                    : null;
            }
            renderSimpleComoinent () {
                const Component = this.Component;
                return <Component {...this.props} />;
            }
            renderControlledComponent () {
                const {parent=null, ...props} = this.props, Component = this.Component;
                return (new Component ({parent})).render(props);
            }
        }
    );
}
