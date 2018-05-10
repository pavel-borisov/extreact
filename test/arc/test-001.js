/*
 * Created by PBorisov on 04.05.18 12:30.
 */

import { observable, computed, action, observe } from 'mobx';
import jQuery from 'jquery';
import TestClassDecoratorSingleton from './test/decorator/singleton.js';
import React from 'react';
import ReactDOM from 'react-dom';
import EventsBus from '../../src/utils/EventsBus/';
import DOM from '../../src/utils/DOM/'; // attacheEvent
import TestReactComponent from './test/components/TestReactComponent/';
import Action from '../../src/view/Action/';

const eventsBus = new EventsBus();

jQuery( function () {
    TestClassDecoratorSingleton();
    /*
        DOM.attacheEvent(window, 'resize', ev => eventsBus.emit('window.resize', ev));
        DOM.attacheEvent(document.body, 'click', ev => eventsBus.emit('window.click', ev));
        eventsBus.on('window.**', console.log);
        eventsBus.on('window.click', console.log);
        DOM.attacheEvent(document.getElementById('extreact-container'), 'click', ev => eventsBus.emit('body.click', ev));
    */

    eventsBus.on('testReact.click', ev => console.log('--- testReact.click', ev));
    ReactDOM.render(
        <div className="extreact-app_container" onClick={ ev => eventsBus.emit('body.click', ev) }>
            <TestReactComponent id="testReact" eventsBus={eventsBus}>
                <Action eventsBus={eventsBus} type="body.click" action="bodyClickHandler" />
                {/*<Action eventsBus={eventsBus} type="body.click" action={ (target, ev) => { console.log(this, target, ev); } } />*/}
            </TestReactComponent>
        </div>,
        document.getElementById('extreact-container'),
    );
} );



// const actions = new TimeoutChains();
// actions
//     .then( () => { emitter._emit({type: 'timeout'}, 100) }, 100 )
//     .then( () => { emitter._emit({type: 'timeout'}, 200) }, 200 )
//     .then( () => { emitter._emit({type: 'timeout'}, 300) }, 300 )
//     .then( () => { emitter._emit({type: 'timeout'}, 400) }, 400 )
//     //.then( () => { emitter.destroy(); listener.destroy(); }, 500 )
//     .start();
