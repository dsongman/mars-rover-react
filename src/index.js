import 'antd/dist/antd.css'; // Load Ant Design CSS before Component CSS
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {LocaleProvider} from 'antd';
import App from './components/App';

import enUS from 'antd/lib/locale-provider/en_US';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
