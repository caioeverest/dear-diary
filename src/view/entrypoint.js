import React from 'react';
import { hydrate } from 'react-dom';
import App from './Components/App';

hydrate(<App host={window.location.host} preloadedBoards={window.preloadedBoards}/>, document.getElementById('app'));
