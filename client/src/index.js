import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

import App from './App';
import { ConetxtProvider } from './SocketContext';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <ConetxtProvider>
        <App />
    </ConetxtProvider>,
document.getElementById('root')
);