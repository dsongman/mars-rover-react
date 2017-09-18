import 'antd/dist/antd.css'; // Load Ant Design CSS before Component CSS
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {LocaleProvider} from 'antd';
import App from './components/App';

import enUS from 'antd/lib/locale-provider/en_US';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  document.getElementById('root')
);
registerServiceWorker();
