import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route1 from './route';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter  } from 'react-router-dom';

ReactDOM.render(<BrowserRouter >
    <Route1 />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
