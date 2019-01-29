import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from  './client/store/configureStore.dev';
import {Provider} from 'react-redux';
import routes from  './common/routers';
import 'bootstrap/dist/css/bootstrap.css';

let store = configureStore();

ReactDOM.render(<Provider store={store}>
                    {routes}
                </Provider>, document.getElementById('root'));


serviceWorker.unregister();
