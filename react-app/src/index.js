import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const appMountingId = "mf-react-app";
let root = null;

export const bootstrap = async () => {
    console.log('React app is bootstrapping...');
};

export const mount = async (props) => {
    const container = document.getElementById(appMountingId);
    
    if (container && !root) {
        root = ReactDOM.createRoot(container);  // Only create root if it doesn't already exist
    }

    if (root) {
        root.render(<App />);
        console.log('React App Mounted', { props });
    } else {
        console.error('React root element is missing');
    }
};

export const unmount = async () => {
    if (root) {
        root.unmount();  // Unmount the app when it's already mounted
        root = null;  // Clear the root after unmounting
        console.log('React App Unmounted');
    }
};

// Only render in standalone mode (useful for local development)
if (!window.singleSpaNavigate) {
    mount({});
}
