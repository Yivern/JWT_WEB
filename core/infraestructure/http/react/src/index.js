import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Routes from './Routes';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
);
