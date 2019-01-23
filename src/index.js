import React from 'react';
import ReactDOM from 'react-dom';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
