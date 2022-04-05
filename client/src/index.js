import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

import App from './App';
import { ConetxtProvider } from './SocketContext';

ReactDOM.render(
    <ConetxtProvider>
        <App />
    </ConetxtProvider>,
document.getElementById('root')
);