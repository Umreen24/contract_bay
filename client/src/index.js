import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BaseLayout from './components/BaseLayout';
import reducer from './store/reducer';
import Register from './components/Register';
import Login from './components/Login';
import {setAuthHeader} from './utils/setAuthHeader';
import ViewContracts from './components/ViewContracts';
import FilterContracts from './components/FilterContracts';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let token = localStorage.getItem('jwt')
setAuthHeader(token)

ReactDOM.render(

    <BrowserRouter>
    <Provider store={store}>
        <BaseLayout>
            <Switch>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/all-contracts' component={ViewContracts}/>
                <Route path='/filter-contracts' component={FilterContracts}/>
            </Switch>
        </BaseLayout>
    </Provider>
    </BrowserRouter>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
