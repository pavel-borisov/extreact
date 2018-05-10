/**
 * Created by PBorisov on 24.04.2018.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TestApplication from './';

const rootRoutes = [
    {
        path: '/',
        exact: false,
        loader: () => System.import('./application/AppRoot/'),
        comment: 'Root application',
    }
];

ReactDOM.render(
    <TestApplication theme="test" routes={rootRoutes} />,
    document.getElementById('extreact-container'),
);
