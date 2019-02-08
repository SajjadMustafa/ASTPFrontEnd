import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Inventory from './Inventory'
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Inventory />
    </Provider>
    , document.getElementById('astp'));




//ReactDOM.render(<Inventory />, document.getElementById('astp'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
