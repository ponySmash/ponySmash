
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-R47V0VDB3D');

// import initReactFastclick from 'react-fastclick';
// initReactFastclick();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App key='app' />
    </ StrictMode>
);
