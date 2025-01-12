import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerApplication, start } from 'single-spa';

// Register the React App
registerApplication({
    name: '@react/react-app',
    app: () => System.import('http://localhost:3001/react-app.js'), // URL to React app
    activeWhen: ['/react'], // This URL path will trigger React app
    customProps: { user: { name: 'John Doe' }, theme: 'dark' },
  });
  
// Register the Vue App
registerApplication({
    name: '@vue/vue-app',
    app: () => System.import('http://localhost:3002/vue-app.js'), // URL to Vue app
    activeWhen: ['/vue'], // This URL path will trigger Vue app
    customProps: { user: { name: 'John Doe' }, theme: 'light' },
  });

// Render the shell app's layout
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

start();
