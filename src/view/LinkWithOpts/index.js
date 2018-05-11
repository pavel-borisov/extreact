/*
 * Created by PBorisov on 11.05.18 14:01.
 */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BaseView from '../';
import {b64EncodeUnicode} from '../../utils/Base64/';

class LinkWithOpts extends BaseView {
    render() {
        const {children, history, match, location, to, staticContext, opts, ...rest} = this.props;
        const params = !!opts ? `?${b64EncodeUnicode(opts)}` : '';
        return (
            <Link to={`${to}${params}`} {...rest}>{children}</Link>
        );
    }
}

export default withRouter(LinkWithOpts);
