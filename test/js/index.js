/*
 * Created by PBorisov on 07.05.18 13:02.
 */

import React from 'react';
import Application from '../../src/';
import classRole from '../../src/decorator/classRole/';
import promise from '../../src/decorator/promise/';

@classRole('Application')
class TestApplication extends Application {
    @promise
    init (resolve, reject) {
        window.setTimeout(() => resolve(), 1000);
    }
    @promise
    destroy (resolve, reject) {
        window.setTimeout(() => resolve(), 1000);
    }
}

export default TestApplication;
