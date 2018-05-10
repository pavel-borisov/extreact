/*
 * Created by PBorisov on 10.05.18 18:49.
 */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BaseView from '../';

class MenuItem extends BaseView {
    render() {
        const {children, history, match, location, to, staticContext, activeClassName, activeStyle, ...rest} = this.props;
        const {className, style} = rest;
        return this.isActive ? (
            <span className={activeClassName} style={activeStyle}>{children}</span>
        ) : (
            <Link {...{to, ...rest}}>{children}</Link>
        );
    }
    get isActive () {
        const {location, to} = this.props, {pathname} = location;
        if (to === '/') {
            return (to === pathname);
        } else {
            return String(pathname).startsWith(to);
        }
    }
}

export default withRouter(MenuItem);
