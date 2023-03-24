import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Home } from './Views/Home';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const App: React.FC = () => (
    <div className="App">
        <Home />
    </div>
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);