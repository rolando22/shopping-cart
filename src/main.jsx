import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components';
import { FiltersProvider } from './contexts/filters';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FiltersProvider>
            <App />
        </FiltersProvider>
    </React.StrictMode>,
);
