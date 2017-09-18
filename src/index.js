import 'antd/dist/antd.css'; // Load Ant Design CSS before Component CSS
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {LocaleProvider} from 'antd';
import App from './components/App';

import enUS from 'antd/lib/locale-provider/en_US';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import photosApp from './reducers';

let store = createStore(
  photosApp,
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
